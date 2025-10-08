import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getBlogPostBySlug, getBlogPosts } from '../data/blogData';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : null;
  const allPosts = getBlogPosts();
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get related posts (same category, excluding current post)
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // Convert markdown-style content to HTML-like structure for display
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Handle headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-4xl font-bold text-white mb-6 mt-8" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{line.substring(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-3xl font-semibold text-white mb-4 mt-6" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{line.substring(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-2xl font-semibold text-white mb-3 mt-5" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{line.substring(4)}</h3>;
        }
        if (line.startsWith('#### ')) {
          return <h4 key={index} className="text-xl font-semibold text-white mb-2 mt-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{line.substring(5)}</h4>;
        }
        
        // Handle bold text
        if (line.startsWith('**') && line.endsWith('**')) {
          return <p key={index} className="text-lg font-semibold text-white mb-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{line.substring(2, line.length - 2)}</p>;
        }
        
        // Handle list items
        if (line.startsWith('- ')) {
          return <li key={index} className="text-white/80 mb-2 ml-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>• {line.substring(2)}</li>;
        }
        
        // Handle numbered lists
        if (/^\d+\./.test(line)) {
          return <li key={index} className="text-white/80 mb-2 ml-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{line}</li>;
        }
        
        // Handle empty lines
        if (line.trim() === '') {
          return <div key={index} className="mb-4"></div>;
        }
        
        // Regular paragraphs
        return <p key={index} className="text-white/80 mb-4 leading-relaxed text-lg" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{line}</p>;
      });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #000077 50%, #16213e 100%)' }}>
      <Header />

      {/* Article Header */}
      <section className="relative pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/blog"
            className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8 font-medium"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blog
          </Link>

          {/* Article Meta */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium">
                {post.category}
              </span>
              <div className="flex items-center text-white/70">
                <Clock className="h-4 w-4 mr-2" />
                <span style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{post.readTime} min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              {post.title}
            </h1>

            <p className="text-xl text-white/80 mb-6 leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-white/70">
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{formatDate(post.publishDate)}</span>
                </div>
              </div>
              
              <button
                onClick={handleShare}
                className="flex items-center bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-all backdrop-blur-sm"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${post.featuredImage}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="prose prose-lg max-w-none">
              {formatContent(post.content)}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-white/10 text-white/80 px-3 py-2 rounded-full text-sm flex items-center" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Related Articles
              </h2>
              <p className="text-white/70 text-lg" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                More insights from the {post.category} category
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(relatedPost => (
                <article key={relatedPost.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105 group">
                  <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url('${relatedPost.featuredImage}')` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 flex items-center text-white/80 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {relatedPost.readTime} min
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white/90 transition-colors" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      <Link to={`/blog/${relatedPost.slug}`} className="hover:underline">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    
                    <p className="text-white/70 text-sm mb-4 leading-relaxed" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      {relatedPost.excerpt.substring(0, 120)}...
                    </p>
                    
                    <div className="flex items-center justify-between text-white/60 text-sm">
                      <span style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{relatedPost.author}</span>
                      <span style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{formatDate(relatedPost.publishDate)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                to="/blog"
                className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                <BookOpen className="h-5 w-5 mr-2" />
                View All Articles
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPostPage;