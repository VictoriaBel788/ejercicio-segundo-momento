import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../styles/Philosophy.css'

export const Phylosophy = () => {
  return (
    <div className="philosophy-container">
      <NavBar />
      <main className="philosophy-main">
        <section className="philosophy-content">
          <h1 className="philosophy-title">Menos es más</h1>
          <p className="philosophy-text">
            Nuestra filosofía se centra en la observación y el respeto por los ritmos naturales.
            Creemos que cultivar un Bonsái no es solo jardinería, sino una meditación activa.
          </p>
          <p className="philosophy-text">
            En nuestro estudio, te enseñamos a escuchar al árbol, entendiendo que cada corte y cada alambreado debe tener un propósito.
            Buscamos el equilibrio perfecto entre la intervención humana y la expresión salvaje de la naturaleza.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Phylosophy;
