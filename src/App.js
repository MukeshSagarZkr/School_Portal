import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/UserDetails/LoginForm';
import DesignationList from './components/Designation/DesignationList'; // Adjust the import path
import AddDesignationPage from './components/Designation/AddDesignationPage'; // Adjust the import path

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/designation" element={<DesignationList />} />
        <Route path="/add-designation" element={<AddDesignationPage />} />
        {/* You can add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
