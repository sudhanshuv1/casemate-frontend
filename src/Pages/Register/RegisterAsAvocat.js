import React from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerLawyer } from '../../JS/actions/auth';

const RegisterAsAvocat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      registerLawyer(
        {
          email: data.get("email"),
          password: data.get("password"),
          passwordConfirm: data.get("passwordConfirm"),
          specialty: data.get("specialty"),
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          phone: data.get("phone"),
        },
        navigate
      )
    );
  };
  
  return (
    <div className='register--page_avocat'>
        <h3>For Lawyers</h3>
        <div className="login--barre login--barre_register" />
        <form method='post' className='register--page_avocat-form' onSubmit={handleSubmit}>
        <div className="register--page_avocat-firtName">
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" placeholder="firstName" type="text" className="input--custom" />
        </div>
        <div className="register--page_avocat-nom">
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" placeholder="lastName" type="text" className="input--custom" />
        </div>
        <div className="register--page_avocat-specialty">
          <label htmlFor="specialty">Speciality</label>
          <input id="specialty" name="specialty" placeholder="Speciality" type="text" className="input--custom" />
        </div>
        <div className="register--page_avocat-email">
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" placeholder="E-mail" type="email" className="input--custom" />
        </div>
        <div className="register--page_avocat-phone">
          <label htmlFor="phone">Telephone</label>
          <input id="phone" name="phone" placeholder="Téléphone" type="number" className="input--custom" />
        </div>
        <div className="register--page_avocat-password">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" placeholder="Mot de passe" type="password" className="input--custom" />
        </div>
        <div className="register--page_avocat-confirmPassword">
          <label htmlFor="passwordConfirm">Confirm your password</label>
          <input id="passwordConfirm" name="passwordConfirm" placeholder="Confirm your password" type="password" className="input--custom" />
        </div>
        <div className="register--page_avocat-btn">
        <button className="btn--costum btn--costum_hover">
            Register
        </button>
        </div>
        </form>
    </div>
  )
}

export default RegisterAsAvocat