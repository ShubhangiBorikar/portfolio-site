import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-fairyblue text-gray-700 px-6 py-8">
      <motion.header
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-blue-600">Shubhangi Borikar</h1>
        <p className="text-lg mt-2 text-gray-500">Data Analyst • Aspiring Data Scientist</p>
      </motion.header>

      <motion.section
        className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 max-w-5xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">🌸 About Me</h2>
        <p>
          I'm a data analyst with a passion for visualization, storytelling, and machine learning. Currently learning Python, predictive analytics, and data science tools to transition into more advanced analytics roles.
        </p>
      </motion.section>

      <motion.section
        className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 max-w-5xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">📊 Dashboards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white rounded-xl p-4 shadow hover:shadow-md transition">
              <div className="aspect-video bg-softgray rounded-lg flex items-center justify-center text-gray-400 text-sm">
                Placeholder
              </div>
              <p className="mt-2 font-medium text-blue-600">Demo Viz {n}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.footer
        className="text-center text-sm text-gray-400 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        © {new Date().getFullYear()} Shubhangi Borikar • Built with React & Tailwind
      </motion.footer>
    </div>
  );
}
