import './../App.css'
import React from 'react';
import Draggable from 'react-draggable';
import {FaWindowClose} from 'react-icons/fa'

function MarkerInfo(props) {


  const handleClose = () => {
    props.setClose(!props.close);

    if (props.close === true) {
      props.setStyle('invisible');
    }
  };



    return props.clickedMarker ? (
      <Draggable cancel='.cross'>
        <div className={props.style}>
          <h1 className='infoTitle'>{props.clickedMarker.name}</h1>
          <p className='infoDescription'>{props.clickedMarker.description}</p>
        <div className='cross' onClick={handleClose}>
        <FaWindowClose
        color="#E7B805"
        className="close"
        />
        </div>
        </div>
      </Draggable>
      ) : null
}

export default MarkerInfo 