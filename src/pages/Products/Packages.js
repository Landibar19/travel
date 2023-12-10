import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material'; // Import MUI components
import {ADD_PACKAGES} from  '../../redux/slices/PackagesSlice';
import {SELECT_PACKAGES} from '../../redux/slices/PackagesSlice';
import Picture1 from '../../assets/Picture1.png'
import NavBar from '../../components/navBar/NavBar';
import SlideShow from '../../components/SlideShow/SlideShow';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';

import productBg from '../../assets/productBg.jpg'
import {PackageContent} from '../../utility/productContent/PackageContent.js'

const Packages = () => {
  const dispatch = useDispatch();
  const packages = useSelector((state)=> state.travelPackages)
  const data = PackageContent

  const navigate = useNavigate()
 
console.log(packages)
  const handleAddTravel= (order) => {
    dispatch(ADD_PACKAGES({
      packages: order
  }))
      navigate('packagedetail')
  };

  return (
    <Container maxWidth= {false} disableGutters>
      <NavBar/>
      <Box>
        <img
        src={productBg} alt=''  
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            backgroundSize:'cover',
            backgroundPosition: 'center',
            minHeight: '50vw',
            width: '100%',
            zIndex: -10
          }}
        />
        <Stack 
          position='absolute'
          sx={{
            width: '100%',
            top:'10vw',
            textAlign:"left",
            paddingLeft: '2%'
          }} 
        >
          <Typography 
          fontFamily={'Breathing Personal Use'} 
          sx={{
            color: 'rgb(255, 192, 0)', 
            fontSize:'4vw',
            left: '3%'
          }}>
            Travel Agency
          </Typography> 
        </Stack>
        <Stack sx={{position:'absolute', top: '20vw', left:'2%',}}>
            <SlideShow/>
        </Stack>
        <Stack
         sx={{
          position: 'absolute',
          width: '45vw',
          top:{xs:'5%' ,sm: '7%',md: '15%'},
            textAlign:"right",
            right:'3%'
        }}
        >
          <Typography
          sx={{
            fontSize: '4vw',
            fontFamily: 'Bebas Neue',
            color: 'white',
            lineHeight:'1',
            textAlign:'left'
          }}>
          Vacation Packages: Connecting You and the Destination 
          </Typography>
          <Typography 
          sx={{
            fontFamily: 'Montserrat',
            color: 'white', 
            fontSize: '1.7vw',
            backgroundColor: 'rgb(255, 192, 0, 0.5)',
            border: '1px solid ',
            borderRadius: '4px',
            marginTop: '8%',
            padding: '5%',
            textAlign: 'justify',
          }}>
          When it comes to vacations, there are as many ways to explore the 
          world as there are people on it. Our family, honeymoon, 
          or adults-only vacations connect you with each other and your 
          destination. If you want it all, our all-inclusive 
          or luxury vacations have you covered at some of the world’s 
          most popular resorts.
          </Typography>
        </Stack>
      </Box>
      <Container  maxWidth={false}  
      sx={{backgroundColor: 'rgb(38,166,166)',color: 'rgb(255, 192, 0)'}}>
        <Typography sx={{fontSize: '5vw'}} >
          Explore our best packages here
        </Typography>
        <Grid container spacing={3}
        sx={{
          alignItems: ' center',
          justifyContent: 'center'
          }}
          >
          {data.map((order, id) => (
            <Grid  item xs={12} sm={6} md={4}
            key={id}
        >
          <Card sx={{width: '100%'}}>
            <CardContent 
                sx={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                
              }}>
                <Typography 
                sx={{fontSize: '4vw', 
                fontFamily:'Bebas Neue',
                color: 'rgb(38,166,166)' }}>
                  {order.title}
                </Typography>
                <Typography 
                sx={
                  {width: {xs:'90%',sm: '35vw', md:'27vw'} ,
                  fontSize: {xs:'2vw',sm: '1.5vw'},
                  height:{xs:'15vw',sm: '16vw', md: '20vw'} ,
                  textAlign:'justify',}}>
                  {order.description}
                </Typography>
                <Stack sx={{
                  width: {xs: '90%', sm: '35vw', md: '27vw'}, 
                  height: {xs: '40vw', sm: '20vw', md: '15vw'},
                  alignItems: 'center', 
                  justifyContent: 'center'}}>
                  <img src={order.photo} alt=''
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'fit',
                  }}/>
                </Stack>
                <Stack 
                sx={{
                  width: {xs: '40vw',sm: '35vw', md: '27vw'},
                textAlign: {xs:'center',sm:'left'}, 
                alignItems: 'left',
                paddingTop: '2px',
               
                }}>
                  <Typography sx={{fontSize: {xs:'3vw',sm:'2vw'}, color:'rgb(38,166,166)'}}>
                    {order.name}
                  </Typography>
                  <Typography sx={{fontSize: {xs:'3vw',sm:'2vw'}, color: 'rgb(255, 192, 0)'}}>
                    <span style={{color: 'rgb(38,166,166)' }}>Hotel: </span>
                    {order.hotel}
                  </Typography>
                  <Typography sx={{fontSize: {xs:'3vw',sm:'2vw'}, color: 'rgb(255, 192, 0)'}} >
                  <span style={{color: 'rgb(38,166,166)' }}>Days: </span>
                  {order.days}
                  </Typography>
                  <Typography sx={{fontSize: {xs:'3vw',sm:'2vw'}, color: 'rgb(255, 192, 0)'}} >
                  <span style={{color: 'rgb(38,166,166)',  }}>Price Total: </span>
                  {order.price} $/Person
                  </Typography>
                </Stack> 
                <Stack sx={{
              width: {xs: '40vw',sm: '35vw', md: '27vw'}, 
              display: 'flex',
              alignItems: {xs:'center', sm:'left'},
              justifyContent: 'center',
              marginTop: '5%'
              }}>
              <Button
              variant="contained" 
              sx={{color: 'rgb(38,166,166)', width: {xs:'21vw', sm: '14vw'}}}
              onClick={()=> handleAddTravel(order)}
              >
                <Typography 
                sx={{
                  fontSize:{xs:'2.5vw',sm:'1.8vw'}, 
                  color: 'white', 
                  textTransform: 'capitalize'
                  }}
                  >
                    Book now
                </Typography>
              </Button>
            </Stack> 
            </CardContent>
            
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer/>
    </Container>
  );
};

export default Packages;
