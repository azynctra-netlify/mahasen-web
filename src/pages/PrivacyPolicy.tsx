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
              <strong>Last Updated: June 10, 2025</strong>
            </p>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                At Azynctra ("we," "our," or "us"), we take your privacy seriously. This Privacy Policy explains how Mahasen AI collects, uses, and protects your information.
              </p>
              
              <div className="space-y-4">
                <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                  Information We Collect
                </h2>
                
                <div className="space-y-4">
                  <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                    Voice Data and Transcriptions
                  </h3>
                  
                  <div className="space-y-4 pl-4">
                    <p className="text-gray-300 leading-relaxed">
                      <strong>Local Processing:</strong> By default, your voice is processed locally on your device. Only the text transcription is sent to our servers for enhancement.
                    </p>
                    
                    <p className="text-gray-300 leading-relaxed">
                      <strong>Cloud Processing Option:</strong> If you choose cloud-based voice processing, your voice recordings are temporarily stored on our servers for 3 days and then automatically deleted.
                    </p>
                    
                    <p className="text-gray-300 leading-relaxed">
                      <strong>Text Transcriptions:</strong> All text transcriptions are stored for the lifetime of your account to provide our services.
                    </p>
                    
                    <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                      Gmail Data
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      <strong>Google Ecosystem:</strong> All Gmail processing happens within Google's cloud infrastructure. Your emails never leave the Google ecosystem or reach our frontend systems.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      <strong>Email Content:</strong> We analyze your email content to provide personalized suggestions and learn your communication style.
                    </p>
                    
                    <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                      API Keys
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      <strong>Local Storage:</strong> If you provide your own API keys (such as Gemini API), these are stored locally on your device and never transmitted to our servers.
                    </p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                How We Use Your Information
              </h2>
              <div className="space-y-4">
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  Personalization and Learning
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong>"Learn from My Text" Feature:</strong> When enabled, your text transcriptions are used to train AI models specifically for your account to improve personalization.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Service Improvement:</strong> We use aggregated, anonymized data to improve our services.
                </p>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  Voice Data Usage
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Training Restrictions:</strong> Your voice recordings are never used to train any AI models, regardless of your settings.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Processing Only:</strong> Voice data is used solely for transcription purposes.
                </p>
              </div>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                Your Rights and Controls
              </h2>
              <div className="space-y-4">
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  Data Control
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Deletion Requests:</strong> You can request deletion of your stored transcriptions at any time by contacting us.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Feature Control:</strong> You can turn the "Learn from My Text" feature on or off in your account settings.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Processing Choice:</strong> You can choose between local and cloud-based voice processing.
                </p>
                
                <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                  Data Retention
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Transcriptions:</strong> Stored for the lifetime of your account unless you request deletion.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Voice Recordings:</strong> Automatically deleted after 3 days when using cloud processing.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Gmail Data:</strong> Processed within Google's ecosystem according to their data retention policies.
                </p>
              </div>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                Data Security
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="text-gray-300 leading-relaxed">
                <li>Encryption in transit and at rest</li>
                <li>Secure processing within trusted cloud environments (Google Cloud)</li>
                <li>Local storage for sensitive information like API keys</li>
                <li>Regular security audits and updates</li>
              </ul>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                Third-Party Services
              </h2>
              <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                Google Services
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Gmail integration operates entirely within Google's cloud infrastructure and is subject to Google's privacy policies and security standards.
              </p>
              
              <h3 className="text-neon-lapisLazuli text-glow-blue text-xl font-display tracking-wider">
                AI Services
              </h3>
              <p className="text-gray-300 leading-relaxed">
                When using your own API keys, you interact directly with the AI service provider, subject to the respective provider's privacy policies.
              </p>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                Data Sharing
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We do not sell your personal data. Your information may only be shared:
              </p>
              <ul className="text-gray-300 leading-relaxed">
                <li>When required by law</li>
                <li>With your explicit consent</li>
              </ul>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                Changes to This Policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date.
              </p>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If you have questions about this Privacy Policy or want to exercise your data rights, please contact us at:
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong>Email:</strong> privacy@azynctra.com  
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong>Address:</strong> Panadura, Western Province, Sri Lanka
              </p>
              
              <h2 className="text-neon-uranianBlue text-glow-cyan text-2xl font-display tracking-wider">
                Your Consent
              </h2>
              <p className="text-gray-300 leading-relaxed">
                By using Mahasen AI, you consent to the collection and use of your information as described in this Privacy Policy.
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