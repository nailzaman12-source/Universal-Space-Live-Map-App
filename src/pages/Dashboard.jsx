import Stats from '../components/Stats'

export default function Dashboard({ user }) {
  const achievements = [
    { id: 1, name: 'Space Explorer', emoji: '🌌' },
    { id: 2, name: 'NASA Fan', emoji: '🚀' },
    { id: 3, name: 'Weather Watcher', emoji: '⛅' },
    { id: 4, name: 'ISS Tracker', emoji: '📡' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-12">
          🌌 Welcome, {user.name}!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <Stats label="Lessons" value="12" icon="📚" />
          <Stats label="XP Points" value="2,450" icon="⭐" />
          <Stats label="Streak" value="7 days" icon="🔥" />
          <Stats label="Achievements" value="4" icon="🏆" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">📊 Your Stats</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Courses Completed</span>
                <span className="font-bold text-blue-600">3/10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{width: '30%'}}></div>
              </div>
              <div className="flex justify-between items-center mt-6">
                <span className="text-gray-700">Total Learning Hours</span>
                <span className="font-bold text-blue-600">15.5 hrs</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">🏆 Achievements</h2>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map(ach => (
                <div key={ach.id} className="bg-gray-100 p-4 rounded-lg text-center">
                  <div className="text-4xl mb-2">{ach.emoji}</div>
                  <p className="text-sm font-bold text-gray-700">{ach.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">🚀 Next Steps</h2>
          <ul className="space-y-3 text-gray-700">
            <li>✅ Explore NASA real-time data</li>
            <li>✅ Track weather patterns</li>
            <li>✅ Monitor ISS location</li>
            <li>✅ Earn more achievements</li>
            <li>✅ Join the community</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
