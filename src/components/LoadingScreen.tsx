import React from 'react';
import { Target } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #000077 50%, #16213e 100%)' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-glow-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-glow-float-delay"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-blue-400/15 rounded-full blur-lg animate-glow-float-slow"></div>
        
        {/* Twinkling Stars */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-twinkle"></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-twinkle-delay"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-white/35 rounded-full animate-twinkle-delay-2"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-twinkle-delay-3"></div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo with Glow Animation */}
        <div className="mb-8 animate-fade-in-scale">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-glow-pulse-strong"></div>
            <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-full border border-white/20 animate-glow-border">
              <Target className="h-16 w-16 text-white animate-spin-slow" />
            </div>
          </div>
        </div>

        {/* Company Name with Glow Text */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-glow-text-strong animate-fade-in-up" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
          Premier Football
        </h1>
        <p className="text-xl text-white/80 mb-8 animate-fade-in-up-delay" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
          Manufacturing Excellence
        </p>

        {/* Loading Bar */}
        <div className="w-64 mx-auto mb-6 animate-fade-in-up-delay-2">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 rounded-full animate-loading-bar shadow-glow-strong"></div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-white/70 text-lg animate-pulse-gentle animate-fade-in-up-delay-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
          Loading your experience...
        </p>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-4 animate-fade-in-up-delay-3">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce-dot"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce-dot-delay-1"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce-dot-delay-2"></div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        /* Fade In Scale Animation */
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-scale {
          animation: fadeInScale 1s ease-out forwards;
        }

        /* Fade In Up Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-in-up-delay {
          animation: fadeInUp 0.8s ease-out 0.5s forwards;
          opacity: 0;
        }

        .animate-fade-in-up-delay-2 {
          animation: fadeInUp 0.8s ease-out 0.7s forwards;
          opacity: 0;
        }

        .animate-fade-in-up-delay-3 {
          animation: fadeInUp 0.8s ease-out 0.9s forwards;
          opacity: 0;
        }

        /* Spin Slow Animation */
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spinSlow 3s linear infinite;
        }

        /* Loading Bar Animation */
        @keyframes loadingBar {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-loading-bar {
          animation: loadingBar 2s ease-in-out infinite;
        }

        /* Glow Animations */
        @keyframes glowPulseStrong {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        @keyframes glowBorder {
          0%, 100% {
            border-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            border-color: rgba(255, 255, 255, 0.4);
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.6), 0 0 40px rgba(147, 51, 234, 0.3);
          }
        }

        @keyframes glowTextStrong {
          0%, 100% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
          }
          50% {
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.7), 0 0 40px rgba(59, 130, 246, 0.5);
          }
        }

        @keyframes glowFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes glowFloatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(8px);
          }
        }

        .animate-glow-pulse-strong {
          animation: glowPulseStrong 2s ease-in-out infinite;
        }

        .animate-glow-border {
          animation: glowBorder 2s ease-in-out infinite;
        }

        .animate-glow-text-strong {
          animation: glowTextStrong 2s ease-in-out infinite;
        }

        .animate-glow-float {
          animation: glowFloat 6s ease-in-out infinite;
        }

        .animate-glow-float-delay {
          animation: glowFloat 6s ease-in-out infinite 2s;
        }

        .animate-glow-float-slow {
          animation: glowFloatSlow 8s ease-in-out infinite;
        }

        /* Bounce Dot Animations */
        @keyframes bounceDot {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        .animate-bounce-dot {
          animation: bounceDot 1.4s infinite ease-in-out;
        }

        .animate-bounce-dot-delay-1 {
          animation: bounceDot 1.4s infinite ease-in-out 0.2s;
        }

        .animate-bounce-dot-delay-2 {
          animation: bounceDot 1.4s infinite ease-in-out 0.4s;
        }

        /* Twinkle Animations */
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .animate-twinkle-delay {
          animation: twinkle 2s ease-in-out infinite 0.5s;
        }

        .animate-twinkle-delay-2 {
          animation: twinkle 2s ease-in-out infinite 1s;
        }

        .animate-twinkle-delay-3 {
          animation: twinkle 2s ease-in-out infinite 1.5s;
        }

        /* Pulse Gentle Animation */
        @keyframes pulseGentle {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-pulse-gentle {
          animation: pulseGentle 2s ease-in-out infinite;
        }

        /* Glow Shadow Effects */
        .shadow-glow-strong {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.6), 0 0 50px rgba(147, 51, 234, 0.3);
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;