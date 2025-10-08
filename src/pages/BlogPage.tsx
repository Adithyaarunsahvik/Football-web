import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, Search, Filter, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getBlogPosts, getCategories, getTags } from '../data/blogData';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const blogPosts = getBlogPosts();
  const categories = getCategories();
  const tags = getTags();

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
      
      return matchesSearch && matchesCategory && matchesTag;
    });

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'oldest':
          return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'author':
          return a.author.localeCompare(b.author);
        case 'readTime':
          return a.readTime - b.readTime;
        default: // newest
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      }
    });

    return filtered;
  }, [blogPosts, searchTerm, selectedCategory, selectedTag, sortBy]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedTag('all');
    setSortBy('newest');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #000077 50%, #16213e 100%)' }}>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-blue-900/30 to-gray-800/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            Football Insights & News
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/80 max-w-3xl mx-auto" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            Stay updated with the latest in football manufacturing, industry insights, and expert guidance from our team of professionals.
          </p>
          <div className="flex justify-center">
            <Link 
              to="/cms"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center text-lg shadow-lg" 
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              Manage Content
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-black/20 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50 backdrop-blur-sm"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                <option value="all" className="bg-gray-800">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800">{category}</option>
                ))}
              </select>

              {/* Tag Filter */}
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                <option value="all" className="bg-gray-800">All Tags</option>
                {tags.map(tag => (
                  <option key={tag} value={tag} className="bg-gray-800">{tag}</option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                <option value="newest" className="bg-gray-800">Newest First</option>
                <option value="oldest" className="bg-gray-800">Oldest First</option>
                <option value="title" className="bg-gray-800">Title A-Z</option>
                <option value="author" className="bg-gray-800">Author A-Z</option>
                <option value="readTime" className="bg-gray-800">Read Time</option>
              </select>

              {/* Clear Filters */}
              <button
                onClick={clearFilters}
                className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-4 py-2 text-white transition-all"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Active Filters Display */}
          {(searchTerm || selectedCategory !== 'all' || selectedTag !== 'all') && (
            <div className="mt-4 flex flex-wrap gap-2">
              {searchTerm && (
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                  Search: "{searchTerm}"
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                  Category: {selectedCategory}
                </span>
              )}
              {selectedTag !== 'all' && (
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                  Tag: {selectedTag}
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAndSortedPosts.length > 0 ? (
            <>
              <div className="mb-8 text-center">
                <p className="text-white/70 text-lg" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                  Showing {filteredAndSortedPosts.length} article{filteredAndSortedPosts.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAndSortedPosts.map(post => (
                  <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105 group">
                    {/* Featured Image */}
                    <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url('${post.featuredImage}')` }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 flex items-center text-white/80 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime} min read
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-white/90 transition-colors" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                        <Link to={`/blog/${post.slug}`} className="hover:underline">
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-white/70 text-sm mb-4 leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                        {post.excerpt}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-white/60 text-sm mb-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{formatDate(post.publishDate)}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="bg-white/10 text-white/80 px-2 py-1 rounded-full text-xs" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                            <Tag className="h-3 w-3 inline mr-1" />
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-white/60 text-xs" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                            +{post.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Read More Button */}
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-white hover:text-white/80 transition-colors font-medium"
                        style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                      >
                        Read Full Article
                        <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 max-w-md mx-auto">
                <Search className="h-16 w-16 text-white/50 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                  No Articles Found
                </h3>
                <p className="text-white/70 mb-6" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                  No articles match your current search criteria. Try adjusting your filters or search terms.
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-all font-semibold"
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;