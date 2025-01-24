import { ToggleSwitch } from "./switch";
import { useSwitchContainerVM } from "./SwitchContainerVM";

function Puzzle()
{
    const { states, toggleState } = useSwitchContainerVM();

    return (
        <>
          <ToggleSwitch state={states.firstState} label="straight" onPress={() => toggleState("first")}/>
          <ToggleSwitch state={states.secondState} label="tel aviv" onPress={() => toggleState("second")}/>
        </>
      )
}

export default Puzzle;