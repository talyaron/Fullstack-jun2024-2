
import { useEffect, useState } from "react";
import { DogModel } from "./DogModel";

export function useDogVM() {
    const [dog, setDog] = useState<DogModel | null>(null);

    useEffect(() => {
        fetchDog();

    }, []);

    function getNewDog() {
        fetchDog();
    }

    function fetchDog () {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((data) => setDog(data))
            .catch((error) => console.error(error))
    }

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const response = await fetch('https://dog.ceo/api/breeds/image/random');
    //             const data = await response.json();
    //             setDog(data);
    //         } catch (error) {
    //             console.error(error);
    //         }

    //     })();
    // }, []);
    return { dog, getNewDog };
}