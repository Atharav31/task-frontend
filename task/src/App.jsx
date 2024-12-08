// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
//  import "./App.css";
import Hero1 from "./components/hero1";
import Hero2 from "./components/hero2";
import Navbar from "./components/navbar";
import OurService from "./components/Ourservice";

function App() {
  return (
    <>
      <Navbar />
      <Hero1 />
      <Hero2 />
      <OurService />
    </>
  );
}

export default App;
