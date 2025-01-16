import { useState } from "react";
import { BallonModel } from "../../../model/BallonModel";

export function useBallonMV() {
    const [ballons, setBallon] = useState<BallonModel[]>([])

    return {
        ballons,
        setBallon
    }
}