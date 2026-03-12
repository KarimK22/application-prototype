import { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Circle, Tooltip, Popup } from 'react-leaflet';
import { FiFlag } from 'react-icons/fi';
import { mapZones, overfishedCenter, overfishedRadius } from '../../data/mockMapZones';
import 'leaflet/dist/leaflet.css';
import PageHint from '../../components/PageHint/PageHint';
import styles from './MapView.module.css';

const markerColors = {
  good: '#4CAF50',
  reef: '#2196F3',
  overfished: '#F44336',
};

export default function MapView() {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className={styles.mapPage}>
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={`${styles.legendDot} ${styles.good}`} />
          Good Spot
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.legendDot} ${styles.reef}`} />
          Coral Reef
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.legendDot} ${styles.overfished}`} />
          Overfished
        </div>
      </div>

      <div className={styles.mapWrapper}>
        <MapContainer
          center={[4.47, 118.59]}
          zoom={12}
          className={styles.leafletMap}
          zoomControl={false}
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Overfished zone overlay */}
          <Circle
            center={[overfishedCenter.lat, overfishedCenter.lng]}
            radius={overfishedRadius}
            pathOptions={{
              color: '#F44336',
              fillColor: '#F44336',
              fillOpacity: 0.15,
              weight: 2,
              dashArray: '8, 6',
            }}
          >
            <Popup>
              <strong style={{ color: '#F44336' }}>Overfished Area</strong>
              <br />Fishing restricted in this zone
            </Popup>
          </Circle>

          {/* Zone markers */}
          {mapZones.map(zone => (
            <CircleMarker
              key={zone.id}
              center={[zone.lat, zone.lng]}
              radius={10}
              pathOptions={{
                color: 'white',
                weight: 3,
                fillColor: markerColors[zone.type],
                fillOpacity: 1,
              }}
            >
              <Tooltip permanent direction="bottom" offset={[0, 10]} className={styles.customTooltip}>
                {zone.label}
              </Tooltip>
            </CircleMarker>
          ))}
        </MapContainer>

        <button
          className={styles.favoriteBtn}
          onClick={() => setFavorite(!favorite)}
        >
          {favorite ? '❤️' : '🤍'}
        </button>

        <button className={styles.reportBtn} onClick={() => alert('Report submitted!')}>
          <FiFlag size={16} />
          Report Change
        </button>
      </div>
      <PageHint pageKey="map">
        Green dots are good fishing spots. Red areas are overfished — avoid those!
      </PageHint>
    </div>
  );
}
