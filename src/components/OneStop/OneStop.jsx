import React from "react";
import "./OneStop.css";
import "../../App.css";
import { oneStopLogo } from "../../assets/images/export_file";

function OneStop() {
  return (
    <section id="OneStop">
      <div className="OneStopDiv">
        <img src={oneStopLogo} alt="" className="onebg" />
        <h1 className="titleOneStop">Services Offered</h1>

        <div class="rowMain-container">
          <div class="rowHeading"></div>
          <div class="cards">
            <div class="card card-1">
              <div className="card-bg"></div>
              <h2 class="card__title">Resale</h2>
            </div>

            <div class="card card-2">
              <h2 class="card__title">Rental service</h2>
            </div>

            <div class="card card-3">
              <h2 class="card__title">Life long maintenance</h2>
            </div>

            <div class="card card-4">
              <h2 class="card__title">Loan facility</h2>
            </div>
            {/* <div class="card card-4">
              <h2 class="card__title">Loan facility</h2>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OneStop;
