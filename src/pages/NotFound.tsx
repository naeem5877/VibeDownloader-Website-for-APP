
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { FileQuestion, Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      duration: 0.5
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex flex-col items-center justify-center bg-vibeDark text-vibeSecondary"
    >
      <div className="w-full max-w-md px-4 py-12 text-center">
        {/* Icon */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center mb-6"
        >
          <div className="w-24 h-24 rounded-full bg-vibeSecondary/10 flex items-center justify-center">
            <FileQuestion className="w-12 h-12 text-vibeSecondary" />
          </div>
        </motion.div>
        
        {/* Error Message */}
        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold mb-4 text-gradient">404</motion.h1>
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</motion.h2>
        <motion.p variants={itemVariants} className="text-vibeSecondary/80 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        
        {/* Path Display */}
        <motion.div 
          variants={itemVariants}
          className="p-3 rounded-lg bg-vibeDark border border-vibeSecondary/20 mb-8 overflow-hidden"
        >
          <p className="text-vibeSecondary/70 text-sm font-mono truncate">
            {location.pathname}
          </p>
        </motion.div>
        
        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center"
        >
          <Link to="/" className="neo-button py-3 px-6 rounded-full flex items-center justify-center text-vibeSecondary font-medium transition-all hover:shadow-lg">
            <Home className="w-5 h-5 mr-2" />
            Go to Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="neo-button-secondary py-3 px-6 rounded-full flex items-center justify-center text-vibeSecondary/80 font-medium transition-all hover:shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;
