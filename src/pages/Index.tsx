
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PlatformsSection from "@/components/PlatformsSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const Index = () => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
      className="min-h-screen flex flex-col bg-vibeDark text-vibeSecondary"
    >
      <Helmet>
        <title>VibeDownloader (Vibe Downloader) - Premium Video Downloader for YouTube, Instagram, TikTok & More</title>
        <meta name="description" content="Download videos from YouTube, TikTok, Instagram, Facebook, Spotify and X (Twitter) in high quality with VibeDownloader (Vibe Downloader). Free, ad-free, no watermarks!" />
        <meta name="keywords" content="VibeDownloader, Vibe Downloader, video downloader, YouTube downloader, YouTube video download, TikTok video download, Instagram reels download, Facebook video download" />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PlatformsSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
