import React, { useState, useEffect } from 'react';
import { addDesignation, updateDesignation } from '../../services/api';

const DesignationForm = ({ currentDesig, onSave }) => {
  const [formData, setFormData] = useState({
    desigCode: '',
    desigName: '',
    desigCmpId: '',
    desigSchId: '',
    isActive: true,
  });

  useEffect(() => {
    if (currentDesig) {
      setFormData(currentDesig);
    }
  }, [currentDesig]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentDesig) {
      await updateDesignation(currentDesig.desigId, formData);
    } else {
      await addDesignation(formData);
    }
    onSave();
    setFormData({
      desigCode: '',
      desigName: '',
      desigCmpId: '',
      desigSchId: '',
      isActive: true,
    });
  };

  return (
    <div className="container mt-4">
      <h2>{currentDesig ? 'Update Designation' : 'Add Designation'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Code</label>
          <input
            type="text"
            className="form-control"
            name="desigCode"
            value={formData.desigCode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="desigName"
            value={formData.desigName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Company ID</label>
          <input
            type="number"
            className="form-control"
            name="desigCmpId"
            value={formData.desigCmpId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Schedule ID</label>
          <input
            type="number"
            className="form-control"
            name="desigSchId"
            value={formData.desigSchId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="isActive"
            checked={formData.isActive}
            onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
          />
          <label className="form-check-label">Active</label>
        </div>

        <button type="submit" className="btn btn-primary">
          {currentDesig ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default DesignationForm;
