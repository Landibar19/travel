import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react';
import { Section3content } from '../../../utility/Section3Content';

const {Section3Bg, title, subtitle, textTitle, text} = Section3content;

const Section3 = () => {
  return (
    <section>
        <Container maxWidth={false} disableGutters>
            <Box>
                <img src={Section3Bg}
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
            <Container sx={{position: 'relative'}}>
                <Box sx={{
                    position: 'relative',
                    width: '100%', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                    
                    }}
                >
                    <Stack sx={{
                        position: 'absolute', 
                        bottom: '2vw', 
                        left: '6%',
                        }}>
                        <Typography 
                        sx={{
                            color: 'rgb(255, 192, 0)', 
                            fontSize:'5vw',
                            fontFamily: 'Breathing Personal Use' 
                        }}
                        >
                        {title}
                        </Typography>
                        <Typography 
                         sx={{
                            color: 'rgb(38,166,166)', 
                            fontSize:'6vw',
                            fontFamily: 'Bebas Neue'
                          }}>
                            {subtitle}
                        </Typography>
                    </Stack>
                </Box>
                <Stack sx={{
                    position: 'absolute',
                    right:' 5%',
                    width: '32vw',
                    height: '17vw',
                    top:'-33vw',
                    backgroundColor:  'rgb(240,156,36)',
                }}>
                    <Typography sx={{
                        fontSize:'2.5vw',
                        color: 'white',
                        fontFamily: 'Bebas Neue',
                    }}>
                        {textTitle}
                    </Typography>
                    <Typography sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white',
                        fontFamily: 'Montserrat', 
                        fontSize: '1vw',
                        padding: '4%',
                        marginTop: '-4%',
                        textAlign: 'justify', 
                        lineHeight: '1.3'
                    }} >
                        {text}
                    </Typography>
                </Stack>
                <Stack sx={{
                    position: 'absolute',
                    right:' 5%',
                    width: '32vw',
                    height: '10vw',
                    top:'-14vw',
                }}>
                    <Typography sx={{
                        textAlign: 'justify',
                        fontSize: '1.4vw', 
                        color: 'black',
                        padding: '5px'
                    }}>
                    Start your journey. Let's bring your next 
                    great travel story to life. Jump to the form.
                    Fill out our questionnaire and get secretly matched to a 
                    destination based on your travel taste. We take care of everything
                    </Typography>
                </Stack>
            </Container>
        </Container> 
    </section>
  )
}

export default Section3
