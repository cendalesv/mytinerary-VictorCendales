// citiesReducer.js
import { SET_CITIES } from './actions'; // Asegúrate de importar las acciones correctamente

// Estado inicial
const initialState = [];

// Reducer para manejar las acciones relacionadas con las ciudades
const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITIES:
      return action.payload; // Devuelve las ciudades desde la acción
    default:
      return state; // Devuelve el estado actual si no hay coincidencia
  }
};

export default citiesReducer;
