import FeaturedProducts from "./componentes/FeaturedProducts";

function Home() {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto">
      <article className="w-full h-96 overflow-hidden relative">
        <img
          src="/public/banner-games-v2.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <h1 className="absolute text-white bottom-60 left-12 text-6xl space-y-6 bg-transparent">
          GAME O universo dos games começa aqui.
        </h1>
        <button className="absolute w-30 h-20 text-white bottom-9 left-25 rounded-2xl bg-[#1111] font-bold">
          Compre agora
        </button>
      </article>

      <FeaturedProducts />
    </div>
  );
}

export default Home;
