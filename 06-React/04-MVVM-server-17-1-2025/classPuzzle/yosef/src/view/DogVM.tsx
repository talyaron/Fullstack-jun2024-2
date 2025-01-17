import { useEffect, useState } from "react";
import { DogModel } from "./DogModel";

export function useDogVM(){
    const [ dog , setDog ] = useState<DogModel | null>(null);

    function fetchDog(){
            fetch('https://dog.ceo/api/breeds/image/random/3')
               .then(response => response.json())
               .then(data => setDog(data.message[0]));

        }
        fetchDog();
        console.log(fetchDog)

    }