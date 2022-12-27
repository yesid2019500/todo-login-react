import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm'
import validator from 'validator'


import {Link} from 'react-router-dom'
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPassword } from '../../actions/auth';


export const RegisterScreen = () => {

  const dispatch = useDispatch();

  const { msgError } = useSelector( state => state.ui)
  // console.log(msgError)

const [ formValues, handleInputChange, reset ] = useForm({
    name: '',
    email: '',
    password:'',
    password2:''
})

const {name, email, password, password2,n} = formValues;


const handleRegister = (e) => {
  e.preventDefault();
  
  if (isFormValid() ) {
     
      dispatch(startRegisterWithEmailPassword(email, password, name,n))
  }

}

const isFormValid = () => {

  if (name.trim().length === 0) {
      dispatch(setError("Name is required"))
      return false;
  }
  else if (!validator.isEmail(email)) {
      dispatch(setError("Email is no valid"))
      return false;
  }

  else if (password !== password2 || password.length < 5) {
      dispatch(setError("password should be at least 6 caracteres and math each other"))
      return false;
  }

dispatch(removeError())
  return true;
}


  return (
    <div>
       <h3 className="auth__tittle">Register</h3>
       <form onSubmit={ handleRegister } >
        
        {
          msgError &&
             (<div className="auth__alert-error">
               {msgError}
           </div>)
        }
         <input 
         className="auth__input"
         name="name" type="text"
         placeholder='name'
         autoComplete='off'
         value={name}
         onChange={handleInputChange}
         />

         <input className="auth__input"
         name="email" type="text"
         placeholder='email' 
         autoComplete='off'
         value={email}
         onChange={handleInputChange}
         />

         <input 
         className="auth__input"
         name="password" type="text"
         placeholder='password'
         value={password}
         onChange={handleInputChange}
         />

         <input 
         className="auth__input"
         name="password2"
         type="text"
         placeholder=' confirm password' 
         value={password2}
         onChange={handleInputChange}
         />

         <button className="btn btn-primary btn-block mb-5" type="submit">Register</button>
        
        <Link className="link" to="/auth/login">Already Registered?</Link>
       </form>
    </div>
  )
}
