export const validateForm = (formDataTraveler, formDataTravel) => {
    const isTravelDetailsInvalid = formDataTravel.destination.trim() === '' ||
      formDataTravel.travelDate.trim() === '' ||
      formDataTravel.airportName.trim() === '' ||
      formDataTravel.tripType.trim() === '' ||
      formDataTravel.destination.length < 3 ||
      formDataTravel.airportName.length < 3;
  
    const isTravelerInvalid = formDataTraveler.some((traveler) => (
      traveler.name.trim() === '' ||
      traveler.lastName.trim() === '' ||
      !/\S+@\S+\.\S+/.test(traveler.email) ||
      !/^\d{10}$/.test(traveler.celNumber) ||
      traveler.address.trim().length < 5
    ));
  
    return isTravelDetailsInvalid || isTravelerInvalid;
  };
  