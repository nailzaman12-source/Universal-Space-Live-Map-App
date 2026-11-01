import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Universe from './pages/Universe'
import NasaPrograms from './pages/NasaPrograms'
import Login from './pages/Login'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import ISS from './pages/ISS'
import APOD from './pages/APOD'
import Weather from './pages/Weather'
import Lessons from './pages/Lessons'
import LiveMap from './pages/LiveMap'
import Disaster from './pages/Disaster'

export default function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const saved = localStorage.getItem('usl_user') || localStorage.getItem('user')
    if (saved) { try { setUser(JSON.parse(saved)) } catch (e) {} }
  }, [])
  const handleLogout = () => {
    localStorage.removeItem('usl_user')
    localStorage.removeItem('user')
    setUser(null)
    window.location.href = '/'
  }
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Login setUser={setUser} />} />
          <Route path="/iss" element={user ? <ISS /> : <Login setUser={setUser} />} />
          <Route path="/apod" element={user ? <APOD /> : <Login setUser={setUser} />} />
          <Route path="/weather" element={user ? <Weather /> : <Login setUser={setUser} />} />
          <Route path="/lessons" element={user ? <Lessons /> : <Login setUser={setUser} />} />
          <Route path="/livemap" element={user ? <LiveMap /> : <Login setUser={setUser} />} />
          <Route path="/disaster" element={user ? <Disaster /> : <Login setUser={setUser} />} />
                  <Route path="/universe" element={user ? <Universe /> : <Login setUser={setUser} />} />
          <Route path="/nasa-programs" element={user ? <NasaPrograms /> : <Login setUser={setUser} />} />
        
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}
