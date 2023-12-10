import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardActionArea } from '@mui/material';

const PhotoGallery = ({ photos }) => {
  const [mainPhoto, setMainPhoto] = useState(photos[0]);
 console.log(photos)
  const handleThumbnailClick = (photo) => {
    setMainPhoto(photo);
    
  };

  return (
    <Grid container spacing={{xs: 0.5, sm:1.5}}>
      <Grid item >
       <Card>
          <CardActionArea>
            <CardMedia
            sx={{
              width: '47vw',
              height: '30vw'
            }}
              component="img"
              src={mainPhoto.image} // Display the main photo
              alt="Main"
            />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid container spacing={0.3} item >
      {photos.map((photo, index) => (
          <Grid item key={index}>
            <Card>
              <CardActionArea onClick={() => handleThumbnailClick(photo)}>
                <CardMedia
                  component="img"
                  sx={{
                    width:'15vw',
                    height: '10vw',
                    opacity: 0.5,
                    transition: 'opacity 0.3s ease-in-out',
                    '&:hover': {
                      opacity: 1,
                      
                  }
                }}
             
                  src={photo.image} 
                  alt={`Thumbnail ${index}`}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default PhotoGallery;
