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
                Welcome to Mahasen Voice ("we," "us," "our," or "the software"). These Terms of Service govern your use of our AI-powered voice recognition software. By downloading, installing, or using Mahasen Voice, you agree to these terms.
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
              </div>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                2. Eligibility
              </h2>
              <p className="text-gray-300 leading-relaxed">
                There are no specific eligibility requirements for using the software. Both personal and business users can access and utilize our services.
              </p>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                3. User Responsibilities
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Users are responsible for:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>• <strong>Accuracy of Information</strong>: Providing accurate information during setup and use</li>
                <li>• <strong>Legal Compliance</strong>: Ensuring use complies with applicable laws and regulations</li>
                <li>• <strong>Content Responsibility</strong>: All content processed through the software</li>
                <li>• <strong>System Security</strong>: Keeping your system and software updated</li>
              </ul>
              
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
              </ul>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                6. Intellectual Property
              </h2>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>• Azynctra Technologies retains all rights to the software</li>
                <li>• You retain ownership of your original content</li>
                <li>• Azynctra Technologies claims no ownership nor responsibility over user-generated content</li>
              </ul>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                7. Disclaimers
              </h2>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>• The software is provided "AS IS" without warranties</li>
                <li>• We do not guarantee 100% accurate transcription</li>
                <li>• Third-party service availability is beyond our control</li>
                <li>• Users should verify important transcriptions</li>
              </ul>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-300 leading-relaxed">
                To the maximum extent permitted by law, Azynctra Technologies shall not be liable for indirect, incidental, or consequential damages arising from use of the software.
              </p>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                9. Privacy and Data Protection
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy for detailed information about how we collect, use, and protect your data.
              </p>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                10. Updates and Modifications
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update the software and these terms at any time. Significant changes will be communicated to users. Continued use constitutes acceptance of updated terms.
              </p>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                11. Termination
              </h2>
              <p className="text-gray-300 leading-relaxed">
                You may stop using the software at any time by uninstalling it. We may terminate access for violations of these terms.
              </p>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                12. Governing Law
              </h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms are governed by the laws of Sri Lanka. Disputes will be resolved in Sri Lankan courts.
              </p>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                13. Contact Information
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