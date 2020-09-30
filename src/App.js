import React, { useState } from "react";
import "./styles.css";
import Button from "./component/Button";

export default function App() {
  const [firtNumber, setFirtNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operater, setOperater] = useState("");
  const [result, setResult] = useState(0);

  const handleNumberClick = (numberClick) => {
    setFirtNumber(firtNumber + numberClick);
  };

  const handleOperatorClick = (operatorClick) => {
    setOperater(operatorClick);
    setSecondNumber(firtNumber);
    setFirtNumber("");
  };

  const handleEqualClick = () => {
    if (operater === "+") {
      setResult(parseInt(firtNumber) + parseInt(secondNumber));
    } else if (operater === "-") {
      setResult(parseInt(firtNumber) - parseInt(secondNumber));
    } else if (operater === "*") {
      setResult(parseInt(firtNumber) * parseInt(secondNumber));
    } else if (operater === "/") {
      setResult(parseInt(firtNumber) / parseInt(secondNumber));
    }
  };

  const handleResetClick = () => {
    setFirtNumber("");
    setOperater("");
    setSecondNumber("");
    setResult(0);
  };

  return (
    <div className="App">
      <div>
        <Button onClick={() => handleNumberClick("1")}>1</Button>
        <Button onClick={() => handleNumberClick("2")}>2</Button>
        <Button onClick={() => handleNumberClick("3")}>3</Button>
      </div>
      <div>
        <Button onClick={() => handleNumberClick("4")}>4</Button>
        <Button onClick={() => handleNumberClick("5")}>5</Button>
        <Button onClick={() => handleNumberClick("6")}>6</Button>
      </div>
      <div>
        <Button onClick={() => handleNumberClick("7")}>7</Button>
        <Button onClick={() => handleNumberClick("8")}>8</Button>
        <Button onClick={() => handleNumberClick("9")}>9</Button>
      </div>
      <div>
        <Button onClick={() => handleNumberClick("0")}>0</Button>
      </div>
      <br />
      <div>
        <Button onClick={() => handleOperatorClick("+")}>+</Button>
        <Button onClick={() => handleOperatorClick("-")}>-</Button>
        <Button onClick={() => handleOperatorClick("*")}>*</Button>
        <Button onClick={() => handleOperatorClick("/")}>/</Button>
        <br />
        <br />
        <Button onClick={handleEqualClick}>=</Button>
        <Button onClick={handleResetClick}>reset</Button>
      </div>
      <h1>{result}</h1>
    </div>
  );
}
