import React from "react";
import trollFace from "./assets/Troll Face.svg";

export default function Header() {
  return (
    <div className="header">
      <img src={trollFace} alt="" />
      <h1>Memes Generator</h1>
    </div>
  );
}
