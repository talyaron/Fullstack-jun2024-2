import { useState } from "react";

export function useSwitchContainerVM()
{
    const [ states, changeStates ] = useState({firstState: false, secondState: false})

    const toggleState = (switchId: string) => {
        if (switchId === "first")
        {
            changeStates({firstState: !(states.firstState), secondState: false})
        }
        else if (switchId === "second")
        {
            changeStates({secondState: !(states.secondState), firstState: false})
        }
    }

    return { states, toggleState }
}