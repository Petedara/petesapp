import Navbar from "../Header/Navbar"
import Sidebar from "./Sidebar/Sidebar"
import Midnav from "./Midnav/Midnav"
import Menu from "./Menu/Menu"
import "./home.css"

export default function Home(){
    return(
        <nav>
            <div className="home-view">
                <Navbar />
                <div className="home-grid">
                    <div className="side-bar">
                        <Sidebar />
                    </div>
                    <div className="mid-nav">
                        <Midnav />
                    </div>
                    <div className="menu-bar">
                        <Menu />
                    </div>
                </div>
            </div>
        </nav>
    )
}