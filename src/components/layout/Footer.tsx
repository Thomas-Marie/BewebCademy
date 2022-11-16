import { Link } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"


import "../footer.css"

export default function Footer() {


  return (
    <ThemeProvider theme={theme}>

      <footer>

        <Link href="https://fondespierre.com/nos-poles-de-competences/beweb-ecole-numerique/developpeur-web/" underline="hover">
          fondespierre.com
        </Link>


      </footer>
    </ThemeProvider>

  )
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
    }
  },
})