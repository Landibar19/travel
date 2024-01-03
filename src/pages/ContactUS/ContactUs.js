import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { ContactUsContent } from '../../utility/ContactUsContent/ContactUsContent'
import NavBar from '../../components/navBar/NavBar'
import ContactForm from '../AboutUs.js/ContactForm'
import Footer1 from '../../components/footer/Footer1'

const {title, subTitle1, subTitle2, text,text1,photo} = ContactUsContent

const ContactUs = () => {
  return (
    <Container maxWidth={false} disableGutters sx={{backgroundColor: 'rgb(38,166,166)'}}>
        <NavBar/>
        <Box>
            <Stack>
            <img src={photo} alt='' 
            style={{
                display: 'flex',
                backgroundSize:'cover',
                backgroundPosition: 'center',
                height:'37vw',
                width: '100%'
            }}/>
            </Stack>
        </Box>
        <Grid container spacing={5} padding={7} sx={{color:'white'}}>
            <Grid item xs={12} md={4}> 
            <Typography variant='h4'>
                {title}
            </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
            <Typography variant='h5' textAlign='left'>
                {subTitle1}
            </Typography>
            <Typography variant='h6' textAlign='left' paddingTop={2}>
                {text}
            </Typography> 
            <Typography variant='h6' textAlign='left' paddingTop={2}>
                {text1}
            </Typography>
            <Typography variant='h5' textAlign='left' paddingTop={2}>
                {subTitle2}
            </Typography>
            </Grid>
            </Grid>
            <ContactForm/>
            <Grid container textAlign='left' padding={10} sx={{color:'white'}}>
                <Grid item xs={12} >
                    <Typography variant='h4'>
                        Travel Agency 
                    </Typography>
                    <Typography variant='h5' paddingTop={2}>
                        Travel Agency Group Albania Vlore
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='h6' paddingTop={2}>
                        Street Lungomare SeaFront, Vlore, 9401, Ap.1 K.1',
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant='h6' paddingTop={2}>
                        Phone, whatsApp: +35569007467346
                    </Typography>
                    <Typography variant='h6' paddingTop={2}>
                        This line is unmanned, please leave a voicemail and 
                        your call will be returned in 24 hours.
                    </Typography>
                    </Grid>
            </Grid>
            <Footer1/>
    </Container>
  )
}

export default ContactUs
