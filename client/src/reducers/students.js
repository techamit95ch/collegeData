import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, SEARCH } from '../constants/actionTypes';

export default (students = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL_STUDENT':
      return action.payload;

    default:
      return students;
  }
};

