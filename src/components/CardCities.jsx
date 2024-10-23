import React, { useEffect, useState } from "react";

export default function Cities() {
  const [citiesData, setCitiesData] = useState([]); // Estado para almacenar los datos de las ciudades
  const [loading, setLoading] = useState(true); // Estado para indicar si los datos están cargando

  useEffect(() => {
    // Reemplaza 'API_URL' con la URL real de la API que estás utilizando
    fetch('API_URL')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Ajusta esto según la estructura de tu API
        setCitiesData(data); // Almacena los datos en el estado
        setLoading(false); // Cambia el estado de carga a falso
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setLoading(false); // Cambia el estado de carga a falso en caso de error
      });
  }, []); // El array vacío asegura que esto se ejecute una vez al montar el componente

  if (loading) {
    return <div>Loading...</div>; // Muestra un mensaje de carga mientras se esperan los datos
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {citiesData.map(city => (
        <div key={city.id} className="border rounded shadow-lg p-4">
          <img src={city.image} alt={city.name} className="w-full h-32 object-cover rounded" />
          <h3 className="text-lg font-semibold">{city.name}</h3>
          <button className="mt-2 bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600">
            View More
          </button>
        </div>
      ))}
    </div>
  );
}
