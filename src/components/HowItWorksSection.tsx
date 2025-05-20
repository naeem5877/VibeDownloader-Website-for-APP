
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
    <section id="how-it-works" className="py-24 bg-vibeDark relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-vibePrimary to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient inline-block">How It Works</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-vibeSecondary to-vibeAccent mx-auto opacity-50 rounded-full"></div>
          <p className="text-xl mt-6 text-vibeSecondary/80 max-w-2xl mx-auto">
            Downloading your favorite videos has never been easier. Follow these simple steps:
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-[3.5rem] right-[3.5rem] h-1 bg-gradient-to-r from-transparent via-vibeSecondary/30 to-transparent -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center relative">
                  <div className="relative z-10 mb-8">
                    <div className="absolute -inset-3 bg-gradient-to-r from-vibeSecondary/20 to-vibeAccent/20 opacity-70 blur-xl rounded-full"></div>
                    <div className="relative overflow-hidden rounded-2xl border-2 border-vibeSecondary/20 shadow-premium">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-56 h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-vibeDark/80 via-transparent to-transparent"></div>
                    </div>
                  </div>
                  
                  <div className="text-center relative z-10">
                    <div className="bg-gradient-to-r from-vibeSecondary to-vibeAccent text-vibeDark text-sm font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-vibeSecondary">{step.title}</h3>
                    <p className="text-vibeSecondary/70 text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
