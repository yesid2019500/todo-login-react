import {firebase, googleAuthProvider} from '../firebase/firebase-config';
import Swal from 'sweetalert2';

import { types } from "../types/types"
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch)=> {

   dispatch(startLoading())
        
 // dispatch(login(628, 'Kelly'))
 firebase.auth().signInWithEmailAndPassword(email, password)
 .then(({user}) => {

     dispatch(login(user.uid, user.displayName))
     dispatch(finishLoading())
  }).catch( err => {
      console.log(err)
      dispatch(finishLoading())
   
      Swal.fire('Error', err.message, 'error');
     })

 }
}


export const startRegisterWithEmailPassword = (email,password,name) => {
    return ( dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async ({user}) => {

          await user.updateProfile({displayName: name })
       
            dispatch(
                login(user.uid, user.displayName)
                
            )
         }).catch( err => {
             console.log(err)
             Swal.fire('Error', err.message, 'error');
         })

    }
}





export const startGoogleLogin = () => {

    return ( dispatch )=> {
        // devuelve una promesa
        firebase.auth().signInWithPopup(googleAuthProvider)

            .then(({user}) => {
                console.log(user)
               dispatch(
                login(user.uid, user.displayName)
               )
            })
    }
}




// las llaves () es para evitar escribir return
export const login = (uid, displayName,photoURL) => ({
     type: types.login,  /*este seria el return */
        payload: {
            uid,
            displayName,
            photoURL
            
    }
})



// accion logout
// NOTA: como es asincrono debemnos poner la funcion return como
// un callback, NOta: el dispath viene de thunk redux que es para
// manejar cosas asincronas, promesas
export const startLogout = () => {
    return async (dispatch) => {
       await firebase.auth().signOut();
       dispatch(logout())
    }
}

// esta accion borrara el id y el displayName del store
// NOTA: las llaves () es un return, estamos omitiendo escribir
// return
export const logout = () => ({
    type:types.logout
})

