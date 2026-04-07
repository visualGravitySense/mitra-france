import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './components/shared-theme/AppTheme.tsx';
import Navigation from './components/Navigation.tsx';
import Footer from './components/Footer.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import FocusAreas from './pages/FocusAreas.tsx';
// import Projects from './pages/Projects.tsx'; // restore route below when catalogue is public again
// import Courses from './pages/Courses.tsx'; // restore `<Route path="/courses" element={<Courses />} />` when ready
// import ProgramsWorkshops from './pages/ProgramsWorkshops.tsx'; // restore `<Route path="/programs-workshops" element={<ProgramsWorkshops />} />` when public again
import ProjectsExperience from './pages/ProjectsExperience.tsx';
import Team from './pages/Team.tsx';
import Partners from './pages/Partners.tsx';
// import Events from './pages/Events.tsx'; // restore `<Route path="/events" element={<Events />} />` when the page is public again
import Gallery from './pages/Gallery.tsx';
import Contact from './pages/Contact.tsx';
import UXPrinciples from './pages/UXPrinciples.tsx';
// import InterculturalEducation from './pages/InterculturalEducation.tsx'; // restore `<Route path="/intercultural-education" element={<InterculturalEducation />} />` when public again
import MediaArtsEducation from './pages/MediaArtsEducation.tsx';
import NotFound from './pages/NotFound.tsx';

function App() {
  // Get base path from environment or use default
  const basePath = import.meta.env.BASE_URL || '/';
  
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <BrowserRouter basename={basePath}>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/focus-areas" element={<FocusAreas />} />
          <Route path="/projects" element={<ProjectsExperience />} />
          <Route path="/project-detail" element={<Navigate to="/projects" replace />} />
          <Route path="/courses" element={<Navigate to="/focus-areas" replace />} />
          <Route path="/programs-workshops" element={<Navigate to="/focus-areas" replace />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/events" element={<Navigate to="/focus-areas" replace />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ux-principles" element={<UXPrinciples />} />
          <Route
            path="/intercultural-education"
            element={<Navigate to={{ pathname: '/focus-areas', hash: '#intercultural' }} replace />}
          />
          <Route path="/media-arts-education" element={<MediaArtsEducation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppTheme>
  );
}

export default App;
