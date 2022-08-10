import React from 'react';
import './../App.css';
import logo from './../assets/chromagifheader.gif'

function NavBar() {



  return (
    <div className="nav">
      <a href="https://chroma64.com/" target="_blank" rel="noreferrer">
      <img className="logo" src={logo} />
      </a>
    </div>
  )
}

export default NavBar