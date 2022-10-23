import React from "react";
import Socials from "./components/Socials";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Socials />
      <Footer />
    </div>
  );
}
export default App;
