import { useEffect, useState } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import "../assets/css/topbar.css";

const TopBarHome = () => {
  const [mostrarBoton, setMostrarBoton] = useState(false);
  const [mostrarMensaje, setMostrarMensaje] = useState(true);
  const [progreso, setProgreso] = useState(0);

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
  
    const numero = "529991972791";
    const texto =   "Hola Pedro, vi tu portafolio y me gustaría conversar sobre una oportunidad laboral.";;
  
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
  
    window.open(url, "_blank");
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
          <div className="whatsapp-mensaje">Contáctame por WhatsApp</div>
        )}

        <button
          className="whatsapp-float"
          onClick={enviarWhatsApp}
        >
          <FaWhatsapp />
        </button>
      </div>
    </>
  );
};

export default TopBarHome;