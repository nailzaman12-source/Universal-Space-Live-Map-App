export default function Stats({ label, value, icon }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 text-white text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-3xl font-bold">{value}</div>
      <p className="text-blue-200 mt-2">{label}</p>
    </div>
  )
}
