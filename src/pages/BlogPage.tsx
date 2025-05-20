
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "how-to-download",
    title: "How to Download Videos with VibeDownloader",
    description: "Learn how to download your favorite videos from YouTube, Instagram, TikTok and more in just a few simple steps.",
    date: "May 15, 2025",
    image: "https://cdn-icons-png.flaticon.com/512/2991/2991600.png"
  },
  {
    id: "ad-free-experience",
    title: "Enjoy An Ad-Free Experience",
    description: "Unlike other downloaders, VibeDownloader is completely ad-free. No annoying pop-ups or intrusive advertising.",
    date: "May 12, 2025",
    image: "https://cdn-icons-png.flaticon.com/512/7837/7837572.png"
  },
  {
    id: "modern-design",
    title: "The Modern Design of VibeDownloader",
    description: "Explore the sleek, intuitive interface of VibeDownloader and how it enhances your video downloading experience.",
    date: "May 10, 2025",
    image: "https://cdn-icons-png.flaticon.com/512/9407/9407508.png"
  },
  {
    id: "download-formats",
    title: "Understanding Video and Audio Formats",
    description: "A comprehensive guide to the different video and audio formats available when downloading content.",
    date: "May 8, 2025",
    image: "https://cdn-icons-png.flaticon.com/512/7971/7971483.png"
  },
  {
    id: "privacy-first",
    title: "Why We Put Your Privacy First",
    description: "Learn about our commitment to user privacy and how we ensure your data remains secure when using VibeDownloader.",
    date: "May 5, 2025",
    image: "https://cdn-icons-png.flaticon.com/512/6819/6819292.png"
  },
  {
    id: "platform-guide",
    title: "Platform-specific Download Guide",
    description: "Detailed instructions for downloading from each supported platform: YouTube, Instagram, TikTok, Facebook, Spotify, and X.",
    date: "May 3, 2025",
    image: "https://cdn-icons-png.flaticon.com/512/5803/5803239.png"
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-vibeDark text-vibeSecondary">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient inline-block">VibeDownloader Blog</h1>
            <div className="h-1 w-48 bg-gradient-to-r from-vibeSecondary to-vibeAccent mx-auto opacity-50 rounded-full"></div>
            <p className="text-xl mt-6 text-vibeSecondary/80 max-w-3xl mx-auto">
              Learn more about our features, how to use VibeDownloader effectively, and stay updated with the latest improvements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card className="neo-card hover-lift overflow-hidden transition-all duration-300 h-full bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="w-full h-48 relative mb-6 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                        <div className="w-full h-full bg-vibeGray flex items-center justify-center">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-24 h-24 invert opacity-70"
                          />
                        </div>
                      </div>
                      <div className="flex items-center text-vibeSecondary/60 text-sm mb-2">
                        <FileText className="w-4 h-4 mr-2" />
                        <span>{post.date}</span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 text-vibeSecondary">{post.title}</h2>
                      <p className="text-vibeSecondary/70 flex-grow">{post.description}</p>
                      <div className="mt-6 pt-4 border-t border-vibeSecondary/10">
                        <span className="text-vibeSecondary/60 text-sm hover:text-vibeSecondary transition-colors inline-flex items-center">
                          Read More 
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
