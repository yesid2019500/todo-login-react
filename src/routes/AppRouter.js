import React, { useEffect, useState } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import {firebase} from '../firebase/firebase-config'
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
  // contiene el login y logout
export const AppRouter = () => {


const [ cheking,  setCheking ] = useState(true);
const [ isLoggedIn , setIsLoggedIn ] = useState(false)

const dispatch = useDispatch();

useEffect(() => {
 
  firebase.auth().onAuthStateChanged( (user)=>{
    
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.photoURL))
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
      }
      setCheking(false)
  })

}, [dispatch, setCheking, setIsLoggedIn])

// si es true
if (cheking) {
  return ( 
    <h1>Please Wait...</h1>
  )
}


  return (
       <Router>
         <div>
          <Switch>
                <PublicRoute path='/auth'
                 component={AuthRouter}
                 isAuthenticated={isLoggedIn}
                  />

                <PrivateRoute
                 exact
                 isAuthenticated={isLoggedIn}
                 path='/'
                 component={JournalScreen} />
                <Redirect to='auth/login' />
            </Switch>
         </div>
      </Router>
  )
}
