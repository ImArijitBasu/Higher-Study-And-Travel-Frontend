"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaSearch, FaCalendarAlt, FaUser, FaArrowRight, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const BlogPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

    // Sample blog data
    const blogPosts = [
        {
            id: 1,
            title: "Top 10 Study Abroad Destinations for 2024",
            excerpt: "Discover the most popular and emerging study abroad destinations that offer excellent education and cultural experiences.",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
            category: "destinations",
            author: "Sarah Johnson",
            date: "2024-01-15",
            readTime: "5 min read",
            featured: true
        },
        {
            id: 2,
            title: "How to Finance Your Study Abroad Program",
            excerpt: "Learn about scholarships, grants, and budgeting tips to make your study abroad dream affordable.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
            category: "financing",
            author: "Mike Chen",
            date: "2024-01-12",
            readTime: "7 min read",
            featured: true
        },
        {
            id: 3,
            title: "Cultural Adaptation: Thriving in a New Country",
            excerpt: "Essential tips for adapting to new cultures and making the most of your international experience.",
            image: "https://images.unsplash.com/photo-1541336032412-2048a678540d",
            category: "culture",
            author: "Maria Rodriguez",
            date: "2024-01-10",
            readTime: "6 min read",
            featured: false
        },
        {
            id: 4,
            title: "Visa Guide: Navigating Study Permit Applications",
            excerpt: "A comprehensive guide to understanding visa requirements and application processes for popular study destinations.",
            image: "https://images.unsplash.com/photo-1589561454226-796a8aa89b05",
            category: "visa",
            author: "David Kim",
            date: "2024-01-08",
            readTime: "8 min read",
            featured: false
        },
        {
            id: 5,
            title: "Study in Europe: Comparing Education Systems",
            excerpt: "Compare different European education systems and find the perfect fit for your academic goals.",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
            category: "destinations",
            author: "Emma Wilson",
            date: "2024-01-05",
            readTime: "4 min read",
            featured: false
        },
        {
            id: 6,
            title: "Health Insurance for International Students",
            excerpt: "Everything you need to know about health insurance requirements and options while studying abroad.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
            category: "preparation",
            author: "James Thompson",
            date: "2024-01-03",
            readTime: "5 min read",
            featured: false
        }
    ];

    const categories = [
        { id: "all", name: "All Articles", count: blogPosts.length },
        { id: "destinations", name: "Destinations", count: blogPosts.filter(post => post.category === "destinations").length },
        { id: "financing", name: "Financing", count: blogPosts.filter(post => post.category === "financing").length },
        { id: "culture", name: "Culture", count: blogPosts.filter(post => post.category === "culture").length },
        { id: "visa", name: "Visa Guide", count: blogPosts.filter(post => post.category === "visa").length },
        { id: "preparation", name: "Preparation", count: blogPosts.filter(post => post.category === "preparation").length }
    ];

    const featuredPosts = blogPosts.filter(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === "all" || post.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="text-2xl font-bold text-cyan-600">
                            StudyAbroad
                        </Link>
                        <nav className="hidden md:flex space-x-8">
                            <Link href="/" className="text-gray-700 hover:text-cyan-600 transition-colors">Home</Link>
                            <Link href="/programs" className="text-gray-700 hover:text-cyan-600 transition-colors">Programs</Link>
                            <Link href="/blog" className="text-cyan-600 font-semibold">Blog</Link>
                            <Link href="/about" className="text-gray-700 hover:text-cyan-600 transition-colors">About</Link>
                            <Link href="/contact" className="text-gray-700 hover:text-cyan-600 transition-colors">Contact</Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Study Abroad Blog
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Expert advice, student stories, and essential guides for your international education journey
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full py-4 pl-6 pr-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/80 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 text-lg"
                            />
                            <div className="absolute right-2 top-1/2 -translate-y-1/2">
                                <button className="bg-white hover:bg-gray-100 text-cyan-600 rounded-full p-3 shadow-lg hover:shadow-white/25 transition-all duration-300">
                                    <FaSearch size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-12">
                {/* Categories */}
                <div className="mb-12">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category.id
                                    ? "bg-cyan-500 text-white shadow-lg"
                                    : "bg-white text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 shadow-sm"
                                    }`}
                            >
                                {category.name} ({category.count})
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Posts */}
                {activeCategory === "all" && (
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Articles</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {featuredPosts.map((post) => (
                                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                                    <div className="relative h-64">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                Featured
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center text-sm text-gray-600 mb-3">
                                            <span className="flex items-center mr-4">
                                                <FaCalendarAlt className="mr-1" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center mr-4">
                                                <FaUser className="mr-1" />
                                                {post.author}
                                            </span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-6 py-2 transition-all duration-300 flex items-center gap-2">
                                            Read More <FaArrowRight />
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                {/* All Posts */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        {activeCategory === "all" ? "All Articles" : categories.find(cat => cat.id === activeCategory)?.name}
                    </h2>

                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1">
                                    <div className="relative h-48">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-3 left-3">
                                            <span className="bg-white/90 text-cyan-600 px-2 py-1 rounded-full text-xs font-semibold capitalize">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center text-xs text-gray-600 mb-2">
                                            <span className="flex items-center mr-3">
                                                <FaCalendarAlt className="mr-1" />
                                                {post.date}
                                            </span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-500">By {post.author}</span>
                                            <button className="text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50 rounded-full p-2 transition-colors">
                                                <FaArrowRight />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </section>
            </main>

        </div>
    );
};

export default BlogPage;