import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Login submitted');
    // Example: Navigate to register after successful login
    // navigate('/register');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-200">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md transform transition duration-300 hover:shadow-3xl">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-indigo-700 tracking-tight">Welcome Back</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username" className="block text-base font-semibold text-gray-700 mb-2">Username:</label>
            <input type="text" id="username" name="username" className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-inner focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out focus:ring-2 focus:ring-indigo-300 placeholder-gray-400" />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="block text-base font-semibold text-gray-700 mb-2">Password:</label>
            <input type="password" id="password" name="password" className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-inner focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out focus:ring-2 focus:ring-indigo-300 placeholder-gray-400" />
          </div>
          <button type="submit" className="w-full py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-[1.01]">Sign In</button>
          <button 
            type="button" 
            onClick={() => navigate('/register')} 
            className="w-full py-3 px-4 border border-indigo-300 rounded-lg shadow-md text-lg font-semibold text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
