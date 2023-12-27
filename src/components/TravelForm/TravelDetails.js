import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem, Paper, Typography, Container, Box, Stack, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import theme from '../../themes/theme';


const TripTypes = [
    { value: 'business', label: 'Business' },
    { value: 'vacation', label: 'Vacation' },
    { value: 'honeymoon', label: 'Honeymoon' },
    { value: 'family', label: 'Family' },
    { value: 'solo', label: 'Solo' },
  ];


const TravelDetails = ({formDataTravel, setFormDataTravel}) => {
  const price = useSelector((state) => state.travelPackages.selectedPackages)
 
    
      const handleChangeTravel = (e) => {
        const { name, value } = e.target;
        setFormDataTravel({
          ...formDataTravel,
          [name]: value,
        });
      };

     
  
  return (
      <Container maxWidth='xxl' >
        <Box>
            <Stack margin={3}>
                <Typography 
                variant='h4'
                sx={{ 
                  fontFamily: 'Montserrat', 
                  color: 'white', 
                  fontWeight: 'bold'
                  }}>
                  Travel Detail
                </Typography>
            </Stack>
            <ThemeProvider theme={theme}>
            <Stack sx={{justifyContent: 'center', alignItems: 'center', marginLeft:'1%'}}>
              <form style={{width: '90%'}}>
                  <Grid container spacing={2}  sx={{backgroundColor: 'white', padding: '3%'}}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="destination"
                      label="Destination"
                      fullWidth
                      value={formDataTravel.destination}
                      onChange={handleChangeTravel}
                      
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="travelDate"
                      label="Travel Date"
                      type="date"
                      fullWidth
                      value={formDataTravel.travelDate}
                      onChange={handleChangeTravel}
                      InputLabelProps={{ shrink: true }}
                      
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="airportName"
                      label="Airport Name"
                      fullWidth
                      value={formDataTravel.airportName}
                      onChange={handleChangeTravel}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      name="tripType"
                      label="Type of Trip"
                      fullWidth
                      value={formDataTravel.tripType}
                      onChange={handleChangeTravel}
                    >
                      {TripTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid> 
              </form>
            </Stack>
            </ThemeProvider>
        </Box>
    </Container>
    
    
  )
}

export default TravelDetails
