import React from 'react';
import { Target } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-sm text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Target className="h-10 w-10" />
            <span className="text-2xl font-bold" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              Premier Football Manufacturing
            </span>
          </div>
          <p className="text-white/70 mb-6 text-lg" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            Crafting Excellence in Every Football Since 1985
          </p>
          <p className="text-white/50" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            © 2024 Premier Football Manufacturing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;