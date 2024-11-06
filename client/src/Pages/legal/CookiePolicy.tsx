// src/pages/CookiePolicy.js

import React from "react";
import { Link } from "react-router-dom";

const CookiePolicy: React.FC = () => (
  <>
    <section className="py-20 mx-auto bg-no-repeat bg-cover bg-heroBg">
      <div className="container mx-auto">
        <p className="py-5 font-semibold"> <Link to={"/"} className="hover:underline decoration-bgText"> Home</Link> /
          <Link className="hover:underline decoration-bgText" to={"/cookie-policy"}> Cookie Policy </Link>
        </p>
        <h2 className="pt-5 text-3xl font-bold"> Cookie Policy </h2>
      </div>
    </section>

    <div className="container w-1/2 py-10 mx-auto ">
      <p className="py-5">
        Welcome to eimitechinn.com Cookie Policy. This policy explains how we
        use cookies and similar tracking technologies on our website to provide a
        better user experience, personalize content, and analyze our traffic.
      </p>

      <h2 className="pt-5 text-xl font-bold">What Are Cookies?</h2>
      <p className="">
        Cookies are small files stored on your device that allow websites to
        recognize you and remember your preferences over time. Cookies may be set
        by us (first-party cookies) or by third parties (third-party cookies).
      </p>

      <h2 className="pt-5 text-xl font-bold">Why We Use Cookies</h2>
      <p>We use cookies for the following purposes:</p>
      <ul className="ml-10 list-disc">
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

      <h2 className="pt-5 pb-3 text-xl font-bold">Types of Cookies We Use</h2>
      <table className="ml-10 border border-gray-600 text-md">
        <thead className="border border-gray-600">
          <tr className="border border-gray-600">
            <th className="border border-gray-600">Type</th>
            <th className="border border-gray-600">Purpose</th>
            <th className="border border-gray-600">Examples</th>
          </tr>
        </thead>
        <tbody className="border border-gray-600">
          <tr className="border border-gray-600">
            <td className="border border-gray-600">Necessary</td>
            <td className="border border-gray-600">Essential for site navigation and security.</td>
            <td className="border border-gray-600">Authentication cookies, session cookies</td>
          </tr >
          <tr className="border border-gray-600">
            <td className="border border-gray-600">Analytics</td>
            <td className="border border-gray-600">Tracks site usage and performance.</td>
            <td className="border border-gray-600">Google Analytics</td>
          </tr>
          <tr className="border border-gray-600">
            <td className="border border-gray-600"> Preferences</td>
            <td className="border border-gray-600">Remembers user preferences (like language or region).</td>
            <td className="border border-gray-600">Localization cookies</td>
          </tr>
          <tr>
            <td className="border border-gray-600">Marketing</td>
            <td className="border border-gray-600">Targets advertisements based on user behavior and preferences.</td>
            <td className="border border-gray-600">Ad personalization cookies</td>
          </tr>
        </tbody>
      </table>

      <h2 className="pt-5 text-xl font-bold">Managing Your Cookies</h2>
      <p>
        You have the right to decide whether to accept or reject cookies. You can
        modify your preferences by:
      </p>
      <ul className="ml-10 list-disc">
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

      <h2 className="pt-5 text-xl font-bold">Third-Party Cookies</h2>
      <p>
        We use third-party cookies to analyze website usage and improve our
        services. For instance, we use <strong>Google Analytics</strong> to
        understand how users interact with our website. Each third party has its
        own cookie policy, and we recommend reviewing these policies for more
        information.
      </p>

      <h2 className="pt-5 text-xl font-bold">Data Protection and Privacy</h2>
      <p>
        We respect your privacy and are committed to handling your personal data
        responsibly. For detailed information on how we handle personal data,
        please refer to our{" "}
        <a href="/privacy-policy" style={{ color: "blue" }}>Privacy Policy</a>.
      </p>

      <h2 className="pt-5 text-xl font-bold">Rights Under GDPR and CCPA</h2>
      <p>
        <strong>GDPR:</strong> Users located in the European Union have the right
        to access, update, and delete their data, as well as restrict or object to
        data processing.
      </p>
      <p>
        <strong>CCPA:</strong> California residents have the right to request
        access to their data, delete their data, and opt-out of data sales.
      </p>
      <p>
        To exercise your rights under GDPR or CCPA, please contact us at eimitechinnovation@gmail.com
      </p>

      <h2 className="pt-5 text-xl font-bold">Updates to This Cookie Policy</h2>
      <p>
        We may update this Cookie Policy to reflect changes in technology, legal
        requirements, or our practices. Please check this page periodically for
        updates. Any significant changes will be communicated via a notice on our
        website.
      </p>

      <h2 className="pt-5 text-xl font-bold">Contact Us</h2>
      <p>
        If you have any questions about this Cookie Policy, please contact us at:
      </p>
      <p>
        <p><strong>Last Updated: </strong> 06/11/24 </p>
        <strong>Email:</strong> eimitechinnovation.com <br />
        <strong>Address:</strong> Bangalore
      </p>
    </div>
  </>

);

export default CookiePolicy;
