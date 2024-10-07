import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity } from '@fortawesome/free-solid-svg-icons'

function CallToAction () {
  return (
    <section className="relative bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: "url('https://source.unsplash.com/featured/?city,buildings')" }}>
      <div className="bg-black bg-opacity-60 p-8 rounded-lg text-center text-white animate__animated animate__fadeIn">
        <FontAwesomeIcon icon={faCity} size="4x" className="text-yellow-500 mb-4" />
        <h2 className="text-4xl font-bold mb-2">Explore Amazing Cities</h2>
        <a href="/cities" className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition duration-300 transform hover:scale-105">
          Go to Cities
        </a>
      </div>
    </section>
  );
};

export default CallToAction
