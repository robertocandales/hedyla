import { Waypoints } from '../../config/DTOs/routeTypes';
import {
  CalculateRouteFailDispatchTypes,
  ROUTE_CALCULATION_LOADING,
  ROUTE_CALCULATION_SUCCESS,
  ROUTE_CALCULATION_FAIL,
  CHOOSE_FEED,
  ChoseFeed,
} from '../types';

interface IinitialState {
  route: Waypoints[];
  isloading: boolean;
  error: boolean;
  feed: number;
}

const initialState: IinitialState = {
  route: [],
  isloading: false,
  error: false,
  feed: 0.25,
};
const routeCalculatorReducer = (
  state: IinitialState = initialState,
  action: CalculateRouteFailDispatchTypes | ChoseFeed,
): IinitialState => {
  switch (action.type) {
    case ROUTE_CALCULATION_LOADING:
      return { ...state, isloading: true, error: false };
    case ROUTE_CALCULATION_SUCCESS:
      return { ...state, route: action.payload, isloading: false, error: false };
    case ROUTE_CALCULATION_FAIL:
      return { ...state, isloading: false, error: true };
    case CHOOSE_FEED:
      return { ...state, feed: action.payload };
    default:
      return state;
  }
};

export default routeCalculatorReducer;
