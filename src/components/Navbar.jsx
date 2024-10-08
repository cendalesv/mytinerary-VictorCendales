import React from 'react'

function Navbar() {
  return (
    <nav className="bg-gray-800 p-12">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-white text-3xl font-bold ml-0">
          My Tinerary
        </div>
        
        <div className="space-y-2 flex flex-col items-end sm:flex-row sm:space-y-0 sm:space-x-10">
          <a href="/" className="text-white text-lg hover:text-gray-300">
            Home
          </a>
          <a href="/cities" className="text-white text-lg hover:text-gray-300">
            Cities
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
