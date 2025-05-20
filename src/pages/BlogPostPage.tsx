import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Calendar, ArrowLeft } from "lucide-react";

const blogPostsContent = {
  "how-to-download": {
    title: "How to Download Videos with VibeDownloader",
    date: "May 15, 2025",
    image: "https://cdn-icons-png.flaticon.com/512/2991/2991600.png",
    content: `
      <h2>Getting Started with VibeDownloader</h2>
      <p>Downloading your favorite videos has never been easier. VibeDownloader provides a simple, intuitive interface that makes downloading content from various platforms a breeze.</p>
      
      <h3>Step 1: Install the App</h3>
      <p>First, download the VibeDownloader app from our website or trusted app stores. The installation process is quick and straightforward.</p>
      
      <h3>Step 2: Copy the Video URL</h3>
      <p>Navigate to the video you want to download on any supported platform (YouTube, Instagram, TikTok, etc.). Copy the URL of the video by using the share button or copying from the address bar.</p>
      
      <h3>Step 3: Paste the URL in VibeDownloader</h3>
      <p>Open VibeDownloader and paste the URL in the provided field. The app will automatically detect the platform and prepare the download options.</p>
      
      <h3>Step 4: Select Quality and Format</h3>
      <p>Choose your preferred quality and format. VibeDownloader offers various options depending on the source, including HD, 4K, and audio-only formats.</p>
      
      <h3>Step 5: Download</h3>
      <p>Click the download button and wait for the process to complete. Your download will be saved to your device's storage in the location you've configured.</p>
      
      <h2>Advanced Features</h2>
      <p>VibeDownloader offers several advanced features to enhance your downloading experience:</p>
      <ul>
        <li>Batch downloading multiple videos at once</li>
        <li>Scheduled downloads for optimal bandwidth usage</li>
        <li>Custom output folders for organized media management</li>
        <li>Integrated media player for preview before downloading</li>
      </ul>
      
      <h2>Troubleshooting Common Issues</h2>
      <p>If you encounter any problems while using VibeDownloader, try these solutions:</p>
      <ul>
        <li>Ensure you have the latest version of the app installed</li>
        <li>Check your internet connection</li>
        <li>Verify that the video is available for public viewing</li>
        <li>Clear the app cache if you experience performance issues</li>
      </ul>
      
      <p>With these simple steps, you'll be downloading your favorite content in no time. VibeDownloader makes the process efficient, fast, and hassle-free.</p>
    `
  },
  "ad-free-experience": {
    title: "Enjoy An Ad-Free Experience",
    date: "May 12, 2025",
    image: "https://cdn-icons-png.flaticon.com/512/7837/7837572.png",
    content: `
      <h2>Why We Chose to Be Ad-Free</h2>
      <p>At VibeDownloader, we believe that software should serve the user, not advertisers. That's why we've made the conscious decision to keep our application completely free of advertisements.</p>
      
      <h3>The Problem with Ad-Supported Apps</h3>
      <p>Many free downloading applications bombard users with intrusive advertisements, pop-ups, and even questionable redirects. These not only disrupt the user experience but can also pose security risks and consume bandwidth.</p>
      
      <h3>Our User-First Approach</h3>
      <p>We've prioritized creating a clean, distraction-free interface that lets you focus on what matters: downloading your content quickly and efficiently. No banners, no pop-ups, no video ads—just a seamless downloading experience.</p>
      
      <h2>How We Maintain Quality Without Ads</h2>
      <p>You might wonder how we maintain a high-quality application without ad revenue. Our approach focuses on:</p>
      <ul>
        <li>Efficient development and resource allocation</li>
        <li>Community-driven improvements and bug reporting</li>
        <li>Optional donations from satisfied users</li>
        <li>Minimal server costs through optimized architecture</li>
      </ul>
      
      <h2>The Benefits of an Ad-Free Experience</h2>
      <p>Using an ad-free application like VibeDownloader offers numerous advantages:</p>
      <ul>
        <li>Faster performance without ad scripts running in the background</li>
        <li>Reduced data usage and battery consumption</li>
        <li>Enhanced privacy with fewer tracking mechanisms</li>
        <li>More screen space dedicated to actual functionality</li>
        <li>A more pleasant overall user experience</li>
      </ul>
      
      <h2>Our Commitment</h2>
      <p>We remain committed to keeping VibeDownloader ad-free. We believe that great software can exist without compromising on user experience or privacy, and we're proud to offer an alternative to the ad-saturated landscape of free applications.</p>
      
      <p>Experience the difference yourself—download VibeDownloader today and enjoy downloading your favorite content without interruptions.</p>
    `
  },
  "modern-design": {
    title: "The Modern Design of VibeDownloader",
    date: "May 10, 2025",
    image: "https://cdn-icons-png.flaticon.com/512/9407/9407508.png",
    content: `
      <h2>Design Philosophy</h2>
      <p>VibeDownloader's interface represents a perfect blend of aesthetics and functionality. Our design team has focused on creating an experience that's not only visually appealing but also intuitive and efficient.</p>
      
      <h3>The Dark Mode Advantage</h3>
      <p>We've embraced a sleek dark theme with silver accents that reduces eye strain during extended use, especially in low-light environments. This color scheme also contributes to lower battery consumption on OLED displays.</p>
      
      <h3>Minimalist Interface</h3>
      <p>By eliminating unnecessary elements and focusing on essential features, we've created a clutter-free experience that allows users to accomplish their tasks with minimal distractions.</p>
      
      <h2>User-Centric Experience</h2>
      <p>Every aspect of VibeDownloader's design has been crafted with the user in mind:</p>
      <ul>
        <li>Thoughtfully placed controls that are easily accessible with one hand</li>
        <li>Consistent visual hierarchy that guides users through the application</li>
        <li>Subtle animations that provide feedback without being distracting</li>
        <li>Adaptive layout that works beautifully across various screen sizes</li>
        <li>Haptic feedback that enhances the tactile experience</li>
      </ul>
      
      <h2>Accessibility Features</h2>
      <p>We believe that great design should be inclusive. VibeDownloader incorporates numerous accessibility features:</p>
      <ul>
        <li>High contrast mode for users with visual impairments</li>
        <li>Screen reader compatibility throughout the application</li>
        <li>Customizable text sizing to accommodate different visual needs</li>
        <li>Thoughtful color choices that account for color blindness</li>
      </ul>
      
      <h2>Performance-Oriented Design</h2>
      <p>Beyond aesthetics, our design decisions are guided by performance considerations:</p>
      <ul>
        <li>Optimized graphics that load quickly even on older devices</li>
        <li>Efficient use of system resources to maximize battery life</li>
        <li>Smooth transitions that don't impact overall responsiveness</li>
        <li>Offline-first approach that keeps the app functional without internet</li>
      </ul>
      
      <p>VibeDownloader's modern design isn't just about looking good—it's about creating an experience that feels natural, performs excellently, and helps you accomplish your goals without getting in the way.</p>
    `
  },
  // Other blog posts would be defined similarly
};

const BlogPostPage = () => {
  const { postId } = useParams();
  const post = blogPostsContent[postId as keyof typeof blogPostsContent];
  
  useEffect(() => {
    // Scroll to top when navigating to a blog post
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-vibeDark text-vibeSecondary">
        <Header />
        <main className="flex-grow pt-32 pb-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Blog Post Not Found</h1>
            <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
            <Link to="/blog" className="premium-button py-2 px-6 rounded-lg inline-flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-vibeDark text-vibeSecondary">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-vibeSecondary/70 hover:text-vibeSecondary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Link>
            
            <div className="mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">{post.title}</h1>
              <div className="flex items-center text-vibeSecondary/60 text-sm mb-10">
                <div className="flex items-center mr-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Blog Post</span>
                </div>
              </div>
              
              <div className="w-full h-64 md:h-96 relative mb-10 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <div className="w-full h-full bg-vibeGray flex items-center justify-center">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-32 h-32 invert opacity-70"
                  />
                </div>
              </div>
            </div>
            
            <div className="neo-card p-8 md:p-12 rounded-xl">
              <div 
                className="blog-content text-vibeSecondary/80 space-y-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
