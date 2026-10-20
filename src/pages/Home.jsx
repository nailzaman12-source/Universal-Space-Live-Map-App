import { Link } from 'react-router-dom'

export default function Home() {
  const features = [
    { icon: '📡', title: 'Real-time ISS', desc: 'Track the International Space Station live around Earth' },
    { icon: '🖼️', title: 'NASA Imagery', desc: "Daily astronomy pictures from NASA APOD" },
    { icon: '🗺️', title: 'Live Map', desc: 'ISS position with city, country and map view' },
    { icon: '🚨', title: 'Disaster Alerts', desc: 'Global earthquake monitoring and safety data' },
    { icon: '⛅', title: 'Weather', desc: 'Real-time weather for any city worldwide' },
    { icon: '📚', title: 'Space Lessons', desc: 'Learn space science with interactive lessons' }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden px-4 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="inline-block text-sm font-semibold tracking-widest text-blue-200 uppercase mb-4 px-4 py-1 rounded-full bg-white/10 border border-white/20">
            Universal Space Live
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Explore Earth.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Discover Space.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl mx-auto mb-10">
            Real-time ISS tracking, NASA images, weather, disaster alerts and space education — in one app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login" className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg">
              Get Started Free
            </Link>
            <Link to="/dashboard" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/30">
              Open Dashboard
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Everything in one place
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl p-6 bg-white/10 backdrop-blur-md border border-white/15 shadow-lg">
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="text-white font-bold text-lg mb-1">{f.title}</h3>
                <p className="text-blue-100/80 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-r from-indigo-600/80 to-purple-600/80 border border-white/20 p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to explore the universe?
          </h2>
          <p className="text-blue-100 mb-8">Free to start. No credit card required.</p>
          <Link to="/login" className="inline-block bg-white text-indigo-900 px-10 py-4 rounded-2xl font-bold text-lg">
            Sign Up Now
          </Link>
        </div>
      </section>

      <footer className="text-center text-blue-200/50 text-xs pb-8">
        Universal Space Live · Education · Space · Safety
      </footer>
    </div>
  )
}
