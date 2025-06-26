import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Technologies", path: "#technologies" },
    { name: "Industries", path: "#industries" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "Insights", path: "#insights" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-glass-border">
      <div className="flex items-center justify-between px-9 py-6 mx-9 rounded-[39px] bg-white">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://cdn.builder.io/api/v1/assets/2f7586ff9e01429985c3cdd0be5b530e/visual-logo-b39922?format=webp&width=800"
              alt="Visualize Digital - Do more with less"
              className="h-16 w-auto"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-lg font-nunito hover:text-brand-teal transition-colors ${
                location.pathname === item.path
                  ? "text-brand-teal font-bold"
                  : "text-black"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button className="lg:hidden p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navigation;
