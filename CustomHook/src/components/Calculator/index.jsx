import React, { useState } from "react";

const Calculator = () => {
  const [text, setText] = useState("");
  const [memo, setMemo] = useState({
    value: "",
    operator: "",
  });

  const handleClick = (e) => {
    setText(text + e.target.value);
  };
  
  const handleChange = (num) => {
    setText(text + num);
  };

  const handleOperation = (operation) => {
    setMemo({
        value: text,
        operator: operation
    })
    setText('')
  }

  const handleEqual = () => {
    switch (memo.operator) {
        case "+":
            setText(parseFloat(memo.value) + parseFloat(text))
            break;
    
        default:
            break;
    }
  }
   return (
    <div>
      <input type="text" onChange={handleChange} value={text} />
      <div>
        <button onClick={(e) => handleClick(e)} value="1">
          1
        </button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
      </div>
      <div>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
      </div>
      <div>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
      </div>
      <div>
        <button onClick={handleEqual}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
