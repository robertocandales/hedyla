import { combineReducers } from 'redux';
import routeCalculatorReducer from './routeReducer';

export const rootReducer = combineReducers({
  routeCalculator: routeCalculatorReducer,
});
