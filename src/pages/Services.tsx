import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import {
  Target,
  Search,
  Users,
  Mail,
  BarChart3,
  Globe,
  Lightbulb,
  Package,
  Settings,
  User,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "performance-marketing",
      title: "Performance Marketing",
      description:
        "Data-driven advertising campaigns that deliver measurable results across all major platforms.",
      icon: Target,
      path: "/services/performance-marketing",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: "seo-content",
      title: "SEO & Content",
      description:
        "Comprehensive SEO strategies and content marketing to boost your organic visibility.",
      icon: Search,
      path: "/services/seo-content",
      gradient: "from-green-500 to-teal-600",
    },
    {
      id: "social-media-marketing",
      title: "Social Media Marketing",
      description:
        "Engaging social media strategies that build communities and drive conversions.",
      icon: Users,
      path: "/services/social-media-marketing",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      id: "email-sms-marketing",
      title: "Email & SMS Marketing",
      description:
        "Automated email campaigns and SMS marketing that nurture leads and retain customers.",
      icon: Mail,
      path: "/services/email-sms-marketing",
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: "analytics-cro",
      title: "Analytics & CRO",
      description:
        "Deep analytics insights and conversion optimization to maximize your ROI.",
      icon: BarChart3,
      path: "/services/analytics-cro",
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      id: "web-app-services",
      title: "Web & App Services",
      description:
        "Professional web development and mobile app optimization services.",
      icon: Globe,
      path: "/services/web-app-services",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: "strategy-consultation",
      title: "Strategy & Consultation",
      description:
        "Expert digital marketing strategy and consultation to accelerate your growth.",
      icon: Lightbulb,
      path: "/services/strategy-consultation",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      id: "industry-packages",
      title: "Industry Packages",
      description:
        "Tailored marketing solutions designed for specific industries and business types.",
      icon: Package,
      path: "/services/industry-packages",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      id: "tools-integrations",
      title: "Tools & Integrations",
      description:
        "Marketing automation tools and seamless integrations for enhanced efficiency.",
      icon: Settings,
      path: "/services/tools-integrations",
      gradient: "from-slate-500 to-gray-600",
    },
    {
      id: "client-portal",
      title: "Client Portal",
      description:
        "Dedicated client dashboard for project management, reports, and communication.",
      icon: User,
      path: "/services/client-portal",
      gradient: "from-violet-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-hero-gradient py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold font-inter text-white mb-6 bg-hero-text-gradient bg-clip-text text-transparent">
            Our Digital Marketing Services
          </h1>
          <p className="text-xl text-[#D2D0DD] max-w-3xl mx-auto font-inter">
            Comprehensive digital marketing solutions designed to accelerate
            your business growth and maximize ROI.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-inter">
              Choose Your Service Category
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              Select a service category to explore our detailed offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.id}
                  to={service.path}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-teal/30 hover:-translate-y-2">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-inter group-hover:text-brand-teal transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 font-inter leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center text-brand-teal font-semibold font-inter group-hover:gap-3 transition-all duration-300">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-inter">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-inter">
            Let's discuss how our digital marketing services can help accelerate
            your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-button-gradient px-8 py-4 rounded-29 text-white font-inter text-lg shadow-glow hover:scale-105 transition-transform">
              Book a Consultation
            </button>
            <button className="border-2 border-brand-teal text-brand-teal px-8 py-4 rounded-29 font-inter text-lg hover:bg-brand-teal hover:text-white transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
