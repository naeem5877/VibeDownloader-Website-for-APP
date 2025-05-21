
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 bg-vibeDark relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-10"></div>
      <div className="absolute inset-0 bg-glow-conic opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="neo-card max-w-5xl mx-auto overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-vibeSecondary/5 to-transparent opacity-30"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-6 md:p-10">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-vibeSecondary mb-4 leading-tight">Ready to Experience <br />Premium Downloads?</h2>
              <p className="text-xl text-vibeSecondary/70 max-w-xl">
                Join thousands of users who are already enjoying ad-free, hassle-free downloading experience.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="premium-button glow-effect group" asChild>
                <a href="https://github.com/naeem5877/VibeDownloader-Website-for-APP/releases/download/vibedownloader/VibeDownloader.apk" className="px-8 py-6 text-lg whitespace-nowrap">
                  <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" /> Download APK
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
