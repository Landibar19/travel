import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { section7Content } from '../../../utility/Sections/Section7Content';


const { Section7Bg, items} = section7Content

const Section7 = () => {
    const imgStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        backgroundSize:'cover',
        backgroundPosition: 'center',
        height: '50vw',
        width: '100%',
        maxWidth: '100%',
        zIndex: -10
    }
  return (
    <section>
        <Container maxWidth= {false} disableGutters 
        sx={{
            height:'50vw', 
            position:'relative'}}>
        <Box>
            <img 
            src={Section7Bg} alt=''
            style={imgStyle}
            />
        </Box>
        <Box
         sx={{
            position: 'absolute',
            top: 5,
            left: '30%'
        }}>
            <Stack>
                <Typography 
                fontFamily={'Breathing Personal Use'} 
                sx={{
                    marginTop: '5%',
                    color: 'rgb(255, 192, 0)', 
                    fontSize:'4vw'
                }}
              >
                Travel Agency
                </Typography>
                <Typography 
               
                color='white'
                fontFamily={'Bebas Neue'}
                lineHeight='100%'
                flexShrink={2}
                fontSize={{ lg: 75, md:65,sm:40,xs:18}}
                >
                    More happines with us
                </Typography>
            </Stack>
        </Box>
        <Container sx={{
            width: '100%',
            position: 'absolute',
            top: '30%'
            }}>
            <Box>
                <Grid container spacing={1}  sx={{width:'100%'}}>
                    {items.map((item, idx )=> (
                    <Grid item xs={3} sm={3} md={3} lg={3} key={idx} >
                    <Box>
                      <Stack spacing={{lg:2}}
                      sx={{ 
                        display:'flex', 
                        alignItems: 'center',
                        justifyContent: 'center'
                        }}
                        >
                        <Stack sx={{
                            height:{xs:'30%'},
                            width:'15vw', 
                            }}>
                            <img src={item.image} alt=''
                             style={{
                                objectFit: 'cover',
                                backgroundSize: 'cover'
                                }}/>
                        </Stack>
                            <Typography
                            sx={{
                                fontFamily:'Bebas Neue',
                                textTransform:'uppercase',
                                color: 'rgb(255, 192, 0)',
                                fontSize: '2.5vw'
                                }}
                            >
                                {item.title} 
                        </Typography>
                            <Typography
                             sx={{
                                fontFamily:'Montserrat',
                                color: 'white', 
                                fontSize: '1.6vw',
                                 lineHeight: '1'}}>
                               {item.subtitle} 
                            </Typography>
                      </Stack>
                    </Box>
                  </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    </Container>
    </section>
    
  )
}

export default Section7;
