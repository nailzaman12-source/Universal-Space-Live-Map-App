import { useState, useEffect } from "react"

export default function LiveMap() {
  const [pos, setPos] = useState(null)
  const [place, setPlace] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchISS = async () => {
    try {
      const res = await fetch("https://api.wheretheiss.at/v1/satellites/25544")
      if (!res.ok) throw new Error("Failed")
      const data = await res.json()
      setPos(data)
      setError(null)
      try {
        const geoRes = await fetch(
          "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" +
          data.latitude + "&longitude=" + data.longitude + "&localityLanguage=en"
        )
        const geo = await geoRes.json()
        setPlace({
          city: geo.city || geo.locality || geo.principalSubdivision || "Unknown",
          country: geo.countryName || "Unknown",
          region: geo.principalSubdivision || ""
        })
      } catch {
        setPlace({ city: "Over ocean / remote", country: "-", region: "" })
      }
    } catch {
      setError("ISS location load nahi hui")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchISS()
    const t = setInterval(fetchISS, 15000)
    return () => clearInterval(t)
  }, [])

  const mapUrl = pos
    ? "https://www.openstreetmap.org/export/embed.html?bbox=" +
      (pos.longitude - 20) + "%2C" + (pos.latitude - 10) + "%2C" +
      (pos.longitude + 20) + "%2C" + (pos.latitude + 10) +
      "&layer=mapnik&marker=" + pos.latitude + "%2C" + pos.longitude
    : null

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-1">Live Map</h1>
        <p className="text-blue-200 mb-4">Earth view + ISS real-time position</p>
        {loading && !pos && <p className="text-white text-center">Loading map...</p>}
        {error && <p className="text-red-300 text-center mb-4">{error}</p>}
        {pos && (
          <>
            {place && (
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-4 mb-4 text-white text-center shadow">
                <p className="text-sm opacity-80">ISS currently above</p>
                <p className="text-2xl font-bold">{place.city}</p>
                <p className="text-lg">{place.country}{place.region ? ", " + place.region : ""}</p>
              </div>
            )}
            <div className="bg-white rounded-2xl p-4 mb-4 shadow grid grid-cols-2 gap-3 text-sm">
              <div><p className="text-gray-500">Latitude</p><p className="font-bold text-blue-700">{pos.latitude.toFixed(4)}</p></div>
              <div><p className="text-gray-500">Longitude</p><p className="font-bold text-blue-700">{pos.longitude.toFixed(4)}</p></div>
              <div><p className="text-gray-500">Altitude</p><p className="font-bold text-blue-700">{pos.altitude.toFixed(1)} km</p></div>
              <div><p className="text-gray-500">Velocity</p><p className="font-bold text-blue-700">{pos.velocity.toFixed(0)} km/h</p></div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow mb-4">
              <iframe title="ISS Live Map" src={mapUrl} className="w-full h-72 border-0" loading="lazy" />
            </div>
            <a href={"https://www.google.com/maps?q=" + pos.latitude + "," + pos.longitude} target="_blank" rel="noreferrer" className="block text-center bg-blue-600 text-white py-3 rounded-xl font-bold">
              Open in Google Maps
            </a>
          </>
        )}
      </div>
    </div>
  )
}
