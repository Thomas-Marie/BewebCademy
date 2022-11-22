import { Box, Tabs, Tab, Grid, Button } from "@mui/material";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import React, { useEffect, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { createSession, getSessionByUserId, getSessions } from "../services/session.service";
import User from "../models/User";
import { checkDreaftOpen } from "../services/draft.service";

const Accueil: React.FC = () => {

  //boolean to check if draft open or not
  const [draftOpen, setDraftOpen] = useState(false);

  checkDreaftOpen().then((res) => {
    setDraftOpen(res);
    console.log("draftOpen", draftOpen);
  });

  const { keycloak, initialized } = useKeycloak();

  const checkSession = async () => {
    if (keycloak.authenticated) {
      let user: User = {
        id: keycloak.tokenParsed?.sub || "",
        username: keycloak.tokenParsed?.preferred_username || "",
        firstName: keycloak.tokenParsed?.family_name || "",
        lastName: keycloak.tokenParsed?.given_name || "",
        email: keycloak.tokenParsed?.email || ""
      }

      localStorage.setItem("user", JSON.stringify(user))
      if (keycloak.hasRealmRole("formateur")) {
        localStorage.setItem("role", "formateur")
      } else {
        localStorage.setItem("role", "user")
      }

      const session = await getSessionByUserId(user.id);
      if (session) {
        console.log("Session existante");
        localStorage.setItem("session", JSON.stringify(session));
        window.location.href = 'profil';
      } else {
        console.log("Session non existante");
        const newSession = await createSession(user);
        localStorage.setItem("session", JSON.stringify(newSession));
        console.log(newSession);
        window.location.href = 'profil';
      }
    }
  }

  const login = () => {
    keycloak.login();
  }

  useEffect(() => {
    if (initialized) {
      checkSession();
    }
  }, [initialized]);


  return (
    <div>
      <Box sx={{ width: '100%', typography: 'body1', height: '97vh' }}>
        {!draftOpen
          ?
          (
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} height="100%">
              <Grid item xs={6} display="flex" justifyContent="center" alignItems="center">
                <img src="https://i.ibb.co/7ND1qzz/gcm-Rp-J7-400x400-removebg-preview.png" />
              </Grid>
              <Grid item xs={6} display="flex" justifyContent="center" alignItems="center">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid>
                    <h1 style={{ margin: "50px" }}>Une période de préparation pour une draft est en cours. Vous pouvez participer pour avoir une chance d'être sélectionné. Il vous faut juste réaliser les exercices et obtenir des badges.</h1>
                  </Grid>
                  <Grid>
                    <Button style={{ margin: "50px" }} onClick={login} variant="contained" sx={{ bgcolor: '#db1144', '&:hover': { bgcolor: '#1d1d1b' } }}>  Participez a la draft. </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ) :
          (
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} height="100%">
              <Grid item xs={6} display="flex" justifyContent="center" alignItems="center">
                <img src="https://i.ibb.co/7ND1qzz/gcm-Rp-J7-400x400-removebg-preview.png" />
              </Grid>
              <Grid item xs={6} display="flex" justifyContent="center" alignItems="center">
                <h1 style={{ margin: "100px" }}>Il n'y a pas de période de draft en cours, revenez plus tard.</h1>
              </Grid>
            </Grid>
          )}
      </Box>
      <Footer />
    </div>
  );
}

export default Accueil;
