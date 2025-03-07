/* eslint-disable react/prop-types */
import { useState, useEffect, useRef, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import { 
  Home, 
  Menu, 
  X, 
  ChevronDown,
  NotepadText,
  Dumbbell,
  User,
  Beef 
} from "lucide-react";

const NAVIGATION_ITEMS = [
  { 
    label: "Explore", 
    icon: <ChevronDown size={16} className="transition-transform" />,
    dropdown: [
      { label: "Programmes", path: "/programmes", icon: <NotepadText size={20} /> },
      { label: "Workouts", path: "/workout", icon: <Dumbbell size={20} /> },
      { label: "Nutrition", path: "/Nutrition", icon: <Beef size={20} /> },
      { label: "Personal Training", path: "/PersonalTrainer", icon: <User size={20} /> }
    ]
  },
  { label: "About", path: "/about" },
  { label: "Shop", path: "/shop" },
  { label: "Contact", path: "/contact" }
];

const NavLinks = ({ isMobile = false, onNavigate, activeDropdown, setActiveDropdown }) => {
  const dropdownRef = useRef(null);
  
  const linkStyle = isMobile 
    ? "w-full text-center py-3 hover:text-[#faa307] transition-colors"
    : "text-white font-medium hover:text-[#faa307] text-sm transition-all duration-300";

  const handleKeyDown = (e, item) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveDropdown(activeDropdown === item.label ? null : item.label);
    }
  };

  return (
    <ul 
      className={`${isMobile ? "flex-col space-y-4" : "flex space-x-6"} flex items-center`}
      role="menubar"
    >
      <li className={linkStyle} role="none">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex items-center gap-2 ${isActive ? 'text-[#faa307]' : 'text-white'}`
          }
          onClick={() => {
            isMobile && onNavigate?.();
            setActiveDropdown(null);
          }}
          role="menuitem"
        >
          <Home size={18} aria-hidden="true" /> 
          <span>Home</span>
        </NavLink>
      </li>
      
      {NAVIGATION_ITEMS.map((item) => (
        <li 
          key={item.label} 
          className={`relative group ${linkStyle}`}
          ref={item.dropdown ? dropdownRef : null}
          role="none"
        >
          {item.dropdown ? (
            <>
              <button 
                onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                onKeyDown={(e) => handleKeyDown(e, item)}
                className="flex items-center gap-2 text-white"
                aria-expanded={activeDropdown === item.label}
                aria-controls={`dropdown-${item.label}`}
                aria-haspopup="true"
                role="menuitem"
              >
                {item.label}
                <ChevronDown 
                  size={16} 
                  className={`transition-transform ${
                    activeDropdown === item.label ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div 
                id={`dropdown-${item.label}`}
                className={`
                  ${isMobile 
                    ? "relative w-full pl-4 mt-2" 
                    : `absolute top-full left-0 min-w-[250px] bg-[#000000] shadow-lg rounded-lg mt-5
                       transition-all duration-200 origin-top transform border border-white/10
                       ${activeDropdown === item.label ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`
                  }
                  z-20 p-2
                `}
                role="menu"
              >
                <ul className={`${isMobile ? "space-y-3" : "space-y-2"}`} role="none">
                  {item.dropdown.map((subItem) => (
                    <li key={subItem.path} role="none">
                      <NavLink 
                        to={subItem.path} 
                        className={({ isActive }) => 
                          `flex items-center gap-3 px-4 py-3 rounded-md transition-colors
                          ${isActive ? 'bg-[#faa307]/10 text-[#faa307]' : 'hover:bg-white/10 text-white'}`
                        }
                        onClick={() => {
                          isMobile && onNavigate?.();
                          setActiveDropdown(null);
                        }}
                        role="menuitem"
                      >
                        {subItem.icon}
                        <span>{subItem.label}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <NavLink 
              to={item.path} 
              className={({ isActive }) => 
                `flex items-center gap-2 ${isActive ? 'text-[#faa307]' : 'text-white'}`
              }
              onClick={() => {
                isMobile && onNavigate?.();
                setActiveDropdown(null);
              }}
              role="menuitem"
            >
              {item.label}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );
};

const AuthButtons = ({ isMobile = false, onNavigate }) => (
  <div className={`${isMobile ? "mt-6 space-y-4 text-center" : "hidden md:flex items-center space-x-4"}`}>
    <Link 
      to="/login" 
      className={`
        ${isMobile ? "inline-flex items-center justify-center w-full" : ""}
        px-5 py-2 text-sm border border-white text-white rounded-full 
        hover:bg-white hover:text-black hover:scale-105 transition-all duration-300
      `}
      onClick={onNavigate}
    >
      Login
    </Link>
    <Link 
      to="/signup" 
      className={`
        ${isMobile ? "inline-flex items-center justify-center w-full" : ""}
        px-6 py-2 text-sm bg-[#faa307] text-black rounded-full 
        hover:bg-[#ffc42d] hover:scale-105 transition-all duration-300
      `}
      onClick={onNavigate}
    >
      Sign Up
    </Link>
  </div>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (isMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleScroll, handleClickOutside]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav 
      className={`
        fixed top-0 left-0 w-full z-[9999] transition-all duration-300 bg-black/70 backdrop-blur-md
        ${isScrolled ? "shadow-md" : ""}
      `}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold text-[#faa307] uppercase flex items-center gap-2 hover:text-[#faa307]/80 transition-colors"
          onClick={() => setActiveDropdown(null)}
        >
          FiitLife
        </Link>

        <div className="hidden lg:block">
          <NavLinks 
            activeDropdown={activeDropdown} 
            setActiveDropdown={setActiveDropdown} 
          />
        </div>

        <AuthButtons />

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden focus:outline-none text-white"
          aria-label={`${isMenuOpen ? 'Close' : 'Open'} mobile menu`}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`
          lg:hidden fixed inset-y-0 left-0 w-full h-screen bg-black backdrop-blur-lg 
          z-40 pt-20 overflow-y-auto transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <button 
          onClick={() => setIsMenuOpen(false)} 
          className="absolute top-6 right-6 text-white hover:text-[#faa307] transition-colors"
          aria-label="Close mobile menu"
        >
          <X size={32} />
        </button>
        
        <div className="container mx-auto px-4">
          <NavLinks 
            isMobile={true} 
            onNavigate={() => setIsMenuOpen(false)}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />
          
          <AuthButtons 
            isMobile={true} 
            onNavigate={() => setIsMenuOpen(false)} 
          />
        </div>
      </div>
    </nav>
  );
}