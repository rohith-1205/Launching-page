import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import StarField from '../components/StarField';
import LaunchCard from '../components/LaunchCard';
import Logos from '../components/Logos';

const CARDS = [
  {
    icon: '🚀', title: 'IIC HUB', tagline: 'Attendance and task management app',
    badgeText: 'MOBILE APP', badgeColor: '#00f0ff', accentColor: '#00f0ff', route: '/iic-hub',
  },
  {
    icon: '🌐', title: 'GYAN', tagline: 'Knowledge at your fingertips',
    badgeText: 'WEBSITE', badgeColor: '#7b2fff', accentColor: '#7b2fff', route: '/gyan',
  },
  {
    icon: '📰', title: 'IIC NEWSLETTER', tagline: 'Latest updates and news',
    badgeText: 'PUBLICATION', badgeColor: '#ff6b35', accentColor: '#ff6b35', route: '/newsletter',
  },
  {
    icon: '🛸', title: 'STF', tagline: 'Student project working domains',
    badgeText: 'TRACK', badgeColor: '#00ff88', accentColor: '#00ff88', route: '/stf',
  },
];

const LaunchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const skipLaunch = location.state?.skipLaunch;

  const [launched, setLaunched]     = useState(skipLaunch || false);
  const [showGrid, setShowGrid]     = useState(skipLaunch || false);
  const [curtainDone, setCurtainDone] = useState(skipLaunch || false);
  const [launchingCard, setLaunchingCard] = useState(null);

  const handleLaunch = () => {
    setLaunched(true);
    setTimeout(() => {
      setCurtainDone(true);
      setTimeout(() => setShowGrid(true), 100);
    }, 850);
  };

  const handleCardClick = (card) => {
    setLaunchingCard(card);
    setTimeout(() => {
      navigate(card.route);
    }, 1800);
  };

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <StarField />
      <Logos />

      {/* CURTAIN PANELS — hidden after animation completes */}
      {!curtainDone && (
        <>
          <div className={`curtain-left  ${launched ? 'open' : ''}`} />
          <div className={`curtain-right ${launched ? 'open' : ''}`} />
        </>
      )}

      {/* PRE-LAUNCH CENTER */}
      {!showGrid && (
        <div className="launch-center">
          <div className="launch-title">IIC</div>
          <div className="launch-subtitle">Institution's Innovation Council</div>
          <div className="launch-subtitle-small">Amrita Vishwa Vidyapeetham</div>
          <button className="btn-launch-now" onClick={handleLaunch}>
            LAUNCH NOW
          </button>
        </div>
      )}

      {/* HUB GRID — shown after curtain opens */}
      {showGrid && (
        <div className="hub-section">
          <div className="hub-title">Select Your Destination</div>
          <div className="hub-grid">
            {CARDS.map((card, i) => (
              <LaunchCard
                key={card.title}
                {...card}
                delay={`${i * 150}ms`}
                onClick={() => handleCardClick(card)}
              />
            ))}
          </div>
        </div>
      )}

      {/* LAUNCH SUCCESS OVERLAY */}
      {launchingCard && (
        <div className="launch-success-overlay" style={{ '--accent': launchingCard.accentColor }}>
          <div className="success-icon">{launchingCard.icon}</div>
          <div className="success-text">LAUNCH SUCCESSFUL</div>
          <div className="success-subtext">Routing to {launchingCard.title}...</div>
        </div>
      )}
    </div>
  );
};

export default LaunchScreen;
