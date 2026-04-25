import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LaunchScreen from './pages/LaunchScreen';
import IICHubPage  from './pages/IICHubPage';
import GyanPage    from './pages/GyanPage';
import NexusPage   from './pages/NexusPage';
import OrbitPage   from './pages/OrbitPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/"        element={<LaunchScreen />} />
      <Route path="/iic-hub" element={<IICHubPage />} />
      <Route path="/gyan"    element={<GyanPage />} />
      <Route path="/nexus"   element={<NexusPage />} />
      <Route path="/orbit"   element={<OrbitPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
