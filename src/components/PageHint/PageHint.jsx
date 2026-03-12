import { useOnboarding } from '../../context/OnboardingContext';
import styles from './PageHint.module.css';

export default function PageHint({ pageKey, children }) {
  const { hasSeenHint, dismissHint } = useOnboarding();

  if (hasSeenHint(pageKey)) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.bubble}>
        <div className={styles.pulse} />
        <p className={styles.text}>{children}</p>
        <button className={styles.dismiss} onClick={() => dismissHint(pageKey)}>
          Got it!
        </button>
      </div>
    </div>
  );
}
