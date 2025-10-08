import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  ArrowLeft, 
  CreditCard, 
  Truck, 
  Shield, 
  Tag,
  Heart,
  Gift,
  CheckCircle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, getTotalItems, getTotalPrice, getSavings, clearCart } = useCart();
  const { user } = useAuth();
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);

  const shipping = getTotalPrice() > 100 ? 0 : 9.99;
  const tax = getTotalPrice() * 0.08; // 8% tax
  const promoDiscount = appliedPromo === 'SAVE10' ? getTotalPrice() * 0.1 : 0;
  const finalTotal = getTotalPrice() + shipping + tax - promoDiscount;

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'SAVE10') {
      setAppliedPromo('SAVE10');
      setPromoCode('');
    } else {
      alert('Invalid promo code. Try "SAVE10" for 10% off!');
    }
  };

  const handleCheckout = () => {
    setShowCheckout(true);
    // In a real app, this would redirect to payment processing
    setTimeout(() => {
      alert('Order placed successfully! (This is a demo)');
      clearCart();
      setShowCheckout(false);
    }, 2000);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #000077 50%, #16213e 100%)' }}>
        <Header />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
              <ShoppingCart className="h-24 w-24 text-white/50 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Please Sign In
              </h1>
              <p className="text-white/70 text-lg mb-8" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                You need to be logged in to view your cart and make purchases.
              </p>
              <Link 
                to="/"
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center shadow-lg"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #000077 50%, #16213e 100%)' }}>
      <Header />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <Link 
                to="/products"
                className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-4 font-medium"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Continue Shopping
              </Link>
              <h1 className="text-4xl font-bold text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Shopping Cart
              </h1>
              <p className="text-white/70 mt-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''} in your cart
              </p>
            </div>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-red-400 hover:text-red-300 transition-colors font-medium flex items-center"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                <Trash2 className="h-5 w-5 mr-2" />
                Clear Cart
              </button>
            )}
          </div>

          {items.length === 0 ? (
            /* Empty Cart */
            <div className="text-center py-16">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 max-w-md mx-auto">
                <ShoppingCart className="h-24 w-24 text-white/50 mx-auto mb-6" />
                <h2 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                  Your cart is empty
                </h2>
                <p className="text-white/70 mb-8" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                  Looks like you haven't added any items to your cart yet.
                </p>
                <Link 
                  to="/products"
                  className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center shadow-lg"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  Start Shopping
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {items.map(item => (
                  <div key={item.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                    <div className="flex items-center space-x-6">
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-cover bg-center rounded-xl flex-shrink-0" style={{ backgroundImage: `url('${item.image}')` }}></div>
                      
                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                          {item.name}
                        </h3>
                        <p className="text-white/60 text-sm mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                          Category: {item.category}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {item.features.slice(0, 2).map((feature, index) => (
                            <span key={index} className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                              {feature}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                            ${item.price.toFixed(2)}
                          </span>
                          {item.originalPrice && item.originalPrice > item.price && (
                            <span className="text-white/50 text-lg line-through" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                              ${item.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
                        >
                          <Minus className="h-4 w-4 text-white" />
                        </button>
                        <span className="text-xl font-semibold text-white w-8 text-center" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
                        >
                          <Plus className="h-4 w-4 text-white" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-300 transition-colors p-2 hover:bg-red-500/10 rounded-full"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                {/* Promo Code */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    <Tag className="h-5 w-5 mr-2" />
                    Promo Code
                  </h3>
                  {appliedPromo ? (
                    <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                        <span className="text-green-300 font-medium" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                          {appliedPromo} Applied
                        </span>
                      </div>
                      <button
                        onClick={() => setAppliedPromo(null)}
                        className="text-green-300 hover:text-green-200 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter promo code"
                        className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                        style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                      />
                      <button
                        onClick={handleApplyPromo}
                        className="bg-white text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-100 transition-all font-semibold"
                        style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                      >
                        Apply
                      </button>
                    </div>
                  )}
                  <p className="text-white/60 text-sm mt-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    Try "SAVE10" for 10% off your order!
                  </p>
                </div>

                {/* Order Summary */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-6" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    Order Summary
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between text-white/80" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      <span>Subtotal ({getTotalItems()} items)</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                    
                    {getSavings() > 0 && (
                      <div className="flex justify-between text-green-400" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                        <span>You Save</span>
                        <span>-${getSavings().toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-white/80" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    
                    <div className="flex justify-between text-white/80" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    
                    {appliedPromo && (
                      <div className="flex justify-between text-green-400" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                        <span>Promo Discount</span>
                        <span>-${promoDiscount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="border-t border-white/20 pt-4">
                      <div className="flex justify-between text-xl font-bold text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                        <span>Total</span>
                        <span>${finalTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {shipping > 0 && (
                    <div className="mt-4 bg-blue-500/20 border border-blue-500/50 rounded-xl p-3">
                      <p className="text-blue-300 text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                        Add ${(100 - getTotalPrice()).toFixed(2)} more for FREE shipping!
                      </p>
                    </div>
                  )}

                  <button
                    onClick={handleCheckout}
                    disabled={showCheckout}
                    className="w-full bg-white text-gray-900 py-4 px-6 rounded-xl hover:bg-gray-100 transition-all font-semibold text-lg transform hover:scale-105 shadow-lg mt-6 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    {showCheckout ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard className="h-5 w-5 mr-2" />
                        Proceed to Checkout
                      </>
                    )}
                  </button>
                </div>

                {/* Security Features */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="space-y-4">
                    <div className="flex items-center text-white/80">
                      <Shield className="h-5 w-5 mr-3 text-green-400" />
                      <span className="text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                        Secure SSL Encryption
                      </span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <Truck className="h-5 w-5 mr-3 text-blue-400" />
                      <span className="text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                        Free shipping on orders over $100
                      </span>
                    </div>
                    <div className="flex items-center text-white/80">
                      <Heart className="h-5 w-5 mr-3 text-red-400" />
                      <span className="text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                        30-day return guarantee
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;