"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaSearch, FaCalendarAlt, FaUser, FaArrowRight, FaBookOpen, FaGlobeAmericas } from "react-icons/fa";

const BlogPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

    // Sample blog data
    const blogPosts = [
        {
            id: 1,
            title: "Top 10 Study Abroad Destinations for 2024",
            excerpt: "Discover the most popular and emerging study abroad destinations that offer excellent education and cultural experiences.",
            image: "https://www.write-right.in/wp-content/uploads/2024/01/Which-are-the-best-countries-to-study-abroad-in-2024.jpg",
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
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
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
            image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
            image: "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80",
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
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
            image: "https://pfecglobal.com.bd/wp-content/uploads/2025/03/Group-1000001293-3.webp",
            category: "preparation",
            author: "James Thompson",
            date: "2024-01-03",
            readTime: "5 min read",
            featured: false
        },
        {
            id: 7,
            title: "Student Housing: On-Campus vs Off-Campus",
            excerpt: "Compare housing options and learn how to find the perfect accommodation for your study abroad experience.",
            image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            category: "preparation",
            author: "Lisa Wang",
            date: "2023-12-28",
            readTime: "6 min read",
            featured: false
        },
        {
            id: 8,
            title: "Language Learning Tips Before Studying Abroad",
            excerpt: "Effective strategies to learn a new language quickly and confidently before your international studies begin.",
            image: "https://consignerglobal.com/uploads/blog/03-01-251735888382blog.jpg",
            category: "preparation",
            author: "Carlos Mendez",
            date: "2023-12-22",
            readTime: "5 min read",
            featured: false
        },
        {
            id: 9,
            title: "Visa Guide: Navigating Study Permit Applications",
            excerpt: "A comprehensive guide to understanding visa requirements and application processes for popular study destinations.",
            image: "https://images.squarespace-cdn.com/content/v1/5cd4cc35fd679362f1f3ebbc/ede72a45-98ed-41af-86b6-de6e35adf653/image_2024_08_16T09_14_18_360Z.png",
            category: "visa",
            author: "David Kim",
            date: "2024-01-08",
            readTime: "8 min read",
            featured: false
        },
    ];

    const categories = [
        { id: "all", name: "All Articles", count: blogPosts.length, icon: <FaBookOpen className="inline mr-2" /> },
        { id: "destinations", name: "Destinations", count: blogPosts.filter(post => post.category === "destinations").length, icon: <FaGlobeAmericas className="inline mr-2" /> },
        { id: "financing", name: "Financing", count: blogPosts.filter(post => post.category === "financing").length, icon: <FaBookOpen className="inline mr-2" /> },
        { id: "culture", name: "Culture", count: blogPosts.filter(post => post.category === "culture").length, icon: <FaBookOpen className="inline mr-2" /> },
        { id: "visa", name: "Visa Guide", count: blogPosts.filter(post => post.category === "visa").length, icon: <FaBookOpen className="inline mr-2" /> },
        { id: "preparation", name: "Preparation", count: blogPosts.filter(post => post.category === "preparation").length, icon: <FaBookOpen className="inline mr-2" /> }
    ];

    const featuredPosts = blogPosts.filter(post => post.featured);

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === "all" || post.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50/30">
            {/* Header */}

            {/* Professional Hero Section */}
            <section className="relative py-16 bg-slate-900 text-white overflow-hidden">
                {/* Background with subtle pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-slate-900">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full -translate-y-36 translate-x-36"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/5 rounded-full translate-y-48 -translate-x-48"></div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center">
                        {/* Professional badge */}
                        
                        
                        {/* Main heading */}
                        <div className="max-w-4xl mx-auto ">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight pt-28">
                                Global Education
                                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2">
                                    Insights & Resources
                                </span>
                            </h1>
                            
                            {/* Subtitle */}
                            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-slate-300 font-light">
                                Comprehensive guidance and expert analysis for your international academic journey
                            </p>
                        </div>

                        {/* Professional Search Bar */}
                    

                        {/* Quick stats */}
                        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-cyan-400">50+</div>
                                <div className="text-sm text-slate-400 mt-1">Expert Articles</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-cyan-400">25+</div>
                                <div className="text-sm text-slate-400 mt-1">Countries Covered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-cyan-400">15+</div>
                                <div className="text-sm text-slate-400 mt-1">Industry Experts</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-cyan-400">24/7</div>
                                <div className="text-sm text-slate-400 mt-1">Updated Content</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                {/* Categories */}
                <div className="mb-16">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${activeCategory === category.id
                                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                                        : "bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm border border-slate-200"
                                    }`}
                            >
                                {category.icon}
                                {category.name} 
                                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${activeCategory === category.id ? "bg-white/20" : "bg-blue-100 text-blue-600"}`}>
                                    {category.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Posts */}
                {activeCategory === "all" && featuredPosts.length > 0 && (
                    <section className="mb-20">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-slate-900">Featured Articles</h2>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-8">
                            {featuredPosts.map((post) => (
                                <article key={post.id} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-200">
                                    <div className="relative h-72 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                                Featured
                                            </span>
                                        </div>
                                        <div className="absolute bottom-4 left-4">
                                            <span className="bg-white/90 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center text-sm text-slate-600 mb-4 flex-wrap gap-3">
                                            <span className="flex items-center">
                                                <FaCalendarAlt className="mr-2 text-blue-500" />
                                                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </span>
                                            <span className="flex items-center">
                                                <FaUser className="mr-2 text-blue-500" />
                                                {post.author}
                                            </span>
                                            <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs">
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-600 mb-6 leading-relaxed">{post.excerpt}</p>
                                        <button className="group bg-gradient-to-r from-blue-500 to-cyan-500  text-white rounded-full px-6 py-3 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                            Read More 
                                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                {/* All Posts */}
                <section>
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-slate-900">
                                {activeCategory === "all" ? "All Articles" : categories.find(cat => cat.id === activeCategory)?.name}
                                <span className="text-slate-500 text-lg font-normal ml-3">({filteredPosts.length} articles)</span>
                            </h2>
                        </div>
                    </div>

                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
                                <FaSearch className="text-3xl text-slate-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-700 mb-2">No articles found</h3>
                            <p className="text-slate-500 max-w-md mx-auto">
                                Try adjusting your search or filter criteria to find what you're looking for.
                            </p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <article key={post.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-200">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                        <div className="absolute top-3 left-3">
                                            <span className="bg-white/90 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold capitalize backdrop-blur-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center text-xs text-slate-600 mb-3 flex-wrap gap-2">
                                            <span className="flex items-center">
                                                <FaCalendarAlt className="mr-1 text-blue-500" />
                                                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                            </span>
                                            <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                                        <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                                            <span className="text-sm text-slate-500 font-medium">By {post.author}</span>
                                            <button className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full p-2 transition-all duration-300 group/btn">
                                                <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
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