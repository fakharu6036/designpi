"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
          source: "website",
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
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>

      {status === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-full">
          Thank you for contacting us! We'll get back to you soon.
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-full">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
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
            className="w-full px-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent"
            disabled={status === "submitting"}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
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
            className="w-full px-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent"
            disabled={status === "submitting"}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent"
            disabled={status === "submitting"}
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent"
            disabled={status === "submitting"}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            disabled={status === "submitting"}
            maxLength={5000}
          />
          <p className="mt-1 text-sm text-gray-500">
            {formData.message.length}/5000 characters
          </p>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full h-10 px-4 bg-[#1a1a1a] text-sm font-semibold rounded-full hover:bg-[#1a1a1a]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-md"
          style={{ color: "#ffffff" }}
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
