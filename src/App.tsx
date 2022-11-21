import React from 'react';
import { Routes, Route } from "react-router-dom";

import './app.css';

import Exercice from "./pages/Exercice";
import ExerciceList from "./pages/ExerciceList";
import Profil from "./pages/Profil";
import Logout from './pages/Logout';
import Test from './pages/Tests';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './auth/auth_keycloak';
import Home from './pages/home';



function App() {
  return (
    <div className='app'>
      <ReactKeycloakProvider authClient={keycloak} initOptions={{checkLoginIframe: false, onLoad: 'check-sso',  }}>
     <React.StrictMode>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />}></Route>
        <Route path='/exercice' element={<ExerciceList />}></Route>
        <Route path='/profil' element={<Profil />}></Route>
        <Route path='/html' element={<Exercice />}></Route>
        <Route path='/php' element={<Exercice />}></Route>
        <Route path='/sql' element={<Exercice />}></Route>
        <Route path='/exercice/html' element={<Exercice />}></Route>
        <Route path='/deconnexion' element={<Logout />}></Route>

        <Route path='/test' element={<Test />}></Route>


      </Routes>
      </React.StrictMode>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
