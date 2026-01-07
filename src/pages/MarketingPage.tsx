import * as React from 'react';
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

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      <div>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}