import { Link } from 'react-router-dom'

export default function Starlink() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Starlink</h1>
        <p className="text-blue-200 mb-6">SpaceX satellite internet — education</p>
        <div className="bg-white/10 border border-white/15 rounded-2xl p-4 mb-4 text-blue-50 text-sm">
          Starlink is a SpaceX satellite constellation for internet. USL is independent and not affiliated with SpaceX.
        </div>
        <a href="https://www.starlink.com" target="_blank" rel="noreferrer"
          className="block bg-slate-700 text-white p-4 rounded-2xl text-center font-bold mb-3">Official Starlink</a>
        <a href="https://satellitemap.space/" target="_blank" rel="noreferrer"
          className="block bg-blue-700 text-white p-4 rounded-2xl text-center font-bold mb-6">Live satellite map</a>
        <Link to="/dashboard" className="block text-center text-cyan-300">Dashboard</Link>
      </div>
    </div>
  )
}
