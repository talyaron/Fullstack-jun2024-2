import { useEffect, useState } from "react";
import { DogsModel } from "./DogsModel";

export function useDogsVM() {
    const [dogs, setDogs] = useState<DogsModel | null>(null);

    useEffect(() => {
        fetchDogs();

    }, []);

    function getNewDogs() {
        fetchDogs();
    }

    function fetchDogs () {
        fetch('https://dog.ceo/api/breed/hound/images/random/3')
            .then((response) => response.json())
            .then((data) => setDogs(data))
            .catch((error) => console.error(error))
    }


    return { dogs, getNewDogs };
}