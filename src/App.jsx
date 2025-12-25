import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css';

// AOS Imports
import Aos from 'aos';
import 'aos/dist/aos.css';

// Component & Page Imports
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
// import ContactUs from './components/ContactUs'; // <-- REMOVED
import Products from './components/Products';
import Team from './components/Team';

// Layout for pages with Header and Footer
function Layout({ children }) {
  return (
    <div className="App">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

// Scroll to hash targets like #about or #footer-contact when the URL changes
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // On any route change without a hash (e.g. /products), scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

// The main landing page component
function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Team />
      {/* <ContactUs /> */} {/* <-- REMOVED */}
    </>
  );
}

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <ScrollToHash />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />

        {/* Products route is now public */}
        <Route
          path="/products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;