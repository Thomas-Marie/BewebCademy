import { Box } from "@mui/system";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";

const ExerciceList: React.FC = () => {
  return (
    <div className="exerciceList">
      <Header></Header>
      <Box sx={{ display: 'flex' }}>
        <NavBar />
        <Box width='22%'></Box>

        <Box height='100vh' width='80%' sx={{ p: 2 }}>PLACER SON COMPOSANT ICI</Box>
      </Box>
      <Footer></Footer>
    </div>
  )
}

export default ExerciceList;