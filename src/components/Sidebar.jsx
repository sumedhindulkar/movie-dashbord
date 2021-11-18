import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PopularIcon from "@mui/icons-material/LocalFireDepartment";
import TvIcon from "@mui/icons-material/LiveTv";
import MoviesIcon from "@mui/icons-material/Theaters";
import ProfileIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import { useLocation, Link } from "react-router-dom";
function Sidebar({ hide }) {
  const [hideSidebar, setHideSidebar] = useState();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    setHideSidebar(hide);
  }, [hide]);
  const display = hideSidebar ? { display: "none" } : { display: "block" };
  return (
    <>
      <div className="sidebar" style={display}>
        <div className="d-flex flex-column justify-content-between align-center h-100">
          <div className=" d-flex flex-column justify-content-evenly  h-70">
            <Link to="/" className={"/" == path ? "active" : ""}>
              <HomeIcon fontSize="large" />
              <p>Home</p>
            </Link>

            <Link to="/popular" className={"/popular" == path ? "active" : ""}>
              <PopularIcon fontSize="large" />
              <p>Popular</p>
            </Link>

            <Link to="/tv" className={"/tv" == path ? "active" : ""}>
              <TvIcon fontSize="large" />
              <p>TV Series</p>
            </Link>
            <Link to="/movies" className={"/movies" == path ? "active" : ""}>
              <MoviesIcon fontSize="large" />
              <p>Movies</p>
            </Link>
            <Link to="/profile" className={"/profile" == path ? "active" : ""}>
              <ProfileIcon fontSize="large" />
              <p>Profile</p>
            </Link>
          </div>
          <Link
            to="/settings"
            className={"/settings" == path ? "active my-2" : " my-2"}
          >
            <SettingsIcon fontSize="large" />
            <p className="text-center">Settings</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
