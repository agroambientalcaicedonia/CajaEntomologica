import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaP from "./components/paginaP";
import Insectos from "./components/Insectos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaP />} />
        <Route path="/insectos" element={<Insectos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
