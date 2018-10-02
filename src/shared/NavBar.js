import React from 'react'
import { Link } from 'react-router-dom'
import MarvelLogo from '../images/MarvelLogo.svg'

const NavBar = () => {
  return (
    <header className='nav-bar'>
      <Link className='logo' to='/characters/'>
        <img src={MarvelLogo} alt='Marvel logo' width='150' />
      </Link>
    </header>
  )
}

export default NavBar
