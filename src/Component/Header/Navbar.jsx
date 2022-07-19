import React from 'react';
// import { Outlet, Link, BrowserRouter as Router } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='search-box'>
        <button><i className="fa-solid fa-magnifying-glass"></i></button>
        <input type="text" placeholder="Search" />
      </div>
      <div className='nav-tab'>
        <button> 
          <i className="fa-solid fa-house"></i>
          <h5>Home</h5>
        </button>
        <button> 
          <i className="fa-solid fa-newspaper"></i>
          <h5 style={{width: "4rem"}}>News Feed</h5>
        </button>
        <button> 
          <i className="fa-solid fa-comment-dots"></i>
          <h5>Messages</h5>
        </button>
        <button> 
          <i className="fa-solid fa-bell"></i>
          <h5>Notification</h5>
        </button>
      </div>
      <div className="menu-tab">
        <button> 
          <i className="fa-solid fa-grip"></i>
          <h5>Menu</h5>
        </button>
      </div>
    </nav>
  )
};

export default Navbar;