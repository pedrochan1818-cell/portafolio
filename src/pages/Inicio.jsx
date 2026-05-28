import {
  FaReact,
  FaLaravel,
  FaDocker,
  FaGithub,
  FaPhp
} from "react-icons/fa";

import {
  SiMysql,
  SiJavascript,
  SiUnity
} from "react-icons/si";
import "../assets/css/inicio.css";

function Inicio() {
  return (
    <>
<div className="inicio">
      {/* INICIO */}
      <section className="container-inicio" id="inicio">
        <div className="foto">
          <h1>Pedro</h1>
          <p>mi foto</p>
        </div>

        <div className="presentacion">

          <p className="presentacion-titulo">Hola, soy Pedro Armando Ake Chan</p>

          <p className="presentacion-subtitulo">
            Ingeniero en Entornos Virtuales y Negocios Digitales
          </p>

          <p className="presentacion-texto">
          Ingeniero en Entornos Virtuales y Negocios Digitales
          egresado de la Universidad Tecnológica Metropolitana (UTM),
          especializado en el desarrollo de aplicaciones web,
          sistemas empresariales y experiencias digitales interactivas.

          Tengo experiencia trabajando con tecnologías como React,
          Laravel, MySQL, Docker y Unity 3D, desarrollando soluciones
          modernas, responsivas y enfocadas en la experiencia del usuario.
        </p>

        </div>

     <div className="stack-icons">
    <div className="icon-card">
      <SiMysql />
    </div>

    <div className="icon-card">
      <SiJavascript />
    </div>

    <div className="icon-card">
      <SiUnity />
    </div>

    <div className="icon-card">
      <FaPhp />
    </div>

    <div className="icon-card">
      <FaDocker />
    </div>

    <div className="icon-card">
      <FaGithub />
    </div>


    <div className="icon-card">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
          />
        </div>

        <div className="icon-card">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
            alt="Laravel"
          />
        </div>

        <div className="icon-card">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="MySQL"
          />
        </div>

        <div className="icon-card">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
        </div>

        <div className="icon-card">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
            alt="Unity"
          />
        </div>
        <div className="icon-card">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
          alt="PHP"
        />
      </div>

      <div className="icon-card">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          alt="Docker"
        />
      </div>

      <div className="icon-card">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="GitHub"
        />
      </div>



      </div>
      </section>


      {/* SOBRE MI */}
      <section id="sobre-mi">

      <p className="titulo">Sobre mí</p>

        <p className="texto-sobre-mi">
        Soy desarrollador Full Stack desarrollo aplicaciones
         web modernas, sistemas web empresariales
        y experiencias digitales interactivas.

        Tengo experiencia desarrollando frontend dinámico,
        APIs, backend escalable y videojuegos utilizando
        tecnologías como React, Laravel, MySQL, Docker
        y Unity 3D.
      </p>

      <p className="texto-sobre-mi">
        He trabajado en proyectos web institucionales,
        plataformas de gestión y sistemas empresariales,
        enfocándome en crear soluciones responsivas,
        funcionales y centradas en la experiencia del usuario.

        Además, cuento con experiencia en trabajo colaborativo,
        control de versiones con GitHub y despliegue
        de aplicaciones en entornos productivos.
      </p>
</section>


<section id="tecnologias">
  <p className="titulo">Tecnologías</p>
      <div className="tecnologias-grid">
      <div className="tech-card">
        <h4>Frontend</h4>

        <div className="tech-badges">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </div>


      <div className="tech-card">
        <h4>Backend</h4>

        <div className="tech-badges">
          <span>Laravel</span>
          <span>PHP</span>
        </div>
      </div>


      <div className="tech-card">
        <h4>Videojuegos</h4>

        <div className="tech-badges">
          <span>Unity 3D</span>
          <span>C#</span>
        </div>
      </div>


      <div className="tech-card">
        <h4>Base de Datos</h4>

        <div className="tech-badges">
          <span>MySQL</span>
        </div>
      </div>


      <div className="tech-card">
        <h4>Herramientas</h4>

        <div className="tech-badges">
          <span>GitHub</span>
          <span>Docker</span>
          <span>VS Code</span>
        </div>
      </div>


      <div className="tech-card">
        <h4>Diseño</h4>

        <div className="tech-badges">
          <span>UX/UI</span>
          <span>Responsive Design</span>
        </div>
      </div>

      </div>

      </section>

    {/* PROYECTOS */}
      <section className="proyectos" id="proyectos">

      <p className="titulo">Proyectos</p>

      <div className="contenedor-proyectos">
      {/* YUCATAN SOLAR */}
      <div className="card-proyecto">
          <div className="contenido-proyecto">

            <div className="top-proyecto">

              <h3>Yucatán Solar - Sistema Web</h3>

            </div>

            <span className="anio">
                Ene 2026 - Abril 2026
             </span>

            <p className="descripcion-proyecto">
              Sistema web empresarial para presentación
              y administración de servicios solares.
            </p>

            <div className="tecnologias-proyecto">

              <span>React</span>
              <span>Laravel</span>
              <span>MySQL</span>
              <span>Google Maps API</span>

            </div>

            <ul className="features">

              <li>Frontend moderno</li>
              <li>Backend escalable</li>
              <li>Responsive Design</li>
              <li>Integración con mapas</li>
              <li>Optimización UX/UI</li>

            </ul>

            <div className="botones-proyecto">

              <button>Ver sistema</button>

              <button>Galería</button>

            </div>

          </div>

        </div>

        {/* EATUP */}
        <div className="card-proyecto">
          <div className="contenido-proyecto">

            <div className="top-proyecto">

              <h3>EatUp - Gestión de Restaurantes</h3>

            </div>

            <span className="anio">
               May 2025 - Ene 2026
              </span>
              
            <p className="descripcion-proyecto">
              Plataforma Full Stack para gestión de mesas,
              reservas y usuarios en restaurantes.
            </p>

            {/* TECNOLOGIAS */}
            <div className="tecnologias-proyecto">

              <span>React</span>
              <span>Laravel</span>
              <span>MySQL</span>
              <span>Docker</span>

            </div>

            {/* FEATURES */}
            <ul className="features">

              <li>Autenticación y roles</li>
              <li>CRUD dinámico</li>
              <li>Panel administrativo</li>
              <li>Responsive Design</li>
              <li>Sistema de reservas</li>

            </ul>

            {/* BOTONES */}
            <div className="botones-proyecto">

              <a href="#">
                <button>Demo</button>
              </a>

              <a href="#">
                <button>GitHub</button>
              </a>

              <button>
                Galería
              </button>

            </div>

          </div>

        </div>


       


        {/* IESY */}
        <div className="card-proyecto">
          <div className="contenido-proyecto">

            <div className="top-proyecto">

              <h3>IESY - Sitio Web Institucional</h3>

            </div>

            <span className="anio">
                May 2024 - Ago 2024
              </span>

            <p className="descripcion-proyecto">
              Desarrollo de sitio institucional moderno
              utilizando HTML, CSS y JavaScript.
            </p>

            <div className="tecnologias-proyecto">

              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>

            </div>

            <ul className="features">

              <li>Diseño responsive</li>
              <li>Interfaz moderna</li>
              <li>Optimización visual</li>
              <li>Experiencia de usuario</li>

            </ul>

            <div className="botones-proyecto">

              <button>Ver sitio</button>

              <button>Galería</button>

            </div>

          </div>

        </div>

        {/* UNITY */}
        <div className="card-proyecto">

          <div className="contenido-proyecto">

            <div className="top-proyecto">

              <h3>Videojuego Multijugador en Unity</h3>

            </div>

            <span className="anio">
                Sep 2024 - May 2025
              </span>

            <p className="descripcion-proyecto">
              Desarrollo de videojuego multijugador
              utilizando Unity 3D y C#.
            </p>

            <div className="tecnologias-proyecto">

              <span>Unity</span>
              <span>C#</span>
              <span>Multiplayer</span>

            </div>

            <ul className="features">

              <li>Mecánicas de gameplay</li>
              <li>Sistema multijugador</li>
              <li>Diseño de escenarios</li>
              <li>Trabajo colaborativo</li>

            </ul>

            <div className="botones-proyecto">

              <button>Gameplay</button>

              <button>Galería</button>

            </div>

          </div>

        </div>

      {/* LANDING PAGE */}
      <div className="card-proyecto">

        <div className="contenido-proyecto">

          <div className="top-proyecto">

            <h3>Landing Page en Laravel</h3>

          </div>

          <span className="anio">
              Ago 2023 - Dic 2023
            </span>

          <p className="descripcion-proyecto">
            Desarrollo de landing page moderna utilizando
            Laravel, PHP y JavaScript.
          </p>

          <div className="tecnologias-proyecto">

            <span>Laravel</span>
            <span>PHP</span>
            <span>JavaScript</span>
            <span>CSS</span>

          </div>

          <ul className="features">

            <li>Diseño responsive</li>
            <li>Frontend interactivo</li>
            <li>Backend dinámico</li>
            <li>Optimización visual</li>

          </ul>

          <div className="botones-proyecto">

            <button>Demo</button>

            <button>GitHub</button>

            <button>Galería</button>

          </div>

        </div>

      </div>

      </div>

      </section>


      {/* SKILLS */}
      <section className="skills" id="skills">
        <p className="titulo">Skills</p>
        <ul>
          <li>React</li>
          <li>Laravel</li>
          <li>PHP</li>
          <li>JavaScript</li>
          <li>Unity 3D</li>
          <li>C#</li>
          <li>MySQL</li>
          <li>GitHub</li>
          <li>Docker</li>
          <li>UX/UI</li>
        </ul>

      </section>


      {/* CONTACTO */}
      <section className="contacto" id="contacto">
        <p className="titulo">Contacto</p>

        <div className="contacto-texto">
          <p>Teléfono: 99 91 97 27 91</p>
          <p> Correo: pedrochan1818@gmail.com</p>
          <p>GitHub: github.com/pedro</p>
          <p>LinkedIn: linkedin.com/in/pedro</p>
        </div>
      </section>
      </div>
    </>
  );
}

export default Inicio;