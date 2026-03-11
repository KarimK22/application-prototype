import { useLocation, useNavigate } from 'react-router-dom';
import { FiHome, FiMap, FiPlusCircle, FiBarChart2, FiUsers } from 'react-icons/fi';
import styles from './BottomNav.module.css';

const tabs = [
  { path: '/', label: 'Home', icon: FiHome },
  { path: '/map', label: 'Map', icon: FiMap },
  { path: '/log', label: 'Log', icon: FiPlusCircle, center: true },
  { path: '/sdg', label: 'Dashboard', icon: FiBarChart2 },
  { path: '/community', label: 'Feed', icon: FiUsers },
];

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      {tabs.map(tab => {
        const Icon = tab.icon;
        const active = location.pathname === tab.path;
        return (
          <button
            key={tab.path}
            className={`${styles.tab} ${active ? styles.active : ''} ${tab.center ? styles.center : ''}`}
            onClick={() => navigate(tab.path)}
          >
            <Icon size={tab.center ? 28 : 22} />
            <span className={styles.label}>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
