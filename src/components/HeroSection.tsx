
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 bg-vibeDark relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20"></div>
      <div className="absolute inset-0 bg-premium-dark mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-vibeSecondary">Download Any Video</span>
              <span className="text-gradient mt-2 inline-block">From Any Platform</span>
            </h1>
            
            <p className="text-lg mb-8 text-vibeSecondary/80 max-w-lg">
              A free and ad-free Android app that lets you download videos from YouTube, Instagram, TikTok, Facebook, Spotify, and X with premium quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="premium-button group glow-effect" asChild>
                <a href="https://github.com/naeem5877/VibeDownloader-Android/releases/download/download/VibeDownloader.apk" className="px-8 py-6 text-lg">
                  <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" /> Download Now
                </a>
              </Button>
              
              <Button size="lg" variant="outline" className="bg-transparent border border-vibeSecondary/30 text-vibeSecondary hover:bg-vibeSecondary/10" asChild>
                <a href="#features" className="px-8 py-6 text-lg">
                  Learn More <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-vibeSecondary/20 to-vibeAccent/20 opacity-70 blur-xl rounded-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-vibeSecondary/10 to-vibeAccent/10 opacity-20 rounded-[32px] animate-pulse-slow"></div>
              <img 
                src="/lovable-uploads/aec33016-fa83-47ec-a9f0-60c75069e332.png" 
                alt="VibeDownloader App Interface" 
                className="relative z-10 w-72 h-auto perspective-tilt hover-lift shadow-premium"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-12 opacity-60">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="YouTube" className="h-6 invert opacity-60 hover:opacity-100 transition-opacity" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" className="h-6 invert opacity-60 hover:opacity-100 transition-opacity" />
          <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" alt="TikTok" className="h-7 invert opacity-60 hover:opacity-100 transition-opacity" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" className="h-6 invert opacity-60 hover:opacity-100 transition-opacity" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify" className="h-6 invert opacity-60 hover:opacity-100 transition-opacity" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023.svg" alt="X (Twitter)" className="h-5 invert opacity-60 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
