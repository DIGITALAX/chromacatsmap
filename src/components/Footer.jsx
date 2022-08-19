import React from 'react';
import './../App.css';
import twitter from './../assets/twitter.png'


function Footer() {
  return (
    <div className='footer'>
    <p>
      CC0 Project by Chroma Cats
    </p>
    <a href="https://twitter.com/chroma64" target="_blank" rel="noreferrer">
      <img src={twitter} className="twitter" />
    </a>
    </div>
  )
}

export default Footer