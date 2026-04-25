import { LINKS } from '../config';
import QRPage from '../components/QRPage';

const IICHubPage = () => (
  <QRPage
    icon="🚀"
    title="IIC HUB"
    description="Attendance and task management app. Scan the QR code to download and install."
    url={LINKS.iicHub}
    accentColor="#00f0ff"
  />
);
export default IICHubPage;
