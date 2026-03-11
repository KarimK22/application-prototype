import { sdg14, sdg9 } from '../../data/mockSDG';
import styles from './SDGDashboard.module.css';

function SDGSection({ data }) {
  return (
    <div className={styles.sdgSection}>
      <div className={styles.accentBar} style={{ background: data.color }} />
      <div className={styles.sdgHeader}>
        <span className={styles.sdgBadge} style={{ background: data.color }}>
          {data.title}
        </span>
        <span className={styles.sdgTitle}>{data.subtitle}</span>
      </div>
      <div className={styles.metricsGrid}>
        {data.metrics.map((metric, i) => {
          const isPercent = metric.value.includes('%');
          const percentVal = isPercent ? parseInt(metric.value) : null;

          return (
            <div key={i} className={styles.metricRow}>
              <div
                className={styles.metricIcon}
                style={{ background: `${data.color}18` }}
              >
                {metric.icon}
              </div>
              <div className={styles.metricInfo}>
                <div className={styles.metricValue} style={{ color: data.color }}>
                  {metric.value}
                </div>
                <div className={styles.metricLabel}>{metric.label}</div>
                {isPercent && (
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${percentVal}%`, background: data.color }}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function SDGDashboard() {
  return (
    <div className={styles.sdgPage}>
      <SDGSection data={sdg14} />
      <SDGSection data={sdg9} />
    </div>
  );
}
