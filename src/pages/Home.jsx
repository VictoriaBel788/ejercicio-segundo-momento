import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar arriba */}
      <NavBar />

      {/* Hero centrado */}
      <main>
        <Hero />
      </main>

      {/* Footer abajo */}
      <Footer />
    </div>
  );
};

export default Home;