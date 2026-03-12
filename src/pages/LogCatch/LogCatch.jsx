import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { speciesList } from '../../data/mockCatches';
import PageHint from '../../components/PageHint/PageHint';
import styles from './LogCatch.module.css';

const statusLabels = {
  overfished: 'Overfished Species!',
  moderate: 'Moderate - Fish Responsibly',
  sustainable: 'Sustainable Species',
};

const statusIcons = {
  overfished: '⚠️',
  moderate: '🔶',
  sustainable: '✅',
};

export default function LogCatch() {
  const navigate = useNavigate();
  const [selectedSpecies, setSelectedSpecies] = useState(speciesList[0]);
  const [quantity, setQuantity] = useState(15);
  const [weight, setWeight] = useState('20');

  const handleSave = () => {
    alert(`Catch saved!\n${selectedSpecies.name}: ${quantity} fish, ${weight} kg`);
    navigate('/');
  };

  return (
    <div className={styles.logPage}>
      <div className={styles.fishCard}>
        <span className={styles.fishImage}>{selectedSpecies.image}</span>
        <select
          className={styles.speciesSelect}
          value={selectedSpecies.name}
          onChange={(e) => {
            const sp = speciesList.find(s => s.name === e.target.value);
            setSelectedSpecies(sp);
          }}
        >
          {speciesList.map(sp => (
            <option key={sp.name} value={sp.name}>{sp.name}</option>
          ))}
        </select>
      </div>

      <div className={styles.formGroup}>
        <span className={styles.formLabel}>Quantity:</span>
        <div className={styles.quantityControl}>
          <button
            className={styles.quantityBtn}
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            −
          </button>
          <input
            className={styles.quantityValue}
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          />
          <button
            className={styles.quantityBtn}
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>

      <div className={styles.formGroup}>
        <span className={styles.formLabel}>Weight:</span>
        <select
          className={styles.weightSelect}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        >
          {[5, 10, 15, 20, 25, 30, 40, 50].map(w => (
            <option key={w} value={w}>{w} kg</option>
          ))}
        </select>
      </div>

      <div className={`${styles.statusWarning} ${styles[selectedSpecies.status]}`}>
        <span className={styles.warningIcon}>{statusIcons[selectedSpecies.status]}</span>
        <span className={`${styles.warningText} ${styles[selectedSpecies.status]}`}>
          {statusLabels[selectedSpecies.status]}
        </span>
      </div>

      <button className={styles.saveBtn} onClick={handleSave}>
        Save Catch
      </button>
      <PageHint pageKey="log">
        Pick your fish, enter the amount, and tap Save. Easy!
      </PageHint>
    </div>
  );
}
