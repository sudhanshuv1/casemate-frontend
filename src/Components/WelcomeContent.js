import React from "react";
import { Link } from 'react-router-dom'

const WelcomeContent = ({setSerchInput}) => {
  return (
    <div className="welcome--page_content">
      <h1>Casemate</h1>
      <p>Appointment booking platform for lawyers</p>
      <Link to="/avocats">
        <button onClick={()=>setSerchInput("tout")} className="btn--costum btn--costum_hover">Make an appointment</button>
      </Link>
    </div>
  );
};

export default WelcomeContent;
