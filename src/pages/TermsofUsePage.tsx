import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const TermsOfUsePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-vibeDark text-vibeSecondary"
    >
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-vibeSecondary/10 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-vibeSecondary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">Terms of Use</h1>
              <p className="text-xl text-vibeSecondary/80 max-w-3xl mx-auto">
                Please read these terms carefully before using our service
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="neo-card p-8 md:p-12 rounded-xl space-y-8"
            >
              <section>
                <h2 className="text-2xl font-bold mb-4 text-vibeSecondary">Agreement to Terms</h2>
                <p className="text-vibeSecondary/80 mb-4">
                  By accessing or using VibeDownloader, you agree to be bound by these Terms of Use. If you disagree with any part of these terms, you may not access or use our service.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4 text-vibeSecondary">Service Description</h2>
                <p className="text-vibeSecondary/80 mb-4">
                  VibeDownloader is a web application that allows users to download publicly available videos from various platforms for personal use. We provide this service as a convenience to our users, acting as an intermediary between you and the source platforms.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4 text-vibeSecondary">Acceptable Use</h2>
                <p className="text-vibeSecondary/80 mb-4">
                  You agree to use VibeDownloader only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of our service complies with all applicable laws, including copyright laws and the terms of service of the platforms from which you are downloading content.
                </p>
                <p className="text-vibeSecondary/80 mb-4">
                  You shall not use our service to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-vibeSecondary/80">
                  <li>Download content that infringes on the intellectual property rights of others</li>
                  <li>Download content for commercial purposes without proper authorization</li>
                  <li>Distribute, publicly display, or publicly perform downloaded content without permission</li>
                  <li>Engage in any activity that disrupts or interferes with our service</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Use automated means to access or use our service without our express permission</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4 text-vibeSecondary">Fair Use and Copyright</h2>
                <p className="text-vibeSecondary/80 mb-4">
                  VibeDownloader is designed to help users exercise their fair use rights under copyright law. Fair use typically includes downloading content for personal viewing, research, criticism, or educational purposes.
                </p>
                <p className="text-vibeSecondary/80 mb-4">
                  We respect the intellectual property rights of others and expect our users to do the same. We do not encourage or condone copyright infringement. If you are unsure whether your intended use of downloaded content is legal, we recommend consulting with a legal professional.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4 text-vibeSecondary">Disclaimer of Warranties</h2>
                <p className="text-vibeSecondary/80 mb-4">
                  VibeDownloader is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that our service will be uninterrupted, secure, or error-free.
                </p>
                <p className="text-vibeSecondary/80">
                  We make no warranties regarding the quality, accuracy, reliability, or availability of our service or any content downloaded through our service.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4 text-vibeSecondary">Limitation of Liability</h2>
                <p className="text-vibeSecondary/80">
                  In no event shall VibeDownloader, its operators, affiliates, or partners be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our service, including but not limited to damages for loss of profits, data, use, or other intangible losses.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4 text-vibeSecondary">Service Modifications</h2>
                <p className="text-vibeSecondary/80">
                  We reserve the right to modify, suspend, or discontinue our service, either temporarily or permanently, at any time without prior notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of our service.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4 text-vibeSecondary">Changes to These Terms</h2>
                <p className="text-vibeSecondary/80">
                  We may update these Terms of Use from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date below. We encourage you to review these Terms periodically for any changes.
                </p>
                <p className="text-vibeSecondary/80 mt-4">
                  Last updated: May 20, 2025
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4 text-vibeSecondary">Contact Us</h2>
                <p className="text-vibeSecondary/80">
                  If you have any questions about our Terms of Use, please contact us at terms@vibedownloader.me.
                </p>
              </section>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default TermsOfUsePage;
