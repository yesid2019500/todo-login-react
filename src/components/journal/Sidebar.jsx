import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout())
  } 


const {name, photo} = useSelector( state => state.auth );

const today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
const year = today.getFullYear();
const all = `${year} - ${month} - ${day}`;
day = ('0' + day ).slice(-2);
month = ('0' + month ).slice(-2);

  return (
    <aside className='journal__sidebar'>
        <div className="journal__sidebar-navbar">
            <h3 className="mt-5">
            <div className="photo">
             {
                (!photo)
                ? (<img className="true" src={'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg'} alt="" />)

                : (<img className="true" src={photo} alt="" />)
             }
             
            </div>
               <i className="far fa-moon"></i>
               <span>{name}</span>
            </h3>
            <button className="btn"
            onClick={ handleLogout }

            >
              Logout
            </button>
        </div>
        <div className="journal__new-entry">
          <i className="far fa-calendar-plus fa-5x"></i>
          <p className="mt-5">Notes of {all}</p>
        </div>
        <JournalEntries/>
    </aside>
  )
}
