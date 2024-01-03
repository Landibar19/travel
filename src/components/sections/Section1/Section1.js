import React from 'react';
import { section1Content } from '../../../utility/Sections/Section1Content';
import { Box, Container, Stack, ThemeProvider, Typography  } from '@mui/material';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const {Section1Bg, title, subtitle, Tabs} = section1Content

const buttonStyle = {
  width: "22px",
  background: 'none',
  border: '1px solid',
  borderRadius : '100%',
  borderColor:'white',
  display:'none'
}

const properties = {
  prevArrow:
   <button style={{ ...buttonStyle}}>
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 512 512" fill="#fff">
      <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/>
    </svg>
    </button>,
  nextArrow: 
  <button style={{ ...buttonStyle }}>
    <svg
     xmlns="http://www.w3.org/2000/svg" 
     viewBox="0 0 512 512" fill="#fff">
      <path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/>
    </svg>
  </button>
}


const Section1 = () => {

  return (
    <section >
      <Container maxWidth= {false} disableGutters>
        <Box>
        <img src={Section1Bg} alt=''  
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        backgroundSize:'cover',
        backgroundPosition: 'center',
        height: '65vw',
        width: '100%',
        maxWidth: '100%',
        zIndex: -10
        }}/>
        </Box>
            <Container>
                <Stack 
                position='absolute'
                sx={{
                    width:{xs:'120px',sm:'180px',xm:'240', md:'400px', lg:'600'},
                    top:'20vw' ,
                    color:'white',
                    textAlign:"right",
                    right:"15%"
                }} 
                >
                <Typography
                fontFamily={'Bebas Neue'}
                lineHeight='100%'
                flexShrink={1}
                fontSize={{xl: 110, lg: 95, md:85, xm:60,sm:45,xs:30}}
                >
                
                {title}
                </Typography>
                <Typography 
                fontFamily={'Breathing Personal Use'} 
                sx={{
                  color: 'rgb(255, 192, 0)', 
                  fontSize:{xl:90, lg: 80, md:70,xm:55,sm:40,xs:20},
                  marginTop: {xs:'-8%', md:'-15%'}
                }}>
                  {subtitle}
                  </Typography> 
                </Stack>
                <Stack 
                width='32vw'
                textAlign='center'
                position='absolute'
                justifyContent='right'
                right='5%'
                top='43vw'
                >
                  <Stack
                  >
                    <Slide {...properties}> 
                    {Tabs.map((slideImage, index)=> (
                        <Stack key={index}>
                          <Stack sx={{  
                            display: 'flex',
                            backgroundSize: 'cover',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '17vw',
                            width:'32vw',
                            'backgroundImage': `url(${slideImage.image})`, 
                            borderRadius: '12px',
                            boxShadow: 10,
                            }}
                          >
                            <Typography
                            fontWeight={800}
                            fontFamily={'Rancho'}
                            sx={{ 
                              fontSize:{xs:'10px', sm:'15px', md: '20px'},
                              padding: '5px', 
                              background: 'rgba(0,0,0,0.5)',
                              backgroundSize:'50%',
                              color:'white'}}
                              >
                              {slideImage.text}
                            </Typography>
                          </Stack>
                        </Stack>
                      ))} 
                    </Slide>
                  </Stack> 
               </Stack>
            </Container>
               
    </Container>
    </section>
    
  )
}

export default Section1
