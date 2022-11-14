import "./style/header.css"

import React from "react"
import Button from "@mui/material/Button"
import logo from "./beWebBlancWeb.svg"
import { ThemeProvider, createTheme } from "@mui/material/styles"

import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AppBar, Drawer, Toolbar } from "@mui/material"
import { Divider } from "@mui/material"
import List from "@mui/material"

const navItems = ['Dashboard', 'Exercices', 'Profil'];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Header(props: Props) {
  const { window } = props;

  
  // interface Window {
  //   document.body: HTMLBodyElement
  // }

  // const myWindow = () => Window

  

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <div className="Header">
        <AppBar>
          <Toolbar>
            {/* insert menu burger with condition */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none', xs: 'block' } }}
            >
              <MenuIcon />
            </IconButton>


            {/* insert logo with condition */}
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <img src={logo} alt="beweb-academy" />
            </Typography>


            {/* display buttons with condition */}
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                  {item}
                </Button>
              ))}
              <LogoutIcon></LogoutIcon>
            </Box>

          </Toolbar>
        </AppBar>


        <Drawer></Drawer>

        <header className="app-header">

        </header>

      </div>
    </ThemeProvider>
  );
}

const theme = createTheme({
  typography: {
    fontSize: 15,
  },

  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#DB1144',
    }
  },
})