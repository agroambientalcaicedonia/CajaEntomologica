import { HashRouter, Routes, Route } from "react-router-dom";
import PaginaP from "./components/paginaP";
import Insectos from "./components/Insectos";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PaginaP />} />
        <Route path="/insectos" element={<Insectos />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
