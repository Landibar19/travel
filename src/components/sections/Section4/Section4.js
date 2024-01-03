import React from 'react';
import { Section4Content } from '../../../utility/Sections/Section4Content';
import { Box, Container, Stack, Typography } from '@mui/material';
import CardMembership from '@mui/icons-material/CardMembership';


const {Section4Bg, title, subtitle, text} = Section4Content

const Section4 = () => {
  return (
    <section>
        <Container maxWidth={false} disableGutters> 
            <Box>
                <img src={Section4Bg} alt=''
                style={{
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
                }}/>
            </Box>
            <Container 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'flex-end',
                alignItems: 'center'
            }}
            >
                <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'initial',
                    width: '90vw'
                }}>
                    <Stack sx={{
                        position: 'relative',
                        marginTop:' -75%', 
                        width: '45vw',

                    }}>
                        <Typography sx={{
                            fontFamily: 'Breathing Personal Use',
                            fontSize: '4vw',
                            color: 'rgb(255, 192, 0)',
                            marginLeft:'-50%',
                        }}>
                            {title}
                        </Typography>
                        <Typography 
                         sx={{
                            fontFamily: 'Bebas Neue',
                            fontSize: '4vw',
                            color: 'rgb(38,166,166)',
                            marginLeft: '-50%',
                            paddingBottom: '5%'
                        }}>
                            {subtitle}
                        </Typography>
                        <Typography 
                        sx={{
                            textAlign: 'start',
                            fontSize: '1.5vw'
                        }}>
                            {text}
                        </Typography>
                    </Stack>
                </Box>
                <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    width: '45vw',
                    marginTop: '-40%',
                    marginBottom:'5%'
                }}>
                    <Stack 
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        width: '100%',
                        marginRight: '-39%',
                        border: '1px solid white',
                        backgroundColor:  'rgb(240,156,36)',
                    }}>
                        <CardMembership sx={{
                            fontSize: '6vw',
                            color: 'white'
                        }}/>
                       <Typography 
                    sx={{
                        fontSize: '1.5vw',
                        color: 'white',
                        fontFamily: 'Montserrat',
                        textAlign: 'initial',
                        paddingLeft: '10%'
                    }}>
                    All plans let you pick your parks which include 12 months 
                    admission, monthly rewards and more for the park(s) selected.
                    Special events like travels and Christmas Town are
                     included Memberships.
                    </Typography> 
                    </Stack>
                    
                </Box>
            </Container>
        </Container>
    </section>
  )
}

export default Section4
