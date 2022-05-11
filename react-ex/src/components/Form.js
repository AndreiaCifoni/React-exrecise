import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [num, setNum] = useState("");

  const onInputChange = (event) => {
    setNum(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onSubmit(num);
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
