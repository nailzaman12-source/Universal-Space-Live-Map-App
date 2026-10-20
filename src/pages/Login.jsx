import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login({ setUser }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    const name = email.split('@')[0] || 'Explorer'
    const user = {
      email,
      name,
      id: Date.now(),
      lessons: 12,
      xp: 2450,
      streak: 7,
      achievements: 4
    }
    localStorage.setItem('usl_user', JSON.stringify(user))
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
    setTimeout(() => {
      setLoading(false)
      navigate('/dashboard')
    }, 400)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <p className="text-blue-200 text-sm tracking-widest uppercase mb-2">Universal Space Live</p>
          <h1 className="text-3xl font-extrabold text-white">Welcome back</h1>
          <p className="text-blue-100/80 text-sm mt-2">Sign in to explore space, weather & safety data</p>
        </div>

        <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-blue-100 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 border-0 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>
            <div>
              <label className="block text-blue-100 text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 border-0 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3.5 rounded-xl font-bold text-lg shadow-lg hover:opacity-95 transition disabled:opacity-60"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-blue-100/70 text-sm mt-6">
            Demo login — any email & password works
          </p>
        </div>

        <p className="text-center mt-6">
          <Link to="/" className="text-blue-200 text-sm hover:text-white underline">
            ← Back to Home
          </Link>
        </p>
      </div>
    </div>
  )
}
