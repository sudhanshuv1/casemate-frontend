import React from 'react'
import {FaFacebook,FaLinkedin,FaInstagramSquare, FaMapMarkerAlt, FaPhoneAlt, FaMailBulk} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProfileLawyerInfo = ({Profile}) => {
  return (
    <div className='profileLawyerInfo page--relative'>
        <div className="profileLawyerInfo--img">
            <img src={Profile.image} alt={Profile.name} />  
        </div>
        <div className="profileLawyerInfo--details">
          {Profile.name && <p>{Profile.name}</p>}
          {Profile.specialty && <p>{Profile.specialty}</p>}
          {Profile.bio && <p>{Profile.bio}</p>}

          {Profile.address && <p className='profileLawyerInfo--details_icon'><FaMapMarkerAlt /> {Profile.address}</p>}
          {Profile.phone && <p className='profileLawyerInfo--details_icon'><FaPhoneAlt /> {Profile.phone}</p>}
          {Profile.lawyerID && <p className='profileLawyerInfo--details_icon'><FaMailBulk /> {Profile.lawyerID.email}</p>}
          {Profile.mon_fri && <p>Mon to Fri : {Profile.mon_fri}</p>}
          {Profile.sat_sun && <p>Sat and Sun : {Profile.sat_sun}</p>}
          {Profile.price && <p>Price of consultation : {Profile.price}</p>}
            <div className="lawyer--social">
              {Profile.facebook ? <a href={Profile.facebook}><FaFacebook /></a> : <p className='social--p'></p>}
              {Profile.linkedin ? <a href={Profile.linkedin}><FaLinkedin /></a> : <p className='social--p'>LINKEDIN has not been added</p>}
              {Profile.instagram ? <a href={Profile.instagram}><FaInstagramSquare /></a> : <p className='social--p'>INSTAGRAM has not been added</p>}
            </div>
            <Link to={`/avocats/editer/${Profile.lawyerID && Profile.lawyerID._id}`}><button className='btn--costum'>Edit your profile</button></Link>
        </div>
    </div>
  )
}

export default ProfileLawyerInfo