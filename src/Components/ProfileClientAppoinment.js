import React from 'react'
import {GiConfirmed} from 'react-icons/gi'
import { useDispatch } from 'react-redux';
import { deleteAppointment } from '../JS/actions/appointment';

const ProfileClientAppoinment = ({appointment}) => {
  const dispatch = useDispatch();
  return (
    <div className='profileClientAppoinment'>
      <div className='profileClientAppoinment--confirm'>
        {appointment.isDone && <GiConfirmed />}
        {appointment.isDone ? <p>Your appointment with <span>{appointment.lawyerID.firstName} {appointment.lawyerID.lastName}</span> was successfully confirmed on <span>{appointment.date} </span></p> : <p>You have an appointment with <span>{appointment.lawyerID.firstName} {appointment.lawyerID.lastName}</span> on <span>{appointment.date}</span> and here are the details: </p>}
      </div>
      <ul>
          <li>Subject : {appointment.subject}</li>
          <li>Message : {appointment.description}</li>
          <li>Telephone : {appointment.phone}</li>
          <li>E-mail : {appointment.lawyerID.email}</li>
      </ul>
      <button className='btn--costum' onClick={() => dispatch(deleteAppointment(appointment._id))}>Delete</button>
    </div>
  )
}

export default ProfileClientAppoinment