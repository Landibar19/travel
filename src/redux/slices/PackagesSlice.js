import { createSlice } from '@reduxjs/toolkit'

const initialState = {
packages : localStorage.getItem('packages')
? JSON.parse(localStorage.getItem('packages'))
: [],

}

const PackageSlice = createSlice({
  name: 'travelPackages',
  initialState,
  reducers: {
    ADD_PACKAGES(state, action){
        state.packages = action.payload.packages
        localStorage.setItem("packages", JSON.stringify(state.packages));
        console.log(action.payload)
    },
    
    SELECT_PACKAGES(state,action){
      state.selectedPackages=action.payload
    }

  }
});
export const {ADD_PACKAGES, SELECT_PACKAGES} = PackageSlice.actions
export const selectaddPackages = (state) => state.travelPackages.packages;
export const selectPackages = (state) => state.travelPackages.selectedPackages;

export default PackageSlice.reducer