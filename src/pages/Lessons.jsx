import { useState } from 'react'

const lessons = [
  { id: 1, title: 'What is the ISS?', emoji: '📡', content: 'The International Space Station is a large spacecraft that orbits Earth. Astronauts live and work there. It travels at about 28,000 km/h and completes one orbit every 90 minutes.' },
  { id: 2, title: 'How do rockets work?', emoji: '🚀', content: 'Rockets work on Newton\'s third law. Hot gas is pushed out the bottom, which pushes the rocket up. Most rockets use liquid fuel + liquid oxygen.' },
  { id: 3, title: 'What is a black hole?', emoji: '🕳️', content: 'A black hole is a region where gravity is so strong that nothing, not even light, can escape. They form when massive stars collapse.' },
  { id: 4, title: 'Why is the sky blue?', emoji: '🌌', content: 'Blue light scatters more in Earth\'s atmosphere than other colors, so we see a blue sky. At sunset, red and orange colors dominate.' },
  { id: 5, title: 'What is NASA APOD?', emoji: '🖼️', content: 'Astronomy Picture of the Day features a different image of the universe each day with a short explanation by an astronomer.' },
  { id: 6, title: 'How far is the Moon?', emoji: '🌙', content: 'The Moon is about 384,400 km from Earth. Light from the Moon takes about 1.3 seconds to reach us.' }
]

export default function Lessons() {
  const [open, setOpen] = useState(null)
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-1">📚 Space Lessons</h1>
        <p className="text-blue-200 mb-6">Learn about space, step by step</p>
        <div className="space-y-3">
          {lessons.map((lesson) => (
            <div key={lesson.id} className="bg-white rounded-2xl shadow overflow-hidden">
              <button onClick={() => setOpen(open === lesson.id ? null : lesson.id)} className="w-full flex items-center gap-3 p-4 text-left">
                <span className="text-2xl">{lesson.emoji}</span>
                <span className="font-bold text-gray-800 flex-1">{lesson.title}</span>
                <span className="text-gray-400">{open === lesson.id ? '▲' : '▼'}</span>
              </button>
              {open === lesson.id && <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed border-t pt-3">{lesson.content}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
