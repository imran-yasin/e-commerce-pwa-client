import React from "react";
import "./App.css";

import AppRouter from "./routes/index";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div>
      <ToastContainer />
      <AppRouter />
    </div>
  );
}

export default App;
