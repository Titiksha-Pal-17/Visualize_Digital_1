import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-10 py-12 px-4 border-t border-glass-border bg-black/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Services */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 font-inter">
              Services
            </h3>
            <ul className="space-y-1 text-sm text-[#B1ADBC] font-inter">
              <li className="hover:text-brand-teal transition-colors cursor-pointer">
                Custom Software Development
              </li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">
                Web Development
              </li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">
                Mobile App Development
              </li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">
                Digital Marketing
              </li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">
                UI/UX Design
              </li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">
                Software Testing & QA
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 font-inter">
              Technologies
            </h3>
            <ul className="space-y-1 text-sm text-[#B1ADBC] font-inter">
              <li className="hover:text-brand-teal transition-colors cursor-pointer">
                React & Next.js
              </li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">
                Node.js & Express
              </li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">
                PHP & Laravel
              </li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">
                Java & Spring
              </li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">
                iOS & Android
              </li>
              <li className="hover:text-brand-teal transition-colors cursor-pointer">
                AWS & Azure
              </li>
            </ul>
          </div>

          {/* Global Offices - Compact */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold text-white mb-3 font-inter">
              Global Offices
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-[rgba(178,218,175,0.10)] rounded-lg p-3">
                <p className="text-white text-sm font-semibold font-inter">
                  <strong>United States</strong>
                  <br />
                  Dallas, Texas
                  <br />
                  <span className="text-xs text-[#B1ADBC]">
                    +1 469 638 3402
                  </span>
                </p>
              </div>
              <div className="bg-[rgba(178,218,175,0.10)] rounded-lg p-3">
                <p className="text-white text-sm font-semibold font-inter">
                  <strong>India</strong>
                  <br />
                  Ahmedabad, Gujarat
                  <br />
                  <span className="text-xs text-[#B1ADBC]">
                    +91 960 142 1472
                  </span>
                </p>
              </div>
              <div className="bg-[rgba(178,218,175,0.10)] rounded-lg p-3">
                <p className="text-white text-sm font-semibold font-inter">
                  <strong>United Kingdom</strong>
                  <br />
                  London
                  <br />
                  <span className="text-xs text-[#B1ADBC]">
                    +44 742 409 8452
                  </span>
                </p>
              </div>
              <div className="bg-[rgba(178,218,175,0.10)] rounded-lg p-3">
                <p className="text-white text-sm font-semibold font-inter">
                  <strong>Australia</strong>
                  <br />
                  Melbourne, VIC
                  <br />
                  <span className="text-xs text-[#B1ADBC]">
                    +61 3 9581 2659
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-6 border-t border-glass-border">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link
              to="/contact"
              className="text-white hover:text-brand-teal transition-colors font-inter"
            >
              Contact
            </Link>
            <span className="text-[#B1ADBC]">|</span>
            <a
              href="#"
              className="text-white hover:text-brand-teal transition-colors font-inter"
            >
              Privacy Policy
            </a>
            <span className="text-[#B1ADBC]">|</span>
            <a
              href="#"
              className="text-white hover:text-brand-teal transition-colors font-inter"
            >
              Terms of Use
            </a>
            <span className="text-[#B1ADBC]">|</span>
            <a
              href="#"
              className="text-white hover:text-brand-teal transition-colors font-inter"
            >
              Sitemap
            </a>
          </div>

          <div className="text-center">
            <p className="text-white text-sm font-inter">
              Copyright © 2014-2025{" "}
              <span className="text-brand-teal font-semibold">
                All Rights Reserved By Visualize Digital
              </span>
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-[#B1ADBC]">
            <span>500+ Projects</span>
            <span>•</span>
            <span>15+ Years</span>
            <span>•</span>
            <span>98% Satisfaction</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
