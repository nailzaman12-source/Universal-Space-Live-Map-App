import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-blue-200 text-sm hover:text-white">← Home</Link>
        <h1 className="text-3xl font-bold text-white mt-4 mb-2">Terms of Use</h1>
        <p className="text-blue-200 text-sm mb-8">Last updated: November 2026</p>

        <div className="space-y-6 text-blue-50/90 text-sm leading-relaxed bg-white/10 backdrop-blur rounded-2xl border border-white/15 p-6">
          <section>
            <h2 className="text-white font-bold text-lg mb-2">1. Owner</h2>
            <p>
              Universal Space Live (USL) is created and owned by <strong className="text-white">Noorzaman</strong>,
              Independent Researcher, Chenab Nagar, Pakistan.
              All rights in the USL name, design, and original content belong to the owner unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-2">2. Educational use</h2>
            <p>
              USL is provided for educational and informational purposes. It aggregates public data
              (for example ISS position, NASA imagery, weather, and earthquake feeds). Always verify
              critical safety information with official authorities.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-2">3. Accounts</h2>
            <p>
              The current demo login stores limited data on your device. Do not use real sensitive passwords.
              Features may change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-2">4. No warranty</h2>
            <p>
              USL is provided “as is”. We do not guarantee uninterrupted service or perfect accuracy of
              third-party data. We are not liable for decisions made using the app.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-2">5. Acceptable use</h2>
            <p>
              Do not misuse the service, attempt to break security, or use USL for illegal activity.
              We may restrict access if misuse is detected.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-2">6. Contact</h2>
            <p>
              Questions about these terms: see the About page. By using USL you agree to these Terms
              and the Privacy Policy.
            </p>
          </section>
        </div>

        <p className="text-blue-200/70 text-xs mt-6 text-center">
          © 2026 Noorzaman · Universal Space Live · All rights reserved
        </p>
      </div>
    </div>
  )
}
