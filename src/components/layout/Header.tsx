import "../header.css";

import React from "react";

import logo from "../../assets/logo_bewebcademy_whitetext.svg";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Drawer, Toolbar, Box, ListItemIcon } from "@mui/material";
import { Divider, List, ListItem, ListItemButton, ListItemText, IconButton, Typography, Button, ButtonBase } from "@mui/material";

import { NavLink as ReactNav } from 'react-router-dom'
import { RenderErrorBoundary } from "react-router/dist/lib/hooks";
import { error } from "console";
import { useLocation } from 'react-router-dom';
import { color } from "@mui/system";


const navItems = ['dashboard', 'exercices', 'profil'];
const url = "http://localhost:3000/"

export default function Header() {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const container = window !== undefined ? () => document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const testing = (e: any) => {
  //   console.log("")
  // }

  const drawerBurger = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={logo} alt="beweb-academy" />
      </Typography>
      <List component="nav">
        {navItems.map((item, i) => (
          <><Divider />
            <ListItem disablePadding key={i}>
              <ListItemButton href={"/" + item} sx={{ textAlign: 'center', maxHeight: '100%' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </>
        ))}
        <Divider />

        <ListItem disablePadding >
          <ListItemButton href="/logout" sx={{ textAlign: 'center', maxHeight: '100%' }} key="10">
            <ListItemText primary="Deconnexion" sx={{ ml: 3 }} />
            <ListItemText primary={<LogoutIcon sx={{ mt: 0.6, ml: -5 }}></LogoutIcon>} />
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  // switch (window.location.href) {
  //   case url+"dashboard":
  //     console.log("YES")
  //     let color = "pro"
  //     return color
  //   case url+"exercices":
  //     console.log("NO")
  //     break;
  //   case url+"profil":
  //     console.log("YESNO")
  //     break;
  //   default:
  //     console.log('big problem')
  // }



  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

          {/* insert logo with condition window size */}
          <Box
            component="div"
            sx={{ mt: 0.5 }}
          >
            <img src={logo} alt="beweb-academy" />
          </Box>

          {/* insert icon menu burger with condition window size */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <ThemeProvider theme={theme2}>
            {/* display buttons with conditions window size */}
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {navItems.map((item) => (
                <Button className="buttonHeader" name={item} href={"/" + item}>
                  {item}
                </Button>

              ))}


              <ButtonBase href="/deconnexion">
                <IconButton name="deconnexion">
                  <LogoutIcon color="secondary"></LogoutIcon>
                </IconButton>
              </ButtonBase>
            </Box>
          </ThemeProvider>
        </Toolbar>
      </AppBar>

      {/* contenu du menu burger deroulé */}
      <Drawer
        anchor="right"
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'flex', sm: 'flex', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            color: '#FFF',
          },
        }}
      >
        {drawerBurger}
      </Drawer>
    </ThemeProvider>
  );
}

const theme = createTheme({
  typography: {
    fontSize: 15,
  },

  palette: {
    primary: {
      main: '#1D1D1D',
    },
    secondary: {
      main: '#DB1144',
    },
    neutral: {
      main: '#FFFFFF'
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

const theme2 = createTheme({
  palette: {
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: '#DB1144',
    }
  }
})

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

