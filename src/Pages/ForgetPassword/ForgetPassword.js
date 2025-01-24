import React from "react";
import {useState } from 'react';
import { useDispatch} from 'react-redux';

import {forgotPassword} from '../../JS/actions/auth'

import "./forgetpassword.css";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("email", email);
        dispatch(forgotPassword(formData));
        setEmail("");
    }
    
  return (
    <div className="forgetpassword--page section__padding">
      <h1>Forgot password?</h1>
      <p>
        To reset your password, please enter your address
        Email Website.com. Website.com will send instructions for
        password reset to this account's email address.
      </p>
      <form className="forgepassword--page_form" method="post" onSubmit={handleSubmit}>
        <label htmlFor="forget--email">E-mail</label>
        <input onChange={e => setEmail(e.target.value)} value={email} id="forget--email" name="email" placeholder="E-mail" type="email" className="input--custom" />
      </form>
    </div>
  );
};

export default ForgetPassword;
