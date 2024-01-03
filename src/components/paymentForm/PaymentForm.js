import React, { useState } from 'react';
import { 
  TextField, 
  Button, Grid, 
  Typography, 
  Paper,
  Container, 
  ThemeProvider, 
  Stack, 
  createTheme,
  responsiveFontSizes}
   from '@mui/material';
import theme from '../../themes/theme';
import { useSelector } from 'react-redux';

const customStyles = createTheme({
  typography: { 
    fontSize: 25,
  },
  components: {
    MuiTypography: {
      styleOverrides:{
      root: {
        color: 'white',
        textAlign: 'initial',
      },
    },
  },
  },
})
const customTheme = responsiveFontSizes(customStyles);

const spanStyle={
  color :'rgb(255, 192, 0)',
  fontWeight: 'bold',
  
}
const PaymentForm = () => {

  const totalPrice = useSelector((state) => state.travel.travelData)
  const travel = useSelector((state)=> state.form.formDataTravel);
  const traveler = useSelector((state) => state.form.formDataTraveler);


  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    fullName: '',
  });

  const [errors, setErrors] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    fullName: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorsFound = false;

    const { cardNumber, expiryDate, cvv, fullName } = paymentDetails;
    if (!cardNumber) {
      setErrors({ ...errors, cardNumber: 'Please enter card number' });
      errorsFound = true;
    }
    if (!expiryDate) {
      setErrors({ ...errors, expiryDate: 'Please enter expiry date' });
      errorsFound = true;
    }
    if (!cvv) {
      setErrors({ ...errors, cvv: 'Please enter CVV' });
      errorsFound = true;
    }
    if (!fullName) {
      setErrors({ ...errors, fullName: 'Please enter full name' });
      errorsFound = true;
    }

    if (!errorsFound) {
      
      console.log('Payment Details:', paymentDetails);
      setPaymentDetails({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        fullName: '',
      });
    }
  };

  return (
    <Container sx={{backgroundColor: 'rgb(38,166,166)'}} maxWidth='xxl' disableGutters>
    <ThemeProvider theme={customTheme}>
      <Grid 
      container 
      spacing={3}
      justifyContent='center'
       sx={{padding: '4% 8%'}}
       >
      <Typography variant='h5'>
          Thank you! This is your order data.
      </Typography>
      <Typography variant='h5'>Please continue with payment to complete your order</Typography>
      <Grid item  xs={10} md={6}>
        {traveler.map((travelerData, index) => (
        <Stack key={index}>
          <Typography textTransform='uppercase' paddingTop={2}>Traveler {index+1}</Typography>
          <Typography>
            <span style={spanStyle}>Name:</span> {travelerData.name}
          </Typography>
          <Typography>
            <span style={spanStyle}>Last  Name:</span>{travelerData.lastName}
          </Typography>
          <Typography>
            <span style={spanStyle}>Tel:</span> {travelerData.celNumber}
          </Typography>
          <Typography>
            <span style={spanStyle}>Address:</span>  {travelerData.address}
          </Typography>
        </Stack>
        ))}
      </Grid>
      <Grid item  xs={10} md={6}>
        <Typography textTransform='uppercase'>Travel Info</Typography>
        <Typography>
          <span style={spanStyle}>Destination: </span>{travel.destination}
        </Typography>
        <Typography>
          <span style={spanStyle}>Travel date: </span>{travel.travelDate}
        </Typography>
        <Typography>
          <span style={spanStyle}>Airport Name: </span>{travel.airportName}
        </Typography>
        <Typography>
          <span style={spanStyle}>Trip type: </span>{travel.tripType}
        </Typography>
      </Grid>
      <Typography paddingTop='5%'>
        <span style={spanStyle}>Total Price</span>{totalPrice} $
      </Typography>
    </Grid>
    </ThemeProvider>
      <Grid container justifyContent="center" sx={{marginTop: '-1%'}}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px' }} sx={{marginTop: '5%'}}>
          <Typography variant="h4" align="center" gutterBottom>
            Payment Details
          </Typography>
          <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Card Number"
                  name="cardNumber"
                  value={paymentDetails.cardNumber}
                  onChange={handleInputChange}
                  error={Boolean(errors.cardNumber)}
                  helperText={errors.cardNumber}
                  
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Expiry Date"
                  name="expiryDate"
                  value={paymentDetails.expiryDate}
                  onChange={handleInputChange}
                  error={Boolean(errors.expiryDate)}
                  helperText={errors.expiryDate}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="CVV"
                  name="cvv"
                  value={paymentDetails.cvv}
                  onChange={handleInputChange}
                  error={Boolean(errors.cvv)}
                  helperText={errors.cvv}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="fullName"
                  value={paymentDetails.fullName}
                  onChange={handleInputChange}
                  error={Boolean(errors.fullName)}
                  helperText={errors.fullName}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit">
                  Pay Now
                </Button>
              </Grid>
            </Grid>
          </form>
          </ThemeProvider>
          
        </Paper>
      </Grid>
    </Grid>
    </Container>
  );
};

export default PaymentForm;
