import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black/20 backdrop-blur-sm border-t border-glass-border py-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/80">
          {/* Left section */}
          <div className="flex items-center gap-4">
            <span className="font-medium">© 2025 Visualize Digital</span>
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/contact"
                className="hover:text-brand-teal transition-colors"
              >
                Contact
              </Link>
              <span className="text-white/40">|</span>
              <a href="#" className="hover:text-brand-teal transition-colors">
                Privacy
              </a>
              <span className="text-white/40">|</span>
              <a href="#" className="hover:text-brand-teal transition-colors">
                Terms
              </a>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4 text-xs">
            <span>500+ Projects Delivered</span>
            <span className="text-white/40">•</span>
            <span>15+ Years Experience</span>
            <span className="text-white/40">•</span>
            <span>Global Presence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
