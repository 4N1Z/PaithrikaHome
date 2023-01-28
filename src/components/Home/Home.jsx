import React from "react";
import "./Home.css";
import {homePic} from "../../assets/images/export_file";
import {homeImages} from "../../constants/index"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

// import {PureCounter} from "@srexi/purecounterjs";
// import {PureCounter} from "@snpm i --save @srexi/purecounterjsrexi/purecounterjs";
// new PureCounter();
// new PureCounter()
// src="https://cdn.jsdelivr.net/npm/@srexi/purecounterjs/dist/purecounter_vanilla.js">

var flag = 0;
function showSlides() {
    var slides = document.getElementsByClassName("homePic");
    switch (flag) {
      case 0:
        slides[0].style.display ='block';
        slides[1].style.display ='none';
        slides[2].style.display ='none';
        console.log('inside case 0');
        break;
      case 1:
        slides[1].style.display ='block';
        slides[0].style.display ='none';
        slides[2].style.display ='none';
        break;
      case 2:
        slides[2].style.display ='block';
        slides[0].style.display ='none';
        slides[1].style.display ='none';
        break;
      default:
        break;
      }
      flag++;
      if (flag==3){
        flag =0;
      }
  }
function Home() { // new PureCounter();
  var flag = 0;
  const showSlides = ()=>{
    var slides = document.getElementsByClassName("homePic");
    switch (flag) {
      case 0:
        slides[0].style.display ='block';
        slides[1].style.display ='none';
        slides[2].style.display ='none';
        console.log('inside case 0');
        break;
      case 1:
        slides[1].style.display ='block';
        slides[0].style.display ='none';
        slides[2].style.display ='none';
        break;
      case 2:
        slides[2].style.display ='block';
        slides[0].style.display ='none';
        slides[1].style.display ='none';
        break;
      default:
        break;
      }
      flag++;
      if (flag==3){
        flag =0;
      }
  }
    const homepics = [
        {
            src: "https://picsum.photos/id/1/500.webp",
            id: 'homeimage1'
        }, {
            src: "https://picsum.photos/id/2/500.webp",
            id: 'homeimage2'
        }, {
            src: "https://picsum.photos/id/3/500.webp",
            id: 'homeimage3'
        },
    ]

    return (
        <section id="home">
            <div className="Home">
                <div className="mainContainer">
                    <div className="leftBox">
                        <div className="heading">
                            <div className="animate__animated animate__fadeIn titles">
                                <span className="title1">Building your</span>
                                <br/>
                                <span className="title2">Dream Home</span>
                                <br/>
                                <span className="title3">has never been easier</span>
                            </div>
                            <p className="animate__animated animate__fadeIn subTitles">
                                We offer end-to-end services with our expert team of architects,
                                                                                designers, and engineers that can help you with every step of
                                                                                the process.
                            </p>
                        </div>
                    </div>

                    <div className="rightBox">
                        <div className="Gallery">
                            {
                            homepics.map((item) => <img className="homePic fade"
                                src={
                                    item.src
                                }
                                id={
                                    item.id
                                }
                                alt="home pic"/>)
                        } </div>
                    </div>
                </div>
                <div className="animate__animated animate__headShake counterContainer">
                    <div className="counter">
                        <h1 className="countNumber">78+</h1>
                        {/* <span  data-purecounter-start="0" data-purecounter-end="200" data-purecounter-duration="3" className="purecounter">0</span><span> +</span> */}
                        <h5 className="countTitle">
                            Works
                            <br/>
                            Completed
                        </h5>
                    </div>
                    <div className="counter">
                        <h1 className="countNumber">78+</h1>
                        <h5 className="countTitle">
                            Works
                            <br/>
                            Completed
                        </h5>
                    </div>
                    <div className="counter">
                        <h1 className="countNumber">78+</h1>
                        <h5 className="countTitle">
                            Works
                            <br/>
                            Completed
                        </h5>
                    </div>
                </div>
            </div>
            {/* <Carousel>
                {homeImages.map((image, index) => (
                  <div
                    key={index}
                    className="homePic">
                    <img src={image.src} alt="ok"/>
                  </div>
                ))}
              </Carousel> */} 
              {showSlides}
              {setInterval(showSlides, 10000)}
              </section>
    );
}

export default Home;
