import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const Footer = () => {
 

  return (
  <footer style={{
    backgroundColor: 'rgb(38,166,166)',
    color: '#fff',
    padding: useTheme().spacing(1, 0),
    marginTop: 'auto',
  }}>
      <Container sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <Typography 
        sx={{
          fontSize: '1.5vw'
        }} >
          &copy; {new Date().getFullYear()}
         Lizander's Website
         </Typography>
        <Typography 
        sx={{
          fontSize: '1.5vw'
        }}>
          Created with React.js and Material-UI
        </Typography>
        <Typography
         sx={{
          fontSize: '1.5vw'
        }} >
          <Link href="#" color="inherit">
            Privacy Policy
          </Link>
          {' | '}
          <Link href="#" color="inherit">
            Terms of Use
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
