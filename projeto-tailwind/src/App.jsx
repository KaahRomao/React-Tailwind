import "./App.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Home from "./Home";
import Jogos from "./Jogos";
import Games from "./Games";
import Contato from "./Contato";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="h-dvh w-dvw flex flex-col">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Jogos" element={<Jogos />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
