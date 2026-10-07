import { Link } from 'react-router-dom'
import { Rocket, BookOpen, Zap, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4">
            🌌 Explore Earth
          </h1>
          <h1 className="text-6xl font-bold text-white mb-6">
            Discover Space
          </h1>
          <p className="text-2xl text-blue-200 mb-8">
            Learn with AI - Real-time astronomy & gamified learning
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg">
              Get Started Free
            </Link>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 text-center">
            <Rocket className="text-blue-400 mb-4 mx-auto" size={50} />
            <h3 className="text-white font-bold text-xl mb-2">Real-time Data</h3>
            <p className="text-blue-200">NASA photos & space events</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 text-center">
            <BookOpen className="text-blue-400 mb-4 mx-auto" size={50} />
            <h3 className="text-white font-bold text-xl mb-2">Learn & Grow</h3>
            <p className="text-blue-200">Interactive space science</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 text-center">
            <Zap className="text-blue-400 mb-4 mx-auto" size={50} />
            <h3 className="text-white font-bold text-xl mb-2">Achievements</h3>
            <p className="text-blue-200">Unlock badges & rewards</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 text-center">
            <Globe className="text-blue-400 mb-4 mx-auto" size={50} />
            <h3 className="text-white font-bold text-xl mb-2">Global Access</h3>
            <p className="text-blue-200">Available worldwide</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Start?</h2>
          <Link to="/login" className="inline-block bg-white text-blue-900 px-12 py-5 rounded-lg font-bold text-xl hover:bg-gray-100">
            Sign Up Now - It's Free! ✨
          </Link>
        </div>
      </div>
    </div>
  )
}
