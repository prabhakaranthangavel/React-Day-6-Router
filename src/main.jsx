import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// data
const notes = [
    {
        id: 1,
        content: 'Ind vs Pak',
        important: true
    },
    {
        id: 2,
        content: 'Aus vs Eng',
        important: false
    },
    {
        id: 3,
        content: 'SA vs NZ',
        important: true
    },
    {
        id: 4,
        content: 'Afg vs Ban',
        important: true
    },
    {
        id: 5,
        content: 'SL vs WI',
        important: false
    }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App notes = {notes}/>)