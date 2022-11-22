import * as React from 'react';
import {useState, useEffect } from "react"
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Button, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import { updateBeforeDraft } from '../../services/beforeDraft.service';
import { getBeforeDraftById } from "../../services/beforeDraft.service"

import Box from "@mui/material/Box";

export default function ModifDraft(props:any) {
    const [start, setStart] = useState<Dayjs | null>(null);
    const [end, setEnd] = useState<Dayjs | null>(null)
    const  [data, setData] = useState()
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();
  
    useEffect(()=> {
        const fetchDraft = async(id:any) => {
            const data = await getBeforeDraftById(id).then((result:any)=> { return result })
            setData(data)
        }

        fetchDraft(props.update._id)
        
    },[props.update._id]) 
  
    console.log(data)
    
    const onSubmit = async(id:any, data:any) => {
          data.start_date = start
          data.end_date = end
          await updateBeforeDraft(id, data)
          reset()
    }
    
    return (
      <Box 
      sx={{
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}
>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ maxWidth: 200, margin:"10px"}}>
          <Typography variant="h5" color="secondary">Nouvelle Draft</Typography>
          <TextField {...register("name", {required:true})} defaultValue="" id="outlined-basic" color="secondary" label="Nom" variant="outlined" sx={{ input: { borderRadius: '4px', } }} />
  
          <DesktopDatePicker
            label="Date de debut"
            inputFormat="DD/MM/YYYY"
            value={start}
            onChange={(newValue)=> {setStart(newValue)}}
            renderInput={(params) => <TextField {...params} />}

          />
          <DesktopDatePicker
            label="Date de fin"
            inputFormat="DD/MM/YYYY"
  
            value={end}
            minDate={start}
            onChange={(newValue)=> {setEnd(newValue)}}
            renderInput={(params) => <TextField {...params} />}
          />
          <Button onClick={props.handleClose}
            type="submit"
            variant="contained"
            color="primary"
          >
            Valider
          </Button>
          </Box>
          </form>
        </Stack>
      </LocalizationProvider >
      </Box>
    );
  }