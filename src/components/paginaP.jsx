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
    if (idsGuardados.includes("5")) {
      setInsecto5(false);
    }
    if (idsGuardados.includes("6")) {
      setInsecto6(false);
    }
    if (idsGuardados.includes("7")) {
      setInsecto7(false);
    }
    if (idsGuardados.includes("8")) {
      setInsecto8(false);
    }
    if (idsGuardados.includes("9")) {
      setInsecto9(false);
    }
    if (idsGuardados.includes("10")) {
      setInsecto10(false);
    }
    if (idsGuardados.includes("11")) {
      setInsecto11(false);
    }
    if (idsGuardados.includes("12")) {
      setInsecto12(false);
    }
    if (idsGuardados.includes("13")) {
      setInsecto13(false);
    }
    if (idsGuardados.includes("14")) {
      setInsecto14(false);
    }
    if (idsGuardados.includes("15")) {
      setInsecto15(false);
    }
    if (idsGuardados.includes("16")) {
      setInsecto16(false);
    }
    if (idsGuardados.includes("17")) {
      setInsecto17(false);
    }
    if (idsGuardados.includes("18")) {
      setInsecto18(false);
    }
    if (idsGuardados.includes("19")) {
      setInsecto19(false);
    }
    if (idsGuardados.includes("20")) {
      setInsecto20(false);
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
                src="./images/Compsus sp.png"
                alt="Compsus sp"
              />
              <h1>Compsus sp</h1>
            </div>
          </div>
          <div className="Targeta1">
            <div className={insecto2 ? "desenfoque" : "sindesenfoque"}>
              <img 
                className="img-insectosPaginaP"
                src="./images/Canthon mutabilis.png" 
                alt="Canthon mutabilis" />
              <h1>Canthon mutabilis</h1>
            </div>
          </div>
          <div className="Targeta1">
            <div className="desenfoque">
              <img 
                className="img-insectosPaginaP"
                src="./images/Decticus albifrons.png" 
                alt="Decticus albifrons" />
              <h1>Decticus albifrons</h1>
            </div>
          </div>
          <div className="Targeta1">
            <div className="desenfoque">
              <img 
                className="img-insectosPaginaP"
                src="./images/Dryas iulia.png" 
                alt="Dryas iulia" />
              <h1>Dryas iulia</h1>
            </div>
          </div>
          <div className="Targeta1">
            <div className="desenfoque">
              <img 
                className="img-insectosPaginaP"
                src="./images/Edessa meditabunda.png" 
                alt="Edessa meditabunda" />
              <h1>Edessa meditabunda</h1>
            </div>
          </div>
          <div className="Targeta1">
            <div className="desenfoque">
              <img 
                className="img-insectosPaginaP"
                src="./images/Heilipus lauri.png" 
                alt="Heilipus lauri" />
              <h1>Heilipus lauri</h1>
            </div>
          </div>
          <div className="Targeta1">
            <div className="desenfoque">
              <img 
                className="img-insectosPaginaP"
                src="./images/Hydrobius fuscipes.png" 
                alt="Hydrobius fuscipes" />
              <h1>Hydrobius fuscipes</h1>
            </div>
          </div>
          <div className="Targeta1">
            <div className="desenfoque">
              <img 
                className="img-insectosPaginaP"
                src="./images/Macraspis lucida.png" 
                alt="Macraspis lucida" />
              <h1>Macraspis lucida</h1>
            </div>
          </div>
          <div className="Targeta1">
            <div className="desenfoque">
              <img 
                className="img-insectosPaginaP"
                src="./images/Mecopoda niponensis.png" 
                alt="Mecopoda niponensis" />
              <h1>Mecopoda niponensis</h1>
            </div>
          </div>
          <div className="Targeta1">
            <div className="desenfoque">
              <img 
                className="img-insectosPaginaP"
                src="./images/Neoconocephalus pullus.png" 
                alt="Neoconocephalus pullus" />
              <h1>Neoconocephalus pullus</h1>
            </div>
          </div>
          <div className="Targeta1">
            <div className="desenfoque">
              <img 
                className="img-insectosPaginaP"
                src="./images/Odontotaenius disjunctus.png" 
                alt="Odontotaenius disjunctus" />
              <h1>Odontotaenius disjunctus</h1>
            </div>
          </div>
          <div className="Targeta1">
            <div className="desenfoque">
              <img 
                className="img-insectosPaginaP"
                src="./images/Pardogryllacris sp.png" 
                alt="Pardogryllacris sp" />
              <h1>Pardogryllacris sp</h1>
            </div>
          </div>
          <div className="Targeta1">
            <div className="desenfoque">
              <img 
                className="img-insectosPaginaP"
                src="./images/Schistocerca damnifica.png" 
                alt="Schistocerca damnifica" />
              <h1>Schistocerca damnifica</h1>
            </div>
          </div>
          <div className="Targeta1">
            <div className="desenfoque">
              <img 
                className="img-insectosPaginaP"
                src="./images/Teleogryllus emma.png" 
                alt="Teleogryllus emma" />
              <h1>Teleogryllus emma</h1>
            </div>
          </div>
          <div className="Targeta1">
            <div className="desenfoque">
              <img 
                className="img-insectosPaginaP"
                src="./images/Xylocopa sonorina.png" 
                alt="Xylocopa sonorina" />
              <h1>Xylocopa sonorina</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaP;
