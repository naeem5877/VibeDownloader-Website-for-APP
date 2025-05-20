import React from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 bg-vibeDark relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-noise opacity-20"></div>
      <div className="absolute inset-0 bg-premium-dark mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-vibeAccent/20 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-vibeSecondary/20 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Enhanced text content section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* Improved heading with better spacing and emphasis */}
            <div className="inline-block mb-3 px-4 py-2 bg-vibeAccent/10 backdrop-blur-sm rounded-full">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-vibeAccent" />
                <span className="text-sm font-medium text-vibeAccent">Premium Quality Downloads</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="text-vibeSecondary">Download Any Video </span>
              <span className="bg-gradient-to-r from-vibeAccent to-vibeSecondary bg-clip-text text-transparent">From Any Platform</span>
            </h1>
            
            <p className="text-xl mb-10 text-vibeSecondary/80 max-w-lg leading-relaxed">
              A free and ad-free Android app that lets you download videos from YouTube, Instagram, TikTok, Facebook, Spotify, and X with premium quality.
            </p>
            
            {/* Enhanced button container with better spacing */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              {/* Redesigned Primary Download Button */}
              <Button 
                size="lg" 
                className="relative overflow-hidden group bg-gradient-to-r from-vibeAccent via-vibeAccent/90 to-vibeSecondary text-white font-semibold px-10 py-7 rounded-xl shadow-xl shadow-vibeAccent/20 hover:shadow-vibeAccent/40 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105"
                asChild
              >
                <a 
                  href="https://github.com/naeem5877/VibeDownloader-Android/releases/download/download/VibeDownloader.apk" 
                  className="flex items-center text-lg font-medium"
                >
                  <span className="relative z-10 flex items-center">
                    <span className="bg-white/20 rounded-full p-2 mr-4">
                      <Download className="h-5 w-5 group-hover:animate-bounce transition-transform" />
                    </span>
                    <span className="flex flex-col items-start">
                      <span className="text-xs text-white/70">Free Download</span>
                      <span className="font-bold">Get VibeDownloader</span>
                    </span>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-vibeAccent/0 via-white/20 to-vibeAccent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></span>
                </a>
              </Button>
              
              {/* Redesigned Secondary Learn More Button */}
              <Button 
                size="lg" 
                variant="outline" 
                className="relative overflow-hidden group border-2 border-vibeSecondary/30 bg-vibeDark/50 backdrop-blur-sm hover:bg-vibeSecondary/10 text-vibeSecondary hover:text-white font-semibold px-10 py-7 rounded-xl hover:border-vibeSecondary/50 transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <a 
                  href="#features" 
                  className="flex items-center text-lg font-medium"
                >
                  <span className="relative z-10 flex items-center">
                    <span>Explore Features</span>
                    <span className="ml-3 w-6 h-6 rounded-full bg-vibeSecondary/20 flex items-center justify-center group-hover:bg-vibeSecondary/30 transition-all duration-300">
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-vibeSecondary/0 via-vibeSecondary/10 to-vibeSecondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></span>
                </a>
              </Button>
            </div>
            
            {/* Social proof section */}
            <div className="mt-12 flex items-center justify-center md:justify-start space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 border-2 border-vibeDark flex items-center justify-center text-xs text-white font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="text-vibeSecondary font-medium">1000+ users</span>
                <span className="text-vibeSecondary/70 block">trust VibeDownloader</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced image section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Improved image glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-vibeSecondary/30 to-vibeAccent/30 opacity-80 blur-xl rounded-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-vibeSecondary/10 to-vibeAccent/10 opacity-30 rounded-3xl animate-pulse-slow"></div>
              
              {/* Main app image with enhanced styling */}
              <div className="relative z-10 p-2 bg-gradient-to-br from-vibeSecondary/20 to-vibeAccent/20 rounded-3xl backdrop-blur-sm">
                <img 
                  src="/images/aec33016-fa83-47ec-a9f0-60c75069e332.png" 
                  alt="VibeDownloader App Interface" 
                  className="w-72 h-auto rounded-2xl perspective-tilt hover-lift shadow-premium transition-all duration-300 transform hover:scale-105"
                />
                
                {/* Floating feature badges */}
                <div className="absolute -left-16 top-1/4 bg-vibeDark/80 backdrop-blur-md px-4 py-2 rounded-full border border-vibeSecondary/20 shadow-xl animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-vibeAccent"></div>
                    <span className="text-xs font-medium text-white">Ad-free experience</span>
                  </div>
                </div>
                
                <div className="absolute -right-20 bottom-1/4 bg-vibeDark/80 backdrop-blur-md px-4 py-2 rounded-full border border-vibeSecondary/20 shadow-xl animate-float-delay">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-vibeSecondary"></div>
                    <span className="text-xs font-medium text-white">Premium quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced platform section */}
        <div className="mt-20 relative">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-vibeSecondary/20 to-transparent transform -translate-y-1/2"></div>
          <h3 className="text-center text-vibeSecondary/70 text-sm uppercase tracking-wider mb-8 font-medium">Download from your favorite platforms</h3>
          
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
            {/* Platform icons with enhanced hover effects */}
            {[
              { name: "YouTube", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png", color: "from-red-500/20 to-red-600/20" },
              { name: "Instagram", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg", color: "from-purple-500/20 to-pink-500/20" },
              { name: "TikTok", logo: "https://static.wikia.nocookie.net/logopedia/images/2/27/TikTok_old_app_icon.svg", color: "from-cyan-500/20 to-blue-500/20" },
              { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png", color: "from-blue-600/20 to-blue-700/20" },
              { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", color: "from-green-500/20 to-green-600/20" },
              { name: "X (Twitter)", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/X_icon.svg", color: "from-gray-700/20 to-gray-900/20" }
            ].map((platform, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative p-3 bg-vibeDark/50 backdrop-blur-sm rounded-full border border-white/5 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-white/20">
                  <img 
                    src={platform.logo} 
                    alt={platform.name} 
                    className="h-8 w-8 object-contain" 
                  />
                </div>
                <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs text-vibeSecondary/60 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;