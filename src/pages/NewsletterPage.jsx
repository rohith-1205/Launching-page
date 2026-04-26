import { LINKS } from '../config';
import QRPage from '../components/QRPage';

const NewsletterPage = () => (
  <QRPage
    icon="📰"
    title="IIC NEWSLETTER"
    description="Scan to read the latest updates from the IIC newsletter."
    url={LINKS.newsletter}
    accentColor="#ff6b35"
  />
);
export default NewsletterPage;
