import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import styles from './Auth.module.css';

export default function SignUp() {
  const [form, setForm] = useState({ fullName: '', whatsapp: '', email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!form.fullName || !form.email || !form.password) {
      setError('Please fill in all required fields');
      return;
    }
    const result = signup(form);
    if (result.success) {
      navigate('/');
    } else {
      setError(result.error);
    }
  };

  return (
    <div className={styles.authPage}>
      <div className={styles.heroSection}>
        <div className={styles.logoIcon}>🌊</div>
        <div className={styles.brandName}>OceaniCare</div>
        <div className={styles.tagline}>Help protect our seas. Fish sustainably.</div>
      </div>

      <form className={styles.formCard} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>Join OceaniCare!</h2>

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.inputGroup}>
          <FiUser className={styles.inputIcon} />
          <input
            className={styles.input}
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.phoneGroup}>
            <div className={styles.phonePrefix}>
              <span className={styles.flag}>🇲🇾</span>
              +60
            </div>
            <input
              className={styles.phoneInput}
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp Number"
              value={form.whatsapp}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <FiMail className={styles.inputIcon} />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <FiLock className={styles.inputIcon} />
          <input
            className={styles.input}
            type={showPass ? 'text' : 'password'}
            name="password"
            placeholder="Create Password"
            value={form.password}
            onChange={handleChange}
            style={{ paddingRight: 42 }}
          />
          <button
            type="button"
            className={styles.inputIcon}
            style={{ left: 'auto', right: 14, background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>

        <button type="submit" className={styles.submitBtn}>Sign Up</button>

        <p className={styles.termsText}>
          By signing up, you agree to our <a href="#">Terms & Privacy Policy</a>
        </p>

        <div className={styles.divider}>or Sign Up with</div>

        <div className={styles.socialBtns}>
          <button type="button" className={styles.socialBtn} onClick={() => alert('Google sign-up coming soon!')}>
            <span>G</span> Google
          </button>
          <button type="button" className={styles.socialBtn} onClick={() => alert('Facebook sign-up coming soon!')}>
            <span>f</span> Facebook
          </button>
        </div>

        <p className={styles.switchText}>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
}
