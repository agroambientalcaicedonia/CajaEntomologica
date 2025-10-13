import { useEffect, useState, useRef } from "react";
import "../css/Insectos.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { cucarron, hormiga } from "../const/insectos";

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
      setInsecto(cucarron);
      setIdInsecto("1");
    } else if (id == 2) {
      setInsecto(hormiga);
      setIdInsecto("2");
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
