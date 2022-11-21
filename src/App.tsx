import React from 'react';
import { Routes, Route, redirect as Redirect} from "react-router-dom";

import './app.css';

import Exercice from "./pages/user/Exercices";
import CreateExercice from './pages/user/CreateExercices';
import ExerciceList from "./pages/ExerciceList";
import Profil from "./pages/Profil";
import Logout from './pages/Logout';
import Home from './pages/Home';
import Accueil from './pages/Accueil';
import keycloak from './auth/auth_keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';

function App() {
  return (
    <div className='app'>
      <ReactKeycloakProvider authClient={keycloak} initOptions={{checkLoginIframe: false, onLoad: 'check-sso',  }}>
     <React.StrictMode>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/accueil' element={<Accueil />} />
        <Route path='/exercices' element={<ExerciceList />}>
          
        </Route>
        <Route path='/exercices/:badge' element={<Exercice />} />
        <Route path='/create-exercice' element={<CreateExercice />} />
        <Route path='/profil' element={<Profil />}/>

        <Route path='/deconnexion' element={<Logout />}/>
      </Routes>
      </React.StrictMode>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
