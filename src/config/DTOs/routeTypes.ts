export interface RouteValues {
  distance: number;
  valuePerKm: number;
}

export interface IOrigin {
  lat: string | number;
  lng: string | number;
}

export interface IDestination {
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
