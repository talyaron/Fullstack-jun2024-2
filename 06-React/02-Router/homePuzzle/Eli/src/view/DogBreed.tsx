import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import style from "./Dogs.module.scss"

function DogBreed() {
  const { dogBreed } = useParams();
  const [img, setImage] = useState("");

  useEffect(() => {
    if (!dogBreed) return;
  
    const fetchDogImage = async () => {
      try {
        const data = await dogFetcher(img,dogBreed);
        console.log("Returned data:", data);
       (!img)
        setImage(data.message);
        console.log(img)
      } catch (error) {
        console.error("Error fetching dog image:", error);
      }
    };
  
   fetchDogImage();  
  }, [dogBreed]); 
  return (
    <div>
      <h1>{dogBreed}</h1>
      <img className={style.dogImg}  src={img} alt={dogBreed} />
    </div>
  );
}
async function dogFetcher(img:string,dogBreed: string) {
  const response = await fetch(
    `https://dog.ceo/api/breed/${dogBreed}/images/random`
  );
  const data = await response.json();
  

  return data;
}

export default DogBreed;
