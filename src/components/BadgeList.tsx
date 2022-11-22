import * as React from 'react';
import Box from '@mui/material/Box';
import './layout/BadgeList.css'
import Grid from '@mui/material/Unstable_Grid2';
import { useEffect, useState } from 'react';
import { getBadges } from '../services/badge.service'
import { Typography } from '@mui/material';


const BadgeList = () => {
  const [badges, setBadges] = useState<any>([])

  useEffect(() => {
    const fetchBadges = async () => {
      const data = await getBadges()
        .then((result: any) => {
          return result
        })
      setBadges(data)
    }
    fetchBadges()
      .catch(console.error)
  }, [])

  return (
    <Box>
      <Typography variant="h3">Badges({badges.length}) </Typography>
      <Grid container columns={{ xs: 2, sm: 6, md: 8 }}>
        {badges.map((badge: any, index: any) => (
          <Grid xs={2} sm={2} md={2} key={index}>
            <Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img src={badge.image} style={{ maxWidth: "100px", margin: "50px" }} alt={badge.name} />
              </Box>
              <Box className='flex-center'>
                <Typography>{badge.name}</Typography>
              </Box>
              <Box className='flex-center'>
                <Typography>{badge.acquisition_date}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default BadgeList;