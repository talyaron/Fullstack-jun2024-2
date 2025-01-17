import { useEffect, useState } from "react";
import { DogModel } from "./dogModel"
export function useDogVM() {

  const [dog, setDog] = useState<DogModel>();

  useEffect(() => {
    fetchDog();
  }, [])
  
  function fetchDog(){
    fetch("https://dog.ceo/api/breed/hound/images/random/3")
    .then((response) => response.json())
    .then((data) => setDog(data))
    .catch((error) => console.error(error))
  }
  return {
    dog,
    fetchDog
  }
}
