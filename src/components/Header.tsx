import React, { useState } from 'react';
import { Target, ShoppingCart, User, LogOut, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import AuthModal from './AuthModal';

const Header = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  return (
    <>
      <header className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
        <div className="bg-black/30 backdrop-blur-lg rounded-full border border-white/20 shadow-2xl">
          <div className="flex justify-between items-center px-6 py-2.5">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Target className="h-6 w-6 text-white" />
              <span className="text-base font-bold text-white hidden sm:block" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Premier Football
              </span>
            </Link>
            
            <nav className="flex items-center space-x-4">
              <a 
                href={location.pathname === '/' ? '#home' : '/#home'} 
                className="text-white/70 hover:text-white transition-all duration-300 font-medium px-3 py-1.5 rounded-full hover:bg-white/10 text-sm" 
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                Home
              </a>
              <Link 
                to="/blog" 
                className={`${location.pathname.startsWith('/blog') ? 'text-white/90' : 'text-white/70'} hover:text-white transition-all duration-300 font-medium px-3 py-1.5 rounded-full hover:bg-white/10 text-sm`}
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                Blog
              </Link>
              <Link 
                to="/cms" 
                className={`${location.pathname === '/cms' ? 'text-white/90' : 'text-white/70'} hover:text-white transition-all duration-300 font-medium px-3 py-1.5 rounded-full hover:bg-white/10 text-sm`}
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                Admin
              </Link>
              <a 
                href={location.pathname === '/' ? '#about' : '/#about'} 
                className="text-white/70 hover:text-white transition-all duration-300 font-medium px-3 py-1.5 rounded-full hover:bg-white/10 text-sm" 
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                About
              </a>
              <a 
                href={location.pathname === '/' ? '#contact' : '/#contact'} 
                className="text-white/70 hover:text-white transition-all duration-300 font-medium px-3 py-1.5 rounded-full hover:bg-white/10 text-sm" 
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                Contact
              </a>

              {/* Cart Icon */}
              {user && (
                <Link 
                  to="/cart"
                  className="relative text-white/70 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-white/10"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                      {getTotalItems()}
                    </span>
                  )}
                </Link>
              )}

              {/* User Menu */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 text-white/70 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-white/10"
                  >
                    <img 
                      src={user.avatar} 
                      alt={user.name}
                      className="h-6 w-6 rounded-full"
                    />
                    <span className="hidden sm:block text-sm font-medium" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      {user.name}
                    </span>
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-black/90 backdrop-blur-lg rounded-xl border border-white/20 shadow-2xl py-2">
                      <div className="px-4 py-2 border-b border-white/10">
                        <p className="text-white font-medium text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                          {user.name}
                        </p>
                        <p className="text-white/60 text-xs" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                          {user.email}
                        </p>
                      </div>
                      <Link
                        to="/cart"
                        className="flex items-center px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm"
                        style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                        onClick={() => setShowUserMenu(false)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-3" />
                        My Cart ({getTotalItems()})
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setShowUserMenu(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm"
                        style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                      >
                        <LogOut className="h-4 w-4 mr-3" />
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="flex items-center space-x-2 text-white/70 hover:text-white transition-all duration-300 font-medium px-3 py-1.5 rounded-full hover:bg-white/10 text-sm"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  <User className="h-4 w-4" />
                  <span>Sign In</span>
                </button>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Close user menu when clicking outside */}
      {showUserMenu && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowUserMenu(false)}
        ></div>
      )}

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </>
  );
};

export default Header;