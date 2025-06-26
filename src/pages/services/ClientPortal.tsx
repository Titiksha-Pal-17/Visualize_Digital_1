import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  User,
  BarChart3,
  Calendar,
  CreditCard,
  MessageSquare,
  HelpCircle,
} from "lucide-react";

const ClientPortal = () => {
  const services = [
    {
      title: "Project Dashboard",
      description:
        "Comprehensive project overview with real-time progress tracking, milestones, and task management.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Reports & Analytics",
      description:
        "Detailed performance reports and analytics with custom dashboards and automated reporting schedules.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Campaign Calendar",
      description:
        "Visual campaign calendar with scheduled posts, campaign launches, and important marketing dates.",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Invoice & Payments",
      description:
        "Integrated billing system with invoice management, payment tracking, and automated payment processing.",
      icon: <CreditCard className="w-6 h-6" />,
    },
    {
      title: "Communication Log",
      description:
        "Centralized communication hub with message history, file sharing, and team collaboration tools.",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      title: "Support Tickets",
      description:
        "Dedicated support system with ticket management, priority handling, and response time tracking.",
      icon: <HelpCircle className="w-6 h-6" />,
    },
    {
      title: "Resource Library",
      description:
        "Access to marketing resources, brand assets, templates, and educational materials.",
      icon: <User className="w-6 h-6" />,
    },
    {
      title: "Performance Metrics",
      description:
        "Real-time KPI tracking with customizable metrics and goal monitoring for all campaigns.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="bg-gray-50 py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm">
          <Link
            to="/services"
            className="text-brand-teal hover:underline font-inter"
          >
            Services
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 font-inter">Client Portal</span>
        </div>
      </div>

      <section className="bg-hero-gradient py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 font-inter"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-inter">
                Client Portal
              </h1>
              <p className="text-xl text-[#D2D0DD] mb-8 font-inter">
                Dedicated client dashboard for project management, reports,
                communication, and seamless collaboration with complete
                transparency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-button-gradient px-8 py-4 rounded-29 text-white font-inter text-lg shadow-glow hover:scale-105 transition-transform">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-29 font-inter text-lg hover:bg-white hover:text-gray-900 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="w-full h-80 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <User className="w-32 h-32 text-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-inter">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6 font-inter">
                    {service.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-brand-teal text-white px-6 py-3 rounded-lg font-inter font-medium hover:bg-brand-teal/90 transition-colors">
                      Learn More
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-inter font-medium hover:border-brand-teal hover:text-brand-teal transition-colors">
                      Try Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-inter">
            Ready for Complete Transparency?
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-inter">
            Experience seamless project management and real-time insights with
            our dedicated client portal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-button-gradient px-8 py-4 rounded-29 text-white font-inter text-lg shadow-glow hover:scale-105 transition-transform">
              Access Portal
            </button>
            <button className="border-2 border-brand-teal text-brand-teal px-8 py-4 rounded-29 font-inter text-lg hover:bg-brand-teal hover:text-white transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClientPortal;
