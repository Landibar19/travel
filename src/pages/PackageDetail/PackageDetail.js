import { Box, Button, Card, CardContent, Container, Grid, Icon, Stack, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import {useSelector } from 'react-redux';
import NavBar from '../../components/navBar/NavBar';
import {PacakgeDetailContent } from '../../utility/PacakgeDetailContent/PacakgeDetailContent';
import './Styles.scss'
import PhotoGallery from '../../components/photoGallery/PhotoGallery';
import ProductComment from '../../components/Comment/ProductComment';
import ProductRating from '../../components/Rating/ProductRating';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import BookForm from '../BookForm/BookForm';

const {packageDetail, logo, text, subtitle} = PacakgeDetailContent



const PackageDetail = () => {
  
  const [tabValue, setTabValue] = useState(0)
  const navigate = useNavigate() 
    
  const packages = useSelector((state)=> state.travelPackages.packages)
  console.log(packages)
  const{hotel, name, days, price,hotelDetail, title,hotelPhotos} = packages
  
  const handleChange = (e, newValue) => {
      setTabValue(newValue)
    };

  const TabData = [
    { id: 1, title: 'Description', content: hotelDetail },
    { id: 2, title: 'Comments', content: <ProductComment /> }
  ];
  
  const handleAddForm = () => {
    navigate('/bookForm')
  }
  return (
    <Container maxWidth='xxl' disableGutters>
       <NavBar/>
       <Box >
        <Stack className = 'background'>
        <img 
        src={packageDetail} 
        alt=''
        style={{
          position: 'relative',
          display: 'flex',
          backgroundSize:'cover',
          backgroundPosition: 'center',
          height: '45vw',
          width: '100%',
          zIndex: -10,
          
        }}/>
        </Stack>
        <Stack 
        sx={{
          position: 'absolute',
          display: 'flex',
          top: '15vw',
          color:'white',
          alignItems:'center',
          justifyContent: 'center',
          left:'20%'
        }}>
          <Stack sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <img 
            src={logo} alt=''
            style={{
              width: '10vw',
              height: '10vw'
            }}/>
            <Typography sx={{color: 'rgb(255, 192, 0)', fontSize:'4vw',fontFamily: 'Bebas Neue'}}>
              Travel Agency
            </Typography>
          </Stack>
            <Typography sx={{color: 'white', fontSize:'4vw',fontFamily: 'Bebas Neue' }}>
              {text}
            </Typography>
            <Typography sx={{color: 'white', fontSize:'4vw',fontFamily: 'Bebas Neue' }}>
              {subtitle}
            </Typography>
        </Stack>
     </Box>
     <Container maxWidth='xxl' disableGutters>
      <Box 
      sx={{
        display: 'flex', 
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'rgb(38,166,166)',
        padding: '5%'
      }}>
        <Stack sx={{width: '50%', paddingTop: '-10%'}} >
          <Typography 
          sx={{
            color:'rgb(255, 192, 0)', 
            fontSize:'3.5vw',
            textTransform: 'uppercase'
            
            }}
            >Hotel: {hotel}</Typography>
          <ProductRating/>
          <Stack sx={{
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px grey',
            borderBottomStyle: 'solid',
            padding: '2%',
            }}
            >
          <Typography sx={{fontSize: '2.2vw', color: 'white'}}>Price: </Typography>
          <Typography sx={{fontSize: '2.2vw', color: 'white'}}>{price}$/Person</Typography>
          </Stack>
          <Stack sx={{
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px grey',
            borderBottomStyle: 'solid',
            padding: '2%',
            }}>
            <Typography sx={{fontSize: '2.2vw', color: 'white'}}>City:</Typography>
            <Typography sx={{fontSize: '2.2vw', color: 'white'}}>{title}</Typography>
          </Stack>
          <Stack sx={{
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px grey',
            borderBottomStyle: 'solid',
            padding: '2%',
            }}>
            <Typography sx={{fontSize: '2.2vw', color: 'white'}}>Included: </Typography>
            <Typography sx={{fontSize: '2.2vw', color: 'white'}}>{name}</Typography>
          </Stack>
          <Stack sx={{
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px grey',
            borderBottomStyle: 'solid',
            padding: '2%',
            }}>
          <Typography sx={{fontSize: '2.2vw', color: 'white'}}>Days:</Typography>
          <Typography sx={{fontSize: '2.2vw', color: 'white'}}>{days}</Typography>
          </Stack>
          <Stack sx={{width: '100%',alignItems: 'center', justifyContent: 'center'}}>
          <Button 
          variant="contained" 
          sx={{
            color: 'rgb(38,166,166)', 
            width: {xs:'21vw', sm: '14vw'}, 
            marginTop: '15%',
            backgroundColor: 'rgb(255, 192, 0)'
            }}
            onClick={handleAddForm}
            >
            <Typography 
              sx={{
                fontSize:{xs:'2.5vw',sm:'1.8vw'}, 
                color: 'black', 
                textTransform: 'capitalize'
                }}
            >
             Order now
            </Typography>
          </Button>
          </Stack>
        </Stack>          
        <Stack sx={{width: '70%', }}>
        <PhotoGallery photos={hotelPhotos}/>
        </Stack>
      </Box>
     </Container>
     <Stack>
      <Grid container backgroundColor= 'rgb(38,166,166)'>
        <Grid item xs={12} md={12}>
          <Stack spacing={2} 
          sx={{width: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          padding: '5%'
          }}>
            <Typography sx={{fontFamily: 'Bebas Neue', color: 'white', fontSize: '4vw'}}>
              Hotel Description
            </Typography>
            <Tabs
            value={tabValue}
            onChange={handleChange} 
            variant='scrollable'
            scrollButtons='auto'
            TabIndicatorProps={{style: {backgroundColor:'white'}}}
            TabScrollButtonProps={{style: {color:'White'}}}
            >
            {TabData.map((tab) => (
            <Tab key={tab.id} label={tab.title} sx={{color:'rgb(255, 192, 0)'}} />
            ))}

            </Tabs>
            <Stack sx={{ width: '80%', alignItems: 'center'}} >
              <Typography component={'span'} sx={{textAlign: 'justify', color: 'white',fontSize: '2.2vw'}}>
                {tabValue === 1 ? TabData[tabValue].content : TabData[0].content}
             </Typography>
             </Stack>
          </Stack>
        </Grid>
      </Grid>
        
    </Stack>
    <Footer/>
    </Container>
    
  )
}

export default PackageDetail
