// src/App.js
import React from 'react';

// Header Component
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <div className="text-xl font-bold">Gymfluencer</div>
      <nav className="space-x-4">
        <a href="#features" className="hover:text-blue-500">Features</a>
        <a href="#pricing" className="hover:text-blue-500">Pricing</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </nav>
    </header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="text-center py-20 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Join the Gymfluencer Movement</h1>
      <p className="text-lg text-gray-600 mb-6">Achieve your fitness goals with the best community and tools.</p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
        Get Started
      </button>
    </section>
  );
};

// Features Component
const Features = () => {
  const features = [
    { title: 'Track Progress', description: 'Keep tabs on your fitness journey.', icon: '📈' },
    { title: 'Community Support', description: 'Stay motivated with like-minded individuals.', icon: '👥' },
    { title: 'Custom Workouts', description: 'Tailored plans for your goals.', icon: '💪' },
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-4 border rounded shadow">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="text-center py-4 bg-gray-800 text-white">
      <p>&copy; 2024 Gymfluencer. All rights reserved.</p>
    </footer>
  );
};

// App Component
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
