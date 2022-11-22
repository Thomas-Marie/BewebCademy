import CreateBadgeForm from "../components/forms/CreateBadge"
import CreateLanguageForm from "../components/forms/CreateLanguage";
import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";
import { Box, Button } from "@mui/material";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";


const dashBoardAdmin = () => {
  return (
    <div>
      <Header />
        <Box sx={{ display: 'flex', width: '100vw' }}>
          <Box height="90vh" width="80vw" sx={{ p: 2, display: 'flex', flexDirection: 'column', margin: 'auto' }}>
          <Button variant="contained" sx={{ bgcolor: '#db1144', width: "200px", '&:hover': { bgcolor: '#1d1d1b' } }}> <Link to={`/admin/creation`} style={{ textDecoration: "none", color: "white" }}>Création d'exercice</Link></Button>

            <CreateLanguageForm />
            <CreateBadgeForm />
          </Box>
        </Box>
      <Footer></Footer>
    </div>
  );
};

export default dashBoardAdmin;
