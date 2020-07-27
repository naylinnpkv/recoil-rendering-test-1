import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NumComponent />
    </div>
  );
}

function NumComponent() {
  const [firstNum, setFirst] = useState({ firstNum: 2 });
  const [secondNum, setSecond] = useState({
    secondNum: 4,
  });
  const [state, setState] = useState({
    firstNumChange: { firstNumChange },
    secondNumChange: { secondNumChange },
  });

  function firstNumChange(e) {
    setFirst(e.target.value);
  }
  function secondNumChange(e) {
    setSecond(e.target.value);
  }
  return (
    <section>
      <SignComponent
        firstNumChange={firstNumChange}
        secondNumChange={secondNumChange}
        firstNum={firstNum.firstNum}
        secondNum={secondNum.secondNum}
      />
      <input value={firstNum} onChange={firstNumChange} />
      <input value={secondNum} onChange={secondNumChange} />
    </section>
  );
}

function SignComponent(props) {
  const [count, setCount] = useState("+");

  function valueChange() {
    setCount(props.firstNum + props.secondNum);
  }
  console.log(props.firstNum, "firstNum,secondNum");
  return (
    <div>
      <button class="btn" onClick={valueChange}>
        {count}
      </button>
    </div>
  );
}

export default App;
