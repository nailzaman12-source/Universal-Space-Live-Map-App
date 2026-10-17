import { useState, useEffect } from 'react'

export default function APOD() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(r => r.json())
      .then(setData)
      .catch(() => setError('Could not load image'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-1">🖼️ NASA Picture of the Day</h1>
        <p className="text-blue-200 mb-6">Astronomy Picture of the Day</p>

        {loading && <div className="bg-white/10 rounded-2xl p-8 text-center text-white">Loading...</div>}
        {error && <div className="bg-red-500/20 text-red-100 rounded-2xl p-4">{error}</div>}

        {data && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {data.media_type === 'image' ? (
              <img src={data.url} alt={data.title} className="w-full max-h-80 object-cover" />
            ) : (
              <div className="aspect-video"><iframe src={data.url} title={data.title} className="w-full h-full" /></div>
            )}
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-900">{data.title}</h2>
              <p className="text-gray-500 text-sm mb-3">{data.date}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{data.explanation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
