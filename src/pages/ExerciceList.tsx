import { Box } from "@mui/system";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";


import { useState } from 'react';

const ExerciceList: React.FC = () => {

  const [myComponent, setMycomponent] = useState('');
  const handleClick: any = (component: any) => {
    setMycomponent(component);
  };

  return (
    <div className="exerciceList">
      <Header></Header>
      <Box sx={{ display: 'flex' }}>
        <NavBar handleClick={handleClick} />
        <Box sx={{ width: '20vw', float: 'left' }}></Box>
        <Box height='100vh' width='80vw' sx={{ p: 2 }}>
          <h2>{myComponent}</h2>

        </Box>
      </Box>
      <Footer></Footer>
    </div>
  )
}

export default ExerciceList;