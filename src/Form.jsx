import React from "react";

export default function Form(props) {
  return (
    <>
      <div className="form">
        <input
          type="text"
          name="topText"
          placeholder="Top Text"
          onChange={props.handleChangeEvent}
          value={props.topValue}
        />
        <input
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          onChange={props.handleChangeEvent}
          value={props.bottomValue}
        />
        <button onClick={props.handleNewImage}>Get a new meme image 🖼</button>
      </div>
    </>
  );
}
