import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {useEffect, useState} from 'react';
import {getBadges} from '../../services/badge.service'
import { Typography } from '@mui/material';

// --------------------------------Styled components --------------------------------
// const Item = styled(Paper)(({ theme }) => ({

//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   justifyContent: 'center',
//   color: theme.palette.text.secondary,
// }));
// @mui/material/Paper -> Paper.js PaperRoot et faire des test pour modifier / supprimer des propriétés css.
// ----------------------------------------------------------------------------------

// Possibilité de mettre plusieurs fonctions dans le même component?

export default function BadgeList() {

const [badges, setBadges] = useState<any>([])

  useEffect(() => {
    const fetchBadges = async () => {
      const data = await getBadges().then((result: any) => {return result})
      setBadges(data)
    }
    fetchBadges().catch(console.error)
  }, [])
  console.log(badges)
  return (
    <Box sx={{ flexGrow: 1, ml:6 }}>
      <h2>Badges({badges.length}) </h2>
      <Grid container columns={{ xs: 4, sm: 8, md: 8 }}>
        {badges.map((badge: any, index: any) => (
          <Grid xs={2} sm={2} md={2} key={index}>
                <Box>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <img src="https://logospng.org/download/javascript/logo-javascript-icon-1024.png" width="30%"/>
                  </Box>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography>{badge.name}</Typography>
                  </Box>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography>{badge.language.name}</Typography>
                  </Box>
                </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}