
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-vibeDark text-vibeSecondary relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/8031c0f7-2701-4cb3-a727-dc735c0c47b9.png" 
                alt="VibeDownloader Logo" 
                className="w-12 h-12"
              />
              <span className="font-bold text-2xl">VibeDownloader</span>
            </div>
            <p className="text-vibeSecondary/70 mb-6 text-lg">
              Free and ad-free video downloader for all major social platforms.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-vibeSecondary/70 hover:text-vibeSecondary transition-colors hover-lift">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="#" className="text-vibeSecondary/70 hover:text-vibeSecondary transition-colors hover-lift">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-vibeSecondary/70 hover:text-vibeSecondary transition-colors hover-lift">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-vibeSecondary/70 hover:text-vibeSecondary transition-colors text-lg">Home</a></li>
              <li><a href="#features" className="text-vibeSecondary/70 hover:text-vibeSecondary transition-colors text-lg">Features</a></li>
              <li><a href="#how-it-works" className="text-vibeSecondary/70 hover:text-vibeSecondary transition-colors text-lg">How It Works</a></li>
              <li><a href="#platforms" className="text-vibeSecondary/70 hover:text-vibeSecondary transition-colors text-lg">Platforms</a></li>
              <li><a href="#faq" className="text-vibeSecondary/70 hover:text-vibeSecondary transition-colors text-lg">FAQ</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bold text-xl mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-vibeSecondary/70 hover:text-vibeSecondary transition-colors text-lg">Privacy Policy</a></li>
              <li><a href="#" className="text-vibeSecondary/70 hover:text-vibeSecondary transition-colors text-lg">Terms of Use</a></li>
              <li><a href="#" className="text-vibeSecondary/70 hover:text-vibeSecondary transition-colors text-lg">DMCA</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bold text-xl mb-6">Download</h3>
            <p className="text-vibeSecondary/70 mb-6 text-lg">Get VibeDownloader for Android</p>
            <Button className="premium-button glow-effect w-full group" asChild>
              <a href="https://github.com/naeem5877/VibeDownloader-Android/releases/download/download/VibeDownloader.apk" className="py-6 text-lg">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" /> Download APK
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-vibeSecondary/10 mt-16 pt-8 text-center">
          <p className="text-vibeSecondary/50 text-lg">&copy; {currentYear} VibeDownloader. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
