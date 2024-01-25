import React from 'react'
import './Phonenav.scss'
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import logo from '../../static/logo.png'

function Phonenav() {
  return (
    <div id='desktop-menu'>
        <img src={logo} alt='logo' />
        <p>Menu </p>
        <p>contact Us</p>
        <button className='link_btn'><LiaExternalLinkAltSolid /> Share Link</button>
    </div>
  )
}

export default Phonenav