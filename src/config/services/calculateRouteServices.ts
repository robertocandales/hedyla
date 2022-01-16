import axios from 'axios';
import { BASE_API } from '../API';
import { ICoordinates, Waypoints } from '../DTOs/routeTypes';

const client = axios.create({
  baseURL: `${BASE_API}`,
});

const RouteService = {
  calculateRoute: async (value: ICoordinates): Promise<Waypoints[]> => {
    const formatValue = `${value.origin.lng},${value.origin.lat};${value.destination.lng},${value.destination.lat}`;
    return client.get(`/driving/${formatValue}?overview=false`).then((res) => {
      return res.data.waypoints;
    });
  },
};

export default RouteService;
