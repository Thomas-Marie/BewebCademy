import { Button, Link, Typography } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { useRef, useState } from "react"

import "../footer.css"

const regex = new RegExp('\/exercice\/[a-z0-9]')


export default function Footer() {

  const refButtonNextExercice: any = useRef(null)
  const [test, setTest]:any = useState("outlined")

  const handleButton = () => {
  setTest('contained')
  }

  if (window.location.pathname.match(regex)) {
    return (
      <ThemeProvider theme={theme}>
        <footer>
          <Typography
            variant="h6"
            bgcolor={'#1D1D1D'}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '4vh',
              width: '100vw',
              color: 'white'
            }}
          >
            3/11
            <Button variant='contained' onClick={handleButton} color="secondary" sx={{ p: 1.5, fontSize: '0.7em', color: 'text.primary', height: '60%' }}>Precedent</Button>
            <Button variant={test} ref={refButtonNextExercice} color="secondary" sx={{ p: 1.5, fontSize: '0.7em', color: 'text.primary', height: '60%' }}>Suivant</Button>
          </Typography>
        </footer>
      </ThemeProvider>
    )
  } else return (
    <ThemeProvider theme={theme}>
      <footer>
        <Typography
          variant="h6"
          bgcolor={'#1D1D1D'}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '4vh', width: '100vw' }}
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
      light: '#DA1040'
    },
    neutral: {
      main: '#FFFFFF'
    },
    background: {
      paper: '#1D1D1D',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#DB1144',
    },
    action: {
      active: '#001E3C',
    }
  }
})