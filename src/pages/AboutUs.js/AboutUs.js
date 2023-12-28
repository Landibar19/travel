import React from 'react';
import { Typography, Container, Grid, Paper, Box, Stack } from '@mui/material';
import { AboutUsContent } from '../../utility/AboutUsContent/AboutUsContent';
import NavBar from '../../components/navBar/NavBar';
import TestimonialPage from './TestimonialPage';
import ContactForm from './ContactForm';
import Footer1 from '../../components/footer/Footer1';

const {
    Photo1, 
    Photo2, 
    Photo3, 
    title, 
    text1, 
    text2, 
    text3,
    subTitle1, 
    subTitle2,
    subTitle3
} = AboutUsContent;

const AboutUs = () => {
  return (
    <Container maxWidth={false}disableGutters sx={{backgroundColor: 'rgb(38,166,166)'}}>
        <NavBar/>
        <Box  width='100%'>
            <img src={Photo1} alt='' 
            style={{
                display: 'flex',
                backgroundSize:'cover',
                backgroundPosition: 'center',
                height:'42vw',
                width: '100%',
                zIndex: -10,
            }}
        />
        <Typography 
        sx={{
            fontFamily:'Breathing', 
            position: 'absolute', 
            top:'18vw', 
            left: '30%',
            color: 'rgb(255, 192, 0)',
            fontSize: {xs:'6.5vw', sm:'5vw'}
            }} 
        >
        {title}
        </Typography>
        </Box>
      <Grid container spacing={3} padding={{xs:3, sm:7}}>
        <Grid item xs={11}>
          <Stack  sx={{textAlign: 'left'}}>
            <Typography 
            sx={{
                fontFamily:'Bebas Neue',
                color:'white', 
                marginTop:'25px',
                fontSize: {xs:32, sm:'4vw'}
                }}
            >
                {subTitle1}
            </Typography>
            <Typography
            sx={{
                textAlign:'left', 
                color: 'white',
                lineHeight:'1.2',
                marginTop: '15px',
                fontSize: {xs:16, sm:22}
            }}>
              {text1}
            </Typography>
            <Typography 
            sx={{
                marginTop: '20px',
                textAlign:'left', 
                color: 'white',
                lineHeight:'1.2',
                fontSize: {xs:12, sm:18}
                
            }}>
              {text2}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={1} padding={{xs:3, sm:7}} marginTop='-1%' >
      <Typography 
            sx={{
                fontFamily:'Bebas Neue',
                color:'white', 
                fontSize: {xs:32, sm:'4vw'}
                }}>
             {subTitle2}
        </Typography>
        <Stack sx={{flexDirection:'row', marginLeft:'-3%', paddingTop:2}}>
        <Grid item xs={6}>
            <img src={Photo2} style={{width:'90%'}}/>
        </Grid>
        <Grid item xs={6}>
            <img src={Photo3} style={{width: '90%'}}/>
        </Grid>
        </Stack>
      </Grid>
      <Stack padding={{xs:3, sm:7}} marginTop='-5%'> 
        <Typography 
        sx={{ 
            fontFamily:'Bebas Neue',
            color:'white', 
            fontSize: {xs:32, sm:'4vw'},
            textAlign:'left'
        }}>
            {subTitle3}
        </Typography>
        <Typography 
        sx={{
            marginTop: '20px',
                textAlign:'left', 
                color: 'white',
                lineHeight:'1.2',
                fontSize: {xs:12, sm:18}
                
        }}>
            {text3}
        </Typography>
      </Stack>
      <TestimonialPage/>
      <ContactForm/>
      <Footer1/>
    </Container>
  );
};

export default AboutUs;
