import "./App.css";
import { useState } from "react";
import { NumberPad } from "./NumberPad";
import { SignPad } from "./SignPad";

function App() {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState(0);
  const [previousDisplay, setPreviousDisplay] = useState("");
  const [sign, setSign] = useState("");
  const [previousSign, setPreviousSign] = useState(0);

  const signOnClick = (sign, input, previousDisplay, display, previousSign) => {
    setSign(sign);

    if (!previousDisplay) {
      setPreviousDisplay(display);
      setInput("");
    }
    if (previousDisplay && input) {
      calculation(previousDisplay, input, previousSign);
      setInput("");
    }
  };

  const digitOnClick = digit => {
    setInput(input + digit);
    setPreviousSign(sign);
    setDisplay(parseFloat(input + digit));
  };

  const clearOnClick = () => {
    setInput("");
    setPreviousDisplay("");
    setDisplay(0);
    setPreviousSign(0);
    setSign(0);
  };

  const calculationTable = {
    plus: (firstNumber, secondNumber) => {
      setDisplay(parseFloat(firstNumber) + parseFloat(secondNumber));
      setPreviousDisplay(parseFloat(firstNumber) + parseFloat(secondNumber));
    },
    minus: (firstNumber, secondNumber) => {
      setDisplay(parseFloat(firstNumber) - parseFloat(secondNumber));
      setPreviousDisplay(parseFloat(firstNumber) - parseFloat(secondNumber));
    },
    multiply: (firstNumber, secondNumber) => {
      setDisplay(parseFloat(firstNumber) * parseFloat(secondNumber));
      setPreviousDisplay(parseFloat(firstNumber) * parseFloat(secondNumber));
    },
    devide: (firstNumber, secondNumber) => {
      setDisplay(parseFloat(firstNumber) / parseFloat(secondNumber));
      setPreviousDisplay(parseFloat(firstNumber) / parseFloat(secondNumber));
    }
  };

  const calculation = (firstNumber, secondNumber, sign) => {
    calculationTable[sign](firstNumber, secondNumber);
    setInput("");
  };

  return (
    <div className="calculator">
      <div className="calculator-display">{display}</div>
      <NumberPad digitOnClick={digitOnClick} />
      <SignPad
        clearOnClick={clearOnClick}
        signOnClick={signOnClick}
        calculation={calculation}
        input={input}
        previousDisplay={previousDisplay}
        display={display}
        previousSign={previousSign}
      />
    </div>
  );
}

export default App;
