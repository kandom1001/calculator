export const SignPad = ({
  clearOnClick,
  signOnClick,
  calculation,
  input,
  previousDisplay,
  display,
  previousSign
}) => {
  return (
    <div className="calculator-signPad">
      <button
        className="calculator-sign calculator-sign-clear"
        onClick={() => clearOnClick()}
      >
        Clear
      </button>
      <button
        className="calculator-sign"
        onClick={() =>
          signOnClick("multiply", input, previousDisplay, display, previousSign)
        }
      >
        *
      </button>
      <button
        className="calculator-sign"
        onClick={() =>
          signOnClick("divide", input, previousDisplay, display, previousSign)
        }
      >
        /
      </button>
      <button
        className="calculator-sign"
        onClick={() =>
          signOnClick("plus", input, previousDisplay, display, previousSign)
        }
      >
        +
      </button>
      <button
        className="calculator-sign"
        onClick={() =>
          signOnClick("minus", input, previousDisplay, display, previousSign)
        }
      >
        -
      </button>
      <button
        className="calculator-sign calculator-sign-euqal"
        onClick={() => calculation(previousDisplay, input, previousSign)}
      >
        =
      </button>
    </div>
  );
};
