import React, { useEffect, useState } from 'react';
import { getAllDesignations, deleteDesignation } from '../../services/api';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const DesignationList = ({ onEdit }) => {
  const [designations, setDesignations] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    fetchDesignations();
  }, []);

  const fetchDesignations = async () => {
    const response = await getAllDesignations();
    setDesignations(response.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this designation?')) {
      await deleteDesignation(id);
      fetchDesignations();
    }
  };

  const handleAddNew = () => {
    navigate('/add-designation'); // Navigate to the 'Add New Designation' page
  };

  return (
    <div>
      <button
        className="btn btn-success mb-3"
        onClick={handleAddNew}
      >
        Add New
      </button>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Code</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {designations.map((desig) => (
            <tr key={desig.desigId}>
              <td>{desig.desigId}</td>
              <td>{desig.desigCode}</td>
              <td>{desig.desigName}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEdit(desig)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(desig.desigId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DesignationList;
