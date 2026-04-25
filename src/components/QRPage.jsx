import { QRCodeSVG } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import StarField from './StarField';
import Logos from './Logos';

const QRPage = ({ icon, title, description, url, accentColor }) => {
  const navigate = useNavigate();
  return (
    <div style={{ background: 'var(--bg)', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <StarField />
      <Logos />
      <div className="qr-page">
        <div className="qr-icon">{icon}</div>
        <div className="qr-title" style={{ textShadow: `0 0 30px ${accentColor}` }}>
          {title}
        </div>
        <div className="qr-desc">{description}</div>
        <div className="qr-box" style={{ boxShadow: `0 0 40px ${accentColor}88, 0 0 80px ${accentColor}22` }}>
          <QRCodeSVG value={url || 'https://example.com'} size={200} />
        </div>
        <div className="qr-instruction">📱 Scan with your phone camera</div>
        <div className="qr-link"><a href={url} target="_blank" rel="noreferrer">{url}</a></div>
        <button className="btn-back" onClick={() => navigate('/', { state: { skipLaunch: true } })}>← BACK TO HUB</button>
      </div>
    </div>
  );
};

export default QRPage;
