import {
  CalculateRouteFailDispatchTypes,
  ROUTE_CALCULATION_LOADING,
  ROUTE_CALCULATION_SUCCESS,
  ROUTE_CALCULATION_FAIL,
  CHOOSE_FEED,
  ORIGIN_COORDINATES,
  DESTINATION_COORDINATES,
} from '../types';
import { Dispatch } from 'redux';
import RouteService from '../../config/services/calculateRouteServices';
import { ICoordinates, IOrigin, Waypoints, IDestination } from '../../config/DTOs/routeTypes';

export const routeAction =
  (value: ICoordinates) => async (dispatch: Dispatch<CalculateRouteFailDispatchTypes>) => {
    try {
      dispatch({
        type: ROUTE_CALCULATION_LOADING,
      });
      const res: Waypoints[] = await RouteService.calculateRoute(value);
      dispatch({
        type: ROUTE_CALCULATION_SUCCESS,
        payload: res,
      });
    } catch (e) {
      dispatch({
        type: ROUTE_CALCULATION_FAIL,
      });
    }
  };

export const chooseFeedAction = (value: number) => {
  return {
    type: CHOOSE_FEED,
    payload: value,
  };
};

export const originCoordinatesAction = (value: IOrigin) => {
  return {
    type: ORIGIN_COORDINATES,
    payload: value,
  };
};

export const destinationCoordinatesAction = (value: IDestination) => {
  return {
    type: DESTINATION_COORDINATES,
    payload: value,
  };
};
