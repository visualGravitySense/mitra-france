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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';
import { getImagePath } from '../utils/imagePath';
const ka2Images = [
    '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
    '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
    '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
    '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
    '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
];
const ka1Images = [
    '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
    '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
    '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
    '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
];
const partnershipImages = '/photos/584326681_1157904053184266_2071216266526493174_n.jpg';
const projectEntries = [
    {
        id: 'k2-1',
        title: 'Media literacy in adult education',
        period: '2016–2018',
        status: 'Completed',
        summary: 'Media literacy with adult learners through new teaching formats and peer exchange.',
        category: 'ka2',
        focus: 'Adult education, media',
        image: ka2Images[0],
    },
    {
        id: 'k2-2',
        title: 'Digital Senior Citizen',
        period: '2018–2020',
        status: 'Completed',
        summary: 'Digital everyday skills for older adults — devices, safety, and confidence online.',
        category: 'ka2',
        focus: 'Digital literacy, seniors',
        image: ka2Images[1],
    },
    {
        id: 'k2-3',
        title: 'Cultural regeneration',
        period: '2018–2020',
        status: 'Completed',
        summary: 'Heritage and neighbourhoods: communities reclaiming local culture together.',
        category: 'ka2',
        focus: 'Culture, community',
        image: ka2Images[2],
    },
    {
        id: 'k2-4',
        title: 'Media and information literacy',
        period: '2018–2020',
        status: 'Completed',
        summary: 'Critical thinking for the information landscape — classrooms, workshops, toolkits.',
        category: 'ka2',
        focus: 'Media literacy',
        image: ka2Images[3],
    },
    {
        id: 'k2-5',
        title: 'Cultural Heritage for Youth',
        period: '2020–2022',
        status: 'Completed',
        summary: 'Young people meet heritage through media, storytelling, and European partners.',
        category: 'ka2',
        focus: 'Youth, heritage, media',
        image: ka2Images[4],
    },
    {
        id: 'k1-1',
        title: 'Multimedia literacy',
        period: '2017',
        status: 'Completed',
        summary: 'Training in multimedia production and digital storytelling for educators.',
        category: 'ka1',
        focus: 'Multimedia',
        image: ka1Images[0],
    },
    {
        id: 'k1-2',
        title: 'Look Sharp: fake news',
        period: '2018',
        status: 'Completed',
        summary: 'Fake news and propaganda unpacked for youth and adult groups.',
        category: 'ka1',
        focus: 'Media literacy',
        image: ka1Images[1],
    },
    {
        id: 'k1-3',
        title: 'YouthPass 4 Future',
        period: '2018',
        status: 'Completed',
        summary: 'Youth mobility and recognition of non-formal learning pathways.',
        category: 'ka1',
        focus: 'Youth mobility',
        image: ka1Images[2],
    },
    {
        id: 'k1-4',
        title: 'Look Sharp: media literacy',
        period: '2022',
        status: 'Completed',
        summary: 'Advanced training on analysis of media and online sources.',
        category: 'ka1',
        focus: 'Advanced media literacy',
        image: ka1Images[3],
    },
    ...[
        'Positive emotional life',
        'Legends and fairy tales',
        'Slow food – long life',
        'Critical thinking for seniors',
        'Tell your story',
        'Creative reading and writing',
        'Ethno-design in fashion',
    ].map((title, i) => ({
        id: `p-${i}`,
        title,
        period: 'Partnership',
        status: 'Completed',
        summary: 'Cooperation project with European partners — workshops, exchanges, and shared outputs.',
        category: 'partnership',
        focus: 'Partnership',
        image: partnershipImages,
    })),
];
const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'ka2', label: 'Erasmus+ KA2' },
    { value: 'ka1', label: 'Erasmus+ KA1' },
    { value: 'partnership', label: 'Partnerships' },
];
const featuredStories = [
    {
        title: 'Digital Senior Citizen',
        body: 'Seniors in Nice and partner countries learned practical digital skills in mixed groups — from messaging family to spotting scams. The project showed that patience and peer support matter as much as the curriculum.',
        image: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
        tag: 'Inclusion · 200+ participants',
    },
    {
        title: 'Cultural Heritage for Youth',
        body: 'Young participants connected with heritage through film, social content, and site visits. Partners co-created short formats that made history feel relevant rather than “museum-only”.',
        image: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
        tag: 'Youth · Heritage · Media',
    },
];
const INITIAL = 3;
const STEP = 3;
function categoryLabel(c) {
    if (c === 'ka2')
        return 'KA2';
    if (c === 'ka1')
        return 'KA1';
    return 'Partnership';
}
export default function Projects() {
    const [filter, setFilter] = useState('all');
    const [visibleCount, setVisibleCount] = useState(INITIAL);
    const filtered = useMemo(() => (filter === 'all' ? projectEntries : projectEntries.filter((p) => p.category === filter)), [filter]);
    const visible = filtered.slice(0, visibleCount);
    const canLoadMore = visibleCount < filtered.length;
    const handleFilter = (_, value) => {
        if (value == null)
            return;
        setFilter(value);
        setVisibleCount(INITIAL);
    };
    return (_jsxs(Box, { component: "main", children: [_jsx(Box, { sx: {
                    pt: { xs: 12, sm: 14, md: 16 },
                    pb: { xs: 4, md: 5 },
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsx(Typography, { variant: "h1", sx: { fontSize: { xs: '1.85rem', md: '2.35rem' }, fontWeight: 800, mb: 1.5 }, children: "Our projects" }), _jsx(Typography, { color: "text.secondary", sx: { maxWidth: 640, lineHeight: 1.75 }, children: "A selection of Erasmus+ and partnership work \u2014 deep cases first, more below when you need them." })] }) }), _jsxs(Container, { maxWidth: "lg", sx: { py: { xs: 4, md: 5 } }, children: [_jsx(Box, { sx: { mb: 2, overflowX: 'auto' }, children: _jsx(ToggleButtonGroup, { value: filter, exclusive: true, onChange: handleFilter, size: "small", "aria-label": "Project category", sx: {
                                flexWrap: 'wrap',
                                gap: 0.5,
                                '& .MuiToggleButton-root': { textTransform: 'none', borderRadius: '8px !important', px: 1.25, py: 0.5 },
                            }, children: filterOptions.map((opt) => (_jsx(ToggleButton, { value: opt.value, children: opt.label }, opt.value))) }) }), _jsx(Grid, { container: true, spacing: 2, children: visible.map((p) => (_jsx(Grid, { size: { xs: 12, sm: 6, md: 4 }, children: _jsxs(Card, { variant: "outlined", sx: {
                                    height: '100%',
                                    borderRadius: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'box-shadow 0.2s, border-color 0.2s',
                                    '&:hover': { boxShadow: 2, borderColor: 'primary.main' },
                                }, children: [_jsx(Box, { component: "img", src: getImagePath(p.image), alt: "", sx: { width: '100%', height: 160, objectFit: 'cover' } }), _jsxs(CardContent, { sx: { flexGrow: 1, display: 'flex', flexDirection: 'column', p: 2 }, children: [_jsxs(Stack, { direction: "row", spacing: 0.5, flexWrap: "wrap", useFlexGap: true, sx: { mb: 1 }, children: [_jsx(Chip, { size: "small", label: categoryLabel(p.category), color: "primary", variant: "outlined" }), _jsx(Chip, { size: "small", label: p.status, variant: "outlined" })] }), _jsx(Typography, { variant: "subtitle1", fontWeight: 700, gutterBottom: true, children: p.title }), _jsxs(Typography, { variant: "caption", color: "text.secondary", display: "block", sx: { mb: 1 }, children: [p.period, " \u00B7 ", p.focus] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: {
                                                    flexGrow: 1,
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    lineHeight: 1.55,
                                                    mb: 2,
                                                }, children: p.summary }), _jsx(Button, { component: RouterLink, to: "/project-detail", size: "small", variant: "outlined", endIcon: _jsx(ArrowForwardIcon, {}), sx: { alignSelf: 'flex-start' }, children: "Detail" })] })] }) }, p.id))) }), filtered.length === 0 && (_jsx(Typography, { color: "text.secondary", sx: { py: 4 }, children: "No projects in this filter." })), canLoadMore && (_jsx(Box, { sx: { textAlign: 'center', mt: 3 }, children: _jsx(Button, { variant: "outlined", onClick: () => setVisibleCount((n) => Math.min(n + STEP, filtered.length)), children: "Show more" }) }))] }), _jsx(Box, { sx: { bgcolor: 'action.hover', py: { xs: 5, md: 6 } }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '1.35rem', md: '1.5rem' }, fontWeight: 700, mb: 3 }, children: "Featured success stories" }), _jsx(Grid, { container: true, spacing: 2, children: featuredStories.map((s) => (_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Card, { variant: "outlined", sx: { borderRadius: 2, height: '100%', overflow: 'hidden' }, children: _jsxs(Grid, { container: true, children: [_jsx(Grid, { size: { xs: 12, sm: 5 }, children: _jsx(Box, { component: "img", src: getImagePath(s.image), alt: "", sx: { width: '100%', height: { xs: 200, sm: '100%' }, minHeight: 200, objectFit: 'cover' } }) }), _jsx(Grid, { size: { xs: 12, sm: 7 }, children: _jsxs(CardContent, { sx: { py: 2.5 }, children: [_jsx(Chip, { size: "small", label: s.tag, sx: { mb: 1 } }), _jsx(Typography, { variant: "h6", fontWeight: 700, gutterBottom: true, children: s.title }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { lineHeight: 1.7 }, children: s.body })] }) })] }) }) }, s.title))) })] }) }), _jsx(Container, { maxWidth: "sm", sx: { py: { xs: 6, md: 8 } }, children: _jsxs(Stack, { spacing: 2, alignItems: "center", textAlign: "center", children: [_jsx(Typography, { variant: "h6", fontWeight: 800, children: "Want to start a project with us?" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Share your idea or funding window \u2014 we\u2019ll see how it fits Erasmus+ or local cooperation." }), _jsx(Button, { component: RouterLink, to: "/contact", variant: "contained", size: "large", endIcon: _jsx(ArrowForwardIcon, {}), children: "Get in touch" })] }) })] }));
}
