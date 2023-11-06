//! Create a navigation that becomes normal in React
//! React ல் சாதாரணமாக அல்லது Normal ஆக ஒரு navigation ஐ உருவாக்க

// import React, {useState} from 'react';
// import Home from './components/Home';
// import Notes from './components/Notes';
// import Users from './components/Users';


// function App() {


// // Creating a state to store the current page
// const [page, setPage] = useState("Home");

// const toPage = (page) => (event) => {
//   event.preventDefault();
//   setPage(page);
// }

// const content = () => {
//   if(page === "Home") {
//     return <Home />
//   } 
//   else if(page === "Notes") {
//     return <Notes />
// }
// else if(page === "Users") {
//   return <Users />
// }
// }

// // Object to add padding style to the element
//   const padding = {
//     padding: 5,
//   }

//   return (
//       <div>
//         <div>
//         <a href='#' style={padding} onClick={toPage ("Home")}  >Home</a>
//         <a href='#' style={padding} onClick={toPage ("Notes")} >Notes</a>
//         <a href='#' style={padding} onClick={toPage ("Users")} >Users</a>
//       </div>

// {/* Render the content of the component for the current set page */}
// {content ()}

//       </div>
//   )
// }

// export default App;



// output:
// Kindly console the output
// Home  Notes  Users      என்ற navigation bar உருவாகும்.
// எதை click செய்கிறோமோ அதை காட்டும்.

// *************************************************************************************************************************

//! Create the same navigation bar using react-router-dom
//! இதே navigation bar ஐ react-router-dom ஐ பயன்படுத்தி உருவாக்க  

// import React from 'react';
// import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Notes from './components/Notes';
// import Users from './components/Users';


// function App() {

//   const padding = {
//     padding: 5,
//   }

//   return (
//     <Router>
//       <div>
//         <Link to='/' style={padding}>Home</Link>
//         <Link to='/notes' style={padding}>Notes</Link>
//         <Link to='/users' style={padding}>Users</Link>
//       </div>

//       <Routes>
//         <Route path='/'      element={<Home  />} />
//         <Route path='/notes' element={<Notes />} />
//         <Route path='/users' element={<Users />} /> 
//       </Routes>

//       <div>
//         <i id='footer'>@Note App</i>
//       </div>
//     </Router>

//   )
// }

// export default App;



// output:
// Kindly console the output
// Home  Notes  Users      என்ற navigation bar உருவாகும்.
// எதை click செய்கிறோமோ அதை காட்டும்.
// அதனுடன் Browsing History ன் முன் மற்றும் பின் செயல்களை நாம் அறிந்து கொள்ளலாம்.

// *************************************************************************************************************************
//! How to handle URL params
//! URL params ஐ எவ்வாறு கையாளுவது

import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Notes from './components/Notes';
import Users from './components/Users';
import Note from './components/Note';


function App( {notes} ) {

  const padding = {
    padding: 5,
  }

  return (
    <Router>
      <div>
        <Link to='/' style={padding}>Home</Link>
        <Link to='/notes' style={padding}>Notes</Link>
        <Link to='/users' style={padding}>Users</Link>
      </div>

      <Routes>
        <Route path='/'      element={<Home  />} />
        <Route path='/notes' element={<Notes notes = {notes}/>} />
        <Route path='/users' element={<Users />} /> 
        <Route path='/notes/:noteid' element={<Note notes={ notes } /> } />
      </Routes>

      <div>
        <i id='footer'>@Your's Prabhakaran</i>
      </div>
    </Router>

  )
}

export default App;


// *************************************************************************************************************************


// ! Steps:

// Follow the notes.txt file

// *************************************************************************************************************************