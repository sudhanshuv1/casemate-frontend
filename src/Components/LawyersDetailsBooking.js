import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {createAppointment} from "../JS/actions/appointment"

const LawyersDetailsBooking = ({avocatID}) => {
  const [booking, setBooking] = useState({
    subject: "",
    description: "",
    date: "",
  });
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleSave = () => {
    if (localStorage.getItem("token")) {
    dispatch(createAppointment(avocatID, booking));
    setBooking({subject : "", description: "", date:""})
    }else {
      navigate("/connecter")
    }
  };
  return (
    <div className='lawyersDetailsBooking'>
      <div className="lawyersDetailsBooking--book">
        <div className='lawyersDetailsBooking--book_form'>
          <div className="lawyersDetailsBooking--book_date">
            <label htmlFor="date">Date</label>
            <input value={booking.date} onChange={(e) => setBooking({ ...booking, date: e.target.value })} id="date" name="date" placeholder="Date" type="date" className="input--custom" />
          </div>
          <div className="lawyersDetailsBooking--book_subject">
            <label htmlFor="subject">Subject</label>
            <input value={booking.subject} onChange={(e) => setBooking({ ...booking, subject: e.target.value })} id="subject" name="subject" placeholder="Sujet" type="text" className="input--custom" />
          </div>
          <div className="lawyersDetailsBooking--book_subject">
            <label htmlFor="message">Message</label>
            <textarea value={booking.description} onChange={(e) => setBooking({ ...booking, description: e.target.value })} cols="30" rows="10" id="message" name="message" placeholder="Message" type="text" className="input--custom" />
          </div>
          <div className="lawyersDetailsBooking--book_btn">
            <button onClick={()=> handleSave()} className="btn--costum btn--costum_hover">
                Book
            </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LawyersDetailsBooking