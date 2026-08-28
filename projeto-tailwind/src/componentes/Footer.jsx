function Footer() {
  return (
    <div className="w-full h-fit bg-[#0A0F0D] flex items-center self-end justify-center p-2.5 gap-34">
      <section className="h-16 w-72 break-all: gap-4 bg-white/30 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-6 flex items-center justify-center">
        <img src="/001-caminho-de-entrega.png" alt="" width={100} />
        <p className="text-sm text-[#7109B6] font-bold">
          Receba seu pedido com rapidez e segurança.
        </p>
      </section>
      <section className="h-16 w-72 break-all: gap-2.5 bg-white/30 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-6 flex items-center justify-center">
        <img src="/public/002-escudo.png" alt="" width={100} />
        <p className="text-sm text-[#7109B6] font-bold">
          Seus dados estão protegidos em todas as compras.
        </p>
      </section>
      <section className="h-16 w-72 break-all: gap-2.5 bg-white/30 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-6 flex items-center justify-center">
        <img src="/public/003-ciclo.png" alt="" width={100} />
        <p className="text-sm text-[#7109B6] font-bold">
          Estamos disponíveis a qualquer hora para ajudar você.
        </p>
      </section>
      <section className="h-1 w-72 break-all: gap-2.5 bg-white/30 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-6 flex items-center justify-center">
        <img src="/public/headset (1).png" alt="" width={100} />
        <p className="text-sm text-[#7109B6] font-bold">
          Faça sua devolução de forma simples e sem complicações.
        </p>
      </section>
    </div>
  );
}

export default Footer;
