import { LINKS } from '../config';
import QRPage from '../components/QRPage';

const OrbitPage = () => (
  <QRPage
    icon="🛸"
    title="ORBIT"
    description="Scan to launch Orbit — tools engineered for the future."
    url={LINKS.orbit}
    accentColor="#00ff88"
  />
);
export default OrbitPage;
