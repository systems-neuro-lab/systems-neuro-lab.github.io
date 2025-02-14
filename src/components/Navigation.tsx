import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Research", path: "/research" },
    { name: "Publications", path: "/publications" },
    { name: "Resources", path: "/resources" },
    { name: "News", path: "/news" },
  ];

  const handleClick = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-24 md:h-28">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="h-[245px] w-[245px] md:h-[272px] md:w-[272px] relative">
                <img 
                  src="/lovable-uploads/a51ad2d8-8ac5-46cd-b5b5-117e43bcc87a.png" 
                  alt="Systems Neuroscience Lab Logo" 
                  className="h-full w-full object-contain"
                  width={272}
                  height={272}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={handleClick}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                  location.pathname === link.path
                    ? "border-primary text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-3">
            <div className="space-y-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={handleClick}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? "bg-primary/10 text-primary"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;