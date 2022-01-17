import React from 'react';
import { GoogleMap, LoadScript, MarkerClusterer, Marker, Polyline } from '@react-google-maps/api';
import { mapStyles } from './styles';
import { useAppSelector } from '../../redux/store/hooks';
import { useDispatch } from 'react-redux';
import {
  destinationCoordinatesAction,
  originCoordinatesAction,
} from '../../redux/actions/routeActions';

const center = {
  lat: 40.4165,
  lng: -3.70256,
};

const Pin = ({ position, index, clusterer, origin }: any) => {
  const dispatch = useDispatch();
  const onMarkerDragEnd = (e: any) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    if (origin) {
      dispatch(originCoordinatesAction({ lat, lng }));
    } else {
      dispatch(destinationCoordinatesAction({ lat, lng }));
    }
  };

  return (
    <Marker
      onDragEnd={(e) => onMarkerDragEnd(e)}
      draggable
      key={index}
      position={position}
      clusterer={clusterer}
    />
  );
};

const API = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';

export const LoadScriptCustom = ({ children }: any) => {
  return (
    <LoadScript googleMapsApiKey={API} libraries={['places']}>
      {children}
    </LoadScript>
  );
};
const onLoad = (polyline: any) => {
  console.log('polyline: ', polyline);
};

function GoogleMaps() {
  const { originCoordenates, destinationCoordenates } = useAppSelector(
    (store) => store.routeCalculator,
  );

  const path: any = [originCoordenates, destinationCoordenates];

  const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    paths: path,
    zIndex: 1,
  };
  return (
    <>
      <GoogleMap clickableIcons mapContainerStyle={mapStyles} center={center} zoom={15}>
        {/* Child components, such as markers, info windows, etc. */}
        {/* to use in de future to show an array of positions */}
        {/*{
          <MarkerClusterer>
            {(clusterer) =>
              [
                { lat: 40.4165, lng: -3.71256 },
                { lat: 40.4465, lng: -3.72256 },
              ].map((location, i) => <Pin key={i} position={location} clusterer={clusterer} />)
            }
          </MarkerClusterer>
        }*/}
        <Pin position={originCoordenates} origin={true} destination={false} />
        <Pin position={destinationCoordenates} destination={true} origin={false} />
        const path1 = [originCoordenates, destinationCoordenates];
        <Polyline onLoad={onLoad} path={path} options={options} />
      </GoogleMap>
    </>
  );
}

export default React.memo(GoogleMaps);
