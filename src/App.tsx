import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './theme/bewebcademy.scss';
import Home from './pages/Home';
import Exercices from './pages/Exercices';
import PrivateRoute from './helpers/PrivateRoute';
import Admin from './pages/Admin';
import Navbar from './components/layout/Navbar';
import keycloak from "./auth/auth_keycloak";
import { ReactKeycloakProvider } from "@react-keycloak/web";


const App: React.FC = () => {
  return(
    <>
    <ReactKeycloakProvider authClient={keycloak} initOptions={{checkLoginIframe: false, onLoad: 'check-sso',  }}>
     <React.StrictMode>
       <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/exercices' element={<Exercices />}></Route>
          <Route path="/admin" element={
            <PrivateRoute roles="formateur">
              <Admin />
            </PrivateRoute>
          }/>
        </Routes>
      </React.StrictMode>
    </ReactKeycloakProvider>
    </>
  )
}

export default App;
