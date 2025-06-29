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
    image: "https://via.placeholder.com/600x300", // Replace with real path
  },
  {
    id: 2,
    title: "Why Visual Design Matters",
    excerpt: "We dive into the importance of clean UI and consistency...",
    author: "Team Visualize",
    date: "2025-06-26",
    image: "https://via.placeholder.com/600x300",
  },
];

const Blog: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link
            to={`/blog/${post.id}`}
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <div className="text-sm text-gray-400 mt-4">
                By {post.author} on {post.date}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
