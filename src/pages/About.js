import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Accessibility, BookOpen, Clapperboard, Globe2, Handshake, ShieldCheck } from 'lucide-react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Avatar from '@mui/material/Avatar';
import { Link as RouterLink } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { getImagePath } from '../utils/imagePath';
const ORG_PIC = '921950857';
const ORG_OID = 'E10155908';
function ObjectiveIcon({ icon: Icon }) {
    return (_jsx(Box, { sx: { color: 'primary.main', display: 'flex', mb: 1.5 }, "aria-hidden": true, children: _jsx(Icon, { size: 28, strokeWidth: 1.75, "aria-hidden": true }) }));
}
const coreObjectives = [
    {
        title: 'Intercultural Education & Inclusion',
        description: 'Fostering intercultural understanding and responsiveness to diversity—cultural, ethnic, linguistic, and social—with pathways to awareness, constructive dialogue, and inclusive non-formal learning.',
        icon: Globe2,
    },
    {
        title: 'Media and Arts Education',
        description: 'Advancing media literacy and arts-based learning, and popularising responsible use of ICT, IT, and AI in teaching and non-formal education settings.',
        icon: Clapperboard,
    },
    {
        title: 'Digital Inclusion for Marginalised Groups',
        description: 'Targeted digital literacy and inclusion for young people, people aged 60 and over, migrants, and refugees—so essential skills and online confidence are within reach.',
        icon: Accessibility,
    },
    {
        title: 'Volunteering and Social Cohesion',
        description: 'Supporting civic engagement and solidarity through participation in European programmes and local initiatives that strengthen social cohesion.',
        icon: Handshake,
    },
    {
        title: 'Lifelong Learning and Vocational Training',
        description: 'Non-formal educational initiatives that support lifelong learning and vocational skills relevant to personal development and the labour market.',
        icon: BookOpen,
    },
];
const targetAudiences = [
    'Unemployed adults',
    'Youth',
    'Seniors (60+)',
    'Women',
    'Ethnic minorities',
    'Migrants',
    'Refugees',
];
/** Illustrative avatars until consent and assets are available */
function notionStyleAvatarUrl(seed) {
    return `https://api.dicebear.com/9.x/notionists/svg?seed=${encodeURIComponent(seed)}`;
}
const teamPreview = [
    { name: 'Pavel Smulski', role: 'Leader & Founder' },
    { name: 'Karina Tronche', role: 'Core Team' },
    { name: 'Louise Papadoperakis', role: 'Core Team' },
    { name: 'Alex Smulski', role: 'Core Team' },
];
const partnerNames = [
    'Université Côte d’Azur',
    'Le 109 · Pôle de cultures contemporaines',
    'Le HUBLOT · SCREB · Lycée Pasteur',
    'La Médiathèque Louis Nucéra',
    'Espace Associations Nice',
];
const faqItems = [
    {
        q: 'What is MITRA France?',
        a: 'MITRA FRANCE is a non-governmental, non-profit organisation founded in 2015 in Nice, France. It promotes inclusive education, media and digital literacy, intercultural understanding, and lifelong learning through non-formal education.',
    },
    {
        q: 'Where are you based?',
        a: 'Our headquarters are in Nice, Provence–Alpes–Côte d’Azur, with cooperation across France and Europe—including Erasmus+ partnerships.',
    },
    {
        q: 'Who can take part?',
        a: 'We work with unemployed adults, youth, seniors aged 60 and over, women, ethnic minorities, migrants, and refugees, depending on each programme’s eligibility and funding rules.',
    },
    {
        q: 'How do I get involved?',
        a: 'Use the Contact page to describe your interest—volunteering, training, or partnership—and we will point you to the right programme or colleague.',
    },
    {
        q: 'What are your official identifiers?',
        a: `For transparency in European programmes: Participant Identification Code (PIC) ${ORG_PIC}, Organisation ID (OID) ${ORG_OID}.`,
    },
];
const storyMomentImage = '/photos/583924019_1157903166517688_8756873269993443102_n.jpg';
export default function About() {
    return (_jsxs(Box, { component: "main", children: [_jsx(Box, { component: "section", "aria-labelledby": "about-hero-heading", sx: {
                    pt: { xs: 12, sm: 14, md: 16 },
                    pb: { xs: 6, md: 10 },
                    background: 'linear-gradient(180deg, rgba(0, 35, 149, 0.05) 0%, transparent 100%)',
                }, children: _jsx(Container, { children: _jsxs(Grid, { container: true, spacing: { xs: 4, md: 6 }, alignItems: "center", children: [_jsxs(Grid, { size: { xs: 12, md: 6 }, children: [_jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", flexWrap: "wrap", useFlexGap: true, sx: { mb: 2 }, children: [_jsx(Chip, { icon: _jsx(LocationOnIcon, { sx: { fontSize: 18 } }), label: "Nice, France", size: "small", variant: "outlined", sx: { fontWeight: 600, borderRadius: 1 } }), _jsx(Chip, { label: "Founded 2015", size: "small", variant: "outlined", sx: { fontWeight: 600, borderRadius: 1 } })] }), _jsx(Typography, { variant: "overline", sx: { color: 'primary.main', fontWeight: 700, letterSpacing: 1.2, display: 'block' }, children: "MITRA FRANCE" }), _jsx(Typography, { id: "about-hero-heading", variant: "h1", component: "h1", sx: {
                                            fontSize: { xs: '1.65rem', sm: '2rem', md: '2.35rem' },
                                            fontWeight: 800,
                                            lineHeight: 1.25,
                                            mt: 1,
                                            mb: 2,
                                            color: 'text.primary',
                                        }, children: "Non-profit organization dedicated to inclusive education, media literacy, and lifelong learning since 2015." }), _jsxs(Typography, { color: "text.secondary", component: "p", sx: { lineHeight: 1.8, maxWidth: 560, fontSize: '1.0625rem' }, children: ["We are an NGO rooted in ", _jsx("strong", { children: "Nice" }), ", combining local anchoring with European cooperation. Our work spans intercultural education, creative and digital media, inclusion for marginalised communities, volunteering, and non-formal pathways for lifelong learning\u2014always with clarity, rigour, and respect for participants."] })] }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Box, { component: "img", src: getImagePath('/illustrations/mitra-image-4.png'), alt: "MITRA France participants and facilitators during an outdoor group activity on the French Riviera", sx: {
                                        width: '100%',
                                        borderRadius: 2,
                                        maxHeight: { xs: 320, md: 400 },
                                        objectFit: 'cover',
                                        boxShadow: '0 8px 32px rgba(0, 35, 149, 0.12)',
                                    } }) })] }) }) }), _jsxs(Container, { component: "section", "aria-labelledby": "objectives-heading", sx: { py: { xs: 6, md: 9 } }, children: [_jsx(Typography, { id: "objectives-heading", variant: "h2", component: "h2", sx: { fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 1, textAlign: 'center' }, children: "Core objectives" }), _jsx(Typography, { color: "text.secondary", sx: { textAlign: 'center', maxWidth: 640, mx: 'auto', mb: { xs: 4, md: 5 }, lineHeight: 1.75 }, children: "Five strategic priorities guide our programmes, partnerships, and European projects." }), _jsx(Grid, { container: true, spacing: 3, children: coreObjectives.map((obj, index) => (_jsx(Grid, { size: { xs: 12, sm: 6, md: index < 3 ? 4 : 6 }, children: _jsx(Card, { variant: "outlined", sx: {
                                    height: '100%',
                                    borderRadius: 2,
                                    borderColor: 'divider',
                                    transition: 'border-color 0.2s, box-shadow 0.2s',
                                    '&:hover': { borderColor: 'primary.main', boxShadow: 1 },
                                }, children: _jsxs(CardContent, { sx: { p: { xs: 2.5, md: 3 } }, children: [_jsx(ObjectiveIcon, { icon: obj.icon }), _jsxs(Typography, { variant: "subtitle1", component: "h3", fontWeight: 700, gutterBottom: true, sx: { lineHeight: 1.35 }, children: [index + 1, ". ", obj.title] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { lineHeight: 1.7 }, children: obj.description })] }) }) }, obj.title))) })] }), _jsx(Box, { component: "section", "aria-labelledby": "audiences-heading", sx: { bgcolor: 'action.hover', py: { xs: 6, md: 8 } }, children: _jsxs(Container, { children: [_jsx(Typography, { id: "audiences-heading", variant: "h2", component: "h2", sx: { fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 1 }, children: "Who we serve" }), _jsx(Typography, { color: "text.secondary", sx: { mb: 3, maxWidth: 560, lineHeight: 1.75 }, children: "Our non-formal activities are designed with\u2014and for\u2014people who are often underserved by mainstream provision. Specific cohorts depend on each call; the groups below reflect our organisational focus." }), _jsx(Stack, { component: "ul", "aria-label": "Target audiences", direction: "row", flexWrap: "wrap", useFlexGap: true, spacing: 1.25, sx: { listStyle: 'none', p: 0, m: 0 }, children: targetAudiences.map((label) => (_jsx(Box, { component: "li", sx: { m: 0 }, children: _jsx(Chip, { label: label, sx: {
                                        fontWeight: 600,
                                        borderRadius: 1,
                                        bgcolor: 'background.paper',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                    } }) }, label))) })] }) }), _jsx(Container, { sx: { py: { xs: 6, md: 8 } }, children: _jsxs(Grid, { container: true, spacing: 4, alignItems: "center", children: [_jsxs(Grid, { size: { xs: 12, md: 6 }, children: [_jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 2 }, children: "In practice" }), _jsx(Typography, { color: "text.secondary", sx: { lineHeight: 1.8 }, children: "Workshops, training, and cooperation agreements translate our objectives into concrete activities\u2014in schools, libraries, cultural venues, and international consortia\u2014always underpinned by transparency and professional standards." })] }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Box, { component: "img", src: getImagePath(storyMomentImage), alt: "Facilitators and participants during a MITRA France learning session", sx: {
                                    width: '100%',
                                    borderRadius: 2,
                                    maxHeight: 280,
                                    objectFit: 'cover',
                                    display: 'block',
                                } }) })] }) }), _jsx(Box, { sx: { bgcolor: 'action.hover', py: { xs: 6, md: 8 } }, children: _jsxs(Container, { children: [_jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 1 }, children: "Coordination team" }), _jsx(Typography, { color: "text.secondary", sx: { mb: 4, maxWidth: 560 }, children: "Core contacts for programmes. Avatars are illustrative; for official matters, use the details in Transparency or the Contact page." }), _jsx(Grid, { container: true, spacing: 3, children: teamPreview.map((member) => (_jsx(Grid, { size: { xs: 6, md: 3 }, children: _jsxs(Stack, { spacing: 1.5, alignItems: "center", textAlign: "center", children: [_jsx(Avatar, { src: notionStyleAvatarUrl(member.name), alt: "", variant: "circular", sx: {
                                                width: 88,
                                                height: 88,
                                                bgcolor: 'grey.100',
                                                border: '1px solid',
                                                borderColor: 'divider',
                                            } }), _jsx(Typography, { fontWeight: 700, component: "p", children: member.name }), _jsx(Typography, { variant: "body2", color: "text.secondary", component: "p", children: member.role })] }) }, member.name))) }), _jsx(Box, { sx: { textAlign: 'center', mt: 3 }, children: _jsx(Button, { component: RouterLink, to: "/contact", variant: "text", endIcon: _jsx(ArrowForwardIcon, {}), children: "Contact the team" }) })] }) }), _jsxs(Container, { sx: { py: { xs: 6, md: 8 } }, children: [_jsxs(Stack, { direction: "row", spacing: 1, alignItems: "center", sx: { mb: 2 }, children: [_jsx(HandshakeIcon, { color: "primary", "aria-hidden": true }), _jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700 }, children: "Institutional partners (examples)" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2, maxWidth: 640, lineHeight: 1.75 }, children: "We cooperate with universities, cultural institutions, schools, libraries, and civic hubs in Nice and the wider region." }), _jsx(Box, { sx: { display: 'flex', flexWrap: 'wrap', gap: 1 }, children: partnerNames.map((name) => (_jsx(Chip, { label: name, variant: "outlined", size: "small", sx: { borderRadius: 1 } }, name))) }), _jsx(Button, { component: RouterLink, to: "/partners", sx: { mt: 2 }, size: "small", endIcon: _jsx(ArrowForwardIcon, {}), children: "Partners & collaborations" })] }), _jsx(Box, { component: "section", "aria-labelledby": "transparency-heading", sx: {
                    py: { xs: 6, md: 8 },
                    borderTop: 1,
                    borderBottom: 1,
                    borderColor: 'divider',
                    bgcolor: 'background.default',
                }, children: _jsxs(Container, { children: [_jsxs(Stack, { direction: "row", spacing: 1.5, alignItems: "center", sx: { mb: 2, color: 'primary.main' }, children: [_jsx(Box, { component: "span", sx: { display: 'flex' }, "aria-hidden": true, children: _jsx(ShieldCheck, { size: 26, strokeWidth: 1.75 }) }), _jsx(Typography, { id: "transparency-heading", variant: "h2", component: "h2", sx: { fontSize: { xs: '1.35rem', md: '1.5rem' }, fontWeight: 700 }, children: "Transparency" })] }), _jsxs(Typography, { color: "text.secondary", sx: { mb: 3, maxWidth: 720, lineHeight: 1.75 }, children: ["MITRA FRANCE is registered and active in ", _jsx("strong", { children: "Nice, France" }), ". For European programmes and reporting, our organisation uses the following official identifiers:"] }), _jsxs(Box, { component: "dl", sx: {
                                display: 'grid',
                                gap: 2,
                                maxWidth: 480,
                                m: 0,
                            }, children: [_jsx(Typography, { component: "dt", variant: "body2", sx: { fontWeight: 700, color: 'text.secondary' }, children: "Participant Identification Code (PIC)" }), _jsx(Typography, { component: "dd", variant: "body1", sx: { m: 0, fontWeight: 600 }, children: ORG_PIC }), _jsx(Typography, { component: "dt", variant: "body2", sx: { fontWeight: 700, color: 'text.secondary' }, children: "Organisation ID (OID)" }), _jsx(Typography, { component: "dd", variant: "body1", sx: { m: 0, fontWeight: 600 }, children: ORG_OID })] })] }) }), _jsxs(Container, { component: "section", "aria-labelledby": "faq-heading", sx: { py: { xs: 6, md: 8 } }, children: [_jsx(Typography, { id: "faq-heading", variant: "h2", sx: { fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 3 }, children: "Frequently asked questions" }), _jsx(Box, { sx: { maxWidth: 720 }, children: faqItems.map((item) => (_jsxs(Accordion, { disableGutters: true, elevation: 0, sx: {
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: 1,
                                mb: 1,
                                '&:before': { display: 'none' },
                            }, children: [_jsx(AccordionSummary, { expandIcon: _jsx(ExpandMoreIcon, {}), children: _jsx(Typography, { fontWeight: 600, component: "span", children: item.q }) }), _jsx(AccordionDetails, { children: _jsx(Typography, { color: "text.secondary", component: "p", sx: { lineHeight: 1.75 }, children: item.a }) })] }, item.q))) })] }), _jsx(Box, { component: "section", sx: {
                    py: { xs: 8, md: 10 },
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.06) 0%, rgba(237, 41, 57, 0.04) 100%)',
                }, children: _jsx(Container, { maxWidth: "sm", children: _jsxs(Stack, { spacing: 2, alignItems: "center", textAlign: "center", children: [_jsx(Typography, { variant: "h5", component: "h2", fontWeight: 800, children: "Collaborate or request information" }), _jsx(Typography, { color: "text.secondary", component: "p", children: "Send a short message through our contact form\u2014we respond with clear next steps." }), _jsx(Button, { component: RouterLink, to: "/contact", variant: "contained", size: "large", endIcon: _jsx(ArrowForwardIcon, {}), sx: { px: 4, py: 1.25, fontWeight: 700, borderRadius: 2 }, children: "Contact" })] }) }) })] }));
}
