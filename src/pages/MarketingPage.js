import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../components/shared-theme/AppTheme.tsx';
import AppAppBar from '../components/marketing-page/components/AppAppBar.tsx';
import Hero from '../components/marketing-page/components/Hero.tsx';
import LogoCollection from '../components/marketing-page/components/LogoCollection.tsx';
import Highlights from '../components/marketing-page/components/Highlights.tsx';
import Pricing from '../components/marketing-page/components/Pricing.tsx';
import Features from '../components/marketing-page/components/Features.tsx';
import Testimonials from '../components/marketing-page/components/Testimonials.tsx';
import FAQ from '../components/marketing-page/components/FAQ.tsx';
import Footer from '../components/marketing-page/components/Footer.tsx';
export default function MarketingPage(props) {
    return (_jsxs(AppTheme, { ...props, children: [_jsx(CssBaseline, { enableColorScheme: true }), _jsx(AppAppBar, {}), _jsx(Hero, {}), _jsxs("div", { children: [_jsx(LogoCollection, {}), _jsx(Features, {}), _jsx(Divider, {}), _jsx(Testimonials, {}), _jsx(Divider, {}), _jsx(Highlights, {}), _jsx(Divider, {}), _jsx(Pricing, {}), _jsx(Divider, {}), _jsx(FAQ, {}), _jsx(Divider, {}), _jsx(Footer, {})] })] }));
}
