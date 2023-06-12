import React from 'react'

function Member({Photo ,Name,Position}) {
  return (
    <div className="member">
       <div className="photo-container">
       <img src={Photo} />
       </div>
       <h2>{Name}</h2>
       <p>{Position}</p>
     </div>
  )
}

export default Member