import { Link } from 'react-router-dom'
import Stats from '../components/Stats'

export default function Dashboard({ user }) {
  const features = [
    { to: '/iss', title: 'ISS Live Tracker', desc: 'Real-time station position', icon: '📡', gradient: 'from-blue-600 to-cyan-500' },
    { to: '/apod', title: 'NASA Picture of the Day', desc: "Today's space image", icon: '🖼️', gradient: 'from-purple-600 to-pink-500' },
    { to: '/weather', title: 'Weather', desc: 'Global real-time weather', icon: '⛅', gradient: 'from-emerald-600 to-teal-500' },
    { to: '/lessons', title: 'Space Lessons', desc: 'Learn space science', icon: '📚', gradient: 'from-orange-500 to-amber-500' },
    { to: '/livemap', title: 'Live Map', desc: 'ISS + city + disaster alerts', icon: '🗺️', gradient: 'from-indigo-600 to-blue-500' },
    { to: '/disaster', title: 'Disaster Management', desc: 'Live earthquake alerts', icon: '🚨', gradient: 'from-red-600 to-rose-500' },
    { to: '/universe', title: 'Universe Map', desc: 'Sky map + cosmic knowledge', icon: '🌌', gradient: 'from-violet-600 to-fuchsia-500' },
    { to: '/nasa-programs', title: 'NASA Programs', desc: 'Missions and education', icon: '🚀', gradient: 'from-sky-600 to-blue-700' }
  ]
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6 shadow-xl">
          <p className="text-blue-200 text-sm font-medium">Welcome back, Explorer</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-1">{user?.name || 'Explorer'}</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <Stats label="Lessons" value={user?.lessons || 12} icon="📚" />
          <Stats label="XP Points" value={(user?.xp || 2450).toLocaleString()} icon="⭐" />
          <Stats label="Streak" value={(user?.streak || 7) + ' days'} icon="🔥" />
          <Stats label="Achievements" value={user?.achievements || 4} icon="🏆" />
        </div>
        <h2 className="text-white font-bold text-lg mb-4">Explore</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <Link key={f.to} to={f.to} className={'rounded-2xl p-5 text-white shadow-lg bg-gradient-to-r ' + f.gradient}>
              <div className="flex items-center gap-4">
                <span className="text-4xl">{f.icon}</span>
                <div>
                  <h3 className="font-bold text-lg">{f.title}</h3>
                  <p className="text-white/80 text-sm">{f.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
