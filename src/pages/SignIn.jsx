import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = 'Por favor, ingresa tu correo electrónico.';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = 'El correo electrónico no es válido.';
    }
    if (!password.trim()) {
      newErrors.password = 'Por favor, ingresa tu contraseña.';
    } else if (password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Datos enviados:', { email, password });
      // Aquí puedes enviar los datos al backend
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-lg font-bold text-center mb-4">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 px-3 py-2 w-full border rounded text-sm ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`mt-1 px-3 py-2 w-full border rounded text-sm ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded text-sm hover:bg-blue-600 transition"
          >
            Iniciar Sesión
          </button>
        </form>
        <div className="text-center my-2 text-sm">o</div>
        <button
          type="button"
          className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded text-sm hover:bg-red-600 transition"
        >
          <FaGoogle className="mr-2" /> Iniciar sesión con Google
        </button>
      </div>
    </div>
  );
}

export default SignIn;
