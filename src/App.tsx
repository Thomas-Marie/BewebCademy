import React from 'react';
import { Routes, Route } from "react-router-dom";

import './app.css';


import Button from "@mui/material/Button"

import Exercices from "./pages/Exercices";
import Home from "./pages/Home";



function App() {
  return (
    <Routes>
      <Route path='/dashboard' element={<Home />}></Route>
      <Route path='/exercices' element={<Exercices />}></Route>
    </Routes>
  );
}

export default App;
