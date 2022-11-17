import { Link, Typography } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"


import "../footer.css"

export default function Footer() {


  return (
    <ThemeProvider theme={theme}>
      <footer>
        <Typography 
        variant="h6"
        bgcolor={'#1D1D1D'}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '4vh' }}
        >
          <Link
            href="https://fondespierre.com/nos-poles-de-competences/beweb-ecole-numerique/developpeur-web/"
            underline="hover"
            color="#FFF"
            variant="inherit"
            sx={{ p: 0.5 }}
          >
            fondespierre.com
          </Link>
        </Typography>


      </footer>
    </ThemeProvider>

  )
}

const theme = createTheme({
  typography: {
    fontSize: 10,
  },

  palette: {
    primary: {
      main: '#1D1D1D',
    },
    secondary: {
      main: '#DB1144',
    }
  },
})