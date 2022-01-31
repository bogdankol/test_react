import React from 'react';
import s from './LoginForm.module.css';
import {useState, useRef} from 'react';
import axios from 'axios';
import {authOperations} from '../../redux/auth';
import {useDispatch} from 'react-redux';

function LoginForm({setRegistrationFormNeeded}) {
  const dispatch = useDispatch();
  const emailRef2 = useRef(null)
  const passwordRef2 = useRef(null)

  const [email2, setEmail2] = useState('')
  const [password2, setPassword2] = useState('')

  const onChangeHandler2 = e => {
    switch(e.target.name) {
        case 'email2':
            return setEmail2(e.target.value)
        case 'password2':
            return setPassword2(e.target.value)           
        default: 
           return
    }
}
const validationData2 = (data, refs) => {
  if(!data.email) return refs.emailRef.current.focus()
  if(!data.password) return refs.passwordRef.current.focus()
  return true
}

const onSubmitHandler2 = async (e) => {
  e.preventDefault();
  const permission = validationData2({email: email2, password: password2}, 
      {emailRef: emailRef2, passwordRef: passwordRef2})
  if(!permission) return 
  dispatch(authOperations.logIn({ email: email2, password: password2}))

}

  return <div className={s.mainDiv}>
    Login form
      <form onSubmit={onSubmitHandler2} className={s.form}>
          email
          <input type="mail" ref={emailRef2} value={email2} onChange={onChangeHandler2} name="email2"></input>
          password
          <input type="password" ref={passwordRef2} value={password2} onChange={onChangeHandler2} name="password2"></input>
          <div className={s.btnDiv}>
            <button type="button" onClick={setRegistrationFormNeeded} className={s.btn}>Back to Registration</button>
            <button type="submit" className={s.btn}>login</button>
          </div>

      </form>
  </div>;
}

export default LoginForm;
