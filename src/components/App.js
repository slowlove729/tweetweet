import React, { useEffect, useState } from "react";
import Router from "./Router";
import { authService } from "../fbase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <Router isLoggedIn={isLoggedIn}></Router> : "Initalizing..."}
      <footer>&copy; {new Date().getFullYear()} tweetweet</footer>
    </>
  );
}

export default App;
