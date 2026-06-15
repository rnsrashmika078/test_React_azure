import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <p>This is the registration page.</p>
      <Link to="/login">Go to Login</Link>
    </div>
  );
};

export default Register;