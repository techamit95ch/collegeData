import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getColleges = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCollege();

    dispatch({ type: "FETCH_ALL_COLLEGE", payload: data.result });
  } catch (error) {
    console.log(error.message);
  }
};
export const getCollegesByState = () => async (dispatch) => {
  try {
    // console.log(param);
    let result = null;
    // if (param === "state") {
      let { data } = await api.fetchCollegeState();
      result = data.result;
   /*  } else {
      let { data } = await api.fetchCollegeCourse();
      result = data.result;
    } */
// console.log(result);
    dispatch({ type: "FETCH_ALL_COLLEGE", payload: result });
  } catch (error) {
    console.log(error.message);
  }
};
export const getCollegesByCourse = () => async (dispatch) => {
  try {
    let result = null;
    
      let { data } = await api.fetchCollegeCourse();
      result = data.result;
   
// console.log(result);
    dispatch({ type: "FETCH_ALL_COURSE", payload: result });
  } catch (error) {
    console.log(error.message);
  }
};
export const isCollegeEmpty = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCollege();
    const isEmpty = data.isEmpty;
    return isEmpty;
  } catch (error) {
    console.log(error.message);
  }
};

export const getStudents = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStudents();

    dispatch({ type: "FETCH_ALL_STUDENT", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
