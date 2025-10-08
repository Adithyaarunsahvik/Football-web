import React, { useState } from 'react';
import { Star, ShoppingCart, Filter, Search, ChevronDown, Award, Shield, Zap, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from '../components/AuthModal';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [addedToCart, setAddedToCart] = useState<string | null>(null);
  
  const { addToCart } = useCart();
  const { user } = useAuth();

  const products = [
    {
      id: '1',
      name: 'Pro Elite Series',
      category: 'professional',
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1',
      features: ['FIFA Approved', 'Professional Grade', 'Advanced Grip Technology'],
      description: 'Our flagship football designed for professional matches and tournaments.',
      badge: 'Best Seller'
    },
    {
      id: '2',
      name: 'Training Champion',
      category: 'training',
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.7,
      reviews: 189,
      image: 'https://images.pexels.com/photos/1618268/pexels-photo-1618268.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1',
      features: ['Durable Construction', 'Youth Friendly', 'Cost Effective'],
      description: 'Perfect for practice sessions, youth leagues, and training programs.',
      badge: 'Popular'
    },
    {
      id: '3',
      name: 'All-Weather Pro',
      category: 'professional',
      price: 69.99,
      originalPrice: 79.99,
      rating: 4.8,
      reviews: 156,
      image: 'https://images.pexels.com/photos/1618263/pexels-photo-1618263.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1',
      features: ['Waterproof Coating', 'Enhanced Grip', 'All Conditions'],
      description: 'Engineered for optimal performance in all weather conditions.',
      badge: 'Weather Resistant'
    },
    {
      id: '4',
      name: 'Youth Academy',
      category: 'youth',
      price: 34.99,
      originalPrice: 44.99,
      rating: 4.6,
      reviews: 98,
      image: 'https://images.pexels.com/photos/1618262/pexels-photo-1618262.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1',
      features: ['Size 3 & 4 Available', 'Lightweight', 'Safety Tested'],
      description: 'Specially designed for young players to develop their skills safely.',
      badge: 'Youth Approved'
    },
    {
      id: '5',
      name: 'Indoor Master',
      category: 'indoor',
      price: 54.99,
      originalPrice: 64.99,
      rating: 4.5,
      reviews: 87,
      image: 'https://images.pexels.com/photos/1618261/pexels-photo-1618261.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1',
      features: ['Low Bounce', 'Felt Surface', 'Indoor Optimized'],
      description: 'Designed specifically for indoor football and futsal games.',
      badge: 'Indoor Specialist'
    },
    {
      id: '6',
      name: 'Street Legend',
      category: 'street',
      price: 39.99,
      originalPrice: 49.99,
      rating: 4.4,
      reviews: 76,
      image: 'https://images.pexels.com/photos/1618260/pexels-photo-1618260.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1',
      features: ['Abrasion Resistant', 'Urban Design', 'Concrete Safe'],
      description: 'Built tough for street football and urban environments.',
      badge: 'Street Tough'
    },
    {
      id: '7',
      name: 'Championship Elite',
      category: 'professional',
      price: 124.99,
      originalPrice: 149.99,
      rating: 5.0,
      reviews: 45,
      image: 'https://images.pexels.com/photos/1618259/pexels-photo-1618259.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1',
      features: ['Match Official', 'Premium Leather', 'Tournament Grade'],
      description: 'The ultimate football for championship matches and elite competitions.',
      badge: 'Premium'
    },
    {
      id: '8',
      name: 'Training Pro Max',
      category: 'training',
      price: 64.99,
      originalPrice: 74.99,
      rating: 4.7,
      reviews: 123,
      image: 'https://images.pexels.com/photos/1618258/pexels-photo-1618258.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1',
      features: ['Extra Durable', 'High Visibility', 'Coach Approved'],
      description: 'Advanced training football with enhanced durability and visibility.',
      badge: 'Training Pro'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'professional', name: 'Professional', count: products.filter(p => p.category === 'professional').length },
    { id: 'training', name: 'Training', count: products.filter(p => p.category === 'training').length },
    { id: 'youth', name: 'Youth', count: products.filter(p => p.category === 'youth').length },
    { id: 'indoor', name: 'Indoor', count: products.filter(p => p.category === 'indoor').length },
    { id: 'street', name: 'Street', count: products.filter(p => p.category === 'street').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const handleAddToCart = (product: typeof products[0]) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      category: product.category,
      features: product.features
    });

    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #000077 50%, #16213e 100%)' }}>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-blue-900/30 to-gray-800/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            Premium Football Collection
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/80 max-w-3xl mx-auto" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            Discover our complete range of professional-grade footballs, each crafted with precision and tested by champions.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-black/20 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50 backdrop-blur-sm"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-white text-gray-900'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white/10 border border-white/20 rounded-full px-4 py-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                <option value="featured" className="bg-gray-800">Featured</option>
                <option value="price-low" className="bg-gray-800">Price: Low to High</option>
                <option value="price-high" className="bg-gray-800">Price: High to Low</option>
                <option value="rating" className="bg-gray-800">Highest Rated</option>
                <option value="name" className="bg-gray-800">Name A-Z</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map(product => (
              <div key={product.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105 group">
                {/* Product Image */}
                <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url('${product.image}')` }}>
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {product.badge}
                    </div>
                  )}
                  {product.originalPrice && product.originalPrice > product.price && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                        />
                      ))}
                    </div>
                    <span className="text-white/70 text-sm ml-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 text-sm mb-4 leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <span key={index} className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 2 && (
                        <span className="text-xs text-white/60" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                          +{product.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                        ${product.price}
                      </span>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <span className="text-white/50 text-sm line-through ml-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className={`px-4 py-2 rounded-full hover:bg-gray-100 transition-all font-semibold flex items-center shadow-lg group-hover:scale-105 ${
                        addedToCart === product.id 
                          ? 'bg-green-500 text-white' 
                          : 'bg-white text-gray-900'
                      }`}
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                    >
                      {addedToCart === product.id ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Added!
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/70 text-xl" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                No products found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              Why Choose Our Footballs?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <Award className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Professional Quality
              </h3>
              <p className="text-white/70" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Every football meets international standards and is used by professional teams worldwide.
              </p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <Shield className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Durability Guaranteed
              </h3>
              <p className="text-white/70" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Built to withstand intense gameplay with premium materials and construction techniques.
              </p>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <Zap className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Performance Optimized
              </h3>
              <p className="text-white/70" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Engineered for optimal flight characteristics, grip, and ball control in all conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </div>
  );
};

export default ProductsPage;