import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { ContainerLocal } from './ContainerLocal'
import { Sidebar } from './Sidebar'
export const JournalScreen = () => {

  const { active } = useSelector( state => state.notes );
  // console.log(active)
  return (
    <div className="journal__main-content">
       <Sidebar/>
       <main>
    

      {
     
        ( active )
          ? (<NoteScreen/>)

          : (<ContainerLocal/>)
      }
        
       </main>
    </div>
  )
}
