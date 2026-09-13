import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechGrid from './components/TechGrid';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load dataset.");
        return res.json();
      })
      .then((data) => setTechnologies(data))
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load technologies.");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleAddToStack = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warn(`"${tech.name}" is already in your stack!`, { position: "top-right", autoClose: 2500 });
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`, { position: "top-right", autoClose: 2500 });
  };

  const handleRemoveFromStack = (techId) => {
    const item = stack.find((t) => t.id === techId);
    setStack((prev) => prev.filter((t) => t.id !== techId));
    toast.info(`Removed ${item ? item.name : 'item'} from your stack.`, { position: "top-right", autoClose: 2500 });
  };

  const handleClearAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("Cleared all items from your stack.", { position: "top-right", autoClose: 2500 });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <ToastContainer />
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <Hero />

        <section id="technologies" className="pt-6 pb-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Explore the <span className="brand-gradient-text">Technologies</span>
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <TechGrid
                technologies={technologies}
                stack={stack}
                onAdd={handleAddToStack}
                loading={loading}
              />
            </div>
            <div className="lg:col-span-4">
              <Sidebar
                stack={stack}
                onRemove={handleRemoveFromStack}
                onClearAll={handleClearAll}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}