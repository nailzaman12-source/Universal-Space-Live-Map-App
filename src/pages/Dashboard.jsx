import { Link } from 'react-router-dom'
import Stats from '../components/Stats'

export default function Dashboard({ user }) {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-blue-300 text-sm">Welcome back, Explorer</p>
          <h1 className="text-3xl font-bold text-white">{user?.name || 'Explorer'}</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <Stats label="Lessons" value={user?.lessons || 12} icon="📚" />
          <Stats label="XP Points" value={(user?.xp || 2450).toLocaleString()} icon="⭐" />
          <Stats label="Streak" value={(user?.streak || 7) + ' days'} icon="🔥" />
          <Stats label="Achievements" value={user?.achievements || 4} icon="🏆" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link to="/iss" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-5 rounded-2xl flex items-center gap-4 shadow-lg">
            <span className="text-3xl">📡</span>
            <div>
              <h3 className="font-bold">ISS Live Tracker</h3>
              <p className="text-blue-100 text-sm">Real-time location</p>
            </div>
          </Link>

          <Link to="/apod" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-5 rounded-2xl flex items-center gap-4 shadow-lg">
            <span className="text-3xl">🖼️</span>
            <div>
              <h3 className="font-bold">NASA Picture of the Day</h3>
              <p className="text-purple-100 text-sm">Today space image</p>
            </div>
          </Link>

          <Link to="/weather" className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white p-5 rounded-2xl flex items-center gap-4 shadow-lg">
            <span className="text-3xl">⛅</span>
            <div>
              <h3 className="font-bold">Weather</h3>
              <p className="text-emerald-100 text-sm">Real-time weather</p>
            </div>
          </Link>

          <Link to="/lessons" className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-5 rounded-2xl flex items-center gap-4 shadow-lg">
            <span className="text-3xl">📚</span>
            <div>
              <h3 className="font-bold">Space Lessons</h3>
              <p className="text-orange-100 text-sm">Learn about space</p>
            </div>
          </Link>

          <Link to="/livemap" className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-5 rounded-2xl flex items-center gap-4 shadow-lg">
            <span className="text-3xl">🗺️</span>
            <div>
              <h3 className="font-bold">Live Map</h3>
              <p className="text-indigo-100 text-sm">ISS + city + country</p>
            </div>
          </Link>

          <Link to="/disaster" className="bg-gradient-to-r from-red-600 to-rose-500 text-white p-5 rounded-2xl flex items-center gap-4 shadow-lg">
            <span className="text-3xl">🚨</span>
            <div>
              <h3 className="font-bold">Disaster Management</h3>
              <p className="text-red-100 text-sm">Live earthquakes</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
