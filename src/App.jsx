// File: src/App.jsx

import './App.css';
import Header from './components/Header'; // Step 1: Apne naye Header component ko import karein
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header /> {/* Step 2: Yahan component ko use karein */}
      <Hero />
      <AboutUs />
      <ContactUs />
      {/* Baaki page ka content yahan neeche ayega */}
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to the Main Content Area</h1>
        <p>Your hero section, products, and other information will go here.</p>
      </main>
      <Footer />
    </div>
  );
} 

export default App;