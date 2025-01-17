import React from "react";
import { useDogVM } from "./DogVM";

const Dog = () => {
    const {dog, fetchDog} = useDogVM();

    if (!dog) return <p>plz waite...</p>;
    return (
        <div>
            <button onClick={fetchDog}>Fetch Dog</button>
            {dog?.message.map(msg => {
                return <img key={msg} src={msg} alt="dog"/>
            })}
         </div>
    );
}

export default Dog;