import { IDestination, IOrigin, Waypoints } from '../../config/DTOs/routeTypes';

export const ROUTE_CALCULATION_LOADING = 'ROUTE_CALCULATION_LOADING';
export const ROUTE_CALCULATION_SUCCESS = 'ROUTE_CALCULATION_SUCCESS';
export const ROUTE_CALCULATION_FAIL = 'ROUTE_CALCULATION_FAIL';

export const CHOOSE_FEED = 'CHOOSE_FEED';

export const ORIGIN_COORDINATES = 'ORIGIN_COORDINATES';
export const DESTINATION_COORDINATES = 'DESTINATION_COORDINATES';

export interface OriginCoordenates {
  type: typeof ORIGIN_COORDINATES;
  payload: IOrigin;
}
export interface DestinationCoordenates {
  type: typeof DESTINATION_COORDINATES;
  payload: IDestination;
}
export interface ChoseFeed {
  type: typeof CHOOSE_FEED;
  payload: number;
}

export interface CalculateRouteLoading {
  type: typeof ROUTE_CALCULATION_LOADING;
}

export interface CalculateRouteSuccess {
  type: typeof ROUTE_CALCULATION_SUCCESS;
  payload: Waypoints[];
}

export interface CalculateRouteFail {
  type: typeof ROUTE_CALCULATION_FAIL;
}

export type CalculateRouteFailDispatchTypes =
  | CalculateRouteSuccess
  | CalculateRouteLoading
  | CalculateRouteFail;
