import React from 'react';

const Layout = ({ children }) => (
  <div className="container mt-5">
    <h1 className="text-center mb-4">Designation Management</h1>
    {children}
  </div>
);

export default Layout;
