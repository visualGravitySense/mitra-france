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
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InputAdornment from '@mui/material/InputAdornment';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Link as RouterLink } from 'react-router-dom';
import { getImagePath } from '../utils/imagePath';
const eventList = [
    {
        id: '1',
        title: 'Digital Skills for Seniors',
        kind: 'workshop',
        categoryLabel: 'Seniors',
        description: 'Smartphones, safe browsing, and useful apps — step by step.',
        photo: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
        date: '15 February 2024',
        time: '10:00–12:00',
        location: 'Le 109, Nice',
        status: 'upcoming',
    },
    {
        id: '2',
        title: 'Media Literacy Workshop',
        kind: 'workshop',
        categoryLabel: 'Media',
        description: 'Sources, bias, and what to check before you share.',
        photo: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
        date: '20 February 2024',
        time: '14:00–16:00',
        location: 'Villa Ephrussi, Nice area',
        status: 'upcoming',
    },
    {
        id: '3',
        title: 'Creative Writing for Youth',
        kind: 'training',
        categoryLabel: 'Youth',
        description: 'Short fiction and storytelling in a supportive group.',
        photo: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
        date: '28 January 2024',
        time: '15:00–17:00',
        location: 'Le HUBLOT, Nice',
        status: 'past',
    },
    {
        id: '4',
        title: 'Digital Photography Basics',
        kind: 'training',
        categoryLabel: 'Digital',
        description: 'Composition, light, and simple editing for beginners.',
        photo: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
        date: '20 January 2024',
        time: '10:00–13:00',
        location: 'Le 109, Nice',
        status: 'past',
    },
    {
        id: '5',
        title: 'Civic dialogue & Erasmus+ info morning',
        kind: 'conference',
        categoryLabel: 'Conference',
        description: 'Short talks, Q&A, and networking for schools and NGOs.',
        photo: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
        date: '8 March 2024',
        time: '09:30–12:30',
        location: 'Nice (venue TBC)',
        status: 'upcoming',
    },
];
const kindFilters = [
    { value: 'all', label: 'All' },
    { value: 'workshop', label: 'Workshops' },
    { value: 'training', label: 'Training' },
    { value: 'conference', label: 'Conferences' },
];
const heroBg = '/photos/584326681_1157904053184266_2071216266526493174_n.jpg';
export default function Events() {
    const [kind, setKind] = useState('all');
    const [query, setQuery] = useState('');
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const filtered = useMemo(() => {
        let list = eventList;
        if (kind !== 'all')
            list = list.filter((e) => e.kind === kind);
        const q = query.trim().toLowerCase();
        if (q) {
            list = list.filter((e) => e.title.toLowerCase().includes(q) ||
                e.description.toLowerCase().includes(q) ||
                e.location.toLowerCase().includes(q) ||
                e.categoryLabel.toLowerCase().includes(q));
        }
        return list;
    }, [kind, query]);
    const upcomingDates = useMemo(() => eventList
        .filter((e) => e.status === 'upcoming')
        .map((e) => ({ id: e.id, date: e.date, title: e.title })), []);
    const handleKind = (_, value) => {
        if (value != null)
            setKind(value);
    };
    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email.trim())
            return;
        setSubscribed(true);
        setEmail('');
    };
    return (_jsxs(Box, { component: "main", children: [_jsxs(Box, { sx: {
                    position: 'relative',
                    pt: { xs: 12, md: 14 },
                    pb: { xs: 6, md: 8 },
                    overflow: 'hidden',
                }, children: [_jsx(Box, { sx: {
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `url(${getImagePath(heroBg)})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(90deg, rgba(0,26,60,0.85) 0%, rgba(0,26,60,0.55) 55%, rgba(0,26,60,0.35) 100%)',
                            },
                        } }), _jsxs(Container, { maxWidth: "lg", sx: { position: 'relative', zIndex: 1 }, children: [_jsx(Typography, { variant: "h1", sx: {
                                    fontSize: { xs: '1.85rem', md: '2.4rem' },
                                    fontWeight: 800,
                                    color: 'common.white',
                                    textShadow: '0 2px 12px rgba(0,0,0,0.35)',
                                    mb: 1.5,
                                    maxWidth: 560,
                                }, children: "Our upcoming events" }), _jsx(Typography, { sx: {
                                    color: 'rgba(255,255,255,0.92)',
                                    maxWidth: 520,
                                    lineHeight: 1.7,
                                    textShadow: '0 1px 8px rgba(0,0,0,0.35)',
                                }, children: "Dates, places, and how to register \u2014 filter by format or search by keyword." })] })] }), _jsx(Container, { maxWidth: "lg", sx: { py: { xs: 4, md: 5 } }, children: _jsxs(Grid, { container: true, spacing: 3, children: [_jsxs(Grid, { size: { xs: 12, md: 8 }, children: [_jsxs(Stack, { spacing: 2, sx: { mb: 3 }, children: [_jsx(TextField, { size: "small", fullWidth: true, placeholder: "Search title, topic, place\u2026", value: query, onChange: (e) => setQuery(e.target.value), InputProps: {
                                                startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(SearchIcon, { color: "action", fontSize: "small" }) })),
                                            } }), _jsx(Box, { sx: { overflowX: 'auto' }, children: _jsx(ToggleButtonGroup, { value: kind, exclusive: true, onChange: handleKind, size: "small", sx: {
                                                    flexWrap: 'wrap',
                                                    gap: 0.5,
                                                    '& .MuiToggleButton-root': { textTransform: 'none', borderRadius: '999px !important', px: 1.5 },
                                                }, children: kindFilters.map((opt) => (_jsx(ToggleButton, { value: opt.value, children: opt.label }, opt.value))) }) })] }), _jsx(Grid, { container: true, spacing: 2, children: filtered.map((ev) => (_jsx(Grid, { size: { xs: 12, sm: 6 }, children: _jsxs(Card, { variant: "outlined", sx: { borderRadius: 2, height: '100%', display: 'flex', flexDirection: 'column' }, children: [_jsx(Box, { component: "img", src: getImagePath(ev.photo), alt: "", sx: {
                                                        width: '100%',
                                                        height: 120,
                                                        objectFit: 'cover',
                                                        flexShrink: 0,
                                                    } }), _jsxs(CardContent, { sx: { pt: 1.5, pb: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }, children: [_jsxs(Stack, { direction: "row", spacing: 0.5, flexWrap: "wrap", useFlexGap: true, sx: { mb: 1 }, children: [_jsx(Chip, { size: "small", label: ev.categoryLabel, variant: "outlined" }), ev.status === 'past' && _jsx(Chip, { size: "small", label: "Past" })] }), _jsx(Typography, { variant: "subtitle1", fontWeight: 700, sx: { mb: 1, lineHeight: 1.3 }, children: ev.title }), _jsxs(Stack, { spacing: 0.25, sx: { mb: 1, typography: 'caption', color: 'text.secondary' }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 600, color: 'primary.main' }, children: [_jsx(CalendarTodayIcon, { sx: { fontSize: 14 } }), ev.date, _jsx(AccessTimeIcon, { sx: { fontSize: 14, ml: 1 } }), ev.time] }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'flex-start', gap: 0.5 }, children: [_jsx(LocationOnIcon, { sx: { fontSize: 14, mt: '2px' } }), ev.location] })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: {
                                                                mb: 2,
                                                                flexGrow: 1,
                                                                display: '-webkit-box',
                                                                WebkitLineClamp: 2,
                                                                WebkitBoxOrient: 'vertical',
                                                                overflow: 'hidden',
                                                                lineHeight: 1.5,
                                                            }, children: ev.description }), _jsx(Button, { component: RouterLink, to: "/contact", variant: ev.status === 'upcoming' ? 'contained' : 'outlined', size: "small", endIcon: _jsx(ArrowForwardIcon, {}), sx: { alignSelf: 'flex-start' }, children: ev.status === 'upcoming' ? 'Register' : 'Ask next dates' })] })] }) }, ev.id))) }), filtered.length === 0 && (_jsx(Typography, { color: "text.secondary", sx: { py: 4 }, children: "No events match \u2014 try another filter or search." }))] }), _jsx(Grid, { size: { xs: 12, md: 4 }, children: _jsx(Card, { variant: "outlined", sx: { borderRadius: 2, position: { md: 'sticky' }, top: { md: 96 } }, children: _jsxs(CardContent, { children: [_jsxs(Typography, { variant: "subtitle1", fontWeight: 700, gutterBottom: true, sx: { display: 'flex', alignItems: 'center', gap: 1 }, children: [_jsx(CalendarTodayIcon, { color: "primary", fontSize: "small" }), "Coming up"] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "Quick view of scheduled items \u2014 confirm details when you register." }), _jsx(Stack, { spacing: 1.5, children: upcomingDates.map((row) => (_jsxs(Box, { sx: { py: 1, borderBottom: '1px solid', borderColor: 'divider', '&:last-of-type': { borderBottom: 'none' } }, children: [_jsx(Typography, { variant: "caption", color: "primary", fontWeight: 700, children: row.date }), _jsx(Typography, { variant: "body2", fontWeight: 600, children: row.title })] }, row.id))) }), _jsx(Button, { component: RouterLink, to: "/gallery", size: "small", sx: { mt: 2 }, endIcon: _jsx(ArrowForwardIcon, {}), children: "Photos in Gallery" })] }) }) })] }) }), _jsx(Box, { sx: { bgcolor: 'action.hover', py: { xs: 5, md: 6 } }, children: _jsxs(Container, { maxWidth: "sm", children: [_jsx(Typography, { variant: "subtitle1", fontWeight: 700, gutterBottom: true, align: "center", children: "Hear about new events first" }), _jsx(Typography, { variant: "body2", color: "text.secondary", align: "center", sx: { mb: 2 }, children: "Leave your email \u2014 we send dates and openings (no spam)." }), _jsx(Box, { component: "form", onSubmit: handleSubscribe, children: _jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 1, children: [_jsx(TextField, { fullWidth: true, size: "small", type: "email", placeholder: "you@example.com", value: email, onChange: (e) => setEmail(e.target.value), autoComplete: "email" }), _jsx(Button, { type: "submit", variant: "contained", sx: { flexShrink: 0 }, children: "OK" })] }) })] }) }), _jsx(Snackbar, { open: subscribed, autoHideDuration: 4000, onClose: () => setSubscribed(false), anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, children: _jsx(Alert, { onClose: () => setSubscribed(false), severity: "success", variant: "filled", sx: { width: '100%' }, children: "Thanks \u2014 we\u2019ll keep you posted." }) })] }));
}
