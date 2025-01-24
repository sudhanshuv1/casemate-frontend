import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate } from "react-router-dom";

const DashboardAdminHeader = ({setName, name, handleSubmit, setRole}) => {
  const navigate = useNavigate()
  return (
    <div className='dashboardAdminHeader'>
        <form onSubmit={handleSubmit} className="dash--header_search">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Search..." type="text" className="input--custom"/>
            <button><FaSearch /></button>
        </form>
        <ul className='dash--header_links'>
            <button onClick={() => setRole("all")} className='btn--custom'>All</button>
            <button onClick={() => setRole("lawyer")} className='btn--custom'>Lawyers</button>
            <button onClick={() => setRole("client")} className='btn--custom'>Clients</button>
            <button onClick={() => navigate("/")} className='btn--custom'>Website</button>
        </ul>
    </div>
  )
}

export default DashboardAdminHeader