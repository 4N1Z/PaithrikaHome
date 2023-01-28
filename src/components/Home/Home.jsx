import React from "react";
import "./Home.css";
import { useState,useEffect } from "react";
import {homePic} from "../../assets/images/export_file";
import {homeImages} from "../../constants/index"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

// import {PureCounter} from "@srexi/purecounterjs";
// import {PureCounter} from "@snpm i --save @srexi/purecounterjsrexi/purecounterjs";
// new PureCounter();
// new PureCounter()
// src="https://cdn.jsdelivr.net/npm/@srexi/purecounterjs/dist/purecounter_vanilla.js">


function Home() { // new PureCounter();
    const delay = 10000;
    const [index, setIndex] = useState(0);
    useEffect(() => {
      setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === homepics.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {};
    }, [index]);
  
    const homepics = [
        {
            src: "https://picsum.photos/500.webp",
            tag: ""
        }, {
            src: "https://picsum.photos/400.webp",
            tag: ""
        }, {
            src: "https://picsum.photos/300.webp",
            tag: ""
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
                            homepics.map((item) => <img className="homePic"
                                src={
                                    item.src
                                }
                                style={{opacity:index*1}}
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
              </Carousel> */} </section>
    );
}

export default Home;
