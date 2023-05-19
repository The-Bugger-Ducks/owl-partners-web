import React from "react";
import MyRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

import "./styles/global.css"

function App() {
  return (
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
