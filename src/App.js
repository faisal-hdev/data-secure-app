import React from "react";
import Hero from "./components/hero/Hero";
import Data from "./components/data/Data";
import Cloud from "./components/cloud/Cloud";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Data />
      <Cloud />
      <Footer />
    </div>
  );
}

export default App;
