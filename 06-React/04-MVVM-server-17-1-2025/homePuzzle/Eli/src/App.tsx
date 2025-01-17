import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
interface Btn {
  color: string;
  active: boolean;
}
function App() {
  const [buttons, setButtons] = useState<boolean[]>([true, false]);

  function change(i: number) {
    setButtons(buttons.map((btn, idx) => (i === idx ? !btn : false)));
  }
  return (
    <>
      {buttons.map((btn, i) =>
        btn ? (
          <div key={i} className="btnContainer btn" onClick={() => change(i)}>
            <div className="btnInner selected btn"></div>
          </div>
        ) : (
          <div key={i} className="btnContainer" onClick={() => change(i)}>
            <div className="btnInner unSelected"></div>
          </div>
        )
      )}
    </>
  );
}

export default App;
