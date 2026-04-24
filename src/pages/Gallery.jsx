
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import '../styles/Gallery.css'

const cards = [
  'Arce Japonés',
  'Pino Negro',
  'Ficus Retusa',
  'Olmo Chino',
  'Enebro',
  'Azalea'
]

export const Gallery = () => {
  return (
    <div className="gallery-container">
      <NavBar />
      <main className="gallery-main">
        <div className="gallery-content">
          <header className="gallery-header">
            <h1 className="gallery-title">Nuestra Colección</h1>
            <p className="gallery-description">
              Un vistazo a algunos de los ejemplares en los que hemos trabajado. Cada 
              <br />árbol cuenta una historia de tiempo y paciencia.
            </p>
          </header>
          <div className="gallery-grid">
            {cards.map((title) => (
              <Card key={title} title={title} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Gallery;