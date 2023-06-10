import React from 'react'
import Logo from '../assets/photos/main-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
     var loc = window.location.pathname 
  return (
   <>
   <nav>
       <input type='checkbox' id='check' />
      <label for="check" className='checkbtn'>
      <FontAwesomeIcon icon={faBars} />
      </label>
      <label className='logo'>
         <img src={Logo}  />
      </label>
      <button className='joinus1'>Join Us</button>

      <ul>
      <button className='joinus'>Join Us</button>
         <li style={window.location.pathname == "/"? {textDecoration : "underline" , textDecorationColor : "#FCCD0A" , textDecorationThickness : "4px"}:{}}><a href="">Home</a></li>
         <li style={window.location.pathname == "/team"? {textDecoration : "underline" , textDecorationColor : "#FCCD0A" , textDecorationThickness : "4px"}:{}}><a href="team">Team</a></li>
         <li style={window.location.pathname == ""? {textDecoration : "underline" , textDecorationColor : "#FCCD0A" , textDecorationThickness : "4px"}:{}}><a href="">Event</a></li>
         <li style={window.location.pathname == ""? {textDecoration : "underline" , textDecorationColor : "#FCCD0A" , textDecorationThickness : "4px"}:{}} ><a href="">Sponsors</a></li>
         <li style={window.location.pathname == ""? {textDecoration : "underline" , textDecorationColor : "#FCCD0A" , textDecorationThickness : "4px"}:{}}><a href="">Contact</a></li>

      </ul>

   </nav>


   </>
  )
}

export default Header