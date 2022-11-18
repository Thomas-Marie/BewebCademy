import { Button, ButtonBase, Divider, IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import "../navBar.css"

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const menuExerciceList = {
    "title": "Liste des langages",
    "list": ["html", "css", "javascript", "php", "sql"]
}

const menuProfilList = {
    "title": "Profil",
    "list": ["mes badges", "gestion du compte"]
}

const host = window.location.protocol + "//" + window.location.host
// console.log(window.location.protocol)

export default function NavBar() {

    if (window.location.pathname === "/exercice") {
        return (
            <nav className="leftNavBar">
                <Box className="boxItems" sx={{ textAlign: 'center' }}>
                    <h1>{menuExerciceList.title}</h1>
                    {menuExerciceList.list.map((language) => (
                        <><Divider />
                            <Button
                                name={language}
                                href={window.location.href + "/" + language}
                                fullWidth={true}
                                sx={{ textAlign: 'left', color: '#FFFFFF' }}
                            >
                                <Box className="languageButton"
                                    sx={{ width: '80%', textAlign: 'left' }}
                                >
                                    <ArrowForwardIosIcon sx={{ height: "10px" }} />
                                    {language}
                                </Box>
                            </Button>
                        </>
                    ))}
                    <Divider />
                </Box>
            </nav>
        )
    } else {
        return (
            <nav className="leftNavBar">
                <Box className="boxItems" sx={{ textAlign: 'center' }}>
                    <h1>{menuProfilList.title}</h1>
                    {menuProfilList.list.map((language) => (
                        <><Divider />
                            <Button
                                name={language}
                                href={window.location.href + "/" + language}
                                fullWidth={true}
                                sx={{ textAlign: 'left', color: '#FFF'}}
                            >
                                <Box className="languageButton"
                                    sx={{ width: '80%', textAlign: 'left' }}
                                >
                                    <ArrowForwardIosIcon sx={{ height: "10px" }} />
                                    {language}
                                </Box>
                            </Button>
                        </>
                    ))}
                    <Divider />
                </Box>
            </nav>
        )
    }
}

