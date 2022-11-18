import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './theme/bewebcademy.scss';
import Home from './pages/Home';
import Exercice from './pages/Exercice';


const App: React.FC = () => {
  return(
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/exercice' element={<Exercice />}></Route>
    </Routes>
  )
}

export default App;
