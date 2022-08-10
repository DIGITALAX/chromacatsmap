import React from 'react';
import './../App.css'

function MarkerInfo(props) {
    return props.clickedMarker ? (
        <div className="markerInfo">
          <h1>{props.clickedMarker.name}</h1>
          <p>{props.clickedMarker.description}</p>
        </div>
      ) : null
}

export default MarkerInfo 