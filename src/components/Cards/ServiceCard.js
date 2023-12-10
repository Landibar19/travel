import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Title from '../Title/Title'
import OutlineButton from '../button/OutlineButton'

const ServiceCard = ({title, subtitle, image}) => {
  return (
    <Box
      sx={{
        height:'100%',
        position: 'relative',
        py:4,
        borderRadius:'30px',
        "&::before":{
            content:'""',
            position: 'absolute',
            inset: 0,
            borderRadius:'30px',
            border: '1px solid  ',
            background: "linear-gradient(120deg, rgba(211, 211, 245,0.3), transparent) border-box",
            WebkitMask:"linear-gradient(#fff 0 0) padding-box linear-graient(#fff 0 0)",
            WebkitMaskComposite:'xor',
            maskComposite: 'exclude',
        },
      }}>
        <Stack
        textAlign='left'
        justifyContent='center'
        sx={{height:'100%'}}
        spacing={2}
        p={1}
        
        >
            <Title variant={{xs:'h6', md:'h5'}} color='white'>{title}</Title>
            <Typography variant='body2' color='white'>{subtitle}</Typography>
            <img 
            src={image} 
            alt='' 
            style={{ 
                maxHeight:'250px', 
                borderRadius:'30px',
                }}/>
            <OutlineButton arrow fit sx={{backgroundColor:'grey'}}>Learn more</OutlineButton>
        </Stack>
      </Box>
  )
}

export default ServiceCard;
