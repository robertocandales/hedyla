import { IDestination, IOrigin, Waypoints } from '../../config/DTOs/routeTypes';
import {
  CalculateRouteFailDispatchTypes,
  ROUTE_CALCULATION_LOADING,
  ROUTE_CALCULATION_SUCCESS,
  ROUTE_CALCULATION_FAIL,
  CHOOSE_FEED,
  ChoseFeed,
  ORIGIN_COORDINATES,
  DESTINATION_COORDINATES,
  DestinationCoordenates,
  OriginCoordenates,
} from '../types';

interface IinitialState {
  route: Waypoints[];
  isloading: boolean;
  error: boolean;
  feed: number;
  originCoordenates: IOrigin;
  destinationCoordenates: IDestination;
}

const initialState: IinitialState = {
  route: [],
  isloading: false,
  error: false,
  feed: 0.25,
  originCoordenates: { lat: 40.4165, lng: -3.71256 },
  destinationCoordenates: { lat: 40.4465, lng: -3.72256 },
};
const routeCalculatorReducer = (
  state: IinitialState = initialState,
  action: CalculateRouteFailDispatchTypes | ChoseFeed | DestinationCoordenates | OriginCoordenates,
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
    case ORIGIN_COORDINATES:
      return { ...state, originCoordenates: action.payload };
    case DESTINATION_COORDINATES:
      return { ...state, destinationCoordenates: action.payload };
    default:
      return state;
  }
};

export default routeCalculatorReducer;
