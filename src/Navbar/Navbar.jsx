/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { 
  Home, 
  Menu, 
  X, 
  ChevronDown,
  NotepadText,
  Dumbbell,
  User
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigationItems = [
    { 
      label: "Explore", 
      icon: <ChevronDown size={16} />,
      dropdown: [
        { label: "Programmes", path: "/programmes", icon: <NotepadText size={20} /> },
        { label: "Workouts", path: "/workouts", icon: <Dumbbell size={20} /> },
        { label: "Personal Training", path: "/personal-trainer", icon: <User size={20} /> }
      ]
    },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" }
  ];

  const NavLinks = ({ isMobile = false }) => {
    const linkStyle = isMobile 
      ? "w-full text-center py-3 text-white hover:text-[#faa307] transition-colors"
      : "text-white hover:text-[#faa307] text-sm transition-all duration-300 transform";

    return (
      <ul className={`${isMobile ? "flex-col space-y-4" : "flex space-x-6"} flex items-center`}>
        <li className={linkStyle}>
          <Link to="/" className="flex items-center gap-2">
            <Home size={18} /> Home
          </Link>
        </li>
        
        {navigationItems.map((item) => (
          <li 
            key={item.label} 
            className={`relative group ${linkStyle}`}
            ref={item.dropdown ? dropdownRef : null}
          >
            {item.dropdown ? (
              <button 
                onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                className="flex items-center gap-2"
              >
                {item.label} {item.icon && <>{item.icon}</>}
              </button>
            ) : (
              <Link to={item.path} className="flex items-center gap-2">
                {item.label}
              </Link>
            )}
            
            {item.dropdown && activeDropdown === item.label && (
              <div className={`
                ${isMobile ? "relative w-full" : "absolute top-full left-0 min-w-[250px] bg-[#1a1a1a] shadow-lg rounded-lg"}
                z-20 p-2 mt-10 border-gray-700
              `}>
                <ul className={isMobile ? "space-y-2" : "space-y-2"}>
                  {item.dropdown.map((subItem) => (
                    <li key={subItem.path}>
                      <Link 
                        to={subItem.path} 
                        className="flex items-center gap-3 px-4 py-3 text-white hover:text-[#faa307] transition-colors"
                      >
                        {subItem.icon} {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/70 backdrop-blur-md
      ${isScrolled ? "shadow-md" : ""}
    `}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl cursor-pointer font-bold text-white flex items-center gap-2 hover:text-[#faa307] transition-colors">
          FiitLife
        </div>

        <div className="hidden lg:block">
          <NavLinks />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link 
            to="/login" 
            className="px-5 py-2 text-sm border border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 transform"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="px-6 py-2 text-sm bg-[#faa307] text-black rounded-full hover:bg-[#ffc42d] transition-all duration-300 transform"
          >
            Sign Up
          </Link>
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="focus:outline-none text-white"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed h-screen inset-0 bg-black z-40 pt-20 overflow-y-auto">
          <div className="container mx-auto px-4">
            <NavLinks isMobile={true} />
            
            <div className="mt-6 space-y-4 text-center">
              <Link 
                to="/login" 
                className="inline-flex items-center text-sm justify-center w-full px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#faa307] text-black text-sm rounded-full hover:bg-[#ffc42d] transition-all duration-300"
              >
                Sign Up
              </Link>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="absolute top-6 right-6 text-white hover:text-[#faa307] transition-colors"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
