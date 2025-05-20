
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Multi-Platform Support",
    description: "Download videos from YouTube, Instagram, TikTok, Facebook, Spotify, and X (Twitter).",
    icon: "https://cdn-icons-png.flaticon.com/512/3578/3578911.png"
  },
  {
    title: "HD Quality Downloads",
    description: "Choose from multiple resolutions including HD, 4K and 8K when available.",
    icon: "https://cdn-icons-png.flaticon.com/512/2792/2792381.png"
  },
  {
    title: "Fast & Efficient",
    description: "Our optimized download engine ensures the fastest possible download speeds.",
    icon: "https://cdn-icons-png.flaticon.com/512/5261/5261935.png"
  },
  {
    title: "100% Ad Free",
    description: "No annoying advertisements or interruptions during your download experience.",
    icon: "https://cdn-icons-png.flaticon.com/512/5756/5756215.png"
  },
  {
    title: "No Watermarks",
    description: "All downloaded videos are clean without any added watermarks or logos.",
    icon: "https://cdn-icons-png.flaticon.com/512/10367/10367182.png"
  },
  {
    title: "Format Selection",
    description: "Download as video or extract audio in MP3 format from any supported source.",
    icon: "https://cdn-icons-png.flaticon.com/512/8010/8010353.png"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Premium Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            VibeDownloader offers premium features completely free, with no subscriptions or hidden costs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-vibePrimary/10 rounded-full flex items-center justify-center mb-4">
                    <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
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
