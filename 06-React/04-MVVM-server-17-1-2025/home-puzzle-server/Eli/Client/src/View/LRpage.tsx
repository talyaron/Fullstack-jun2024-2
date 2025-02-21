import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import style from "./LRpage.module.scss";

const registerPage = "/login/register";
const loginPage="/login";
function LRpage() {
  const [active, setActive] = useState(false);
  const [linkDir, setLinkDir] = useState(registerPage);


  const selectedCssClass = `${style.btn} ${style.selected} ${ style.btnInner}`;
  const unselectedCssClass = `${style.btn} ${style.unSelected} ${ style.btnInner}`;
  function change() {
    setActive(!active)
    !active? setLinkDir(loginPage):setLinkDir(registerPage)
  }
  
  return (
    <div >
        <div className={style.row}>
        <h1>login</h1>
        <Link to={linkDir}>
      <div className={`${style.btn} ${style.btnContainer}`} onClick={ change} >
        <div className={active ? selectedCssClass : unselectedCssClass}></div>
      </div>
      </Link>
      <h1>register</h1>
      </div>

      <Outlet></Outlet>
    </div>
  );
}

export default LRpage;
