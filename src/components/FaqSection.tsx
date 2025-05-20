
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Here are some of the most common questions about VibeDownloader.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
