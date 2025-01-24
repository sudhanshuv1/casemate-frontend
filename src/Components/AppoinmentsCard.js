import React from 'react'
import {GiConfirmed} from 'react-icons/gi'
import { useDispatch } from 'react-redux';
import {deleteAppointment,confirmAppointment} from '../JS/actions/appointment'

const AppointmentsCard = ({appointment}) => {
  const dispatch = useDispatch();
  return (
    <div className="profileLawyerAppointment--app">
          <div className='profileLawyerAppointment--app_confirm'>
            {appointment.isDone && <GiConfirmed />}
            {appointment.isDone ? <p>Your appointment with <span>{appointment.clientID.firstName} {appointment.clientID.lastName}</span> has been successfully confirmed on <span>{appointment.date}</span></p> : <p>You have an appointment with <span>{appointment.clientID.firstName} {appointment.clientID.lastName}</span> on <span>{appointment.date}</span> and here are the details:</p>}
          </div>
          <ul>
            <li>Subject: {appointment.subject}</li>
            <li>Message: {appointment.description}</li>
            <li>Phone: {appointment.phone}</li>
            <li>Email: {appointment.clientID.email}</li>
          </ul>
          <div className="profileLawyerAppointment--app_btn">
            {!appointment.isDone && <button onClick={() => dispatch(confirmAppointment(appointment._id))} className='btn--custom'>Confirm</button>}
            <button onClick={() => dispatch(deleteAppointment(appointment._id))} className='btn--custom'>Delete</button>
          </div>
        </div>
  )
}

export default AppointmentsCard