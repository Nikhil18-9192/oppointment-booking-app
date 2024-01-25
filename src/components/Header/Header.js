import React from 'react'
import logo from '../../static/logo.png'
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import './Header.scss'

function Header() {
  return (
    <div className='header_container'>
        <div className="logo-img">
        <img src={logo} alt="logo" />
        </div>
        <div className="menu_item">
            <p>Menu </p>
            <p>contact Us</p>
            <button><LiaExternalLinkAltSolid /> Share Link</button>
        </div>
    </div>
  )
}

export default Header