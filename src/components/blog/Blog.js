import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import MainContent from './components/MainContent';
import Latest from './components/Latest';
import Footer from './components/Footer';
export default function Blog(props) {
    return (_jsxs(AppTheme, { ...props, children: [_jsx(CssBaseline, { enableColorScheme: true }), _jsx(AppAppBar, {}), _jsxs(Container, { maxWidth: "lg", component: "main", sx: { display: 'flex', flexDirection: 'column', my: 16, gap: 4 }, children: [_jsx(MainContent, {}), _jsx(Latest, {})] }), _jsx(Footer, {})] }));
}
