import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset any previous error message
    setLoading(true);

    try {
      // Send GET request to the API to validate the user
      const response = await axios.get(`https://localhost:7205/api/UserDetails`, {
        params: { username, password }
      });

      // If login is successful
      alert('Login successful!');
      console.log(response.data); // User details returned from the API
      // Redirect or update state here based on response
    } catch (err) {
      setLoading(false);
      if (err.response) {
        // API returned error response
        setError(err.response.data || 'An error occurred. Please try again.');
      } else {
        // Network error or other issues
        setError('Network error. Please try again later.');
      }
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
