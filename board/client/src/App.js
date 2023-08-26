import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import FindPassPage from "./pages/FindPassPage";
import JoinPage from "./pages/JoinPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/findpass" element={<FindPassPage />}></Route>
          <Route path="/join" element={<JoinPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
