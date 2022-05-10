import React, { useState } from "react";
import { render } from "react-dom";

const Form = () => {
  const [num, setNum] = useState("");

  const onInputChange = (event) => {
    setNum(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Please, provide a number:</label>
      <input type="text" value={num} onChange={onInputChange} />
      <button>Submit</button>
    </form>
  );
};

export default Form;
