"use client";

import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

const services = [
  {
    id: 1,
    name: "Branding",
    description:
      "Create a powerful brand identity that resonates with your audience. From logos to brand guidelines, we craft cohesive visual systems.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Color Palette",
      "Typography",
      "Brand Strategy",
    ],
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    color: "from-primary to-primary",
    bgColor: "bg-primary/10",
    textColor: "text-primary",
  },
  {
    id: 2,
    name: "UI/UX Design",
    description:
      "Design intuitive and engaging user experiences that delight your customers and drive conversions with data-driven insights.",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "User Testing",
      "Interface Design",
    ],
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        />
      </svg>
    ),
    color: "from-accent to-highlight",
    bgColor: "bg-accent/20",
    textColor: "text-primary",
  },
  {
    id: 3,
    name: "Web Design",
    description:
      "Build stunning, responsive websites that convert visitors into customers. Modern designs powered by cutting-edge technology.",
    features: [
      "Responsive Design",
      "Landing Pages",
      "E-commerce",
      "CMS Integration",
      "SEO Optimization",
    ],
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    color: "from-highlight to-primary",
    bgColor: "bg-highlight/10",
    textColor: "text-highlight",
  },
  {
    id: 4,
    name: "Packaging Design",
    description:
      "Stand out on the shelf with eye-catching packaging that tells your brand story and attracts your target customers.",
    features: [
      "Label Design",
      "Box Design",
      "3D Mockups",
      "Print Ready Files",
      "Dieline Creation",
    ],
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    color: "from-rose-600 to-orange-600",
    bgColor: "bg-rose-100",
    textColor: "text-rose-600",
  },
  {
    id: 5,
    name: "Marketing Design",
    description:
      "Create compelling marketing materials that drive engagement and sales. From social media to print, we've got you covered.",
    features: [
      "Social Media Graphics",
      "Email Templates",
      "Ads & Banners",
      "Infographics",
      "Presentation Design",
    ],
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
      </svg>
    ),
    color: "from-highlight to-accent",
    bgColor: "bg-orange-100",
    textColor: "text-orange-600",
  },
  {
    id: 6,
    name: "Monthly Subscriptions",
    description:
      "Get unlimited design requests with our flexible subscription plans. Perfect for growing businesses with ongoing design needs.",
    features: [
      "Unlimited Requests",
      "Fast Turnaround",
      "Dedicated Designer",
      "Cancel Anytime",
      "All Design Types",
    ],
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    color: "from-accent to-highlight",
    bgColor: "bg-accent/20",
    textColor: "text-primary",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-white via-white to-accent/5 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-primary to-primary mb-6">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your brand with our comprehensive design services. Powered
            by talent and AI, we deliver exceptional results that drive growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Header */}
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

              <div className="p-8">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center h-16 w-16 rounded-xl ${service.bgColor} ${service.textColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <svg
                        className={`h-5 w-5 ${service.textColor} flex-shrink-0`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full h-10 px-4 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 hover:shadow-md transition-all duration-300 group-hover:scale-[1.02]">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
            Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-10 px-4 bg-white text-primary text-sm font-semibold rounded-full hover:shadow-md transition-all duration-300 hover:scale-105"
              data-project-type="Services"
              onClick={(e) => {
                try {
                  const el = e.currentTarget as HTMLAnchorElement;
                  const projectType =
                    el.getAttribute("data-project-type") || "";
                  const url = `/contact?projectType=${encodeURIComponent(
                    projectType
                  )}`;
                  e.preventDefault();
                  window.location.href = url;
                } catch {}
              }}
            >
              Start a Project
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center h-10 px-4 bg-transparent text-white text-sm font-semibold rounded-full border-2 border-white hover:bg-white/20 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Projects Completed", value: "500+" },
            { label: "Happy Clients", value: "200+" },
            { label: "Years Experience", value: "10+" },
            { label: "Team Members", value: "25+" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-primary bg-clip-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
