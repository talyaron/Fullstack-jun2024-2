import { useEffect, useState } from "react";
import { Balloon } from "../../../model/balloons/balloonModel";

export function useBalloonGameMV() {
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  useEffect(() => {//the effect runs only once, after the component is mounted (first render).
    const generateBalloons = () => {
      const newBalloons = Array.from({ length: 100 }).map((_, i) => ({
        id: i,
        positionY: Number(Math.random() * window.innerWidth),
        isItPop:false
      }));
      setBalloons(newBalloons)
    };
    generateBalloons();
  },[]);
  return {
    balloons,
    setBalloons,
  };
}
