import React from "react";
import { allCats } from "../model/cats";
import { Link } from "react-router";
import style from "./Cats.module.scss";

function Cats() {

  return (
    <div className={style.imageContainer}>
      {allCats.map((cat) => (
        <Link to={cat.breed}>
          <img className={style.img} src={cat.img} alt={cat.breed} />{" "}
        </Link>
      ))}
       

    </div>
  );
}

export default Cats;
