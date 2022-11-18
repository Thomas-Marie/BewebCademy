import { Button, ButtonBase, Divider, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "../navBar.css";
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const menuExerciceList = {
    "title": "Liste des langages",
    "list": ["html", "css", "javascript", "php", "sql"]
}

const menuProfilList = {
    "title": "Profil",
    "list": ["mes badges", "gestion du compte"]
}

function TabPanel(props: any) {
    const { children, value, index } = props;

    return (
        <div hidden={value !== index}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function NavBar(props: any) {

    const [value, setValue] = React.useState(0);
    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    const handleClick = props.handleClick

    if (window.location.pathname === "/exercice") {
        return (
            <nav className="leftNavBar">
                <Box className="boxItems" sx={{ textAlign: 'center' }}>
                    <h1>{menuExerciceList.title}</h1>

                    <Tabs
                        orientation="vertical"
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                    >

                        <Tab label="Item One" onClick={event => handleClick(
                            <TabPanel value={value} index={0}>
                                Item One
                            </TabPanel>
                        )}
                            icon={<ArrowForwardIosIcon
                                sx={{ height: "10px" }} />
                            } />
                        <Tab label="Item Two" onClick={event => handleClick(100)} icon={<ArrowForwardIosIcon sx={{ height: "10px" }} />} />
                        <Tab label="Item Three" onClick={event => handleClick(100)} icon={<ArrowForwardIosIcon sx={{ height: "10px" }} />} />
                    </Tabs>


                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>

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
            </nav >
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
                                sx={{ textAlign: 'left', color: '#FFF' }}
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

