import React from 'react';
import { useDispatch } from 'react-redux';

import { submitFormData } from '../../redux/slices/FormSlices';

const SubmitButton = ({ allFormData }) => {
  const dispatch = useDispatch();

  const handleSubmitAllForms = () => {
    dispatch(submitFormData(allFormData)); 
  }
  return (
    <div>
      <h2>Submit All Forms</h2>
      <button onClick={handleSubmitAllForms}>Submit All Forms</button>
    </div>
  );
};

export default SubmitButton;
