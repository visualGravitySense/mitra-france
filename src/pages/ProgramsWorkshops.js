import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link as RouterLink } from 'react-router-dom';
import { getImagePath } from '../utils/imagePath';
const programs = [
    {
        id: '1',
        title: 'Digital Skills for Seniors',
        dateLabel: '15 February 2024',
        time: '10:00–12:00',
        location: 'Le 109, Nice',
        blurb: 'Smartphones, safe browsing, and everyday apps — small groups, patient pace.',
        format: 'workshop',
        delivery: 'offline',
        image: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
        status: 'upcoming',
    },
    {
        id: '2',
        title: 'Media Literacy Workshop',
        dateLabel: '20 February 2024',
        time: '14:00–16:00',
        location: 'Villa Ephrussi, Nice area',
        blurb: 'Sources, bias, and practical checks before you share news or video.',
        format: 'workshop',
        delivery: 'offline',
        image: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
        status: 'upcoming',
    },
    {
        id: '3',
        title: 'Intercultural cohort (EU project cycle)',
        dateLabel: 'Sep 2024 – Jun 2025',
        time: 'Sessions twice monthly',
        location: 'Nice + online sync',
        blurb: 'Long-form group for organisations and active citizens working across borders.',
        format: 'longterm',
        delivery: 'hybrid',
        image: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
        status: 'upcoming',
    },
    {
        id: '4',
        title: 'Creative writing for youth',
        dateLabel: '28 January 2024',
        time: '15:00–17:00',
        location: 'Le HUBLOT, Nice',
        blurb: 'Short fiction and storytelling — confidence on the page and in performance.',
        format: 'workshop',
        delivery: 'offline',
        image: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
        status: 'past',
    },
    {
        id: '5',
        title: 'Open digital drop-in',
        dateLabel: 'First Thursday monthly',
        time: '17:30–19:00',
        location: 'Online (link after signup)',
        blurb: 'Bring your device and questions — librarians and trainers on rotation.',
        format: 'workshop',
        delivery: 'online',
        image: '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
        status: 'upcoming',
    },
    {
        id: '6',
        title: 'Photography basics intensive',
        dateLabel: '20 January 2024',
        time: '10:00–13:00',
        location: 'Le 109, Nice',
        blurb: 'Composition, light, and simple editing for community reporters.',
        format: 'workshop',
        delivery: 'offline',
        image: '/photos/583489432_1157911303183541_1292926580526900497_n.jpg',
        status: 'past',
    },
];
const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'workshop', label: 'Workshops' },
    { value: 'longterm', label: 'Long-term' },
    { value: 'online', label: 'Online' },
    { value: 'offline', label: 'On-site' },
];
function matchesFilter(item, f) {
    if (f === 'all')
        return true;
    if (f === 'workshop')
        return item.format === 'workshop';
    if (f === 'longterm')
        return item.format === 'longterm';
    if (f === 'online')
        return item.delivery === 'online' || item.delivery === 'hybrid';
    if (f === 'offline')
        return item.delivery === 'offline' || item.delivery === 'hybrid';
    return true;
}
const heroSidePhotos = [
    '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
    '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
    '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
];
export default function ProgramsWorkshops() {
    const [filter, setFilter] = useState('all');
    const visible = useMemo(() => programs.filter((p) => matchesFilter(p, filter)), [filter]);
    const calendarHighlights = useMemo(() => {
        return programs
            .filter((p) => p.status === 'upcoming')
            .slice(0, 4)
            .map((p) => ({ id: p.id, date: p.dateLabel, title: p.title }));
    }, []);
    const handleFilter = (_, value) => {
        if (value != null)
            setFilter(value);
    };
    return (_jsxs(Box, { component: "main", children: [_jsx(Box, { sx: {
                    pt: { xs: 12, sm: 14, md: 16 },
                    pb: { xs: 6, md: 8 },
                    background: 'linear-gradient(180deg, rgba(0, 35, 149, 0.06) 0%, transparent 100%)',
                }, children: _jsx(Container, { children: _jsxs(Grid, { container: true, spacing: 4, alignItems: "center", children: [_jsxs(Grid, { size: { xs: 12, md: 6 }, children: [_jsx(Typography, { variant: "h1", sx: { fontSize: { xs: '1.85rem', md: '2.35rem' }, fontWeight: 800, mb: 2 }, children: "Programs & workshops" }), _jsx(Typography, { color: "text.secondary", sx: { mb: 3, lineHeight: 1.75, maxWidth: 520 }, children: "One-off workshops and longer cohorts in Nice and online. Check dates below and register for the next session." }), _jsx(Button, { component: "a", href: "#programs-list", variant: "contained", size: "large", endIcon: _jsx(ArrowForwardIcon, {}), sx: { fontWeight: 700, borderRadius: 2 }, children: "View schedule" })] }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Stack, { spacing: 1.5, children: heroSidePhotos.map((src, i) => (_jsx(Box, { component: "img", src: getImagePath(src), alt: "", sx: {
                                            width: '100%',
                                            height: i === 1 ? 200 : 140,
                                            objectFit: 'cover',
                                            borderRadius: 2,
                                            boxShadow: '0 8px 24px rgba(0,35,149,0.15)',
                                        } }, src))) }) })] }) }) }), _jsx(Container, { id: "programs-list", maxWidth: "lg", sx: { py: { xs: 2, md: 4 } }, children: _jsxs(Grid, { container: true, spacing: 3, children: [_jsxs(Grid, { size: { xs: 12, md: 8 }, children: [_jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '1.35rem', md: '1.5rem' }, fontWeight: 700, mb: 2 }, children: "Upcoming & recent" }), _jsx(Box, { sx: { mb: 3, overflowX: 'auto' }, children: _jsx(ToggleButtonGroup, { value: filter, exclusive: true, onChange: handleFilter, size: "small", sx: { flexWrap: 'wrap', gap: 0.5, '& .MuiToggleButton-root': { borderRadius: '8px !important', textTransform: 'none' } }, children: filterOptions.map((opt) => (_jsx(ToggleButton, { value: opt.value, children: opt.label }, opt.value))) }) }), _jsx(Stack, { spacing: 2, children: visible.map((p) => (_jsx(Card, { variant: "outlined", sx: { borderRadius: 2 }, children: _jsxs(Grid, { container: true, children: [_jsx(Grid, { size: { xs: 12, sm: 4 }, children: _jsx(Box, { component: "img", src: getImagePath(p.image), alt: "", sx: { width: '100%', height: { xs: 180, sm: '100%' }, minHeight: 160, objectFit: 'cover' } }) }), _jsx(Grid, { size: { xs: 12, sm: 8 }, children: _jsxs(CardContent, { sx: { height: '100%', display: 'flex', flexDirection: 'column' }, children: [_jsxs(Stack, { direction: "row", spacing: 1, flexWrap: "wrap", sx: { mb: 1 }, children: [_jsx(Chip, { size: "small", label: p.format === 'workshop' ? 'Workshop' : 'Program', variant: "outlined" }), _jsx(Chip, { size: "small", label: p.delivery === 'hybrid' ? 'Hybrid' : p.delivery === 'online' ? 'Online' : 'On-site', color: p.delivery === 'online' ? 'primary' : 'default', variant: p.delivery === 'online' ? 'filled' : 'outlined' }), p.status === 'past' && _jsx(Chip, { size: "small", label: "Past" })] }), _jsx(Typography, { variant: "h6", fontWeight: 700, gutterBottom: true, children: p.title }), _jsxs(Stack, { spacing: 0.5, sx: { mb: 1.5, color: 'text.secondary' }, children: [_jsxs(Typography, { variant: "body2", sx: { display: 'flex', alignItems: 'center', gap: 0.5 }, children: [_jsx(CalendarTodayIcon, { sx: { fontSize: 16 } }), p.dateLabel, p.time && (_jsxs(_Fragment, { children: [_jsx(AccessTimeIcon, { sx: { fontSize: 16, ml: 1 } }), p.time] }))] }), _jsxs(Typography, { variant: "body2", sx: { display: 'flex', alignItems: 'flex-start', gap: 0.5 }, children: [_jsx(LocationOnIcon, { sx: { fontSize: 16, mt: '2px' } }), p.location] })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { flexGrow: 1, lineHeight: 1.65, mb: 2 }, children: p.blurb }), _jsx(Button, { component: RouterLink, to: "/contact", variant: p.status === 'upcoming' ? 'contained' : 'outlined', size: "small", endIcon: _jsx(ArrowForwardIcon, {}), sx: { alignSelf: 'flex-start' }, children: p.status === 'upcoming' ? 'Sign up' : 'Ask about the next date' })] }) })] }) }, p.id))) }), visible.length === 0 && (_jsx(Typography, { color: "text.secondary", sx: { py: 4 }, children: "Nothing in this filter \u2014 try \u201CAll\u201D." }))] }), _jsx(Grid, { size: { xs: 12, md: 4 }, children: _jsx(Card, { variant: "outlined", sx: { borderRadius: 2, position: { md: 'sticky' }, top: { md: 96 } }, children: _jsxs(CardContent, { children: [_jsxs(Typography, { variant: "subtitle1", fontWeight: 700, gutterBottom: true, sx: { display: 'flex', alignItems: 'center', gap: 1 }, children: [_jsx(CalendarTodayIcon, { color: "primary", fontSize: "small" }), "Next dates"] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "Snapshot of upcoming sessions (confirm with us when you register)." }), _jsx(Stack, { spacing: 1.5, children: calendarHighlights.map((row) => (_jsxs(Box, { sx: {
                                                    py: 1,
                                                    borderBottom: '1px solid',
                                                    borderColor: 'divider',
                                                    '&:last-of-type': { borderBottom: 'none', pb: 0 },
                                                }, children: [_jsx(Typography, { variant: "caption", color: "primary", fontWeight: 700, children: row.date }), _jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: row.title })] }, row.id))) }), _jsx(Button, { component: RouterLink, to: "/events", size: "small", sx: { mt: 2 }, endIcon: _jsx(ArrowForwardIcon, {}), children: "Full events page" })] }) }) })] }) })] }));
}
