import "../assets/css/galeriaEatUp.css";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import {
    TransformWrapper,
    TransformComponent,
} from "react-zoom-pan-pinch";

import foto1 from "../assets/img/EatUp/foto1.png";
import foto2 from "../assets/img/EatUp/foto2.png";
import foto3 from "../assets/img/EatUp/foto3.png";
import foto4 from "../assets/img/EatUp/foto4.png";
import foto5 from "../assets/img/EatUp/foto5.png";
import foto6 from "../assets/img/EatUp/foto6.png";
import foto7 from "../assets/img/EatUp/foto7.png";
import foto8 from "../assets/img/EatUp/foto8.png";
import foto9 from "../assets/img/EatUp/foto9.png";
import foto10 from "../assets/img/EatUp/foto10.png";
import foto11 from "../assets/img/EatUp/foto11.png";
import foto12 from "../assets/img/EatUp/foto12.png";

const fotos = [
  { src: foto1, alt: "Pantalla principal" },
  { src: foto2, alt: "Panel de perfil para editar info del ususario" },
  { src: foto3, alt: "Catálogo/Registro de usuarios" },
  { src: foto4, alt: "Catálogo de productos" },
  { src: foto5, alt: "Catálogo de roles" },
  { src: foto6, alt: "Mapeado de mesas" },
  { src: foto7, alt: "Administración de mesas" },
  { src: foto8, alt: "Gestión de pedidos" },
  { src: foto9, alt: "Gestión de reservas" },
  { src: foto10, alt: "Gestión de empresa" },
  { src: foto11, alt: "Gestión de turnos" },
  { src: foto12, alt: "Planes" },
];

const GaleriaEatUp = () => {

    useEffect(() => {
        Swal.fire({
            title: "Cargando Imágenes ...",
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => Swal.showLoading()
        });
    
        const imagenes = fotos.map((foto) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = foto.src;
                img.onload = resolve;
            });
        });
    
        Promise.all(imagenes).then(() => {
            setTimeout(() => {
                Swal.close();
            }, 1000); 
        });
    }, []);

    const [show, setShow] = useState(false);
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  
    const abrirModal = (foto) => {
      setImagenSeleccionada(foto);
      setShow(true);
    };
  
    const cerrarModal = () => {
      setShow(false);
      setImagenSeleccionada(null);
    };

  return (
    <div className="inicio">
        <p className="presentacion-titulo">Panel administrativo EatUp</p>
        <div className="container-galeria-eatup">
        {fotos.map((foto, index) => (
            <div
            className="foto-proyecto"
            key={index}
            onClick={() => abrirModal(foto)}
            style={{
                animationDelay: `${index * 0.12}s`
            }}
            >
            <img src={foto.src} alt={foto.alt} />

            <div className="overlay">
                <p>{foto.alt}</p>
            </div>
            </div>
        ))}
        </div>
        <Modal
            show={show}
            onHide={cerrarModal}
            centered
            size="lg"
            backdrop="static"
            >

            <Modal.Header closeButton>
                <Modal.Title>{imagenSeleccionada?.alt}</Modal.Title>
            </Modal.Header>

            <Modal.Body>

            {imagenSeleccionada && (

            <TransformWrapper
                initialScale={1}
                minScale={1}
                maxScale={5}
            >

            <TransformComponent>

            <img
                src={imagenSeleccionada.src}
                alt={imagenSeleccionada.alt}
                className="img-fluid"
            />

            </TransformComponent>

            </TransformWrapper>

            )}

            </Modal.Body>

            </Modal>
           
    </div>
  );
};

export default GaleriaEatUp;