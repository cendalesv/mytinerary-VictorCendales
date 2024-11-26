// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import CallToAction from './components/CallToAction';
import NotFound from './pages/NotFound';
import Cities from './pages/Cities';
import CityDetail from './pages/CityDetail';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';


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
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Cities" element={<Cities />} />
              <Route path="/CityDetail/:cityid" element={<CityDetail />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
