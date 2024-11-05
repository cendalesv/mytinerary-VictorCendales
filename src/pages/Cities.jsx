// Cities.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importar Link

function Cities() {
  // Estado para almacenar los datos de las ciudades
  const [citiesData, setCitiesData] = useState([]);
  // Estado para almacenar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Función para obtener las ciudades desde la API
  const fetchCities = async () => {
    try {
      // Hacer la solicitud a la API
      const response = await fetch("http://localhost:8080/api/cities/all");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      // Verificar si la respuesta contiene un array
      if (Array.isArray(data.response)) {
        setCitiesData(data.response); // Actualizar el estado con los datos
      } else {
        console.error("Response is not an array:", data);
        setCitiesData([]); // Limpiar datos en caso de error
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
      setCitiesData([]); // Limpiar datos en caso de error
    }
  };

  // Efecto que se ejecuta al montar el componente
  useEffect(() => {
    fetchCities(); // Llamar a la función para obtener ciudades
  }, []); // Dependencias vacías para ejecutarlo una vez

  // Filtrar las ciudades según el término de búsqueda
  const filteredCities = citiesData.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-2xl font-bold mb-2 md:mb-0">Cities</h1>
        <input
          type="text"
          placeholder="Search cities..."
          className="border border-gray-300 rounded-lg p-2 w-full md:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Actualizar término de búsqueda
        />
      </div>
      {filteredCities.length === 0 ? ( // Comprobar si hay ciudades filtradas
        <div className="flex flex-col items-center justify-center py-10 bg-gray-100 rounded-lg border border-gray-300">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/6328/6328501.png" // URL de imagen de 200x200
            alt="No Cities" 
            className="mb-4 w-52 h-52" // Establecer dimensiones 200px x 200px
          />
          <h2 className="text-xl font-bold text-gray-700">No cities found.</h2>
          <p className="text-gray-500 mb-4">Try searching for another city.</p>
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => setSearchTerm("")} // Clear search term
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredCities.map((city) => (
            <div key={city._id} className="bg-white border border-gray-300 rounded-lg p-4 shadow-md">
              <img 
                src={city.photo || "https://via.placeholder.com/150"} // Imagen de la ciudad
                className="w-full h-32 object-cover rounded-t-lg"
                
              />
              <h2 className="text-lg font-semibold mt-2">{city.name}</h2>
              <div className="text-left">
                <Link to={`/CityDetail/${city._id}`}>
                  <button className="mt-4 bg-blue-500 text-white py-1 px-3 text-sm rounded hover:bg-blue-600">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cities;
