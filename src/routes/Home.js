import { signOut } from "firebase/auth";
import React from "react";
import { authService } from "../fbase";

const Home = () => {
  const onClick = (event) => {
    event.preventDefault();
    signOut(authService);
  };
  return (
    <>
      <span>Home</span>
      <button onClick={onClick}>Log Out</button>
    </>
  );
};

export default Home;
