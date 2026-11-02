import { Link } from 'react-router-dom'

export default function Support() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-1">Support & Payment</h1>
        <p className="text-blue-200 mb-6">Optional — USL stays free for students</p>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-5 mb-6 text-blue-50 text-sm leading-relaxed">
          Universal Space Live (USL) is created by <strong className="text-white">Noorzaman</strong>,
          Independent Researcher, Chenab Nagar, Pakistan.
          Voluntary support helps hosting and education features. Payment is never required to use the app.
        </div>

        <h2 className="text-white font-bold mb-3">Easypaisa</h2>
        <div className="bg-white rounded-2xl p-5 mb-5 shadow space-y-1">
          <p className="text-xs text-gray-500 font-bold uppercase">Account title</p>
          <p className="text-gray-900 font-bold text-lg">Noor Zaman</p>
          <p className="text-xs text-gray-500 font-bold uppercase mt-3">Mobile account</p>
          <p className="text-gray-900 font-bold text-2xl tracking-wide">0309-5804082</p>
        </div>

        <h2 className="text-white font-bold mb-3">Bank transfer (HBL)</h2>
        <div className="bg-white rounded-2xl p-5 mb-5 shadow space-y-2">
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase">Account title</p>
            <p className="text-gray-900 font-bold text-lg">Noor Zaman</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase">Bank</p>
            <p className="text-gray-900 font-semibold">HBL (Habib Bank Limited)</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase">Branch</p>
            <p className="text-gray-900">Cantonment Branch, Multan</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase">Account number</p>
            <p className="text-gray-900 font-bold text-xl tracking-wide">02117901586503</p>
          </div>
        </div>

        <div className="bg-amber-500/20 border border-amber-400/30 rounded-2xl p-4 mb-4 text-amber-50 text-sm">
          Please use reference: <strong>USL Support</strong>.
          Confirm title <strong>Noor Zaman</strong> before sending.
        </div>

        <div className="bg-white/10 border border-white/15 rounded-2xl p-4 mb-6 text-blue-100 text-sm">
          <p className="font-semibold text-white mb-1">Safety</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>USL does not collect card numbers on this website.</li>
            <li>Only use details shown on this official Support page.</li>
            <li>Support is voluntary — the app remains free.</li>
          </ul>
        </div>

        <p className="text-center text-blue-200/60 text-xs mb-4">
          © 2026 Noorzaman · Universal Space Live · All rights reserved
        </p>
        <Link to="/about" className="block text-center text-cyan-300 text-sm mb-2">About</Link>
        <Link to="/dashboard" className="block text-center text-blue-200 text-sm">← Dashboard</Link>
      </div>
    </div>
  )
}
