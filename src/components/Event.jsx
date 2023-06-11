import React from 'react'

function Event({Photo,Title,Date}) {
  return (
     <div className="event">
       <div className="photo-container">
       <img src={Photo} />
       </div>
       <h2>{Title}</h2>
       <p>{Date}</p>
     </div>
  )
}

export default Event