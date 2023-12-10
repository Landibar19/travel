import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { section5Content } from '../../../utility/Section5Content';

const { Section5Bg, title, subtitle, text} = section5Content;

const Section5 = () => {
    const [showAll, setShowAll] = useState(false);
    const toggleShowAll = () => {setShowAll(!showAll)};
    const maxLength = 150;

    const imgStyle = {
        left:0, 
        position:'absolute',
        width: '100%',
        maxHeight:'60vw',
        height:'100%',        
        zIndex: -10 ,

    }
  return (
    <section>
       <Container 
    maxWidth={false}  
    sx={{
        width: '100%', 
        height: '60vw'
        }}
    >
        <Box>
            <img src= {Section5Bg} alt=''
            style={{
                left:0, 
                position:'absolute',
                width:'100%',
                height: '60vw',
                zIndex: -10 ,
                }}
                />
        </Box>
        <Container 
        sx={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
            }}
        >
        <Box sx={{
                position: 'relative',
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop: '10%'
            }}>
                <Stack sx={{width: {xs:'37vw',sm:'45vw', md: '48vw', lg:'45vw'}}}>
                    <Typography 
                    sx={{
                        fontFamily:'Breathing', 
                        color: 'rgb(255, 192, 0)',
                        fontSize:{lg: 75, md:65,sm:40,xs:18},
                        lineHeight:'1'
                    }}
                    >
                        {title}
                    </Typography>
                    <Typography
                    sx={{
                        fontFamily: 'Bebas Neue',
                        color: 'rgb(11, 147, 147)',
                        fontSize:{lg: 75, md:65,sm:40,xs:18}
                    }}
                    >
                        {subtitle}
                    </Typography>
                    <Stack sx={{
                        display:'flex',
                        alignItems: 'center',
                        justifyContent: 'right',
                        width: '100%'
                    }}>
                    <Typography sx={{
                        width:{xs: '48vw',sm:'320px',
                        md: '480px', lg:'600px'},
                        fontSize: '1.8vw',
                    }}>
                            {showAll ? text : `${text.slice(0, maxLength)}...`}
                    </Typography>
                        {text.length > maxLength && (
                        <Button sx={{
                            textTransform:'capitalize',
                            fontSize: '2vw',
                            color:"primary" ,
                            padding: 0,
                            margin: '1px', 
                        }}    
                        onClick={toggleShowAll}
                        >
                            {showAll ? 'Read Less' : 'Read More'}
                        </Button>
                        )}
                    </Stack>
                </Stack>
            </Box>
        </Container>
        {showAll ?
            (<Box   
            sx={{
                position: 'absolute',
                border: 'solid 1px white',
                borderRadius:'8px',
                backgroundColor: 'rgb(240,156,36)',
                width: '45vw',
                height: '11vw', 
                right: '3%', 
                marginTop: '-10%',
                zIndex: -1
                }}>
                <Stack  
                sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    paddingTop: '3%',
                    paddingLeft: '4%',
                }}>
                    <Typography 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        paddingRight: 2,
                        color: 'white',
                        fontFamily: 'Bebas Neue',
                        fontSize: '2vw',
                        textTransform: 'uppercase'
                    }}>
                     How To Join The Trip
                    </Typography>
                    <Typography 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white',
                        fontFamily: 'Montserrat', 
                        fontSize: '1.3vw'
                    }}>
                     Choose from over 300 unique trips from all around the world.
                     Reserve a spot on your dream trip by paying a 20% deposit 
                     and send a message to your Travel Agency to introduce yourself.
                    </Typography>
                </Stack>
            </Box>
            ) : (
            <Box 
            sx={{
                position: 'absolute',
                border: 'solid 1px white',
                borderRadius:'8px',
                backgroundColor: 'rgb(240,156,36)',
                width: '45vw',
                height: '11vw', 
                marginTop: '5%',
                right: '3%', 

                }}>
                <Stack  
                sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    paddingTop: '3%',
                    paddingLeft: '4%',
                    
                    
                }}>
                    <Typography 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        paddingRight: 2,
                        color: 'white',
                        fontFamily: 'Bebas Neue',
                        fontSize: '2vw',
                        textTransform: 'uppercase'
                    }}
                    >
                    How To Join The Trip
                    </Typography>
                    <Typography 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white',
                        fontFamily: 'Montserrat', 
                        fontSize: '1.3vw'
                    }}>
                     Choose from over 300 unique trips from all around the world.
                     Reserve a spot on your dream trip by paying a 20% deposit 
                     and send a message to your Travel Agency to introduce yourself.
                    </Typography>
                </Stack>
            </Box>)}
    </Container> 
    </section>
    
  )
}

export default Section5
