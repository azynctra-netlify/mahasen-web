import StarfieldBackground from "@/components/StarfieldBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
            <span className="text-gradient animate-glow">Privacy Policy</span>
          </h1>
          
          <div className="bg-black/20 backdrop-blur-sm border border-gray-800 rounded-lg p-8 space-y-8">
            <p className="text-gray-300 text-center">
              <strong>Last updated: June 21, 2025</strong>
            </p>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Mahasen Voice ("we," "our," or "the software") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, store, and share information when you use our AI-powered voice recognition software.
              </p>
              
              <div className="space-y-4">
                <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                  1. Information We Collect
                </h2>
                
                <p className="text-gray-300 leading-relaxed">
                  We collect the following types of data:
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                    1.1 Local Data
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    When you use our software, we store locally on your device:
                  </p>
                  
                  <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                    <li>• <strong>Voice recordings</strong>: Temporarily captured during voice recognition sessions</li>
                    <li>• <strong>Transcribed text</strong>: Converted speech-to-text results</li>
                    <li>• <strong>Conversation history</strong>: Text content and timestamps</li>
                    <li>• <strong>Application context</strong>: Window titles and application names where text is inserted</li>
                    <li>• <strong>Usage analytics</strong>: Performance metrics and feature utilization</li>
                    <li>• <strong>Settings</strong>: User preferences and configuration</li>
                  </ul>
                  
                  <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                    1.2 Data Transmitted to Third Parties
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    We integrate with the following AI services for processing:
                  </p>
                  
                  <div className="space-y-4 pl-4">
                    <div>
                      <h4 className="text-neon-lapisLazuli text-glow-blue text-lg font-display tracking-wider">
                        Groq API Integration
                      </h4>
                      <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                        <li>• <strong>Purpose</strong>: Speech recognition and audio transcription</li>
                        <li>• <strong>Data Shared</strong>: Audio files for real-time processing</li>
                        <li>• <strong>Privacy Policy</strong>: https://groq.com/privacy/</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-neon-lapisLazuli text-glow-blue text-lg font-display tracking-wider">
                        Google Gemini API Integration
                      </h4>
                      <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                        <li>• <strong>Purpose</strong>: Text enhancement and context-aware processing</li>
                        <li>• <strong>Data Shared</strong>: Transcribed text for improvement</li>
                        <li>• <strong>Privacy Policy</strong>: https://ai.google.dev/terms</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-neon-lapisLazuli text-glow-blue text-lg font-display tracking-wider">
                        Azure Integration
                      </h4>
                      <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                        <li>• <strong>Purpose</strong>: Speech recognition and AI text processing</li>
                        <li>• <strong>Data Shared</strong>: Audio files and text data for processing</li>
                        <li>• <strong>Privacy Policy</strong>: https://privacy.microsoft.com/</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                    1.3 Data We Do NOT Collect
                  </h3>
                  <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                    <li>• Personal identification information (unless voluntarily provided)</li>
                    <li>• Persistent audio storage on our servers</li>
                    <li>• File contents from your device</li>
                    <li>• Location data</li>
                    <li>• Voice biometrics for identification</li>
                  </ul>
                </div>
              </div>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                2. Data Storage
              </h2>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>• All collected data is securely stored locally on your device</li>
                <li>• Audio data is transmitted to third-party APIs for real-time processing only</li>
                <li>• We do not store your data on our servers</li>
                <li>• Data is retained until deleted by you through the application</li>
              </ul>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                3. How We Use Your Data
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We use your data for the following purposes:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>• <strong>Speech Recognition</strong>: Converting voice to text using AI technologies</li>
                <li>• <strong>Text Enhancement</strong>: Improving grammar and formatting</li>
                <li>• <strong>Application Integration</strong>: Providing context-aware text insertion</li>
                <li>• <strong>Analytics and Improvement</strong>: Understanding usage patterns to improve features</li>
              </ul>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                4. Sharing of Data
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We do not sell or share your data with third parties, except:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>• Data transmitted to AI service providers (Groq, Google, Azure) for processing</li>
                <li>• These services process data in real-time without permanent storage</li>
              </ul>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                5. User Rights
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  5.1 Access and Deletion
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  You have the right to:
                </p>
                <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                  <li>• View all locally stored data through the application</li>
                  <li>• Delete individual conversations or all data</li>
                  <li>• Export your conversation history</li>
                  <li>• Control privacy and data collection preferences</li>
                </ul>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  5.2 International Rights
                </h3>
                <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                  <li>• <strong>GDPR Rights</strong> (EU users): Right to access, rectify, erase, restrict, and port data</li>
                  <li>• <strong>CCPA Rights</strong> (California users): Right to know, delete, and opt-out of data sales</li>
                </ul>
              </div>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                6. Security Measures
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We take data security seriously:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2 pl-6">
                <li>• Local data is encrypted using industry-standard security measures</li>
                <li>• All API communications use HTTPS/TLS encryption</li>
                <li>• Regular security updates are provided through software updates</li>
              </ul>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                7. International Data Transfers
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Data may be processed by third-party services globally. All transfers are encrypted and subject to applicable data protection laws. Groq, Azure, and Google services may process data internationally.
              </p>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                8. Children's Privacy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The software is not intended for children under 13. We do not knowingly collect data from children.
              </p>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. Continued use of the software after changes constitutes acceptance of the updated policy.
              </p>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                10. Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed">
                For questions about this Privacy Policy or your data:
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong>Email:</strong> tos@azynctra.com<br />
                <strong>Subject Line:</strong> Privacy Policy Inquiry<br />
                <strong>Company:</strong> Azynctra Technologies<br />
                <strong>Location:</strong> Panadura, Western Province, Sri Lanka<br />
                <strong>Website:</strong> mahasen.azynctra.com
              </p>
              
              <hr className="border-gray-700" />
              
              <p className="text-gray-300 leading-relaxed text-center">
                By using Mahasen Voice, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of information as described herein.
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

export default PrivacyPolicy; 