import { FiLogOut, FiSettings } from 'react-icons/fi';
import { useOnboarding } from '../../context/OnboardingContext';
import styles from './Header.module.css';

export default function Header() {
  const { resetOnboarding } = useOnboarding();

  return (
    <header className={styles.header}>
      <button className={styles.logoutBtn} onClick={resetOnboarding}>
        <FiLogOut size={18} />
      </button>
      <div className={styles.brand}>
        <span className={styles.icon}>🌊</span>
        <span className={styles.title}>OceaniCare</span>
      </div>
      <button className={styles.settingsBtn}>
        <FiSettings size={20} />
      </button>
    </header>
  );
}
