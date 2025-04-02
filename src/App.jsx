export default function App() {
  return (
    <div className="min-h-screen bg-[#e9f0fb] text-center p-4">
      <h1 className="text-4xl font-bold text-[#3b50e2] mt-6">Shubhangi Borikar</h1>
      <h2 className="text-lg text-gray-600 mt-2">Data Analyst • Aspiring Data Scientist</h2>
      <div className="bg-white shadow-xl rounded-2xl max-w-3xl mx-auto mt-8 p-6 text-left">
        <h3 className="text-xl font-semibold text-[#1e40af] flex items-center mb-2">🌸 About Me</h3>
        <p>
          I'm a data analyst with a passion for visualization, storytelling, and machine learning.
          Currently learning Python, predictive analytics, and data science tools to transition into more advanced analytics roles.
        </p>
      </div>
      <div className="bg-white shadow-xl rounded-2xl max-w-6xl mx-auto mt-8 p-6 text-left">
        <h3 className="text-xl font-semibold text-[#1e40af] flex items-center mb-4">📊 Dashboards</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {["Demo Viz 1", "Demo Viz 2", "Demo Viz 3"].map((viz, i) => (
            <div key={i} className="bg-gray-100 rounded-xl h-40 flex items-center justify-center text-gray-500">
              Placeholder
              <div className="mt-2 text-blue-600 underline text-sm">{viz}</div>
            </div>
          ))}
        </div>
      </div>
      <footer className="text-sm text-gray-400 mt-10">© 2025 Shubhangi Borikar • Built with React & Tailwind</footer>
    </div>
  );
}