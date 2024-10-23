import React, { useState, useEffect } from "react";

function Cities() {
  const [citiesData, setCitiesData] = useState([]); // Inicializa como un array
  const [searchTerm, setSearchTerm] = useState("");

  // Función para obtener las ciudades de la API
  const fetchCities = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/cities/all"); // Cambia esto si es necesario
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      // Accede a los datos en el objeto
      if (Array.isArray(data.response)) {
        setCitiesData(data.response); // Asegúrate de establecer los datos correctos
      } else {
        console.error("La respuesta no es un array:", data);
        setCitiesData([]); // Establece un array vacío en caso de error
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
      setCitiesData([]); // Establece un array vacío en caso de error
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const filteredCities = citiesData.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Cities</h1>
        <input
          type="text"
          placeholder="Search cities..."
          className="border border-gray-300 rounded-lg p-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredCities.length === 0 ? (
        <p>No cities found.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {filteredCities.map((city) => (
            <div key={city._id} className="bg-white border border-gray-300 rounded-lg p-4 shadow-md">
              <h2 className="text-lg font-semibold">{city.name}</h2>
              <p className="text-gray-600">This is a description for {city.name}.</p>
              <div className="text-left">
                <button className="mt-4 bg-blue-500 text-white py-1 px-3 text-sm rounded hover:bg-blue-600">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cities;
