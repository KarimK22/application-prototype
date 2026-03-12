import { useNavigate } from 'react-router-dom';
import { FiAnchor, FiCrosshair, FiChevronRight } from 'react-icons/fi';
import { weatherData } from '../../data/mockWeather';
import { weeklyStats } from '../../data/mockCatches';
import OceanScene from '../../components/OceanScene';
import PageHint from '../../components/PageHint/PageHint';
import styles from './Home.module.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <div className={styles.sceneWrapper}>
        <OceanScene variant="home" />
      </div>

      <div className={styles.weatherCard}>
        <div className={styles.weatherTop}>
          <div className={styles.tempSection}>
            <span className={styles.weatherIcon}>⛅</span>
            <div>
              <div className={styles.temp}>
                {weatherData.temperature}<span className={styles.tempDeg}>°</span>
              </div>
              <div className={styles.condition}>{weatherData.condition}</div>
              <div className={styles.location}>{weatherData.location}</div>
            </div>
          </div>
        </div>
        <div className={styles.weatherDetails}>
          <div className={styles.weatherDetail}>
            <span className={styles.detailIcon}>🌊</span>
            <span>High Tide {weatherData.highTide}</span>
          </div>
          <div className={styles.weatherDetail}>
            <span className={styles.detailIcon}>💨</span>
            <span>{weatherData.windWarning}</span>
            <span className={styles.warningBadge}>⚠</span>
          </div>
        </div>
      </div>

      <div className={styles.actionBtns}>
        <button className={`${styles.actionBtn} ${styles.startTrip}`} onClick={() => navigate('/map')}>
          <div className={styles.actionIconWrap}>
            <FiAnchor size={22} />
          </div>
          Start Fishing Trip
        </button>
        <button className={`${styles.actionBtn} ${styles.logCatch}`} onClick={() => navigate('/log')}>
          <div className={styles.actionIconWrap}>
            <FiCrosshair size={22} />
          </div>
          Log Catch
        </button>
      </div>

      <div className={styles.statsCard}>
        <div className={styles.statsAccent} />
        <div className={styles.statsContent}>
          <div className={styles.statsLabel}>This week</div>
          <div className={styles.statsValue}>
            {weeklyStats.totalWeight} kg &nbsp;|&nbsp; {weeklyStats.currency} {weeklyStats.totalValue}
          </div>
        </div>
        <FiChevronRight className={styles.arrow} />
      </div>

      <div className={styles.ecoCard}>
        <div className={styles.ecoAccent} />
        <div className={styles.ecoContent}>
          <div className={styles.ecoLabel}>Eco Status:</div>
          <div className={styles.ecoBadge}>
            <span className={styles.ecoIcon}>⚠️</span> {weeklyStats.ecoStatus}
          </div>
        </div>
        <FiChevronRight className={styles.arrow} />
      </div>
      <PageHint pageKey="home">
        Check today's weather before heading out. Tap a button below to start!
      </PageHint>
    </div>
  );
}
