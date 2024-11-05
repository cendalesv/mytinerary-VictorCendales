import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CityDetail() {
  const { cityid } = useParams();
  const navigate = useNavigate();
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itineraries, setItineraries] = useState([]);
  const [itinerariesLoading, setItinerariesLoading] = useState(false);

  // Función para obtener detalles de la ciudad
  useEffect(() => {
    const fetchCityDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/cities/id/${cityid}`);
        if (!response.ok) throw new Error(`Error fetching city details: ${response.status}`);
        
        const data = await response.json();
        console.log("City data:", data);  // <-- Revisar los datos de la ciudad
        setCityData(data.response);
      } catch (error) {
        console.error("Error fetching city details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCityDetails();
  }, [cityid]);

  // Función para obtener itinerarios relacionados a la ciudad
  const fetchItineraries = async () => {
    if (!cityData || !cityData.itinerary) {
      console.log("No itinerary data found in city data.");  // <-- Verifica si hay itinerario
      return;
    }

    setItinerariesLoading(true);
    try {
      // Asegúrate de que cityData.itinerary tenga el ID correcto
      const response = await fetch(`http://localhost:8080/api/itineraries/id/${cityData.itinerary}`);
      if (!response.ok) throw new Error("Error fetching itineraries");

      const data = await response.json();
      console.log("Itineraries data:", data);  // <-- Revisar los datos del itinerario
      setItineraries(data.response); // Cambia esto para establecer itinerarios directamente
    } catch (error) {
      console.error("Error fetching itineraries:", error);
    } finally {
      setItinerariesLoading(false);
    }
  };

  // Abrir el modal y cargar los itinerarios
  const handleOpenModal = () => {
    fetchItineraries();
    setIsModalOpen(true);
  };

  // Cerrar el modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (loading) return <p>Loading city details...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {cityData ? (
        <div className="flex flex-col items-center space-y-6 max-w-full w-full">
          <div className="w-full h-80 max-w-2xl rounded-lg overflow-hidden shadow-lg">
            <img
              src={cityData.photo || "https://via.placeholder.com/150"}
              alt={cityData.name || "City"}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 w-full">
            <h1 className="text-2xl font-bold mb-4 text-center">{cityData.name || 'City Name'}</h1>
            <p className="text-lg mb-4 text-gray-700 text-center">{cityData.Description || 'Description not available'}</p>

            <div className="border-t pt-4 mt-4">
              <h2 className="text-xl font-semibold mb-2 text-center">Details</h2>
              <p className="text-gray-600 text-center"><strong>Country:</strong> {cityData.Country || 'Country not available'}</p>
              <p className="text-gray-600 text-center"><strong>Continent:</strong> {cityData.Continent || 'Continent not available'}</p>
              <p className="text-gray-600 text-center"><strong>Religion:</strong> {cityData.religion || 'Religion not available'}</p>
              <p className="text-gray-600 text-center"><strong>Badge:</strong> {cityData.Badge || 'Badge not available'}</p>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => navigate('/cities')}
                className="bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300"
              >
                Back to Cities
              </button>
              <button
                onClick={handleOpenModal}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Itineraries
              </button>
            </div>
          </div>

          {/* Modal para mostrar itinerarios */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg p-6 shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Itineraries for {cityData.name}</h2>
                {itinerariesLoading ? (
                  <p>Loading itineraries...</p>
                ) : itineraries.length > 0 ? (
                  <ul className="space-y-2">
                    {itineraries.map((itinerary) => (
                      <li key={itinerary._id} className="p-2 border rounded">
                        <h3 className="font-bold">{itinerary.publisherName}</h3>
                        <p>Price: ${itinerary.price}</p>
                        <p>Duration: {itinerary.duration} hours</p>
                        <p>Likes: {itinerary.likes}</p>
                        <p>Hashtags: {itinerary.hashtags.join(", ")}</p>
                        {itinerary.comments.length > 0 && (
                          <div>
                            <h4 className="font-semibold">Comments:</h4>
                            <ul>
                              {itinerary.comments.map((comment) => (
                                <li key={comment._id}>
                                  <strong>{comment.user}:</strong> {comment.text} on {new Date(comment.date).toLocaleDateString()}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No itineraries found for this city.</p>
                )}
                <button
                  onClick={handleCloseModal}
                  className="mt-4 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>City data not found.</p>
      )}
    </div>
  );
}

export default CityDetail;
