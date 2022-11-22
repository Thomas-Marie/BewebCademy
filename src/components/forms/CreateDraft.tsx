import * as React from 'react';
import {useState} from "react"
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Button, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import { createBeforeDraft } from '../../services/beforeDraft.service';
import Box from "@mui/material/Box";

export default function CreateDraft() {
    const [start, setStart] = useState<Dayjs | null>(null);
    const [end, setEnd] = useState<Dayjs | null>(null)
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();
  
  
    const onSubmit = async(data:any) => {
          data.start_date = start
          data.end_date = end
          await createBeforeDraft(data)
          reset()
    }
    
    return (
      
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ maxWidth: 200, margin:"10px"}}>
          <Typography variant="h5" color="secondary">Nouvelle Draft</Typography>
          <TextField {...register("name", {required:true})} id="outlined-basic" color="secondary" label="Nom" variant="outlined" sx={{ input: { borderRadius: '4px', } }} />
  
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
          <Button
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
  
    );
  }