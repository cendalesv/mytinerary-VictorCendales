// actions.js
// Define el tipo de acción
export const SET_CITIES = 'SET_CITIES';

// Crea la acción para establecer las ciudades
export const setCities = (cities) => ({
  type: SET_CITIES,
  payload: cities,
});
