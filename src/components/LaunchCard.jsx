const LaunchCard = ({ icon, title, tagline, badgeText, badgeColor, accentColor, delay, onClick }) => {
  return (
    <div
      className="launch-card"
      style={{ animationDelay: delay }}
      onClick={onClick}
    >
      <div className="card-icon">{icon}</div>
      <div className="card-title">{title}</div>
      <div className="card-tag">{tagline}</div>
      <span
        className="card-badge"
        style={{ color: accentColor || 'var(--cyan)', borderColor: accentColor || 'var(--cyan)' }}
      >
        {badgeText}
      </span>
      <button
        className="btn-card-launch"
        style={{ borderColor: accentColor || 'var(--cyan)', color: accentColor || 'var(--cyan)' }}
        onClick={e => { e.stopPropagation(); onClick(); }}
      >
        LAUNCH →
      </button>
    </div>
  );
};

export default LaunchCard;
