import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1, ml:6 }}>
      <h2>Badges() </h2>
      <Grid container columns={{ xs: 4, sm: 8, md: 8 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid xs={2} sm={2} md={2} key={index}>
                <Box>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <img src="https://logospng.org/download/javascript/logo-javascript-icon-1024.png" width="30%"/>
                  </Box>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <p>titre.badge</p>
                  </Box>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <p>dateAcquisition.badge</p>
                  </Box>
                </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
