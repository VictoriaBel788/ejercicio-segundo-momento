import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="title">BONSAI ZENITH</h1>
      <h2 className="subtitle">El arte de la paciencia</h2>
      <p className="description">
        Descubre la serenidad a través del cuidado y diseño de árboles Bonsái. 
        Un espacio para reconectar con la naturaleza.
      </p>
      <button className="btn">Reserva un taller</button>
    </section>
  );
};

export default Hero;
