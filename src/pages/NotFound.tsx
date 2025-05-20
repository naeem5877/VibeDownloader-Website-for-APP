import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { FileQuestion, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-vibeDark text-vibeSecondary">
      <div className="w-full max-w-md px-4 py-12 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-vibeSecondary/10 flex items-center justify-center">
            <FileQuestion className="w-12 h-12 text-vibeSecondary" />
          </div>
        </div>
        
        {/* Error Message */}
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gradient">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-vibeSecondary/80 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        {/* Path Display */}
        <div className="p-3 rounded-lg bg-vibeDark border border-vibeSecondary/20 mb-8 overflow-hidden">
          <p className="text-vibeSecondary/70 text-sm font-mono truncate">
            {location.pathname}
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
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
        </div>
      </div>
    </div>
  );
};

export default NotFound;