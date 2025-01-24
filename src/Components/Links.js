import React from 'react'
import {Link} from 'react-router-dom'
import {FaUserAlt} from 'react-icons/fa'
import {BsShieldFillCheck,BsQuestionLg} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../JS/actions/auth'

const Links = () => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.auth.User);
  return (
    <>
        {localStorage.getItem("token") ? (
          <>
           {User.role === "admin" ? <Link to='/tableau-de-bord' >
            <p>Dashboard</p>
            <FaUserAlt />
          </Link> : <Link to='/profile'>
            <p>Profile</p>
            <FaUserAlt />
          </Link>}
          <Link to='/connecter' onClick={() => dispatch(logOut())}>
            <p> Sign out </p>
            <FaUserAlt />
          </Link>
          </>
        ) : <Link to='/connecter'>
              <p>Log in</p>
              <FaUserAlt />
            </Link>}
        <Link to='/connecter'>
            <p>Professional access</p>
            <BsShieldFillCheck />
        </Link>
        <Link to='/connecter'>
            <p>Need help?</p>
            <BsQuestionLg />
        </Link>
    </>
  )
}

export default Links