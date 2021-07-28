import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, SEARCH } from '../constants/actionTypes';

export default (colleges = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL_COLLEGE':
      return action.payload;

    default:
      return colleges;
  }
};

