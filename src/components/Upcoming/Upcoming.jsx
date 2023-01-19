import React from 'react'
import { UpcomingImages } from '../../constants'
// import { img1 } from '../../assets/images/main/export_img'
import "./Upcoming.css"

function Upcoming() {
  return (
    <div className="upcomingContainer">
        <div className="picContainer">
          {UpcomingImages.map((images)=>(
            <img src={img1} alt="" />
          ))}
          
    
        </div>
        <p className='upcoming details'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
    </div>
  )
}

export default Upcoming