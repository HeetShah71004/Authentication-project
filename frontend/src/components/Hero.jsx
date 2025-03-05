import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-32 text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold bg-gray-100 rounded-full animate-fade-in">
          Introducing Our Platform
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
          Create Beautiful
          <br />
          Digital Experiences
        </h1>
        <p
          className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Transform your ideas into reality with our powerful and intuitive
          platform
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors animate-fade-up hover:scale-105 hover:shadow-md"
          style={{ animationDelay: "0.3s" }}
        >
          Get Started
          <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
