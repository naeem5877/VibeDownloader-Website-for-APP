import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X, Home, BookOpen, Shield, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// Types
type NavItemType = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  isExternal?: boolean;
};

type NavLinkProps = {
  item: NavItemType;
  onClick?: () => void;
  variant: "desktop" | "mobile";
  active?: boolean;
};

// Navbar links configuration
const NAV_ITEMS: NavItemType[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Platforms", href: "#platforms" },
  { label: "FAQ", href: "#faq" },
];

const SECONDARY_NAV_ITEMS: NavItemType[] = [
  { label: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
  { label: "Blog", href: "/blog", icon: <BookOpen className="w-4 h-4" /> },
  { label: "Privacy", href: "/privacy-policy", icon: <Shield className="w-4 h-4" /> },
];

const DOWNLOAD_LINK = "https://github.com/naeem5877/VibeDownloader-Android/releases/download/download/VibeDownloader.apk";

// NavLink component with improved styling and behavior
const NavLink: React.FC<NavLinkProps> = ({ item, onClick, variant, active }) => {
  const isHashLink = item.href.startsWith('#');
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHashLink) {
      e.preventDefault();
      const targetId = item.href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (onClick) onClick();
  };

  // Styling based on variant and active state
  const baseClasses = "font-medium transition-all duration-300 flex items-center gap-2";
  const desktopClasses = `${baseClasses} relative px-3 py-2 text-vibeSecondary/90 hover:text-vibeSecondary
    ${active ? "text-vibeSecondary after:scale-x-100" : "after:scale-x-0"}
    after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
    after:bg-vibeSecondary after:origin-bottom-left after:transition-transform after:duration-300`;
  
  const mobileClasses = `${baseClasses} py-3 px-4 w-full text-vibeSecondary/80 hover:text-vibeSecondary hover:bg-vibeDark/30 rounded-lg
    ${active ? "bg-vibeDark/50 text-vibeSecondary font-semibold" : ""}`;

  const linkClasses = variant === "desktop" ? desktopClasses : mobileClasses;
  
  const LinkComponent = item.isExternal ? (
    <a 
      href={item.href}
      className={linkClasses}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {item.icon}
      {item.label}
    </a>
  ) : isHashLink ? (
    <a 
      href={item.href} 
      className={linkClasses}
      onClick={handleClick}
    >
      {item.icon}
      {item.label}
    </a>
  ) : (
    <Link 
      to={item.href} 
      className={linkClasses}
      onClick={onClick}
    >
      {item.icon}
      {item.label}
    </Link>
  );

  return LinkComponent;
};

// Header component
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Detect current path and hash for active state
  const currentPath = location.pathname;
  const currentHash = location.hash;
  const isHomePage = currentPath === "/" || currentPath === "";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Check if a navigation item is active
  const isActive = (item: NavItemType) => {
    if (item.href.startsWith('#')) {
      return currentHash === item.href && isHomePage;
    }
    return currentPath === item.href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-vibeDark/95 backdrop-blur-md shadow-premium py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 relative overflow-hidden rounded-lg">
            <img 
              src="/images/8031c0f7-2701-4cb3-a727-dc735c0c47b9.png" 
              alt="VibeDownloader Logo" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="font-bold text-xl text-vibeSecondary">
            <span className="text-vibeAccent">Vibe</span>Downloader
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          <nav className="flex items-center mr-2">
            {isHomePage && NAV_ITEMS.map((item) => (
              <NavLink 
                key={item.label} 
                item={item} 
                variant="desktop" 
                active={isActive(item)}
              />
            ))}
            
            {/* Secondary navigation with dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 font-medium text-vibeSecondary/90 hover:text-vibeSecondary transition-colors">
                More <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full right-0 w-48 py-2 mt-1 bg-vibeDark/95 backdrop-blur-md rounded-lg shadow-premium border border-vibeSecondary/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                {SECONDARY_NAV_ITEMS.map((item) => (
                  <NavLink 
                    key={item.label} 
                    item={item} 
                    variant="mobile" 
                    active={isActive(item)}
                  />
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop download button */}
          <DownloadButton variant="desktop" />
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center space-x-3 lg:hidden">
          <DownloadButton variant="mobile" />
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-vibeSecondary hover:bg-vibeDark/30 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-vibeDark/95 backdrop-blur-md border-t border-vibeSecondary/10 animate-fadeIn">
          <div className="container mx-auto py-4 space-y-2">
            {isHomePage && (
              <div className="space-y-2">
                <h3 className="text-xs font-semibold text-vibeSecondary/60 uppercase tracking-wider px-4">Navigation</h3>
                {NAV_ITEMS.map((item) => (
                  <NavLink 
                    key={item.label} 
                    item={item} 
                    onClick={() => setMobileMenuOpen(false)}
                    variant="mobile"
                    active={isActive(item)}
                  />
                ))}
              </div>
            )}
            
            <div className="space-y-2 pt-2 border-t border-vibeSecondary/10">
              <h3 className="text-xs font-semibold text-vibeSecondary/60 uppercase tracking-wider px-4">Pages</h3>
              {SECONDARY_NAV_ITEMS.map((item) => (
                <NavLink 
                  key={item.label} 
                  item={item} 
                  onClick={() => setMobileMenuOpen(false)}
                  variant="mobile"
                  active={isActive(item)}
                />
              ))}
            </div>
            
            <div className="pt-4 px-4">
              <DownloadButton variant="mobile-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Reusable Download Button component with enhanced styling
const DownloadButton: React.FC<{ variant: "desktop" | "mobile" | "mobile-full" }> = ({ variant }) => {
  if (variant === "desktop") {
    return (
      <Button 
        className="relative overflow-hidden group bg-gradient-to-br from-vibeAccent via-vibeSecondary to-vibeAccent/90 hover:bg-gradient-to-bl text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:shadow-vibeAccent/30 transition-all duration-300 transform hover:-translate-y-0.5 border border-white/10"
        asChild
      >
        <a 
          href={DOWNLOAD_LINK}
          className="flex items-center"
        >
          <span className="relative z-10 flex items-center">
            <span className="relative mr-2 bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-all duration-300">
              <Download className="h-4 w-4 group-hover:scale-110 transition-transform" />
            </span>
            <span className="relative font-medium tracking-wide">
              Download App
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
          </span>
          {/* Shine effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full ease-in-out"></span>
          {/* Subtle pulse animation */}
          <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 group-hover:animate-pulse"></span>
        </a>
      </Button>
    );
  }
  
  if (variant === "mobile") {
    return (
      <Button 
        size="sm"
        className="bg-gradient-to-br from-vibeAccent to-vibeSecondary text-white rounded-full p-2 relative overflow-hidden shadow-md hover:shadow-lg border border-white/10"
        asChild
      >
        <a href={DOWNLOAD_LINK} className="group">
          <Download className="h-4 w-4 group-hover:scale-110 transition-transform z-10 relative" />
          <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 rounded-full"></span>
        </a>
      </Button>
    );
  }
  
  // mobile-full
  return (
    <Button 
      className="w-full bg-gradient-to-br from-vibeAccent via-vibeSecondary to-vibeAccent/90 hover:bg-gradient-to-bl text-white font-medium tracking-wide rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden border border-white/10"
      asChild
    >
      <a 
        href={DOWNLOAD_LINK}
        className="flex items-center justify-center py-3"
      >
        <span className="relative z-10 flex items-center">
          <span className="bg-white/20 rounded-full p-1 mr-2 group-hover:bg-white/30 transition-all duration-300">
            <Download className="h-4 w-4 group-hover:scale-110 transition-transform" />
          </span>
          Download App
        </span>
        {/* Shine effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full ease-in-out"></span>
      </a>
    </Button>
  );
};

export default Header;