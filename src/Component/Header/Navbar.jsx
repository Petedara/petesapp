import React from "react";
import ProjectLogo from "./brandlogo.png";
import Myprofilepictire from "./pizza.jpg";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="project-logo">
        <img src={ProjectLogo} alt="" />
      </div>
      <div style={{display:"flex"}}>
        <div className="my-profile-photo">
          <img src={Myprofilepictire} alt="" />
        </div>
        <div className="search-box">
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
            <h5>Search</h5>
          </button>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="nav-area">
        <div className="nav-tab">
          <button className="bottom-navtab">
            <i className="fa-solid fa-house"></i>
            <h5>Home</h5>
          </button>
          <button className="bottom-navtab">
            <i className="fa-solid fa-newspaper"></i>
            <h5 style={{ width: "4rem" }}>News Feed</h5>
          </button>
          <button>
            <i className="fa-solid fa-comment-dots"></i>
            <h5>Messages</h5>
          </button>
          <button className="bottom-navtab">
            <i className="fa-solid fa-bell"></i>
            <h5>Notification</h5>
          </button>
        </div>
        <div className="menu-tab bottom-navtab">
          <button>
            <i className="fa-solid fa-grip"></i>
            <h5>Menu</h5>
          </button>
        </div>
        <div className="my-profile-picture">
          <img src={Myprofilepictire} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
