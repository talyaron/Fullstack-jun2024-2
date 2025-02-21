import InitialSum from "../initialSum/InitialSum";
import InterestRate from "../interestRate/InterestRate";
import StatusMessage from "../statusMessage/StatusMessage";
import Years from "../years/Years";
import useCalculator from "./CalculatorVM";

export default function Calculator() {
    const { changeInput, sum, ifRich } = useCalculator();

    return (
        <div>
            <StatusMessage ifRich={ifRich} sum={sum} />
            <InitialSum changeInput={(value) => changeInput("P", value)} />
            <InterestRate changeInput={(value) => changeInput("R", value)} />
            <Years changeInput={(value) => changeInput("T", value)} />
        </div>
    );
}
