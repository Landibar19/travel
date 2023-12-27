import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  travelData: [],
};

const travelSlice = createSlice({
  name: 'travel',
  initialState,
  reducers: {
    updateTravelData(state, action){
      state.travelData = action.payload;
    },
  },
});

export const { updateTravelData } = travelSlice.actions;

export const selectTravelData = (state) => state.travel.travelData;

export default travelSlice.reducer;
