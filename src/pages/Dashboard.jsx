import { Link } from 'react-router-dom'
import Stats from '../components/Stats'

export default function Dashboard({ user }) {
  const achievements = [
    { id: 1, name: 'Space Explorer', emoji: '🌌' },
    { id: 2, name: 'NASA Fan', emoji: '🚀' },
    { id: 3, name: 'Weather Watcher', emoji: '⛅' },
    { id: 4, name: 'ISS Tracker', emoji: '📡' }
  ]
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-blue-300 text-sm">Welcome back, Explorer</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">🌌 {user?.name || 'Explorer'}</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <Stats label="Lessons" value={user?.lessons || 12} icon="📚" />
          <Stats label="XP Points" value={(user?.xp || 2450).toLocaleString()} icon="⭐" />
          <Stats label="Streak" value={`${user?.streak || 7} days`} icon="🔥" />
          <Stats label="Achievements" value={user?.achievements || 4} icon="🏆" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link to="/iss" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-5 rounded-2xl flex items-center gap-4 shadow-lg">
            <span className="text-3xl">📡</span>
            <div><h3 className="font-bold">ISS Live Tracker</h3><p className="text-blue-100 text-sm">Real-time location</p></div>
          </Link>
          <Link to="/apod" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-5 rounded-2xl flex items-center gap-4 shadow-lg">
            <span className="text-3xl">🖼️</span>
            <div><h3 className="font-bold">NASA Picture of the Day</h3><p className="text-purple-100 text-sm">Today's space image</p></div>
          </Link>
          <Link to="/weather" className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white p-5 rounded-2xl flex items-center gap-4 shadow-lg">
            <span className="text-3xl">⛅</span>
            <div><h3 className="font-bold">Weather</h3><p className="text-emerald-100 text-sm">Real-time weather</p></div>
          </Link>
          <Link to="/lessons" className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-5 rounded-2xl flex items-center gap-4 shadow-lg">
            <span className="text-3xl">📚</span>
            <div><h3 className="font-bold">Space Lessons</h3><p className="text-orange-100 text-sm">Learn about space</p></div>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow">
            <h2 className="font-bold text-gray-800 mb-4">📊 Your Stats</h2>
            <div className="flex justify-between text-sm mb-1"><span>Courses</span><span className="font-bold text-blue-600">3/10</span></div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4"><div className="bg-blue-600 h-2 rounded-full" style={{width:'30%'}}></div></div>
            <div className="flex justify-between text-sm"><span>Learning Hours</span><span className="font-bold text-blue-600">15.5 hrs</span></div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow">
            <h2 className="font-bold text-gray-800 mb-4">🏆 Achievements</h2>
            <div className="grid grid-cols-2 gap-2">
              {achievements.map(a => (
                <div key={a.id} className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="text-2xl">{a.emoji}</div>
                  <p className="text-xs font-medium text-gray-700 mt-1">{a.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
