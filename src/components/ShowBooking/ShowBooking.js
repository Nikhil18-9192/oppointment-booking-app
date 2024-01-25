import React, { useContext } from 'react'
import GlobalContext from '../context/CreateContext'
import './ShowBooking.scss'

function ShowBooking() {
const {state} = useContext(GlobalContext)
const slot = state.slot
  return (
    <div className='show-booking'>
      <h3>You have scheduled oppointment</h3>
        <p>Date: {slot.date}</p>
        <p>Time: {slot.slot}</p>
        <p>Varient: {slot.varient} min</p>
    </div>
  )
}

export default ShowBooking