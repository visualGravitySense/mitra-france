import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
import ProgramsWorkshops from './pages/ProgramsWorkshops.tsx';
import ProjectsExperience from './pages/ProjectsExperience.tsx';
import Partners from './pages/Partners.tsx';
import Events from './pages/Events.tsx';
import Gallery from './pages/Gallery.tsx';
import Contact from './pages/Contact.tsx';
import UXPrinciples from './pages/UXPrinciples.tsx';
import InterculturalEducation from './pages/InterculturalEducation.tsx';
import MediaArtsEducation from './pages/MediaArtsEducation.tsx';
import NotFound from './pages/NotFound.tsx';
function App() {
    // Get base path from environment or use default
    const basePath = import.meta.env.BASE_URL || '/';
    return (_jsxs(AppTheme, { children: [_jsx(CssBaseline, { enableColorScheme: true }), _jsxs(BrowserRouter, { basename: basePath, children: [_jsx(ScrollToTop, {}), _jsx(Navigation, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/focus-areas", element: _jsx(FocusAreas, {}) }), _jsx(Route, { path: "/projects", element: _jsx(ProjectsExperience, {}) }), _jsx(Route, { path: "/project-detail", element: _jsx(Navigate, { to: "/projects", replace: true }) }), _jsx(Route, { path: "/courses", element: _jsx(Navigate, { to: "/programs-workshops", replace: true }) }), _jsx(Route, { path: "/programs-workshops", element: _jsx(ProgramsWorkshops, {}) }), _jsx(Route, { path: "/team", element: _jsx(Navigate, { to: "/about", replace: true }) }), _jsx(Route, { path: "/partners", element: _jsx(Partners, {}) }), _jsx(Route, { path: "/events", element: _jsx(Events, {}) }), _jsx(Route, { path: "/gallery", element: _jsx(Gallery, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/ux-principles", element: _jsx(UXPrinciples, {}) }), _jsx(Route, { path: "/intercultural-education", element: _jsx(InterculturalEducation, {}) }), _jsx(Route, { path: "/media-arts-education", element: _jsx(MediaArtsEducation, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }), _jsx(Footer, {})] })] }));
}
export default App;
