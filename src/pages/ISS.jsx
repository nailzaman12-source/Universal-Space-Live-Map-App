import { useState, useEffect } from 'react'

export default function ISS() {
  const [pos, setPos] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchISS = async () => {
    try {
      const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
      if (!res.ok) throw new Error('Failed')
      const data = await res.json()
      setPos(data)
      setError(null)
    } catch {
      setError('Could not load ISS data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchISS()
    const t = setInterval(fetchISS, 10000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-1">📡 ISS Live Tracker</h1>
        <p className="text-blue-200 mb-6">Updates every 10 seconds</p>

        {loading && !pos && <div className="bg-white/10 rounded-2xl p-8 text-center text-white">Loading...</div>}
        {error && <div className="bg-red-500/20 text-red-100 rounded-2xl p-4 mb-4">{error}</div>}

        {pos && (
          <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-sm">Latitude</p>
                <p className="text-xl font-bold text-blue-700">{pos.latitude.toFixed(4)}°</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Longitude</p>
                <p className="text-xl font-bold text-blue-700">{pos.longitude.toFixed(4)}°</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Altitude</p>
                <p className="text-xl font-bold text-blue-700">{pos.altitude.toFixed(1)} km</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Velocity</p>
                <p className="text-xl font-bold text-blue-700">{pos.velocity.toFixed(0)} km/h</p>
              </div>
            </div>
            <a href={`https://www.google.com/maps?q=\( {pos.latitude}, \){pos.longitude}`} target="_blank" rel="noreferrer"
              className="block text-center bg-blue-600 text-white py-3 rounded-xl font-bold">
              View on Google Maps →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
