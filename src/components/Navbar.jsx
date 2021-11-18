import React from "react";
import actor from "../assets/images/dwayne.jpg";

function Navbar({ setSidebar }) {
  const handleChange = () => {
    setSidebar();
  };
  return (
    <>
      <div className="navbar">
        <div className="container d-flex  p-2">
          <div className="stars ">
            <img src={actor} />
            <div>
              <h4>Dwayne jhonson</h4>
              <p>hello buddy</p>
            </div>
          </div>
        </div>
        {/* <button onClick={handleChange}>navbar</button> */}
      </div>
    </>
  );
}

export default Navbar;
