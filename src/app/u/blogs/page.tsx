"use client";

import { Button } from "flowbite-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaBookOpen,
  FaGlobeAmericas,
} from "react-icons/fa";

const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(dateString));
};

const formatShortDate = (dateString: string) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(dateString));
};
function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const debouncedSearch = useDebounce(searchTerm, 300); 

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Study Abroad Destinations for 2024",
      excerpt:
        "Discover the most popular and emerging study abroad destinations that offer excellent education and cultural experiences.",
      image:
        "https://www.write-right.in/wp-content/uploads/2024/01/Which-are-the-best-countries-to-study-abroad-in-2024.jpg",
      category: "destinations",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "How to Finance Your Study Abroad Program",
      excerpt:
        "Learn about scholarships, grants, and budgeting tips to make your study abroad dream affordable.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2071&q=80",
      category: "financing",
      author: "Mike Chen",
      date: "2024-01-12",
      readTime: "7 min read",
      featured: true,
    },
    {
      id: 3,
      title: "Cultural Adaptation: Thriving in a New Country",
      excerpt:
        "Essential tips for adapting to new cultures and making the most of your international experience.",
      image:
        "https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&w=2070&q=80",
      category: "culture",
      author: "Maria Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 4,
      title: "Visa Guide: Navigating Study Permit Applications",
      excerpt:
        "A comprehensive guide to understanding visa requirements and application processes for popular study destinations.",
      image:
        "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?auto=format&fit=crop&w=2039&q=80",
      category: "visa",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "8 min read",
      featured: false,
    },
    {
      id: 5,
      title: "Study in Europe: Comparing Education Systems",
      excerpt:
        "Compare different European education systems and find the perfect fit for your academic goals.",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2070&q=80",
      category: "destinations",
      author: "Emma Wilson",
      date: "2024-01-05",
      readTime: "4 min read",
      featured: false,
    },
    {
      id: 6,
      title: "Health Insurance for International Students",
      excerpt:
        "Everything you need to know about health insurance requirements and options while studying abroad.",
      image:
        "https://pfecglobal.com.bd/wp-content/uploads/2025/03/Group-1000001293-3.webp",
      category: "preparation",
      author: "James Thompson",
      date: "2024-01-03",
      readTime: "5 min read",
      featured: false,
    },
    {
      id: 7,
      title: "Student Housing: On-Campus vs Off-Campus",
      excerpt:
        "Compare housing options and learn how to find the perfect accommodation for your study abroad experience.",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=2070&q=80",
      category: "preparation",
      author: "Lisa Wang",
      date: "2023-12-28",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 8,
      title: "Language Learning Tips Before Studying Abroad",
      excerpt:
        "Effective strategies to learn a new language quickly and confidently before your international studies begin.",
      image:
        "https://consignerglobal.com/uploads/blog/03-01-251735888382blog.jpg",
      category: "preparation",
      author: "Carlos Mendez",
      date: "2023-12-22",
      readTime: "5 min read",
      featured: false,
    },
  ];

  const categories = [
    {
      id: "all",
      name: "All Articles",
      icon: <FaBookOpen />,
      count: blogPosts.length,
    },
    {
      id: "destinations",
      name: "Destinations",
      icon: <FaGlobeAmericas />,
      count: blogPosts.filter((p) => p.category === "destinations").length,
    },
    {
      id: "financing",
      name: "Financing",
      icon: <FaBookOpen />,
      count: blogPosts.filter((p) => p.category === "financing").length,
    },
    {
      id: "culture",
      name: "Culture",
      icon: <FaBookOpen />,
      count: blogPosts.filter((p) => p.category === "culture").length,
    },
    {
      id: "visa",
      name: "Visa Guide",
      icon: <FaBookOpen />,
      count: blogPosts.filter((p) => p.category === "visa").length,
    },
    {
      id: "preparation",
      name: "Preparation",
      icon: <FaBookOpen />,
      count: blogPosts.filter((p) => p.category === "preparation").length,
    },
  ];

  const featuredPosts = blogPosts.filter((p) => p.featured);

  const filteredPosts = blogPosts.filter((post) => {
    const term = debouncedSearch.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.author.toLowerCase().includes(term) ||
      post.category.toLowerCase().includes(term); 

    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });
  const highlightText = (text: string, term: string) => {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, "gi");
    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="bg-yellow-200">
          {part}
        </span>
      ) : (
        part
      )
    );
  };
  return (
    <div className="min-h-screen mt-20 bg-gradient-to-b from-slate-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="max-w-10/12 rounded-2xl mx-auto relative scroll -pt-6 py-16 pb-20 bg-slate-900 text-white overflow-hidden">
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
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight pt-10">
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
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-5 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all ${
                activeCategory === c.id
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {c.icon}
              {c.name}
              <span
                className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeCategory === c.id
                    ? "bg-white/20"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {c.count}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Articles */}
        {activeCategory === "all" && featuredPosts.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10">Featured Articles</h2>

            <div className="grid lg:grid-cols-2 gap-10">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all"
                >
                  <div className="relative h-72">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full">
                      Featured
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex flex-wrap text-sm text-slate-600 gap-4 mb-4">
                      <span className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-blue-500" />
                        {formatDate(post.date)}
                      </span>

                      <span className="flex items-center">
                        <FaUser className="mr-2 text-blue-500" />
                        {post.author}
                      </span>

                      <span className="bg-blue-50 px-2 py-1 rounded-full text-blue-600 text-xs">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
                    <p className="text-slate-600 mb-6">{post.excerpt}</p>

                    <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full flex items-center gap-2">
                      Read More <FaArrowRight />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
        {/* Search bar */}
        <div className="w-full max-w-xl mx-auto mt-5">
          <div className="relative flex items-center bg-white rounded-full  shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl focus-within:shadow-xl">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full py-3 px-5 text-gray-700 text-base placeholder-gray-400 focus:outline-none transition-all duration-200 border-4 rounded-full "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button className="absolute right-2 text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-200">
              <FaSearch />
            </Button>
          </div>
        </div>
        {/* All Articles */}
        <section>
          <h2 className="text-3xl font-bold mb-10 flex items-center">
            {activeCategory === "all"
              ? "All Articles"
              : categories.find((c) => c.id === activeCategory)?.name}
            <span className="ml-3 text-lg text-slate-500">
              ({filteredPosts.length} articles)
            </span>
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl font-semibold text-slate-700">
                No articles found
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg border border-slate-200 hover:border-blue-200 overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap text-xs text-slate-600 gap-3 mb-3">
                      <span className="flex items-center">
                        <FaCalendarAlt className="mr-1 text-blue-500" />
                        {formatShortDate(post.date)}
                      </span>

                      <span className="bg-blue-50 px-2 py-1 rounded-full text-blue-600">
                        {post.readTime}
                      </span>
                    </div>

                    <p className="text-slate-600 mb-4">
                      {highlightText(post.excerpt, debouncedSearch)}
                    </p>
                    <h3 className="text-lg font-bold mb-3">
                      {highlightText(post.title, debouncedSearch)}
                    </h3>
                    <div className="flex items-center justify-between border-t pt-4">
                      <span className="text-sm text-slate-500">
                        By {post.author}
                      </span>

                      <FaArrowRight className="text-blue-600" />
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