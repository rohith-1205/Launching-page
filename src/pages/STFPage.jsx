import { LINKS } from '../config';
import QRPage from '../components/QRPage';

const STFPage = () => (
  <QRPage
    icon="🛸"
    title="STUDENT FOCUS TRACK (STF)"
    description="Scan to explore STF — details of student project working domains."
    url={LINKS.stf}
    accentColor="#00ff88"
  />
);
export default STFPage;
