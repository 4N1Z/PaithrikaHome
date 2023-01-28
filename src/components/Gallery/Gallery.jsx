import React from 'react'
import "./Gallery.css"
function Gallery() {
    const gallery_data = [
        {
            url: "https://picsum.photos/seed/this/500/200",
            type: "photo tall",
            caption: "Something"
        },
        {
            url: "https://picsum.photos/seed/will/200/300",
            type: "photo wide",
            caption: "Something"
        },
        {
            url: "https://picsum.photos/seed/be/200",
            type: "photo square",
            caption: "Something"
        },
        {
            url: "https://picsum.photos/seed/awesome/200/300",
            type: "photo wide",
            caption: "Something"
        }, {
            url: "https://picsum.photos/seed/as/200",
            type: "photo square",
            caption: "Something"
        }, {
            url: "https://picsum.photos/seed/hell/200/300",
            type: "photo wide",
            caption: "Something"
        }, 
        // {
        //     url: "https://picsum.photos/seed/lets/200",
        //     type: "photo square",
        //     caption: "Something"
        // }, {
        //     url: "https://picsum.photos/seed/go/200",
        //     type: "photo square",
        //     caption: "Something"
        // }
    ]
    return (
        <div className='gallery-container' id='gallery'>
            <span className='headingMain'>Gallery</span>
            <div className='gallery'>
                <div className="page page-one">
                  {gallery_data.map((item)=>(
                    <img src={item.url} alt="" />
                  ))}
                </div>
                <div className="page page-two">
                {gallery_data.map((item)=>(
                    <img src={item.url} alt="" />
                  ))}
                </div>
                <div className="page page-three">
                {gallery_data.map((item)=>(
                    <img src={item.url} alt="" />
                  ))}
                </div>
                <div className="page page-four">
                {gallery_data.map((item)=>(
                    <img src={item.url} alt="" />
                  ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery
