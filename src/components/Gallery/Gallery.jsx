import React from 'react'
import "./Gallery.css"
function Gallery() {
  const gallery_data = [
    {
      url : "https://picsum.photos/seed/this/500/200",
      type: "photo tall",
      caption : "Something"
    },
    {
      url : "https://picsum.photos/seed/will/200/300",
      type : "photo wide",
      caption : "Something"
    },
    {
      url : "https://picsum.photos/seed/be/200",
      type : "photo square",
      caption : "Something"
    },
    {
      url : "https://picsum.photos/seed/awesome/200/300",
      type : "photo wide",
      caption : "Something"
    },
    {
      url : "https://picsum.photos/seed/as/200",
      type : "photo square",
      caption : "Something"
    },
    {
      url : "https://picsum.photos/seed/hell/200/300",
      type : "photo wide",
      caption : "Something"
    },
    {
      url: "https://picsum.photos/seed/lets/200",
      type:"photo square",
      caption : "Something"
    },
    {
      url: "https://picsum.photos/seed/go/200",
      type:"photo square",
      caption : "Something"
    }
  ]
  return (
    <div className='gallery-container'>
      <span className='headingMain' style={{paddingTop: 0,paddingBottom:0}}>Gallery</span>
      <div className="gallery">
      {gallery_data.map((photo)=>(
        <div className={photo.type}>
          <img src={photo.url} alt={photo.caption} />
        </div>
      ))}
      </div>
    </div>
  )
}

export default Gallery