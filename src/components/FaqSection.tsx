
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Is VibeDownloader really free?",
    answer: "Yes, VibeDownloader is 100% free to download and use. We don't charge any fees, and there are no in-app purchases or subscriptions."
  },
  {
    question: "Are there any ads in the app?",
    answer: "No, VibeDownloader is completely ad-free. We believe in providing a clean and uninterrupted user experience without annoying pop-ups or banner ads."
  },
  {
    question: "Is it legal to download videos from social media?",
    answer: "VibeDownloader is designed for downloading content for personal use only. Always respect copyright laws and the terms of service of the platforms you're downloading from. Never use downloaded content for commercial purposes without proper authorization."
  },
  {
    question: "Which video formats are supported?",
    answer: "VibeDownloader supports a wide range of formats including MP4, WEBM, and MP3 for audio extraction. You can select from various quality options ranging from 360p to 8K (when available)."
  },
  {
    question: "Do the downloaded videos have watermarks?",
    answer: "No, videos downloaded with VibeDownloader don't have any watermarks added by our app. You get clean downloads exactly as they appear on the original platform."
  },
  {
    question: "Is VibeDownloader available for iOS?",
    answer: "Currently, VibeDownloader is only available for Android devices. We may consider developing an iOS version in the future based on user demand."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 bg-vibePrimary relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-vibeDark to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient inline-block">Frequently Asked Questions</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-vibeSecondary to-vibeAccent mx-auto opacity-50 rounded-full"></div>
          <p className="text-xl mt-6 text-vibeSecondary/80 max-w-2xl mx-auto">
            Got questions? We've got answers. Here are some of the most common questions about VibeDownloader.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto neo-card"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-vibeSecondary/10 px-2">
                <AccordionTrigger className="text-left font-medium text-vibeSecondary text-lg py-5">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-vibeSecondary/70 text-lg pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
