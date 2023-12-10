import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Stack, Typography, Box, MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import bookFormBg from '../../assets/bookFormBg.jpg';
import NavBar from '../../components/navBar/NavBar';
import TravelerDetails from '../../components/TravelForm/TravelerDetails';

const TripTypes = [
    { value: 'business', label: 'Business' },
    { value: 'vacation', label: 'Vacation' },
    { value: 'honeymoon', label: 'Honeymoon' },
    { value: 'family', label: 'Family' },
    { value: 'solo', label: 'Solo' },
  ];

const BookForm = () => {
  const dispatch = useDispatch();

  const [forms, setForms] = useState([<TravelerDetails key={0} id={0}/>])

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    address: '',
    email: '',
    celNumber: '',
  
  });
  const [formDataTravel, setFormDataTravel] = useState({
    travelDate: '',
    destination: '',
    budget: '',
    airportName: '',
    tripType: '', 
  });
  const handleAddForm = () => {
    const newForms = [...forms, <TravelerDetails key={forms.length}  id={forms.length}/>];
    setForms(newForms);
  };
  const handleRemoveForm = (id) => {
    const updatedForms = forms.filter((form) => form.props.id !== id);
    setForms(updatedForms);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container maxWidth= {false} disableGutters>
        <NavBar/>
        <Box>
            <Stack>
                <img 
                src={bookFormBg} 
                alt='' 
                style={{
                    position: 'relative',
                    display: 'flex',
                    backgroundSize:'cover',
                    backgroundPosition: 'center',
                    height: '45vw',
                    width: '100%',
                    zIndex: -10,
                    filter: `brightness(${'70%'})`
                }}
                />
            </Stack>
            <Stack sx={{
                width: '60%',
                position: 'absolute',
                top: '17vw'
            }}>
                <Typography sx={{fontSize: '4vw',color: 'white',fontFamily: 'Bebas Neue'}}>
                    Embark on Adventures
                </Typography>
                <Typography sx={{fontSize: '4vw',color: 'rgb(255, 192, 0)' ,fontFamily: 'Bebas Neue'}} >
                    Book Memories: Travel with Us Today!
                </Typography>
            </Stack>
        </Box>
        <Container maxWidth='xxl' disableGutters sx={{backgroundColor: 'rgb(38,166,166)'}}>
        <Typography 
        sx={{fontSize: '4vw', 
        fontFamily: 'Montserrat', 
        color: 'white', 
        fontWeight: 'bold',
        }}
        >
            Travel Agency Booking Form
        </Typography>
        <Box position='relative' padding='3%'>
        {forms.map((form, index) => (
        <Box key={index} 
        sx={{display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'column'}}>
            <Stack 
            sx={{
                border: '1px solid', 
                backgroundColor: 'rgb(255, 192, 0, 0.9)',
                width: '87%', 
                borderRadius:'8px',
                margin: '3%'
            }}
            >
            <Typography sx={{ fontSize:{xs: '3.5vw',sm: '2.5vw'}}}>
                Traveler Information {index + 1}
            </Typography>
            </Stack>
          {form}
        {index==0 ? ( <Button
            variant="contained"
            color="secondary"
            onClick={() => handleRemoveForm(form.props.id)}
            sx={{padding: '3px', marginLeft:'50%'}}
            disabled
          >
            Remove
          </Button>) :(
            <Button
            variant="contained"
            color="secondary"
            onClick={() => handleRemoveForm(form.props.id)}
            sx={{padding: '3px', marginLeft:'50%'}}
          >
            Remove
          </Button>
          )
}
        </Box>
      ))}
      <Button 
      sx={{padding: '3px',
       margin:'3px', 
       position: 'absolute', 
       left: '20%',
       bottom: '2.6vw',
       textTransform: 'capitalize'
       }} 
       variant="contained" 
       color="primary" 
       onClick={handleAddForm}>
        Add Form
      </Button>
      <Button  
      variant="contained" 
      color="primary" 
      sx={{padding: '3px',
       margin:'3px', 
       position: 'absolute', 
       bottom: '2.6vw',
       left: '45%'
       }}
      onClick={handleSubmit}
      >
        Submit
      </Button>
        </Box>
        </Container>
    </Container>
    
  );
};

export default BookForm;
