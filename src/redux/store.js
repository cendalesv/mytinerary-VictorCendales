// store.js
import { createStore, combineReducers } from 'redux';
import citiesReducer from './citiesReducer'; // Importa tu citiesReducer

// Combina tus reducers
const rootReducer = combineReducers({
  cities: citiesReducer, // Define el nombre del slice del estado
  // otros reducers pueden ir aquí
});

// Crea el store
const store = createStore(rootReducer);

export default store;
