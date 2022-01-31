import React from "react";
import s from "./RegistrationForm.module.css";
import { useState, useRef } from "react";
import axios from "axios";
import { authOperations } from "../../redux/auth";
import { useDispatch } from "react-redux";

function RegistrationForm({setRegistrationFormNeeded}) {
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeHandler = (e) => {
    switch (e.target.name) {
      case "name":
        return setName(e.target.value);
      case "email":
        return setEmail(e.target.value);
      case "password":
        return setPassword(e.target.value);
      case "repassword":
        return setConfirmPassword(e.target.value);
      default:
        return;
    }
  };
  const validationData = (data, refs) => {
    if (!data.name) return refs.nameRef.current.focus();
    if (!data.email) return refs.emailRef.current.focus();
    if (!data.password) return refs.passwordRef.current.focus();
    if (!data.confirmPassword) return refs.confirmPasswordRef.current.focus();
    if (data.password !== data.confirmPassword)
      return alert("passwords don*t match");
    return true;
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const permission = validationData(
      { name, email, password, confirmPassword },
      { nameRef, emailRef, passwordRef, confirmPasswordRef }
    );
    if (!permission) return;
    dispatch(
      authOperations.registration({ name, email, password, confirmPassword })
    );
  };
  return <div className={s.mainDiv}>
     Registration form
      <form onSubmit={onSubmitHandler} className={s.form}>
          email
          <input type="mail" ref={emailRef} value={email} onChange={onChangeHandler} name="email"></input>
          name
          <input ref={nameRef} value={name} onChange={onChangeHandler} name="name"></input>
          password
          <input type="password" ref={passwordRef} value={password} onChange={onChangeHandler} name="password"></input>
          repeat password
          <input type="password"ref={confirmPasswordRef} value={confirmPassword} onChange={onChangeHandler} name="repassword"></input>
          <div className={s.btnDiv}>
            <button type="button" onClick={setRegistrationFormNeeded} className={s.btn}>go to Login form</button>
            <button type="submit" className={s.btn}>register</button>
          </div>
         
      </form>
  </div>;
}

export default RegistrationForm;
