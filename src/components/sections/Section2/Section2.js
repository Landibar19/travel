import { Box, Button, Container, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { section2Content } from '../../../utility/Section2Content'
import './Styles.scss'



const {section2Bg, title, subtitle, text} = section2Content;

const paragraphStyle= {
  WebkitLineClamp: 3,
  WebkitBoxOrient:'vertical',
  overflow:' hidden',
  display: '-webkit-box',
  width:{xs: '180px',sm:'350px', xm: '450px', md: '500px', lg:'600px'},
  maxWidth: '100%',
  fontSize: '1.7vw',
  fontFamily: 'Montserrat'
}
const Section2 = () => {
  const [isOpen , setIsOpen] = useState(false)
  const [showMoreButton, setShowMoreButton] = useState(false)

  const ref = useRef(null)

  useEffect(() => {
    if (ref.current){
      setShowMoreButton(ref.current.scrollHeight !== ref.current.clientHeight)
    }
    
  }, [])
  

  return (
    <section>
      <Container maxWidth={false} disableGutters >
      <Box>
        <img className='section2'
        src={section2Bg} alt=''  
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
          }}
        />
      </Box>
       <Container sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        }}>
        <Box sx={{ 
          position: 'relative',
          marginTop:' -50%'
          }} >
          <Typography  
          fontFamily={'Breathing'} 
            sx={{
              color: 'rgb(255, 192, 0)',
              fontSize:{ lg: 70, md:70,xm:55,sm:40,xs:20}
            }}
              >
         {title}
          </Typography>
          <Typography fontFamily={'Bebas Neue'} 
            sx={{
              color: 'rgb(38,166,166)', 
              fontSize:{lg: 90, md:70,xm:40,sm:40,xs:20}
            }}>
            {subtitle}
          </Typography>
          <Typography 
          color='black'
          fontWeight={{xs:600}}
          margin='auto'
          sx={isOpen ? { 
            width:{xs: '180px',sm:'350px', xm: '450px', md: '500px', lg:'600px'},
            maxWidth: '100%',
            fontSize: '1.7vw',
          fontFamily: 'Montserrat'} : paragraphStyle} 
          ref={ref}>
              {text}
          </Typography>
          {showMoreButton &&
           <Button sx={{
            textTransform: 'capitalize', 
            fontSize: '1.7vw',
            padding:0
            }} 
            onClick={() =>setIsOpen(!isOpen) }>
            {isOpen ? 'read less...' : 'read moore...'}
          </Button>}
        </Box>
       </Container>
    </Container>
    </section>
    
  )
}

export default Section2
