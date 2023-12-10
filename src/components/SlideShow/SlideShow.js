import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: 'https://cdn.britannica.com/46/154246-050-7C72E12F/view-Rome.jpg' ,
     caption: 'Rome, Italy',
     price: '300$ All inclusive'
  },
  {
    url: 'https://www.worldatlas.com/upload/93/ea/fc/shutterstock-1078814498.jpg' ,
    caption: 'Budapest, Hungary',
    price: '300$ All inclusive'
  },
  {
    url: 'https://toposmagazine.com/wp-content/uploads/2022/05/dimitry-anikin-ECkAbFv_Nnc-unsplash-aspect-ratio-16-9.jpg' ,
    caption: 'Barcelona, Spain',
     price: '300$ All inclusive'
  },
  {
    url:'https://media1.travelguide.de/media/2021/03/Paris-Attraktionen.jpg' ,
    caption: 'Paris, France',
    price: '300$ All inclusive'
  },
  {
    url:'https://media.nomadicmatt.com/2020/amsterdamthings3.jpg' , 
    caption: 'Amsterdam, Hollande',
    price: '300$ All inclusive'
  }
];

const SlideShow = () => {
    return (
      <Stack 
      sx={{
        width: '45vw',
        height: '100%',
        left:'2%',
        borderRadius: '16px'
        }}
      >
        <Slide >
         {slideImages.map((slideImage, index)=> (
            <Stack key={index}>
              <Stack sx={{  
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundSize: 'cover',
                height: '30vw',
                width: '45vw',
                borderRadius: '16px',
                'backgroundImage': `url(${slideImage.url})` }}>
                <Typography 
                sx={{ padding: '5px', 
                background: 'rgb(38,166,166)',
                opacity: 0.8,
                color: 'white',
                fontSize: '2vw',
                fontFamily: 'Bebas Neue',
                marginTop: '20%'
                }}>
                    {slideImage.caption}
                </Typography>
                <Typography sx={{
                  fontSize: '1.8vw',
                  fontFamily: 'Bebas Neue',
                  color: 'rgb(38,166,166)' ,
                  backgroundColor: 'white',
                  opacity: 0.9,
                  borderTopRightRadius: '8px',
                  borderBottomLeftRadius: '8px',
                  paddingLeft: {xs:'3px',sm: "8px"},
                  paddingRight: {xs:'3px',sm: "8px"},
                  marginRight: '70%',
                  marginTop: '10%'
                }}>
                  {slideImage.price}
                </Typography>
              </Stack>
            </Stack>
          ))} 
        </Slide>
      </Stack>
    )
}


export default SlideShow