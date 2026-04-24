
import React from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import '../styles/Reservations.css'

function Reservations() {
  return (
    <>
      <NavBar />

      <main className="reservations">
        <section className="reservations-header">
          <h1>Reserva un Taller</h1>
          <p>
            Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.
          </p>
        </section>

        <section className="reservations-form">
          <div className="card">
            <form>

              <div className="form-group">
                <label>Nombre completo</label>
                <input type="text" placeholder="Ej. Ana Silva" />
              </div>

              <div className="form-group">
                <label>Correo electrónico</label>
                <input type="email" placeholder="tu@email.com" />
              </div>

              <div className="form-group">
                <label>Nivel de experiencia</label>
                <select>
                  <option>Principiante (Nunca he tenido un Bonsái)</option>
                  <option>Intermedio (Tengo algunos árboles)</option>
                  <option>Avanzado (Busco perfeccionar técnicas)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Mensaje (Opcional)</label>
                <textarea placeholder="¿Qué te gustaría aprender?"></textarea>
              </div>

              <button type="submit">Enviar Solicitud</button>

            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Reservations;