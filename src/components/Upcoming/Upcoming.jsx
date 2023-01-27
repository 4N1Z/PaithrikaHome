import React from "react";
import "./Upcoming.css";

import { UpcomingProjectDetails } from "../../constants/index.js";

function Upcoming() {
  return (
    <div>
      <div className="upcomingContainer">
        <h1 className="titleUpcoming"> Completed Project </h1>

        {UpcomingProjectDetails.map((item) => (
          <div className="indiProjects">

            <div className="imageOfProject">
              <img src={item.image} alt="" />
            </div>
            <div className="projectName">
              <h2> {item.ProjectName} </h2>
            </div>
            <div className="detailOfProject">
              <div className="authorDetails">
                <div className="AuthorName">
                  <h4 className="giveBold">Author</h4>
                  <span>{item.AuthorName}</span>
                </div>
                <div className="ProjectDuration">
                  <h4 className="giveBold">Duration</h4>
                  <span>{item.Duration}</span>
                </div>
              </div>
              <div className="projectDescription">
                <h4 className="giveBold">Description</h4>
                <p className="descriptionPara">{item.detail}</p> 
                <div className="listOfMoreDetails">
                  {item.list}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Upcoming;
