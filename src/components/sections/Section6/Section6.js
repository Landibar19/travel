import React from 'react';
import CustomCountUp from '../../countUp/CustomCountUp';
import { Section6Content } from '../../../utility/Section6Content';
import { Box, Container, Stack, Typography } from '@mui/material';

const {Section6Bg, title, items, text} = Section6Content

const Section6 = () => {
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
            position:' relative'
         }}>
        <Box>
            <img src={Section6Bg} alt='' style={imgStyle}/>
        </Box>
        <Container sx={{
            position: 'absolute',
            top: '10%'
        }}>
            <Box sx={{ 
                width: '60vw',
                display:'flex' ,
                justifyContent:"center",
                flexDirection:'column',
                alignItems:'center',
                }}
            >
                <Typography 
                sx={{
                    color: 'white',
                    textTransform: 'uppercase',
                    fontFamily: 'Bebas Neue' ,
                    paddingTop: '1rem',
                    fontSize: '3vw'
                }}
                >
                {title}
            </Typography>
            <Stack sx={{
                display:' flex',
                flexDirection: 'row',
            }}>
                 {items.map((item) => (
                    <Stack  
                    key={item.subtitle} 
                    sx={{
                        width: '20vw',
                        display:'flex' ,
                        justifyContent:"left",
                        flexDirection:'column',
                        alignItems:'center',
                        border: '1px solid rgb(255, 192, 0)',
                        borderRadius: '16px',
                        marginTop: '3%', 
                        paddingBottom: '1%'
                    }}
                    >
                    <CustomCountUp {...item} />
                    <Typography sx={{color:' white',fontSize: '1.4vw'}}>
                        {item.subtitle}
                    </Typography>
                    </Stack>
                ))}
            </Stack>
            </Box>
            <Stack sx={{ 
                position: 'absolute', 
                width: '30vw',
                marginTop: '2%', 
                left: '20%',
                color: 'white',
                marginLeft: '-2%',
                fontFamily: 'Montserrat' }}
                >
                <Typography 
                sx={{
                    fontSize: '1.5vw', 
                    alignItems: 'center', 
                    justifyContent: 'left'
                    }}
                >
                    {text}
                </Typography>
            </Stack>
        </Container>
    </Container>
    </section>
   
  )
}

export default Section6;
