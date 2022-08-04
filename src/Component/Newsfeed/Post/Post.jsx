import React, { useState } from "react";
import profileimage from "./Dp.jpg";
import "./post.css";

import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const Newpost = (props) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const seeMore = (
    <span className="seemore">... See more</span>
  )

  const caption =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, saepe ossimus. Ullam labore repellat necessitatibus? Debitis provident et quas voluptate.";
  const cutCaption = (
    <ResponsiveEllipsis
      text={caption}
      maxLine={2}
      ellipsis={seeMore }
      lineHeight="40"
      trimRight
      basedOn="letters"
    />
  );

  const toggleReadmore = () => {
    setIsReadMore(!isReadMore);
  };

  const AllText = () => {
    if (isReadMore === true) {
      return cutCaption;
    }
    if (isReadMore === false) {
      return caption;
    }
  };

  return (
    <nav className="news-post">
      <div>
        <div className="news-head">
          <img src={profileimage} alt="profile-photograph" />
          <strong>{props.name}</strong>
        </div>

        <div className="news-text" onClick={toggleReadmore}>
          <AllText />
        </div>

        <div className="photospeak">
          <img src={profileimage} alt="Photospeak(s)" />
        </div>

        <div
          className="reaction-icon"
          style={{
            color: "gray",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <i class="fa-regular fa-thumbs-up" style={{ fontSize: "18px" }}></i>
          <i class="fa-regular fa-message" style={{ fontSize: "16px" }}></i>
          <i class="fa-solid fa-share" style={{ fontSize: "18px" }}></i>
        </div>
      </div>
    </nav>
  );
};

export default Newpost;
