/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "../atoms";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import { authService } from "../fbase";
import Navigation from "./Navigation";
import Profile from "../routes/Profile";

const Router = ({ isLoggedIn }) => {
  console.log(isLoggedIn);
  return (
    <HashRouter>
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile replace to="/" />} />
            <Route path="/API" element={<div>API</div>} />
          </>
        ) : (
          <>
            <Route path="/" element={<Auth />} />
          </>
        )}
      </Routes>
    </HashRouter>
  );
};

export default Router;
