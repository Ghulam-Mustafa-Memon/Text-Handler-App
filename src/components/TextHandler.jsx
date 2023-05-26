import React, { useState } from "react";
import "./TextHandler.css";
import copy from "copy-to-clipboard";

function TextHandler() {
  const [text, setText] = useState("");
  console.log(text);

  const handler = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  const copyData = () => {
    copy(text);
    alert("Coppied Successfully");
  };

  const undo = () => {
    setText(text.slice(0, text.length - 1));
  };

  const Clear = () => {
    setText("");
  };

  return (
    <div className="HEADER p-5">
      <div className="form">
        <h2>
          Welcome to <b>Text Handler</b>
        </h2>
        <textarea
          onChange={handler}
          className="form-control"
          cols="30"
          rows="10"
          placeholder="Enter Text To Handle:"
          value={text}
        ></textarea>
        <div className="btns">
          <button className=" btn btn-primary my-3 mx-2" onClick={toUpperCase}>
            UpperCase
          </button>
          <button className=" btn btn-primary my-3 mx-2" onClick={toLowerCase}>
            LowerCase
          </button>
          <button className=" btn btn-primary my-3 mx-2" onClick={copyData}>
            CopyText
          </button>
          <button className=" btn btn-primary my-3 mx-2" onClick={undo}>
            Undo
          </button>
          <button className=" btn btn-primary my-3 mx-2" onClick={Clear}>
            Clear
          </button>
        </div>
      </div>
      <hr />
      <div className="form-content">
        <h2>Preview Text:</h2>
        <p>{text === "" ? "Nothing to Show!!" : text}</p>
        <h2>Characters:</h2>
        <p>
          <span>{text.length}</span> Characters.
        </p>
      </div>
    </div>
  );
}

export default TextHandler;
