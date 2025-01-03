import { Link, Outlet } from "react-router";
import React from "react";

const Contact = () => {
  return (
    <div>
      <ul>
        <li>Instagram</li>
        <li>Telegram</li>
        <li>WhatsApp</li>
        <Link to="home">Home </Link>
      </ul>
      <Outlet />
    </div>
  );
};

export default Contact;
