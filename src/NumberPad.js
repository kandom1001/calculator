export const NumberPad = ({ digitOnClick }) => {
  return (
    <div className="calculator-numberPad">
      <button className="calculator-digit" onClick={() => digitOnClick("7")}>
        7
      </button>
      <button className="calculator-digit" onClick={() => digitOnClick("8")}>
        8
      </button>
      <button className="calculator-digit" onClick={() => digitOnClick("9")}>
        9
      </button>
      <button className="calculator-digit" onClick={() => digitOnClick("4")}>
        4
      </button>
      <button className="calculator-digit" onClick={() => digitOnClick("5")}>
        5
      </button>
      <button className="calculator-digit" onClick={() => digitOnClick("6")}>
        6
      </button>
      <button className="calculator-digit" onClick={() => digitOnClick("1")}>
        1
      </button>
      <button className="calculator-digit" onClick={() => digitOnClick("2")}>
        2
      </button>
      <button className="calculator-digit" onClick={() => digitOnClick("3")}>
        3
      </button>

      <button
        className="calculator-digit calculator-numberPad-0"
        onClick={() => digitOnClick("0")}
      >
        0
      </button>
      <button className="calculator-digit" onClick={() => digitOnClick(".")}>
        .
      </button>
    </div>
  );
};
