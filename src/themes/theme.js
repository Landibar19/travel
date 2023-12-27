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
    
        MuiTextField: {
          styleOverrides: {
            root: {
              backgroundColor: 'rgb(38,166,166)',
              borderRadius: '8px',
              '& input': {
                color: 'white',
              },
            },
          },
        },
        MuiButton:{
          styleOverrides:{
            root: {
              width:{xs:'25%',sm: '18%'},
              fontSize:{xs:'2.5vw', sm:'2vw'},
              textTransform:'capitalize',
              background: 'rgb(255, 192, 0)',
              borderRadius:'8px',
              color: 'black',
              padding:'3px'
            }
          }
            
        },
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