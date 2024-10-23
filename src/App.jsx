import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import CallToAction from './components/CallToAction'
import NotFound from './pages/NotFound'
import Cities from './pages/Cities'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Home() {
  return (
    <div>
      <Carousel />
      <CallToAction />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cities" element={<Cities />} />
            <Route path="*" element={<NotFound />} /> {}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
