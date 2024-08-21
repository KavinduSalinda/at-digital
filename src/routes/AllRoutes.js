import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";

export default function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
        {/* <Route path="/at-digital"> // for production deploy */}
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
