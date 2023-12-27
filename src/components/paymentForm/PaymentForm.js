import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper, Container, ThemeProvider } from '@mui/material';
import theme from '../../themes/theme';

const PaymentForm = () => {
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
      // Implement payment logic here (e.g., API call to process payment)
      console.log('Payment Details:', paymentDetails);
      // Reset form fields after payment submission
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
