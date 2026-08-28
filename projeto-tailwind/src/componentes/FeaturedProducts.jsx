function FeaturedProducts() {
  const produtos = [
    {
      nome: "Classic Runner Shoes",
      desc: "Confortável e estiloso para o dia a dia.",
      img: "/public/images.jpeg",
    },
    {
      nome: "Marvel's Spider-Man 2",
      desc: "Uma nova aventura em Nova York.",
      img: "/public/wdqw.jpeg",
    },
    {
      nome: "Gaming Laptop",
      desc: "Alta performance para jogos e criação.",
      img: "/public/adwfd.jpeg",
    },
    {
      nome: "ROG Gaming PC",
      desc: "PC poderoso para a melhor experiência gamer.",
      img: "/public/wq.jpeg",
    },
  ];

  return (
    <section className="w-full bg-[#111111] px-14 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-2xl font-bold">Featured Products</h2>
        <a
          href="#"
          className="text-[#4BCFFF] text-sm font-semibold hover:underline"
        >
          View All &gt;
        </a>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {produtos.map((p, i) => (
          <article
            key={i}
            className="bg-[#1A1A1A] border border-white/10 rounded-xl p-4 flex flex-col gap-2 h-fit"
          >
            <img
              src={p.img}
              alt={p.nome}
              className="w-full h-40 object-cover rounded-lg bg-white"
            />
            <h3 className="text-white font-bold">{p.nome}</h3>
            <p className="text-white/60 text-sm">{p.desc}</p>
            <button className="mt-2 w-full py-2 rounded-lg bg-[#7109B6] text-white font-semibold hover:bg-[#4BCFFF] transition">
              Buy Now
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
