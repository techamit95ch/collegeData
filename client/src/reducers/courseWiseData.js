import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, SEARCH } from '../constants/actionTypes';

export default (courseWise = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL_COURSE':
      return action.payload;

    default:
      return courseWise;
  }
};

