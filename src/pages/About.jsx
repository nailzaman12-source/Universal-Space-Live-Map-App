import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-blue-200 text-sm hover:text-white">← Home</Link>
        <h1 className="text-3xl font-bold text-white mt-4 mb-2">About</h1>
        <p className="text-blue-200 text-sm mb-8">Universal Space Live (USL)</p>

        <div className="space-y-6 text-blue-50/90 text-sm leading-relaxed">
          <div className="bg-white/10 backdrop-blur rounded-2xl border border-white/15 p-6">
            <h2 className="text-white font-bold text-lg mb-2">What is USL?</h2>
            <p>
              Universal Space Live is a free educational web app that brings real-time space and Earth data
              into one place — for students, teachers, and explorers worldwide.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl border border-white/15 p-6">
            <h2 className="text-white font-bold text-lg mb-2">Creator and rights</h2>
            <p className="mb-2">
              <strong className="text-white">Noorzaman</strong><br />
              Independent Researcher<br />
              Chenab Nagar, Pakistan
            </p>
            <p>
              © 2026 Noorzaman. Universal Space Live (USL) name, original design, and original content
              are owned by the creator. All rights reserved unless otherwise stated.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl border border-white/15 p-6">
            <h2 className="text-white font-bold text-lg mb-3">Features</h2>
            <ul className="space-y-1">
              <li>📡 ISS Live Tracker</li>
              <li>🖼️ NASA Picture of the Day</li>
              <li>🗺️ Live Map</li>
              <li>🚨 Disaster Management</li>
              <li>⛅ Weather</li>
              <li>📚 Space Lessons</li>
              <li>🌌 Universe Map</li>
              <li>🚀 NASA Programs</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl border border-white/15 p-6">
            <h2 className="text-white font-bold text-lg mb-2">Legal</h2>
            <p className="space-x-3">
              <Link to="/privacy" className="text-cyan-300 hover:underline">Privacy Policy</Link>
              <span className="text-blue-400">·</span>
              <Link to="/terms" className="text-cyan-300 hover:underline">Terms of Use</Link>
            </p>
            <p className="mt-3 text-blue-200/80">Web app · 2026 · React + Vite</p>
          </div>
        </div>

        <p className="text-blue-200/70 text-xs mt-8 text-center">
          © 2026 Noorzaman · Universal Space Live · All rights reserved
        </p>
      </div>
    </div>
  )
}
