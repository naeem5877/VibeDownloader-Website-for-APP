
import React from "react";

const platforms = [
  {
    name: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    color: "#FF0000",
    features: [
      "Download videos in 8K, 4K, 1080p, 720p",
      "Extract audio in MP3 format",
      "Download shorts and playlists"
    ]
  },
  {
    name: "Instagram",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
    color: "#E1306C",
    features: [
      "Download reels and videos",
      "Save stories and IGTV content",
      "Download profile pictures in HD"
    ]
  },
  {
    name: "TikTok",
    icon: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png",
    color: "#000000",
    features: [
      "Download TikToks without watermark",
      "Save videos in highest quality",
      "Quick batch download option"
    ]
  },
  {
    name: "Facebook",
    icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
    color: "#1877F2",
    features: [
      "Download public and private videos",
      "Save Facebook reels and stories",
      "Download live videos after broadcast"
    ]
  },
  {
    name: "Spotify",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968819.png",
    color: "#1DB954",
    features: [
      "Download podcast episodes",
      "Save album covers in HD",
      "Extract audio from videos"
    ]
  },
  {
    name: "X (Twitter)",
    icon: "https://cdn-icons-png.flaticon.com/512/2504/2504947.png",
    color: "#1DA1F2",
    features: [
      "Download tweets with videos",
      "Save spaces recordings",
      "High-quality media extraction"
    ]
  }
];

const PlatformsSection = () => {
  return (
    <section id="platforms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Supported Platforms</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download content from all major social media platforms with ease
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div 
                className="h-2" 
                style={{ backgroundColor: platform.color }}
              ></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={platform.icon} 
                    alt={platform.name} 
                    className="w-10 h-10 mr-4" 
                  />
                  <h3 className="text-xl font-bold">{platform.name}</h3>
                </div>
                <ul className="space-y-2">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="mr-2 text-green-500">✓</span>
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
