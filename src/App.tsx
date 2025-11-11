import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-blue-950 dark:to-black transition-colors duration-500">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-lg hover:scale-110 transition-transform"
        aria-label="Toggle dark mode"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
