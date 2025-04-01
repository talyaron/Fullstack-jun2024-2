import { useState } from 'react'
import './App.css'
import AnnualRate from './view/components/AnnualRate'
import Calculator from './view/components/Calculator'
import InitialInvestment from './view/components/InitialInvestment'
import Years from './view/components/Years'

interface Earning {
  initialInvestment: number;
  interestRate: number;
  years: number;
}

function App() {

  const [earnings, setEarnings] = useState<Earning>({
    initialInvestment: 0,
    interestRate: 0,
    years: 0,
  })
  return (
    <>

      <div style={{
        display: 'flex',
        gap: '2rem'
      }}>
        <InitialInvestment
          investment={earnings.initialInvestment}
          setInvestment={(investment) =>
            setEarnings((prev) => ({ ...prev, initialInvestment: investment }))} />
        <AnnualRate
          rate={earnings.interestRate}
          setRate={(rate) =>
            setEarnings((prev) => ({ ...prev, interestRate: rate }))} />
        <Years
          year={earnings.years}
          setYear={(years) =>
            setEarnings((prev) => ({ ...prev, years: years }))} />
      </div>
      <Calculator
        investment={earnings.initialInvestment}
        rate={earnings.interestRate}
        year={earnings.years} />
    </>
  )
}

export default App
