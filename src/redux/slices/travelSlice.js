import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  travelData: {
    travelDate: '',
    destination: '',
    budget: '',
    airportName: '',
    tripType: '', // Change this to an appropriate default value
  },
};

const travelSlice = createSlice({
  name: 'travel',
  initialState,
  reducers: {
    updateTravelData: (state, action) => {
      state.travelData = action.payload;
    },
  },
});

export const { updateTravelData } = travelSlice.actions;

export const selectTravelData = (state) => state.travel.travelData;

export default travelSlice.reducer;
