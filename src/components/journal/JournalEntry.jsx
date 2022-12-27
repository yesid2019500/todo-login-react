
import React from 'react'

export const JournalEntry = ({value}) => {
  // console.log(value.title);


  return (
    <div className="journal__entry cursor">
        <div className="journal_entry-pictures">
        </div>
        <div className="journal__entry-body">
            <p className="journal__entry-title">Today</p>
            <p className={ value.completed === true ? 'false_text' : 'true_text' } > {value.title} </p>
        </div>
        <div className="journal__entry-date-box">
            <span>Monday</span>
            <h4>28</h4>
        </div>

        <div className="change">
          <button className={ value.completed === true ? 'button_state2' : 'button_state' }
          
          
          >
          {
            value.completed === true ? 'Incomplete' : 'Completed'
           }
          </button>
        </div>
    </div>
  )
}
