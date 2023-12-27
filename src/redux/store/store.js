
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import packagesReducer from '../slices/PackagesSlice';
import formReducer from '../slices/FormSlices';
import travelDataReducer from '../slices/travelSlice'

const rootReducer = combineReducers({
    travelPackages: packagesReducer,
    form: formReducer,
    travel: travelDataReducer,
    
    
    });
    
    const store = configureStore({
        reducer:rootReducer, 
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
        }),
})
    
    export default store;


