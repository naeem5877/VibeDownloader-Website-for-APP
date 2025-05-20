
import React from "react";

const platforms = [
  {
    name: "YouTube",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
    color: "#333333",
    features: [
      "Download videos in 8K, 4K, 1080p, 720p",
      "Extract audio in MP3 format",
      "Download shorts and playlists"
    ]
  },
  {
    name: "Instagram",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
    color: "#333333",
    features: [
      "Download reels and videos",
      "Save stories and IGTV content",
      "Download profile pictures in HD"
    ]
  },
  {
    name: "TikTok",
    icon: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
    color: "#333333",
    features: [
      "Download TikToks without watermark",
      "Save videos in highest quality",
      "Quick batch download option"
    ]
  },
  {
    name: "Facebook",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    color: "#333333",
    features: [
      "Download public and private videos",
      "Save Facebook reels and stories",
      "Download live videos after broadcast"
    ]
  },
  {
    name: "Spotify",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    color: "#333333",
    features: [
      "Download podcast episodes",
      "Save album covers in HD",
      "Extract audio from videos"
    ]
  },
  {
    name: "X (Twitter)",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023.svg",
    color: "#333333",
    features: [
      "Download tweets with videos",
      "Save spaces recordings",
      "High-quality media extraction"
    ]
  }
];

const PlatformsSection = () => {
  return (
    <section id="platforms" className="py-20 bg-vibePrimary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Supported Platforms</h2>
          <p className="text-lg text-vibeSecondary/80 max-w-2xl mx-auto">
            Download content from all major social media platforms with ease
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div 
              key={index} 
              className="bg-vibeDark rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-vibeSecondary/20"
            >
              <div 
                className="h-1" 
                style={{ backgroundColor: platform.color }}
              ></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-vibeSecondary/10 rounded-full flex items-center justify-center mr-4">
                    <img 
                      src={platform.icon} 
                      alt={platform.name} 
                      className="w-6 h-6 invert" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-vibeSecondary">{platform.name}</h3>
                </div>
                <ul className="space-y-2">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-vibeSecondary/70">
                      <span className="mr-2 text-vibeSecondary">✓</span>
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
