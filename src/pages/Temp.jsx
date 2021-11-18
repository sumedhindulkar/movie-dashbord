import React from "react";
import { Link } from "react-router-dom";
function Temp() {
  return (
    <div>
      <h1 className="bg-red">This is a Popular page</h1>
      <Link to="/">
        {" "}
        <h2>Back Home page</h2>
      </Link>
    </div>
  );
}

export default Temp;
