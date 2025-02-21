import { FC, useEffect, useState } from "react";

interface CalcProps {
  sum: number;
  rate: number;
  year: number;

  setPageStyle: (pageStyle: {
    color: "white" | "green" | "red";
    text: "" | "you are rich!" | "you are poor";
  }) => void;
}
const Calculator: FC<CalcProps> = ({ sum, rate, year, setPageStyle }) => {
  const [calc, setCalc] = useState<null | number>(null);

  useEffect(() => {
    if (!sum || !rate || !year) return;

    const waitForCalc = setTimeout(() => {

      const interest = sum * (1 + (rate / 100) * year);
        const earnings= interest-sum
      setCalc(interest);

      setPageStyle({
        color: earnings >= 1000 ? "green" : "red",
        text: earnings >= 1000 ? "you are rich!" : "you are poor",
      });

    }, 450);

    return () => clearTimeout(waitForCalc);

  }, [sum, rate, year, setPageStyle]);

  return<> <h1>Interest:{calc}</h1> <h1>earned:{calc?calc-sum:""}</h1></>;
};

export default Calculator;
