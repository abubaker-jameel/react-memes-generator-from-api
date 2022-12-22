import React, { useEffect, useState } from "react";
import Form from "./Form";
import Header from "./Header";
import MemeImage from "./MemeImage";

export default function App() {
  const [formData, setFormData] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1ur9b0.jpg",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  
  const [memeImage, setMemeImage] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemeImage(data.data.memes));
  }, []);

  function handleImageGenerate() {
    const randomMemeLength = Math.floor(Math.random() * memeImage.length);
    const newMeme = memeImage[randomMemeLength];
    const newUrl = newMeme.url;
    setFormData((prevFormData) => ({
      ...prevFormData,
      randomImage: newUrl,
    }));
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
          imageUrl={formData.randomImage}
        />
      </div>
    </>
  );
}
