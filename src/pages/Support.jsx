import { Link } from 'react-router-dom'

export default function Support() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-1">Support & Payment</h1>
        <p className="text-blue-200 mb-6">Optional support — USL stays free for students</p>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-5 mb-6 text-blue-50 text-sm leading-relaxed">
          Universal Space Live is created by <strong className="text-white">Noorzaman</strong>,
          Independent Researcher, Chenab Nagar, Pakistan.
          Contributions help hosting and education features. Payment is never required to use the app.
        </div>

        <h2 className="text-white font-bold mb-3">Pay / Send support</h2>

        <div className="bg-white rounded-2xl p-5 mb-3 shadow">
          <p className="text-xs text-gray-500 font-bold uppercase">JazzCash / Easypaisa</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">03XX-XXXXXXX</p>
          <p className="text-gray-600 text-sm">Title: Noorzaman</p>
          <p className="text-amber-600 text-xs mt-2">← Put your real number here before public use</p>
        </div>

        <div className="bg-white rounded-2xl p-5 mb-3 shadow">
          <p className="text-xs text-gray-500 font-bold uppercase">Bank</p>
          <p className="text-gray-900 font-semibold mt-1">Bank name: ________</p>
          <p className="text-gray-600 text-sm">Account / IBAN: ________</p>
          <p className="text-gray-600 text-sm">Title: Noorzaman</p>
        </div>

        <div className="bg-white rounded-2xl p-5 mb-6 shadow">
          <p className="text-xs text-gray-500 font-bold uppercase">Stripe / online link (optional)</p>
          <p className="text-gray-600 text-sm mt-2">
            When you have a Stripe Payment Link, paste it as a button href in this file.
          </p>
        </div>

        <div className="bg-red-500/20 border border-red-400/30 rounded-2xl p-4 mb-6 text-red-100 text-sm">
          This site does not collect card numbers. Only send money to accounts you verified with the creator.
        </div>

        <p className="text-center text-blue-200/60 text-xs mb-4">© 2026 Noorzaman · Universal Space Live</p>
        <Link to="/about" className="block text-center text-cyan-300 text-sm mb-2">About</Link>
        <Link to="/dashboard" className="block text-center text-blue-200 text-sm">← Dashboard</Link>
      </div>
    </div>
  )
}
