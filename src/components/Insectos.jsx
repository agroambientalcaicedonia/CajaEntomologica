import { useEffect, useState, useRef } from "react";
import "../css/Insectos.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Compsus_sp, Canthon_mutabilis, Decticus_albifrons, Dryas_iulia, Edessa_meditabunda, Heilipus_lauri,
  Hydrobius_fuscipes, Macraspis_lucida, Mecopoda_niponensis, Neoconocephalus_pullus, Odontotaenius_disjunctus,
  Pardogryllacris_sp, Schistocerca_damnifica, Teleogryllus_emma, Xylocopa_sonorina,
} from "../const/insectos";

function Insectos() {
  const [searchParams] = useSearchParams();
  const ids = searchParams.get("id");
  const [rescatado, setRescatado] = useState(false);
  const navigate = useNavigate();
  const [id, setId] = useState(ids);
  const [insecto, setInsecto] = useState(null);
  const [idInsecto, setIdInsecto] = useState("0");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (id == 1) {
      setInsecto(Compsus_sp);
      setIdInsecto("1");
    } else if (id == 2) {
      setInsecto(Canthon_mutabilis);
      setIdInsecto("2");
    } else if (id == 3) {
      setInsecto(Decticus_albifrons);
      setIdInsecto("3");
    } else if (id == 4) {
      setInsecto(Dryas_iulia);
      setIdInsecto("4");
    } else if (id == 5) {
      setInsecto(Edessa_meditabunda);
      setIdInsecto("5");
    } else if (id == 6) {
      setInsecto(Heilipus_lauri);
      setIdInsecto("6");
    } else if (id == 7) {
      setInsecto(Hydrobius_fuscipes);
      setIdInsecto("7");
    } else if (id == 8) {
      setInsecto(Macraspis_lucida);
      setIdInsecto("8");
    } else if (id == 9) {
      setInsecto(Mecopoda_niponensis);
      setIdInsecto("9");
    } else if (id == 10) {
      setInsecto(Neoconocephalus_pullus);
      setIdInsecto("10");
    } else if (id == 11) {
      setInsecto(Odontotaenius_disjunctus);
      setIdInsecto("11");
    } else if (id == 12) {
      setInsecto(Pardogryllacris_sp);
      setIdInsecto("12");
    } else if (id == 13) {
      setInsecto(Schistocerca_damnifica);
      setIdInsecto("13");
    } else if (id == 14) {
      setInsecto(Teleogryllus_emma);
      setIdInsecto("14");
    } else if (id == 15) {
      setInsecto(Xylocopa_sonorina);
      setIdInsecto("15");
    } else {
      setInsecto(null);
      setIdInsecto("0");
    }
  }, [id]);

  function Rescatar() {
    setTimeout(() => {
      setRescatado(false);
      navigate("/");
    }, 3000);
  }

  function handleRescatar() {
    setRescatado(true);
    Rescatar();
    const idsGuardados = JSON.parse(localStorage.getItem("idsInsectos")) || [];
    const nuevosIds = [...idsGuardados, idInsecto];
    localStorage.setItem("idsInsectos", JSON.stringify(nuevosIds));
    console.log("IDs guardados ahora:", nuevosIds);
  }
  
  // Funciones para el reproductor de audio
  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleProgressChange = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const skipForward = () => {
    audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 3, audioRef.current.duration);
  };

  const skipBackward = () => {
    audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 3, 0);
  };

  return (
    <div className="contenedor-principal">
      {!insecto ? (
        <h1>Cargando insecto...</h1>
      ) : (
        <>
          <div className={insecto.fondo}></div>

          <div className="contenedor-insectos">
            <div className="Targeta-Insectos">
              <img src={insecto.imagen} alt={insecto.nombre} className="img" />
              <h1>{insecto.nombre}</h1>
            </div>

            <div className="contenedor-decoracion">
              <img src={insecto.decoracion} className="decoracion" />
              <div className="Audio-insectos">
                <div className="contenedor-disco">
                  <img src="./images/disco.png" className="disco" />
                </div>
                <div className="reproductor-audio">
                  <audio
                    ref={audioRef}
                    src={insecto.audio}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                  />
                  <div className="controles-audio">
                    <button onClick={skipBackward} className="btn-control">-3</button>
                    <button onClick={togglePlay} className="btn-play">
                      {isPlaying ? "| |" : " ▶ "}
                    </button>
                    <button onClick={skipForward} className="btn-control">+3</button>
                  </div>
                  <div className="barra-progreso">
                    <input
                      type="range"
                      min="0"
                      max={duration || 0}
                      value={currentTime}
                      onChange={handleProgressChange}
                      className="progreso"
                    />
                    <div className="tiempo">
                      {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')} / 
                      {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recordatorio debajo del reproductor */}
            <div className="recordatorio-captura">
              <span className="recordatorio-texto">¡Recuerda atrapar tu insecto!</span>
              <span className="flecha-abajo">↓</span>
            </div>

            <button className={insecto.boton} onClick={handleRescatar}>
              Atrapar
            </button>

            {rescatado && (
              <div className="fondonegro">
                <img src="./images/pokebola.png" className="img-2" />
                <h1>¡Insecto Atrapado!</h1>
                <div className="img-pokebola"></div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Insectos;
