import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Save, 
  X, 
  Calendar, 
  User, 
  Tag, 
  Clock,
  ArrowLeft,
  Search,
  Filter,
  Settings,
  BarChart3,
  FileText,
  Users
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts, BlogPost } from '../data/blogData';

const CMSPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'published' | 'draft'>('all');
  const [activeTab, setActiveTab] = useState<'posts' | 'analytics' | 'settings'>('posts');

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
    tags: '',
    featuredImage: '',
    readTime: 5,
    published: true
  });

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || 
                         (filterStatus === 'published' && post.published) ||
                         (filterStatus === 'draft' && !post.published);
    
    return matchesSearch && matchesFilter;
  });

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      category: post.category,
      tags: post.tags.join(', '),
      featuredImage: post.featuredImage,
      readTime: post.readTime,
      published: post.published
    });
    setIsEditing(true);
  };

  const handleCreate = () => {
    setEditingPost(null);
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      category: '',
      tags: '',
      featuredImage: '',
      readTime: 5,
      published: true
    });
    setIsEditing(true);
  };

  const handleSave = () => {
    const slug = formData.title.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();

    const postData: BlogPost = {
      id: editingPost?.id || Date.now().toString(),
      slug: editingPost?.slug || slug,
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      author: formData.author,
      publishDate: editingPost?.publishDate || new Date().toISOString().split('T')[0],
      category: formData.category,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      featuredImage: formData.featuredImage,
      readTime: formData.readTime,
      published: formData.published
    };

    if (editingPost) {
      setPosts(posts.map(post => post.id === editingPost.id ? postData : post));
    } else {
      setPosts([postData, ...posts]);
    }

    setIsEditing(false);
    setEditingPost(null);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  const handleTogglePublished = (id: string) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, published: !post.published } : post
    ));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Analytics data
  const totalPosts = posts.length;
  const publishedPosts = posts.filter(p => p.published).length;
  const draftPosts = posts.filter(p => !p.published).length;
  const totalViews = posts.reduce((sum, post) => sum + (post.reviews || 0), 0);

  if (isEditing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #000077 50%, #16213e 100%)' }}>
        <Header />
        
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                  {editingPost ? 'Edit Post' : 'Create New Post'}
                </h1>
                <button
                  onClick={() => setIsEditing(false)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-white/90 font-medium mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                    placeholder="Enter post title"
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                    required
                  />
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-white/90 font-medium mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    Excerpt *
                  </label>
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                    placeholder="Brief description of the post"
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                    required
                  />
                </div>

                {/* Author and Category Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/90 font-medium mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      Author *
                    </label>
                    <input
                      type="text"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                      placeholder="Author name"
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 font-medium mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      Category *
                    </label>
                    <input
                      type="text"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                      placeholder="Post category"
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                      required
                    />
                  </div>
                </div>

                {/* Tags and Read Time Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/90 font-medium mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      Tags
                    </label>
                    <input
                      type="text"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                      placeholder="Comma-separated tags"
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 font-medium mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      Read Time (minutes)
                    </label>
                    <input
                      type="number"
                      value={formData.readTime}
                      onChange={(e) => setFormData({ ...formData, readTime: parseInt(e.target.value) || 5 })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                      min="1"
                      max="60"
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                    />
                  </div>
                </div>

                {/* Featured Image */}
                <div>
                  <label className="block text-white/90 font-medium mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    Featured Image URL
                  </label>
                  <input
                    type="url"
                    value={formData.featuredImage}
                    onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                    placeholder="https://example.com/image.jpg"
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-white/90 font-medium mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    Content *
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={20}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50 font-mono text-sm"
                    placeholder="Write your post content here... (Markdown supported)"
                    style={{ fontFamily: 'Monaco, Consolas, monospace' }}
                    required
                  />
                  <p className="text-white/60 text-sm mt-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    Supports basic Markdown: # Headers, **Bold**, - Lists, etc.
                  </p>
                </div>

                {/* Published Toggle */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="published"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="published" className="text-white/90 font-medium" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    Publish immediately
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4 pt-6">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all font-medium"
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    className="px-6 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all font-medium flex items-center"
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {editingPost ? 'Update Post' : 'Create Post'}
                  </button>
                </div>
              </form>
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
                to="/blog"
                className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-4 font-medium"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Blog
              </Link>
              <h1 className="text-4xl font-bold text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Admin Dashboard
              </h1>
              <p className="text-white/70 mt-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Manage your blog content and website settings
              </p>
            </div>
            <button
              onClick={handleCreate}
              className="bg-white text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-100 transition-all font-medium flex items-center shadow-lg"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              <Plus className="h-5 w-5 mr-2" />
              New Post
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10 mb-8">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('posts')}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === 'posts' 
                    ? 'bg-white text-gray-900' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                <FileText className="h-5 w-5 mr-2" />
                Posts ({totalPosts})
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === 'analytics' 
                    ? 'bg-white text-gray-900' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                <BarChart3 className="h-5 w-5 mr-2" />
                Analytics
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === 'settings' 
                    ? 'bg-white text-gray-900' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                <Settings className="h-5 w-5 mr-2" />
                Settings
              </button>
            </div>
          </div>

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Total Posts</p>
                    <p className="text-3xl font-bold text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{totalPosts}</p>
                  </div>
                  <FileText className="h-8 w-8 text-white/50" />
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Published</p>
                    <p className="text-3xl font-bold text-green-400" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{publishedPosts}</p>
                  </div>
                  <Eye className="h-8 w-8 text-green-400/50" />
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Drafts</p>
                    <p className="text-3xl font-bold text-yellow-400" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{draftPosts}</p>
                  </div>
                  <Edit className="h-8 w-8 text-yellow-400/50" />
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/70 text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Total Views</p>
                    <p className="text-3xl font-bold text-blue-400" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{totalViews.toLocaleString()}</p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-blue-400/50" />
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                Blog Settings
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-white/90 font-medium mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    Default Author
                  </label>
                  <input
                    type="text"
                    defaultValue="Premier Football Team"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  />
                </div>
                <div>
                  <label className="block text-white/90 font-medium mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    Posts Per Page
                  </label>
                  <input
                    type="number"
                    defaultValue="12"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="comments"
                    defaultChecked
                    className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="comments" className="text-white/90 font-medium" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    Enable comments on blog posts
                  </label>
                </div>
                <button className="bg-white text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-100 transition-all font-medium">
                  Save Settings
                </button>
              </div>
            </div>
          )}

          {/* Posts Tab */}
          {activeTab === 'posts' && (
            <>
              {/* Filters */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                    <input
                      type="text"
                      placeholder="Search posts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                    />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value as 'all' | 'published' | 'draft')}
                      className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                    >
                      <option value="all" className="bg-gray-800">All Posts</option>
                      <option value="published" className="bg-gray-800">Published</option>
                      <option value="draft" className="bg-gray-800">Drafts</option>
                    </select>
                    
                    <div className="text-white/70 text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}
                    </div>
                  </div>
                </div>
              </div>

              {/* Posts Table */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-white/10">
                      <tr>
                        <th className="px-6 py-4 text-left text-white font-medium" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                          Title
                        </th>
                        <th className="px-6 py-4 text-left text-white font-medium" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                          Author
                        </th>
                        <th className="px-6 py-4 text-left text-white font-medium" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                          Category
                        </th>
                        <th className="px-6 py-4 text-left text-white font-medium" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                          Date
                        </th>
                        <th className="px-6 py-4 text-left text-white font-medium" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                          Status
                        </th>
                        <th className="px-6 py-4 text-left text-white font-medium" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {filteredPosts.map(post => (
                        <tr key={post.id} className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4">
                            <div>
                              <div className="text-white font-medium" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                                {post.title}
                              </div>
                              <div className="text-white/60 text-sm mt-1" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                                {post.excerpt.substring(0, 80)}...
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center text-white/80">
                              <User className="h-4 w-4 mr-2" />
                              <span style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{post.author}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                              {post.category}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center text-white/80">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{formatDate(post.publishDate)}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => handleTogglePublished(post.id)}
                              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                                post.published 
                                  ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                                  : 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
                              }`}
                              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                            >
                              {post.published ? 'Published' : 'Draft'}
                            </button>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <Link
                                to={`/blog/${post.slug}`}
                                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                                title="View Post"
                              >
                                <Eye className="h-4 w-4" />
                              </Link>
                              <button
                                onClick={() => handleEdit(post)}
                                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                                title="Edit Post"
                              >
                                <Edit className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => handleDelete(post.id)}
                                className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all"
                                title="Delete Post"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {filteredPosts.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-white/50 mb-4">
                      <Search className="h-12 w-12 mx-auto mb-4" />
                      <p className="text-lg" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                        No posts found
                      </p>
                      <p className="text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                        Try adjusting your search or filters
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CMSPage;