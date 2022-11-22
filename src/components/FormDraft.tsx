// import { Button, Paper, TextField, Typography } from "@mui/material";



// export default function FormDraft() {
//     return (
//         <Paper elevation={3} sx={{ width: "18vw", margin: 'auto' }}>
//             <Typography variant="h4" color="secondary">Nouvelle Draft</Typography>
//             <TextField id="outlined-basic" color="secondary" label="Nom" variant="outlined" sx={{ input: { color: "#FFF", borderRadius: '4px', '&:hover': { color: "#FFF" } } }} />
//             {/* <label for="startDate">Start date:</label>
//             <input name="startDate" type="date"></input><br />
//             <input type="date"></input><br /> */}



//             <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//             >
//                 Valider
//             </Button>
//         </Paper>
//     )
// }

import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { createTheme, ThemeProvider } from '@mui/system';
import { Button, Typography } from '@mui/material';

export default function MaterialUIPickers() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54'),
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <Typography variant="h4" color="secondary">Nouvelle Draft</Typography>
        <TextField id="outlined-basic" color="secondary" label="Nom" variant="outlined" sx={{ input: { color: "#FFF", borderRadius: '4px', '&:hover': { color: "#FFF" } } }} />

        <DesktopDatePicker
          label="Date de debut"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <DesktopDatePicker
          label="Date de fin"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Valider
        </Button>
      </Stack>
    </LocalizationProvider >
  );
}
