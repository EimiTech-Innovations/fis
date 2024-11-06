import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const TermsCondition: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <section className="py-20 bg-no-repeat bg-cover bg-heroBg">
                <div className="container px-6 mx-auto">
                    <p className="py-5 text-sm font-semibold text-gray-600">
                        <Link to="/" className="hover:underline decoration-gray-500">Home</Link> /
                        <Link to="/terms-and-conditions" className="hover:underline decoration-gray-500"> Terms & Conditions</Link>
                    </p>
                    <h2 className="pt-5 text-3xl font-bold text-gray-800">Terms & Conditions</h2>
                </div>
            </section>

            <div className="container px-6 py-10 mx-auto bg-white rounded-lg lg:w-2/3">
                <p className="text-gray-700">
                    Welcome to eimitechinn.com! These Terms and Conditions ("Terms") govern your use of our website and the services we offer. Please read them carefully before using our website or engaging with our services.
                </p>

                <h2 className="pt-5 text-xl font-semibold text-gray-800">Acceptance of Terms</h2>
                <p className="text-gray-700">
                    By accessing and using this website and the services provided, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.
                </p>

                <h2 className="pt-5 text-xl font-semibold text-gray-800">Services Provided</h2>
                <p className="text-gray-700">
                    eimitechinn.com provides a range of web development services, including but not limited to custom web design, development, consultation, and support. These services are subject to the specifications and timelines mutually agreed upon between eimitechinn.com and the client.
                </p>

                <h2 className="pt-5 text-xl font-semibold text-gray-800">Client Responsibilities</h2>
                <p className="text-gray-700">
                    As a client, you agree to provide all necessary information, access, and resources required for the successful completion of the project. This includes but is not limited to content, designs, and timely feedback.
                </p>

                <h2 className="pt-5 text-xl font-semibold text-gray-800">Payment Terms</h2>
                <p className="text-gray-700">
                    Payments for services are due as per the agreed terms outlined in the project proposal or contract. Failure to make payments on time may result in delays or suspension of services.
                </p>

                <h2 className="pt-5 text-xl font-semibold text-gray-800">Intellectual Property Rights</h2>
                <p className="text-gray-700">
                    Upon full payment, the client will own the intellectual property rights to the work produced by eimitechinn.com. eimitechinn.com retains the right to display completed projects in its portfolio and for marketing purposes unless otherwise agreed upon.
                </p>

                <h2 className="pt-5 text-xl font-semibold text-gray-800">Limitation of Liability</h2>
                <p className="text-gray-700">
                    eimitechinn.com is not liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our total liability is limited to the amount paid for the service in question.
                </p>

                <h2 className="pt-5 text-xl font-semibold text-gray-800">Indemnification</h2>
                <p className="text-gray-700">
                    You agree to indemnify and hold eimitechinn.com harmless from any claims, losses, damages, or expenses arising from your use of our services, including but not limited to infringement of any third-party intellectual property rights.
                </p>

                <h2 className="pt-5 text-xl font-semibold text-gray-800">Termination of Service</h2>
                <p className="text-gray-700">
                    We reserve the right to suspend or terminate our services to any client who violates these Terms or engages in unlawful or unethical conduct.
                </p>

                <h2 className="pt-5 text-xl font-semibold text-gray-800">Privacy and Data Protection</h2>
                <p className="text-gray-700">
                    Your privacy is important to us. For information on how we collect and use your personal data, please refer to our <Link to="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</Link>.
                </p>

                <h2 className="pt-5 text-xl font-semibold text-gray-800">Third-Party Links</h2>
                <p className="text-gray-700">
                    Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these websites. We encourage you to review their policies before engaging with them.
                </p>

                <h2 className="pt-5 text-xl font-semibold text-gray-800">Governing Law</h2>
                <p className="text-gray-700">
                    These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which eimitechinn.com operates, without regard to its conflict of law principles.
                </p>

                <h2 className="pt-5 text-xl font-semibold text-gray-800">Changes to the Terms</h2>
                <p className="text-gray-700">
                    We reserve the right to update or modify these Terms at any time. Any changes will be posted on this page, and it is your responsibility to review these Terms periodically.
                </p>

                <h2 className="pt-5 text-xl font-semibold text-gray-800">Contact Us</h2>
                <p className="text-gray-700">
                    If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <p className="text-gray-700">
                    <strong>Email:</strong> eimitechinnovation@gmail.com <br />
                    <strong>Address:</strong> Bangalore, India
                </p>

                <p className="mt-8 text-sm text-gray-500"><strong>Last Updated:</strong> 06/11/24</p>
            </div>
        </>
    )
}

export default TermsCondition