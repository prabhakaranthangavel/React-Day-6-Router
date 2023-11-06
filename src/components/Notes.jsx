import React from 'react'
import { Link } from 'react-router-dom'

function Notes( {notes} ) {
  return (
    <div>
         <h3>Match Schedule</h3>
         <ul>
          {
            notes.map (note =>
              <li key={note.id} > <Link to = {`/notes/${note.id}`} > {note.content} </Link></li>)
          }
         </ul>
    </div>
  )
}

export default Notes