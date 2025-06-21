import StarfieldBackground from "@/components/StarfieldBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
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
            <span className="text-gradient animate-glow">Refund Policy</span>
          </h1>
          
          <div className="bg-black/20 backdrop-blur-sm border border-gray-800 rounded-lg p-8 space-y-8">
            <p className="text-gray-300 text-center">
              <strong>Last updated: June 21, 2025</strong>
            </p>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                This Refund Policy outlines the terms and conditions for refunds related to Mahasen Voice and associated services provided by Azynctra Technologies. We strive to ensure customer satisfaction while maintaining fair and transparent refund practices.
              </p>
              
              <div className="space-y-4">
                <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                  1. Refund Eligibility
                </h2>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  1.1 Software Licenses
                </h3>
                
                <div className="space-y-4">
                  <h4 className="text-neon-lapisLazuli text-glow-blue text-lg font-display tracking-wider">
                    Free Version
                  </h4>
                  <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                    <li>• No refunds required as there are no costs for basic software functionality</li>
                    <li>• Users may simply uninstall the software at any time</li>
                  </ul>
                  
                  <h4 className="text-neon-lapisLazuli text-glow-blue text-lg font-display tracking-wider">
                    Premium Features (If Applicable)
                  </h4>
                  <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                    <li>• <strong>Refund Period</strong>: 14 days from purchase date</li>
                    <li>• <strong>Condition Requirements</strong>: Software must be substantially non-functional or materially different from description</li>
                    <li>• <strong>Documentation Required</strong>: Users must provide detailed explanation & evidence of issues encountered</li>
                  </ul>
                </div>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  1.2 Support Services
                </h3>
                <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                  <li>• Basic technical support is included with software use at no separate charge</li>
                  <li>• Premium Support: All paid users receive priority support over free users</li>
                </ul>
              </div>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                2. Non-Refundable Items
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  2.1 Free Software Components
                </h3>
                <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                  <li>• Basic voice recognition functionality</li>
                  <li>• Standard user interface features</li>
                  <li>• Regular software updates and patches</li>
                </ul>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  2.2 Successfully Used Services
                </h3>
                <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                  <li>• Processing services that have been completed</li>
                  <li>• Technical support time that has been provided</li>
                </ul>
              </div>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                3. Refund Conditions
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  3.1 Qualifying Circumstances
                </h3>
                <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                  <li>• <strong>Software Defects</strong>: Significant bugs that prevent normal operation</li>
                  <li>• <strong>Compatibility Problems</strong>: Inability to run on supported operating systems</li>
                  <li>• <strong>Feature Malfunctions</strong>: Core features not working as advertised</li>
                  <li>• <strong>Misrepresentation</strong>: Software functionality significantly different from description</li>
                </ul>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  3.2 Non-Qualifying Circumstances
                </h3>
                <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                  <li>• <strong>User Error</strong>: Incorrect configuration or usage of the software</li>
                  <li>• <strong>System Requirements</strong>: Failure to meet minimum system requirements</li>
                  <li>• <strong>Personal Preference</strong>: Deciding not to use the software after successful installation</li>
                  <li>• <strong>Network Issues</strong>: Internet connectivity problems affecting features</li>
                </ul>
              </div>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                4. Refund Process
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  4.1 Request Submission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To request a refund:
                </p>
                <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                  <li>• <strong>Email</strong>: Send refund requests to Info@azynctra.com</li>
                  <li>• <strong>Subject Line</strong>: "Refund Request - [Order Number]"</li>
                  <li>• <strong>Required Information</strong>: Purchase details, issue description, supporting evidence</li>
                  <li>• <strong>Response Time</strong>: Initial response within 48 hours</li>
                </ul>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  4.2 Review Process
                </h3>
                <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                  <li>• <strong>Eligibility Verification</strong>: Confirmation that request meets refund criteria</li>
                  <li>• <strong>Technical Review</strong>: Analysis of reported issues and potential solutions</li>
                  <li>• <strong>Timeline</strong>: Initial assessment completed within 5 business days</li>
                </ul>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  4.3 Refund Decision
                </h3>
                <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                  <li>• <strong>Decision</strong>: Final refund decision within 10 business days</li>
                  <li>• <strong>Processing</strong>: Approved refunds processed within 5-10 business days</li>
                  <li>• <strong>Method</strong>: Refunds issued to original payment method when possible</li>
                </ul>
              </div>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                5. Partial Refunds
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Refunds may be prorated based on:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>• Time-based calculation for unused license period</li>
                <li>• Feature-based calculation for unused or non-functional features</li>
                <li>• Daily rate calculation from request date to license expiration</li>
              </ul>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                6. Dispute Resolution
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  6.1 Internal Resolution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We encourage resolution through direct communication with our customer service team before pursuing external options.
                </p>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  6.2 Governing Law
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  This Refund Policy is governed by the laws of Sri Lanka. Disputes will be resolved in Sri Lankan courts.
                </p>
              </div>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                7. Contact Information
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  Refund Requests:
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Email:</strong> Info@azynctra.com<br />
                  <strong>Subject:</strong> Refund Request - [Order Number]
                </p>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  General Inquiries:
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Company:</strong> Azynctra Technologies<br />
                  <strong>Website:</strong> mahasen.azynctra.com<br />
                  <strong>Location:</strong> Panadura, Western Province, Sri Lanka<br />
                  <strong>Response Time:</strong> Within 5 business days for refund-related inquiries
                </p>
              </div>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                8. Important Notes
              </h2>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>• Keep records of all purchase confirmations and communications</li>
                <li>• Contact support promptly when issues arise</li>
                <li>• Provide comprehensive information about problems</li>
                <li>• Work with our support team to attempt resolution</li>
              </ul>
              
              <hr className="border-gray-700" />
              
              <p className="text-gray-300 leading-relaxed text-center">
                This Refund Policy is subject to change. Users will be notified of significant changes via email and website announcements. Continued use of the software after policy changes constitutes acceptance of the updated terms.
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

export default RefundPolicy; 