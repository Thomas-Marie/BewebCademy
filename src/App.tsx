import React from 'react';
import { Routes, Route } from "react-router-dom";

import './app.css';

import Exercice from "./pages/Exercice";
import ExerciceList from "./pages/ExerciceList";
import Home from "./pages/Home";



function App() {
  return (
    <div className='app'>
      {/* <Header></Header> */}

      <Routes>

        <Route path='/dashboard' element={<Home />}></Route>
        <Route path='/exercice' element={<ExerciceList />}></Route>
        <Route path='/exercice/html' element={<Exercice />}></Route>
        <Route path='/exercice/php' element={<Exercice />}></Route>
        <Route path='/exercice/sql' element={<Exercice />}></Route>


      </Routes>
      {/* <Footer></Footer> */}

    </div>
  );
}

export default App;
