import React from 'react';
import { Container, Typography, Grid, TextField, Button, List, ListItem,ListItemText, Divider, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Footer from './Footer';

const Footer1 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  
  };

  return (
    <Container 
    component="footer" 
    maxWidth="xxl" 
    sx={{
        padding: '20px', 
        marginTop: '40px', 
        backgroundColor:'rgb(38,166,166)',
        border: '2px solid white',
        borderRadius:'8px'
        }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} justifyContent='flex-end'>
          <Typography variant="h6" gutterBottom>
            Useful Links
          </Typography>
          <List aria-label="Useful Links" sx={{marginLeft:{sm:'35%'}}}>
            <ListItem>
                <ArrowForwardIosIcon fontSize='2vw'/>
                <ListItemText primary="Careers"/>
            </ListItem>
            <ListItem>
                <ArrowForwardIosIcon fontSize='2vw'/>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem>
                <ArrowForwardIosIcon fontSize='2vw'/>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Subscribe to Newsletter
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Divider style={{ margin: '20px 0' }} />
      <Grid container justifyContent="center">
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
        <IconButton>
          <YouTubeIcon />
        </IconButton>
      </Grid>
      <Footer/>
    </Container>
  );
};

export default Footer1;
