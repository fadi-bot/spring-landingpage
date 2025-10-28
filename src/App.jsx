import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { supabase } from './supabaseClient';
import './App.css';

// AOS Imports
import Aos from 'aos'; // <-- YEH ADD KAREIN
import 'aos/dist/aos.css'; // <-- YEH ADD KAREIN

// Component & Page Imports
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Products from './components/Products';
import ProtectedRoute from './components/ProtectedRoute';
import AuthPage from './pages/AuthPage';

// Layout for pages with Header and Footer
function Layout({ children, session }) {
  return (
    <div className="App">
      <Header session={session} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

// The main landing page component
function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <ContactUs />
    </>
  );
}

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // <-- YEH ADD KAREIN: AOS initialization
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation ki speed (1 second)
      once: true,      // Animation sirf ek baar chalega
      offset: 100,     // 100px scroll karne par trigger hoga
    });
  }, []);

  return (
    <> {/* Use a fragment to wrap everything */}
      <Toaster // ... props
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
            fontSize: '16px',
          },
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout session={session}><HomePage /></Layout>} />
        <Route path="/auth" element={<Layout session={session}><AuthPage /></Layout>} />

        {/* Protected Route */}
        <Route
          path="/products"
          element={
            <Layout session={session}>
              <ProtectedRoute session={session}>
                <Products />
              </ProtectedRoute>
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;