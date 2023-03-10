import MarketFrom from 'imgs/markerFrom.svg'
import MarketTo from 'imgs/markerTo.svg'

import { MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import {useAppSelector} from 'store/hooks'
import {getState} from 'store/Map'
import { useEffect } from 'react';

import L from 'leaflet';

const size = [45,59]

const iconFrom = new L.Icon({
    iconUrl: MarketFrom,
    iconRetinaUrl: MarketFrom,
    iconSize: new L.Point(size[0], size[1]),
    className: 'leaflet-div-icon'
});

const iconTo = new L.Icon({
  iconUrl: MarketTo,
  iconRetinaUrl: MarketTo,
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
    <MapContainer 
      key={Math.random()} 
      className='Map' 
      
      zoom={11} 
      center={state.from} 
      scrollWheelZoom={false}>
      <Test/>
    </MapContainer>
  )
}