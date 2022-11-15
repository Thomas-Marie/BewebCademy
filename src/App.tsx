import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './theme/bewebcademy.scss';
import Home from './pages/Home';
import Exercices from './pages/Exercices';


const App: React.FC = () => {
  return(
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/exercices' element={<Exercices />}></Route>
    </Routes>
  )
}

export default App;
