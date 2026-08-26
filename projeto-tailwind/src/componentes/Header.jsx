import Logo from "../assets/minhaLogo-removebg-preview.png";
import Lupa from "../assets/003-lupa.png";
import User from "../assets/002-do-utilizador.png";
import Carrinho from "../assets/001-vista-lateral-vazia-do-carrinho-de-compras.png";

function Header() {
  return (
    <div className="w-full h-20 bg-[#0A0F0D] flex items-center justify-between gap-5">
      <img src={Logo} alt="" className="w-22 h-auto m-2.5 ml-14" />
      <nav className="flex items-center justify-between gap-6">
        <li className="p-1.5 bg-[#1F2421] rounded-lg text-white hover:scale-105 hover:text-purple-600">
          Home
        </li>
        <li className="p-1.5 bg-[#1F2421] rounded-lg text-white hover:scale-105 hover:text-purple-600">
          produtos
        </li>
        <li className="p-1.5 bg-[#1F2421] rounded-lg text-white hover:scale-105 hover:text-purple-600">
          sobre
        </li>
        <li className="p-1.5 bg-[#1F2421] rounded-lg text-white hover:scale-105 hover:text-purple-600">
          Contato
        </li>
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
