import { combineReducers } from 'redux';

import colleges from './colleges';
import courseWise from './courseWiseData';
import students from './students';

export const reducers = combineReducers({ courseWise,colleges,students });
