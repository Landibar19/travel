import React from 'react';
import { useDispatch } from 'react-redux';
import { addFormData } from '../../redux/slices/FormSlices';
 

const AddFormButton = ({ formData }) => {
  const dispatch = useDispatch();

  const handleAddForm = () => {
    dispatch(addFormData({
        formData: formData})); 
  };

  return (
    <div>
      <h2>Add Form</h2>
      <button onClick={handleAddForm}>Add Form</button>
    </div>
  );
};

export default AddFormButton;
