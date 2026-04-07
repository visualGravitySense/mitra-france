import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { Award, Briefcase, Globe, GraduationCap } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const fontStack = '"Inter", "Geist", system-ui, -apple-system, sans-serif';
function SectionIcon({ icon: Icon }) {
    return (_jsx(Box, { sx: {
            color: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 44,
            height: 44,
            borderRadius: 1.5,
            bgcolor: 'rgba(0, 35, 149, 0.06)',
            flexShrink: 0,
        }, "aria-hidden": true, children: _jsx(Icon, { size: 22, strokeWidth: 1.75 }) }));
}
function SubtleBadge({ label, variant = 'neutral' }) {
    const styles = variant === 'ka1'
        ? { borderColor: 'rgba(0, 35, 149, 0.35)', color: 'primary.dark', bgcolor: 'rgba(0, 35, 149, 0.04)' }
        : variant === 'ka2'
            ? { borderColor: 'rgba(237, 41, 57, 0.35)', color: 'error.dark', bgcolor: 'rgba(237, 41, 57, 0.04)' }
            : variant === 'strategic'
                ? { borderColor: 'rgba(73, 80, 87, 0.35)', color: 'text.secondary', bgcolor: 'grey.50' }
                : { borderColor: 'divider', color: 'text.secondary', bgcolor: 'background.paper' };
    return (_jsx(Chip, { label: label, size: "small", variant: "outlined", sx: {
            ...styles,
            fontWeight: 600,
            fontSize: '0.7rem',
            letterSpacing: 0.4,
            height: 24,
            borderRadius: 1,
        } }));
}
const coordinatorProjects = [
    {
        title: 'Exchange of teaching and learning strategies: media literacy in adult education',
        period: '2016–2018',
    },
    {
        title: 'Digital Senior Citizen',
        period: '2018–2020',
    },
    {
        title: 'Cultural regeneration: heritage of future generations',
        period: '2018–2020',
    },
    {
        title: 'Media and information literacy in adult education',
        period: '2018–2020',
    },
    {
        title: 'Cultural Heritage for Youth Economic Empowerment',
        period: '2020–2022',
    },
];
const ka1Mobilities = [
    { title: 'Multimedia literacy: visual tools in youth work', year: '2017' },
    { title: 'Look Sharp: deconstructing fake news', year: '2018' },
    { title: 'YouthPass 4 Future: validation of competences', year: '2018' },
    { title: 'Look Sharp: media literacy in digital education ecosystem', year: '2022' },
];
const partnerProjectTitles = [
    'Positive emotional life for active ageing',
    'Legends and fairy tales',
    'Slow food – long life',
    'Critical thinking for seniors',
    'Ethno – design in fashion',
    'Community learning for healthy ageing',
    'Stories across borders',
    'Food culture and wellbeing',
];
export default function ProjectsExperience() {
    return (_jsxs(Box, { component: "main", sx: {
            fontFamily: fontStack,
            bgcolor: '#ffffff',
            color: 'text.primary',
        }, children: [_jsx(Box, { component: "section", "aria-labelledby": "projects-hero-title", sx: {
                    pt: { xs: 12, md: 14 },
                    pb: { xs: 5, md: 7 },
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                }, children: _jsx(Container, { maxWidth: "lg", children: _jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 3, alignItems: { sm: 'flex-start' }, children: [_jsx(SectionIcon, { icon: Briefcase }), _jsxs(Box, { sx: { flex: 1, minWidth: 0 }, children: [_jsx(Typography, { variant: "overline", sx: { color: 'text.secondary', fontWeight: 700, letterSpacing: 1.2, fontFamily: fontStack }, children: "Erasmus+ track record" }), _jsx(Typography, { id: "projects-hero-title", component: "h1", variant: "h1", sx: {
                                            fontFamily: fontStack,
                                            fontWeight: 800,
                                            fontSize: { xs: '1.85rem', sm: '2.25rem', md: '2.5rem' },
                                            lineHeight: 1.2,
                                            mt: 1,
                                            mb: 2,
                                            letterSpacing: '-0.02em',
                                        }, children: "Projects & Experience" }), _jsxs(Typography, { sx: {
                                            fontFamily: fontStack,
                                            color: 'text.secondary',
                                            fontSize: { xs: '1rem', md: '1.0625rem' },
                                            lineHeight: 1.75,
                                            maxWidth: 720,
                                        }, children: ["MITRA France coordinates and contributes to European cooperation in adult education, youth work, and digital & media literacy. Below is a structured overview of selected Erasmus+ actions \u2014", ' ', _jsx("strong", { children: "KA2 strategic partnerships" }), " where we led the consortium, and", ' ', _jsx("strong", { children: "KA1 mobilities" }), " in youth work \u2014 alongside our role as a", ' ', _jsx("strong", { children: "strategic partner" }), " in partner-led projects."] }), _jsxs(Stack, { direction: "row", flexWrap: "wrap", gap: 1, sx: { mt: 2 }, children: [_jsx(SubtleBadge, { label: "KA2", variant: "ka2" }), _jsx(SubtleBadge, { label: "KA1", variant: "ka1" }), _jsx(SubtleBadge, { label: "Strategic Partnership", variant: "strategic" })] })] })] }) }) }), _jsx(Container, { maxWidth: "lg", component: "section", "aria-labelledby": "expertise-title", sx: { py: { xs: 6, md: 8 } }, children: _jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 2.5, alignItems: "flex-start", sx: { mb: 0 }, children: [_jsx(SectionIcon, { icon: Globe }), _jsxs(Box, { sx: { flex: 1 }, children: [_jsx(Typography, { id: "expertise-title", component: "h2", variant: "h2", sx: {
                                        fontFamily: fontStack,
                                        fontWeight: 700,
                                        fontSize: { xs: '1.35rem', md: '1.5rem' },
                                        mb: 2,
                                    }, children: "Our Expertise" }), _jsx(Typography, { sx: {
                                        fontFamily: fontStack,
                                        color: 'text.secondary',
                                        fontSize: '1.0625rem',
                                        lineHeight: 1.8,
                                        maxWidth: 800,
                                    }, children: "Extensive experience working with diverse groups including adults, youth, NEETs, refugees, migrants, and seniors (60+). Specialized in intercultural and intergenerational cooperation and large-scale project management." })] })] }) }), _jsx(Divider, {}), _jsx(Box, { sx: { bgcolor: '#fafafa', py: { xs: 6, md: 8 } }, component: "section", "aria-labelledby": "ka2-title", children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 2.5, alignItems: "flex-start", sx: { mb: 3 }, children: [_jsx(SectionIcon, { icon: GraduationCap }), _jsxs(Box, { children: [_jsx(Typography, { id: "ka2-title", component: "h2", variant: "h2", sx: {
                                                fontFamily: fontStack,
                                                fontWeight: 700,
                                                fontSize: { xs: '1.35rem', md: '1.5rem' },
                                                mb: 0.5,
                                            }, children: "Coordinator projects (Erasmus+ KA2)" }), _jsx(Typography, { sx: { fontFamily: fontStack, color: 'text.secondary', fontSize: '0.9375rem', lineHeight: 1.6 }, children: "Strategic partnerships coordinated by MITRA France \u2014 development of resources, curricula, and cooperation structures." })] })] }), _jsx(Grid, { container: true, spacing: 2, children: coordinatorProjects.map((p) => (_jsx(Grid, { size: { xs: 12, sm: 6 }, children: _jsx(Card, { variant: "outlined", sx: {
                                        height: '100%',
                                        borderRadius: 2,
                                        borderColor: 'divider',
                                        bgcolor: '#fff',
                                        transition: 'box-shadow 0.2s, border-color 0.2s',
                                        '&:hover': { boxShadow: '0 4px 24px rgba(0,0,0,0.06)', borderColor: 'rgba(0, 35, 149, 0.25)' },
                                    }, children: _jsxs(CardContent, { sx: { p: { xs: 2.5, md: 3 } }, children: [_jsxs(Stack, { direction: "row", flexWrap: "wrap", gap: 0.75, sx: { mb: 1.5 }, children: [_jsx(SubtleBadge, { label: "KA2", variant: "ka2" }), _jsx(SubtleBadge, { label: "Coordinator", variant: "strategic" })] }), _jsx(Typography, { component: "h3", sx: {
                                                    fontFamily: fontStack,
                                                    fontWeight: 600,
                                                    fontSize: '1rem',
                                                    lineHeight: 1.45,
                                                    mb: 1,
                                                }, children: p.title }), _jsx(Typography, { sx: { fontFamily: fontStack, color: 'text.secondary', fontSize: '0.875rem', fontWeight: 500 }, children: p.period })] }) }) }, p.title))) })] }) }), _jsx(Container, { maxWidth: "lg", component: "section", "aria-labelledby": "ka1-title", sx: { py: { xs: 6, md: 8 } }, children: _jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 2.5, alignItems: "flex-start", sx: { mb: 3 }, children: [_jsx(SectionIcon, { icon: Award }), _jsxs(Box, { sx: { flex: 1 }, children: [_jsx(Typography, { id: "ka1-title", component: "h2", variant: "h2", sx: {
                                        fontFamily: fontStack,
                                        fontWeight: 700,
                                        fontSize: { xs: '1.35rem', md: '1.5rem' },
                                        mb: 0.5,
                                    }, children: "Mobility & youth work (KA1)" }), _jsx(Typography, { sx: { fontFamily: fontStack, color: 'text.secondary', fontSize: '0.9375rem', mb: 3 }, children: "Selected learning mobilities and youth-work initiatives connected to media literacy and competence development." }), _jsx(Grid, { container: true, spacing: 1.5, children: ka1Mobilities.map((item) => (_jsx(Grid, { size: { xs: 12, sm: 6 }, children: _jsxs(Box, { sx: {
                                                display: 'flex',
                                                gap: 2,
                                                alignItems: 'flex-start',
                                                p: 2,
                                                borderRadius: 2,
                                                border: '1px solid',
                                                borderColor: 'divider',
                                                bgcolor: '#fff',
                                            }, children: [_jsx(SubtleBadge, { label: "KA1", variant: "ka1" }), _jsxs(Box, { sx: { minWidth: 0 }, children: [_jsx(Typography, { sx: { fontFamily: fontStack, fontWeight: 600, fontSize: '0.9375rem', lineHeight: 1.45 }, children: item.title }), _jsx(Typography, { sx: { fontFamily: fontStack, color: 'text.secondary', fontSize: '0.8125rem', mt: 0.5 }, children: item.year })] })] }) }, item.title))) })] })] }) }), _jsx(Divider, {}), _jsx(Box, { sx: { bgcolor: '#fafafa', py: { xs: 6, md: 8 } }, component: "section", "aria-labelledby": "partner-portfolio-title", children: _jsxs(Container, { maxWidth: "lg", children: [_jsx(Typography, { id: "partner-portfolio-title", component: "h2", variant: "h2", sx: {
                                fontFamily: fontStack,
                                fontWeight: 700,
                                fontSize: { xs: '1.35rem', md: '1.5rem' },
                                mb: 1,
                            }, children: "Participation as a Strategic Partner" }), _jsx(Typography, { sx: {
                                fontFamily: fontStack,
                                color: 'text.secondary',
                                fontSize: '0.9375rem',
                                lineHeight: 1.7,
                                maxWidth: 720,
                                mb: 3,
                            }, children: "MITRA France regularly contributes expertise, dissemination, and field implementation as a partner in consortia led by organisations across Europe. A sample of project themes appears below." }), _jsx(Stack, { component: "ul", "aria-label": "Partner project themes", direction: "row", flexWrap: "wrap", useFlexGap: true, spacing: 1, sx: { listStyle: 'none', p: 0, m: 0 }, children: partnerProjectTitles.map((title) => (_jsx(Box, { component: "li", sx: { m: 0 }, children: _jsx(Chip, { label: title, sx: {
                                        fontFamily: fontStack,
                                        fontWeight: 500,
                                        fontSize: '0.8125rem',
                                        height: 'auto',
                                        py: 0.75,
                                        px: 0.5,
                                        borderRadius: 2,
                                        bgcolor: '#fff',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        '& .MuiChip-label': { whiteSpace: 'normal', textAlign: 'left', lineHeight: 1.35 },
                                    } }) }, title))) })] }) }), _jsx(Container, { maxWidth: "lg", sx: { py: { xs: 6, md: 8 } }, children: _jsxs(Stack, { spacing: 3, alignItems: { xs: 'stretch', sm: 'center' }, textAlign: { xs: 'left', sm: 'center' }, children: [_jsxs(Box, { sx: {
                                alignSelf: { xs: 'stretch', sm: 'center' },
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 1,
                                px: 2.5,
                                py: 1.25,
                                borderRadius: 999,
                                border: '2px solid',
                                borderColor: 'primary.main',
                                bgcolor: 'rgba(0, 35, 149, 0.04)',
                            }, children: [_jsx(Box, { component: "span", sx: { color: 'primary.main', display: 'flex' }, "aria-hidden": true, children: _jsx(Award, { size: 20, strokeWidth: 1.75 }) }), _jsx(Typography, { sx: { fontFamily: fontStack, fontWeight: 700, fontSize: '0.9375rem' }, children: "Proud Member of Youth4Media European Network" })] }), _jsx(Typography, { sx: { fontFamily: fontStack, color: 'text.secondary', maxWidth: 560, mx: 'auto', lineHeight: 1.75 }, children: "For partnership enquiries, open calls, or consortium roles, contact us with a short outline of your organisation and the action you have in mind." }), _jsx(Button, { component: RouterLink, to: "/contact", variant: "contained", size: "large", endIcon: _jsx(ArrowForwardIcon, {}), sx: { alignSelf: { xs: 'stretch', sm: 'center' }, fontFamily: fontStack, fontWeight: 700, px: 3, py: 1.25 }, children: "Contact MITRA France" })] }) })] }));
}
