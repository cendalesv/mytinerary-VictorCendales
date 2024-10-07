import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import CallToAction from './components/CallToAction'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6">       
        <Carousel /> 
      </main>
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
