import React from "react";
import "./bottomnavbar.css"

const Bottomnavbar = () => {
    return (
        <nav>
            <div className="base-nav-tab">
                <button className="bottom-nav-tab">
                    <i className="fa-solid fa-house"></i>
                    <h5>Home</h5>
                </button>
                <button className="bottom-nav-tab">
                    <i className="fa-solid fa-newspaper"></i>
                    <h5 style={{ width: "4rem" }}>News Feed</h5>
                </button>
                {/* <button>
                    <i className="fa-solid fa-comment-dots"></i>
                    <h5>Messages</h5>
                </button> */}
                <button className="bottom-nav-tab">
                    <i className="fa-solid fa-bell"></i>
                    <h5>Notification</h5>
                </button>
                <button className="bottom-nav-tab">
                    <i className="fa-solid fa-grip"></i>
                    <h5>Menu</h5>
                </button>
            </div>
                
        </nav>
    )
}

export default Bottomnavbar;