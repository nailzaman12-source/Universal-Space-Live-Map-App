import { useState, useEffect } from 'react'

export default function Weather() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [city, setCity] = useState('Karachi')

  const fetchWeather = async (q = city) => {
    setLoading(true)
    setError(null)
    try {
      const geoRes = await fetch(
        'https://geocoding-api.open-meteo.com/v1/search?name=' +
        encodeURIComponent(q) + '&count=1'
      )
      const geoData = await geoRes.json()
      if (!geoData.results || !geoData.results.length) throw new Error('City not found')
      const { latitude, longitude, name, country } = geoData.results[0]
      const wRes = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=' + latitude +
        '&longitude=' + longitude +
        '&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto'
      )
      const wData = await wRes.json()
      setWeather({
        city: name,
        country,
        temp: wData.current.temperature_2m,
        humidity: wData.current.relative_humidity_2m,
        wind: wData.current.wind_speed_10m,
        code: wData.current.weather_code
      })
    } catch (e) {
      setError(e.message || 'Failed to load weather')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchWeather('Karachi') }, [])

  const weatherText = (code) => {
    if (code === 0) return 'Clear'
    if (code <= 3) return 'Partly Cloudy'
    if (code <= 48) return 'Foggy'
    if (code <= 67) return 'Rain'
    if (code <= 77) return 'Snow'
    return 'Storm'
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-white mb-1">Weather</h1>
        <p className="text-blue-200 mb-6">Real-time weather data</p>
        <div className="flex gap-2 mb-6">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchWeather(city)}
            placeholder="Enter city..."
            className="flex-1 px-4 py-3 rounded-xl border-0"
          />
          <button
            onClick={() => fetchWeather(city)}
            className="bg-blue-600 text-white px-5 py-3 rounded-xl font-bold"
          >
            Search
          </button>
        </div>
        {loading && (
          <div className="bg-white/10 rounded-2xl p-8 text-center text-white">Loading...</div>
        )}
        {error && (
          <div className="bg-red-500/20 text-red-100 rounded-2xl p-4 mb-4">{error}</div>
        )}
        {weather && !loading && (
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <p className="text-gray-500 text-sm">{weather.city}, {weather.country}</p>
            <p className="text-5xl font-bold text-blue-700 my-3">{weather.temp} C</p>
            <p className="text-xl mb-4">{weatherText(weather.code)}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-gray-500">Humidity</p>
                <p className="font-bold">{weather.humidity}%</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-gray-500">Wind</p>
                <p className="font-bold">{weather.wind} km/h</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
