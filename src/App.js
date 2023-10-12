import React from "react";
import "./App.css";
import Topbar from "./components/Topbar/Index.js";
import ProductCard from "./components/Products/ProductCard";
function App() {
  return (
    <div>
      <Topbar />
      <ProductCard />
    </div>
  );
}

export default App;
