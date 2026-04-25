import { LINKS } from '../config';
import QRPage from '../components/QRPage';

const IICHubPage = () => (
  <QRPage
    icon="🚀"
    title="IIC HUB"
    description="Scan to download the IIC Hub mobile app from Google Drive and install it on your device."
    url={LINKS.iicHub}
    accentColor="#00f0ff"
  />
);
export default IICHubPage;
