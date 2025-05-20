
import React from "react";

const steps = [
  {
    number: "01",
    title: "Select Platform",
    description: "Choose from YouTube, Instagram, TikTok, Facebook, Spotify, or X (Twitter).",
    image: "/lovable-uploads/3819c56d-53d0-49fd-b035-840efcd68eb5.png"
  },
  {
    number: "02",
    title: "Enter Video URL",
    description: "Paste the link of the video you want to download.",
    image: "/lovable-uploads/cf5590aa-bb7f-4bd9-85f4-2468d3ab0119.png"
  },
  {
    number: "03",
    title: "Choose Format",
    description: "Select your preferred video quality and format.",
    image: "/lovable-uploads/a6bbf7d2-f1cc-425f-b325-63e291059888.png"
  },
  {
    number: "04",
    title: "Download & Enjoy",
    description: "Save the video directly to your gallery and enjoy anytime.",
    image: "/lovable-uploads/4aff0972-5af2-4ba1-9219-ec6e4003568e.png"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-vibeDark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">How It Works</h2>
          <p className="text-lg text-vibeSecondary/80 max-w-2xl mx-auto">
            Downloading your favorite videos has never been easier. Follow these simple steps:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-vibeSecondary to-vibeAccent opacity-20 blur-md rounded-[32px]"></div>
                <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-vibeSecondary/20 shadow-lg w-48 h-auto">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-vibeSecondary text-vibeDark text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2 text-vibeSecondary">{step.title}</h3>
                <p className="text-vibeSecondary/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
