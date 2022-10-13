import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import mapLocations from "./../assets/mapLocations.json";
import { Icon } from "leaflet";

import chromaIcon from "./../assets/icons/markerchroma.png";
import MarkerInfo from "./../components/MarkerInfo";

function Home() {
  let markerPointer = new Icon({
    iconUrl: chromaIcon,
    iconSize: [100, 100],
    iconAnchor: [50, 80],
    popupAnchor: [-3, -76],
  });

  const [flyToInput, setFlyToInput] = useState(false);
  const [clickPostion, setClickPosition] = useState(null);
  const [clickedMarker, setClickedMarker] = useState(null);
  const [close, setClose] = useState(false);
  const [style, setStyle] = useState("markerInfo");

  const FlyToMarker = () => {
    const map = useMap();
    map.flyTo(clickPostion, 4);
    setFlyToInput(false);
  };

  return (
    <div className="Main">
      <MarkerInfo
        clickedMarker={clickedMarker}
        setClose={setClose}
        close={close}
        style={style}
        setStyle={setStyle}
      />

      <MapContainer
        center={[0, 0]}
        zoom={1}
        scrollWheelZoom={true}
        maxBounds={[
          [-90, 180],
          [90, -180],
        ]}
        style={{ zIndex: "0" }}
        zoomControl={false}
      >
        <ZoomControl position="topright" />

        {flyToInput ? <FlyToMarker /> : null}

        <TileLayer
          url="../tilesop/{z}/{x}/{y}.png"
          minZoom={1}
          maxZoom={4}
          noWrap={true}
        />
        {mapLocations.map((item) => (
          <Marker
            position={[item.latitude, item.longitude]}
            key={item.id}
            icon={markerPointer}
            eventHandlers={{
              click(e) {
                setClickedMarker(item);
                setClickPosition(e.latlng);
                setFlyToInput(true);
                setStyle("markerInfo");
              },
            }}
          >
            <Popup closeOnClick={true}>{item.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Home;
