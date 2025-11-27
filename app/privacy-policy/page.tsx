"use client";
import { motion } from "framer-motion";
import SiteFooter from "@/components/SiteFooter";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-soft-white via-white to-accent/5 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Effective Date: November 26, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-primary mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At DesignPi, we respect your privacy and are committed to
                protecting your personal data. This privacy policy explains how
                we collect, use, store, and share information about you when you
                use our website and services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using our services, you agree to the collection and use of
                information in accordance with this policy. If you do not agree
                with our policies and practices, please do not use our services.
              </p>
            </div>

            {/* What Data We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-primary mb-4">
                What Data We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  phone number, company name, and other contact details you
                  provide when signing up or contacting us.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you
                  interact with our website, including IP address, browser type,
                  pages visited, time spent, and referring URLs.
                </li>
                <li>
                  <strong>Cookies and Tracking:</strong> We use cookies and
                  similar technologies to track activity and store certain
                  information. You can control cookies through your browser
                  settings.
                </li>
                <li>
                  <strong>Communication Data:</strong> Records of
                  correspondence, support tickets, feedback, and inquiries
                  submitted through our contact forms or support channels.
                </li>
              </ul>
            </div>

            {/* How We Use Data */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-primary mb-4">
                How We Use Your Data
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the collected data for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Providing and maintaining our services</li>
                <li>
                  Communicating with you about projects, updates, and support
                </li>
                <li>Improving our website, products, and user experience</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Analyzing usage trends and measuring effectiveness</li>
                <li>
                  Detecting, preventing, and addressing technical issues or
                  fraud
                </li>
                <li>
                  Complying with legal obligations and enforcing our terms
                </li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-primary mb-4">
                Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies and similar tracking technologies to track
                activity on our website and hold certain information. Cookies
                are files with a small amount of data that may include an
                anonymous unique identifier.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You can instruct your browser to refuse all cookies or to
                indicate when a cookie is being sent. However, if you do not
                accept cookies, you may not be able to use some portions of our
                service.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-primary mb-4">
                Third-Party Services
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may employ third-party companies and services to facilitate
                our service, provide the service on our behalf, perform
                service-related tasks, or assist us in analyzing how our service
                is used.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These third parties may have access to your personal data only
                to perform these tasks on our behalf and are obligated not to
                disclose or use it for any other purpose. Examples include
                analytics providers, email service providers, and hosting
                platforms.
              </p>
            </div>

            {/* User Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-primary mb-4">
                Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have certain rights
                regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <strong>Access:</strong> Request a copy of the personal data
                  we hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  or incomplete data.
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  data under certain conditions.
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data to
                  another service provider.
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> Withdraw consent for data
                  processing where consent was the basis.
                </li>
                <li>
                  <strong>Object:</strong> Object to processing of your personal
                  data for direct marketing or other purposes.
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the
                information provided below.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-primary mb-4">
                Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the internet or electronic storage is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-primary mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy, or if you
                wish to exercise your data rights, please contact us:
              </p>
              <ul className="list-none space-y-2 text-gray-600 mt-4">
                <li>
                  <strong>Email:</strong> privacy@designpi.com
                </li>
                <li>
                  <strong>Address:</strong> DesignPi, 123 Design Street,
                  Creative City, CA 94000
                </li>
              </ul>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-primary mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Effective Date" at the top.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You are advised to review this Privacy Policy periodically for
                any changes. Changes are effective when posted on this page.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
