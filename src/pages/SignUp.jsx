import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    photoURL: '',
    country: '',
  });

  const countries = ['United States', 'Canada', 'Mexico', 'Colombia', 'Spain'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Aquí puedes enviar los datos al backend o procesarlos según tu lógica
  };

  const handleGoogleSignUp = () => {
    console.log('Sign up with Google');
    // Lógica para autenticación con Google
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="text"
            name="photoURL"
            value={formData.photoURL}
            onChange={handleChange}
            placeholder="Photo URL"
            className="w-full p-3 border rounded"
          />
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          >
            <option value="">Select Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={handleGoogleSignUp}
          className="w-full py-3 mt-4 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Sign Up with Google
        </button>
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
