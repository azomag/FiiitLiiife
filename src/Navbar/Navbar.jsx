import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Dumbbell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navbarRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (name) => setOpenDropdown(openDropdown === name ? null : name);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className={`relative px-4 py-2 font-medium text-gray-800 hover:text-red-600 transition-all
        after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px]
        after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0
        ${location.pathname === to ? 'text-red-600 after:w-full after:left-0' : ''}`}
    >
      {children}
    </Link>
  );

  const Dropdown = ({ title, links }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          onClick={() => toggleDropdown(title)}
          className="flex items-center px-4 py-2 font-medium text-gray-800 transition-all hover:text-red-600"
        >
          {title}
          <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${openDropdown === title ? 'rotate-180' : ''}`} />
        </button>
        
        <div 
          className={`absolute top-full left-0 w-48 bg-white shadow-2xl rounded-xl py-2 mt-1
            origin-top transition-all duration-300 ${openDropdown === title || isHovered ? 
            'scale-y-100 opacity-100' : 'scale-y-75 opacity-0'}`}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 gap-2
                transition-all hover:pl-8 group"
            >
              <span className="w-2 h-[2px] bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <nav 
      ref={navbarRef}
      className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
          >
            <Dumbbell className="w-8 h-8 text-red-600 group-hover:rotate-[30deg] transition-transform" />
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              FitLife
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            
            <Dropdown
              title="Programs"
              links={[
                { to: '/about-programs', label: 'About Programs' },
                { to: '/workout', label: 'Workout' },
                { to: '/personal-trainer', label: 'Personal Trainer' },
              ]}
            />

            <div className="flex items-center gap-4 ml-4">
              <NavLink to="/login">Login</NavLink>
              <Link
                to="/signup"
                className="relative bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-2.5 
                  rounded-full shadow-lg hover:shadow-red-200/50 hover:scale-[1.02] transition-all
                  overflow-hidden group"
              >
                <span className="relative z-10">Sign Up</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-red-600 p-2 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X size={24} className="stroke-[2.5]" />
              ) : (
                <Menu size={24} className="stroke-[2.5]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="pt-4 pb-6 space-y-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            
            <div className="border-t border-gray-100 pt-4">
              <button
                onClick={() => toggleDropdown('mobile-programs')}
                className="w-full flex justify-between items-center px-4 py-2 text-gray-800 font-medium"
              >
                Programs
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-programs' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'mobile-programs' && (
                <div className="pl-6 space-y-2 mt-2">
                  {[
                    { to: '/about-programs', label: 'About Programs' },
                    { to: '/workout', label: 'Workout' },
                    { to: '/personal-trainer', label: 'Personal Trainer' },
                  ].map((link, index) => (
                    <Link
                      key={index}
                      to={link.to}
                      className="block px-4 py-3 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg
                        transition-all"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-4">
              <NavLink to="/login">Login</NavLink>
              <Link
                to="/signup"
                className="block text-center bg-red-600 text-white px-6 py-3.5 rounded-lg shadow 
                  hover:bg-red-700 transition-colors font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;