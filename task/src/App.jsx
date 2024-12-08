// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
//  import "./App.css";
import DriveProperty from "./components/DriveProperty";
import Footer from "./components/Footer";
import Hero1 from "./components/hero1";
import Hero2 from "./components/hero2";
import Insites from "./components/Insites";
import Navbar from "./components/navbar";
import OurService from "./components/Ourservice";
import Streamline from "./components/Streamline";
import Action from "./components/Action";

function App() {
  return (
    <>
      <Navbar />
      <Hero1 />
      <Hero2 />
      <OurService />
      <Insites />
      <Streamline />
      <DriveProperty />
      <Action />
      <Footer />
    </>
  );
}

export default App;
