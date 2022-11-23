import CreateBadgeForm from "../components/forms/CreateBadge"
import CreateLanguageForm from "../components/forms/CreateLanguage";
import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";
import { Box, Button, Grid } from "@mui/material";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";


const dashBoardAdmin = () => {
  return (
    <div>
      <Header />
        <Grid container height={"90vh"} width={"100vw"}>
          <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
            <CreateLanguageForm />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
            <CreateBadgeForm />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
            <Button variant="contained" sx={{ bgcolor: '#db1144', width: "200px", '&:hover': { bgcolor: '#1d1d1b' } }}> <Link to={`/admin/creation`} style={{ textDecoration: "none", color: "white" }}>Création d'exercice</Link></Button>
          </Grid>
        </Grid>
      <Footer></Footer>
    </div>
  );
};

export default dashBoardAdmin;
