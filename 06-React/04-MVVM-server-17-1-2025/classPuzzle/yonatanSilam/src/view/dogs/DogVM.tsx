import { useEffect, useState } from "react";
import { DogsModel } from "./DogModel";

export function useDogsVM() {
  const [dogs, setDogs] = useState<DogsModel | null>(null);
  useEffect(() => {
    fetch("https://dog.ceo/api/breed/hound/images/random/6")
      .then((response) => response.json())
      .then((data) => setDogs(data))
      .catch((error) => console.error(error));
  }, []);

  return { dogs };
}
