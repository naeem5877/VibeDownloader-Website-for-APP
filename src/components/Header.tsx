
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-vibeDark/80 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/8031c0f7-2701-4cb3-a727-dc735c0c47b9.png" 
            alt="VibeDownloader Logo" 
            className="w-10 h-10"
          />
          <span className="font-bold text-xl text-vibeSecondary">VibeDownloader</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="font-medium text-vibeSecondary hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="font-medium text-vibeSecondary hover:text-white transition-colors">How It Works</a>
          <a href="#platforms" className="font-medium text-vibeSecondary hover:text-white transition-colors">Platforms</a>
          <a href="#faq" className="font-medium text-vibeSecondary hover:text-white transition-colors">FAQ</a>
        </nav>

        <Button className="premium-button" asChild>
          <a href="https://github.com/naeem5877/VibeDownloader-Android/releases/download/download/VibeDownloader.apk">
            <Download className="mr-2 h-4 w-4" /> Download
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
