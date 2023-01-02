import React from "react";
import "./OneStop.css";
import "../../App.css";

function OneStop() {
  return (
    <section id="OneStop">
      <div className="OneStopDiv">
        <h1 className="title">One Stop Solution</h1>
        {/* <div className="oneContainer">
            <div className="1half">

                
            </div>
            <div className="2half"></div>
        </div> */}
      </div>

      <div class="rowMain-container">
        <div class="rowHeading"></div>
        <div class="cards">
          <div class="card card-1">
            <div className="card-bg"></div>
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p class="card__apply">
              <a class="card__link" href="#">
                Apply Now <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div class="card card-2">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
            <p class="card__apply">
              <a class="card__link" href="#">
                Apply Now <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div class="card card-3">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">Ut enim ad minim veniam.</h2>
            <p class="card__apply">
              <a class="card__link" href="#">
                Apply Now <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div class="card card-4">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">
              Quis nostrud exercitation ullamco laboris nisi.
            </h2>
            <p class="card__apply">
              <a class="card__link" href="#">
                Apply Now <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          {/* <div class="card card-5">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">
              Ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </h2>
            <p class="card__apply">
              <a class="card__link" href="#">
                Apply Now <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default OneStop;
