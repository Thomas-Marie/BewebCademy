import React from 'react';
import { Routes, Route, redirect as Redirect} from "react-router-dom";

import './app.css';
import Accueil from "./pages/Accueil"
import Exercice from "./pages/Exercice";
import ExerciceList from "./pages/ExerciceList";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Logout from './pages/Logout';
import keycloak from './auth/auth_keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';

function App() {
  return (
    <div className='app'>
      <ReactKeycloakProvider authClient={keycloak} initOptions={{checkLoginIframe: false, onLoad: 'check-sso',  }}>
     <React.StrictMode>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />}></Route>
        <Route path='/accueil' element={<Accueil />}></Route>
        <Route path='/exercices' element={<ExerciceList />}></Route>
        <Route path='/profil' element={<Profil />}></Route>
        <Route path='/html' element={<Exercice />}></Route>
        <Route path='/php' element={<Exercice />}></Route>
        <Route path='/sql' element={<Exercice />}></Route>
        <Route path='/deconnexion' element={<Logout />}></Route>
      </Routes>
      </React.StrictMode>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
