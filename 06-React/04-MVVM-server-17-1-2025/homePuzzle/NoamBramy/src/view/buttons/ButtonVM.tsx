import { useState } from "react";

export const useToggleButtons = () => {
  const [isButton1, setButton1] = useState(false);
  const [isButton2, setButton2] = useState(false);

  const toggleButton1 = () => {
    setButton1(!isButton1);
    if (!isButton1) {
      setButton2(false);
    }
  };

  const toggleButton2 = () => {
    setButton2(!isButton2);
    if (!isButton2) {
      setButton1(false);
    }
  };

  return {
    isButton1,
    isButton2,
    toggleButton1,
    toggleButton2,
  };
};