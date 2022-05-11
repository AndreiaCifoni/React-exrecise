import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";

const App = () => {
  const [primeNum, setPrimeNum] = useState(null);

  const getPrimeNum = async (num) => {
    try {
      const result = await axios.get("http://localhost:8000/result", {
        params: {
          num,
        },
      });
      return JSON.parse(result);
    } catch (error) {
      return null;
    }
  };

  const onSubmit = async (num) => {
    const primeNum = await getPrimeNum(num);
    setPrimeNum(primeNum);
  };

  return (
    <div>
      <Form onSubmit={onSubmit} />
      {!!primeNum ? (
        <p>{`This is your result: ${primeNum}`}</p>
      ) : (
        <p>Error, try again!</p>
      )}
    </div>
  );
};

export default App;
