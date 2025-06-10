import StarfieldBackground from "@/components/StarfieldBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <main className="min-h-screen relative">
      {/* Background */}
      <StarfieldBackground />

      {/* Navigation */}
      <Navbar />

      {/* Content */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-bdo text-4xl sm:text-6xl md:text-7xl text-white mb-8 text-center leading-tight">
            <span className="text-gradient animate-glow">Terms & Conditions</span>
          </h1>
          
          <div className="bg-black/20 backdrop-blur-sm border border-gray-800 rounded-lg p-8 space-y-8">
            <div className="space-y-6">
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                Terms and Conditions
              </h2>
              <p className="text-gray-300 leading-relaxed">
                <strong>Last Updated: June 10, 2025</strong>
              </p>
              <p className="text-gray-300 leading-relaxed">
                Welcome to Mahasen AI, operated by Azynctra. By using our service, you agree to these Terms and Conditions ("Terms"). Please read them carefully.
              </p>
              <h3 className="text-neon-uranianBlue text-glow-cyan text-xl font-display tracking-wider">
                1. Acceptance of Terms
              </h3>
              <p className="text-gray-300 leading-relaxed">
                By accessing or using Mahasen AI, you agree to be bound by these Terms and our Privacy Policy. If you don't agree with any part of these terms, you may not use our service.
              </p>
              <h3 className="text-neon-uranianBlue text-glow-cyan text-xl font-display tracking-wider">
                2. Description of Service
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Mahasen AI is an AI-powered assistant that provides:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li className="flex items-start">
                  <span className="text-neon-lapisLazuli mr-2">•</span>
                  Intelligent voice typing
                </li>
                <li className="flex items-start">
                  <span className="text-neon-lapisLazuli mr-2">•</span>
                  Email draft suggestions
                </li>
                <li className="flex items-start">
                  <span className="text-neon-lapisLazuli mr-2">•</span>
                  Gmail integration and analysis
                </li>
                <li className="flex items-start">
                  <span className="text-neon-lapisLazuli mr-2">•</span>
                  Personalized AI responses
                </li>
                <li className="flex items-start">
                  <span className="text-neon-lapisLazuli mr-2">•</span>
                  Notification management (coming soon)
                </li>
              </ul>
              <h3 className="text-neon-uranianBlue text-glow-cyan text-xl font-display tracking-wider">
                3. User Accounts
              </h3>
              <h4 className="text-neon-uranianBlue text-glow-cyan text-lg font-display tracking-wider">
                Registration
              </h4>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>You must provide accurate and complete information when creating an account</li>
                <li>You are responsible for maintaining the security of your account credentials</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
              </ul>
              
              <h3 className="text-neon-uranianBlue text-glow-cyan text-xl font-display tracking-wider">
                4. Subscription Plans and Payments
              </h3>
              <h4 className="text-neon-uranianBlue text-glow-cyan text-lg font-display tracking-wider">
                Free Plan
              </h4>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>Our Starter plan is free forever with limited features</li>
                <li>We reserve the right to modify free plan limitations with notice</li>
              </ul>
              <h4 className="text-neon-uranianBlue text-glow-cyan text-lg font-display tracking-wider">
                Paid Plans
              </h4>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>Pro plan pricing is mentioned in the pricing page</li>
                <li>Payments are processed securely through our payment partners</li>
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>Refunds are provided according to our refund policy</li>
              </ul>
              <h4 className="text-neon-uranianBlue text-glow-cyan text-lg font-display tracking-wider">
                Usage Limits
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Voice typing limits apply based on your plan. Exceeding limits may result in temporary service restrictions.
              </p>
              <h3 className="text-neon-uranianBlue text-glow-cyan text-xl font-display tracking-wider">
                5. User Responsibilities
              </h3>
              <h4 className="text-neon-uranianBlue text-glow-cyan text-lg font-display tracking-wider">
                Acceptable Use
              </h4>
              <p className="text-gray-300 leading-relaxed">
                You agree not to:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>Use the service for illegal activities</li>
                <li>Attempt to hack, reverse engineer, or compromise our systems</li>
                <li>Share your account credentials with others</li>
                <li>Use the service to send spam or malicious content</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
              <h4 className="text-neon-uranianBlue text-glow-cyan text-lg font-display tracking-wider">
                Content Responsibility
              </h4>
              <p className="text-gray-300 leading-relaxed">
                You are responsible for all content you input into our system. You must have the right to share any content you provide. You must not input confidential information belonging to others without permission.
              </p>
              <h3 className="text-neon-uranianBlue text-glow-cyan text-xl font-display tracking-wider">
                6. Gmail Integration
              </h3>
              <h4 className="text-neon-uranianBlue text-glow-cyan text-lg font-display tracking-wider">
                Authorization
              </h4>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>You must authorize our access to your Gmail account</li>
                <li>You can revoke this access at any time through your Google account settings</li>
                <li>All Gmail processing happens within Google's secure infrastructure</li>
              </ul>
              <h4 className="text-neon-uranianBlue text-glow-cyan text-lg font-display tracking-wider">
                Email Content
              </h4>
              <p className="text-gray-300 leading-relaxed">
                We analyze your emails to provide personalized suggestions. No emails are stored on our frontend systems. All processing occurs within Google's cloud environment.
              </p>
              <h3 className="text-neon-uranianBlue text-glow-cyan text-xl font-display tracking-wider">
                7. Voice Data and AI Processing
              </h3>
              <h4 className="text-neon-uranianBlue text-glow-cyan text-lg font-display tracking-wider">
                Voice Processing
              </h4>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>Voice data is processed locally by default</li>
                <li>Cloud processing option available with automatic deletion after 3 days</li>
                <li>Voice recordings are never used to train AI models</li>
              </ul>
              <h4 className="text-neon-uranianBlue text-glow-cyan text-lg font-display tracking-wider">
                AI Personalization
              </h4>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>Text transcriptions may be used to improve your personalized experience</li>
                <li>You can opt out of the "Learn from My Text" feature at any time</li>
                <li>You can request deletion of your stored transcriptions</li>
              </ul>
              <h3 className="text-neon-uranianBlue text-glow-cyan text-xl font-display tracking-wider">
                8. Third-Party Services
              </h3>
              <h4 className="text-neon-uranianBlue text-glow-cyan text-lg font-display tracking-wider">
                API Keys
              </h4>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>You may provide your own API keys for enhanced functionality</li>
                <li>API keys are stored locally on your device only</li>
                <li>You are responsible for managing your API key usage and costs</li>
              </ul>
              <h4 className="text-neon-uranianBlue text-glow-cyan text-lg font-display tracking-wider">
                External Integrations
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Our service integrates with Google services and AI providers. Use of these integrations is subject to their respective terms of service.
              </p>
              <h3 className="text-neon-uranianBlue text-glow-cyan text-xl font-display tracking-wider">
                9. Intellectual Property
              </h3>
              <h4 className="text-neon-uranianBlue text-glow-cyan text-lg font-display tracking-wider">
                Our Rights
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Mahasen AI and all related technology are owned by Azynctra. Our trademarks, logos, and branding are protected intellectual property.
              </p>
              <h4 className="text-neon-uranianBlue text-glow-cyan text-lg font-display tracking-wider">
                Your Rights
              </h4>
              <p className="text-gray-300 leading-relaxed">
                You retain ownership of your original content. You grant us a license to process your content to provide our services. This license ends when you delete your account or remove the content.
              </p>
              <h3 className="text-neon-uranianBlue text-glow-cyan text-xl font-display tracking-wider">
                10. Service Availability
              </h3>
              <h4 className="text-neon-uranianBlue text-glow-cyan text-lg font-display tracking-wider">
                Uptime
              </h4>
              <p className="text-gray-300 leading-relaxed">
                We strive to maintain high service availability but cannot guarantee 100% uptime. Maintenance windows may be scheduled with advance notice.
              </p>
              <h4 className="text-neon-uranianBlue text-glow-cyan text-lg font-display tracking-wider">
                Changes to Service
              </h4>
              <p className="text-gray-300 leading-relaxed">
                We may modify, update, or discontinue features with reasonable notice. Significant changes will be communicated to users in advance.
              </p>
              <h3 className="text-neon-uranianBlue text-glow-cyan text-xl font-display tracking-wider">
                11. Limitation of Liability
              </h3>
              <h4 className="text-neon-uranianBlue text-glow-cyan text-lg font-display tracking-wider">
                Service Limitations
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Mahasen AI is provided "as is" without warranties. We are not liable for any indirect, incidental, or consequential damages. Our total liability is limited to the amount you paid for the service in the past 12 months.
              </p>
              <h4 className="text-neon-uranianBlue text-glow-cyan text-lg font-display tracking-wider">
                User Responsibility
              </h4>
              <p className="text-gray-300 leading-relaxed">
                You use the service at your own risk. You are responsible for backing up important data. We recommend reviewing AI-generated content before use.
              </p>
              <h3 className="text-neon-uranianBlue text-glow-cyan text-xl font-display tracking-wider">
                12. Privacy and Data Protection
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Your privacy is governed by our Privacy Policy. We comply with applicable data protection laws. You have rights regarding your personal data as outlined in our Privacy Policy.
              </p>
              <h3 className="text-neon-uranianBlue text-glow-cyan text-xl font-display tracking-wider">
                13. Termination
              </h3>
              <h4 className="text-neon-uranianBlue text-glow-cyan text-lg font-display tracking-wider">
                By You
              </h4>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>You may cancel your account at any time</li>
                <li>Cancellation takes effect at the end of your current billing period</li>
                <li>You can request deletion of your data upon account closure</li>
              </ul>
              <h4 className="text-neon-uranianBlue text-glow-cyan text-lg font-display tracking-wider">
                By Us
              </h4>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>We may suspend or terminate accounts for violations of these Terms</li>
                <li>We will provide reasonable notice except for serious violations</li>
                <li>Upon termination, your right to use the service ends immediately</li>
              </ul>
              <h3 className="text-neon-uranianBlue text-glow-cyan text-xl font-display tracking-wider">
                14. Governing Law
              </h3>
              <p className="text-gray-300 leading-relaxed">
                These Terms are governed by the laws of Sri Lanka. Any disputes will be resolved in the courts of Sri Lanka.
              </p>
              <h3 className="text-neon-uranianBlue text-glow-cyan text-xl font-display tracking-wider">
                15. Changes to Terms
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We may update these Terms from time to time. We will notify users of material changes by:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>Posting the updated Terms on our website</li>
                <li>Sending an email notification to registered users</li>
                <li>Updating the "Last Updated" date</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                Continued use of the service after changes constitutes acceptance of the new Terms.
              </p>
              <h3 className="text-neon-uranianBlue text-glow-cyan text-xl font-display tracking-wider">
                16. Contact Information
              </h3>
              <p className="text-gray-300 leading-relaxed">
                If you have questions about these Terms, please contact us:
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong>Email</strong>: support@azynctra.com  
                <br />
                <strong>Address</strong>: Panadura, Western Province, Sri Lanka
              </p>
              <h3 className="text-neon-uranianBlue text-glow-cyan text-xl font-display tracking-wider">
                17. Severability
              </h3>
              <p className="text-gray-300 leading-relaxed">
                If any part of these Terms is found to be unenforceable, the remaining provisions will continue to be valid and enforceable.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By using Mahasen AI, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default TermsConditions; 