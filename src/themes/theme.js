import { createTheme } from "@mui/material";
import typography from "./typography";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2f8af9",
    },
    background: {
      default: "#06070A",
    },
    text: {
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
  typography,
   
  components: {
    fontFamily: [
       'Bebas Neue', 'sans-serif',
        'BioRhyme', 'serif',
        'IBM Plex Sans', 'sans-serif',
        'Lato', 'sans-serif',
        'Lobster Two', 'sans-serif',
        'Pinyon Script', 'cursive',
        'Roboto', 'sans-serif',
        'Breathing',
        'serif',
        'Breathing Personal Use',
        'sans-serif'    ,
        'Bebas Neue', 'sans-serif',
        'BioRhyme', 'serif',
        'IBM Plex Sans', 'sans-serif',
        'Lato', 'sans-serif',
        'Lobster Two', 'sans-serif',
        'Pinyon Script', 'cursive',
        'Roboto', 'sans-serif',  
        'Bebas Neue', 'sans-serif',
        'BioRhyme', 'serif',
        'IBM Plex Sans', 'sans-serif',
        'Lato', 'sans-serif',
        'Lobster Two', 'sans-serif',
        'Pinyon Script', 'cursive',
        'Roboto', 'sans-serif'   ,
        'Bebas Neue',
        'BioRhyme',
        'IBM Plex Sans',
        'Lato',
        'Lobster Two',
        'Montserrat',
        'Pinyon Script',
        'Roboto',                                
    ].join(','),
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "red",
          color: "red",
        }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      xm:760,
      md: 960,
      lg: 1024,
      xl: 1200,
  }
}
});


export default theme;