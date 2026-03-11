import { QRCodeSVG } from 'qrcode.react';
import styles from './QRShare.module.css';

export default function QRShare() {
  const appUrl = window.location.origin + '/signup';

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.logo}>🌊</div>
        <h1 className={styles.title}>LautSea</h1>
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
          Make sure your phone is on the same WiFi network
        </p>
      </div>
    </div>
  );
}
