import React, { useState, useEffect } from "react";
import Years from "../Years/Years";
import InitialSum from "../InitialSum/InitialSum";
import InterestRate from "../InterestRate/InterestRate";

const Calculator = () => {
  const [years, setYears] = useState<number>(0);
  const [initialSum, setIntialSum] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [isRich, setIsRich] = useState<boolean>(false);

  // חישוב ריבית דריבית
  const result = initialSum * Math.pow(1 + interestRate / 100, years);

  // מחשבים אם המשתמש עשיר רק כשהערכים משתנים
  useEffect(() => {
    const revah = result - initialSum;
    setIsRich(revah > 1000);
  }, [initialSum, interestRate, years, result]); // מפעיל מחדש רק כאשר אחד הערכים משתנה

  return (
    <div>
      <h1>מחשבון ריבית דרבית</h1>
      <p>כל הזכויות שמורות ליוסף איברהים</p>
      
      <h2 style={{ backgroundColor: "yellow" }}>
        סה"כ לאחר {years} שנים: ₪{result.toLocaleString()}
      </h2>
      

      <h2 
  style={{
    backgroundColor: isRich ? "lightgreen" : "red",
    display: initialSum > 0 && interestRate > 0 && years > 0 ? "block" : "none"
  }}
>
  {isRich ? "אתה עשייייר!" : "השגת הכנסה מסויימת"}
</h2>
      <p>----------------------------------------</p>
      <InitialSum handleSetState={setIntialSum} />
      <p>----------------------------------------</p>
      <InterestRate handleSetState={setInterestRate} />
      <p>----------------------------------------</p>
      <Years handleSetState={setYears} />
      
    </div>
  );
};

export default Calculator;
