
import React from "react";

const platforms = [
  {
    name: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    color: "#070707",
    features: [
      "Download videos in 8K, 4K, 1080p, 720p",
      "Extract audio in MP3 format",
      "Download shorts and playlists"
    ]
  },
  {
    name: "Instagram",
    icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    color: "#070707",
    features: [
      "Download reels and videos",
      "Save stories and IGTV content",
      "Download profile pictures in HD"
    ]
  },
  {
    name: "TikTok",
    icon: "https://cdn-icons-png.flaticon.com/512/3938/3938074.png",
    color: "#070707",
    features: [
      "Download TikToks without watermark",
      "Save videos in highest quality",
      "Quick batch download option"
    ]
  },
  {
    name: "Facebook",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
    color: "#070707",
    features: [
      "Download public and private videos",
      "Save Facebook reels and stories",
      "Download live videos after broadcast"
    ]
  },
  {
    name: "Spotify",
    icon: "https://cdn-icons-png.flaticon.com/512/2111/2111624.png",
    color: "#070707",
    features: [
      "Download podcast episodes",
      "Save album covers in HD",
      "Extract audio from videos"
    ]
  },
  {
    name: "X (Twitter)",
    icon: "https://cdn-icons-png.flaticon.com/512/5969/5969020.png",
    color: "#070707",
    features: [
      "Download tweets with videos",
      "Save spaces recordings",
      "High-quality media extraction"
    ]
  }
];

const PlatformsSection = () => {
  return (
    <section id="platforms" className="py-24 bg-vibePrimary relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-vibeDark to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient inline-block">Supported Platforms</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-vibeSecondary to-vibeAccent mx-auto opacity-50 rounded-full"></div>
          <p className="text-xl mt-6 text-vibeSecondary/80 max-w-2xl mx-auto">
            Download content from all major social media platforms with ease
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div 
              key={index} 
              className="neo-card hover-lift overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-vibeSecondary/20 to-transparent rounded-xl flex items-center justify-center mr-4 shimmer">
                    <img 
                      src={platform.icon} 
                      alt={platform.name} 
                      className="w-10 h-10" 
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-vibeSecondary">{platform.name}</h3>
                </div>
                <ul className="space-y-3">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-vibeSecondary/70 text-lg">
                      <span className="mr-3 text-vibeSecondary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
