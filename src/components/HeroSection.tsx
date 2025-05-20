
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 bg-hero-pattern relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-vibePrimary/10 to-vibeDark/30 mix-blend-multiply"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white">
              Download Any Video <br /><span className="text-white/90">From Any Platform</span>
            </h1>
            
            <p className="text-lg mb-8 text-white/80 max-w-md">
              A free and ad-free Android app that lets you download videos from YouTube, Instagram, TikTok, Facebook, Spotify, and X.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-vibeRed hover:bg-red-600 text-white" asChild>
                <a href="https://github.com/naeem5877/VibeDownloader-Android/releases/download/download/VibeDownloader.apk">
                  <Download className="mr-2 h-5 w-5" /> Download Now
                </a>
              </Button>
              
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30" asChild>
                <a href="#features">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-vibePrimary to-vibeRed opacity-30 blur-md rounded-[32px]"></div>
              <img 
                src="/lovable-uploads/aec33016-fa83-47ec-a9f0-60c75069e332.png" 
                alt="VibeDownloader App Interface" 
                className="relative z-10 w-72 h-auto animate-float"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-80">
          <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="h-8" />
          <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" className="h-8" />
          <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" className="h-8" />
          <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" className="h-8" />
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968819.png" alt="Spotify" className="h-8" />
          <img src="https://cdn-icons-png.flaticon.com/512/2504/2504947.png" alt="X (Twitter)" className="h-7" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
