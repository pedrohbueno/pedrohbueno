const navItems = [
  "Início",
  "Sobre",
  "Projetos",
  "Contato"
];

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
        <div>
          <span className="text-4xl font-bold text-purple-500">
            PH
          </span>
        </div>

        <nav>
          <ul className="flex gap-10 text-gray-400">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  className="
                    transition-colors
                    hover:text-white
                  "
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}