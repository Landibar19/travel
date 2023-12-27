import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    formDataTraveler: [{name: '',lastName: '',address: '',email: '',celNumber: '', price:0}],
    formDataTravel: {}
  
   
  },
  reducers: {
    addFormDataTraveler(state, action){
      state.formDataTraveler = action.payload
    },
    addFormDataTravel(state, action){
      state.formDataTravel = action.payload
    },
  },
  
});

export const { addFormDataTraveler,addFormDataTravel } = formSlice.actions;

export default formSlice.reducer;
