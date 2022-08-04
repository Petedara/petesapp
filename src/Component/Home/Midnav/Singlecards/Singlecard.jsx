import React from "react";
import "./singlecard.css"
import Featuredimage1 from "./product.jpg";
import Featuredimage from "./suya.jpg";

const Singlecard = () =>{

    return(
        <div>
            <div className="card-box">
                <nav className="singlecard">
                    <strong>Top selling items</strong>
                    <div className="featured-images">
                        <img src={Featuredimage1} alt=""/>
                    </div>
                    <p>Explore now</p>
                </nav>
                <nav className="singlecard">
                    <strong>Top selling items</strong>
                    <div className="featured-images">
                        <img src={Featuredimage} alt=""/>
                    </div>
                    <p>Explore now</p>
                </nav>
                <nav className="singlecard">
                    <strong>Top selling items</strong>
                    <div className="featured-images">
                        <img src={Featuredimage1} alt=""/>
                    </div>
                    <p>Explore now</p>
                </nav>
                <nav className="singlecard extra-card">
                    <strong>Top selling items</strong>
                    <div className="featured-images">
                        <img src={Featuredimage1} alt=""/>
                    </div>
                    <p>Explore now</p>
                </nav>
            </div>
        </div>
    )
}

export default Singlecard;