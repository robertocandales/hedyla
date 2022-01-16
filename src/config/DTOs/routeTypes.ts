export interface RouteValues {
  distance: number;
  valuePerKm: number;
}

interface IOrigin {
  lat: string | number;
  lng: string | number;
}

interface IDestination {
  lat: string | number;
  lng: string | number;
}

export interface ICoordinates {
  origin: IOrigin;
  destination: IDestination;
}

export interface Waypoints {
  hint: string;
  distance: number;
  location: number[];
  name: string;
}

export interface ICoordinatesRes {
  waypoints: Waypoints[];
}
