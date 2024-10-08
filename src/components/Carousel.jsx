import React from "react"
import Slider from "react-slick"
import newYorkImg from '../assets/img/newyork.jpg'
import londresImg from '../assets/img/londres.jpg'
import parisImg from '../assets/img/paris.jpg'
import tokyoImg from '../assets/img/tokio.jpg'
import sydneyImg from '../assets/img/sydney.jpg'
import romaImg from '../assets/img/roma.jpg'
import barcelonaImg from '../assets/img/barcelona.jpg'
import dubaiImg from '../assets/img/dubai.jpg'
import berlinImg from '../assets/img/berlin.jpg'
import torontoImg from '../assets/img/toronto.jpg'
import bogotaImg from '../assets/img/bogota.jpg'
import hawaiImg from '../assets/img/Hawai.jpg'

const cities = [
  { name: "New York", img: newYorkImg },
  { name: "Londres", img: londresImg },
  { name: "Paris", img: parisImg },
  { name: "Tokyo", img: tokyoImg },
  { name: "Sydney", img: sydneyImg },
  { name: "Rome", img: romaImg },
  { name: "Barcelona", img: barcelonaImg },
  { name: "Dubai", img: dubaiImg },
  { name: "Berlin", img: berlinImg },
  { name: "Toronto", img: torontoImg },
  { name: "Bogota", img: bogotaImg },
  { name: "Hawai", img: hawaiImg }
];

function CarouselWithText () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    const slides = [];
    for (let i = 0; i < cities.length; i += 4) {
      slides.push(cities.slice(i, i + 4));
    }
  
  return (
  <div className="w-full mt-8">
  <h2 className="text-3xl font-bold text-center mb-6">Popular Itineraries</h2>
  {/* Contenedor con flex-col para pantallas pequeñas y flex-row para pantallas grandes */}
  <div className="flex flex-col md:flex-row justify-between">
    {/* Columna del carrusel */}
    <div className="w-full md:w-2/3">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="p-4">
            {/* Grid 2x2 para mostrar las 4 imágenes por slide */}
            <div className="grid grid-cols-2 gap-4">
              {slide.map((city, i) => (
                <div key={i} className="relative">
                  <img
                    src={city.img}
                    alt={city.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                    {city.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center p-4 md:p-4 lg:p-8 md:ml-6 lg:ml-10 md:mr-2 lg:mr-4 bg-gray-100 rounded-lg shadow-md mt-4 md:mt-0 h-auto md:h-96 lg:h-[440px] overflow-hidden">
      <h3 className="text-2xl md:text-xl lg:text-2xl font-semibold mb-12 mt-10 md:mt-6 lg:mt-8">Find the perfect destination</h3>
      <p className="text-gray-600 text-lg md:text-base lg:text-lg mt-6 md:mt-4 lg:mt-6">
      Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 lg:py-3 lg:px-6 mt-auto md:py-1 md:px-3 rounded">
      View more
      </button>
    </div>



  </div>
</div>

)
}
  
export default CarouselWithText
