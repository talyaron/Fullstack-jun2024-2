import React, { useEffect, useState } from "react";
import { DogsModel } from "./DogModel";

export function Dogs() {
  const [dogs, setDogs] = useState<DogsModel | null>(null);

  useEffect(() => {
    dogsFetcher();
  },[]);

  function SetNewDogs()
  {    dogsFetcher();

  }
  function dogsFetcher() {
    fetch("https://dog.ceo/api/breed/hound/images/random/3")
      .then((response) => response.json())
      .then((data) => setDogs(data))
      .catch((error) => console.error(error));
  }

  return { dogs ,SetNewDogs};
}

