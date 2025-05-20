
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 bg-vibeDark relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-vibeSecondary mb-4">Ready to Download Your Videos?</h2>
            <p className="text-lg text-vibeSecondary/70 max-w-xl">
              Join thousands of users who are already enjoying ad-free, hassle-free downloading experience.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="premium-button shimmer" asChild>
              <a href="https://github.com/naeem5877/VibeDownloader-Android/releases/download/download/VibeDownloader.apk">
                <Download className="mr-2 h-5 w-5" /> Download APK
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
