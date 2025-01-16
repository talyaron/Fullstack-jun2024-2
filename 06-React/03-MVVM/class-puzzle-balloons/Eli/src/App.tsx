import { useEffect, useState } from "react";

import "./App.css";
interface Balloon {
  id: number;
  position: number;
}
function App() {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  function createBalloon() {
    const newBalloon: Balloon = {
      id: Date.now(),
      position: Math.random() * 100,
    };
    setBalloons((prevBalloons) => [...prevBalloons, newBalloon]);
  }
  function deleteBalloon(index:number){
    setBalloons((prevBalloons) => prevBalloons.filter((_,i)=>i!==index));

  }
  useEffect(() => {
    const balloonTimer = setInterval(createBalloon, 2000);
    return () => {
      clearInterval(balloonTimer);
    };
  }, []);
  return (
    <>
      <div id="canvas">
        {balloons.map((balloon, index) => {
          return (
            <div onClick={()=>deleteBalloon(index)}
              key={index}
              className="balloon"
              style={{ left: `${balloon.position}%` } }
            >
              <h1>🎈</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
