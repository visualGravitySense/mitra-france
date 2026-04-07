import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PublicIcon from '@mui/icons-material/Public';
import { Link as RouterLink } from 'react-router-dom';
import { getImagePath } from '../utils/imagePath';
const ORG_PIC = '921950857';
const ORG_OID = 'E10155908';
const erasmusPartnerCountries = [
    'Poland',
    'Lithuania',
    'Latvia',
    'Estonia',
    'Bulgaria',
    'Romania',
    'Turkey',
    'Italy',
    'Spain',
];
const collaborations = [
    {
        id: 'obj-1',
        title: 'Intercultural Education & Inclusion',
        summary: 'Non-formal education that fosters intercultural understanding and social inclusion — addressing cultural, ethnic, linguistic, and social diversity in learning settings.',
        category: 'education',
        meta: 'Core objective',
        image: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
        link: '/programs-workshops',
    },
    {
        id: 'obj-2',
        title: 'Media and Arts Education',
        summary: 'Media literacy, arts education, and creative use of digital tools — including responsible IT practice and AI awareness in non-formal learning.',
        category: 'culture',
        meta: 'Core objective',
        image: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
        link: '/programs-workshops',
    },
    {
        id: 'obj-3',
        title: 'Digital Inclusion for Marginalised Groups',
        summary: 'Digital inclusion with a focus on youth, people aged 60 and over, and unemployed adults — practical skills and confidence for everyday and civic life.',
        category: 'education',
        meta: 'Core objective',
        image: '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
        link: '/contact',
    },
    {
        id: 'loc-uca',
        title: 'Université Côte d’Azur',
        summary: 'Research, teaching, and non-formal education initiatives that connect university communities with civil-society projects in the PACA region.',
        category: 'local',
        meta: 'Nice, France · Local partner',
        image: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
        link: '/contact',
    },
    {
        id: 'loc-109',
        title: 'Le 109 (Pôle de cultures contemporaines)',
        summary: 'Contemporary culture and creative programmes that support youth, artists, and audiences through workshops and cultural mediation.',
        category: 'local',
        meta: 'Nice, France · Local partner',
        image: '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
        link: '/contact',
    },
    {
        id: 'loc-schools',
        title: 'Le HUBLOT · SCREB · Lycée Pasteur',
        summary: 'Schools and cultural venues in the network: cooperation on media education, heritage, and inclusive activities for learners and educators.',
        category: 'local',
        meta: 'Nice area · Local partners',
        image: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
        link: '/contact',
    },
    {
        id: 'loc-mediatheque',
        title: 'La Médiathèque Louis Nucéra',
        summary: 'Public learning space for digital and media literacy, reading, and community-led cultural events open to diverse publics.',
        category: 'local',
        meta: 'Nice, France · Local partner',
        image: '/photos/572890197_1142845724690099_2859850866106109617_n.jpg',
        link: '/contact',
    },
    {
        id: 'loc-espace',
        title: 'Espace Associations Nice',
        summary: 'Hub for associations: coordination, visibility, and joint actions that strengthen social inclusion and citizen participation.',
        category: 'local',
        meta: 'Nice, France · Local partner',
        image: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
        link: '/contact',
    },
    {
        id: 'eu-erasmus',
        title: 'Erasmus+ international cooperation',
        summary: `Structured Erasmus+ partnerships connecting MITRA France with organisations across ${erasmusPartnerCountries.join(', ')}.`,
        category: 'europe',
        meta: 'Erasmus+ · European partnerships',
        image: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
        link: '/programs-workshops',
    },
];
const categoryFilterLabels = [
    { value: 'all', label: 'All' },
    { value: 'europe', label: 'EU & Erasmus+' },
    { value: 'local', label: 'Local Nice' },
    { value: 'education', label: 'Education & inclusion' },
    { value: 'culture', label: 'Media & culture' },
];
const INITIAL_VISIBLE = 3;
const LOAD_STEP = 3;
export default function Partners() {
    const [category, setCategory] = useState('all');
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
    const filtered = useMemo(() => (category === 'all' ? collaborations : collaborations.filter((c) => c.category === category)), [category]);
    const visible = filtered.slice(0, visibleCount);
    const canLoadMore = visibleCount < filtered.length;
    const handleCategory = (_, value) => {
        if (value == null)
            return;
        setCategory(value);
        setVisibleCount(INITIAL_VISIBLE);
    };
    return (_jsxs(Box, { component: "main", children: [_jsx(Box, { sx: {
                    pt: { xs: 12, sm: 14, md: 16 },
                    pb: { xs: 6, md: 8 },
                    background: 'linear-gradient(180deg, rgba(0, 35, 149, 0.07) 0%, transparent 100%)',
                }, children: _jsx(Container, { maxWidth: "md", children: _jsxs(Stack, { spacing: 2, alignItems: "center", textAlign: "center", children: [_jsx(HandshakeIcon, { sx: { fontSize: 40, color: 'primary.main', opacity: 0.9 } }), _jsx(Typography, { variant: "h1", sx: { fontSize: { xs: '1.85rem', md: '2.35rem' }, fontWeight: 800 }, children: "Our partners & collaborations" }), _jsxs(Typography, { color: "text.secondary", sx: { maxWidth: 640, lineHeight: 1.75 }, children: ["MITRA France was founded in ", _jsx("strong", { children: "2015" }), " in ", _jsx("strong", { children: "Nice" }), ". We are dedicated to", ' ', _jsx("strong", { children: "inclusive education" }), ", ", _jsx("strong", { children: "media and digital literacy" }), ", and", ' ', _jsx("strong", { children: "intercultural understanding" }), " through ", _jsx("strong", { children: "non-formal education" }), " and", ' ', _jsx("strong", { children: "social inclusion" }), ". We anchor programmes locally and open them to European cooperation."] }), _jsxs(Stack, { direction: "row", spacing: 1, flexWrap: "wrap", justifyContent: "center", useFlexGap: true, sx: { pt: 0.5 }, children: [_jsx(Chip, { label: `PIC ${ORG_PIC}`, size: "small", variant: "outlined", sx: { fontWeight: 600 } }), _jsx(Chip, { label: `OID ${ORG_OID}`, size: "small", variant: "outlined", sx: { fontWeight: 600 } })] }), _jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 2, sx: { pt: 1 }, children: [_jsx(Button, { component: RouterLink, to: "/contact", variant: "contained", size: "large", endIcon: _jsx(ArrowForwardIcon, {}), children: "Propose a partnership" }), _jsx(Button, { component: RouterLink, to: "/programs-workshops", variant: "outlined", size: "large", children: "Programs & workshops" })] })] }) }) }), _jsxs(Container, { sx: { py: { xs: 5, md: 7 } }, children: [_jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '1.4rem', md: '1.65rem' }, fontWeight: 700, mb: 1 }, children: "Highlights" }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, maxWidth: 640 }, children: "Three strategic pillars, trusted local institutions in Nice, and Erasmus+ cooperation \u2014 filter by focus, then follow a link to programmes or contact." }), _jsx(Box, { sx: { mb: 3, overflowX: 'auto', pb: 0.5 }, children: _jsx(ToggleButtonGroup, { value: category, exclusive: true, onChange: handleCategory, size: "small", sx: {
                                flexWrap: 'wrap',
                                gap: 0.5,
                                '& .MuiToggleButton-root': { textTransform: 'none', borderRadius: '8px !important', px: 1.5 },
                            }, children: categoryFilterLabels.map((opt) => (_jsx(ToggleButton, { value: opt.value, children: opt.label }, opt.value))) }) }), _jsx(Grid, { container: true, spacing: 2, children: visible.map((item) => (_jsx(Grid, { size: { xs: 12, sm: 6, md: 4 }, children: _jsxs(Card, { variant: "outlined", sx: {
                                    height: '100%',
                                    borderRadius: 2,
                                    transition: 'box-shadow 0.2s, border-color 0.2s',
                                    '&:hover': { boxShadow: 2, borderColor: 'primary.main' },
                                }, children: [_jsx(Box, { component: "img", src: getImagePath(item.image), alt: "", sx: { width: '100%', height: 160, objectFit: 'cover' } }), _jsxs(CardContent, { sx: { p: 2 }, children: [_jsx(Chip, { size: "small", label: categoryFilterLabels.find((c) => c.value === item.category)?.label ?? item.category, sx: { mb: 1 }, variant: "outlined" }), _jsx(Typography, { variant: "subtitle1", fontWeight: 700, gutterBottom: true, children: item.title }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 1.5, lineHeight: 1.6 }, children: item.summary }), _jsx(Typography, { variant: "caption", color: "text.secondary", display: "block", sx: { mb: 1.5 }, children: item.meta }), _jsx(Button, { component: RouterLink, to: item.link, size: "small", endIcon: _jsx(ArrowForwardIcon, {}), children: item.link === '/programs-workshops' ? 'Programmes' : 'Contact' })] })] }) }, item.id))) }), filtered.length === 0 && (_jsx(Typography, { color: "text.secondary", sx: { py: 4, textAlign: 'center' }, children: "Nothing in this category \u2014 try \u201CAll\u201D." })), canLoadMore && (_jsx(Box, { sx: { textAlign: 'center', mt: 3 }, children: _jsx(Button, { variant: "outlined", onClick: () => setVisibleCount((n) => Math.min(n + LOAD_STEP, filtered.length)), children: "Load more" }) }))] }), _jsx(Box, { sx: { bgcolor: 'action.hover', py: { xs: 6, md: 8 } }, children: _jsxs(Container, { children: [_jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", sx: { mb: 2 }, children: [_jsx(PublicIcon, { color: "primary" }), _jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '1.4rem', md: '1.65rem' }, fontWeight: 700 }, children: "International scope \u2014 Erasmus+" })] }), _jsxs(Typography, { color: "text.secondary", sx: { mb: 3, maxWidth: 720, lineHeight: 1.75 }, children: ["Within ", _jsx("strong", { children: "Erasmus+" }), ", we work with partners in higher education, youth, adult learning, and non-formal settings. Our cooperation spans", ' ', _jsx("strong", { children: "Poland, Lithuania, Latvia, Estonia, Bulgaria, Romania, Turkey, Italy, and Spain" }), "\u2014 alongside our French Riviera home base in Nice."] }), _jsx(Card, { variant: "outlined", sx: { borderRadius: 2, overflow: 'hidden' }, children: _jsx(CardContent, { sx: { p: { xs: 2, md: 3 } }, children: _jsxs(Grid, { container: true, spacing: 2, children: [_jsx(Grid, { size: { xs: 12, md: 4 }, children: _jsxs(Stack, { spacing: 1, alignItems: "center", textAlign: "center", sx: { p: 2 }, children: [_jsx(LocationOnIcon, { color: "primary", sx: { fontSize: 36 } }), _jsx(Typography, { fontWeight: 800, children: "Nice, France" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Headquarters and local ecosystem \u2014 universities, libraries, schools, and associations." })] }) }), _jsxs(Grid, { size: { xs: 12, md: 8 }, children: [_jsx(Typography, { variant: "subtitle2", color: "text.secondary", sx: { mb: 1.5 }, children: "Erasmus+ partner countries (examples in active projects)" }), _jsx(Box, { sx: { display: 'flex', flexWrap: 'wrap', gap: 1 }, children: erasmusPartnerCountries.map((country) => (_jsx(Chip, { label: country, variant: "outlined", size: "small", sx: { borderRadius: 1 } }, country))) }), _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { mt: 2, display: 'block' }, children: "Consortium composition changes with each call; write to us for the list tied to a specific proposal or mobility." })] })] }) }) })] }) }), _jsx(Box, { sx: { py: { xs: 8, md: 10 } }, children: _jsx(Container, { maxWidth: "sm", children: _jsxs(Stack, { spacing: 2, alignItems: "center", textAlign: "center", children: [_jsx(SchoolIcon, { sx: { fontSize: 36, color: 'primary.main' } }), _jsx(Typography, { variant: "h5", fontWeight: 800, children: "Want to run a project with us?" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "One message is enough \u2014 we will suggest the right programme officer or partnership route under Erasmus+ or local cooperation." }), _jsx(Button, { component: RouterLink, to: "/contact", variant: "contained", size: "large", endIcon: _jsx(ArrowForwardIcon, {}), sx: { mt: 1, px: 4, fontWeight: 700, borderRadius: 2 }, children: "Go to contact" })] }) }) })] }));
}
