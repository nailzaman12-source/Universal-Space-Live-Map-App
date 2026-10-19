import { useState, useEffect } from 'react'
export default function Disaster() {
  const [quakes, setQuakes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson')
      .then(r => r.json())
      .then(data => {
        setQuakes((data.features || []).slice(0, 20).map(f => ({
          id: f.id, place: f.properties.place, mag: f.properties.mag,
          time: new Date(f.properties.time).toLocaleString(), url: f.properties.url
        })))
      })
      .catch(() => setError('Data load nahi hui'))
      .finally(() => setLoading(false))
  }, [])
  return (
    <div className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-1">Disaster Management</h1>
        <p className="text-blue-200 mb-6">Live earthquakes (last 24 hours, Mag 2.5+)</p>
        {loading && <p className="text-white text-center">Loading...</p>}
        {error && <p className="text-red-300 text-center">{error}</p>}
        <div className="space-y-3">
          {quakes.map(q => (
            <div key={q.id} className="bg-white rounded-2xl p-4 shadow">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <p className="font-bold text-gray-800">{q.place}</p>
                  <p className="text-sm text-gray-500">{q.time}</p>
                </div>
                <span className={'px-3 py-1 rounded-full text-white text-sm font-bold ' + (q.mag >= 5 ? 'bg-red-600' : q.mag >= 4 ? 'bg-orange-500' : 'bg-yellow-500')}>M {q.mag}</span>
              </div>
              <a href={q.url} target="_blank" rel="noreferrer" className="text-blue-600 text-sm mt-2 inline-block">Details</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
