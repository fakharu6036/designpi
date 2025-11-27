"use client";

import { useState } from "react";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

const plans = [
  {
    name: "Starter",
    price: "2,500",
    period: "per month",
    description:
      "Perfect for small businesses and startups looking to establish their brand presence.",
    features: [
      "Up to 5 design requests per month",
      "48-hour turnaround time",
      "2 revisions per project",
      "Branding & Logo Design",
      "Social Media Graphics",
      "Email support",
      "Standard file formats",
      "Commercial license",
    ],
    cta: "Get Started",
    popular: false,
    color: "from-primary to-primary",
  },
  {
    name: "Business",
    price: "4,999",
    period: "per month",
    description:
      "Ideal for growing companies with regular design needs and multiple projects.",
    features: [
      "Unlimited design requests",
      "24-hour turnaround time",
      "Unlimited revisions",
      "All Starter features",
      "Web Design & Development",
      "UI/UX Design",
      "Marketing Materials",
      "Packaging Design",
      "Priority support",
      "Dedicated designer",
      "Brand guidelines",
      "Source files included",
    ],
    cta: "Start Free Trial",
    popular: true,
    color: "from-accent to-highlight",
  },
  {
    name: "Agency",
    price: "9,999",
    period: "per month",
    description:
      "For agencies and large teams requiring high-volume design output and premium support.",
    features: [
      "Unlimited design requests",
      "12-hour turnaround time",
      "Unlimited revisions",
      "All Business features",
      "Dedicated design team",
      "Account manager",
      "Video & Motion Graphics",
      "3D Rendering",
      "Custom integrations",
      "White-label options",
      "24/7 priority support",
      "Quarterly strategy sessions",
      "Custom SLA",
    ],
    cta: "Contact Sales",
    popular: false,
    color: "from-highlight to-primary",
  },
];

const comparisonFeatures = [
  {
    category: "Design Requests",
    features: [
      {
        name: "Monthly requests",
        starter: "5",
        business: "Unlimited",
        agency: "Unlimited",
      },
      { name: "Active requests", starter: "1", business: "3", agency: "5" },
      {
        name: "Turnaround time",
        starter: "48 hours",
        business: "24 hours",
        agency: "12 hours",
      },
      {
        name: "Revisions",
        starter: "2 per project",
        business: "Unlimited",
        agency: "Unlimited",
      },
    ],
  },
  {
    category: "Services Included",
    features: [
      { name: "Branding & Logo", starter: true, business: true, agency: true },
      {
        name: "Social Media Graphics",
        starter: true,
        business: true,
        agency: true,
      },
      { name: "Web Design", starter: false, business: true, agency: true },
      { name: "UI/UX Design", starter: false, business: true, agency: true },
      {
        name: "Packaging Design",
        starter: false,
        business: true,
        agency: true,
      },
      {
        name: "Marketing Materials",
        starter: false,
        business: true,
        agency: true,
      },
      {
        name: "Video & Motion Graphics",
        starter: false,
        business: false,
        agency: true,
      },
      { name: "3D Rendering", starter: false, business: false, agency: true },
    ],
  },
  {
    category: "Support & Team",
    features: [
      { name: "Email Support", starter: true, business: true, agency: true },
      {
        name: "Priority Support",
        starter: false,
        business: true,
        agency: true,
      },
      { name: "24/7 Support", starter: false, business: false, agency: true },
      {
        name: "Dedicated Designer",
        starter: false,
        business: true,
        agency: true,
      },
      { name: "Design Team", starter: false, business: false, agency: true },
      {
        name: "Account Manager",
        starter: false,
        business: false,
        agency: true,
      },
    ],
  },
  {
    category: "Additional Benefits",
    features: [
      {
        name: "Commercial License",
        starter: true,
        business: true,
        agency: true,
      },
      { name: "Source Files", starter: false, business: true, agency: true },
      {
        name: "Brand Guidelines",
        starter: false,
        business: true,
        agency: true,
      },
      {
        name: "White-label Options",
        starter: false,
        business: false,
        agency: true,
      },
      {
        name: "Custom Integrations",
        starter: false,
        business: false,
        agency: true,
      },
      {
        name: "Strategy Sessions",
        starter: false,
        business: false,
        agency: true,
      },
    ],
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-white via-white to-accent/5 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary mb-6">
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
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your needs. All plans include unlimited
            revisions and cancel anytime.
          </p>

          {/* Toggle (Optional for future annual billing) */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full p-1 shadow-md">
            <button
              onClick={() => setIsAnnual(false)}
              className={`h-10 px-6 rounded-full text-sm font-semibold transition-all duration-300 ${
                !isAnnual
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`h-10 px-6 rounded-full text-sm font-semibold transition-all duration-300 ${
                isAnnual
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-xl border-2 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular ? "border-highlight scale-105" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-highlight text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-black text-primary mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-primary">
                      $
                      {isAnnual
                        ? (
                            parseInt(plan.price.replace(",", "")) * 0.8
                          ).toLocaleString()
                        : plan.price}
                    </span>
                    <span className="text-gray-600">
                      /{isAnnual ? "month" : "month"}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-green-600 font-medium mt-1">
                      Billed annually ($
                      {(
                        parseInt(plan.price.replace(",", "")) *
                        0.8 *
                        12
                      ).toLocaleString()}
                      /year)
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {plan.description}
                </p>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="block w-full h-10 px-4 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 hover:shadow-md transition-all duration-300 text-center flex items-center justify-center mb-8"
                  data-tier={plan.name}
                  data-price={plan.price}
                  data-project-type={plan.name}
                  onClick={(e) => {
                    try {
                      const el = e.currentTarget as HTMLAnchorElement;
                      const tier = el.getAttribute("data-tier") || "";
                      const price = el.getAttribute("data-price") || "";
                      const projectType =
                        el.getAttribute("data-project-type") || "";
                      const url = `/contact?tier=${encodeURIComponent(
                        tier
                      )}&price=${encodeURIComponent(
                        price
                      )}&projectType=${encodeURIComponent(projectType)}`;
                      e.preventDefault();
                      window.location.href = url;
                    } catch {}
                  }}
                >
                  {plan.cta}
                </Link>

                {/* Features */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-900 mb-4">
                    What's included:
                  </p>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg
                        className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5"
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
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-7xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Detailed Comparison
          </h2>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Features
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">
                      Starter
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">
                      Business
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">
                      Agency
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category, catIndex) => (
                    <>
                      <tr key={`cat-${catIndex}`} className="bg-gray-50">
                        <td
                          colSpan={4}
                          className="px-6 py-3 text-sm font-bold text-gray-900"
                        >
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr
                          key={`feature-${catIndex}-${featureIndex}`}
                          className="border-t border-gray-200 hover:bg-gray-50"
                        >
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {feature.name}
                          </td>
                          <td className="px-6 py-4 text-center text-sm">
                            {typeof feature.starter === "boolean" ? (
                              feature.starter ? (
                                <svg
                                  className="h-5 w-5 text-green-600 mx-auto"
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
                              ) : (
                                <svg
                                  className="h-5 w-5 text-gray-300 mx-auto"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              )
                            ) : (
                              <span className="text-gray-700 font-medium">
                                {feature.starter}
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center text-sm">
                            {typeof feature.business === "boolean" ? (
                              feature.business ? (
                                <svg
                                  className="h-5 w-5 text-green-600 mx-auto"
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
                              ) : (
                                <svg
                                  className="h-5 w-5 text-gray-300 mx-auto"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              )
                            ) : (
                              <span className="text-gray-700 font-medium">
                                {feature.business}
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center text-sm">
                            {typeof feature.agency === "boolean" ? (
                              feature.agency ? (
                                <svg
                                  className="h-5 w-5 text-green-600 mx-auto"
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
                              ) : (
                                <svg
                                  className="h-5 w-5 text-gray-300 mx-auto"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              )
                            ) : (
                              <span className="text-gray-700 font-medium">
                                {feature.agency}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ CTA */}
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 text-center force-white shadow-2xl bg-gradient-to-br from-deep-blue via-primary to-black/80">
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/5 blur-xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/10 blur-xl" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#ffffff" }}
          >
            Still have questions?
          </h2>
          <div className="mx-auto mb-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 mb-4">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              <span className="text-xs font-semibold tracking-wide">
                Priority assistance
              </span>
            </div>
            <p className="text-xl text-white/90" style={{ color: "#ffffff" }}>
              Our team can advise on the best plan, migration options, and
              custom needs. Get tailored guidance in minutes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center h-10 px-4 text-sm font-semibold rounded-full btn-outline-white hover:bg-white/10 transition-all"
              aria-label="Contact Sales"
            >
              Contact Sales
              <svg
                className="ml-2 h-5 w-5"
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
              href="/contact"
              className="group inline-flex items-center justify-center h-10 px-4 text-sm font-semibold rounded-full btn-white hover:bg-soft-white transition-all"
              aria-label="Get Support"
            >
              Get Support
            </Link>
            <div className="sr-only" aria-live="polite">
              Actions open the contact form.
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="rounded-xl bg-white/5 p-4">
              <div className="text-sm font-semibold mb-1">Response time</div>
              <div className="text-white/80">Typically under 24 hours</div>
            </div>
            <div className="rounded-xl bg-white/5 p-4">
              <div className="text-sm font-semibold mb-1">Coverage</div>
              <div className="text-white/80">
                Billing, migration, custom quotes
              </div>
            </div>
            <div className="rounded-xl bg-white/5 p-4">
              <div className="text-sm font-semibold mb-1">Channels</div>
              <div className="text-white/80">Email and scheduled call</div>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
