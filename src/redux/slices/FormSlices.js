import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    formData: {
      name: '',
      lastName: '',
      address: '',
      email: '',
      celNumber: '',
      
    },
  },
  reducers: {
    updateFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { updateFormData } = formSlice.actions;

export const selectFormData = (state) => state.form.formData;

export default formSlice.reducer;
