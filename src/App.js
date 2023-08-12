import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false)
  const newBurronColor = buttonColor === "red" ? "blue" : "red";
  return (
    <div>
      <button
      disabled={disabled}
        style={{ backgroundColor: buttonColor }}
        onClick={() => {
          setButtonColor(newBurronColor);
        }}
      >
        Change to {newBurronColor}
      </button>
      <input type="checkbox"  onChange={(e)=>setDisabled(e.target.checked)}></input>
    </div>
  );
}

export default App;
