import React from 'react'
import { useParams } from 'react-router';
import { allCats } from '../model/cats';
import style from "./Cats.module.scss"
function CatBreed() {
    const { catBreed } = useParams();
   const myCat= allCats.find((cat)=>cat.breed===catBreed);
   if(!myCat) return (<h1>cat not found</h1>)
  return (
    <div>
     <img className={style.bigCat} src={myCat.img} alt={myCat.breed} />
      <h1>{myCat.breed}</h1>
      <p>{myCat.desc}</p>
    </div>
  )
}

export default CatBreed
