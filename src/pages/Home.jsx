import React, { useState, useEffect } from "react";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
function Home() {
  const [hidden, setHidden] = useState(false);
  const setSidebar = () => {
    setHidden(!hidden);
  };
  return (
    <>
      <Navbar setSidebar={setSidebar} />
      <div className="d-flex container">
        <Sidebar hide={hidden} />
        <MainSection />
      </div>
    </>
  );
}

export default Home;
