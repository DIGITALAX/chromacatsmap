
import React, {useState, useRef} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css';
import mapLocations from './assets/mapLocations.json';
import {Icon} from 'leaflet';

import chromaIcon from './assets/icons/markerchroma.png'

function App() {

  let markerPointer = new Icon({
    iconUrl: chromaIcon,
    iconSize: [100, 100],
    iconAnchor: [50, 80],
    popupAnchor: [-3, -76],
  });


  const DraggableMarker = () => {
    const [position, setPosition] = useState([0,0]);

    // start at null then find markerRef and change to include markers content
    const markerRef = useRef(null);

    return (
      <Marker
      draggable={true}
      eventHandlers={{
        dragend() {
          const marker = markerRef.current;
            if(marker!== null) {
              setPosition(marker.getLatLng())
            }
        }
      }}
      position={position}
      ref={markerRef}
      >
      <Popup
      >{position.lat}, {position.lng}</Popup>

      </Marker>

    )
  }


  return (
    <div className="App">

    <MapContainer center={[0, 0]} zoom={1} scrollWheelZoom={true} maxBounds={[[-90,180],[90,-180]]}>
        <TileLayer

          // illustrated references tile folder here
          url="../tilesop/{z}/{x}/{y}.png"
          minZoom={1}
          maxZoom={4}
          noWrap={true}
        />
        {/* <DraggableMarker/> */}
        {
          mapLocations.map((item)=>(
            <Marker
            position={[item.latitude, item.longitude]}
            key={item.id}
            icon={markerPointer}
            >
              <Popup
              closeOnClick={true}
              >{item.name}</Popup>
            </Marker>
          ))
        } 
      </MapContainer>
    </div>
  );
}

export default App;
