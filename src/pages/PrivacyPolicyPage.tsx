import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-vibeDark text-vibeSecondary">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-vibeSecondary/10 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-vibeSecondary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">Privacy Policy</h1>
              <p className="text-xl text-vibeSecondary/80 max-w-3xl mx-auto">
                We respect your privacy and are committed to protecting your personal data
              </p>
            </div>
            
            <div className="neo-card p-8 md:p-12 rounded-xl space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-vibeSecondary">Our Approach to Privacy</h2>
                <p className="text-vibeSecondary/80 mb-4">
                  At VibeDownloader, we take your privacy seriously. We believe in transparency and are committed to being upfront about our data practices.
                </p>
                <p className="text-vibeSecondary/80">
                  Our application is designed with privacy in mind. We utilize API calls to fetch data for downloading videos but only collect minimal information needed to improve our service.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4 text-vibeSecondary">Website Analytics</h2>
                <p className="text-vibeSecondary/80 mb-4">
                  We use Google Analytics to understand how visitors interact with our website. This helps us improve our service and create a better experience for you.
                </p>
                <p className="text-vibeSecondary/80 mb-4">
                  Google Analytics may collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-vibeSecondary/80">
                  <li>Anonymous usage data such as pages visited</li>
                  <li>Time spent on the website</li>
                  <li>General geographic location (country/city level only)</li>
                  <li>Device type and browser information</li>
                </ul>
                <p className="text-vibeSecondary/80 mt-4">
                  This information is collected using cookies and is used in an aggregated, anonymous form. We do not use this data to personally identify individual users.
                </p>
                <p className="text-vibeSecondary/80 mt-4">
                  You can opt out of Google Analytics tracking by using browser extensions like Google Analytics Opt-out Browser Add-on or by enabling Do Not Track in your browser settings.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4 text-vibeSecondary">Information We Don't Collect</h2>
                <p className="text-vibeSecondary/80 mb-4">
                  Beyond the anonymous analytics data, VibeDownloader does not collect, store, or process:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-vibeSecondary/80">
                  <li>Personal identification information (name, email, phone number)</li>
                  <li>Unique device identifiers</li>
                  <li>Browsing history or search queries</li>
                  <li>Content of videos or media that you download</li>
                  <li>Information about your social media accounts</li>
                  <li>Precise location data</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4 text-vibeSecondary">How We Use APIs</h2>
                <p className="text-vibeSecondary/80 mb-4">
                  VibeDownloader uses APIs to communicate with supported platforms (YouTube, Instagram, TikTok, etc.) to fetch publicly available content that you request to download.
                </p>
                <p className="text-vibeSecondary/80">
                  When you enter a URL in VibeDownloader:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-vibeSecondary/80">
                  <li>We send a request to our servers that then communicates with the platform's API</li>
                  <li>The API returns information about the media (available formats, quality options, etc.)</li>
                  <li>This information is displayed to you to select your preferred download options</li>
                  <li>Once you initiate the download, the content is transferred directly to your device</li>
                  <li>No logs or records of your specific downloads are maintained on our servers</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4 text-vibeSecondary">Data Security</h2>
                <p className="text-vibeSecondary/80">
                  We take reasonable measures to protect the limited data we collect. The API requests are made securely using HTTPS encryption to protect the integrity of the data being transferred.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4 text-vibeSecondary">Third-Party Services</h2>
                <p className="text-vibeSecondary/80">
                  Apart from Google Analytics, VibeDownloader does not integrate with other third-party analytics, advertising, or tracking services. We do not sell, trade, or otherwise transfer your information to outside parties.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4 text-vibeSecondary">Changes to This Privacy Policy</h2>
                <p className="text-vibeSecondary/80">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date below.
                </p>
                <p className="text-vibeSecondary/80 mt-4">
                  Last updated: May 20, 2025
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4 text-vibeSecondary">Contact Us</h2>
                <p className="text-vibeSecondary/80">
                  If you have any questions about our Privacy Policy, please contact us at privacy@vibedownloader.me.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;