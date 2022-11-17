import { Route, Routes } from "react-router-dom";
import Home from "./pages/home"
import Dashboard from "./pages/user/dashboard"
import Exercice from "./pages/user/Exercices"



const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/user" element={<Dashboard />} />
      <Route path="/exercice" element={<Exercice />} />
    </Routes>
  );
}

export default App;
