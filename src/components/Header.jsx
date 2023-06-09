import React from 'react'
import Logo from '../assets/photos/logo-text.png'

function Header() {
     var loc = window.location.pathname 
  return (
   <div className='header'>
      <div className="logo-container">
      <a href="/">
      <img src={Logo} className='main-logo' />  
      </a>
      </div>
     
     <ul className='navigation'>
        <li style={window.location.pathname == "/"? {textDecoration : "underline" , textDecorationColor : "#FCCD0A" , textDecorationThickness : "4px"}:{}}><a href='/'>Home</a></li>
        <li style={window.location.pathname == "/team"? {textDecoration : "underline" , textDecorationColor : "#FCCD0A" , textDecorationThickness : "4px"}:{}}><a href='team'>Team</a></li>
        <li style={window.location.pathname == ""? {textDecoration : "underline" , textDecorationColor : "#FCCD0A" , textDecorationThickness : "4px"}:{}}><a href=''>Events</a></li>
        <li style={window.location.pathname == ""? {textDecoration : "underline" , textDecorationColor : "#FCCD0A" , textDecorationThickness : "4px"}:{}}><a href=''>Sponsors</a></li>
        <li style={window.location.pathname == ""? {textDecoration : "underline" , textDecorationColor : "#FCCD0A" , textDecorationThickness : "4px"}:{}}><a href=''>Contact</a></li>
     </ul>

     <button className='joinus'>Join Us</button>

   </div>
  )
}

export default Header