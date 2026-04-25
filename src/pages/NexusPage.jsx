import { LINKS } from '../config';
import QRPage from '../components/QRPage';

const NexusPage = () => (
  <QRPage
    icon="⚡"
    title="NEXUS"
    description="Scan to access the Nexus platform and start collaborating."
    url={LINKS.nexus}
    accentColor="#ff6b35"
  />
);
export default NexusPage;
