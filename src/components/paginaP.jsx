// Importamos React para poder usar los hooks
import React, { useEffect, useState } from "react";
import "../css/PaginaP.css";

function PaginaP() {
  const [idsInsectos, setIdsInsectos] = useState([]);
  const [insecto1, setInsecto1] = useState(true);
  const [insecto2, setInsecto2] = useState(true);
  const [insecto3, setInsecto3] = useState(true);
  const [insecto4, setInsecto4] = useState(true);

  useEffect(() => {
    const idsGuardados = JSON.parse(localStorage.getItem("idsInsectos")) || [];
    setIdsInsectos(idsGuardados);
    if (idsGuardados.includes("1")) {
      setInsecto1(false);
    }
    if (idsGuardados.includes("2")) {
      setInsecto2(false);
    }
    if (idsGuardados.includes("3")) {
      setInsecto3(false);
    }
    if (idsGuardados.includes("4")) {
      setInsecto4(false);
    }
  }, []);

  return (
    <div>
      <div className="fondo"></div>
      <div className="Contenedor1">
        <section>
          <h1 className="Titulo">¡Conocelos!</h1>
          <h2 className="Informacion">
            Para conocer más información sobre los insectos, escanea el QR de
            cada uno para desbloquearlos
          </h2>
        </section>
        <div className="contenedor-targetas">
          <div className="Targeta1">
            <div className={insecto1 ? "desenfoque" : "sindesenfoque"}>
              <img
                className="img-insectosPaginaP"
                src="./images/image.png"
                alt="insecto1"
              />
              <h1>Cucarron</h1>
            </div>
          </div>
          <div className="Targeta1">
            <div className={insecto2 ? "desenfoque" : "sindesenfoque"}>
              <img className="img-insectosPaginaP" src="./images/hormiga-foto.jpg" />
              <h1>Hormiga</h1>
            </div>
          </div>
          <div className="Targeta1">
            <div className="desenfoque">
              <img src="/placeholder.jpg" alt="insecto1" />
              <h1>Cucarron</h1>
            </div>
          </div>
          <div className="Targeta1">
            <div className="desenfoque">
              <img src="/placeholder.jpg" alt="insecto1" />
              <h1>Cucarron</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaP;
