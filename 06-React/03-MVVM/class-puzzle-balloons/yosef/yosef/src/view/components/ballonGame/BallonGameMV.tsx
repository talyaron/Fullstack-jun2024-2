import { useState } from "react";
import { Ballon } from "../../../model/ballon/ballon";

export function ballonGameMV(){
    const [ballons, setBallons] = useState<Ballon[]>([]);

    return  {
        ballons,setBallons
    }

}

