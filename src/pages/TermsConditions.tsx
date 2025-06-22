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
            <span className="text-gradient animate-glow">Terms of Service</span>
          </h1>
          
          <div className="bg-black/20 backdrop-blur-sm border border-gray-800 rounded-lg p-8 space-y-8">
            <p className="text-gray-300 text-center">
              <strong>Last updated: June 21, 2025</strong>
            </p>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Welcome to Mahasen Voice ("we," "us," "our," or "the software"). These Terms of Service govern your use of our AI-powered voice recognition software. By downloading, installing, or using Mahasen Voice, you agree to these terms. You are only allowed to use Mahasen Voice if you accept these Terms.
              </p>
              
              <div className="space-y-4">
                <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                  1. Service Offerings
                </h2>
                
                <p className="text-gray-300 leading-relaxed">
                  Mahasen Voice provides the following services:
                </p>
                <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                  <li>• AI-powered speech-to-text conversion</li>
                  <li>• Context-aware text enhancement and formatting</li>
                  <li>• Voice-controlled input for various applications</li>
                  <li>• Integration with AI services (Groq, Google Gemini, Azure) for processing</li>
                </ul>
                
                <div className="space-y-4">
                  <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                    1.1 Service Quality and AI Limitations
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    While we strive to deliver accurate AI-generated outputs, various factors—such as audio clarity, background noise, accent variations, speaking speed, and system availability—can impact results. You acknowledge that:
                  </p>
                  <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                    <li>• <strong>No Guaranteed Accuracy</strong>: AI-generated transcriptions may contain errors, omissions, or other inaccuracies</li>
                    <li>• <strong>Independent Verification</strong>: You are responsible for verifying the correctness of any AI outputs before relying on them for important purposes</li>
                    <li>• <strong>Performance Variability</strong>: Transcription quality may vary based on audio conditions, language complexity, and technical limitations</li>
                  </ul>
                  
                  <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                    1.2 Usage Restrictions
                  </h3>
                  <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                    <li>• <strong>Personal Use Only</strong>: You agree to use the Services solely for your personal or internal business purposes</li>
                    <li>• <strong>No Resale</strong>: You will not resell or transfer access to any other party without our express written permission</li>
                    <li>• <strong>No Critical Applications</strong>: Do not use the software for life-critical, safety-critical, or mission-critical applications</li>
                  </ul>
                </div>
              </div>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                2. Eligibility
              </h2>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>• You must be at least 18 years old or the age of majority in your jurisdiction to use the software</li>
                <li>• Both personal and business users can access and utilize our services</li>
                <li>• All registration details you provide must be truthful, current, and accurate</li>
                <li>• Geographic availability may vary depending on your location and applicable local regulations</li>
              </ul>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                3. User Responsibilities
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Users are responsible for:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>• <strong>Account Security</strong>: Maintaining the confidentiality of your login credentials and promptly notifying us of any unauthorized access</li>
                <li>• <strong>Legal Compliance</strong>: Ensuring use complies with all applicable laws and regulations</li>
                <li>• <strong>Content Responsibility</strong>: All content processed through the software and ensuring you have proper rights to process such content</li>
                <li>• <strong>System Security</strong>: Keeping your system and software updated</li>
                <li>• <strong>Lawful Conduct</strong>: Using the Services in compliance with all applicable laws and regulations</li>
                <li>• <strong>Respect for Others</strong>: Not attempting to breach security, disrupt network performance, or access other users' accounts</li>
              </ul>
              
              <div className="space-y-4">
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  3.1 Prohibited Uses
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  You agree not to:
                </p>
                <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                  <li>• Use the service for illegal activities or violating others' rights</li>
                  <li>• Attempt to hack, reverse engineer, or compromise our systems</li>
                  <li>• Share your account credentials with others</li>
                  <li>• Circumvent usage controls or security measures</li>
                  <li>• Use the service to process confidential information without proper authorization</li>
                  <li>• Engage in automated decision-making that affects individuals' rights without appropriate safeguards</li>
                  <li>• Use the software in a manner inconsistent with these Terms</li>
                </ul>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  3.2 Consequences of Misuse
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Any misuse or abuse of the Services (e.g., reverse engineering, spamming, hacking, or infringing intellectual property rights) can result in immediate suspension or termination of your account without notice.
                </p>
              </div>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                4. System Permissions
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The software requires:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>• <strong>Microphone Access</strong>: For voice recording and speech recognition</li>
                <li>• <strong>Network Access</strong>: For AI API communication with Groq, Google, and Azure services</li>
                <li>• <strong>Keyboard Access</strong>: For hotkey functionality</li>
                <li>• <strong>Local Storage</strong>: For settings, conversation history, and analytics</li>
              </ul>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                5. Data Handling
              </h2>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>• Conversation records are stored locally on your device</li>
                <li>• Audio data is transmitted to third-party AI services for processing</li>
                <li>• No audio data is stored on our servers</li>
                <li>• You can delete local data at any time through the application</li>
                <li>• We are not responsible for losses arising from unauthorized access if you fail to secure your device</li>
              </ul>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                6. Pricing and Payments
              </h2>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>• Some features may require a paid subscription or usage-based fees</li>
                <li>• You agree to provide accurate billing information and promptly pay all charges</li>
                <li>• Subscriptions renew automatically unless canceled prior to the renewal date</li>
                <li>• You may be responsible for any taxes or additional charges associated with your location</li>
                <li>• We will notify you of any material changes in pricing with reasonable advance notice</li>
              </ul>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                7. Intellectual Property
              </h2>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>• Azynctra Technologies retains all rights to the software</li>
                <li>• You retain ownership of your original content</li>
                <li>• Azynctra Technologies claims no ownership nor responsibility over user-generated content</li>
                <li>• You grant us a limited license to process your content solely to provide our services</li>
              </ul>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                8. Disclaimers and Warranties
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  <strong>TO THE FULLEST EXTENT PERMITTED BY LAW:</strong>
                </p>
                <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                  <li>• The software is provided "AS IS" and "AS AVAILABLE" without warranties of any kind</li>
                  <li>• We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement</li>
                  <li>• We do not guarantee 100% accurate transcription or error-free operation</li>
                  <li>• Third-party service availability is beyond our control</li>
                  <li>• Users should verify important transcriptions before relying on them</li>
                  <li>• We assume no responsibility for service downtime, errors in AI outputs, or reliance on such outputs</li>
                </ul>
              </div>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                9. Limitation of Liability
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  <strong>TO THE FULLEST EXTENT PERMITTED BY LAW:</strong>
                </p>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  9.1 No Special Damages
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Azynctra Technologies shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, including but not limited to lost profits, lost data, business interruption, or loss of goodwill, regardless of the theory of liability and even if we have been advised of the possibility of such damages.
                </p>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  9.2 Maximum Liability Cap
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our total liability to you for all claims arising from or related to the use of the software is limited to the amount you have paid to Azynctra Technologies for the Services in the preceding twelve (12) months, or one hundred US dollars (USD $100), whichever is greater.
                </p>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  9.3 Jurisdictional Limitations
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Some jurisdictions do not allow the exclusion or limitation of certain damages, so some or all of these limitations may not apply to you. In such cases, our liability will be limited to the fullest extent permitted by applicable law.
                </p>
              </div>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                10. Privacy and Data Protection
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy for detailed information about how we collect, use, and protect your data. You can manage certain data usage settings in your account, subject to the Privacy Policy.
              </p>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                11. Updates and Modifications
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  We may update the software and these terms at any time to reflect changes in our Services, legal requirements, or business practices. If we make significant modifications:
                </p>
                <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                  <li>• <strong>Notice</strong>: We will notify you in advance by email or by posting a prominent notice on our website or app</li>
                  <li>• <strong>Acceptance</strong>: Continued use of the Services after the revised Terms become effective constitutes your acceptance of those changes</li>
                </ul>
              </div>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                12. Termination
              </h2>
              <div className="space-y-4">
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  12.1 User Cancellation
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  You may stop using the software at any time by uninstalling it or contacting support.
                </p>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  12.2 Termination by Azynctra
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to suspend or terminate your access for violations of these terms, if your use poses a risk to the platform or other users, or if required by law, with or without notice.
                </p>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  12.3 Effect of Termination
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Upon termination, you remain responsible for all fees incurred through the termination date. Sections of these Terms that by nature should survive termination (e.g., liability limitations, warranties, dispute resolution) will remain in effect.
                </p>
              </div>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                13. Our Rights
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right, at any time and in our sole discretion, and without liability or notice to you (except where required by applicable law), to:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>• <strong>Alter Features</strong>: Change, update, or remove some or all functionalities of the Services</li>
                <li>• <strong>Suspend or Discontinue</strong>: Temporarily or permanently suspend or discontinue certain parts or all of the Services</li>
                <li>• <strong>Restrict Access</strong>: Terminate, suspend, restrict, or otherwise disable your ability to use any or all parts of the Services</li>
                <li>• <strong>Modify Accounts</strong>: Suspend, terminate, or limit access to your account or any content associated with it</li>
                <li>• <strong>Change Eligibility</strong>: Update our eligibility criteria for using the Services</li>
              </ul>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                14. Dispute Resolution
              </h2>
              <div className="space-y-4">
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  14.1 Informal Resolution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We encourage you to contact us first at Info@azynctra.com to resolve any disputes in good faith before pursuing formal legal action.
                </p>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  14.2 Arbitration
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  If informal efforts fail, disputes will be resolved through binding arbitration in accordance with the rules of the Sri Lankan Arbitration Act, unless otherwise prohibited by local law. Each party will be responsible for its own arbitration-related costs unless agreed otherwise.
                </p>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  14.3 No Class Actions
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To the extent permitted by law, you agree to resolve disputes on an individual basis and not as part of any class, collective, or representative action.
                </p>
              </div>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                15. Governing Law and Final Provisions
              </h2>
              <div className="space-y-4">
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  15.1 Governing Law
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  These Terms are governed by the laws of Sri Lanka, excluding its conflict-of-law provisions. However, some countries have laws that require agreements to be governed by local laws, and this paragraph does not override those laws.
                </p>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  15.2 Severability
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  If any provision is deemed invalid or unenforceable, the remaining provisions remain in full force and effect.
                </p>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  15.3 No Waiver
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Azynctra's failure to enforce any right or provision of these Terms does not constitute a waiver of such right or provision.
                </p>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  15.4 Entire Agreement
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  These Terms, along with our Privacy Policy and any additional terms referenced herein, constitute the entire agreement between you and Azynctra regarding the Services.
                </p>
              </div>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                16. Contact Information
              </h2>
              <p className="text-gray-300 leading-relaxed">
                For questions about these Terms:
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong>Email:</strong> Info@azynctra.com<br />
                <strong>Website:</strong> mahasen.azynctra.com<br />
                <strong>Company:</strong> Azynctra Technologies<br />
                <strong>Location:</strong> Panadura, Western Province, Sri Lanka
              </p>
              
              <hr className="border-gray-700" />
              
              <p className="text-gray-300 leading-relaxed text-center">
                By using Mahasen Voice, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
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