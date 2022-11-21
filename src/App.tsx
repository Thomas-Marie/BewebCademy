import React from 'react';
import { Routes, Route, redirect as Redirect} from "react-router-dom";

import './app.css';

import Exercice from "./pages/user/Exercices";
import ExerciceList from "./pages/ExerciceList";
import Profil from "./pages/Profil";
import Logout from './pages/Logout';
import Home from './pages/Home';



function App() {
  return (
    <div className='app'>

      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />}></Route>
        <Route path='/exercices' element={<ExerciceList />}></Route>
        <Route path='/profil' element={<Profil />}></Route>
        <Route path='/exercice/html' element={<Exercice />}></Route>
        <Route path='/deconnexion' element={<Logout />}></Route>
      </Routes>

    </div>
  );
}

export default App;
