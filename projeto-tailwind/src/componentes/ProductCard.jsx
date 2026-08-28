import { useState } from "react";

function ProductCard({ nome, desc, img }) {
  const [comprado, setComprado] = useState(false);

  return (
    <article className="bg-[#1A1A1A] border border-white/10 rounded-xl p-4 flex flex-col gap-2">
      <div className="w-full h-40 rounded-lg bg-white flex items-center justify-center overflow-hidden">
        {img ? (
          <img src={img} alt={nome} className="w-full h-full object-cover" />
        ) : (
          <span className="text-black/30 text-xs">sem imagem</span>
        )}
      </div>
      <h3 className="text-white font-bold">{nome}</h3>
      <p className="text-white/60 text-sm">{desc}</p>
      <button
        onClick={() => setComprado(true)}
        disabled={comprado}
        className={`mt-2 w-full py-2 rounded-lg font-semibold transition ${
          comprado
            ? "bg-[#4BCFFF] text-[#111111] cursor-default"
            : "bg-[#7109B6] text-white hover:bg-[#4BCFFF] hover:text-[#111111]"
        }`}
      >
        {comprado ? "Comprado ✓" : "Buy Now"}
      </button>
    </article>
  );
}

export default ProductCard;
