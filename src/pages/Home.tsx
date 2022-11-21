import { Box, Tabs, Tab } from "@mui/material";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import React from "react";
<<<<<<< HEAD
import Modification from '../components/forms/Modification';
import {useEffect, useState} from 'react'
import {getSessions} from '../services/session.service'
=======
>>>>>>> dbb767782d93aa7b4111a6490459f575d22b461f

function LinkTab(props: any) {
  return (
    <Tab
      component="a"
      onClick={(event: any) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const Home: React.FC = () => {
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
  // console.log(props.location);
  // console.log(props.match);
  // console.log(props.history);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <div className="home">
      <Header></Header>
      <h1>Welcome</h1>
      <Box sx={{ width: '100%' }}>
        
      </Box>
      <Footer></Footer>
    </div>
  )
}

export default Home;
