import React, { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import MemeImage from "./MemeImage";
import memeData from "./memesData";

export default function App() {
  const [formData, setFormData] = useState({
    topText: "",
    bottomText: "",
  });
  console.log(formData);
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  const [memeImage, setMemeImage] = useState(memeData.data.memes[10].url);
  function handleImageGenerate() {
    const randomMemeLength = Math.floor(
      Math.random() * memeData.data.memes.length
    );
    const newMeme = memeData.data.memes[randomMemeLength];
    const newUrl = newMeme.url;
    setMemeImage(newUrl);
  }
  return (
    <>
      <div className="container">
        <Header />
        <Form
          topValue={formData.topText}
          bottomValue={formData.bottomText}
          handleChangeEvent={handleChange}
          handleNewImage={handleImageGenerate}
        />
        <MemeImage
          topTextValue={formData.topText}
          bottomTextValue={formData.bottomText}
          imageUrl={memeImage}
        />
      </div>
    </>
  );
}
