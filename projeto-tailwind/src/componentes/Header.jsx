import { NavLink } from "react-router-dom";
import Logo from "../assets/minhaLogo-removebg-preview.png";
import Lupa from "../assets/003-lupa.png";
import User from "../assets/002-do-utilizador.png";
import Carrinho from "../assets/001-vista-lateral-vazia-do-carrinho-de-compras.png";

function Header() {
  const links = [
    { nome: "Home", to: "/" },
    { nome: "Jogos", to: "/Jogos" },
    { nome: "Consoles", to: "/Consoles" },
    { nome: "PCs", to: "/PCs" },
  ];

  return (
    <div className="w-full h-20 bg-[#0A0F0D] flex items-center justify-between gap-5 sticky top-0 z-10">
      <img src={Logo} alt="" className="w-22 h-auto m-2.5 ml-14" />
      <nav className="flex items-center justify-between gap-6">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === "/"}
            className={({ isActive }) =>
              `p-1.5 bg-[#1F2421] rounded-lg hover:scale-105 cursor-pointer ${
                isActive ? "active" : "text-white hover:text-[#7109B6]"
              }`
            }
          >
            {l.nome}
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center justify-between gap-10 mr-14">
        <img src={Lupa} alt="a" />
        <img src={User} alt="a" />
        <img src={Carrinho} alt="a" />
      </div>
    </div>
  );
}

export default Header;
