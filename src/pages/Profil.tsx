import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";
import { useState } from 'react';
import { Box } from "@mui/system";
import BadgeListUser from "../components/BadgeListUser";

const Profil = () => {

    const [myComponent, setMycomponent] = useState('');
    const handleClickProfil: any = (component: any) => {
        setMycomponent(component);
    };

    return (
        <div className="profil">
            <Header />
            <Box sx={{ display: 'flex' }}>
                <NavBar handleClickProfil={handleClickProfil} />
                <Box sx={{ width: '20vw', float: 'left' }}></Box>

                <Box height='100vh' width='80vw' sx={{ p: 2 }}>
                    <h2>{myComponent}</h2>
            <BadgeListUser></BadgeListUser>

                </Box>
            </Box>
            <Footer />
        </div>
    )
}

export default Profil;
