import { Link } from 'react-router-dom'

export default function NasaPrograms() {
  const programs = [
    { name: 'Artemis', desc: 'Return humans to the Moon and prepare for Mars.', url: 'https://www.nasa.gov/artemis/' },
    { name: 'James Webb Space Telescope', desc: 'Studies early galaxies and exoplanets.', url: 'https://webb.nasa.gov/' },
    { name: 'Hubble Space Telescope', desc: 'Deep images of the universe from Earth orbit.', url: 'https://hubblesite.org/' },
    { name: 'International Space Station', desc: 'Orbiting lab for science in microgravity.', url: 'https://www.nasa.gov/international-space-station/' },
    { name: 'Mars Exploration', desc: 'Rovers and orbiters study the Red Planet.', url: 'https://mars.nasa.gov/' },
    { name: 'Earth Science', desc: 'Satellites monitor climate, oceans and disasters.', url: 'https://science.nasa.gov/earth/' },
    { name: 'APOD', desc: 'Astronomy Picture of the Day.', url: 'https://apod.nasa.gov/' },
    { name: 'NASA STEM Education', desc: 'Free lessons for students and educators.', url: 'https://www.nasa.gov/learning-resources/' }
  ]
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-1">NASA Programs</h1>
        <p className="text-blue-200 mb-6">Missions and education for students</p>
        <div className="space-y-3 mb-8">
          {programs.map(p => (
            <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="block bg-white rounded-2xl p-4 shadow">
              <h3 className="font-bold text-gray-900">{p.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{p.desc}</p>
              <p className="text-blue-600 text-sm font-semibold mt-2">Learn more →</p>
            </a>
          ))}
        </div>
        <Link to="/universe" className="block text-center text-cyan-300 font-semibold">← Universe Map</Link>
      </div>
    </div>
  )
}
