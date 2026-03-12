import { useState } from 'react';
import { useOnboarding } from '../../context/OnboardingContext';
import styles from './OnboardingModal.module.css';

const slides = [
  {
    emoji: '\u{1F30A}',
    title: 'Welcome to OceaniCare',
    desc: 'Your companion for sustainable fishing. Let us show you around!',
  },
  {
    emoji: '\u{1F5FA}\uFE0F',
    title: 'Find Fishing Spots',
    desc: 'See safe zones, coral reefs, and overfished areas on the map.',
  },
  {
    emoji: '\u{1F41F}',
    title: 'Log Your Catch',
    desc: 'Record what you catch to help track ocean sustainability.',
  },
  {
    emoji: '\u{1F91D}',
    title: 'Join the Community',
    desc: 'Share alerts, tips, and support fellow fishers.',
  },
];

export default function OnboardingModal() {
  const { completeOnboarding } = useOnboarding();
  const [current, setCurrent] = useState(0);

  const isLast = current === slides.length - 1;

  const next = () => {
    if (isLast) {
      completeOnboarding();
    } else {
      setCurrent((i) => i + 1);
    }
  };

  return (
    <div className={styles.overlay}>
      <button className={styles.skip} onClick={completeOnboarding}>
        Skip
      </button>

      <div className={styles.slideArea}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className={styles.slide} key={i}>
              <span className={styles.emoji}>{slide.emoji}</span>
              <h2 className={styles.title}>{slide.title}</h2>
              <p className={styles.desc}>{slide.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
          />
        ))}
      </div>

      <button className={styles.nextBtn} onClick={next}>
        {isLast ? 'Get Started!' : 'Next'}
      </button>
    </div>
  );
}
