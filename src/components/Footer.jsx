import React from "react"

function Footer () {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">       
        <div className="w-full md:w-1/3 text-center md:text-left">
          <ul>
            <li className="mb-2 ml-5">
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li className="mb-2 ml-5">
              <a href="#" className="hover:underline">Cities</a>
            </li>
            <li className="mb-2 ml-5">
              <a href="#" className="hover:underline">Login</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-center">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="mb-1">Bogotá - Colombia</p>
          <p className="mb-1">Email: cendalescaceres@hotmail.com</p>
          <p>Phone: (+57) 310-5604444</p>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right mr-5">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <ul>
            <li className="mb-2">
              <a href="https://www.facebook.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href="https://www.instagram.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li className="mb-2">
              <a href="https://www.twitter.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
