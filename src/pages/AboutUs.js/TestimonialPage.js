import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import avatar1 from '../../assets/AboutUs/avatar1.jpg';
import avatar2 from '../../assets/AboutUs/avatar2.png';
const testimonialData = [
  {
    id: 1,
    author: 'Jane Smith',
    avatar: avatar1,
    testimonialText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
  },
  {
    id: 2,
    author: 'John Doe',
    avatar: avatar2,
    testimonialText: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  // Add more testimonials as needed
];

const TestimonialPage = () => {
  return (
    <Container maxWidth="md" sx={{paddingBottom:'3%', border:'2px solid white'}}>
      <Typography variant="h4" align="center" sx={{padding:2, color:'white'}}>
        Testimonials
      </Typography>
      <Grid container spacing={3}>
        {testimonialData.map((testimonial) => (
          <Grid item key={testimonial.id} xs={12} md={6}>
            <Card>
              <CardContent>
                <Avatar alt={testimonial.author} src={testimonial.avatar} sx={{ width: 80, height: 80 }} />
                <Typography variant="subtitle1" align="center" style={{ marginTop: '10px' }}>
                  {testimonial.author}
                </Typography>
                <Typography variant="body1" align="center" style={{ marginTop: '10px' }}>
                  "{testimonial.testimonialText}"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TestimonialPage;
