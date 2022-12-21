import React from "react";
import Form from "./Form";
import Header from "./Header";
import MemeImage from "./MemeImage";

export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Form />
        <MemeImage />
      </div>
    </>
  );
}
