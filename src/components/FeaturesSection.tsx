
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Multi-Platform Support",
    description: "Download videos from YouTube, Instagram, TikTok, Facebook, Spotify, and X (Twitter).",
    icon: "https://cdn-icons-png.flaticon.com/512/5803/5803239.png"
  },
  {
    title: "HD Quality Downloads",
    description: "Choose from multiple resolutions including HD, 4K and 8K when available.",
    icon: "https://cdn-icons-png.flaticon.com/512/1179/1179069.png"
  },
  {
    title: "Fast & Efficient",
    description: "Our optimized download engine ensures the fastest possible download speeds.",
    icon: "https://cdn-icons-png.flaticon.com/512/6615/6615339.png"
  },
  {
    title: "100% Ad Free",
    description: "No annoying advertisements or interruptions during your download experience.",
    icon: "https://cdn-icons-png.flaticon.com/512/7837/7837572.png"
  },
  {
    title: "No Watermarks",
    description: "All downloaded videos are clean without any added watermarks or logos.",
    icon: "https://cdn-icons-png.flaticon.com/512/6819/6819293.png"
  },
  {
    title: "Format Selection",
    description: "Download as video or extract audio in MP3 format from any supported source.",
    icon: "https://cdn-icons-png.flaticon.com/512/7971/7971483.png"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-vibePrimary relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient inline-block">Premium Features</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-vibeSecondary to-vibeAccent mx-auto opacity-50 rounded-full"></div>
          <p className="text-xl mt-6 text-vibeSecondary/80 max-w-2xl mx-auto">
            VibeDownloader offers premium features completely free, with no subscriptions or hidden costs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="neo-card hover-lift overflow-hidden transition-all duration-500 bg-zinc-900 border-zinc-800">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-vibeSecondary/20 to-transparent rounded-2xl flex items-center justify-center mb-6 shimmer">
                    <img src={feature.icon} alt={feature.title} className="w-12 h-12 invert" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-vibeSecondary">{feature.title}</h3>
                  <p className="text-vibeSecondary/70 text-lg">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
