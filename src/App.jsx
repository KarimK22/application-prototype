import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { OnboardingProvider } from './context/OnboardingContext';
import AppShell from './components/AppShell';
import Home from './pages/Home/Home';
import MapView from './pages/Map/MapView';
import LogCatch from './pages/LogCatch/LogCatch';
import SDGDashboard from './pages/SDGDashboard/SDGDashboard';
import Community from './pages/Community/Community';
import QRShare from './pages/QRShare/QRShare';
import './App.css';

export default function App() {
  return (
    <OnboardingProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/qr" element={<QRShare />} />
        <Route element={<AppShell />}>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/log" element={<LogCatch />} />
          <Route path="/sdg" element={<SDGDashboard />} />
          <Route path="/community" element={<Community />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </OnboardingProvider>
  );
}
