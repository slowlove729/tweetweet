import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../fbase";

const Navigation = () => {
  const navigate = new useNavigate();
  const onClick = (event) => {
    event.preventDefault();
    signOut(authService);
    navigate("/");
  };
  return (
    <>
      <button onClick={onClick}>Log Out</button>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">My Profile</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navigation;
