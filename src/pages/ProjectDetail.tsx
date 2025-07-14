import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Star,
  CheckCircle,
  Code,
  Database,
  Globe,
  Smartphone,
  Cloud,
  Zap,
} from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();

  // Extended project data with all details needed for the design
  const projectsData = {
    "1": {
      id: 1,
      name: "SAAS Based Social Media Platform",
      category: "E-commerce",
      subtitle:
        "Streamlining Social Media Management with Advanced Scheduling, Analytics, and Collaboration Tools",
      tags: ["React", "Node.js", "MongoDB"],
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      heroImage:
        "https://images.pexels.com/photos/7372944/pexels-photo-7372944.jpeg?auto=compress&cs=tinysrgb&w=1200",
      summary:
        "A comprehensive marketplace platform connecting buyers and sellers with advanced search, payment integration, and real-time chat.",
      year: "2024",
      client: "RetailCorp",
      rating: 5,
      industries: ["Publishing Advertisement and Social Media"],
      services: [
        "Custom Software Development",
        "API Integration and Maintenance",
        "Scalable Infrastructure",
        "UI/UX Design",
        "Quality Assurance",
      ],
      technologies: ["Angular", "C#.NET", "HTML5"],
      overview: "We're here to Increase your Productivity",
      detailedDescription:
        "Let's take you and your team captures and every unity by Teamo Collaboration and critical thinking solutions within the Team Collaboration environment.",
      fullDescription:
        "OverPatch Social Dashboard, is a new style social media management platform that helps teams streamline and unify internal workflows within a single tab. The dashboard provides powerful insights that enhance team productivity by merging ideas such as Facebook, Twitter, Instagram and LinkedIn, saving 70% habits of logging into multiple accounts. Key features also allow for many social content calendar, schedule, timeline, analysis of analytics, and tracking responses from targeted oven audience through the use of insightful trends on each medium.",
      features: [
        {
          title: "Cloud Storage",
          description:
            "Secure cloud storage solution for all your social media assets and content",
          icon: Cloud,
        },
        {
          title: "Data Analytics",
          description:
            "Advanced analytics to track performance and engagement across platforms",
          icon: Database,
        },
        {
          title: "Will",
          description:
            "Intelligent automation features for content scheduling and posting",
          icon: Zap,
        },
      ],
      problems: [
        {
          title: "Integration Complexity",
          description:
            "Connecting diverse platforms through their unique APIs leads to complex unified interface requires meticulous work. Integration and the complexity require sophisticated software solutions to seamlessly connect integration into APIs.",
        },
      ],
      solutions: [
        {
          title: "Integration Complexity",
          description:
            "Connecting diverse platforms through their unique APIs leads to complex unified interface requires meticulous work. Integration and the complexity require sophisticated software solutions to seamlessly connect integration into APIs.",
          icon: CheckCircle,
        },
      ],
      results: {
        description:
          "Through our rigorous development efforts, the team developed an effective social media management system to communicate with other products and markets, our first task isn't just about customer feedback, but also determines the optimal customer experience.",
        metrics: [
          { label: "User Engagement", value: "85%" },
          { label: "Performance Boost", value: "70%" },
          { label: "Time Saved", value: "60%" },
        ],
      },
      teamMembers: [
        {
          name: "Anna Matharskaya",
          role: "Project Manager",
          image:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
          skills: ["CSS", "HTML"],
        },
        {
          name: "Sevara Ray",
          role: "Product Designer",
          image:
            "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
          skills: ["UI", "UX"],
        },
        {
          name: "Soni Thapa",
          role: "Frontend Developer",
          image:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
          skills: ["JS", "React"],
        },
        {
          name: "Shradha Bora",
          role: "Backend Developer",
          image:
            "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
          skills: ["Node", "API"],
        },
      ],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
    },
    // Add more project data as needed
  };

  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen bg-hero-gradient font-inter text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-brand-teal hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-inter text-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 px-4 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {project.name}
                </h1>
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src={project.heroImage}
                  alt={project.name}
                  className="w-full h-80 object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Project */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            About the Project
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Industries */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                Industries
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.industries.map((industry, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                Services
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-pink-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Project Overview
              </h3>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">
                {project.overview}
              </h4>
              <p className="text-gray-700 mb-6">
                {project.detailedDescription}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>Rating:</span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < project.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-teal-500 p-8 rounded-lg text-white">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Team member"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">Project Lead</h4>
                  <p className="text-white/80">{project.client}</p>
                </div>
              </div>
              <p className="text-white/90">{project.fullDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            Our Features you can get
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">The Problem</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{problem.title}</h3>
                <p className="text-white/90">{problem.description}</p>
              </div>
            ))}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Integration Complexity
              </h3>
              <p className="text-white/90">
                Connecting diverse platforms through their unique APIs leads to
                complex unified interface requires meticulous work.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">?</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            The Solution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Result */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">The Result</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 mb-8">
                {project.results.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.results.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-teal-500 to-cyan-600 p-6 rounded-lg text-white"
                  >
                    <div className="text-3xl font-bold mb-2">
                      {metric.value}
                    </div>
                    <div className="text-white/80">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/7372944/pexels-photo-7372944.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Project result"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Project result"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Members */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            Meet Our Team Members
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-3">{member.role}</p>
                <div className="flex justify-center gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">
              Executive Members +
            </button>
          </div>
        </div>
      </section>

      {/* View Other Projects */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            View your other projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="bg-gray-900 text-white p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold mb-4">
                  Featured Case Studies
                </h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive social media management platform
                </p>
                <img
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Case study"
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <div className="text-green-400 mb-4">
                  <div>✓ Creating AI experiences</div>
                  <div>✓ with innovation</div>
                </div>
                <button className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-100 transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-12 px-4 bg-gradient-to-r from-teal-600 to-cyan-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Live Project
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
              >
                <Github className="w-4 h-4" />
                View Source Code
              </a>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
