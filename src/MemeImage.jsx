import React from "react";

export default function MemeImage(props) {
  return (
    <div className="meme--image--section">
      <img src={props.imageUrl} alt="" />
      <span className="top--text">{props.topTextValue}</span>
      <span className="bottom--text">{props.bottomTextValue}</span>
    </div>
  );
}
