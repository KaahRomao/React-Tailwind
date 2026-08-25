import Logo from "../assets/terno-do-noivo.png";

function Header() {
  return (
    <div className="w-full h-25 bg-[#216869] flex items-center justify-between">
      <img src={Logo} alt="" className="ml-6 w-14 h-14 max-w-full block" />
      <nav className="flex items-center justify-between gap-6 mr-6">
        <li className="p-16 bg-[#1F2421] rounded-lg text-[#49A078]">Home</li>
        <li>produtos</li>
        <li>sobre</li>
        <li>Contato</li>
      </nav>
    </div>
  );
}

export default Header;
