import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./AuthForm.css";

export default function AuthForm() {
  const [isCreating, setIsCreating] = useState(false);
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      setIsAuthenticated(true);
      navigate('/dashboard');
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>{isCreating ? 'Create Account' : 'Log in to Cash Trail'}</h2>

          {isCreating && (
            <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
          )}
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />

          <button type="submit" className="btn-black">{isCreating ? 'Create Account' : 'Login'}</button>
           <button
            type="button"
            className="btn-google"
            onClick={() => {
              
              window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email profile";
            }}
          >
            Login with Google
          </button>

          <p onClick={() => setIsCreating(!isCreating)} className="toggle-form">
            {isCreating ? 'Already have an account? Login' : 'New user? Create account'}
          </p>
        </form>
      </div>
    </div>
  );
}