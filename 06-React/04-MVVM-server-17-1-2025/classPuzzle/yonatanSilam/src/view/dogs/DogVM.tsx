import { useEffect, useState } from "react";
import { ThreeDogs } from "./DogModel";

export function useDogsVM() {
  const [dogs, setDogs] = useState<ThreeDogs | null>(null);
  useEffect(() => {
    fetch("https://dog.ceo/api/breed/hound/images/random/3")
      .then((response) => response.json())
      .then((data) => setDogs(data))
      .catch((error) => console.error(error));
  }, []);

  return { dogs };
}
