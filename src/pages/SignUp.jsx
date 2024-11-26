import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    photoUrl: '',
    country: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Please enter your first name.';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Please enter your last name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Please enter a password.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    if (!formData.photoUrl.trim()) {
      newErrors.photoUrl = 'Please provide a photo URL.';
    } else if (!/^https?:\/\/.*\.(jpeg|jpg|png|gif|webp)$/i.test(formData.photoUrl)) {
      newErrors.photoUrl = 'Photo URL must be a valid image link.';
    }
    if (!formData.country) {
      newErrors.country = 'Please select a country.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Enviar datos al backend aquí
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-lg font-bold text-center mb-3">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className={`mt-1 px-2 py-1 w-full border rounded text-sm ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>

          <div className="mb-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className={`mt-1 px-2 py-1 w-full border rounded text-sm ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
          </div>

          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 px-2 py-1 w-full border rounded text-sm ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 px-2 py-1 w-full border rounded text-sm ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div className="mb-2">
            <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              id="photoUrl"
              type="url"
              value={formData.photoUrl}
              onChange={handleChange}
              className={`mt-1 px-2 py-1 w-full border rounded text-sm ${
                errors.photoUrl ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.photoUrl && <p className="text-red-500 text-xs mt-1">{errors.photoUrl}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              id="country"
              value={formData.country}
              onChange={handleChange}
              className={`mt-1 px-2 py-1 w-full border rounded bg-white text-sm ${
                errors.country ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select your country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="mx">Mexico</option>
            </select>
            {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-1 rounded text-sm hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center my-2 text-sm">or</div>
        <button
          type="button"
          className="w-full flex items-center justify-center bg-red-500 text-white py-1 rounded text-sm hover:bg-red-600 transition"
        >
          <FaGoogle className="mr-2" /> Sign Up with Google
        </button>
        <p className="text-xs text-center mt-3">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
