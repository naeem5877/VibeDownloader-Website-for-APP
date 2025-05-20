
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 bg-vibeDark relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-vibeDark to-vibePrimary mix-blend-multiply"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-vibeSecondary">
              Download Any Video <br /><span className="text-vibeAccent">From Any Platform</span>
            </h1>
            
            <p className="text-lg mb-8 text-vibeSecondary/80 max-w-md">
              A free and ad-free Android app that lets you download videos from YouTube, Instagram, TikTok, Facebook, Spotify, and X.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="premium-button group" asChild>
                <a href="https://github.com/naeem5877/VibeDownloader-Android/releases/download/download/VibeDownloader.apk">
                  <Download className="mr-2 h-5 w-5" /> Download Now
                </a>
              </Button>
              
              <Button size="lg" variant="outline" className="bg-transparent border border-vibeSecondary/30 text-vibeSecondary hover:bg-vibeSecondary/10" asChild>
                <a href="#features">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-vibeSecondary to-vibeAccent opacity-20 blur-md rounded-[32px]"></div>
              <img 
                src="/lovable-uploads/aec33016-fa83-47ec-a9f0-60c75069e332.png" 
                alt="VibeDownloader App Interface" 
                className="relative z-10 w-72 h-auto animate-float"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-10 opacity-60">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="YouTube" className="h-6 invert" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" className="h-6 invert" />
          <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" alt="TikTok" className="h-7 invert" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" className="h-6 invert" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify" className="h-6 invert" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023.svg" alt="X (Twitter)" className="h-5 invert" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
