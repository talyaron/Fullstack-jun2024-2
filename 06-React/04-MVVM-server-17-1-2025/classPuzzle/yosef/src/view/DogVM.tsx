import { useEffect, useState } from "react";
import { DogModel } from "./DogModel";

export function useDogVM(){
    const [ dog, setDog ] = useState<DogModel | null>(null);


    useEffect(() => {
        fetchDog();
      }, [])

    function fetchDog(){
            fetch('https://dog.ceo/api/breeds/image/random/2')
               .then(response => response.json())
               .then(data => setDog(data))

    }

    console.log(dog)

    return {
        dog,
        fetchDog
    }
}