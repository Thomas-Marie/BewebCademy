import "./style/header.css"

import React from "react"
import logo from "../assets/logo_bewebcademy_whitetext.svg"
import { ThemeProvider, createTheme } from "@mui/material/styles"

import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { AppBar, Drawer, Toolbar, Card, CardMedia } from "@mui/material"
import { Divider, List, ListItem, ListItemButton, ListItemText, IconButton, Typography, Button } from "@mui/material"

const navItems = ['Dashboard', 'Exercices', 'Profil'];

export default function Header() {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerBurger = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={logo} alt="beweb-academy" />
      </Typography>
      <List component="nav">
        {navItems.map((item) => (
          <><Divider />
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center', maxHeight: '100%' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </>
        ))}
        <Divider />
        
        <ListItem key="deconnexion" disablePadding>
          <ListItemButton sx={{ textAlign: 'center', maxHeight: '100%' }}>
          <ListItemText primary="Deconnexion" sx={{ ml: 3 }}/>
            <ListItemText primary={<LogoutIcon sx={{ mt: 0.6, ml: -5}}></LogoutIcon>} />
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  const container = window !== undefined ? () => document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

          {/* insert logo with condition */}
          <Box
            component="div"
            sx={{ mt: 0.5 }}
          >
            <img src={logo} alt="beweb-academy" />
          </Box>

          {/* insert menu burger with condition */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* display buttons with condition */}
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#FFF' }}>
                {item}
              </Button>
            ))}
            <LogoutIcon sx={{ mt: 0.6, ml: 5 }}></LogoutIcon>
          </Box>

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
            backgroundColor: '#2E3134',
            color: '#FFFFFF'
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
      main: '#2E3134',
    },
    secondary: {
      main: '#DB1144',
    }
  },
})