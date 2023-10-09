import React, { useEffect, useState } from "react";
import "./App.css";
import Topbar from "./components/Topbar/Index.js";
function App() {
  const [data, setData] = useState();

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Topbar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        {data &&
          data?.slice(0, 10).map((el) => (
            <div key={el.id}>
              <h1>{el.title.slice(0, 10)}</h1>
              <picture>
                <source media="(min-width:650px)" srcSet={el.url} />
                <source media="(min-width:465px)" srcSet={el.url} />
                <img src={el.url} alt="Flowers" style={{ width: "auto" }} />
              </picture>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
