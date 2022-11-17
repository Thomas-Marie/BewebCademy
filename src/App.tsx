import React from 'react';
import { Routes, Route } from "react-router-dom";

import './app.css';

import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Exercices from "./pages/ExercicesList";
import Home from "./pages/Home";



function App() {
  return (
    <div className='app'>
      {/* <Header></Header> */}

      <Routes>

        <Route path='/dashboard' element={<Home />}></Route>
        <Route path='/exercices' element={<Exercices />}></Route>

      </Routes>
      {/* <Footer></Footer> */}

    </div>
  );
}

export default App;
