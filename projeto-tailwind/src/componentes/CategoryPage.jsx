import ProductCard from "./ProductCard";

function CategoryPage({ titulo, subtitulo, produtos }) {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto px-14 py-10">
      <h1 className="text-white text-3xl font-bold">{titulo}</h1>
      <p className="text-white/60 mb-8">{subtitulo}</p>
      <div className="grid grid-cols-4 gap-6">
        {produtos.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
