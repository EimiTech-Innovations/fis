// src/pages/CookiePolicy.js

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const CookiePolicy: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className="py-20 bg-no-repeat bg-cover bg-heroBg">
        <div className="container px-6 mx-auto">
          <p className="py-5 text-sm font-semibold text-gray-600">
            <Link to="/" className="hover:underline decoration-gray-500">Home</Link> /
            <Link to="/cookie-policy" className="hover:underline decoration-gray-500"> Cookie Policy</Link>
          </p>
          <h2 className="pt-5 text-3xl font-bold text-gray-800">Cookie Policy</h2>
        </div>
      </section>

      <div className="container px-6 py-10 mx-auto bg-white rounded-lg shadow-md lg:w-2/3">
        <p className="py-5 text-gray-700">
          {/* TODO: main links eg. fis.com once domain is bought */}
          Welcome to FIS Cookie Policy. This policy explains how we
          use cookies and similar tracking technologies on our website to provide a
          better user experience, personalize content, and analyze our traffic.
        </p>

        <h2 className="pt-5 text-xl font-semibold text-gray-800">What Are Cookies?</h2>
        <p className="text-gray-700">
          Cookies are small files stored on your device that allow websites to
          recognize you and remember your preferences over time. Cookies may be set
          by us (first-party cookies) or by third parties (third-party cookies).
        </p>

        <h2 className="pt-5 text-xl font-semibold text-gray-800">Why We Use Cookies</h2>
        <p className="text-gray-700">We use cookies for the following purposes:</p>
        <ul className="ml-6 space-y-2 text-gray-700 list-disc">
          <li>
            <strong>Necessary Cookies:</strong> These cookies are essential for the
            functionality of our website. They allow you to navigate our site and use
            our features.
          </li>
          <li>
            <strong>Performance and Analytics Cookies:</strong> These cookies help us
            understand how visitors interact with our website, providing insights that
            allow us to improve the site’s functionality and user experience.
          </li>
          <li>
            <strong>Functional Cookies:</strong> These cookies remember your choices
            (e.g., language preferences) to provide a personalized experience.
          </li>
          <li>
            <strong>Targeting and Advertising Cookies:</strong> We use these cookies
            to deliver ads relevant to your interests and to track the effectiveness
            of our ad campaigns.
          </li>
        </ul>

        <h2 className="pt-5 pb-3 text-xl font-semibold text-gray-800">Types of Cookies We Use</h2>
        <table className="w-full text-sm text-left border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border border-gray-300">Type</th>
              <th className="p-3 border border-gray-300">Purpose</th>
              <th className="p-3 border border-gray-300">Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="p-3">Necessary</td>
              <td className="p-3">Essential for site navigation and security.</td>
              <td className="p-3">Authentication cookies, session cookies</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-3">Analytics</td>
              <td className="p-3">Tracks site usage and performance.</td>
              <td className="p-3">Google Analytics</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-3">Preferences</td>
              <td className="p-3">Remembers user preferences (like language or region).</td>
              <td className="p-3">Localization cookies</td>
            </tr>
            <tr>
              <td className="p-3">Marketing</td>
              <td className="p-3">Targets advertisements based on user behavior and preferences.</td>
              <td className="p-3">Ad personalization cookies</td>
            </tr>
          </tbody>
        </table>

        <h2 className="pt-5 text-xl font-semibold text-gray-800">Managing Your Cookies</h2>
        <p className="text-gray-700">
          You have the right to decide whether to accept or reject cookies. You can
          modify your preferences by:
        </p>
        <ul className="ml-6 space-y-2 text-gray-700 list-disc">
          <li>
            <strong>Adjusting Browser Settings:</strong> You can set your browser to
            block or alert you about cookies. Note that disabling certain cookies may
            impact your experience on our website.
          </li>
          <li>
            <strong>Cookie Consent Banner:</strong> When you first visit our website,
            you’ll see a banner allowing you to manage your cookie preferences.
          </li>
        </ul>

        <h2 className="pt-5 text-xl font-semibold text-gray-800">Third-Party Cookies</h2>
        <p className="text-gray-700">
          We use third-party cookies to analyze website usage and improve our
          services. For instance, we use <strong>Google Analytics</strong> to
          understand how users interact with our website. Each third party has its
          own cookie policy, and we recommend reviewing these policies for more
          information.
        </p>

        <h2 className="pt-5 text-xl font-semibold text-gray-800">Data Protection and Privacy</h2>
        <p className="text-gray-700">
          We respect your privacy and are committed to handling your personal data
          responsibly. For detailed information on how we handle personal data,
          please refer to our
          <Link to="/privacy-policy" className="text-blue-500 hover:underline"> Privacy Policy </Link>.
        </p>

        <h2 className="pt-5 text-xl font-semibold text-gray-800">Rights Under GDPR and CCPA</h2>
        <p className="text-gray-700">
          <strong>GDPR:</strong> Users located in the European Union have the right
          to access, update, and delete their data, as well as restrict or object to
          data processing.
        </p>
        <p className="text-gray-700">
          <strong>CCPA:</strong> California residents have the right to request
          access to their data, delete their data, and opt-out of data sales.
        </p>
        <p className="text-gray-700">
          To exercise your rights under GDPR or CCPA, please contact us at eimitechinnovation@gmail.com.
        </p>

        <h2 className="pt-5 text-xl font-semibold text-gray-800">Updates to This Cookie Policy</h2>
        <p className="text-gray-700">
          We may update this Cookie Policy to reflect changes in technology, legal
          requirements, or our practices. Please check this page periodically for
          updates. Any significant changes will be communicated via a notice on our
          website.
        </p>

        <h2 className="pt-5 text-xl font-semibold text-gray-800">Contact Us</h2>
        <p className="mb-5 text-gray-700">
          If you have any questions about this Cookie Policy, please contact us at:
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong> eimitechinnovation@gmail.com <br />
          <strong>Address:</strong> Bangalore, India
        </p>
        <p className="mt-8 text-sm text-gray-500"><strong>Last Updated:</strong> 06/11/24</p>
      </div>
    </>


  );
}
export default CookiePolicy;
