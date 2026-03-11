import { FiSettings } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import styles from './Header.module.css';

export default function Header() {
  const { logout } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.spacer} />
      <div className={styles.brand}>
        <span className={styles.icon}>🌊</span>
        <span className={styles.title}>LautSea</span>
      </div>
      <button className={styles.settingsBtn} onClick={logout}>
        <FiSettings size={20} />
      </button>
    </header>
  );
}
