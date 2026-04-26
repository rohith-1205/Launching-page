import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LaunchScreen from './pages/LaunchScreen';
import IICHubPage  from './pages/IICHubPage';
import GyanPage    from './pages/GyanPage';
import NewsletterPage from './pages/NewsletterPage';
import STFPage     from './pages/STFPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/"        element={<LaunchScreen />} />
      <Route path="/iic-hub" element={<IICHubPage />} />
      <Route path="/gyan"    element={<GyanPage />} />
      <Route path="/newsletter" element={<NewsletterPage />} />
      <Route path="/stf"   element={<STFPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
