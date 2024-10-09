import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Para los iconos de hamburguesa y cerrar

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-12">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Título de la izquierda */}
        <div className="text-white text-3xl font-bold ml-0">
          My Tinerary
        </div>

        {/* Menú normal (visible en pantallas medianas y grandes) */}
        <div className="hidden sm:flex space-x-10">
          <a href="/" className="text-white text-lg hover:text-gray-300">
            Home
          </a>
          <a href="/cities" className="text-white text-lg hover:text-gray-300">
            Cities
          </a>
          <a href="/login" className="text-white text-lg hover:text-gray-300">
            Login
          </a>
        </div>

        {/* Ícono de hamburguesa (visible solo en pantallas pequeñas) */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
          </button>
        </div>
      </div>

      {/* Menú hamburguesa (visible solo cuando se abre en pantallas pequeñas) */}
      {isOpen && (
        <div className="sm:hidden mt-4">
          <a href="/" className="block text-white text-lg py-2 hover:text-gray-300">
            Home
          </a>
          <a href="/cities" className="block text-white text-lg py-2 hover:text-gray-300">
            Cities
          </a>
          <a href="/login" className="block text-white text-lg py-2 hover:text-gray-300">
            Login
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
