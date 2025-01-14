import { ballonGameMV } from "./BallonGameMV";
import { Ballon } from "../../../model/ballon/ballon";
import { useEffect } from "react";

var x:any = 0;


const StartPlay = () => {

    const { ballons , setBallons, createNewBallon , getBallonImageUrl} = ballonGameMV();

useEffect(() => {
    createNewBallon();
    // x=getBallonImageUrl();

    }, []);

            // createNewBallon();  
            console.log(ballons)
            console.log(x)
            

    return (<div>
        <h1>hey{ballons.length} </h1>
        </div>
    );
}

export default StartPlay