import React from 'react'
import style from "./Dogs.module.scss"
import { Link } from 'react-router'


function Dogs() {
  return (
    <div>
      <h1>Choose a dog breed :</h1>
      <div  className={style.breeds}>
      <Link to="poodle"><h3>Poodle</h3></Link>
  <Link to="beagle"><h3>Beagle</h3></Link>
  <Link to="boxer"><h3>Boxer</h3></Link>
  <Link to="dachshund"><h3>Dachshund</h3></Link>
  <Link to="whippet"><h3>Whippet</h3></Link>
  <Link to="samoyed"><h3>Samoyed</h3></Link>
  <Link to="malamute"><h3>Malamute</h3></Link>
  <Link to="chow"><h3>Chow</h3></Link>
  <Link to="greyhound"><h3>Greyhound</h3></Link>
  <Link to="papillon"><h3>Papillon</h3></Link>
      </div>
    </div>
  )
}

export default Dogs
