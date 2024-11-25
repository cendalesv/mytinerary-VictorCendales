import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Cambiamos <a> por <Link> para usar react-router

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-3xl font-bold">
          <Link to="/">My Tinerary</Link>
        </div>

        {/* Menú normal */}
        <div className="hidden sm:flex space-x-8">
          <Link to="/" className="text-white text-lg hover:text-gray-300">
            Home
          </Link>
          <Link to="/cities" className="text-white text-lg hover:text-gray-300">
            Cities
          </Link>
          <Link to="/signup" className="text-white text-lg hover:text-gray-300">
            Sign Up
          </Link>
        </div>

        {/* Botón hamburguesa */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Menú hamburguesa (visible solo cuando se abre en pantallas pequeñas) */}
      {isOpen && (
        <div className="sm:hidden mt-4 space-y-2">
          <Link to="/" className="block text-white text-lg hover:text-gray-300">
            Home
          </Link>
          <Link to="/cities" className="block text-white text-lg hover:text-gray-300">
            Cities
          </Link>
          <Link to="/signup" className="block text-white text-lg hover:text-gray-300">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
