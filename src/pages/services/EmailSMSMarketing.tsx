import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MessageSquare, Zap, Users } from "lucide-react";

const EmailSMSMarketing = () => {
  const services = [
    {
      title: "Bulk Email Campaigns",
      description:
        "Strategic mass email campaigns with professional design, compelling copy, and optimized delivery rates.",
      icon: <Mail className="w-6 h-6" />,
    },
    {
      title: "Email Automation (Drip Marketing)",
      description:
        "Automated email sequences that nurture leads, onboard customers, and drive repeat purchases.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Transactional Emails",
      description:
        "Professional transactional email templates for order confirmations, receipts, and customer communications.",
      icon: <Mail className="w-6 h-6" />,
    },
    {
      title: "Newsletter Design",
      description:
        "Engaging newsletter templates and content that keep your audience informed and engaged.",
      icon: <Mail className="w-6 h-6" />,
    },
    {
      title: "Bulk SMS",
      description:
        "High-delivery SMS campaigns for promotions, alerts, and time-sensitive communications.",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      title: "WhatsApp Marketing",
      description:
        "WhatsApp Business API integration for customer support, updates, and marketing messages.",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      title: "Custom API Integrations",
      description:
        "Custom integrations with your existing systems for seamless email and SMS automation.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "List Management",
      description:
        "Advanced list segmentation and management to improve targeting and engagement rates.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm">
          <Link
            to="/services"
            className="text-brand-teal hover:underline font-inter"
          >
            Services
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 font-inter">
            Email & SMS Marketing
          </span>
        </div>
      </div>

      {/* Hero Section */}
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
                Email & SMS Marketing
              </h1>
              <p className="text-xl text-[#D2D0DD] mb-8 font-inter">
                Automated email campaigns and SMS marketing that nurture leads,
                retain customers, and drive consistent revenue growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-button-gradient px-8 py-4 rounded-29 text-white font-inter text-lg shadow-glow hover:scale-105 transition-transform">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-29 font-inter text-lg hover:bg-white hover:text-gray-900 transition-colors">
                  View Templates
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="w-full h-80 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center">
                <Mail className="w-32 h-32 text-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white">
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
                      View Templates
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-inter">
            Ready to Automate Your Marketing?
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-inter">
            Let's create automated email and SMS campaigns that nurture leads
            and drive consistent sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-button-gradient px-8 py-4 rounded-29 text-white font-inter text-lg shadow-glow hover:scale-105 transition-transform">
              Start Automation
            </button>
            <button className="border-2 border-brand-teal text-brand-teal px-8 py-4 rounded-29 font-inter text-lg hover:bg-brand-teal hover:text-white transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailSMSMarketing;
