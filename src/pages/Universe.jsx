import { Link } from 'react-router-dom'

export default function Universe() {
  const knowledge = [
    { title: 'The Observable Universe', text: 'Light reaches us from about 93 billion light-years across. Beyond that we cannot see.' },
    { title: 'Galaxies', text: 'Hundreds of billions of galaxies exist. Our home is the Milky Way; nearest large neighbor is Andromeda.' },
    { title: 'Black Holes', text: 'Regions where gravity is so strong that not even light can escape.' },
    { title: 'Expanding Space', text: 'Space is expanding. Distant galaxies move away — evidence for the Big Bang.' }
  ]
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-1">Universe Map</h1>
        <p className="text-blue-200 mb-6">Sky view and cosmic knowledge</p>
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl mb-6">
          <iframe title="Sky Map" src="https://stellarium-web.org/" className="w-full h-80 border-0" loading="lazy" allow="fullscreen" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <a href="https://eyes.nasa.gov/apps/solar-system/#/home" target="_blank" rel="noreferrer" className="block bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-4 rounded-2xl font-bold text-center">NASA Eyes — Solar System</a>
          <a href="https://science.nasa.gov/universe/" target="_blank" rel="noreferrer" className="block bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-2xl font-bold text-center">NASA Universe Science</a>
        </div>
        <h2 className="text-xl font-bold text-white mb-3">Cosmic knowledge</h2>
        <div className="space-y-3 mb-8">
          {knowledge.map(k => (
            <div key={k.title} className="bg-white/10 border border-white/15 rounded-2xl p-4">
              <h3 className="text-white font-bold mb-1">{k.title}</h3>
              <p className="text-blue-100/90 text-sm">{k.text}</p>
            </div>
          ))}
        </div>
        <Link to="/nasa-programs" className="block text-center text-cyan-300 font-semibold">Explore NASA Programs →</Link>
      </div>
    </div>
  )
}
