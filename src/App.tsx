import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './components/shared-theme/AppTheme.tsx';
import Navigation from './components/Navigation.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import FocusAreas from './pages/FocusAreas.tsx';
import Projects from './pages/Projects.tsx';
import ProjectDetail from './pages/ProjectDetail.tsx';
import Courses from './pages/Courses.tsx';
import ProgramsWorkshops from './pages/ProgramsWorkshops.tsx';
import Team from './pages/Team.tsx';
import Partners from './pages/Partners.tsx';
import Events from './pages/Events.tsx';
import Gallery from './pages/Gallery.tsx';
import Contact from './pages/Contact.tsx';
import UXPrinciples from './pages/UXPrinciples.tsx';
import InterculturalEducation from './pages/InterculturalEducation.tsx';
import MediaArtsEducation from './pages/MediaArtsEducation.tsx';
import NotFound from './pages/NotFound.tsx';

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
          <Route path="/project-detail" element={<ProjectDetail />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/programs-workshops" element={<ProgramsWorkshops />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ux-principles" element={<UXPrinciples />} />
          <Route path="/intercultural-education" element={<InterculturalEducation />} />
          <Route path="/media-arts-education" element={<MediaArtsEducation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppTheme>
  );
}

export default App;
