import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
export default function MarketingPage(props) {
    return (_jsxs(AppTheme, { ...props, children: [_jsx(CssBaseline, { enableColorScheme: true }), _jsx(AppAppBar, {}), _jsx(Hero, {}), _jsxs("div", { children: [_jsx(LogoCollection, {}), _jsx(Features, {}), _jsx(Divider, {}), _jsx(Testimonials, {}), _jsx(Divider, {}), _jsx(Highlights, {}), _jsx(Divider, {}), _jsx(Pricing, {}), _jsx(Divider, {}), _jsx(FAQ, {}), _jsx(Divider, {}), _jsx(Footer, {})] })] }));
}
