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

  useEffect(() => {
    const fetchCityDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/cities/id/${cityid}`);
        if (!response.ok) {
          throw new Error(`Error fetching city details: ${response.status}`);
        }
        const data = await response.json();
        setCityData(data.response);
      } catch (error) {
        console.error("Error fetching city details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCityDetails();
  }, [cityid]);

  const fetchItineraries = async () => {
    if (!cityData || !cityData.itinerary) return;
    
    setItinerariesLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/api/itineraries/${cityData.itinerary}`);
      if (!response.ok) {
        throw new Error("Error fetching itineraries");
      }
      const data = await response.json();
      setItineraries([data.response]); // Asignamos el itinerario encontrado
    } catch (error) {
      console.error("Error fetching itineraries:", error);
    } finally {
      setItinerariesLoading(false);
    }
  };

  const handleOpenModal = () => {
    fetchItineraries();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <p>Loading city details...</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {cityData ? (
        <div className="flex flex-col items-center space-y-6 max-w-full w-full">
          {/* Image box */}
          <div className="w-full h-80 max-w-2xl rounded-lg overflow-hidden shadow-lg">
            <img
              src={cityData.photo || "https://via.placeholder.com/150"}
              alt={cityData.name || "City"}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details box */}
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
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                onClick={handleOpenModal}
              >
                Itineraries
              </button>
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <h3 className="text-xl font-bold mb-4">Itineraries for {cityData.name}</h3>
                {itinerariesLoading ? (
                  <p>Loading itineraries...</p>
                ) : itineraries.length > 0 ? (
                  itineraries.map((itinerary) => (
                    <div key={itinerary._id} className="mb-4">
                      <h4 className="text-lg font-semibold">{itinerary.name}</h4>
                      <p>{itinerary.description}</p>
                    </div>
                  ))
                ) : (
                  <p>No itineraries found for this city.</p>
                )}
                <button
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>City not found...</p>
      )}
    </div>
  );
}

export default CityDetail;
