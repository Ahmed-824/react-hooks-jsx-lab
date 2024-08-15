import React from "react";
import { name, city } from "../data/data.js"; // Ensure this path is correct and matches your exports

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: 'firebrick' }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
