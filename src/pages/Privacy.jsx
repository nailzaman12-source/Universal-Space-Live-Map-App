import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-blue-200 text-sm hover:text-white">← Home</Link>
        <h1 className="text-3xl font-bold text-white mt-4 mb-2">Privacy Policy</h1>
        <p className="text-blue-200 text-sm mb-8">Last updated: November 2026</p>

        <div className="space-y-6 text-blue-50/90 text-sm leading-relaxed bg-white/10 backdrop-blur rounded-2xl border border-white/15 p-6">
          <section>
            <h2 className="text-white font-bold text-lg mb-2">1. Who we are</h2>
            <p>
              Universal Space Live (USL) is operated by <strong className="text-white">Noorzaman</strong>,
              Independent Researcher, Chenab Nagar, Pakistan.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-2">2. Information we collect</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Demo account details you enter (name, email) may be stored on your device (localStorage).</li>
              <li>We do not sell personal data.</li>
              <li>We do not require phone GPS for core features; weather uses city search; ISS data comes from public APIs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-2">3. Third-party services</h2>
            <p className="mb-2">USL may load public data from services such as:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Where The ISS At</li>
              <li>NASA APOD</li>
              <li>Open-Meteo</li>
              <li>USGS earthquakes</li>
              <li>BigDataCloud reverse geocoding</li>
              <li>Hosting (e.g. Vercel) standard logs</li>
            </ul>
            <p className="mt-2">Those services have their own privacy policies.</p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-2">4. Children</h2>
            <p>
              USL is educational. If you are under 13 (or under the digital consent age in your country),
              use the app with a parent or guardian.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-lg mb-2">5. Contact</h2>
            <p>
              Privacy questions: see the About page. We may update this policy; the date above will change when we do.
            </p>
          </section>
        </div>

        <p className="text-blue-200/70 text-xs mt-6 text-center">
          © 2026 Noorzaman · Universal Space Live · All rights reserved
        </p>
        <p className="text-center mt-2">
          <Link to="/terms" className="text-cyan-300 text-sm hover:underline">Terms of Use</Link>
        </p>
      </div>
    </div>
  )
}
