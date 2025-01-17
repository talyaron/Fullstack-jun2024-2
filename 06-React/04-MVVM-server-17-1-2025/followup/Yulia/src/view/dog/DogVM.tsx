import { useEffect, useState } from "react";
import { DogModel } from "./DogModel";

export function useDogVM() {
    const [dog, setDog] = useState<DogModel | null>(null);

    useEffect(() => {
        fetchDog();
    }, []);

    function fetchDog() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => setDog(data))
            .catch((error) => {
                console.error("Error fetching dog", error);
            });
    }

    function getNewDog() {
        fetchDog();
    }

    return {
        dog,
        getNewDog
    };
}