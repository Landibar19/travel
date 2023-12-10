import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem, Paper, Typography, Box, Stack, Container } from '@mui/material';


const TravelerDetails = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        address: '',
        email: '',
        celNumber: '',
      
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
      };
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
            <Stack  width='90%'>
                <form onSubmit={handleSubmit} style={{ borderRadius: '4px'}}>
                    <Grid container >
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
                            value={formData.name}
                            onChange={handleChange}
                            sx={{
                                backgroundColor: 'rgb(38,166,166)', 
                                borderRadius:'8px',
                                '& input': {
                                    color: 'white',
                                    margin:{xs:'-3%', sm: '-1px'}
                                 }
                            }}
                        />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <TextField
                            name="lastName"
                            label="LastName"
                            fullWidth
                            value={formData.lastName}
                            onChange={handleChange}
                            sx={{
                                backgroundColor: 'rgb(38,166,166)', 
                                borderRadius:'8px',
                                '& input': {
                                    color: 'white',
                                    margin:{xs:'-3%', sm: '-1px'}
                                 }
                            }}
                        />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                        <TextField
                            name="email"
                            label="Email"
                            fullWidth
                            value={formData.email}
                            onChange={handleChange}
                            sx={{
                                backgroundColor: 'rgb(38,166,166)', 
                                borderRadius:'8px',
                                '& input': {
                                    color: 'white',
                                    margin:{xs:'-3%', sm: '-1px'}
                                }
                            }}
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
                            marginTop: '4%'
                        }}>
                        <Grid item xs={12}>
                        <TextField
                            name="celNumber"
                            label="celNumber"
                            fullWidth
                            value={formData.celNumber}
                            onChange={handleChange}
                            sx={{
                                backgroundColor: 'rgb(38,166,166)', 
                                borderRadius:'8px',
                                '& input': {
                                    color: 'white',
                                    margin:{xs:'-3%', sm: '-1px'}
                                }
                            }}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            name="address"
                            label="Addres"
                            fullWidth
                            value={formData.address}
                            onChange={handleChange}
                            multiline
                            rows={3}
                            sx={{
                                backgroundColor: 'rgb(38,166,166)', 
                                borderRadius:'8px',
                                '& input': {
                                    color: 'white'
                                }
                            }}
                        />
                        </Grid>
                        </Stack>
                    </Grid>
                </form>
            </Stack>
        </Box>
    </Container>
  )
}

export default TravelerDetails
