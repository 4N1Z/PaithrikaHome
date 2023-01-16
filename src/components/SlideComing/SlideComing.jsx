import React from 'react'
import"../../components/SlideComing/SlideComing.css"

function SlideComing({ images, speed = 5000 }) {
    return (
        <div className="inner">
          <div className="wrapper">
            <section className="sectionSlides" style={{ "--speed": `${speed}ms` }}>
              {images.map(({ id, image }) => (
                <div className="image" key={id}>
                  <img  classname = "imgSlides"src={image} alt={id} />
                </div>
              ))}
            </section>
            <section className="sectionSlides"  style={{ "--speed": `${speed}ms` }}>
              {images.map(({ id, image }) => (
                <div className="image" key={id}>
                  <img classname = "imgSlides" src={image} alt={id} />
                </div>
              ))}
            </section>
            <section className="sectionSlides" style={{ "--speed": `${speed}ms` }}>
              {images.map(({ id, image }) => (
                <div className="image" key={id}>
                  <img  classname = "imgSlides"src={image} alt={id} />
                </div>
              ))}
            </section>
          </div>
        </div>
      );
}

export default SlideComing



  