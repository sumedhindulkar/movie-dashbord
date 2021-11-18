import React from "react";
import Movie from "./Movie";
import actor from "../assets/images/dwayne.jpg";
function MainSection() {
  return (
    <>
      <div className="main-section">
        <Movie />
        <div className="movie-details my-2 d-flex">
          <div className="w-70 left d-flex flex-column justify-content-evenly">
            <h2>Luca</h2>
            <p className="mt-3">2021 - animation Adventure - 120 minutes</p>
            <p>&#9734;&#9734;&#9734;&#9734;&#9734; 5.0 (135 vote)</p>
            <h3 className="mt-3">Stars</h3>
            <div className="bottom mt-3 d-flex">
              <div className="stars ">
                <img src={actor} />
                <div>
                  <h4>Jacob Tremblay</h4>
                  <p>voice</p>
                </div>
              </div>
              <div className="stars">
                <img src={actor} />
                <div>
                  <h4>Jacob Tremblay</h4>
                  <p>voice</p>
                </div>
              </div>
              <div className="stars">
                <img src={actor} />
                <div>
                  <h4>Jacob Tremblay</h4>
                  <p>voice</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-30 right d-flex flex-column ">
            <p className="text-right p-2">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text common used to demonstrate the visual form
            </p>
            <button className="my-btn1 my-2">Watch Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSection;
