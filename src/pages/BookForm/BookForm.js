import React, { useState } from 'react';
import {Button, Container, Stack, Typography, Box, ThemeProvider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import bookFormBg from '../../assets/bookFormBg.jpg';
import NavBar from '../../components/navBar/NavBar';
import TravelerDetails from '../../components/TravelForm/TravelerDetails';
import TravelDetails from '../../components/TravelForm/TravelDetails';
import {addFormDataTravel, addFormDataTraveler } from '../../redux/slices/FormSlices';
import PaymentForm from '../../components/paymentForm/PaymentForm';
import theme from '../../themes/theme';
import { validateForm } from '../../components/TravelForm/components/validateForm';
import { updateTravelData } from '../../redux/slices/travelSlice';

import Footer from '../../components/footer/Footer';


const BookForm = () => {

  const price = useSelector((state) => state.travelPackages.selectedPackages)
  const dispatch = useDispatch();

  const [show,setShow] = useState(true)
  const [message, setMessage] = useState('')
  const [formDataTraveler, setFormDataTraveler] = useState([
    {name: '',lastName: '',address: '',email: '',celNumber: '', price:price},
  ])
    
  const [formDataTravel, setFormDataTravel] = useState({
    travelDate: '',
    destination: '',
    airportName: '',
    tripType: '', 
  });

  const handleFormSubmit = (e) => {
    e.preventDefault()
    dispatch(addFormDataTraveler(formDataTraveler))
    dispatch(addFormDataTravel(formDataTravel))
    dispatch(updateTravelData(calculateTotalPrice()))
    setFormDataTravel({
      travelDate: '',
      destination: '',
      airportName: '',
      tripType: '', })

    const hasError = validateForm(formDataTraveler, formDataTravel);
    if (hasError) {
      setMessage('Please complete all fields correctly!')
    } else {
      setMessage('Completed succesfully.Redirected to payment form....!Thank you!')
      setTimeout(() => {
        setFormDataTraveler([{
          name: '',
          lastName: '',
          email: '',
          celNumber: '',
          address: ''
      }])
      setFormDataTravel({
        travelDate: '',
        destination: '',
        airportName: '',
        tripType: '', })
      setShow(false)
      }, 3000)
    }
  };
  
  
  const calculateTotalPrice = () => {
    return formDataTraveler.reduce((total, traveler) => total + parseFloat(traveler.price || 0), 0);
  };

  return (
    <Container maxWidth= {false} disableGutters>
        <NavBar/>
        <Box>
            <Stack>
                <img 
                src={bookFormBg} 
                alt='' 
                style={{
                    position: 'relative',
                    display: 'flex',
                    backgroundSize:'cover',
                    backgroundPosition: 'center',
                    height: '48vw',
                    width: '100%',
                    zIndex: -10,
                    filter: `brightness(${'70%'})`
                }}
                />
            </Stack>
            <Stack sx={{
                width: '60%',
                position: 'absolute',
                top: '17vw'
            }}>
                <Typography 
                sx={{
                  fontSize:{xs:'5vw',sm:'4vw'},
                  color: 'white',
                  fontFamily: 'Bebas Neue'}}>
                    Embark on Adventures
                </Typography>
                <Typography 
                sx={{
                  fontSize:{xs:'5vw',sm:'4vw'},
                  color: 'rgb(255, 192, 0)' ,
                  fontFamily: 'Bebas Neue'}} >
                    Book Memories: Travel with Us Today!
                </Typography>
            </Stack>
        </Box>
        
        { show ? (
        <Container maxWidth='xxl' disableGutters sx={{backgroundColor: 'rgb(38,166,166)'}}>
          <Typography 
          variant='h4'
          sx={{ 
          fontFamily: 'Montserrat', 
          color: 'white', 
          fontWeight: 'bold',
          }}
          >
            Travel Agency Booking Form
          </Typography>
          <TravelerDetails 
          onSubmit={handleFormSubmit}
          formDataTraveler={formDataTraveler} 
          setFormDataTraveler={setFormDataTraveler}
          />
          <TravelDetails 
          onSubmit={handleFormSubmit}
          formDataTravel={formDataTravel} 
          setFormDataTravel={setFormDataTravel}/>
          <Typography variant='h4' color='white'>
            Total price :{calculateTotalPrice()}$
            </Typography>
          <Typography variant='h5' color='white'>
          Please submit and continue with payment details
          </Typography>
          <Typography variant='h5' sx={{color:'red', fontWeight:'bold'}}>
            {message}
          </Typography>
          <ThemeProvider theme={theme}>
            <Button
          onClick={handleFormSubmit}
          >
          Submit
          </Button>
          </ThemeProvider>
          
        </Container>
        ) : (
        <PaymentForm/>
        )}
       
       <Footer/>
    </Container>
    
  );
};

export default BookForm;
