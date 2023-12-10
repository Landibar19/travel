import React from 'react';
import { TextField, Button, Grid, MenuItem, Paper, Typography } from '@mui/material';


const TripTypes = [
    { value: 'business', label: 'Business' },
    { value: 'vacation', label: 'Vacation' },
    { value: 'honeymoon', label: 'Honeymoon' },
    { value: 'family', label: 'Family' },
    { value: 'solo', label: 'Solo' },
  ];


const TravelDetails = () => {
    const [formDataTravel, setFormDataTravel] = useState({
        travelDate: '',
        destination: '',
        budget: '',
        airportName: '',
        tripType: '', 
      });
      const handleChangeTravel = (e) => {
        const { name, value } = e.target;
        setFormDataTravel({
          ...formDataTravel,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
         
      };
  return (
    <Container maxWidth='xxl' disableGutters>
        <Box>
            <Stack>
                <Typography>Travel Detail</Typography>
            </Stack>
            <Stack>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              name="travelDate"
              label="Travel Date"
              type="date"
              fullWidth
              value={formDataTravel.travelDate}
              onChange={handleChangeTravel}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          {/* Other fields go here similarly */}
          <Grid item xs={6}>
            <TextField
              select
              name="tripType"
              label="Type of Trip"
              fullWidth
              value={formDataTravel.tripType}
              onChange={handleChangeTravel}
            >
              {TripTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
          Submit
        </Button>
      </form>
            </Stack>
        </Box>
    </Container>
  )
}

export default TravelDetails
