import React from "react";
import Foodvendor from "./foodvendorlogo.jpg";
import ProductImage from "./pizza.jpg";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC"
import "./product.css";

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)


export default function Product(props) {
  const name = "Maestromarv";
  let vendorsName = name.length > 15 ? name.slice(0, 14) + "..." : name;
  const pName = "Pizza";
  const details =
    "Lorem ipsum dolor, sit amet consectetur adipisicing ljfi ra gt tyh njusw wji jw";
  const cName = pName + "- "+details;

  return (
    <nav className="product">
      <div className="product-head">
        <img
          src={Foodvendor}
          alt="Profile-photograph"
          style={{ width: "45px", height: "45px", borderRadius: "100%" }}
        />
        <div className="vendors-name">
          <strong>{vendorsName}</strong>
          <small style={{ whiteSpace: "nowrap", fontSize: "12px" }}>
            Electronic gadgets
          </small>
        </div>
      </div>
      <div className="product-body">
        <img
          src={ProductImage}
          alt="Product-photograph"
          style={{ width: "100%", maxHeight: "200px" }}
        />
        <div className="product-details">
          <p
            className="product-name"
            id="product-name"
          >
            {
              <ResponsiveEllipsis
                text={cName}
                maxLine={2}
                ellipsis="..."
                lineHeight="40"
                trimRight
                basedOn="letters"
              />
            }
          </p>
          <div className="percentage-slash">
            <div className="percentage-off">
              <p>30% off</p>
            </div>
          </div>
          <span className="price-tag">$70</span>
          <small
            className="old-price"
            style={{ textDecoration: "line-through", marginLeft: "5px" }}
          >
            $100
          </small>
        </div>
      </div>
    </nav>
  );
}
