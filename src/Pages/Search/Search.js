import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import './search.css'

const Search = ({setSerchInput}) => {
  const [serchValue, setSerchValue] = useState("tout")

  const navigate = useNavigate()

  const handlePostSearchValue = () => {
    setSerchInput(serchValue);
    navigate("/avocats")
  }
  return (
    <div className='search--page section__padding'>
        <p>Find your <span>lawyer</span></p>
        <div className='search--page_input'>
            <input onChange={e => setSerchValue(e.target.value)} className='form-control' type="text" placeholder='Name, specialty, city....' />
            <button onClick={handlePostSearchValue}><FaSearch /></button>
        </div>
    </div>
  )
}

export default Search