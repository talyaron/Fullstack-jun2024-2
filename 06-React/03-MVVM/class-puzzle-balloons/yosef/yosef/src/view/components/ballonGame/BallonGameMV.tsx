import { useState } from "react";
import { Ballon } from "../../../model/ballon/ballon";

export function ballonGameMV(){
    const [ballons, setBallons] = useState<Ballon[]>([]);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(0)

    return  {
        ballons,setBallons,score,setScore,timer,setTimer
    }

}

