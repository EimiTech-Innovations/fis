import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <section className="py-20 bg-no-repeat bg-cover bg-heroBg">
                <div className="container px-6 mx-auto">
                    <p className="py-5 text-sm font-semibold text-gray-600">
                        <Link to="/" className="hover:underline decoration-gray-500">Home</Link> /
                        <Link to="/privacy-policy" className="hover:underline decoration-gray-500"> Privacy Policy</Link>
                    </p>
                    <h2 className="pt-5 text-3xl font-bold text-gray-800">Privacy Policy</h2>
                </div>
            </section>
            <div className="container px-6 py-10 mx-auto bg-white rounded-lg lg:w-2/3">
                <p className="mb-6 text-gray-700">
                    Eimitechinn.com ("we", "our", "us") respects your privacy and is committed
                    to protecting your personal data. This Privacy Policy explains how we collect,
                    use, and share your information when you visit our website.
                </p>

                <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">1. Information We Collect</h2>
                <p className="mb-4 text-gray-700">We may collect the following types of personal information:</p>
                <ul className="mb-6 space-y-2 text-gray-700 list-disc list-inside">
                    <li><strong>Personal Identifiers:</strong> Name, email address, phone number, etc.</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, operating system, etc.</li>
                    <li><strong>Usage Data:</strong> Pages visited, links clicked, time spent on pages, etc.</li>
                    <li><strong>Location Data:</strong> If you have location services enabled, we may collect location data.</li>
                </ul>

                <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">2. How We Use Your Information</h2>
                <p className="mb-4 text-gray-700">Your information is used to:</p>
                <ul className="mb-6 space-y-2 text-gray-700 list-disc list-inside">
                    <li>Provide and maintain our website and services</li>
                    <li>Improve and personalize your experience</li>
                    <li>Analyze site performance and usage</li>
                    <li>Respond to your inquiries and provide support</li>
                    <li>Send you updates, promotions, and other information </li>
                    <li>Comply with legal obligations</li>
                </ul>

                <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">3. Sharing Your Information</h2>
                <p className="mb-4 text-gray-700">We may share your information with:</p>
                <ul className="mb-6 space-y-2 text-gray-700 list-disc list-inside">
                    <li><strong>Service Providers:</strong> Third-party companies to help us deliver services (e.g., hosting, analytics).</li>
                    <li><strong>Legal Compliance:</strong> Authorities when required by law or to protect our rights.</li>
                    <li><strong>Business Transfers:</strong> If we undergo a merger, acquisition, or asset sale.</li>
                </ul>

                <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">4. Your Rights and Choices</h2>
                <p className="mb-4 text-gray-700">
                    If you are located in the EU or California, you have certain rights regarding your personal data:
                </p>
                <ul className="mb-6 space-y-2 text-gray-700 list-disc list-inside">
                    <li><strong>Access:</strong> You may request a copy of your personal data we hold.</li>
                    <li><strong>Correction:</strong> You may request we correct inaccurate data.</li>
                    <li><strong>Deletion:</strong> You may request we delete your data.</li>
                    <li><strong>Opt-Out:</strong> California residents may opt out of data sales.</li>
                </ul>
                <p className="mb-6 text-gray-700">
                    To exercise these rights, please contact us at [Your Contact Email]. We may require proof of identity before fulfilling your request.
                </p>

                <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">5. Cookies and Tracking Technologies</h2>
                <p className="mb-6 text-gray-700">
                    We use cookies and similar tracking technologies to track activity on our website
                    and hold certain information. You can manage your preferences in our{" "}
                    <Link to={"/cookie-policy"} className="text-blue-500 hover:underline">Cookie Policy</Link>.
                </p>

                <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">6. Data Security</h2>
                <p className="mb-6 text-gray-700">
                    We take reasonable measures to protect your information from unauthorized access,
                    alteration, and disclosure. However, no data transmission over the internet is
                    completely secure, so we cannot guarantee absolute security.
                </p>

                <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">7. Third-Party Links</h2>
                <p className="mb-6 text-gray-700">
                    Our website may contain links to third-party sites. We are not responsible for the
                    privacy practices of these external sites and encourage you to review their policies.
                </p>

                <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">8. Children's Privacy</h2>
                <p className="mb-6 text-gray-700">
                    Our website is not intended for children under 13, and we do not knowingly collect
                    data from children. If you believe we have collected data from a child, please
                    contact us to remove the information.
                </p>

                <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">9. Changes to This Privacy Policy</h2>
                <p className="mb-6 text-gray-700">
                    We may update our Privacy Policy from time to time. We will notify you of any
                    significant changes by posting the new policy on this page and updating the "Last Updated"
                    date. Please review this policy periodically for any changes.
                </p>

                <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">10. Contact Us</h2>
                <p className="mb-6 text-gray-700">
                    If you have questions or concerns about this Privacy Policy, please contact us at:
                </p>
                <p className="text-gray-700">
                    <strong>Last Updated:</strong> 06/11/2024<br />
                    <strong>Email:</strong> Eimitechinn@gmail.com <br />
                    <strong>Address:</strong> Bangalore
                </p>
            </div>
        </>

    )
}

export default PrivacyPolicy