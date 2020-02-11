import { combineReducers } from 'redux';

import MOCK_DATA from '../__mocks__/MOCK_DATA.json';

const tourReducer = () => MOCK_DATA;

const selectedTourReducer = (tour = null, action) => {
  if (action.type === 'SELECT_TOUR') {
    return action.payload;
  }

  return tour;
};

export default combineReducers({
  tours: tourReducer,
  selectedTour: selectedTourReducer,
});
