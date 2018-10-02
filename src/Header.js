import React from 'react'
import marvelHeader from './images/marvelHeader.jpg'

const Header = () => {
  return (
    <div className="header">
      <div className="header-text">
        <h1>ALL CHARACTERS</h1>
      </div>
      <img className="header-img" src={marvelHeader} alt='Marvel Characters' />
      <svg className="svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,100 100,30 100,100" />
      </svg>
    </div>
  )
}


export default Header
