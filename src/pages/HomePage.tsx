import React from 'react';
import { Target, Award, Users, Phone, Mail, MapPin, ChevronRight, Calendar, Trophy, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #000077 50%, #16213e 100%)' }}>
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Football Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute top-1/4 right-10 w-64 h-64 opacity-20 animate-float-slow"
            style={{
              backgroundImage: "url('/public/image.png')",
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          ></div>
          <div 
            className="absolute bottom-1/4 left-10 w-48 h-48 opacity-15 animate-pulse-slow"
            style={{
              backgroundImage: "url('/public/image.png')",
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10 animate-float-gentle"
            style={{
              backgroundImage: "url('/public/image.png')",
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          ></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-blue-900/30 to-gray-800/50 z-10" style={{ background: 'linear-gradient(135deg, rgba(26,26,46,0.5) 0%, rgba(0,0,119,0.3) 50%, rgba(22,33,62,0.5) 100%)' }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight animate-fade-in-up" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              Your Smart Football
              <br />
              Solution, Anytime,
              <br />
              Anywhere
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/80 max-w-3xl mx-auto animate-fade-in-up-delay" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              Precision-engineered footballs trusted by professionals worldwide. 
              Experience unmatched quality and performance in every game.
            </p>
            <div className="flex justify-center animate-fade-in-up-delay-2">
              <Link 
                to="/products"
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center text-lg shadow-lg hover:shadow-xl animate-bounce-gentle" 
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                Explore Products
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/20 rounded-full animate-twinkle z-30"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-white/30 rounded-full animate-twinkle-delay z-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-twinkle-delay-2 z-30"></div>
      </section>

      {/* History Section - Our Legacy of Excellence with Glow */}
      <section id="history" className="py-24 bg-black/30 backdrop-blur-sm relative overflow-hidden">
        {/* Glow Effect Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-glow-pulse"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-glow-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-glow-float-delay"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-glow-text" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              Our Legacy of Excellence
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              Four decades of innovation, craftsmanship, and dedication to the beautiful game. 
              Discover the milestones that shaped our journey to becoming the world's premier football manufacturer.
            </p>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-white/20 via-white/40 to-white/20 animate-glow-line"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {/* 1985 - Foundation */}
              <div className="flex items-center justify-between animate-slide-in-left">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:shadow-glow hover:border-white/20 transform hover:scale-105">
                    <div className="flex items-center justify-end mb-4">
                      <Calendar className="h-8 w-8 text-white/70 mr-3 animate-pulse-gentle" />
                      <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>1985</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      The Beginning
                    </h3>
                    <p className="text-white/70 text-lg leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      Founded by master craftsman Robert Premier with a vision to create the world's finest footballs. 
                      Started in a small workshop with just 3 employees and a passion for perfection.
                    </p>
                  </div>
                </div>
                <div className="w-6 h-6 bg-white rounded-full border-4 border-blue-600 z-10 animate-glow-dot"></div>
                <div className="w-5/12"></div>
              </div>

              {/* 1992 - First Professional Contract */}
              <div className="flex items-center justify-between animate-slide-in-right">
                <div className="w-5/12"></div>
                <div className="w-6 h-6 bg-white rounded-full border-4 border-blue-600 z-10 animate-glow-dot"></div>
                <div className="w-5/12 pl-8">
                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:shadow-glow hover:border-white/20 transform hover:scale-105">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl font-bold text-white mr-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>1992</span>
                      <Trophy className="h-8 w-8 text-white/70 animate-pulse-gentle" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      Professional Recognition
                    </h3>
                    <p className="text-white/70 text-lg leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      Secured our first professional league contract, supplying footballs to the National Championship. 
                      This milestone marked our entry into professional sports.
                    </p>
                  </div>
                </div>
              </div>

              {/* 1998 - International Expansion */}
              <div className="flex items-center justify-between animate-slide-in-left">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:shadow-glow hover:border-white/20 transform hover:scale-105">
                    <div className="flex items-center justify-end mb-4">
                      <Globe className="h-8 w-8 text-white/70 mr-3 animate-pulse-gentle" />
                      <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>1998</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      Global Expansion
                    </h3>
                    <p className="text-white/70 text-lg leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      Opened our first international manufacturing facility and began exporting to 15 countries. 
                      Established partnerships with major European football clubs.
                    </p>
                  </div>
                </div>
                <div className="w-6 h-6 bg-white rounded-full border-4 border-blue-600 z-10 animate-glow-dot"></div>
                <div className="w-5/12"></div>
              </div>

              {/* 2005 - FIFA Approval */}
              <div className="flex items-center justify-between animate-slide-in-right">
                <div className="w-5/12"></div>
                <div className="w-6 h-6 bg-white rounded-full border-4 border-blue-600 z-10 animate-glow-dot"></div>
                <div className="w-5/12 pl-8">
                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:shadow-glow hover:border-white/20 transform hover:scale-105">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl font-bold text-white mr-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>2005</span>
                      <Award className="h-8 w-8 text-white/70 animate-pulse-gentle" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      FIFA Certification
                    </h3>
                    <p className="text-white/70 text-lg leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      Achieved FIFA Quality Pro certification, becoming an official supplier for international tournaments. 
                      Our footballs were used in the World Cup qualifiers.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2015 - Innovation Center */}
              <div className="flex items-center justify-between animate-slide-in-left">
                <div className="w-5/12 text-right pr-8">
                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:shadow-glow hover:border-white/20 transform hover:scale-105">
                    <div className="flex items-center justify-end mb-4">
                      <Target className="h-8 w-8 text-white/70 mr-3 animate-pulse-gentle" />
                      <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>2015</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      Innovation Hub
                    </h3>
                    <p className="text-white/70 text-lg leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      Launched our state-of-the-art R&D facility, pioneering advanced materials and aerodynamic designs. 
                      Introduced smart football technology with embedded sensors.
                    </p>
                  </div>
                </div>
                <div className="w-6 h-6 bg-white rounded-full border-4 border-blue-600 z-10 animate-glow-dot"></div>
                <div className="w-5/12"></div>
              </div>

              {/* 2024 - Present Day */}
              <div className="flex items-center justify-between animate-slide-in-right">
                <div className="w-5/12"></div>
                <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white z-10 animate-glow-dot-active"></div>
                <div className="w-5/12 pl-8">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all hover:shadow-glow-strong hover:border-white/30 transform hover:scale-105">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl font-bold text-white mr-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>2024</span>
                      <Users className="h-8 w-8 text-white/70 animate-pulse-gentle" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      Leading the Future
                    </h3>
                    <p className="text-white/70 text-lg leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      Today, we supply over 200 professional teams across 50 countries, continuing to innovate with 
                      sustainable materials and cutting-edge technology for the next generation of football.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              Crafting Excellence Since 1985
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              We combine traditional craftsmanship with cutting-edge technology to create 
              the finest footballs in the industry, trusted by champions worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105 animate-fade-in-up">
              <Award className="h-16 w-16 text-white mx-auto mb-6 animate-float-gentle" />
              <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Quality Assurance
              </h3>
              <p className="text-white/70 text-lg leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Every football undergoes rigorous testing to ensure it meets our exacting standards for shape, weight, and performance.
              </p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105 animate-fade-in-up-delay">
              <Users className="h-16 w-16 text-white mx-auto mb-6 animate-float-gentle" />
              <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Professional Trust
              </h3>
              <p className="text-white/70 text-lg leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Trusted by over 200 professional teams and thousands of athletes across 50 countries worldwide.
              </p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105 animate-fade-in-up-delay-2">
              <Target className="h-16 w-16 text-white mx-auto mb-6 animate-float-gentle" />
              <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Precision Engineering
              </h3>
              <p className="text-white/70 text-lg leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Our advanced manufacturing processes ensure consistent weight distribution and optimal aerodynamics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section - Premium Collection with Glow */}
      <section id="products" className="py-24 relative overflow-hidden">
        {/* Glow Effect Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 animate-glow-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-glow-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-glow-float-delay"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-glow-text" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              Premium Collection
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              Discover our flagship footballs, each designed for specific playing conditions and skill levels.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105 hover:shadow-glow hover:border-white/20 animate-fade-in-up">
              <div className="h-72 bg-cover bg-center animate-zoom-gentle" style={{ backgroundImage: "url('https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1')" }}></div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                  Pro Elite Series
                </h3>
                <p className="text-white/70 mb-6 text-lg leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                  Our premium football designed for professional matches. Features advanced grip technology and superior durability.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-white animate-pulse-gentle" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>$89.99</span>
                  <Link 
                    to="/products"
                    className="bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-glow transform hover:scale-105" 
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105 hover:shadow-glow hover:border-white/20 animate-fade-in-up-delay">
              <div className="h-72 bg-cover bg-center animate-zoom-gentle" style={{ backgroundImage: "url('https://images.pexels.com/photos/1618268/pexels-photo-1618268.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1')" }}></div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                  Training Champion
                </h3>
                <p className="text-white/70 mb-6 text-lg leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                  Perfect for practice sessions and youth leagues. Combines affordability with professional-grade quality.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-white animate-pulse-gentle" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>$49.99</span>
                  <Link 
                    to="/products"
                    className="bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-glow transform hover:scale-105" 
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105 hover:shadow-glow hover:border-white/20 animate-fade-in-up-delay-2">
              <div className="h-72 bg-cover bg-center animate-zoom-gentle" style={{ backgroundImage: "url('https://images.pexels.com/photos/1618263/pexels-photo-1618263.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1')" }}></div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                  All-Weather Pro
                </h3>
                <p className="text-white/70 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                  Engineered for all playing conditions. Waterproof coating and enhanced grip for optimal performance.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-white animate-pulse-gentle" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>$69.99</span>
                  <Link 
                    to="/products"
                    className="bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-glow transform hover:scale-105" 
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16 animate-fade-in-up-delay-2">
            <Link 
              to="/products"
              className="bg-white text-gray-900 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center text-lg shadow-lg hover:shadow-glow animate-bounce-gentle" 
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              View All Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              Get In Touch
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delay" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              Ready to elevate your game? Contact us today for custom orders, bulk pricing, or any questions about our products.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-semibold mb-8 text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center transform hover:scale-105 transition-all">
                  <Phone className="h-8 w-8 mr-6 text-white/70 animate-pulse-gentle" />
                  <span className="text-xl text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center transform hover:scale-105 transition-all">
                  <Mail className="h-8 w-8 mr-6 text-white/70 animate-pulse-gentle" />
                  <span className="text-xl text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>info@premierfootball.com</span>
                </div>
                <div className="flex items-center transform hover:scale-105 transition-all">
                  <MapPin className="h-8 w-8 mr-6 text-white/70 animate-pulse-gentle" />
                  <span className="text-xl text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>1234 Sports Avenue, Manufacturing District, NY 10001</span>
                </div>
              </div>
              <div className="mt-12">
                <h4 className="text-2xl font-semibold mb-6 text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                  Business Hours
                </h4>
                <div className="text-white/70 space-y-2 text-lg animate-fade-in-up" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105">
                <h3 className="text-3xl font-semibold text-white mb-8" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="animate-fade-in-up">
                    <label className="block text-lg font-medium text-white/90 mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50 backdrop-blur-sm transition-all hover:bg-white/15"
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="animate-fade-in-up-delay">
                    <label className="block text-lg font-medium text-white/90 mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50 backdrop-blur-sm transition-all hover:bg-white/15"
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="animate-fade-in-up-delay">
                    <label className="block text-lg font-medium text-white/90 mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      Product Interest
                    </label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white backdrop-blur-sm transition-all hover:bg-white/15" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      <option className="bg-gray-800">Select a product</option>
                      <option className="bg-gray-800">Pro Elite Series</option>
                      <option className="bg-gray-800">Training Champion</option>
                      <option className="bg-gray-800">All-Weather Pro</option>
                      <option className="bg-gray-800">Custom Order</option>
                    </select>
                  </div>
                  <div className="animate-fade-in-up-delay-2">
                    <label className="block text-lg font-medium text-white/90 mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50 backdrop-blur-sm transition-all hover:bg-white/15"
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-gray-900 py-4 px-8 rounded-full hover:bg-gray-100 transition-all font-semibold text-lg transform hover:scale-105 shadow-lg hover:shadow-glow animate-bounce-gentle"
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom CSS for animations */}
      <style jsx>{`
        /* Fade In Animations */
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
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-up-delay {
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-up-delay-2 {
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        /* Slide In Animations */
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        /* Float Animations */
        @keyframes floatGentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-5px) rotate(2deg);
          }
          50% {
            transform: translateY(-10px) rotate(0deg);
          }
          75% {
            transform: translateY(-5px) rotate(-2deg);
          }
        }

        .animate-float-gentle {
          animation: floatGentle 4s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }

        /* Pulse Animations */
        @keyframes pulseGentle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.25;
          }
        }

        .animate-pulse-gentle {
          animation: pulseGentle 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }

        /* Bounce Animation */
        @keyframes bounceGentle {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-5px);
          }
          60% {
            transform: translateY(-3px);
          }
        }

        .animate-bounce-gentle {
          animation: bounceGentle 2s infinite;
        }

        /* Twinkle Animations */
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
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

        /* Zoom Animation */
        @keyframes zoomGentle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        .animate-zoom-gentle {
          animation: zoomGentle 8s ease-in-out infinite;
        }

        /* Glow Animations */
        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
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

        @keyframes glowText {
          0%, 100% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(59, 130, 246, 0.3);
          }
        }

        @keyframes glowLine {
          0%, 100% {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.4), 0 0 30px rgba(59, 130, 246, 0.3);
          }
        }

        @keyframes glowDot {
          0%, 100% {
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(147, 51, 234, 0.4);
          }
        }

        @keyframes glowDotActive {
          0%, 100% {
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.8);
          }
          50% {
            box-shadow: 0 0 25px rgba(59, 130, 246, 1), 0 0 35px rgba(147, 51, 234, 0.6);
          }
        }

        .animate-glow-pulse {
          animation: glowPulse 4s ease-in-out infinite;
        }

        .animate-glow-float {
          animation: glowFloat 8s ease-in-out infinite;
        }

        .animate-glow-float-delay {
          animation: glowFloat 8s ease-in-out infinite 2s;
        }

        .animate-glow-text {
          animation: glowText 3s ease-in-out infinite;
        }

        .animate-glow-line {
          animation: glowLine 3s ease-in-out infinite;
        }

        .animate-glow-dot {
          animation: glowDot 2s ease-in-out infinite;
        }

        .animate-glow-dot-active {
          animation: glowDotActive 2s ease-in-out infinite;
        }

        /* Glow Shadow Effects */
        .shadow-glow {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1), 0 0 40px rgba(59, 130, 246, 0.1);
        }

        .shadow-glow-strong {
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.2), 0 0 50px rgba(59, 130, 246, 0.2);
        }

        .hover\\:shadow-glow:hover {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.2), 0 0 40px rgba(59, 130, 246, 0.2);
        }

        .hover\\:shadow-glow-strong:hover {
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.3), 0 0 50px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
};

export default HomePage;