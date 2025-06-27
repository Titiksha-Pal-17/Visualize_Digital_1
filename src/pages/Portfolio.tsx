import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink, Calendar, Users, Star } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Marketplace",
      category: "E-commerce",
      tags: ["React", "Node.js", "MongoDB"],
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      summary:
        "A comprehensive marketplace platform connecting buyers and sellers with advanced search, payment integration, and real-time chat.",
      year: "2024",
      client: "RetailCorp",
      rating: 5,
    },
    {
      id: 2,
      name: "Healthcare Management System",
      category: "Healthcare",
      tags: ["Next.js", "PostgreSQL", "AWS"],
      image:
        "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      summary:
        "HIPAA-compliant patient management system with telemedicine capabilities, appointment scheduling, and electronic health records.",
      year: "2024",
      client: "MediCare Plus",
      rating: 5,
    },
    {
      id: 3,
      name: "Financial Trading Platform",
      category: "FinTech",
      tags: ["React Native", "Django", "Redis"],
      image:
        "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800",
      summary:
        "Real-time trading platform with advanced analytics, portfolio management, and AI-powered investment recommendations.",
      year: "2023",
      client: "TradeTech Solutions",
      rating: 5,
    },
    {
      id: 4,
      name: "Learning Management System",
      category: "Education",
      tags: ["Vue.js", "Laravel", "MySQL"],
      image:
        "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
      summary:
        "Comprehensive LMS with interactive courses, progress tracking, video streaming, and collaborative learning tools.",
      year: "2023",
      client: "EduTech Academy",
      rating: 4,
    },
    {
      id: 5,
      name: "Real Estate Platform",
      category: "Real Estate",
      tags: ["Angular", "Express", "GraphQL"],
      image:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      summary:
        "Advanced property listing platform with virtual tours, mortgage calculators, and CRM integration for agents.",
      year: "2023",
      client: "PropertyPro",
      rating: 5,
    },
    {
      id: 6,
      name: "Food Delivery App",
      category: "Food & Beverage",
      tags: ["Flutter", "Firebase", "Stripe"],
      image:
        "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800",
      summary:
        "Multi-restaurant delivery platform with real-time tracking, payment processing, and loyalty programs.",
      year: "2022",
      client: "QuickEats",
      rating: 4,
    },
    {
      id: 7,
      name: "Smart City Dashboard",
      category: "Government",
      tags: ["React", "Python", "IoT"],
      image:
        "https://images.pexels.com/photos/6457495/pexels-photo-6457495.jpeg?auto=compress&cs=tinysrgb&w=800",
      summary:
        "IoT-powered city management dashboard for traffic monitoring, energy optimization, and citizen services.",
      year: "2022",
      client: "City Council",
      rating: 5,
    },
    {
      id: 8,
      name: "Social Media Analytics",
      category: "Marketing",
      tags: ["TypeScript", "D3.js", "Docker"],
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      summary:
        "Advanced analytics platform for social media performance tracking with AI-powered insights and automated reporting.",
      year: "2022",
      client: "SocialMetrics",
      rating: 4,
    },
    {
      id: 9,
      name: "Gaming Tournament Platform",
      category: "Gaming",
      tags: ["Unity", "WebRTC", "Kubernetes"],
      image:
        "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      summary:
        "Esports tournament platform with live streaming, bracket management, and spectator engagement features.",
      year: "2021",
      client: "GameArena",
      rating: 5,
    },
  ];

  const categories = [
    "All",
    "E-commerce",
    "Healthcare",
    "FinTech",
    "Education",
    "Real Estate",
    "Food & Beverage",
    "Government",
    "Marketing",
    "Gaming",
  ];

  return (
    <div className="min-h-screen bg-hero-gradient font-inter text-white overflow-hidden relative">
      {/* Background blur elements */}
      <div className="absolute top-64 right-0 w-[600px] h-[653px] rounded-full bg-gradient-to-b from-[rgba(84,84,212,0.20)] to-[rgba(84,84,212,0.08)] blur-[150px]" />
      <div className="absolute top-10 left-96 w-[467px] h-[1399px] rounded-full bg-gradient-to-b from-[rgba(251,168,28,0.11)] to-[rgba(224,86,136,0.06)] blur-[150px] rotate-[65.712deg]" />
      <div className="absolute -top-16 -left-80 w-[467px] h-[1234px] rounded-full bg-gradient-to-b from-[rgba(84,84,212,0.27)] to-[rgba(84,84,212,0.11)] blur-[150px] rotate-[-54.374deg]" />

      <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold font-inter mb-6 bg-hero-text-gradient bg-clip-text text-transparent">
            Our Work
          </h1>
          <p className="text-xl text-[#D2D0DD] max-w-4xl mx-auto font-inter leading-relaxed mb-12">
            Discover how we've transformed businesses across industries with
            innovative digital solutions that drive real results.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full border border-glass-border backdrop-blur-sm transition-all duration-300 ${
                  index === 0
                    ? "bg-brand-teal text-white"
                    : "bg-glass-white text-[#D2D0DD] hover:bg-brand-teal hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-glass-white backdrop-blur-sm border border-glass-border rounded-[24px] overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: "fadeInScale 0.6s ease-out forwards",
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="bg-brand-teal px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < project.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Project Name */}
                  <h3 className="text-xl font-bold text-white mb-2 font-inter group-hover:text-brand-teal transition-colors duration-300">
                    {project.name}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-800/50 text-xs text-[#D2D0DD] rounded-full border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Summary */}
                  <p className="text-[#D2D0DD] text-sm font-inter leading-relaxed mb-4 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Project Details & CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-[#D2D0DD]">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.client}
                      </div>
                    </div>
                    <button className="flex items-center gap-1 text-brand-teal hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100">
                      <span className="text-sm font-semibold">View More</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-inter">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-[#D2D0DD] mb-8 font-inter">
            Join our portfolio of successful clients and transform your business
            with our digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-button-gradient px-8 py-4 rounded-29 text-white font-inter text-lg shadow-glow hover:scale-105 transition-transform">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-29 font-inter text-lg hover:bg-white hover:text-gray-900 transition-colors">
              Download Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// CSS Animation for fade in with scale
const style = document.createElement("style");
style.textContent = `
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
document.head.appendChild(style);

export default Portfolio;
