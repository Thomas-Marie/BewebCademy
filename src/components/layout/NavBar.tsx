import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./navBar.css";
import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Modification from '../forms/Modification';
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BadgeList from "../BadgeList";


const menuExerciceList = {
    "title": "Liste des langages",
    "list": ["html", "css", "javascript", "php", "sql"]
}

const menuProfilList = {
    "title": ["Mes badges", "Gestion du compte"],
    "listComponents": [
        <BadgeList />,
        <Modification />
    ]
}

const TabPanel = (props: any) => {
    const { children, value, index, ...other } = props;
    return (
        <div role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}
                >
                    <Typography textAlign={'center'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const tabProps = (index: number) => {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,

    };
}

const NavBar = (props: any) => {
    const [value, setValue] = React.useState(0);
    const handleClickProfil = props.handleClickProfil
    const regex = new RegExp('\/exercices\/[a-z]')
    let navigate = useNavigate();

    const routeChange = (language: any) => {
        let path = '/exercices/' + language;
        navigate(path);
    }

    if (window.location.pathname === "/exercices" || window.location.pathname === "/exercices/" || window.location.pathname.match(regex)) {
        return (
            <ThemeProvider theme={theme}>
                <nav className="leftNavBar">
                    <Box className="boxItems" sx={{ textAlign: 'center', width: '100%' }}>
                        <h1 style={{ color: '#db1144' }}>{menuExerciceList.title}</h1>

                        {menuExerciceList.list.map((language) => (
                            <><Divider />
                                <Button
                                    name={language}
                                    onClick={event => routeChange(language)}
                                    fullWidth={true}
                                    sx={{
                                        color: '#FFF',
                                        height: '60px',
                                        transition: '0.5s',
                                        '&:hover': {
                                            pl: '25px',
                                            color: '#db1144'
                                        }
                                    }}
                                >
                                    <Box className="languageButton">
                                        <ArrowForwardIosIcon sx={{ height: "10px" }} />
                                        {language}
                                    </Box>
                                </Button>
                            </>
                        ))}
                        <Divider />
                    </Box>
                </nav >
            </ThemeProvider>
        )
    } else {
        return (
            <nav className="leftNavBar">
                <Box className="boxItems" sx={{ textAlign: 'center' }}>
                    <h1>Profil</h1>
                    {menuProfilList.listComponents.map((tabs: any, i) => (
                        <>
                            <Divider />
                            <Button
                                name={menuProfilList.title[i]}
                                onClick={event => handleClickProfil(
                                    <TabPanel value={value} index={0}>
                                        {tabs}
                                    </TabPanel>
                                )}
                                fullWidth={true}
                                sx={{ color: '#FFF', height: '60px', transition: '0.5s', '&:hover': { pl: '25px', color: '#db1144' } }}
                            >
                                <Box className="languageButton">
                                    <ArrowForwardIosIcon sx={{ height: "10px" }} />
                                    {menuProfilList.title[i]}
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

const theme = createTheme({
    typography: {
        fontSize: 15,
    },
    components: {
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: 'orange',
                    height: 3,
                    color: '#db1144'
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#1D1D1D',
        },
        secondary: {
            main: '#DB1144',
        },
        background: {
            paper: '#1D1D1D',
        },
        text: {
            primary: '#1D1D1D',
            secondary: '#DB1144',
        },
        action: {
            active: '#001E3C',
        }
    }
})

export default NavBar;