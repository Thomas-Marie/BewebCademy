import { Box, Tabs, Tab } from "@mui/material";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import React, { useEffect, useState } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { createSession, getSessionByUserId, getSessions } from "../services/session.service";
import User from "../models/user";

const Accueil = () => {
    
    const { keycloak, initialized } = useKeycloak();

    function infoUser(){
      console.log(keycloak.tokenParsed);
    }

    const [session, setSession] = useState([])

    useEffect(() => {
      const fetchSession = async() => {
        const data = await getSessions()
        .then((result: any) => {
          return result
        })
        setSession(data)
      }
      fetchSession()
    })
    console.log(session);
    
    
    if (keycloak.authenticated ) {

        console.log("createSession");

        let user : User = {
            id: keycloak.tokenParsed?.sub || "",
            username: keycloak.tokenParsed?.preferred_username || "",
            firstName: keycloak.tokenParsed?.family_name || "",
            lastName: keycloak.tokenParsed?.given_name || "",
            email: keycloak.tokenParsed?.email || ""
        }

        localStorage.setItem("user", JSON.stringify(user))
        
        // getSessionByUserId(user.id)
        // .then((session)=> {
        //   console.log(session);
          
        //   // if (session !== null){
        //   //   console.log("OH RENTRES");
            
        //   //     createSession(user);
        //   //   }
        // })
        
    }

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
