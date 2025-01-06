import React from 'react';
import DesignationForm from './DesignationForm'; // Assuming the form component is in the same folder

const AddDesignationPage = () => {
  const handleSave = () => {
    // You can handle any additional logic here after saving
    alert('Designation saved!');
  };

  return (
    <div className="container mt-4">
      <h2>Add New Designation</h2>
      <DesignationForm onSave={handleSave} />
    </div>
  );
};

export default AddDesignationPage;
