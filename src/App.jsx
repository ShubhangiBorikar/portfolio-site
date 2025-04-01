import React from "react";

const Section = ({ title, icon, children }) => (
  <section className="p-4 my-6 bg-white rounded-xl shadow-md">
    <h2 className="text-2xl font-bold mb-2">{icon} {title}</h2>
    {children}
  </section>
);

const App = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 font-sans">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-extrabold text-blue-700">✨ Data Muse</h1>
        <nav className="space-x-6">
          <a href="#about" className="text-blue-600 hover:underline">About</a>
          <a href="#dashboards" className="text-blue-600 hover:underline">Dashboards</a>
          <a href="#recognition" className="text-blue-600 hover:underline">Recognition</a>
        </nav>
      </header>

      <Section title="About Me" icon="📘">
        <p>I'm a data analyst transforming complex data into compelling visual stories. Currently exploring Python, Tableau, and predictive analytics.</p>
      </Section>

      <Section title="Signature Dashboards" icon="📊">
        <ul className="list-disc list-inside">
          <li>Dashboard 1</li>
          <li>Dashboard 2</li>
          <li>Dashboard 3</li>
        </ul>
      </Section>

      <Section title="Recognition" icon="🏅">
        <ul className="list-disc list-inside">
          <li>Top Viz of the Day</li>
          <li>Public Ambassador</li>
        </ul>
      </Section>

      <Section title="Showcase" icon="🧚‍♀️">
        <img src="https://via.placeholder.com/300x200" alt="Profile Image" className="rounded-lg shadow" />
      </Section>

      <Section title="Badges" icon="🎖">
        <p>2023, 2024</p>
      </Section>

      <Section title="Search" icon="🔍">
        <input type="text" placeholder="Looking for something?" className="p-2 border rounded w-full" />
      </Section>
    </div>
  );
};

export default App;