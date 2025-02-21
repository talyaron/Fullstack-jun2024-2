import InitialSum from "../initialSum/InitialSum"
import InterestRate from "../interestRate/InterestRate";
import StatusMessage from "../statusMessage/StatusMessage";
import Years from "../years/Years";
import useCalculator from "./CalculatorVM"

export default function Calculator()
{
    const { changeInput, sum, ifRich } = useCalculator();

    return(
        <div style={{ backgroundColor: ifRich ? 'green' : 'gray', width: "60vw", height: "30vh", alignContent:"center"}}>
            <StatusMessage ifRich={ifRich} sum={sum}/>
            <InitialSum changeInput={changeInput}/>
            <InterestRate changeInput={changeInput}/>
            <Years changeInput={changeInput}/>
        </div>
    )
}