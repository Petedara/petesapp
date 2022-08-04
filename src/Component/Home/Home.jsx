import Navbar from "../Header/Navbar"
import Sidebar from "./Sidebar/Sidebar"
import Midnav from "./Midnav/Midnav"
import Menu from "./Menu/Menu"
import Bottomnavbar from "../Bottomnavbar/Bottomnavbar"
import "./home.css"

export default function Home() {
    console.log(window.innerWidth)
    return (
        <nav className="home">
            <div className="home-view">
                <div>
                    <div className="navbar-container">
                        <Navbar />
                    </div>
                </div>
                
                <div className="home-grid">
                    <div className="side-bar">
                        <div className="sidebar-container">
                            <Sidebar />
                        </div>
                    </div>
                    <div className="mid-nav">
                        <Midnav />
                    </div>
                    <div className="menu-bar">
                        <div className="menubar-container">
                            <Menu />
                        </div>
                    </div>
                </div>
                <div className="base-navbar">
                    <div className="base-navbar-container">
                        <Bottomnavbar />
                    </div>
                </div>
            </div>
        </nav>
    )
}