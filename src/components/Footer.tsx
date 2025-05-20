
import React from "react";
import { Button } from "@/components/ui/button";
import { Youtube, Instagram, Download } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-vibeDark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/8031c0f7-2701-4cb3-a727-dc735c0c47b9.png" 
                alt="VibeDownloader Logo" 
                className="w-10 h-10"
              />
              <span className="font-bold text-xl">VibeDownloader</span>
            </div>
            <p className="text-gray-400 mb-4">
              Free and ad-free video downloader for all major social platforms.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</a></li>
              <li><a href="#platforms" className="text-gray-400 hover:text-white">Platforms</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">DMCA</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Download</h3>
            <p className="text-gray-400 mb-4">Get VibeDownloader for Android</p>
            <Button className="bg-vibeRed hover:bg-red-600 text-white w-full" asChild>
              <a href="https://github.com/naeem5877/VibeDownloader-Android/releases/download/download/VibeDownloader.apk">
                <Download className="mr-2 h-4 w-4" /> Download APK
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} VibeDownloader. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
