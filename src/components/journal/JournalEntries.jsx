import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTodo } from '../../actions/ui';

import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {

  let distach = useDispatch()
  const { notes } = useSelector(state => state.notes)

console.log(notes);

useEffect(()=> {

  distach( loadTodo() )

},[])


  return (
    <div className='journal__entries'>
        {
            notes.map( value => (
              <div key={value.id} >
                    <JournalEntry value={value} />
              </div>
            ))
        }
    </div>
  )
}
