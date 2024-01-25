import React, { useContext, useEffect, useRef, useState } from 'react'
import './OppointementList.scss'
import { FaRegCheckCircle } from "react-icons/fa";
import GlobalContext from '../context/CreateContext';

function OppointementList({slots, date}) {
    const d = new Date(date)
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    const formattedDate = d.toLocaleString('en-US', options);
    const [activeSlot, setActiveSlot] = useState(null)
    const [varient, setVarient] = useState("30")
    const scrollElement = useRef();
    const {dispatch} = useContext(GlobalContext)

    const formatTime = (dateString)=> {
        const dateObject = new Date(dateString);
        const hours = dateObject.getUTCHours();
        const minutes = dateObject.getUTCMinutes();
        const formattedTime = `${(hours % 12 === 0 ? 12 : hours % 12)}:${minutes.toString().padStart(2, '0')} ${hours < 12 ? 'AM' : 'PM'}`;
        return formattedTime;
    }

    const handleClick = (slot,index) =>{
        setActiveSlot(index)
        const data = {slot:slot, date:formattedDate, varient:varient}
        dispatch({type:'slot', payload:data})
    }

    const handleSelect = (e)=>{
        setVarient(e.target.value)
    }

    useEffect(()=>{
        scrollElement.current.scrollTop = 0;
        setActiveSlot(null)
    },[date])
  return (
    <div className='oppointement_list'>
        <div className="time_varients">
            <p className='title'>SELECT FROM VARIENTS</p>
            <div className="custome_select">
            <select name="vairents" id="varients" onChange={(e)=>handleSelect(e)}>
                <option value="30">30 min</option>
                <option value="60">60 min</option>
                <option value="90">90 min</option>
            </select>
            </div>
        </div>
        <div className="slots">
            <p className='title'>{formattedDate} - Available slots</p>
            <div className="slot_list" ref={scrollElement}>
                {
                    
                    slots.map((slot,i)=>(
                        <div className={`slot ${activeSlot === i ? 'active' : ''}`} key={i} onClick={()=> handleClick(`${formatTime(slot.start_time)}-${formatTime(slot.end_time)}`,i)}>
                        <p>{formatTime(slot.start_time)} - {formatTime(slot.end_time)}</p> 
                        <FaRegCheckCircle className='icon' />
                    </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default OppointementList