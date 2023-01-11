import { MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import {useAppSelector} from 'store/hooks'
import {getState} from 'store/Map'
import { useEffect } from 'react';

import L from 'leaflet';

const size = [45,59]
const iconFrom = new L.Icon({
    iconUrl: (await import('imgs/markerFrom.svg')).default,
    iconRetinaUrl: (await import('imgs/markerFrom.svg')).default,
    iconSize: new L.Point(size[0], size[1]),
    className: 'leaflet-div-icon'
});

const iconTo = new L.Icon({
  iconUrl: (await import('imgs/markerTo.svg')).default,
  iconRetinaUrl: (await import('imgs/markerTo.svg')).default,
  iconSize: new L.Point(size[0], size[1]),
  className: 'leaflet-div-icon'
});




function Test() {
  const map = useMap()
  const state = useAppSelector(getState);


  useEffect(() => {
    map.setView(state.from);
  },[state])

  return (
    <>  
      <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <Marker position={state.from} icon={iconFrom} >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={state.to} icon={iconTo}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  )
}

export default function () {
  const state = useAppSelector(getState);
  return (
    <MapContainer key={Math.random()} className='Map' center={state.from} zoom={13} scrollWheelZoom={false}>
      <Test/>
    </MapContainer>
  )
}