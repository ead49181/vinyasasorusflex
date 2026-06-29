export default function Privacy() {
  return (
    <div className="min-h-screen font-sans">

      {/* Header */}
      <header className="sticky top-0 bg-white z-50 shadow-sm px-4 sm:px-10 py-4 flex justify-between items-center">
        <h2 className="text-base sm:text-xl font-semibold m-0">Vinyasaurus Flex 🦕</h2>
        <nav className="flex gap-4 sm:gap-6">
          <a href="/" className="no-underline text-black text-sm sm:text-base">Home</a>
          <a href="/about" className="no-underline text-black text-sm sm:text-base">About</a>
        </nav>
      </header>

      <section className="max-w-2xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-12">Last updated: June 29, 2026</p>

        <div className="flex flex-col gap-10 text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">1. About This Site</h2>
            <p>Vinyasaurus Flex is a yoga sequencing tool for yoga teachers, created by Liz Draper. This Privacy Policy explains how we handle information when you visit and use this website.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">2. Information We Collect</h2>
            <p>We do not require you to create an account or provide personal information to use this site. When you use the sequence generator, the pose, duration, and style you enter are sent to our server solely to generate your yoga sequence and are not stored or logged.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">3. Cookies</h2>
            <p>This site may use cookies to improve your experience and to serve advertisements. You can control cookie settings through your browser. Disabling cookies may affect some functionality of the site.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">4. Google AdSense</h2>
            <p>We use Google AdSense to display advertisements on this site. Google may use cookies and similar technologies to serve ads based on your prior visits to this and other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-purple-600 underline">Google's Ads Settings</a>.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">5. Third-Party Services</h2>
            <p>This site uses the following third-party services which may collect data according to their own privacy policies:</p>
            <ul className="list-disc ml-5 mt-2 flex flex-col gap-1">
              <li>Anthropic API — to generate yoga sequences</li>
              <li>Google AdSense — to display advertisements</li>
              <li>Vercel — to host and serve this website</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">6. Children's Privacy</h2>
            <p>This site is not directed at children under the age of 13 and we do not knowingly collect personal information from children.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black mb-2">8. Contact</h2>
            <p>If you have any questions about this Privacy Policy, you can contact us at <a href="mailto:elizabethdraper5829@gmail.com" className="text-purple-600 underline">elizabethdraper5829@gmail.com</a>.</p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 text-center text-xs text-gray-400">
        <p>© 2026 Vinyasaurus Flex · <a href="/privacy" className="text-purple-600 underline">Privacy Policy</a></p>
      </footer>

    </div>
  );
}