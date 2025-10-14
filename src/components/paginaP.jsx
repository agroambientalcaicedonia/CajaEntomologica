// Importamos React para poder usar los hooks
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/PaginaP.css";

function PaginaP() {
  const navigate = useNavigate();
  const [idsInsectos, setIdsInsectos] = useState([]);
  const [insecto1, setInsecto1] = useState(true);
  const [insecto2, setInsecto2] = useState(true);
  const [insecto3, setInsecto3] = useState(true);
  const [insecto4, setInsecto4] = useState(true);
  const [insecto5, setInsecto5] = useState(true);
  const [insecto6, setInsecto6] = useState(true);
  const [insecto7, setInsecto7] = useState(true);
  const [insecto8, setInsecto8] = useState(true);
  const [insecto9, setInsecto9] = useState(true);
  const [insecto10, setInsecto10] = useState(true);
  const [insecto11, setInsecto11] = useState(true);
  const [insecto12, setInsecto12] = useState(true);
  const [insecto13, setInsecto13] = useState(true);
  const [insecto14, setInsecto14] = useState(true);
  const [insecto15, setInsecto15] = useState(true);
  const [insecto16, setInsecto16] = useState(true);
  const [insecto17, setInsecto17] = useState(true);
  const [insecto18, setInsecto18] = useState(true);
  const [insecto19, setInsecto19] = useState(true);
  const [insecto20, setInsecto20] = useState(true);

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

  const handleCardClick = (targetId, locked) => {
    if (locked) return;
    navigate(`/insectos?id=${targetId}`);
  };

  return (
    <div>
      <div className="fondo"></div>
      <div className="Contenedor1">
        <section>
          <h1 className="Titulo">¡Conoce los insectos de la Caja Entomologica!</h1>
          <h2 className="Informacion">
            Para conocer más información sobre los insectos, escanea el QR de
            cada uno para desbloquearlos
          </h2>
        </section>
        <div className="contenedor-targetas">
          <div className="Targeta1" onClick={() => handleCardClick(1, insecto1)}>
            <div className={insecto1 ? "desenfoque" : "sindesenfoque"}>
              <img
                className="img-insectosPaginaP"
                src="./images/Compsus sp.png"
                alt="Compsus sp"
              />
              <h1>Compsus sp</h1>
            </div>
          </div>
          <div className="Targeta1" onClick={() => handleCardClick(2, insecto2)}>
            <div className={insecto2 ? "desenfoque" : "sindesenfoque"}>
              <img 
                className="img-insectosPaginaP"
                src="./images/Canthon mutabilis.png" 
                alt="Canthon mutabilis" />
              <h1>Canthon mutabilis</h1>
            </div>
          </div>
          <div className="Targeta1" onClick={() => handleCardClick(3, insecto3)}>
            <div className={insecto3 ? "desenfoque" : "sindesenfoque"}>
              <img 
                className="img-insectosPaginaP"
                src="./images/Decticus albifrons.png" 
                alt="Decticus albifrons" />
              <h1>Decticus albifrons</h1>
            </div>
          </div>
          <div className="Targeta1" onClick={() => handleCardClick(4, insecto4)}>
            <div className={insecto4 ? "desenfoque" : "sindesenfoque"}>
              <img 
                className="img-insectosPaginaP"
                src="./images/Dryas iulia.png" 
                alt="Dryas iulia" />
              <h1>Dryas iulia</h1>
            </div>
          </div>
          <div className="Targeta1" onClick={() => handleCardClick(5, insecto5)}>
            <div className={insecto5 ? "desenfoque" : "sindesenfoque"}>
              <img 
                className="img-insectosPaginaP"
                src="./images/Edessa meditabunda.png" 
                alt="Edessa meditabunda" />
              <h1>Edessa meditabunda</h1>
            </div>
          </div>
          <div className="Targeta1" onClick={() => handleCardClick(6, insecto6)}>
            <div className={insecto6 ? "desenfoque" : "sindesenfoque"}>
              <img 
                className="img-insectosPaginaP"
                src="./images/Heilipus lauri.png" 
                alt="Heilipus lauri" />
              <h1>Heilipus lauri</h1>
            </div>
          </div>
          <div className="Targeta1" onClick={() => handleCardClick(7, insecto7)}>
            <div className={insecto7 ? "desenfoque" : "sindesenfoque"}>
              <img 
                className="img-insectosPaginaP"
                src="./images/Hydrobius fuscipes.png" 
                alt="Hydrobius fuscipes" />
              <h1>Hydrobius fuscipes</h1>
            </div>
          </div>
          <div className="Targeta1" onClick={() => handleCardClick(8, insecto8)}>
            <div className={insecto8 ? "desenfoque" : "sindesenfoque"}>
              <img 
                className="img-insectosPaginaP"
                src="./images/Macraspis lucida.png" 
                alt="Macraspis lucida" />
              <h1>Macraspis lucida</h1>
            </div>
          </div>
          <div className="Targeta1" onClick={() => handleCardClick(9, insecto9)}>
            <div className={insecto9 ? "desenfoque" : "sindesenfoque"}>
              <img 
                className="img-insectosPaginaP"
                src="./images/Mecopoda niponensis.png" 
                alt="Mecopoda niponensis" />
              <h1>Mecopoda niponensis</h1>
            </div>
          </div>
          <div className="Targeta1" onClick={() => handleCardClick(10, insecto10)}>
            <div className={insecto10 ? "desenfoque" : "sindesenfoque"}>
              <img 
                className="img-insectosPaginaP"
                src="./images/Neoconocephalus pullus.png" 
                alt="Neoconocephalus pullus" />
              <h1>Neoconocephalus pullus</h1>
            </div>
          </div>
          <div className="Targeta1" onClick={() => handleCardClick(11, insecto11)}>
            <div className={insecto11 ? "desenfoque" : "sindesenfoque"}>
              <img 
                className="img-insectosPaginaP"
                src="./images/Odontotaenius disjunctus.png" 
                alt="Odontotaenius disjunctus" />
              <h1>Odontotaenius disjunctus</h1>
            </div>
          </div>
          <div className="Targeta1" onClick={() => handleCardClick(12, insecto12)}>
            <div className={insecto12 ? "desenfoque" : "sindesenfoque"}>
              <img 
                className="img-insectosPaginaP"
                src="./images/Pardogryllacris sp.png" 
                alt="Pardogryllacris sp" />
              <h1>Pardogryllacris sp</h1>
            </div>
          </div>
          <div className="Targeta1" onClick={() => handleCardClick(13, insecto13)}>
            <div className={insecto13 ? "desenfoque" : "sindesenfoque"}>
              <img 
                className="img-insectosPaginaP"
                src="./images/Schistocerca damnifica.png" 
                alt="Schistocerca damnifica" />
              <h1>Schistocerca damnifica</h1>
            </div>
          </div>
          <div className="Targeta1" onClick={() => handleCardClick(14, insecto14)}>
            <div className={insecto14 ? "desenfoque" : "sindesenfoque"}>
              <img 
                className="img-insectosPaginaP"
                src="./images/Teleogryllus emma.png" 
                alt="Teleogryllus emma" />
              <h1>Teleogryllus emma</h1>
            </div>
          </div>
          <div className="Targeta1" onClick={() => handleCardClick(15, insecto15)}>
            <div className={insecto15 ? "desenfoque" : "sindesenfoque"}>
              <img 
                className="img-insectosPaginaP"
                src="./images/Xylocopa sonorina.png" 
                alt="Xylocopa sonorina" />
              <h1>Xylocopa sonorina</h1>
            </div>
          </div>
          <div className="Targeta1" onClick={() => handleCardClick(16, insecto16)}>
            <div className={insecto16 ? "desenfoque" : "sindesenfoque"}>
              <img 
                className="img-insectosPaginaP"
                src="./images/Polistes erythrocephalus.png" 
                alt="Polistes erythrocephalus" />
              <h1>Polistes erythrocephalus</h1>
            </div>
          </div>
          <div className="Targeta1" onClick={() => handleCardClick(17, insecto17)}>
            <div className={insecto17 ? "desenfoque" : "sindesenfoque"}>
              <img 
                className="img-insectosPaginaP"
                src="./images/Oebalus pugnax.png" 
                alt="Oebalus pugnax" />
              <h1>Oebalus pugnax</h1>
            </div>
          </div>
          <div className="Targeta1" onClick={() => handleCardClick(18, insecto18)}>
            <div className={insecto18 ? "desenfoque" : "sindesenfoque"}>
              <img 
                className="img-insectosPaginaP"
                src="./images/Lucilia sericata.png" 
                alt="Lucilia sericata" />
              <h1>Lucilia sericata</h1>
            </div>
          </div>
          <div className="Targeta1" onClick={() => handleCardClick(19, insecto19)}>
            <div className={insecto19 ? "desenfoque" : "sindesenfoque"}>
              <img 
                className="img-insectosPaginaP"
                src="./images/Leptoglossus zonatus.png" 
                alt="Leptoglossus zonatus" />
              <h1>Leptoglossus zonatus</h1>
            </div>
          </div>
          <div className="Targeta1" onClick={() => handleCardClick(20, insecto20)}>
            <div className={insecto20 ? "desenfoque" : "sindesenfoque"}>
              <img 
                className="img-insectosPaginaP"
                src="./images/Brachypalpus valgus.png" 
                alt="Brachypalpus valgus" />
              <h1>Brachypalpus valgus</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaP;
