import { Box, Tabs, Tab } from "@mui/material";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import React, { useEffect, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { createSession, getSessionByUserId, getSessions } from "../services/session.service";
import User from "../models/User";

const Accueil = () => {
    
    const { keycloak, initialized } = useKeycloak();

    function infoUser(){
      console.log(keycloak.tokenParsed);
    }

    const checkSession = async () => {
      let user : User = {
        id: keycloak.tokenParsed?.sub || "",
        username: keycloak.tokenParsed?.preferred_username || "",
        firstName: keycloak.tokenParsed?.family_name || "",
        lastName: keycloak.tokenParsed?.given_name || "",
        email: keycloak.tokenParsed?.email || ""
      }

      localStorage.setItem("user", JSON.stringify(user))

      const session = await getSessionByUserId(user.id);
      if(session){
        console.log("Session existante");
        localStorage.setItem("session", JSON.stringify(session));
      }else{
        console.log("Session non existante");
        const newSession = await createSession(user);
        localStorage.setItem("session", JSON.stringify(newSession));
        console.log(newSession);
      }
    }
    
    useEffect(() => {
      if (initialized) {
        checkSession();
      }
    }, [initialized]);


  return (
    <div>
        {!keycloak.authenticated && (
            <button
              type="button"
              className="text-blue-800"
              onClick={() => keycloak.login()}
            >
              Login
            </button>
            
          )}
           {!!keycloak.authenticated && (
                   <button
                     type="button"
                     className="text-blue-800"
                     onClick={() => keycloak.logout()}
                   >
                     Logout ({keycloak.tokenParsed?.preferred_username})
                   </button>
                 )}
                 <button onClick={() => infoUser()}>info</button>
    </div>
  )
}

export default Accueil;
