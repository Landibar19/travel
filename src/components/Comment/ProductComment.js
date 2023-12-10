import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Stack,
} from '@mui/material';

const ProductComment = () => {
  
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

 

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    const newComment = {
      comment: comment,
    };
    setCommentsList([...commentsList, newComment]);
    setComment('');
  };

  return (
    <Stack sx={{width: '70vw', alignItems: 'center'}}>
      <Typography variant="h6" gutterBottom>
        Leave a comment
      </Typography>
      <TextField
      InputProps={{
        style: { color: 'white'}
      }}
        multiline
        rows={2}
        variant="outlined"
        placeholder="Enter your comment here..."
        value={comment}
        onChange={handleCommentChange}
        fullWidth
        sx={{ mb: 2 , fontSize: '2.4vw', border: '1px solid white'}}
      />
      <Stack >
        <Button variant='contained' sx={{padding: 0}} color="primary" onClick={handleSubmit}>
        <Typography sx={{fontSize: 'h6', textTransform: 'capitalize'}}>Submit</Typography>
      </Button>
      </Stack>
      

      <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
        Comments and Ratings
      </Typography>
      <List>
        {commentsList.map((item, index) => (
          <Stack key={index}>
            <ListItem>
              <ListItemText primary={`Comment: ${item.comment}`} />
            </ListItem>
            {index !== commentsList.length - 1 && <Divider />}
          </Stack>
        ))}
      </List>
    </Stack>
  );
};

export default ProductComment;
