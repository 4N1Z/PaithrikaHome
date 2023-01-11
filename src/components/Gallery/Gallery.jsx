import React from 'react'
import "./Gallery.css"
function Gallery() {
  const gallery_data = [
    {
      url : "https://images.unsplash.com/photo-1673360829505-a344f1e1e547?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      type: "photo tall",
      caption : "Something"
    },
    {
      url : "https://images.unsplash.com/photo-1671726805768-575f88de945a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      type : "photo wide",
      caption : "Something"
    },
    {
      url : "https://images.unsplash.com/photo-1673345548703-cd90c077877b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      type : "photo square",
      caption : "Something"
    },
    {
      url : "https://plus.unsplash.com/premium_photo-1668359408686-2c309619127c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      type : "photo wide",
      caption : "Something"
    },
    {
      url : "https://images.unsplash.com/photo-1673364982114-a1e07639bda3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      type : "photo square",
      caption : "Something"
    },
    {
      url : "https://images.unsplash.com/photo-1671725779392-3be592fd3ea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      type : "photo wide",
      caption : "Something"
    },
    {
      url: "https://images.unsplash.com/photo-1671725779392-3be592fd3ea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      type:"photo square",
      caption : "Something"
    },
    {
      url: "https://images.unsplash.com/photo-1671725779392-3be592fd3ea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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