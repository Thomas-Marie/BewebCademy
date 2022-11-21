import React from 'react';
import { Routes, Route, redirect as Redirect} from "react-router-dom";

import './app.css';
import DashboardAdmin from "./pages/DashboardAdmin";
import Exercice from "./pages/user/Exercices";
import CreateExercice from './pages/user/CreateExercices';
import ExerciceList from "./pages/ExerciceList";
import Profil from "./pages/Profil";
import Logout from './pages/Logout';

import Home from './pages/Home';



function App() {
  return (
    <div className='app'>
      
      <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/exercices' element={<ExerciceList />}>
          
        </Route>
        <Route path='/exercices/:badge' element={<Exercice />} />
        <Route path='/create-exercice' element={<CreateExercice />} />
        <Route path='/profil' element={<Profil />}/>

        <Route path='/deconnexion' element={<Logout />}/>

        <Route path='/admin' element={<DashboardAdmin/>}/>
      </Routes>

    </div>
  );
}

export default App;
