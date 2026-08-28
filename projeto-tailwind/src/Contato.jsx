import CategoryPage from "./componentes/CategoryPage";

function Contato() {
  const produtos = [
    { nome: "PC Gamer ROG", desc: "RTX de última geração." },
    {
      nome: "Placa de Vídeo RTX 4070",
      desc: "Ray tracing em alta performance.",
    },
    { nome: "Monitor 240Hz", desc: "Fluidez total em competitivo." },
    { nome: "Teclado Mecânico RGB", desc: "Switches responsivos." },
    { nome: "Mouse Gamer 26000 DPI", desc: "Precisão para qualquer jogo." },
    { nome: "Processador i9", desc: "Desempenho sem gargalos." },
    { nome: "Mousepad XL", desc: "Espaço amplo, deslize suave." },
    { nome: "Water Cooler 360mm", desc: "Refrigeração silenciosa e eficaz." },
  ];

  return (
    <CategoryPage
      titulo="PCs"
      subtitulo="Monte ou fortaleça sua máquina gamer."
      produtos={produtos}
    />
  );
}

export default Contato;
