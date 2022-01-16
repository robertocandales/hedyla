import React from 'react';
import { GoogleMap, LoadScript, MarkerClusterer, Marker, Polyline } from '@react-google-maps/api';
import { mapStyles } from './styles';

const containerStyle = {
  width: '100%',
  height: '100%',
  minHeight: '50vh',
};

const center = {
  lat: 40.4165,
  lng: -3.70256,
};

const Pin = ({ position, index, clusterer }: any) => (
  <Marker key={index} position={position} clusterer={clusterer} />
);

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
const path = [
  { lat: 40.4165, lng: -3.71256 },
  { lat: 40.4465, lng: -3.72256 },
];

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
  paths: [
    { lat: 40.4165, lng: -3.71256 },
    { lat: 40.4465, lng: -3.72256 },
  ],
  zIndex: 1,
};
function GoogleMaps() {
  return (
    <>
      <GoogleMap clickableIcons mapContainerStyle={containerStyle} center={center} zoom={15}>
        {/* Child components, such as markers, info windows, etc. */}
        <MarkerClusterer>
          {(clusterer) =>
            [
              { lat: 40.4165, lng: -3.71256 },
              { lat: 40.4465, lng: -3.72256 },
            ].map((location, i) => <Pin key={i} position={location} clusterer={clusterer} />)
          }
        </MarkerClusterer>
        <Polyline onLoad={onLoad} path={path} options={options} />
      </GoogleMap>
    </>
  );
}

export default React.memo(GoogleMaps);
