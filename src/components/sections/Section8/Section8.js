import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { section8Content } from '../../../utility/Sections/Section8Content';
import PhoneInTalk from '@mui/icons-material/PhoneInTalk';
import Email from '@mui/icons-material/Email';
import Place from '@mui/icons-material/Place';

const {Section8Bg, title, subtitle, text} = section8Content

const Section8 = () => {
    const [showAll, setShowAll] = useState(false);
    const toggleShowAll = () => {setShowAll(!showAll)};
    const maxLength = 150;

    const imgStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
       <Container 
       maxWidth= {false} disableGutters
       sx={{
        width: '100%', 
       height: '50vw',
       position: 'relative'}}>
        <Box>
            <img src={Section8Bg} alt='' style={imgStyle}/>
        </Box>
        <Container 
        sx={{
            position: 'absolute',
            width: '100%',
            top: 0
        }}>
            <Box sx={{
                position: 'relative',
                display: 'flex',
                width: '100%',
                alignItems: 'right',
                justifyContent: 'flex-end',
                paddingTop: '2%'
            }}>
                <Stack>
                    <Typography 
                    sx={{
                        fontFamily:'Breathing', 
                        color: 'rgb(255, 192, 0)',
                        fontSize:' 4vw',
                        lineHeight:'1',
                        paddingTop: '5%'
                    }}
                    >
                        {title}
                    </Typography>
                    <Typography
                    sx={{
                        fontFamily: 'Bebas Neue', 
                        color: 'rgb(11, 147, 147)',
                        fontSize:{lg: 75, md:60,sm:35,xs:18},
                        lineHeight:'1'
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
                        width:"45vw",
                        fontSize: '1.7vw',
                        padding:'6%'
                    }}>
                            {showAll ? text : `${text.slice(0, maxLength)}...`}
                    </Typography>
                        {text.length > maxLength && (
                        <Button sx={showAll ?{
                            textTransform:'capitalize',
                            fontSize: '2vw',
                            color:'rgb(255, 192, 0)' ,
                            padding: 0,
                            margin: '1px', 
                        } : 
                        { textTransform:'capitalize',
                        fontSize: '2vw',
                        color:"primary" ,
                        padding: 0,
                        margin: '1px'
                    }}    
                        onClick={toggleShowAll}
                        >
                            {showAll ? 'Read Less' : 'Read More'}
                        </Button>
                        )}
                    </Stack>
                </Stack>
            </Box>
            {showAll ?
            (
            <Box   
            sx={{
                position: 'absolute',
                border: 'solid 1px white',
                borderRadius:'8px',
                backgroundColor: 'rgb(240,156,36)',
                width: '50vw',
                height: '10vw', 
                left: '3%', 
                bottom: '8%'
                }}>
                <Stack  
                sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    paddingTop: '3%',
                    paddingLeft: '4%',
                    
                    
                }}>
                    <Typography 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        paddingRight: 2,
                        color: 'white',
                        fontFamily: 'Montserrat',
                        fontSize: '1.4vw'
                    }}>
                    <PhoneInTalk sx={{marginRight:1, fontSize: '1.6vw'}}/>
                     +123 456 7890
                    </Typography>
                    <Typography 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white',
                        fontFamily: 'Montserrat', 
                        fontSize: '1.4vw'
                    }}>
                    <Email sx={{marginRight: 1, marginLeft:1, fontSize: '1.6vw'}}/>
                     hello@travelagency.com
                    </Typography>
                    <Typography 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white',
                        fontFamily: 'Montserrat',
                        fontSize: '1.4vw',
                        paddingTop: '6px',
                    }}>
                    <Place sx={{marginRight: 2, fontSize: '1.6vw'}}/> 
                    123 Anywhere St., Any City, ST 12345
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
                width: '50vw',
                height: '10vw', 
                marginTop: '5%',
                right: '10%', 

                }}>
                <Stack  
                sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    paddingTop: '3%',
                    paddingLeft: '4%',
                    
                    
                }}>
                    <Typography 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        paddingRight: 2,
                        color: 'white',
                        fontFamily: 'Montserrat',
                        fontSize: '1.4vw'
                    }}>
                    <PhoneInTalk sx={{marginRight:1, fontSize: '1.6vw'}}/>
                     +123 456 7890
                    </Typography>
                    <Typography 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white',
                        fontFamily: 'Montserrat', 
                        fontSize: '1.4vw'
                    }}>
                    <Email sx={{marginRight: 1, marginLeft:1, fontSize: '1.6vw'}}/>
                     hello@travelagency.com
                    </Typography>
                    <Typography 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white',
                        fontFamily: 'Montserrat',
                        fontSize: '1.4vw',
                        paddingTop: '6px',
                    }}>
                    <Place sx={{marginRight: 2, fontSize: '1.6vw'}}/> 
                    123 Anywhere St., Any City, ST 12345
                    </Typography>
                </Stack>
            </Box>)}
        </Container>
    </Container> 
    </section>
    
  )
}

export default Section8;
