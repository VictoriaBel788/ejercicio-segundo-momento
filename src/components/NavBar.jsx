import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">ZENITH BONSAI</Link>
      <ul className="nav-links">
        <li><Link to="/phylosophy">Filosofía</Link></li>
        <li><Link to="/gallery">Galería</Link></li>
        <li><Link to="/reservations">Reservas</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;