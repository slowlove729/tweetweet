/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "../atoms";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import { authService } from "../fbase";

const Router = ({ isLoggedIn }) => {
  return (
    <HashRouter>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
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
