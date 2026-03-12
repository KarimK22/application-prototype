import { createContext, useState, useContext, useCallback } from 'react';

const OnboardingContext = createContext(null);

const ONBOARDING_KEY = 'oceanicare_onboarding_done';
const HINTS_KEY = 'oceanicare_hints_seen';

function getHintsSeen() {
  try {
    return JSON.parse(localStorage.getItem(HINTS_KEY)) || {};
  } catch {
    return {};
  }
}

export function OnboardingProvider({ children }) {
  const [hasCompletedOnboarding, setCompleted] = useState(
    () => localStorage.getItem(ONBOARDING_KEY) === 'true'
  );
  const [hintsSeen, setHintsSeen] = useState(getHintsSeen);

  const completeOnboarding = useCallback(() => {
    localStorage.setItem(ONBOARDING_KEY, 'true');
    setCompleted(true);
  }, []);

  const hasSeenHint = useCallback(
    (pageKey) => !!hintsSeen[pageKey],
    [hintsSeen]
  );

  const dismissHint = useCallback((pageKey) => {
    setHintsSeen((prev) => {
      const next = { ...prev, [pageKey]: true };
      localStorage.setItem(HINTS_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const resetOnboarding = useCallback(() => {
    localStorage.removeItem(ONBOARDING_KEY);
    localStorage.removeItem(HINTS_KEY);
    setCompleted(false);
    setHintsSeen({});
  }, []);

  return (
    <OnboardingContext.Provider
      value={{ hasCompletedOnboarding, completeOnboarding, hasSeenHint, dismissHint, resetOnboarding }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error('useOnboarding must be used within OnboardingProvider');
  return ctx;
}
