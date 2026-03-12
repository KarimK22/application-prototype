import { Outlet } from 'react-router-dom';
import { useOnboarding } from '../context/OnboardingContext';
import Header from './Header/Header';
import BottomNav from './BottomNav/BottomNav';
import OnboardingModal from './Onboarding/OnboardingModal';

export default function AppShell() {
  const { hasCompletedOnboarding } = useOnboarding();

  return (
    <div className="app-shell">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <BottomNav />
      {!hasCompletedOnboarding && <OnboardingModal />}
    </div>
  );
}
