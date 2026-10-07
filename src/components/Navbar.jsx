import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar({ user, onLogout }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl">
          🌌 USL
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-white hover:text-blue-200">Home</Link>
          {user ? (
            <>
              <Link to="/dashboard" className="text-white hover:text-blue-200">Dashboard</Link>
              <button onClick={onLogout} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Login
            </Link>
          )}
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-800 p-4 space-y-2">
          <Link to="/" className="block text-white px-4 py-2">Home</Link>
          {user ? (
            <>
              <Link to="/dashboard" className="block text-white px-4 py-2">Dashboard</Link>
              <button onClick={onLogout} className="w-full text-left bg-red-600 text-white px-4 py-2 rounded">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="block bg-blue-600 text-white px-4 py-2 rounded text-center">
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}
