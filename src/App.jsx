import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // <-- Import Toaster
import { supabase } from './supabaseClient';
import './App.css';

// Component & Page Imports
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Products from './components/Products';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
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

  return (
    <> {/* Use a fragment to wrap everything */}
      <Toaster // <-- Add the Toaster component here
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