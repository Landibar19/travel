import React, { useState } from 'react';
import { Typography, Rating, Box } from '@mui/material';

const ProductRating = () => {
  const [ratings, setRatings] = useState([]);

  const handleRatingChange = (event, newRating) => {
    // Simulating an API call to send the new rating to the backend
    // Here, I'm just updating the local state with the new rating
    setRatings([...ratings, newRating]);
   
  };

  const calculateRating = () => {
    if (ratings.length === 0) {
      return 0
    }
    const rate = ratings.reduce((currentValue) => currentValue);
    return rate
  }

  return (
    <div style={{display:'flex', alignItems: 'center', flexDirection: 'column'}}>
      <Typography variant="h6" gutterBottom sx={{fontSize: '2.3vw', color: 'white'}}>
        Rate this product
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems:'center', gap: 2}}>
        <Rating 
        sx={{fontSize: {xs:'3.5vw', sm: '2.5vw'}}}
          name="product-rating"
          value={Number(ratings)} 
          precision={0.5}
          onChange={handleRatingChange}
        />
        <Typography variant="h6" >
          {calculateRating().toFixed(1)}
       </Typography>
      </Box>
     
    </div>
  );
};

export default ProductRating;
