import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link as RouterLink } from 'react-router-dom';
import { getImagePath } from '../utils/imagePath';
const teamMembers = [
    {
        name: 'Pavel Smulski',
        role: 'Leader & Founder',
        leadership: true,
        teaser: 'Founder of MITRA France with 10+ years in youth work and European education projects. He steers our strategy and Erasmus+ partnerships.',
        bio: 'Founder and leader of MITRA FRANCE, driving our mission and vision forward with over 10 years of experience in youth work and education.',
        quote: 'I believe in the power of digital education to transform communities across Europe.',
        expertise: ['Leadership', 'Strategic Planning', 'Erasmus+ Projects'],
        portraitPath: '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
    },
    {
        name: 'Karina Tronche',
        role: 'Core Team',
        leadership: true,
        teaser: 'Coordinates educational programmes and projects, with a focus on adult education and digital skills.',
        bio: 'Key contributor to our educational programs and project management, specializing in adult education and digital skills training.',
        quote: 'Education is the bridge that connects diverse communities and empowers individuals.',
        expertise: ['Project Management', 'Adult Education', 'Digital Skills'],
        portraitPath: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
    },
    {
        name: 'Louise Papadoperakis',
        role: 'Core Team',
        teaser: 'Intercultural education and community engagement — building bridges between diverse groups.',
        bio: 'Specialist in intercultural education and community engagement, passionate about building bridges between diverse communities.',
        quote: 'Building bridges between cultures is the foundation of a stronger Europe.',
        expertise: ['Intercultural Education', 'Community Engagement', 'Cultural Programs'],
        portraitPath: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
    },
    {
        name: 'Alex Smulski',
        role: 'Core Team',
        teaser: 'Digital literacy and media education — designing hands-on learning with technology.',
        bio: 'Expert in digital literacy and media education programs, developing innovative approaches to technology-based learning.',
        quote: 'Technology opens doors to learning that were never possible before.',
        expertise: ['Digital Literacy', 'Media Education', 'Technology Training'],
        portraitPath: '/photos/583741041_1157902773184394_5619801435922057517_n.jpg',
    },
];
const atmospherePhotos = [
    { src: '/photos/584326681_1157904053184266_2071216266526493174_n.jpg', caption: 'Workshop' },
    { src: '/photos/583943471_1157911509850187_2575083228465038744_n.jpg', caption: 'Training' },
    { src: '/photos/572851437_1143811217926883_7725194936764095335_n.jpg', caption: 'Team session' },
    { src: '/photos/571419367_1143811194593552_6930038688628840775_n.jpg', caption: 'Community' },
    { src: '/photos/583489432_1157911303183541_1292926580526900497_n.jpg', caption: 'Project work' },
];
export default function Team() {
    const [dialogMember, setDialogMember] = useState(null);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const leaders = teamMembers.filter((m) => m.leadership);
    const carouselLen = atmospherePhotos.length;
    const goCarousel = (delta) => {
        setCarouselIndex((i) => (i + delta + carouselLen) % carouselLen);
    };
    return (_jsxs(Box, { component: "main", children: [_jsx(Box, { sx: { pt: { xs: 12, sm: 14, md: 16 }, pb: { xs: 4, md: 6 } }, children: _jsxs(Container, { maxWidth: "md", children: [_jsx(Typography, { variant: "h1", sx: {
                                fontSize: { xs: '1.85rem', md: '2.35rem' },
                                fontWeight: 800,
                                textAlign: 'center',
                                mb: 2,
                            }, children: "The people behind MITRA France" }), _jsx(Typography, { color: "text.secondary", sx: { textAlign: 'center', lineHeight: 1.75, maxWidth: 560, mx: 'auto' }, children: "A small core team and many collaborators in Nice and across Europe. Tap a photo to read more." })] }) }), _jsxs(Container, { sx: { pb: { xs: 5, md: 7 } }, children: [_jsx(Typography, { variant: "overline", sx: { color: 'primary.main', fontWeight: 700, letterSpacing: 1, display: 'block', mb: 2 }, children: "Leadership" }), _jsx(Grid, { container: true, spacing: 3, children: leaders.map((member) => (_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Card, { variant: "outlined", sx: { borderRadius: 2, height: '100%' }, children: _jsx(CardContent, { sx: { p: { xs: 2, sm: 3 } }, children: _jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 2.5, alignItems: { xs: 'center', sm: 'flex-start' }, children: [_jsx(Avatar, { src: getImagePath(member.portraitPath), alt: member.name, sx: { width: 96, height: 96 } }), _jsxs(Stack, { spacing: 1, sx: { flex: 1, textAlign: { xs: 'center', sm: 'left' } }, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle1", fontWeight: 800, children: member.name }), _jsx(Typography, { variant: "body2", color: "primary.main", fontWeight: 600, children: member.role })] }), _jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { fontStyle: 'italic', lineHeight: 1.6 }, children: ["\u201C", member.quote, "\u201D"] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { lineHeight: 1.65 }, children: member.teaser }), _jsx(Button, { size: "small", variant: "text", onClick: () => setDialogMember(member), sx: { alignSelf: { xs: 'center', sm: 'flex-start' } }, children: "Read full bio" })] })] }) }) }) }, member.name))) })] }), _jsx(Box, { sx: { bgcolor: 'action.hover', py: { xs: 6, md: 8 } }, children: _jsxs(Container, { children: [_jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '1.4rem', md: '1.6rem' }, fontWeight: 700, mb: 3 }, children: "Core team" }), _jsx(Grid, { container: true, spacing: 2, children: teamMembers.map((member) => (_jsx(Grid, { size: { xs: 6, sm: 4, md: 3 }, children: _jsx(Card, { variant: "outlined", sx: {
                                        borderRadius: 2,
                                        cursor: 'pointer',
                                        transition: 'box-shadow 0.2s, border-color 0.2s',
                                        '&:hover': { boxShadow: 2, borderColor: 'primary.main' },
                                    }, onClick: () => setDialogMember(member), children: _jsxs(CardContent, { sx: { py: 2.5, px: 2, textAlign: 'center' }, children: [_jsx(Avatar, { src: getImagePath(member.portraitPath), alt: member.name, sx: { width: 72, height: 72, mx: 'auto', mb: 1.5 } }), _jsx(Typography, { variant: "body2", fontWeight: 700, children: member.name }), _jsx(Typography, { variant: "caption", color: "text.secondary", display: "block", children: member.role })] }) }) }, member.name))) })] }) }), _jsxs(Container, { sx: { py: { xs: 6, md: 8 } }, children: [_jsx(Typography, { variant: "h2", sx: { fontSize: { xs: '1.4rem', md: '1.6rem' }, fontWeight: 700, mb: 0.5 }, children: "Moments from our work" }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3 }, children: "A few snapshots \u2014 not a full gallery." }), _jsxs(Box, { sx: { position: 'relative', borderRadius: 2, overflow: 'hidden', maxWidth: 720, mx: 'auto' }, children: [_jsx(Box, { component: "img", src: getImagePath(atmospherePhotos[carouselIndex].src), alt: atmospherePhotos[carouselIndex].caption, sx: { width: '100%', height: { xs: 220, sm: 320 }, objectFit: 'cover', display: 'block' } }), _jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", sx: {
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    px: 0.5,
                                    pointerEvents: 'none',
                                    '& .MuiIconButton-root': { pointerEvents: 'auto' },
                                }, children: [_jsx(IconButton, { onClick: () => goCarousel(-1), "aria-label": "Previous photo", sx: { bgcolor: 'background.paper', opacity: 0.92 }, children: _jsx(ChevronLeftIcon, {}) }), _jsx(IconButton, { onClick: () => goCarousel(1), "aria-label": "Next photo", sx: { bgcolor: 'background.paper', opacity: 0.92 }, children: _jsx(ChevronRightIcon, {}) })] }), _jsxs(Box, { sx: { py: 1.5, textAlign: 'center', bgcolor: 'background.paper' }, children: [_jsxs(Typography, { variant: "body2", color: "text.secondary", children: [atmospherePhotos[carouselIndex].caption, " (", carouselIndex + 1, " / ", carouselLen, ")"] }), _jsx(Stack, { direction: "row", spacing: 0.75, justifyContent: "center", sx: { mt: 1 }, children: atmospherePhotos.map((_, i) => (_jsx(Box, { onClick: () => setCarouselIndex(i), sx: {
                                                width: 8,
                                                height: 8,
                                                borderRadius: '50%',
                                                bgcolor: i === carouselIndex ? 'primary.main' : 'action.disabledBackground',
                                                cursor: 'pointer',
                                            } }, i))) })] })] })] }), _jsx(Dialog, { open: dialogMember !== null, onClose: () => setDialogMember(null), maxWidth: "sm", fullWidth: true, scroll: "body", children: dialogMember && (_jsxs(_Fragment, { children: [_jsxs(DialogTitle, { sx: { pr: 6 }, children: [_jsx(Typography, { component: "span", variant: "h6", fontWeight: 800, children: dialogMember.name }), _jsx(Typography, { variant: "body2", color: "primary", fontWeight: 600, children: dialogMember.role }), _jsx(IconButton, { "aria-label": "Close", onClick: () => setDialogMember(null), sx: { position: 'absolute', right: 8, top: 8 }, children: _jsx(CloseIcon, {}) })] }), _jsxs(DialogContent, { dividers: true, children: [_jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 2, sx: { mb: 2 }, children: [_jsx(Avatar, { src: getImagePath(dialogMember.portraitPath), alt: "", sx: { width: 100, height: 100 } }), _jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { fontStyle: 'italic', lineHeight: 1.7 }, children: ["\u201C", dialogMember.quote, "\u201D"] })] }), _jsx(Typography, { variant: "body2", sx: { lineHeight: 1.8, mb: 2 }, children: dialogMember.bio }), _jsx(Typography, { variant: "caption", color: "text.secondary", display: "block", sx: { mb: 1 }, children: "Focus areas" }), _jsx(Stack, { direction: "row", flexWrap: "wrap", gap: 0.75, children: dialogMember.expertise.map((tag) => (_jsx(Chip, { label: tag, size: "small", variant: "outlined" }, tag))) })] })] })) }), _jsx(Box, { sx: {
                    py: { xs: 8, md: 10 },
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(237, 41, 57, 0.06) 100%)',
                }, children: _jsx(Container, { maxWidth: "sm", children: _jsxs(Stack, { spacing: 2, alignItems: "center", textAlign: "center", children: [_jsx(Typography, { variant: "h5", fontWeight: 800, children: "Want to work or volunteer with us?" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Tell us what you do and how you can contribute \u2014 we will follow up from Nice." }), _jsx(Button, { component: RouterLink, to: "/contact", variant: "contained", size: "large", endIcon: _jsx(ArrowForwardIcon, {}), sx: { px: 4, py: 1.35, fontWeight: 700, borderRadius: 2 }, children: "Become part of the team" })] }) }) })] }));
}
