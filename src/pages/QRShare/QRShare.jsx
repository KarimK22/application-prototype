import { QRCodeSVG } from 'qrcode.react';
import styles from './QRShare.module.css';

const PRODUCTION_URL = 'https://application-prototype-khaki.vercel.app';

export default function QRShare() {
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const appUrl = isLocal ? PRODUCTION_URL : window.location.origin;

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.logo}>🌊</div>
        <h1 className={styles.title}>OceaniCare</h1>
        <p className={styles.subtitle}>Scan to open the app on your phone</p>

        <div className={styles.qrWrapper}>
          <QRCodeSVG
            value={appUrl}
            size={220}
            bgColor="#ffffff"
            fgColor="#0A3D62"
            level="H"
            includeMargin={false}
          />
        </div>

        <p className={styles.url}>{appUrl}</p>
        <p className={styles.note}>
          Scan with your phone camera to open OceaniCare
        </p>
      </div>
    </div>
  );
}
