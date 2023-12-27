import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Box, Stack, Container, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import theme from '../../themes/theme';



const TravelerDetails = ({onSubmit,formDataTraveler, setFormDataTraveler}) => {
    const price = useSelector((state)=> state.travelPackages.selectedPackages)

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const newFormData = [...formDataTraveler];
        newFormData[index] = { ...newFormData[index], [name]: value };
        setFormDataTraveler(newFormData);
      };
      
      const addTraveler = () => {
        setFormDataTraveler([...formDataTraveler, { name: '', lastName: '', cellNumber: '', price: price }]);
      };
    

      const removeTraveler = (index) => {
        const newFormData = [...formDataTraveler];
        newFormData.splice(index, 1);
        setFormDataTraveler(newFormData);
      }
  return (
    <Container maxWidth= 'xxl' sx={{backgroundColor: 'rgb(38,166,166)'}}>
        <Box
        sx={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent:'center', 
            flexDirection:' column'
            }}
            >
                <Typography
                variant='h5'
                sx={{
                    fontFamily: 'Montserrat', 
                    color: 'white', 
                    fontWeight: 'bold',
                    }}>
                    Complete your order form for your Trip
                </Typography>
               
                <Stack  width='90%'> 
                <ThemeProvider theme={theme}>
                     <form style={{ borderRadius: '4px'}} onSubmit={onSubmit}>  
                    {formDataTraveler.map((traveler,index) =>(
                    <Grid container key={index} >
                        <Stack 
                        sx={{
                            width: '90%',
                            display: 'flex',
                            flexDirection: 'row', 
                            justifyContent: 'space-between',
                            marginTop: '4%'
                            }}>
                        <Typography sx={{fontFamily: 'Montserrat',color: 'white', fontWeight: 'bold'}}>
                                Traveler {index+ 1}
                        </Typography>
                        <Typography sx={{fontFamily: 'Montserrat', color: 'white', fontWeight: 'bold'}}>
                            Price Package:{price}
                        </Typography>
                        </Stack>
                        <Stack 
                        sx={{
                            display: 'flex', 
                            flexDirection:{xs:'column', sm:'row'}, 
                            width: '100%', 
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap:2,
                            backgroundColor: 'white',
                            padding: '3% 3%' ,
                            borderRadius:'4px'
                            
                            }}>
                        <Grid item xs={12} sm={4}>
                        <TextField
                            name="name"
                            label="Name"
                            fullWidth
                            value={traveler.name}
                            onChange={(e)=> handleChange(e, index)}
                        />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <TextField
                            name="lastName"
                            label="LastName"
                            fullWidth
                            value={traveler.lastName}
                            onChange={ (e)=> handleChange(e, index)}
                        />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                        <TextField
                            name="email"
                            label="Email"
                            value={traveler.email}
                            fullWidth
                            onChange={(e)=> handleChange(e, index)}
                        />
                        </Grid>
                        </Stack>
                        <Stack 
                        sx={{
                            display: 'flex', 
                            flexDirection:{xs:'column', sm:'row'}, 
                            width: '100%', 
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap:2,
                            backgroundColor: 'white',
                            padding: '3% 3%' ,
                            borderRadius:'4px',
                            marginTop: '4%',
                        }}>
                        <Grid item xs={12}>
                        <TextField
                            name="celNumber"
                            label="celNumber"
                            value={traveler.celNumber}
                            fullWidth
                            onChange={(e)=> handleChange(e, index)}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            name="address"
                            label="Addres"
                            value={traveler.address}
                            fullWidth
                            onChange={(e)=> handleChange(e, index)}
                            multiline
                            rows={3}
                        />
                        </Grid>
                        </Stack>
                        <Button 
                        onClick={() => removeTraveler(index)}
                        >
                            Remove Form
                        </Button>
                    </Grid>
                        
                    ))}
                    <Button 
                    onClick={addTraveler}
                    >
                        AddForm
                    </Button>
                    </form>
                </ThemeProvider>   
                   
                </Stack>
        </Box>
    </Container>
  )
}

export default TravelerDetails
