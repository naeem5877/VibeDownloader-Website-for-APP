
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-vibeDark/90 backdrop-blur-lg shadow-premium py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/8031c0f7-2701-4cb3-a727-dc735c0c47b9.png" 
            alt="VibeDownloader Logo" 
            className="w-10 h-10"
          />
          <span className="font-bold text-xl text-vibeSecondary">VibeDownloader</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="font-medium text-vibeSecondary/80 hover:text-vibeSecondary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-vibeSecondary/40 after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">Features</a>
          <a href="#how-it-works" className="font-medium text-vibeSecondary/80 hover:text-vibeSecondary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-vibeSecondary/40 after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">How It Works</a>
          <a href="#platforms" className="font-medium text-vibeSecondary/80 hover:text-vibeSecondary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-vibeSecondary/40 after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">Platforms</a>
          <Link to="/blog" className="font-medium text-vibeSecondary/80 hover:text-vibeSecondary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-vibeSecondary/40 after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">Blog</Link>
          <a href="#faq" className="font-medium text-vibeSecondary/80 hover:text-vibeSecondary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-vibeSecondary/40 after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">FAQ</a>
          <Link to="/privacy-policy" className="font-medium text-vibeSecondary/80 hover:text-vibeSecondary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-vibeSecondary/40 after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300">Privacy</Link>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <Button className="premium-button mr-4" asChild>
            <a href="https://github.com/naeem5877/VibeDownloader-Android/releases/download/download/VibeDownloader.apk">
              <Download className="h-4 w-4" />
            </a>
          </Button>
          <button 
            onClick={toggleMobileMenu}
            className="text-vibeSecondary p-2"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-vibeSecondary mb-1.5 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-vibeSecondary mb-1.5 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-vibeSecondary transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Desktop download button */}
        <div className="hidden md:block">
          <Button className="premium-button glow-effect" asChild>
            <a href="https://github.com/naeem5877/VibeDownloader-Android/releases/download/download/VibeDownloader.apk">
              <Download className="mr-2 h-4 w-4" /> Download
            </a>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-vibeDark/95 backdrop-blur-md border-t border-vibeSecondary/10 animate-slide-up">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features"
                className="font-medium text-vibeSecondary/80 hover:text-vibeSecondary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="font-medium text-vibeSecondary/80 hover:text-vibeSecondary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#platforms" 
                className="font-medium text-vibeSecondary/80 hover:text-vibeSecondary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Platforms
              </a>
              <Link 
                to="/blog" 
                className="font-medium text-vibeSecondary/80 hover:text-vibeSecondary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <a 
                href="#faq" 
                className="font-medium text-vibeSecondary/80 hover:text-vibeSecondary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <Link 
                to="/privacy-policy" 
                className="font-medium text-vibeSecondary/80 hover:text-vibeSecondary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Privacy
              </Link>
              <Button className="premium-button glow-effect w-full" asChild>
                <a 
                  href="https://github.com/naeem5877/VibeDownloader-Android/releases/download/download/VibeDownloader.apk"
                  onClick={() => setMobileMenuOpen(false)}
                  className="justify-center"
                >
                  <Download className="mr-2 h-4 w-4" /> Download APK
                </a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
