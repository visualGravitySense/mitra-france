import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './components/shared-theme/AppTheme.tsx';
import Navigation from './components/Navigation.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import FocusAreas from './pages/FocusAreas.tsx';
import Projects from './pages/Projects.tsx';
import Team from './pages/Team.tsx';
import Partners from './pages/Partners.tsx';
import Events from './pages/Events.tsx';
import Gallery from './pages/Gallery.tsx';
import Contact from './pages/Contact.tsx';

function App() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/focus-areas" element={<FocusAreas />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppTheme>
  );
}

export default App;
