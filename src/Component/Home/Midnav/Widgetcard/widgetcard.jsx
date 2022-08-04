import React from "react";
import widgetimage1 from "./product.jpg";
import widgetimage2 from "./suya.jpg";
import "./widgetcard.css";

const Widgetcard = () => {
    return (
        <nav>
            <div className="widget-card">
                <div className="widget-title">
                    <strong>hello</strong>
                    <span>See more</span>
                </div>
                <div className="widget-image">
                    <div>
                        <img src={widgetimage1} alt="" />
                    </div>
                    <div>
                        <img src={widgetimage2} alt="" />
                    </div>
                    <div>
                        <img src={widgetimage1} alt="" />
                    </div>
                    <div>
                        <img src={widgetimage2} alt="" />
                    </div>
                    <div>
                        <img src={widgetimage1} alt="" />
                    </div>
                    <div>
                        <img src={widgetimage2} alt="" />
                    </div>
                    <div>
                        <img src={widgetimage2} alt="" />
                    </div>
                    <div>
                        <img src={widgetimage2} alt="" />
                    </div>
                    <div>
                        <img src={widgetimage2} alt="" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Widgetcard;