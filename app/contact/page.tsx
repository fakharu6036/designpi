"use client";
import { useEffect, useState } from "react";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [tier, setTier] = useState("");
  const [sourcePage, setSourcePage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Capture query params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tierParam = params.get("tier") || "";
    const sourceParam = params.get("source") || "";

    setTier(tierParam);
    setSourcePage(sourceParam);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "contact-page",
          tier: tier || undefined,
          sourcePage: sourcePage || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-white via-white to-accent/5 pt-24 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-primary border border-blue-100">
                ✨ We'd Love to Hear From You
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? We'd love to hear about it. Send us a
              message and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 p-8 md:p-10">
              <h2 className="text-3xl font-black text-primary mb-8">
                Send us a message
              </h2>

              {status === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-start gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="h-4 w-4 text-green-600"
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
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-green-900 mb-1">
                      Message sent successfully!
                    </h3>
                    <p className="text-sm text-green-700">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center">
                    <svg
                      className="h-4 w-4 text-red-600"
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
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-red-900 mb-1">
                      Failed to send message
                    </h3>
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Display selected tier if available */}
                {tier && (
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-2xl">
                    <p className="text-sm text-blue-900">
                      <span className="font-semibold">Selected Plan:</span>{" "}
                      {tier}
                    </p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      disabled={status === "submitting"}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      disabled={status === "submitting"}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      disabled={status === "submitting"}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      disabled={status === "submitting"}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all"
                    disabled={status === "submitting"}
                    maxLength={5000}
                    placeholder="Tell us about your project..."
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    {formData.message.length}/5000 characters
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full h-12 px-8 bg-[#1a1a1a] font-semibold rounded-full hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all flex items-center justify-center gap-2"
                  style={{ color: "#ffffff" }}
                >
                  {status === "submitting" ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg
                        className="h-5 w-5"
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
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 p-8">
                <h2 className="text-3xl font-black text-primary mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-highlight"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:hello@designpi.com"
                        className="text-highlight hover:text-primary transition-colors"
                      >
                        hello@designpi.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-highlight"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">Monday - Friday</p>
                      <p className="text-gray-600">9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-highlight"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        Live Chat
                      </h3>
                      <p className="text-gray-600">Available 24/7</p>
                      <button className="text-highlight hover:text-primary transition-colors text-sm font-medium">
                        Start a conversation →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-primary via-primary to-gray-800 rounded-3xl shadow-lg hover:shadow-xl transition-shadow p-8 text-white">
                <h2 className="text-3xl font-black mb-4">Need Help Faster?</h2>
                <p className="text-white/90 text-lg mb-6">
                  Check out our resources or chat with our AI assistant for
                  instant answers.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/assistant"
                    className="block w-full px-6 py-3 bg-highlight text-white font-semibold rounded-full hover:shadow-lg hover:scale-[1.02] transition-all text-center"
                  >
                    Try AI Assistant
                  </Link>
                  <Link
                    href="/pricing"
                    className="block w-full px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all text-center border border-white/20"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
