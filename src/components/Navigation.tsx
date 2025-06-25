import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Technologies", path: "#technologies" },
    { name: "Industries", path: "#industries" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-glass-border">
      <div className="flex items-center justify-between px-9 py-6 mx-9 rounded-[39px] bg-white">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://cdn.builder.io/api/v1/assets/2f7586ff9e01429985c3cdd0be5b530e/visual-logo-b39922?format=webp&width=800"
              alt="Visualize Digital - Do more with less"
              className="h-10 w-auto"
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

        <Link
          to="#contact"
          className="bg-button-gradient px-16 py-3 rounded-29 text-white font-inter text-lg shadow-glow flex items-center gap-2 hover:scale-105 transition-transform"
        >
          CONTACT
          <div className="w-4 h-4 text-white transform -rotate-90">
            <svg
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.64821 8.86249C6.29946 8.74624 6.29946 8.25376 6.64821 8.13751L8.69527 7.45586C9.14526 7.30582 9.55413 7.05303 9.88945 6.71753C10.2248 6.38202 10.4773 5.97302 10.6271 5.52294L11.3088 3.47694C11.425 3.12819 11.9175 3.12819 12.0338 3.47694L12.7154 5.524C12.8654 5.97399 13.1182 6.38286 13.4537 6.71818C13.7892 7.0535 14.1982 7.30607 14.6483 7.45586L16.6943 8.13751C16.7707 8.16257 16.8372 8.21111 16.8843 8.27621C16.9315 8.3413 16.9569 8.41962 16.9569 8.5C16.9569 8.58037 16.9315 8.6587 16.8843 8.72379C16.8372 8.78888 16.7707 8.83742 16.6943 8.86249L14.6473 9.54414C14.1974 9.69407 13.7886 9.9467 13.4533 10.282C13.118 10.6173 12.8653 11.0261 12.7154 11.476L12.0338 13.5231C12.0087 13.5994 11.9602 13.6659 11.8951 13.7131C11.83 13.7602 11.7516 13.7856 11.6713 13.7856C11.5909 13.7856 11.5126 13.7602 11.4475 13.7131C11.3824 13.6659 11.3338 13.5994 11.3088 13.5231L10.6271 11.476C10.4772 11.0261 10.2246 10.6173 9.88925 10.282C9.55394 9.9467 9.14515 9.69407 8.69527 9.54414L6.64821 8.86249Z"
                fill="white"
              />
            </svg>
          </div>
        </Link>

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
