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

  useEffect(() => {
    const interval = setInterval(() => {
      const newBalloon: BalloonModel = {
        id: crypto.randomUUID(),
        x: Math.random() * 90 + 5,
        y: 0,
        img: balloonImages[Math.floor(Math.random() * balloonImages.length)],
        isPopped: false,
      };
      setBalloons((prev) => [...prev, newBalloon]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const flyInterval = setInterval(() => {
      setBalloons(
        (prev) =>
          prev
            .map((balloon) =>
              balloon.y < 100 ? { ...balloon, y: balloon.y + 1 } : null
            )
            .filter((balloon) => balloon !== null) as BalloonModel[]
      );
    }, 50);
    return () => clearInterval(flyInterval);
  }, []);

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
    }, 500);
  };

  return {
    balloons,
    popBalloon,
  };
}