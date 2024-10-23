// CityDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function CityDetail() {
  const { cityId } = useParams(); // Obtener el ID de la ciudad de los parámetros de la URL
  const [city, setCity] = useState(null);
  const navigate = useNavigate(); // Hook para redirigir

  // Función para obtener los detalles de la ciudad
  const fetchCityDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/cities/${cityId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCity(data); // Almacenar los datos de la ciudad en el estado
    } catch (error) {
      console.error("Error fetching city details:", error);
    }
  };

  useEffect(() => {
    fetchCityDetails(); // Llamar a la función para obtener los detalles de la ciudad
  }, [cityId]); // Ejecutar cada vez que el cityId cambie

  if (!city) return <div>Cargando...</div>; // Mostrar un mensaje de carga

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-md p-4">
        <img 
          src={city.photo || "https://via.placeholder.com/300"} 
          alt={city.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <h1 className="text-2xl font-bold mt-4">{city.name}</h1>
        <p className="mt-2"><strong>País:</strong> {city.country}</p>
        <p className="mt-2"><strong>Continente:</strong> {city.continent}</p>
        <p className="mt-2"><strong>Descripción:</strong> {city.description}</p>
        <p className="mt-2"><strong>Insignia:</strong> {city.badge}</p>
        <p className="mt-2"><strong>Religión:</strong> {city.religion}</p>
        <button 
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => navigate('/Cities')} // Volver a la página de ciudades
        >
          Volver a Ciudades
        </button>
      </div>
    </div>
  );
}

export default CityDetail;
