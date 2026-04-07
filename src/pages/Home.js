import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link as RouterLink } from 'react-router-dom';
import ParticleCTAButton from '../components/ParticleCTAButton';
import { getImagePath } from '../utils/imagePath';
import { getMitraLogoSrc, mitraLogoThemeFilter } from '../utils/mitraLogo';
import SchoolIcon from '@mui/icons-material/School';
import PaletteIcon from '@mui/icons-material/Palette';
import ComputerIcon from '@mui/icons-material/Computer';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GroupIcon from '@mui/icons-material/Group';
import PublicIcon from '@mui/icons-material/Public';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HandshakeIcon from '@mui/icons-material/Handshake';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
const focusAreas = [
    {
        icon: _jsx(SchoolIcon, { sx: { fontSize: 40, color: 'primary.main' } }),
        title: 'Intercultural Education',
        description: 'Inclusive education, cultural diversity, and social integration.',
        path: '/intercultural-education',
    },
    {
        icon: _jsx(PaletteIcon, { sx: { fontSize: 40, color: 'primary.main' } }),
        title: 'Media & Arts',
        description: 'Media literacy, arts education, and creative technologies.',
        path: '/media-arts-education',
    },
    {
        icon: _jsx(ComputerIcon, { sx: { fontSize: 40, color: 'primary.main' } }),
        title: 'Digital Literacy',
        description: 'Digital skills for seniors, youth, migrants, and minorities.',
        path: '/focus-areas#digital',
    },
    {
        icon: _jsx(VolunteerActivismIcon, { sx: { fontSize: 40, color: 'primary.main' } }),
        title: 'Volunteering',
        description: 'Community participation and active citizenship.',
        path: '/focus-areas#volunteering',
    },
    {
        icon: _jsx(MenuBookIcon, { sx: { fontSize: 40, color: 'primary.main' } }),
        title: 'Adult Education',
        description: 'Lifelong learning for personal and professional growth.',
        path: '/programs-workshops',
    },
];
const impactStats = [
    { value: '20+', label: 'European projects', icon: _jsx(EmojiEventsIcon, { fontSize: "small" }) },
    { value: '10+', label: 'Years of action', icon: _jsx(PublicIcon, { fontSize: "small" }) },
    { value: '1000+', label: 'People reached', icon: _jsx(GroupIcon, { fontSize: "small" }) },
];
const featuredActivities = [
    {
        kind: 'project',
        title: 'Media literacy in adult education',
        description: 'Innovative teaching methods for adult learners across Europe.',
        meta: 'Erasmus+ KA2 · 2016–2018',
        link: '/programs-workshops',
    },
    {
        kind: 'project',
        title: 'Digital Senior Citizen',
        description: 'Essential digital skills for everyday life for older adults.',
        meta: 'Erasmus+ KA2 · 2018–2020',
        link: '/programs-workshops',
    },
    {
        kind: 'project',
        title: 'Cultural Heritage for Youth',
        description: 'Heritage engagement through media, arts, and community.',
        meta: 'Erasmus+ KA2 · 2020–2022',
        link: '/programs-workshops',
    },
    {
        kind: 'event',
        title: 'Digital Skills for Seniors',
        description: 'Workshop: smartphones, safe browsing, and useful apps.',
        meta: 'Nice · Feb 15, 2024',
        link: '/events',
    },
    {
        kind: 'event',
        title: 'Media Literacy Workshop',
        description: 'Critical thinking and reliable sources in the media landscape.',
        meta: 'Nice · Feb 20, 2024',
        link: '/events',
    },
    {
        kind: 'event',
        title: 'Creative Writing for Youth',
        description: 'Storytelling and creative expression for young people.',
        meta: 'Nice · Jan 28, 2024',
        link: '/events',
    },
];
const partnerNames = [
    'Université Côte d’Azur',
    'Le 109 · Pôle de cultures contemporaines',
    'Le HUBLOT · SCREB · Lycée Pasteur',
    'La Médiathèque Louis Nucéra',
    'Espace Associations Nice',
];
function ActivityTabPanel({ value, index, children, }) {
    if (value !== index)
        return null;
    return _jsx(Box, { sx: { pt: 3 }, children: children });
}
export default function Home() {
    const theme = useTheme();
    const [activityTab, setActivityTab] = useState(0);
    const filterActivities = (tab) => {
        if (tab === 0)
            return featuredActivities;
        if (tab === 1)
            return featuredActivities.filter((a) => a.kind === 'project');
        return featuredActivities.filter((a) => a.kind === 'event');
    };
    return (_jsxs(Box, { component: "main", children: [_jsx(Box, { id: "hero", sx: (theme) => ({
                    width: '100%',
                    position: 'relative',
                    backgroundImage: [
                        'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 35, 149, 0.12), transparent)',
                        'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(237, 41, 57, 0.08), transparent)',
                        'linear-gradient(180deg, rgba(248, 249, 250, 0) 0%, rgba(248, 249, 250, 1) 100%)',
                    ].join(', '),
                    backgroundColor: '#f8f9fa',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.03) 0%, rgba(237, 41, 57, 0.03) 100%)',
                        pointerEvents: 'none',
                    },
                    ...theme.applyStyles('dark', {
                        backgroundColor: '#1a1a1a',
                        backgroundImage: [
                            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 35, 149, 0.25), transparent)',
                            'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(237, 41, 57, 0.15), transparent)',
                        ].join(', '),
                    }),
                }), children: _jsx(Container, { sx: { pt: { xs: 14, sm: 18 }, pb: { xs: 6, sm: 10 } }, children: _jsxs(Grid, { container: true, spacing: 4, alignItems: "center", children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Stack, { spacing: 2, useFlexGap: true, sx: { alignItems: { xs: 'center', md: 'flex-start' } }, children: [_jsx(Box, { component: "img", src: getMitraLogoSrc(), alt: "MITRA FRANCE", sx: {
                                                display: 'block',
                                                flexShrink: 0,
                                                width: 'auto',
                                                height: 'auto',
                                                maxWidth: '100%',
                                                maxHeight: { xs: 48, sm: 56, md: 64 },
                                                objectFit: 'contain',
                                                objectPosition: { xs: 'center', md: 'left' },
                                                alignSelf: { xs: 'center', md: 'flex-start' },
                                                ...mitraLogoThemeFilter(theme),
                                            } }), _jsx(Typography, { variant: "h5", sx: {
                                                textAlign: { xs: 'center', md: 'left' },
                                                color: 'text.secondary',
                                                fontWeight: 400,
                                                fontSize: { xs: '1.1rem', md: '1.25rem' },
                                            }, children: "Empowering communities through education, media & culture" }), _jsx(Typography, { sx: {
                                                textAlign: { xs: 'center', md: 'left' },
                                                color: 'text.secondary',
                                                maxWidth: 560,
                                                lineHeight: 1.75,
                                            }, children: "Non-profit in Nice \u2014 intercultural education, media literacy, digital inclusion, and cultural activities with seniors, youth, migrants, and minorities across Europe." }), _jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 2, sx: { pt: 1, width: '100%', justifyContent: { xs: 'center', md: 'flex-start' } }, children: [_jsx(Button, { component: RouterLink, to: "/contact", variant: "contained", size: "large", endIcon: _jsx(ArrowForwardIcon, {}), sx: { px: 4, py: 1.25, fontWeight: 700, borderRadius: 2 }, children: "Get involved" }), _jsx(Button, { component: RouterLink, to: "/about", variant: "outlined", size: "large", sx: { px: 4, py: 1.25, borderRadius: 2 }, children: "About us" })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Box, { sx: { position: 'relative', display: 'flex', justifyContent: 'center' }, children: [_jsx(Grid, { container: true, spacing: 2, sx: { maxWidth: 520, position: 'relative', zIndex: 1 }, children: ['/illustrations/mitra-image-5.png', '/illustrations/mitra-image-10.jpg', '/illustrations/mitra-image-6.png', '/illustrations/mitra-image-9.jpg'].map((src, index) => (_jsx(Grid, { size: { xs: 6 }, children: _jsx(Box, { component: "img", src: getImagePath(src), alt: "", loading: "lazy", sx: {
                                                        width: '100%',
                                                        height: { xs: 130, sm: 150, md: 170 },
                                                        objectFit: 'cover',
                                                        borderRadius: 2,
                                                        boxShadow: '0 8px 24px rgba(0, 35, 149, 0.2)',
                                                        transform: index % 2 === 0 ? 'translateY(6px)' : 'translateY(-6px)',
                                                    } }) }, src))) }), _jsxs(Box, { sx: {
                                                position: 'absolute',
                                                bottom: { xs: -8, md: 8 },
                                                right: { xs: 4, md: 16 },
                                                px: 2,
                                                py: 1.5,
                                                borderRadius: 2,
                                                bgcolor: 'background.paper',
                                                boxShadow: 3,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1.25,
                                                zIndex: 2,
                                            }, children: [_jsx(GroupIcon, { color: "primary" }), _jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle2", fontWeight: 700, children: "Erasmus+ & local partners" }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "Projects, workshops, mobilities" })] })] })] }) })] }) }) }), _jsxs(Container, { sx: { py: { xs: 6, md: 8 } }, children: [_jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '1.75rem', md: '2rem' }, fontWeight: 700, mb: 2 }, children: "Intercultural Education & Inclusion" }), _jsx(Box, { sx: {
                            maxWidth: 800,
                            borderTop: '3px solid',
                            borderColor: 'error.main',
                            pt: 2,
                        }, children: _jsxs(Stack, { spacing: 2, children: [_jsx(Typography, { color: "text.secondary", sx: { lineHeight: 1.8, fontSize: '1.05rem' }, children: "MITRA FRANCE fosters intercultural understanding and responsiveness to social, ethnic, linguistic, and cultural diversity through non-formal educational approaches." }), _jsx(Typography, { color: "text.secondary", sx: { lineHeight: 1.8, fontSize: '1.05rem' }, children: "Its mission is to create awareness among individuals about their societal roles and to instill skills enabling positive and constructive action." }), _jsx(Typography, { color: "text.secondary", sx: { lineHeight: 1.8, fontSize: '1.05rem' }, children: "The organisation aims to develop innovative educational methods that address diversity and promote inclusive education." })] }) })] }), _jsx(Box, { sx: { bgcolor: 'action.hover', py: { xs: 6, md: 8 } }, children: _jsx(Container, { children: _jsxs(Grid, { container: true, spacing: 3, alignItems: "stretch", children: [_jsxs(Grid, { size: { xs: 12, lg: 7 }, children: [_jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '1.75rem', md: '2rem' }, fontWeight: 700, mb: 3 }, children: "Focus areas" }), _jsx(Grid, { container: true, spacing: 2, children: focusAreas.map((area) => (_jsx(Grid, { size: { xs: 12, sm: 6 }, children: _jsx(Card, { component: RouterLink, to: area.path, variant: "outlined", sx: {
                                                    height: '100%',
                                                    borderRadius: 2,
                                                    textDecoration: 'none',
                                                    color: 'inherit',
                                                    display: 'block',
                                                    transition: 'box-shadow 0.2s, border-color 0.2s',
                                                    '&:hover': { boxShadow: 2, borderColor: 'primary.main' },
                                                }, children: _jsx(CardContent, { sx: { p: 2.5 }, children: _jsxs(Stack, { direction: "row", spacing: 2, alignItems: "flex-start", children: [_jsx(Box, { sx: { flexShrink: 0 }, children: area.icon }), _jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle1", fontWeight: 700, gutterBottom: true, children: area.title }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: area.description }), _jsx(Typography, { variant: "caption", color: "primary.main", fontWeight: 600, sx: { mt: 1, display: 'inline-block' }, children: "Learn more \u2192" })] })] }) }) }) }, area.title))) })] }), _jsx(Grid, { size: { xs: 12, lg: 5 }, children: _jsx(Card, { sx: {
                                        height: '100%',
                                        borderRadius: 2,
                                        background: (theme) => theme.palette.mode === 'dark'
                                            ? 'linear-gradient(145deg, rgba(0,35,149,0.2), rgba(237,41,57,0.12))'
                                            : 'linear-gradient(145deg, rgba(0,35,149,0.06), rgba(237,41,57,0.06))',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                    }, children: _jsxs(CardContent, { sx: { p: { xs: 3, md: 4 } }, children: [_jsx(Typography, { variant: "h6", fontWeight: 700, gutterBottom: true, children: "At a glance" }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3 }, children: "Numbers reflect our long-term commitment to European cooperation and local impact." }), _jsx(Stack, { spacing: 2.5, children: impactStats.map((s) => (_jsxs(Stack, { direction: "row", spacing: 2, alignItems: "center", children: [_jsx(Box, { sx: {
                                                                width: 44,
                                                                height: 44,
                                                                borderRadius: 1.5,
                                                                bgcolor: 'background.paper',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                color: 'primary.main',
                                                                boxShadow: 1,
                                                            }, children: s.icon }), _jsxs(Box, { children: [_jsx(Typography, { variant: "h5", fontWeight: 800, children: s.value }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: s.label })] })] }, s.label))) })] }) }) })] }) }) }), _jsxs(Container, { sx: { py: { xs: 6, md: 8 } }, children: [_jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 2, alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: "space-between", sx: { mb: 1 }, children: [_jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '1.75rem', md: '2rem' }, fontWeight: 700 }, children: "Our activities" }), _jsx(Button, { component: RouterLink, to: "/programs-workshops", size: "small", endIcon: _jsx(ArrowForwardIcon, {}), children: "Programs & workshops" })] }), _jsx(Typography, { color: "text.secondary", sx: { mb: 2, maxWidth: 640 }, children: "Highlighted Erasmus+ work and upcoming or recent events. Switch tabs to filter." }), _jsxs(Tabs, { value: activityTab, onChange: (_, v) => setActivityTab(v), sx: { borderBottom: 1, borderColor: 'divider' }, variant: "scrollable", allowScrollButtonsMobile: true, children: [_jsx(Tab, { label: "All", id: "activities-tab-0" }), _jsx(Tab, { label: "Projects", id: "activities-tab-1" }), _jsx(Tab, { label: "Events", id: "activities-tab-2" })] }), [0, 1, 2].map((tabIndex) => (_jsx(ActivityTabPanel, { value: activityTab, index: tabIndex, children: _jsx(Grid, { container: true, spacing: 2, children: filterActivities(tabIndex).map((item) => (_jsx(Grid, { size: { xs: 12, sm: 6, md: 4 }, children: _jsx(Card, { variant: "outlined", sx: { height: '100%', borderRadius: 2 }, children: _jsxs(CardContent, { sx: { p: 2.5, height: '100%', display: 'flex', flexDirection: 'column' }, children: [_jsx(Chip, { size: "small", label: item.kind === 'project' ? 'Project' : 'Event', color: item.kind === 'project' ? 'primary' : 'secondary', sx: { alignSelf: 'flex-start', mb: 1.5 } }), _jsx(Typography, { variant: "subtitle1", fontWeight: 700, gutterBottom: true, children: item.title }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { flexGrow: 1, mb: 2 }, children: item.description }), _jsx(Typography, { variant: "caption", color: "text.secondary", display: "block", sx: { mb: 2 }, children: item.meta }), _jsx(Button, { component: RouterLink, to: item.link, size: "small", endIcon: _jsx(ArrowForwardIcon, {}), children: item.kind === 'project' ? 'See programmes' : 'See events' })] }) }) }, `${item.kind}-${item.title}`))) }) }, tabIndex)))] }), _jsx(Box, { sx: { bgcolor: 'action.hover', py: { xs: 6, md: 8 } }, children: _jsx(Container, { children: _jsxs(Grid, { container: true, spacing: 4, children: [_jsx(Grid, { size: { xs: 12, md: 5 }, children: _jsx(Card, { variant: "outlined", sx: { borderRadius: 2, height: '100%', p: 1 }, children: _jsxs(CardContent, { children: [_jsx(FormatQuoteIcon, { color: "primary", sx: { fontSize: 36, mb: 1, opacity: 0.8 } }), _jsx(Typography, { sx: { fontStyle: 'italic', lineHeight: 1.7, mb: 2 }, children: "Working with MITRA means practical learning that respects different backgrounds \u2014 exactly what our participants need." }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "\u2014 Partner educator, Nice region" })] }) }) }), _jsxs(Grid, { size: { xs: 12, md: 7 }, children: [_jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", sx: { mb: 2 }, children: [_jsx(HandshakeIcon, { color: "primary" }), _jsx(Typography, { variant: "h6", fontWeight: 700, children: "Partners & friends" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "We collaborate with universities, cultural venues, libraries, and associations. Explore the full network on the partners page." }), _jsx(Box, { sx: { display: 'flex', flexWrap: 'wrap', gap: 1 }, children: partnerNames.map((name) => (_jsx(Chip, { label: name, variant: "outlined", size: "small", sx: { borderRadius: 1 } }, name))) }), _jsx(Button, { component: RouterLink, to: "/partners", sx: { mt: 2 }, endIcon: _jsx(ArrowForwardIcon, {}), children: "All partners" })] })] }) }) }), _jsx(Box, { sx: {
                    py: { xs: 8, md: 10 },
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(237, 41, 57, 0.06) 100%)',
                }, children: _jsx(Container, { maxWidth: "md", children: _jsxs(Stack, { spacing: 3, alignItems: "center", textAlign: "center", children: [_jsx(Typography, { variant: "h3", sx: { fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 800 }, children: "Ready to learn, create, or partner with us?" }), _jsx(Typography, { color: "text.secondary", sx: { maxWidth: 520 }, children: "Tell us whether you want to join an activity, volunteer, or explore Erasmus+ cooperation \u2014 we will point you to the right contact." }), _jsx(ParticleCTAButton, { to: "/contact", variant: "contained", color: "primary", size: "large", endIcon: _jsx(ArrowForwardIcon, {}), particleCount: 120, colors: ['#002395', '#0038d6', '#6B8DE3', '#ED2939', '#FFFFFF'], sx: {
                                    px: 5,
                                    py: 1.5,
                                    fontWeight: 700,
                                    borderRadius: 2,
                                    background: 'linear-gradient(135deg, #002395 0%, #0038d6 100%)',
                                }, children: "Contact MITRA France" })] }) }) })] }));
}
