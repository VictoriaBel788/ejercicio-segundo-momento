import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h2 className="subtitle">El arte de la<br /> paciencia</h2>
      <p className="description">
        Descubre la serenidad a través del cuidado y diseño de árboles Bonsái. 
        <br />Un espacio para reconectar con la naturaleza.
      </p>
      <button className="btn">Reserva un taller</button>
    </section>
  );
};

export default Hero;
