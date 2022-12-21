import React from "react";
import memesData from "./memesData";

export default function MemeImage() {
  return (
    <div className="meme--image--section">
      <img src={memesData.data.memes[4].url} alt="" />
      <span className="top--text">Top Text</span>
      <span className="bottom--text">Bottom Text</span>
    </div>
  );
}
