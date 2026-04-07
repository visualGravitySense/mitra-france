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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';
import { getImagePath } from '../utils/imagePath';
const ORG_PIC = '921950857';
const ORG_OID = 'E10155908';
const courses = [
    {
        id: '1',
        title: 'Intercultural dialogue & inclusion labs',
        category: 'intercultural',
        blurb: 'Non-formal sessions on identity, dialogue, and social inclusion — building skills for constructive action in diverse communities.',
        image: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
        meta: 'Adults & youth · Groups · Nice area',
    },
    {
        id: '2',
        title: 'Participatory citizenship workshops',
        category: 'intercultural',
        blurb: 'Short programmes on rights, participation, and collective problem-solving, aligned with European values and local civic life.',
        image: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
        meta: 'Non-formal education · Social inclusion',
    },
    {
        id: '3',
        title: 'Media literacy & critical storytelling',
        category: 'media',
        blurb: 'Critical reading of news and social media, ethical content creation, and arts-based expression for learners and educators.',
        image: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
        meta: 'Media & arts education',
    },
    {
        id: '4',
        title: 'Digital tools, IT practice & AI awareness',
        category: 'media',
        blurb: 'Practical IT skills with a responsible lens: privacy, verification, and introductory use of AI in learning — always in non-formal formats.',
        image: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
        meta: 'Inclusive groups · Hands-on',
    },
    {
        id: '5',
        title: 'Digital inclusion for seniors (60+)',
        category: 'inclusion',
        blurb: 'Patient, step-by-step support for devices, messaging, e-services, and safe browsing — reducing isolation and building confidence.',
        image: '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
        meta: 'Seniors 60+ · Small groups',
    },
    {
        id: '6',
        title: 'Youth & unemployed — digital pathways',
        category: 'inclusion',
        blurb: 'Skills for job search, online communication, and essential productivity tools — tied to coaching and peer support where available.',
        image: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
        meta: 'Youth & unemployed adults · Nice region',
    },
];
const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'intercultural', label: 'Intercultural & inclusion' },
    { value: 'media', label: 'Media & arts (IT / AI)' },
    { value: 'inclusion', label: 'Digital inclusion' },
];
const faqItems = [
    {
        q: 'What does MITRA France offer?',
        a: 'Founded in 2015 in Nice, we deliver non-formal education in intercultural understanding, media and digital literacy, and inclusion — PIC ' +
            ORG_PIC +
            ', OID ' +
            ORG_OID +
            '. Offerings change with funded projects and local partners; contact us for the current open cohort.',
    },
    {
        q: 'Are activities free?',
        a: 'Many programmes are supported by Erasmus+, public partners, or local institutions. We confirm any contribution or eligibility when you register for a specific activity.',
    },
    {
        q: 'Who is prioritised for digital inclusion?',
        a: 'We focus on youth, people aged 60 and over, and unemployed adults, alongside other groups facing barriers — each announcement lists who the session is for.',
    },
    {
        q: 'How do I sign up?',
        a: 'Write via Contact with the theme you are interested in; we reply with dates, venue (often Nice or neighbouring municipalities), and any forms required.',
    },
];
export default function Courses() {
    const [category, setCategory] = useState('all');
    const visible = useMemo(() => (category === 'all' ? courses : courses.filter((c) => c.category === category)), [category]);
    const handleFilter = (_, value) => {
        if (value != null)
            setCategory(value);
    };
    return (_jsxs(Box, { component: "main", children: [_jsx(Box, { sx: {
                    pt: { xs: 12, sm: 14, md: 16 },
                    pb: { xs: 6, md: 8 },
                    background: 'linear-gradient(180deg, rgba(0, 35, 149, 0.07) 0%, transparent 100%)',
                }, children: _jsx(Container, { maxWidth: "md", children: _jsxs(Stack, { spacing: 2, alignItems: "center", textAlign: "center", children: [_jsx(Typography, { variant: "h1", sx: { fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 800 }, children: "Learning with MITRA France" }), _jsxs(Typography, { color: "text.secondary", sx: { maxWidth: 640, lineHeight: 1.75 }, children: ["Established in ", _jsx("strong", { children: "2015" }), " in ", _jsx("strong", { children: "Nice" }), ", we advance ", _jsx("strong", { children: "inclusive education" }), ", ", _jsx("strong", { children: "media and digital literacy" }), ", and ", _jsx("strong", { children: "intercultural understanding" }), " through", ' ', _jsx("strong", { children: "non-formal education" }), " and ", _jsx("strong", { children: "social inclusion" }), ". Below is a thematic catalogue \u2014 concrete dates and venues are shared when you get in touch."] }), _jsxs(Stack, { direction: "row", spacing: 1, flexWrap: "wrap", justifyContent: "center", useFlexGap: true, children: [_jsx(Chip, { label: `PIC ${ORG_PIC}`, size: "small", variant: "outlined", sx: { fontWeight: 600 } }), _jsx(Chip, { label: `OID ${ORG_OID}`, size: "small", variant: "outlined", sx: { fontWeight: 600 } })] }), _jsx(Button, { component: "a", href: "#course-grid", variant: "contained", size: "large", endIcon: _jsx(ArrowForwardIcon, {}), sx: { fontWeight: 700, borderRadius: 2, px: 3 }, children: "Browse catalogue" })] }) }) }), _jsxs(Container, { maxWidth: "lg", sx: { pb: 2 }, id: "course-grid", children: [_jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '1.35rem', md: '1.5rem' }, fontWeight: 700, mb: 2 }, children: "Thematic catalogue" }), _jsx(Box, { sx: { mb: 3, overflowX: 'auto' }, children: _jsx(ToggleButtonGroup, { value: category, exclusive: true, onChange: handleFilter, size: "small", "aria-label": "Filter by pillar", sx: {
                                flexWrap: 'wrap',
                                gap: 0.5,
                                '& .MuiToggleButton-root': { textTransform: 'none', borderRadius: '8px !important', px: 1.5 },
                            }, children: filterOptions.map((opt) => (_jsx(ToggleButton, { value: opt.value, children: opt.label }, opt.value))) }) }), _jsx(Grid, { container: true, spacing: 2, children: visible.map((course) => (_jsx(Grid, { size: { xs: 12, sm: 6, md: 4 }, children: _jsxs(Card, { variant: "outlined", sx: {
                                    height: '100%',
                                    borderRadius: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'box-shadow 0.2s, border-color 0.2s',
                                    '&:hover': { boxShadow: 2, borderColor: 'primary.main' },
                                }, children: [_jsx(Box, { component: "img", src: getImagePath(course.image), alt: "", sx: { width: '100%', height: 160, objectFit: 'cover' } }), _jsxs(CardContent, { sx: { flexGrow: 1, display: 'flex', flexDirection: 'column', p: 2 }, children: [_jsx(Typography, { variant: "subtitle1", fontWeight: 700, gutterBottom: true, children: course.title }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: {
                                                    flexGrow: 1,
                                                    mb: 1.5,
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    lineHeight: 1.55,
                                                }, children: course.blurb }), _jsx(Typography, { variant: "caption", color: "text.secondary", display: "block", sx: { mb: 1.5 }, children: course.meta }), _jsx(Button, { component: RouterLink, to: "/contact", size: "small", variant: "outlined", endIcon: _jsx(ArrowForwardIcon, {}), sx: { alignSelf: 'flex-start' }, children: "Ask about this theme" })] })] }) }, course.id))) }), visible.length === 0 && (_jsx(Typography, { color: "text.secondary", sx: { py: 4 }, children: "No themes in this filter \u2014 choose \u201CAll\u201D or another pillar." }))] }), _jsx(Box, { sx: { bgcolor: 'action.hover', py: { xs: 5, md: 6 } }, children: _jsxs(Container, { maxWidth: "md", children: [_jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '1.25rem', md: '1.4rem' }, fontWeight: 700, mb: 2 }, children: "Frequently asked" }), faqItems.map((item) => (_jsxs(Accordion, { disableGutters: true, elevation: 0, sx: {
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: 1,
                                mb: 1,
                                '&:before': { display: 'none' },
                            }, children: [_jsx(AccordionSummary, { expandIcon: _jsx(ExpandMoreIcon, {}), children: _jsx(Typography, { fontWeight: 600, children: item.q }) }), _jsx(AccordionDetails, { children: _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { lineHeight: 1.75 }, children: item.a }) })] }, item.q)))] }) }), _jsx(Container, { maxWidth: "md", sx: { py: { xs: 6, md: 8 } }, children: _jsxs(Card, { variant: "outlined", sx: { borderRadius: 2, p: { xs: 3, md: 4 }, textAlign: 'center' }, children: [_jsx(Typography, { variant: "h6", fontWeight: 800, gutterBottom: true, children: "Don\u2019t see what you need?" }), _jsx(Typography, { color: "text.secondary", sx: { mb: 3, maxWidth: 520, mx: 'auto' }, children: "We often tailor non-formal modules with schools, libraries, and European partners \u2014 describe your group and we will propose a route (including Erasmus+ where relevant)." }), _jsx(Button, { component: RouterLink, to: "/contact", variant: "contained", size: "large", endIcon: _jsx(ArrowForwardIcon, {}), children: "Write to us" })] }) })] }));
}
