import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import axios from "axios";
import Badge from "../../models/Badge";


// --------------------------------Styled components --------------------------------
const Item = styled(Paper)(({ theme }) => ({

  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
}));
// @mui/material/Paper -> Paper.js PaperRoot et faire des test pour modifier / supprimer des propriétés css.
// ----------------------------------------------------------------------------------

// Possibilité de mettre plusieurs fonctions dans le même component?

export default function BadgeList() {
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
                    <Item>titre.badge</Item>
                  </Box>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <Item>dateAcquisition.badge</Item>
                  </Box>
                </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// -------------------------------- test 1 --------------------------------

// Requêter un utilisateur avec un ID donné.
axios.get('/')
  .then(function (response) {
    // en cas de réussite de la requête
    console.log(response);
  })
  .catch(function (error) {
    // en cas d’échec de la requête
    console.log(error);
  })
  .then(function () {
    // dans tous les cas
  });
 
async function getUser() {
  try {
    const response = await axios.get('/');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// -------------------------------- test 2 --------------------------------

const badge = axios.create({
  baseURL: "http://localhost:2000/"
}) 

export const getBadge = (id: string) => {
  return badge.get("/" + id)
}

export const getBadges = async() => {
  const badges = await badge.get("/")
  // FONCTIONNE PAS LE CONSOLE LOG
  console.log(badges)
  return badges.data
}