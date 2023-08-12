import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newBurronColor = buttonColor === "red" ? "blue" : "red";
  return (
    <div>
      <button
        disabled={disabled}
        style={{ backgroundColor: disabled ? "grey" : buttonColor }}
        onClick={() => {
          setButtonColor(newBurronColor);
        }}
      >
        Change to {newBurronColor}
      </button>
      <label htmlFor="disabled-button-checkbox">Disable Button</label>
      <input
        id="disabled-button-checkbox"
        type="checkbox"
        onChange={(e) => setDisabled(e.target.checked)}
      ></input>
    </div>
  );
}

export default App;
