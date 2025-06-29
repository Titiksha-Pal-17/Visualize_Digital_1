import React from "react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Introducing Our Blog",
    excerpt: "Explore our latest updates, case studies and insights...",
    author: "Titiksha",
    date: "2025-06-25",
    image: "https://source.unsplash.com/800x400/?tech,teamwork",
  },
  {
    id: 2,
    title: "Why Visual Design Matters",
    excerpt: "We dive into the importance of clean UI and consistency...",
    author: "Team Visualize",
    date: "2025-06-26",
    image: "https://source.unsplash.com/800x400/?design,ui",
  },
];

const Blog: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-white py-16 px-6 font-nunito text-gray-800">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-brand-black">
        Our Blog
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            to={`/blog/${post.id}`}
            key={post.id}
            className="bg-white border border-gray-100 shadow-lg hover:shadow-xl rounded-3xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-base mb-4">{post.excerpt}</p>
              <p className="text-sm text-gray-400 italic">
                By {post.author} on {post.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
