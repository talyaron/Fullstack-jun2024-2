import { useEffect, useState } from "react";
import { getDogImageFromDB } from "./db/dogs/getDogs";

export function AppMV() {
    const [images, setImages] = useState<{ src: string; alt: string; text: string }[]>([]);
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        getOneMoreDogFromDB();
    }, []);

    function getOneMoreDogFromDB() {
        getDogImageFromDB().then((image) => {
            if (image) {
                setImages([...images, {
                    src: image,
                    alt: 'Dog',
                    text: 'Dog'
                }]);
            }
        });
    }


    return { images, getOneMoreDogFromDB , counter, setCounter};
}