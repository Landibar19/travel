export const validateField = (name, value, errors) => {
    const newErrors = { ...errors };
  
    switch (name) {
      case 'name':
        newErrors.name = value.trim() === '' ? 'Name is required' : '';
        break;
      case 'lastName':
        newErrors.lastName = value.trim() === '' ? 'Last Name is required' : '';
        break;
      case 'email':
        newErrors.email = !/\S+@\S+\.\S+/.test(value) ? 'Invalid email format' : '';
        break;
      case 'celNumber':
        newErrors.celNumber = !/^\d{10}$/.test(value) ? 'Enter a valid 10-digit number' : '';
        break;
      case 'address':
        newErrors.address = value.trim().length < 5 ? 'Address should be at least 5 characters' : '';
        break;
      case 'destination':
        newErrors.destination = value.trim() === '' ? 'Destination is required' : '';
        break;
      case 'travelDate':
        newErrors.travelDate = value.trim() === '' ? 'TravelDate is required' : '';
        break;
      case 'airportName': 
        newErrors.airportName = value.trim() === '' ? 'Airport is required' : '';
        break;
      case 'tripType':
        newErrors.tripType = value.trim() === '' ? 'Type of trip is required' : '';
      default:
        break;
    }
  
    return newErrors;


    
  };
  