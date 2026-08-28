import CategoryPage from "./componentes/CategoryPage";

function Games() {
  const produtos = [
    { nome: "Spider-Man 2", desc: "Aventura em Nova York, PS5." },
    { nome: "God of War Ragnarök", desc: "Ação e mitologia nórdica." },
    { nome: "Elden Ring", desc: "RPG de mundo aberto brutal." },
    { nome: "The Last of Us Part I", desc: "Sobrevivência pós-apocalíptica." },
    {
      nome: "Zelda: Tears of the Kingdom",
      desc: "Exploração épica em Hyrule.",
    },
    { nome: "FIFA 26", desc: "O futebol mais realista do ano." },
    { nome: "Mortal Kombat 1", desc: "Combates brutais e sangrentos." },
    { nome: "GTA VI", desc: "Mundo aberto, crime e caos." },
  ];

  return (
    <CategoryPage
      titulo="Jogos"
      subtitulo="Os melhores títulos para você jogar agora."
      produtos={produtos}
    />
  );
}

export default Games;
