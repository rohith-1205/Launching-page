import { LINKS } from '../config';
import QRPage from '../components/QRPage';

const GyanPage = () => (
  <QRPage
    icon="🌐"
    title="GYAN"
    description="Scan to open the Gyan website — your gateway to knowledge and learning."
    url={LINKS.gyan}
    accentColor="#7b2fff"
  />
);
export default GyanPage;
