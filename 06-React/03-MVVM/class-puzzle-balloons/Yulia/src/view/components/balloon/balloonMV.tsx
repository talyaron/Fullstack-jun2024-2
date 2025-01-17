import { useEffect, useState } from "react";
import { BalloonModel } from "../../../model/balloon/balloonModel";
import balloon_1 from "../../../assets/images/balloon_1.png";
import balloon_2 from "../../../assets/images/balloon_2.png";
import balloon_3 from "../../../assets/images/balloon_3.png";
import balloon_4 from "../../../assets/images/balloon_4.png";
import balloon_5 from "../../../assets/images/balloon_5.png";
import balloon_6 from "../../../assets/images/balloon_6.png";
import imgExplode from "../../../assets/images/explode.png";

export function useBalloonMV() {
  const [balloons, setBalloons] = useState<BalloonModel[]>([]);

  const balloonImages = [
    balloon_1,
    balloon_2,
    balloon_3,
    balloon_4,
    balloon_5,
    balloon_6,
  ];

  // add new balloons
  useEffect(() => {
    const interval = setInterval(() => {
      const newBalloon: BalloonModel = {
        id: crypto.randomUUID(),
        x: Math.random() * 90, // random position from 0 to 90 %
        y: 100, // start from bottom
        img: balloonImages[Math.floor(Math.random() * balloonImages.length)],
        isPopped: false,
      };
      setBalloons((prev) => [...prev, newBalloon]);
    }, 2000); // new balloon every 2 second
    return () => clearInterval(interval);
  }, []);

  // fly balloons
  useEffect(() => {
    const flyInterval = setInterval(() => {
      setBalloons(
        (prev) =>
          prev
            .map((balloon) =>
              balloon.y > 0
                ? { ...balloon, y: balloon.y - 3 } 
                : null
            )
            .filter((balloon) => balloon !== null) as BalloonModel[]
      );
    }, 20); 
    return () => clearInterval(flyInterval);
  }, []);

  // pop balloon
  const popBalloon = (id: string) => {
    setBalloons((prev) =>
      prev.map((balloon) =>
        balloon.id === id
          ? { ...balloon, img: imgExplode, isPopped: true }
          : balloon
      )
    );
    setTimeout(() => {
      setBalloons((prev) => prev.filter((balloon) => balloon.id !== id));
    }, 500); // delay 0.5 second before remove balloon
  };

  return {
    balloons,
    popBalloon,
  };
}
