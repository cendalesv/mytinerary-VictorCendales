import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function CityDetail() {
  const { cityid } = useParams();
  const navigate = useNavigate();
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showItineraries, setShowItineraries] = useState(false);
  const [itineraries, setItineraries] = useState([]);
  const [itinerariesLoading, setItinerariesLoading] = useState(false);

  // Obtener detalles de la ciudad
  useEffect(() => {
    const fetchCityDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/cities/id/${cityid}`
        );
        if (!response.ok)
          throw new Error(`Error fetching city details: ${response.status}`);
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

  // Obtener itinerarios relacionados a la ciudad
  const fetchItineraries = async () => {
    if (!cityData || !cityData.itinerary || cityData.itinerary.length === 0)
      return;

    setItinerariesLoading(true);
    try {
      const itineraryIds = Array.isArray(cityData.itinerary)
        ? cityData.itinerary
        : [cityData.itinerary];
      const itineraryPromises = itineraryIds.map((id) =>
        fetch(`http://localhost:8080/api/itineraries/id/${id}`).then((res) =>
          res.json()
        )
      );

      const itineraryResponses = await Promise.all(itineraryPromises);
      const itinerariesData = itineraryResponses.map(
        (response) => response.response
      );
      setItineraries(itinerariesData);
    } catch (error) {
      console.error("Error fetching itineraries:", error);
    } finally {
      setItinerariesLoading(false);
    }
  };

  // Manejo clic en el botón para mostrar itinerarios
  const handleShowItineraries = () => {
    if (!showItineraries) fetchItineraries();
    setShowItineraries((prev) => !prev); // Alterna entre mostrar/ocultar
  };

  if (loading) return <p>Loading city details...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 flex-col">
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
            <h1 className="text-2xl font-bold mb-4 text-center">
              {cityData.name || "City Name"}
            </h1>
            <p className="text-lg mb-4 text-gray-700 text-center">
              {cityData.Description || "Description not available"}
            </p>

            <div className="border-t pt-4 mt-4">
              <h2 className="text-xl font-semibold mb-2 text-center">
                Details
              </h2>
              <p className="text-gray-600 text-center">
                <strong>Country:</strong>{" "}
                {cityData.Country || "Country not available"}
              </p>
              <p className="text-gray-600 text-center">
                <strong>Continent:</strong>{" "}
                {cityData.Continent || "Continent not available"}
              </p>
              <p className="text-gray-600 text-center">
                <strong>Religion:</strong>{" "}
                {cityData.religion || "Religion not available"}
              </p>
              <p className="text-gray-600 text-center">
                <strong>Badge:</strong>{" "}
                {cityData.Badge || "Badge not available"}
              </p>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => navigate("/cities")}
                className="bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300"
              >
                Back to Cities
              </button>
              <button
                onClick={handleShowItineraries}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                {showItineraries ? "Hide Itineraries" : "Itineraries"}
              </button>
            </div>
          </div>

          {showItineraries && (
  <div className="w-full max-w-3xl mt-8">
    <h2 className="text-xl font-semibold mb-4 text-center">Itineraries for {cityData.name}</h2>
    {itinerariesLoading ? (
      <p>Loading itineraries...</p>
    ) : itineraries.length > 0 ? (
      <ul className="space-y-4">
        {itineraries.map((itinerary) => (
          <li key={itinerary._id} className="p-4 border rounded shadow-md bg-white flex items-center space-x-4">
            {/* Foto del publicador */}
            {itinerary.publisherPhoto ? (
              <img
                src={itinerary.publisherPhoto}
                alt={`${itinerary.publisherName}'s photo`}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-sm text-gray-600">No Photo</span>
              </div>
            )}

            {/* Detalles del itinerario */}
            <div>
              <h3 className="font-bold text-lg">{itinerary.publisherName}</h3>
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
                        <strong>{comment.user}:</strong> {comment.text} on{" "}
                        {new Date(comment.date).toLocaleDateString()}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <p>No itineraries found for this city.</p>
    )}
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
