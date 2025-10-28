import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import './AuthPage.css'; // We will create this new CSS file next
import GoogleAuthButton from '../components/GoogleAuthButton';

function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // State for forms
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Redirect logic
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Successfully logged in!');
      navigate(from, { replace: true });
    }
    setLoading(false);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({ email, password });
     if (error) {
      toast.error(error.message);
    } else if (data.user && data.user.identities.length === 0) {
      toast.error("User with this email already exists.");
    } else {
      toast.success('Success! Please check your email to verify your account.');
      setIsSignUp(false); // Switch to the sign-in panel
    }
    setLoading(false);
  };

  return (
    <div className="auth-page-wrapper">
      <div className={`auth-container ${isSignUp ? "right-panel-active" : ""}`} id="container">
        {/* Sign Up Form */}
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            <GoogleAuthButton />
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" required minLength="6" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" disabled={loading}>{loading ? '...' : 'Sign Up'}</button>
          </form>
        </div>
        {/* Sign In Form */}
        <div className="form-container sign-in-container">
          <form onSubmit={handleLogin}>
            <h1>Sign In</h1>
            <GoogleAuthButton />
            <span>or use your account</span>
            <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
            <a href="#">Forgot your password?</a>
            <button type="submit" disabled={loading}>{loading ? '...' : 'Sign In'}</button>
          </form>
        </div>
        {/* Overlay Panels */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={() => setIsSignUp(false)}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="ghost" onClick={() => setIsSignUp(true)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;