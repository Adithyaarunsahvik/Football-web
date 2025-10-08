import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff, Loader } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const { login, signup, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      let success = false;
      
      if (mode === 'login') {
        success = await login(formData.email, formData.password);
        if (!success) {
          setError('Invalid email or password. Please try again.');
        }
      } else {
        if (!formData.name.trim()) {
          setError('Please enter your name.');
          return;
        }
        success = await signup(formData.name, formData.email, formData.password);
        if (!success) {
          setError('Registration failed. Please check your information.');
        }
      }

      if (success) {
        onClose();
        setFormData({ name: '', email: '', password: '' });
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const switchMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
    setError('');
    setFormData({ name: '', email: '', password: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 rounded-2xl p-8 w-full max-w-md mx-4 border border-white/20 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            {mode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h2>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {mode === 'signup' && (
            <div>
              <label className="block text-white/90 font-medium mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50 backdrop-blur-sm"
                  placeholder="Enter your full name"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-white/90 font-medium mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50 backdrop-blur-sm"
                placeholder="Enter your email"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-white/90 font-medium mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50 backdrop-blur-sm"
                placeholder="Enter your password"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                minLength={6}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white/70 transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {mode === 'signup' && (
              <p className="text-white/60 text-sm mt-1" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Password must be at least 6 characters long
              </p>
            )}
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-3">
              <p className="text-red-300 text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                {error}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-white text-gray-900 py-3 px-6 rounded-xl hover:bg-gray-100 transition-all font-semibold text-lg transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            {isLoading ? (
              <>
                <Loader className="h-5 w-5 mr-2 animate-spin" />
                {mode === 'login' ? 'Signing In...' : 'Creating Account...'}
              </>
            ) : (
              mode === 'login' ? 'Sign In' : 'Create Account'
            )}
          </button>
        </form>

        {/* Switch Mode */}
        <div className="mt-6 text-center">
          <p className="text-white/70" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
            <button
              onClick={switchMode}
              className="text-white hover:text-white/80 transition-colors font-semibold ml-2"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              {mode === 'login' ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>

        {/* Demo Credentials */}
        {mode === 'login' && (
          <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <p className="text-white/60 text-sm mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              Demo credentials:
            </p>
            <p className="text-white/80 text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              Email: demo@example.com<br />
              Password: demo123
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;