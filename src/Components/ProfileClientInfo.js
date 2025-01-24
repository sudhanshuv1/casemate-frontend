import React from 'react'

const ProfileClientInfo = ({User}) => {
  return (
    <div className='profileClientInfo'>
      {User.firstName && <p>First Name : {User.firstName}</p>}
      {User.lastName && <p>Last Name : {User.lastName}</p>}
      {User.email && <p>E-mail : {User.email}</p>}
    </div>
  )
}

export default ProfileClientInfo