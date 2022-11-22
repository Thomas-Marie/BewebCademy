import CreateBadgeForm from "../components/forms/CreateBadge"
import CreateLanguageForm from "../components/forms/CreateLanguage";
import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";
import {Box, Button} from "@mui/material";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import ListDraft from "../components/layout/ListDraft";

const dashBoardAdmin = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: "20vw", float: "left" }}></Box>

      <Box height="100vh" width="80vw" sx={{ p: 2 }}>
        <ListDraft></ListDraft>
      {/* <CreateLanguageForm /> */}
      {/* <CreateBadgeForm /> */}
      {/* <Button variant="contained" sx={{bgcolor: '#db1144', '&:hover': {bgcolor: '#1d1d1b'}, alignSelf: "end"}}> <Link to={`/create-exercice`} style={{textDecoration:"none", color:"white"}}>Création d'exercice</Link></Button> */}
      </Box>
      </Box>
      
      <Footer></Footer>
    </div>
  );
};

export default dashBoardAdmin;
