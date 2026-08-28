import CategoryPage from "./componentes/CategoryPage";

function Jogos() {
  const produtos = [
    { nome: "PlayStation 5", desc: "Potência e velocidade next-gen." },
    { nome: "Xbox Series X", desc: "4K nativo e Game Pass." },
    { nome: "Nintendo Switch 2", desc: "Portátil e de mesa." },
    { nome: "Controle DualSense", desc: "Feedback háptico avançado." },
    { nome: "Headset Gamer", desc: "Áudio imersivo para partidas." },
    { nome: "Volante com Pedais", desc: "Realismo pra jogos de corrida." },
    { nome: "Cadeira Gamer", desc: "Conforto em sessões longas." },
    { nome: "SSD Externo 2TB", desc: "Mais espaço, carregamento rápido." },
  ];

  return (
    <CategoryPage
      titulo="Consoles"
      subtitulo="Hardware e acessórios para elevar seu setup."
      produtos={produtos}
    />
  );
}

export default Jogos;
