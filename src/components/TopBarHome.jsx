import { useEffect, useState } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import "../assets/css/topbar.css";

const TopBarHome = () => {
  const [mostrarBoton, setMostrarBoton] = useState(false);
  const [mostrarMensaje, setMostrarMensaje] = useState(true);
  const [progreso, setProgreso] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
    ubicacion: "",
  });

  /* MENSAJE 5 SEGUNDOS */
  useEffect(() => {
    const timer = setTimeout(() => setMostrarMensaje(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  /* PROGRESO + BOTÓN SCROLL */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const alturaTotal =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const porcentaje = (scrollTop / alturaTotal) * 100;

      setProgreso(porcentaje);
      setMostrarBoton(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* VOLVER ARRIBA */
  const volverArriba = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* WHATSAPP (FIJO) */
  const enviarWhatsApp = (e) => {
    e.preventDefault();

    const numero = "529991234567"; // 👈 fijo (cámbialo si quieres)

    const texto = `
Hola, quiero información.

Nombre: ${form.nombre}
Teléfono: ${form.telefono}
Correo: ${form.correo}
Ubicación: ${form.ubicacion}

Mensaje:
${form.mensaje}
`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

    setModalOpen(false);

    setForm({
      nombre: "",
      correo: "",
      telefono: "",
      mensaje: "",
      ubicacion: "",
    });
  };

  return (
    <>
      {/* BOTÓN ARRIBA */}
      {mostrarBoton && (
        <button className="btn-float-inicio" onClick={volverArriba}>
          <FaArrowUp />
        </button>
      )}

      {/* BARRA PROGRESO */}
      <div className="barra-progreso">
        <div
          className="barra-progreso-fill"
          style={{ width: `${progreso}%` }}
        />
      </div>

      {/* WHATSAPP FLOAT */}
      <div className="whatsapp-container">
        {mostrarMensaje && (
          <div className="whatsapp-mensaje">¿Te ayudamos?</div>
        )}

        <button
          className="whatsapp-float"
          onClick={() => setModalOpen(true)}
        >
          <FaWhatsapp />
        </button>
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div
          className="wa-modal-overlay"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="wa-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="wa-modal-header">
              <h2>Contacto WhatsApp</h2>
              <p>Déjanos tus datos</p>
            </div>

            <form className="wa-modal-form" onSubmit={enviarWhatsApp}>
              <input
                className="wa-input"
                placeholder="Nombre"
                value={form.nombre}
                onChange={(e) =>
                  setForm({ ...form, nombre: e.target.value })
                }
                required
              />

              <input
                className="wa-input"
                placeholder="Teléfono"
                value={form.telefono}
                onChange={(e) =>
                  setForm({ ...form, telefono: e.target.value })
                }
                required
              />

              <input
                className="wa-input"
                type="email"
                placeholder="Correo"
                value={form.correo}
                onChange={(e) =>
                  setForm({ ...form, correo: e.target.value })
                }
                required
              />

              <input
                className="wa-input"
                placeholder="Ubicación"
                value={form.ubicacion}
                onChange={(e) =>
                  setForm({ ...form, ubicacion: e.target.value })
                }
                required
              />

              <textarea
                className="wa-textarea"
                placeholder="Mensaje"
                value={form.mensaje}
                onChange={(e) =>
                  setForm({ ...form, mensaje: e.target.value })
                }
                required
              />

              <button className="wa-btn-send" type="submit">
                Enviar WhatsApp
              </button>

              <button
                type="button"
                className="wa-btn-cancel"
                onClick={() => setModalOpen(false)}
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TopBarHome;