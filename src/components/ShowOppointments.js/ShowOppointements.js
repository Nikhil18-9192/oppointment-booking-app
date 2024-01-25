import React, {  useEffect, useState } from "react";
import "./ShowOppointments.scss";
import Calendar from 'react-calendar';
import OppointementList from "../OppointementList/OppointementList";
import axios from "axios";
import ShowBooking from "../ShowBooking/ShowBooking";

function ShowOppointements() {
  const today = new Date()
  const [date, setDate] = useState(today);
  const [slots, setSlots] = useState([]);
  const [showBooking, setShowBooking] = useState(false)
  
  
  const fetchOppointements = async()=>{
    try {
      const d = new Date(date)
      const currentDate = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`
      const end_date = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${(d.getDate() + 1).toString().padStart(2, '0')}`
      const data = await axios.get(`https://app.appointo.me/scripttag/mock_timeslots?start_date=${currentDate}&end_date=${end_date}`)
      setSlots(data.data[0].slots)
    } catch (error) { 
      console.error(error.message)
    }
  }
  const handleChange = (date) => {
    setDate(date)
  }
  const handleClick = (bookingDetails) => {
      setShowBooking(true)
  }
  useEffect(() => {
      fetchOppointements();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date])
  
  return (
    <div className="show_oppointements">
      <div className="top">
        <div className="left">
          <h2>Test Service</h2>
          <p><span>Timezone:</span> Asia/Calcutta</p>
          <div className="calendar-container">
            <Calendar defaultActiveStartDate={new Date()}  calendarType="iso8601" defaultView="month" onChange={(date) => handleChange(date)} value={date} />
          </div>
        </div>
        <div className="right">
          {showBooking?<ShowBooking />:<OppointementList slots={slots} date={date} />} 
        </div>
      </div>
      <div className="bottom">
        <p>powered by oppointo</p>
        <button  onClick={()=>handleClick()}>{showBooking ? `Confirm` : `Next >` }</button>
      </div>
    </div>
  );
}

export default ShowOppointements;
