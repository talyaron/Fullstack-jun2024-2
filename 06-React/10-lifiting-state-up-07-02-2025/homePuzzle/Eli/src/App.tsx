import { useState } from "react";

import "./App.css";
import InitialSum from "./View/componants/InitialSum";
import InterestRate from "./View/componants/InterestRate";
import Years from "./View/componants/Years";
import Calculator from "./View/componants/Calculator";

interface Earnings {
  initialSum: number;
  interestRate: number;
  year: number;
}
interface PageStyle {
  color: "white"|"green"|"red";
  text: ""|"you are rich!"|"you are poor";
}
function App() {
  const [earnings, setEarnings] = useState<Earnings>({
    initialSum: 0,
    interestRate: 0,
    year: 0,
  });

  const [pageStyle, setPageStyle] = useState<PageStyle>({
    color: "white",
    text: "",
  });

  return (
    <div style={{backgroundColor:pageStyle.color , width: "100vw"
      ,height: "100vh",}}>
      <h1>Interest Calculator</h1>
      <InitialSum
        sum={earnings.initialSum}
        setSum={(value) =>
          setEarnings((prev) => ({ ...prev, initialSum: value }))
        }
      />
      <InterestRate
        rate={earnings.interestRate}
        setRate={(value) =>
          setEarnings((prev) => ({ ...prev, interestRate: value }))
        }
      />
      <Years
        year={earnings.year}
        setyear={(value) => setEarnings((prev) => ({ ...prev, year: value }))}
      />
      <Calculator
        sum={earnings.initialSum}
        rate={earnings.interestRate}
        year={earnings.year}
        setPageStyle={setPageStyle}
      />
      <h1>{pageStyle.text}</h1>
    </div>
  );
}

export default App;
