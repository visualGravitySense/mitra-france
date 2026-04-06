import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CastleIcon from '@mui/icons-material/Castle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MapIcon from '@mui/icons-material/Map';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GroupsIcon from '@mui/icons-material/Groups';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Link as RouterLink } from 'react-router-dom';
import { getImagePath } from '../utils/imagePath';
const localPartners = [
    {
        name: 'Le 109: Pôle de cultures',
        type: 'Cultural Center',
        icon: _jsx(LocationOnIcon, {}),
        photo: getImagePath('/photos/583741041_1157902773184394_5619801435922057517_n.jpg'),
        color: '#ED2939',
        achievement: 'Digital literacy workshops & cultural events',
        mapLocation: 'Nice, France',
    },
    {
        name: 'Le HUBLOT Theater',
        type: 'Theater',
        icon: _jsx(TheaterComedyIcon, {}),
        photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
        color: '#ED2939',
        achievement: 'Youth theater productions & media workshops',
        mapLocation: 'Nice, France',
    },
    {
        name: 'Espace Associations',
        type: 'Community Space',
        icon: _jsx(LocationOnIcon, {}),
        photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
        color: '#002395',
        achievement: 'Community conferences & networking events',
        mapLocation: 'Nice, France',
    },
    {
        name: 'SCREB',
        type: 'Organization',
        icon: _jsx(LocationOnIcon, {}),
        photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
        color: '#ED2939',
        achievement: 'Cultural exchange programs',
        mapLocation: 'Nice, France',
    },
    {
        name: 'Médiathèque Louis Nucéra',
        type: 'Library',
        icon: _jsx(LibraryBooksIcon, {}),
        photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
        color: '#002395',
        achievement: 'Media literacy workshops & reading programs',
        mapLocation: 'Nice, France',
    },
    {
        name: 'Villa Ephrussi de Rothschild',
        type: 'Museum',
        icon: _jsx(CastleIcon, {}),
        photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'),
        color: '#ED2939',
        achievement: 'Heritage education & cultural tours',
        mapLocation: 'Saint-Jean-Cap-Ferrat, France',
    },
];
const educationalInstitutions = [
    { name: "Université Côte d'Azur", type: 'University', icon: _jsx(SchoolIcon, {}) },
    { name: 'Lycée Pasteur', type: 'High School', icon: _jsx(SchoolIcon, {}) },
    { name: 'Community Las Planas', type: 'Community Center', icon: _jsx(LocationOnIcon, {}) },
];
export default function Partners() {
    const [formData, setFormData] = React.useState({
        name: '',
        organization: '',
        email: '',
        message: '',
    });
    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Partnership proposal submitted:', formData);
        // In a real application, this would send the form data to a backend
        alert('Thank you for your partnership proposal! We will contact you soon.');
        setFormData({ name: '', organization: '', email: '', message: '' });
    };
    return (_jsxs(Box, { children: [_jsx(Box, { sx: {
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(237, 41, 57, 0.08) 50%, rgba(0, 35, 149, 0.05) 100%)',
                    pt: { xs: 10, sm: 12, md: 14 }, // Отступ сверху, чтобы контент не скрывался под Header
                    pb: { xs: 6, sm: 8 },
                    mb: { xs: 6, sm: 8 },
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #002395 0%, #ED2939 100%)',
                    },
                }, children: _jsxs(Container, { children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 4, position: 'relative', zIndex: 2 }, children: [_jsx(Chip, { icon: _jsx(HandshakeIcon, {}), label: "Our Network", color: "primary", sx: { mb: 2, fontWeight: 600, fontSize: '0.95rem', py: 2 } }), _jsx(Typography, { variant: "h2", sx: {
                                        mb: 2,
                                        textAlign: 'center',
                                        background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        fontWeight: 800,
                                        position: 'relative',
                                        '&::before, &::after': {
                                            content: '""',
                                            position: 'absolute',
                                            top: '50%',
                                            width: '60px',
                                            height: '2px',
                                            background: '#ED2939',
                                        },
                                        '&::before': {
                                            left: { xs: 'calc(50% - 150px)', md: 'calc(50% - 200px)' },
                                        },
                                        '&::after': {
                                            right: { xs: 'calc(50% - 150px)', md: 'calc(50% - 200px)' },
                                        },
                                    }, children: "Our Partners" }), _jsx(Typography, { variant: "h5", sx: {
                                        textAlign: 'center',
                                        mb: 3,
                                        color: 'text.secondary',
                                        fontWeight: 400,
                                        maxWidth: '800px',
                                        mx: 'auto',
                                    }, children: "We collaborate with local organizations, educational institutions, and European partners to create meaningful impact and drive positive change across communities." }), _jsx(Box, { sx: {
                                        position: 'absolute',
                                        top: { xs: -50, md: -100 },
                                        right: { xs: -100, md: -150 },
                                        width: { xs: 300, md: 500 },
                                        height: { xs: 300, md: 500 },
                                        opacity: 0.15,
                                        zIndex: 0,
                                        pointerEvents: 'none',
                                    }, children: _jsx(Box, { sx: {
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.05) 100%)',
                                            borderRadius: '50%',
                                            position: 'relative',
                                            border: '2px solid rgba(0, 35, 149, 0.2)',
                                        }, children: [
                                            { x: 50, y: 45, country: 'France', photo: getImagePath('/photos/583741041_1157902773184394_5619801435922057517_n.jpg') },
                                            { x: 60, y: 35, country: 'Germany', photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg') },
                                            { x: 65, y: 30, country: 'Ukraine', photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg') },
                                            { x: 25, y: 55, country: 'Spain', photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg') },
                                            { x: 55, y: 25, country: 'Poland', photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg') },
                                            { x: 70, y: 40, country: 'Romania', photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg') },
                                        ].map((point, idx) => (_jsx(Tooltip, { title: _jsxs(Box, { sx: { p: 1 }, children: [_jsx(Typography, { variant: "subtitle2", sx: { fontWeight: 700, mb: 1, color: 'white' }, children: point.country }), _jsx(Box, { component: "img", src: point.photo, alt: point.country, sx: {
                                                            width: 120,
                                                            height: 80,
                                                            objectFit: 'cover',
                                                            borderRadius: 2,
                                                            border: '2px solid white',
                                                        } })] }), arrow: true, placement: "top", children: _jsx(Box, { sx: {
                                                    position: 'absolute',
                                                    left: `${point.x}%`,
                                                    top: `${point.y}%`,
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: '50%',
                                                    backgroundColor: '#ED2939',
                                                    border: '2px solid white',
                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        transform: 'scale(1.5)',
                                                        boxShadow: '0 4px 12px rgba(237, 41, 57, 0.6)',
                                                    },
                                                } }) }, idx))) }) }), _jsxs(Box, { sx: {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: 2,
                                        flexWrap: 'wrap',
                                        mb: 4,
                                    }, children: [_jsx(Chip, { icon: _jsx(CheckCircleIcon, { sx: { color: 'success.main' } }), label: "9+ Local Partners", sx: {
                                                backgroundColor: 'rgba(76, 175, 80, 0.1)',
                                                color: 'success.main',
                                                fontWeight: 600,
                                            } }), _jsx(Chip, { icon: _jsx(TrendingUpIcon, { sx: { color: 'primary.main' } }), label: "15+ European Countries", sx: {
                                                backgroundColor: 'rgba(0, 35, 149, 0.1)',
                                                color: 'primary.main',
                                                fontWeight: 600,
                                            } }), _jsx(Chip, { icon: _jsx(PublicIcon, { sx: { color: 'error.main' } }), label: "50+ Projects", sx: {
                                                backgroundColor: 'rgba(237, 41, 57, 0.1)',
                                                color: 'error.main',
                                                fontWeight: 600,
                                            } })] })] }), _jsx(Grid, { container: true, spacing: 3, sx: { mt: 2, mb: 4 }, children: [
                                {
                                    icon: _jsx(HandshakeIcon, {}),
                                    label: 'Local Partners',
                                    value: '9+',
                                    color: '#002395',
                                    photo: getImagePath('/photos/583741041_1157902773184394_5619801435922057517_n.jpg'),
                                    description: 'Office in Nice',
                                },
                                {
                                    icon: _jsx(SchoolIcon, {}),
                                    label: 'Educational Institutions',
                                    value: '3+',
                                    color: '#ED2939',
                                    photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                                    description: 'Classrooms & Certificates',
                                },
                                {
                                    icon: _jsx(PublicIcon, {}),
                                    label: 'European Network',
                                    value: '15+',
                                    color: '#4CAF50',
                                    photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                                    description: 'International Forum',
                                },
                                {
                                    icon: _jsx(EmojiEventsIcon, {}),
                                    label: 'Active Collaborations',
                                    value: '50+',
                                    color: '#002395',
                                    photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                                    description: 'Partnership Agreements',
                                },
                            ].map((stat) => (_jsx(Grid, { size: { xs: 6, sm: 3 }, children: _jsxs(Card, { sx: {
                                        position: 'relative',
                                        textAlign: 'center',
                                        p: 3,
                                        height: '100%',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        border: '2px solid',
                                        borderColor: `${stat.color}30`,
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            transform: 'translateY(-6px)',
                                            boxShadow: `0 12px 32px ${stat.color}40`,
                                            borderColor: stat.color,
                                            '& .stat-bg': {
                                                transform: 'scale(1.1)',
                                                filter: 'brightness(0.3) blur(0px)',
                                            },
                                        },
                                    }, children: [_jsx(Box, { className: "stat-bg", component: "img", src: stat.photo, alt: stat.label, sx: {
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                filter: 'brightness(0.4) blur(4px) saturate(1.1)',
                                                transition: 'all 0.4s ease',
                                                zIndex: 0,
                                            } }), _jsx(Box, { sx: {
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: `linear-gradient(135deg, ${stat.color}80 0%, ${stat.color}60 100%)`,
                                                zIndex: 1,
                                            } }), _jsxs(Box, { sx: { position: 'relative', zIndex: 2 }, children: [_jsx(Box, { sx: {
                                                        color: 'white',
                                                        mb: 1.5,
                                                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                                                    }, children: stat.icon }), _jsx(Typography, { variant: "h4", sx: {
                                                        color: 'white',
                                                        fontWeight: 800,
                                                        mb: 0.5,
                                                        textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                                                    }, children: stat.value }), _jsx(Typography, { variant: "body2", sx: {
                                                        color: 'white',
                                                        fontWeight: 600,
                                                        textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                                                        mb: 0.5,
                                                    }, children: stat.label }), _jsx(Typography, { variant: "caption", sx: {
                                                        color: 'rgba(255,255,255,0.9)',
                                                        fontStyle: 'italic',
                                                        textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                                                    }, children: stat.description })] })] }) }, stat.label))) }), _jsxs(Box, { sx: { mb: 6, mt: 4 }, children: [_jsx(Typography, { variant: "h6", sx: { textAlign: 'center', mb: 3, fontWeight: 700, color: '#0b1b3a' }, children: "Our Key Partners" }), _jsx(Box, { sx: {
                                        display: 'flex',
                                        gap: 4,
                                        overflowX: 'auto',
                                        pb: 2,
                                        px: 2,
                                        '&::-webkit-scrollbar': {
                                            height: 6,
                                        },
                                        '&::-webkit-scrollbar-track': {
                                            backgroundColor: 'rgba(0,0,0,0.05)',
                                            borderRadius: 3,
                                        },
                                        '&::-webkit-scrollbar-thumb': {
                                            backgroundColor: 'rgba(0, 35, 149, 0.3)',
                                            borderRadius: 3,
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 35, 149, 0.5)',
                                            },
                                        },
                                    }, children: [
                                        { name: 'Erasmus+', logo: '🇪🇺' },
                                        { name: 'Université Côte d\'Azur', logo: '🎓' },
                                        { name: 'Le 109', logo: '🏛️' },
                                        { name: 'Youth4Media', logo: '🌍' },
                                        { name: 'European Commission', logo: '⭐' },
                                        { name: 'Nice City', logo: '🏖️' },
                                    ].map((partner, idx) => (_jsxs(Box, { sx: {
                                            minWidth: 120,
                                            height: 80,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            p: 2,
                                            borderRadius: 2,
                                            backgroundColor: 'white',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer',
                                            filter: 'grayscale(100%) opacity(0.6)',
                                            '&:hover': {
                                                filter: 'grayscale(0%) opacity(1)',
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 20px rgba(0, 35, 149, 0.2)',
                                                borderColor: '#002395',
                                            },
                                        }, children: [_jsx(Typography, { sx: { fontSize: 32, mb: 1 }, children: partner.logo }), _jsx(Typography, { variant: "caption", sx: { textAlign: 'center', fontWeight: 600, color: '#0b1b3a' }, children: partner.name })] }, idx))) })] }), _jsxs(Box, { sx: {
                                textAlign: 'center',
                                p: 5,
                                borderRadius: 4,
                                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)',
                                border: '2px solid',
                                borderColor: 'primary.main',
                                maxWidth: '700px',
                                mx: 'auto',
                                mt: 2,
                                position: 'relative',
                                overflow: 'hidden',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '3px',
                                    background: 'linear-gradient(90deg, #002395 0%, #ED2939 100%)',
                                },
                            }, children: [_jsx(Box, { sx: {
                                        width: 80,
                                        height: 80,
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(0, 35, 149, 0.15)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                        mb: 3,
                                        boxShadow: '0 4px 16px rgba(0, 35, 149, 0.2)',
                                    }, children: _jsx(HandshakeIcon, { sx: { fontSize: 40, color: '#002395' } }) }), _jsx(Typography, { variant: "h5", sx: { mb: 1, fontWeight: 700, color: '#0b1b3a' }, children: "Interested in Partnership?" }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { mb: 4, fontSize: '1.05rem', lineHeight: 1.7 }, children: "We're always open to new partnerships and collaborations. Join our network and create meaningful impact together." }), _jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 2, sx: { justifyContent: 'center' }, children: [_jsx(Button, { component: RouterLink, to: "/contact", variant: "contained", size: "large", endIcon: _jsx(ArrowForwardIcon, {}), sx: {
                                                backgroundColor: '#002395',
                                                color: 'white',
                                                px: 5,
                                                py: 2,
                                                fontWeight: 700,
                                                borderRadius: '25px',
                                                boxShadow: '0 4px 16px rgba(0, 35, 149, 0.4)',
                                                fontSize: '1.1rem',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: '#001a6b',
                                                    transform: 'translateY(-3px)',
                                                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.5)',
                                                    '& .MuiButton-endIcon': {
                                                        transform: 'translateX(6px)',
                                                    },
                                                },
                                                '& .MuiButton-endIcon': {
                                                    transition: 'transform 0.3s ease',
                                                },
                                            }, children: "Become a Partner" }), _jsx(Button, { component: RouterLink, to: "/projects", variant: "outlined", size: "large", sx: {
                                                px: 5,
                                                py: 2,
                                                fontWeight: 600,
                                                borderRadius: '25px',
                                                borderWidth: 2,
                                                borderColor: '#002395',
                                                color: '#002395',
                                                fontSize: '1.1rem',
                                                backgroundColor: 'white',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    borderWidth: 2,
                                                    borderColor: '#002395',
                                                    backgroundColor: 'rgba(0, 35, 149, 0.05)',
                                                    transform: 'translateY(-3px)',
                                                    boxShadow: '0 6px 20px rgba(0, 35, 149, 0.2)',
                                                },
                                            }, children: "View Projects" })] })] }), _jsxs(Typography, { variant: "caption", sx: {
                                textAlign: 'center',
                                color: 'text.secondary',
                                mt: 3,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 0.5,
                            }, children: [_jsx(CheckCircleIcon, { sx: { fontSize: 16, color: 'success.main' } }), "Easy to connect \u2022 Open to collaboration \u2022 Quick response"] })] }) }), _jsxs(Container, { children: [_jsxs(Box, { sx: { mb: 8 }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', mb: 4, gap: 2 }, children: [_jsx(Box, { sx: {
                                            width: 56,
                                            height: 56,
                                            borderRadius: '12px',
                                            backgroundColor: 'rgba(0, 35, 149, 0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'primary.main',
                                        }, children: _jsx(LocationOnIcon, { sx: { fontSize: 32 } }) }), _jsxs(Box, { children: [_jsx(Typography, { variant: "h3", sx: { fontWeight: 600 }, children: "Local Partners" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Our trusted local collaborators in Nice and the C\u00F4te d'Azur region" })] })] }), _jsx(Grid, { container: true, spacing: 3, children: localPartners.map((partner, index) => (_jsx(Grid, { size: { xs: 12, sm: 6, md: 4 }, children: _jsxs(Card, { sx: {
                                            position: 'relative',
                                            height: { xs: 320, sm: 360 },
                                            borderTop: '4px solid',
                                            borderTopColor: partner.color,
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                boxShadow: `0 16px 40px ${partner.color}40`,
                                                '& .partner-bg': {
                                                    transform: 'scale(1.1)',
                                                    filter: 'brightness(0.5) blur(0px)',
                                                },
                                                '& .partner-achievement': {
                                                    opacity: 1,
                                                    transform: 'translateY(0)',
                                                },
                                            },
                                        }, children: [_jsx(Box, { className: "partner-bg", component: "img", src: partner.photo, alt: partner.name, sx: {
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    filter: 'brightness(0.4) blur(3px) saturate(1.1)',
                                                    transition: 'all 0.4s ease',
                                                    zIndex: 0,
                                                } }), _jsx(Box, { sx: {
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background: `linear-gradient(180deg, ${partner.color}90 0%, ${partner.color}70 50%, ${partner.color}95 100%)`,
                                                    zIndex: 1,
                                                } }), _jsxs(CardContent, { sx: {
                                                    p: 3,
                                                    height: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between',
                                                    position: 'relative',
                                                    zIndex: 2,
                                                }, children: [_jsxs(Box, { children: [_jsx(Box, { sx: {
                                                                    color: 'white',
                                                                    mb: 2,
                                                                    fontSize: 48,
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                                                                }, children: partner.icon }), _jsx(Typography, { variant: "h6", gutterBottom: true, sx: {
                                                                    fontWeight: 700,
                                                                    textAlign: 'center',
                                                                    color: 'white',
                                                                    textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                                                                    mb: 1,
                                                                }, children: partner.name }), _jsx(Box, { sx: { display: 'flex', justifyContent: 'center', mb: 2 }, children: _jsx(Chip, { label: partner.type, size: "small", sx: {
                                                                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                                                                        backdropFilter: 'blur(10px)',
                                                                        color: 'white',
                                                                        fontWeight: 700,
                                                                        border: '1px solid rgba(255, 255, 255, 0.3)',
                                                                    } }) })] }), _jsxs(Box, { children: [_jsx(Typography, { className: "partner-achievement", variant: "caption", sx: {
                                                                    display: 'block',
                                                                    textAlign: 'center',
                                                                    color: 'white',
                                                                    fontStyle: 'italic',
                                                                    textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                                                                    mb: 2,
                                                                    opacity: 0,
                                                                    transform: 'translateY(10px)',
                                                                    transition: 'all 0.3s ease',
                                                                }, children: partner.achievement }), _jsx(Button, { size: "small", variant: "contained", startIcon: _jsx(MapIcon, {}), fullWidth: true, onClick: () => {
                                                                    const mapElement = document.querySelector('[id*="map"], [class*="map"]');
                                                                    if (mapElement) {
                                                                        mapElement.scrollIntoView({ behavior: 'smooth' });
                                                                    }
                                                                    else {
                                                                        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(partner.mapLocation)}`, '_blank');
                                                                    }
                                                                }, sx: {
                                                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                                                    color: partner.color,
                                                                    fontWeight: 700,
                                                                    '&:hover': {
                                                                        backgroundColor: 'white',
                                                                        transform: 'translateY(-2px)',
                                                                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                                                    },
                                                                    transition: 'all 0.3s ease',
                                                                }, children: "Show on Map" })] })] }), _jsx(Box, { sx: {
                                                    position: 'absolute',
                                                    bottom: 12,
                                                    right: 12,
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: 2,
                                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                                    backdropFilter: 'blur(10px)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                                    zIndex: 3,
                                                }, children: _jsx(Typography, { sx: { color: 'white', fontSize: 20, fontWeight: 700 }, children: partner.name.charAt(0) }) })] }) }, partner.name))) }), _jsxs(Box, { sx: { mt: 6, mb: 4 }, children: [_jsx(Typography, { variant: "h5", sx: { mb: 3, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }, children: "Partnership in Action" }), _jsx(Grid, { container: true, spacing: 3, children: [
                                            {
                                                photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                                                title: 'Workshop at Médiathèque Louis Nucéra',
                                                description: 'Digital literacy training session',
                                            },
                                            {
                                                photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                                                title: 'Theater Performance at Le HUBLOT',
                                                description: 'Youth media production showcase',
                                            },
                                            {
                                                photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                                                title: 'Conference at Espace Associations',
                                                description: 'Community networking event',
                                            },
                                            {
                                                photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                                                title: 'Cultural Event at Le 109',
                                                description: 'Intercultural dialogue workshop',
                                            },
                                        ].map((item, idx) => (_jsx(Grid, { size: { xs: 12, sm: 6, md: 3 }, children: _jsx(Card, { sx: {
                                                    position: 'relative',
                                                    borderRadius: '20px',
                                                    overflow: 'hidden',
                                                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                                                    transition: 'all 0.4s ease',
                                                    '&:hover': {
                                                        transform: 'translateY(-8px) rotate(1deg)',
                                                        boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
                                                        '& .gallery-photo': {
                                                            transform: 'scale(1.1)',
                                                        },
                                                    },
                                                }, children: _jsxs(Box, { sx: {
                                                        position: 'relative',
                                                        height: 280,
                                                        backgroundColor: 'white',
                                                        p: 2,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                    }, children: [_jsx(Box, { className: "gallery-photo", component: "img", src: item.photo, alt: item.title, sx: {
                                                                width: '100%',
                                                                height: 200,
                                                                objectFit: 'cover',
                                                                borderRadius: 2,
                                                                mb: 2,
                                                                filter: 'brightness(0.95) saturate(1.05)',
                                                                transition: 'transform 0.4s ease',
                                                                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                                            } }), _jsx(Typography, { variant: "body2", sx: {
                                                                fontWeight: 700,
                                                                textAlign: 'center',
                                                                color: '#0b1b3a',
                                                                mb: 0.5,
                                                            }, children: item.title }), _jsx(Typography, { variant: "caption", sx: {
                                                                textAlign: 'center',
                                                                color: 'text.secondary',
                                                                fontStyle: 'italic',
                                                            }, children: item.description })] }) }) }, idx))) })] })] }), _jsx(Divider, { sx: { my: 8 } }), _jsxs(Box, { sx: { mb: 8 }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', mb: 4, gap: 2 }, children: [_jsx(Box, { sx: {
                                            width: 56,
                                            height: 56,
                                            borderRadius: '12px',
                                            backgroundColor: 'rgba(237, 41, 57, 0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'error.main',
                                        }, children: _jsx(SchoolIcon, { sx: { fontSize: 32 } }) }), _jsxs(Box, { children: [_jsx(Typography, { variant: "h3", sx: { fontWeight: 600 }, children: "Educational Institutions" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Academic partners supporting our educational programs" })] })] }), _jsx(Grid, { container: true, spacing: 3, children: educationalInstitutions.map((institution, index) => (_jsx(Grid, { size: { xs: 12, sm: 6, md: 4 }, children: _jsx(Card, { sx: {
                                            height: '100%',
                                            borderTop: '4px solid',
                                            borderTopColor: index % 2 === 0 ? 'error.main' : 'primary.main',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-6px)',
                                                boxShadow: index % 2 === 0
                                                    ? '0 12px 30px rgba(237, 41, 57, 0.2)'
                                                    : '0 12px 30px rgba(0, 35, 149, 0.2)',
                                            },
                                        }, children: _jsxs(CardContent, { sx: { p: 3 }, children: [_jsx(Box, { sx: {
                                                        color: index % 2 === 0 ? 'error.main' : 'primary.main',
                                                        mb: 2,
                                                        fontSize: 48,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }, children: institution.icon }), _jsx(Typography, { variant: "h6", gutterBottom: true, sx: { fontWeight: 600, textAlign: 'center' }, children: institution.name }), _jsx(Box, { sx: { display: 'flex', justifyContent: 'center', mt: 2 }, children: _jsx(Chip, { label: institution.type, size: "small", sx: {
                                                            backgroundColor: index % 2 === 0 ? 'rgba(237, 41, 57, 0.1)' : 'rgba(0, 35, 149, 0.1)',
                                                            color: index % 2 === 0 ? 'error.main' : 'primary.main',
                                                            fontWeight: 600,
                                                        } }) })] }) }) }, institution.name))) })] }), _jsx(Divider, { sx: { my: 8 } }), _jsxs(Box, { sx: { mb: 8 }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', mb: 4, gap: 2 }, children: [_jsx(Box, { sx: {
                                            width: 56,
                                            height: 56,
                                            borderRadius: '12px',
                                            backgroundColor: 'rgba(0, 56, 214, 0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#0038d6',
                                        }, children: _jsx(PublicIcon, { sx: { fontSize: 32 } }) }), _jsxs(Box, { children: [_jsx(Typography, { variant: "h3", sx: { fontWeight: 700, color: '#0b1b3a' }, children: "International Networks & European Partners" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Our extensive network across 15+ European countries" })] })] }), _jsx(Grid, { container: true, spacing: 3, sx: { mb: 6 }, children: [
                                    { icon: _jsx(PublicIcon, {}), label: 'Countries', value: '15+', color: '#ED2939' },
                                    { icon: _jsx(HandshakeIcon, {}), label: 'Partner Organizations', value: '50+', color: '#ED2939' },
                                    { icon: _jsx(DescriptionIcon, {}), label: 'Joint Projects', value: '100+', color: '#ED2939' },
                                ].map((stat, idx) => (_jsx(Grid, { size: { xs: 12, sm: 4 }, children: _jsxs(Card, { sx: {
                                            textAlign: 'center',
                                            p: 3,
                                            borderRadius: 3,
                                            border: '2px solid',
                                            borderColor: `${stat.color}30`,
                                            backgroundColor: `${stat.color}08`,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: `0 8px 24px ${stat.color}30`,
                                                borderColor: stat.color,
                                            },
                                        }, children: [_jsx(Box, { sx: { color: stat.color, mb: 1.5, fontSize: 40 }, children: stat.icon }), _jsx(Typography, { variant: "h3", sx: { color: stat.color, fontWeight: 800, mb: 0.5 }, children: stat.value }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { fontWeight: 600 }, children: stat.label })] }) }, idx))) }), _jsxs(Box, { sx: { mb: 6 }, children: [_jsx(Typography, { variant: "h5", sx: { mb: 3, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }, children: "European Coverage" }), _jsx(Grid, { container: true, spacing: 2, children: [
                                            {
                                                photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                                                title: 'Erasmus+ Group',
                                                description: 'Participants from 10+ countries',
                                                cols: 2,
                                                rows: 2,
                                            },
                                            {
                                                photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                                                title: 'Partnership Agreement',
                                                description: 'Signing ceremony',
                                                cols: 1,
                                                rows: 1,
                                            },
                                            {
                                                photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                                                title: 'Online Conference',
                                                description: 'International collaboration',
                                                cols: 1,
                                                rows: 1,
                                            },
                                            {
                                                photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                                                title: 'Certificate Ceremony',
                                                description: 'Award presentation',
                                                cols: 2,
                                                rows: 1,
                                            },
                                        ].map((item, idx) => (_jsx(Grid, { size: { xs: 12, sm: item.cols === 2 ? 6 : 3, md: item.cols === 2 ? 6 : 3 }, children: _jsxs(Card, { sx: {
                                                    position: 'relative',
                                                    height: item.rows === 2 ? 400 : 200,
                                                    borderRadius: '20px',
                                                    overflow: 'hidden',
                                                    border: '2px solid',
                                                    borderColor: '#002395',
                                                    transition: 'all 0.4s ease',
                                                    '&:hover': {
                                                        transform: 'translateY(-6px)',
                                                        boxShadow: '0 12px 32px rgba(0, 35, 149, 0.3)',
                                                        '& .grid-photo': {
                                                            transform: 'scale(1.1)',
                                                        },
                                                    },
                                                }, children: [_jsx(Box, { className: "grid-photo", component: "img", src: item.photo, alt: item.title, sx: {
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            filter: 'brightness(0.85) saturate(1.1)',
                                                            transition: 'transform 0.4s ease',
                                                        } }), _jsxs(Box, { sx: {
                                                            position: 'absolute',
                                                            bottom: 0,
                                                            left: 0,
                                                            right: 0,
                                                            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 35, 149, 0.9) 100%)',
                                                            p: 2,
                                                        }, children: [_jsx(Typography, { variant: "subtitle1", sx: { fontWeight: 700, color: 'white', mb: 0.5, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }, children: item.title }), _jsx(Typography, { variant: "caption", sx: { color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }, children: item.description })] })] }) }, idx))) })] }), _jsxs(Box, { sx: { mb: 6 }, children: [_jsx(Typography, { variant: "h5", sx: { mb: 3, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }, children: "Our International Partners" }), _jsx(Grid, { container: true, spacing: 3, children: [
                                            {
                                                name: 'Youth4Media Network',
                                                country: '🇩🇪',
                                                countryName: 'Germany',
                                                logo: '🌍',
                                                photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                                                project: 'Media Workshop',
                                            },
                                            {
                                                name: 'Erasmus+ Partners',
                                                country: '🇪🇺',
                                                countryName: 'EU Network',
                                                logo: '⭐',
                                                photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                                                project: 'Digital Inclusion',
                                            },
                                            {
                                                name: 'European Universities',
                                                country: '🇵🇱',
                                                countryName: 'Poland',
                                                logo: '🎓',
                                                photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                                                project: 'Education Exchange',
                                            },
                                            {
                                                name: 'Cultural Organizations',
                                                country: '🇪🇸',
                                                countryName: 'Spain',
                                                logo: '🏛️',
                                                photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                                                project: 'Heritage Programs',
                                            },
                                            {
                                                name: 'Media Literacy Network',
                                                country: '🇫🇷',
                                                countryName: 'France',
                                                logo: '📱',
                                                photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'),
                                                project: 'Media Training',
                                            },
                                            {
                                                name: 'Community Centers',
                                                country: '🇺🇦',
                                                countryName: 'Ukraine',
                                                logo: '🤝',
                                                photo: getImagePath('/photos/583489432_1157911303183541_1292926580526900497_n.jpg'),
                                                project: 'Community Support',
                                            },
                                        ].map((partner, idx) => (_jsx(Grid, { size: { xs: 12, sm: 6, md: 4 }, children: _jsxs(Card, { sx: {
                                                    position: 'relative',
                                                    height: 280,
                                                    borderRadius: 3,
                                                    overflow: 'hidden',
                                                    border: '2px solid',
                                                    borderColor: 'divider',
                                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    cursor: 'pointer',
                                                    '&:hover': {
                                                        transform: 'translateY(-8px)',
                                                        boxShadow: '0 16px 40px rgba(0, 35, 149, 0.25)',
                                                        borderColor: '#002395',
                                                        '& .partner-logo-front': {
                                                            opacity: 0,
                                                            transform: 'rotateY(180deg)',
                                                        },
                                                        '& .partner-logo-back': {
                                                            opacity: 1,
                                                            transform: 'rotateY(0deg)',
                                                        },
                                                    },
                                                }, children: [_jsxs(Box, { className: "partner-logo-front", sx: {
                                                            position: 'absolute',
                                                            inset: 0,
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            backgroundColor: 'white',
                                                            p: 3,
                                                            transition: 'all 0.4s ease',
                                                            zIndex: 2,
                                                        }, children: [_jsx(Typography, { sx: { fontSize: 64, mb: 2 }, children: partner.logo }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 700, color: '#0b1b3a', textAlign: 'center', mb: 1 }, children: partner.name }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1, mt: 2 }, children: [_jsx(Typography, { sx: { fontSize: 24 }, children: partner.country }), _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { fontWeight: 600 }, children: partner.countryName })] })] }), _jsxs(Box, { className: "partner-logo-back", sx: {
                                                            position: 'absolute',
                                                            inset: 0,
                                                            opacity: 0,
                                                            transform: 'rotateY(-180deg)',
                                                            transition: 'all 0.4s ease',
                                                            zIndex: 1,
                                                        }, children: [_jsx(Box, { component: "img", src: partner.photo, alt: partner.project, sx: {
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    objectFit: 'cover',
                                                                    filter: 'brightness(0.7) saturate(1.1)',
                                                                } }), _jsxs(Box, { sx: {
                                                                    position: 'absolute',
                                                                    bottom: 0,
                                                                    left: 0,
                                                                    right: 0,
                                                                    background: 'linear-gradient(180deg, transparent 0%, rgba(0, 35, 149, 0.95) 100%)',
                                                                    p: 2,
                                                                }, children: [_jsx(Typography, { variant: "subtitle1", sx: { fontWeight: 700, color: 'white', mb: 0.5, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }, children: partner.project }), _jsx(Typography, { variant: "caption", sx: { color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }, children: partner.name })] }), _jsx(Box, { sx: {
                                                                    position: 'absolute',
                                                                    top: 12,
                                                                    right: 12,
                                                                    width: 40,
                                                                    height: 40,
                                                                    borderRadius: '50%',
                                                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    fontSize: 24,
                                                                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                                                                }, children: partner.country })] })] }) }, idx))) })] }), _jsxs(Box, { sx: { mb: 6 }, children: [_jsx(Typography, { variant: "h5", sx: { mb: 3, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }, children: "Success Stories in Pictures" }), _jsx(Box, { sx: {
                                            display: 'flex',
                                            gap: 3,
                                            overflowX: 'auto',
                                            pb: 2,
                                            '&::-webkit-scrollbar': {
                                                height: 6,
                                            },
                                            '&::-webkit-scrollbar-track': {
                                                backgroundColor: 'rgba(0,0,0,0.05)',
                                                borderRadius: 3,
                                            },
                                            '&::-webkit-scrollbar-thumb': {
                                                backgroundColor: 'rgba(0, 35, 149, 0.3)',
                                                borderRadius: 3,
                                                '&:hover': {
                                                    backgroundColor: 'rgba(0, 35, 149, 0.5)',
                                                },
                                            },
                                        }, children: [
                                            {
                                                photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                                                title: 'Media Workshop with Youth4Media',
                                                location: 'Germany',
                                                flag: '🇩🇪',
                                            },
                                            {
                                                photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                                                title: 'Digital Inclusion Seminar',
                                                location: 'Poland',
                                                flag: '🇵🇱',
                                            },
                                            {
                                                photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                                                title: 'Cultural Exchange Program',
                                                location: 'Spain',
                                                flag: '🇪🇸',
                                            },
                                            {
                                                photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                                                title: 'Erasmus+ Training Session',
                                                location: 'France',
                                                flag: '🇫🇷',
                                            },
                                        ].map((story, idx) => (_jsxs(Card, { sx: {
                                                minWidth: { xs: 280, sm: 320 },
                                                borderRadius: 3,
                                                overflow: 'hidden',
                                                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                                                transition: 'all 0.4s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-8px)',
                                                    boxShadow: '0 12px 32px rgba(0, 35, 149, 0.3)',
                                                    '& .story-photo': {
                                                        transform: 'scale(1.1)',
                                                    },
                                                },
                                            }, children: [_jsxs(Box, { sx: {
                                                        position: 'relative',
                                                        height: 240,
                                                        overflow: 'hidden',
                                                    }, children: [_jsx(Box, { className: "story-photo", component: "img", src: story.photo, alt: story.title, sx: {
                                                                width: '100%',
                                                                height: '100%',
                                                                objectFit: 'cover',
                                                                filter: 'brightness(0.9) saturate(1.1)',
                                                                transition: 'transform 0.4s ease',
                                                            } }), _jsxs(Box, { sx: {
                                                                position: 'absolute',
                                                                top: 12,
                                                                right: 12,
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: 0.5,
                                                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                                px: 1.5,
                                                                py: 0.5,
                                                                borderRadius: 2,
                                                                fontSize: 20,
                                                            }, children: [_jsx(Typography, { component: "span", children: story.flag }), _jsx(Typography, { variant: "caption", sx: { fontWeight: 700, color: '#0b1b3a' }, children: story.location })] })] }), _jsxs(CardContent, { sx: { p: 2.5 }, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 700, color: '#0b1b3a', mb: 0.5 }, children: story.title }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "International collaboration success story" })] })] }, idx))) })] }), _jsx(Card, { sx: {
                                    borderLeft: '4px solid',
                                    borderLeftColor: '#002395',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 8px 25px rgba(0, 35, 149, 0.15)',
                                    },
                                }, children: _jsxs(CardContent, { sx: { p: 4 }, children: [_jsx(Typography, { variant: "body1", paragraph: true, sx: { fontSize: '1.1rem', lineHeight: 1.8, mb: 3, color: '#0b1b3a' }, children: "Through our participation in Erasmus+ programs, we collaborate with organizations across Europe. Our European network includes:" }), _jsx(Grid, { container: true, spacing: 2, sx: { mb: 3 }, children: [
                                                'Educational institutions and training organizations',
                                                'Non-profit organizations focused on adult education and digital literacy',
                                                'Cultural and media organizations promoting media literacy',
                                                'Youth organizations and community centers',
                                            ].map((item, index) => (_jsx(Grid, { size: { xs: 12, sm: 6 }, children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'flex-start', gap: 1 }, children: [_jsx(CheckCircleIcon, { sx: { color: 'success.main', mt: 0.5, fontSize: 20 } }), _jsx(Typography, { variant: "body1", sx: { lineHeight: 1.8, color: '#0b1b3a' }, children: item })] }) }, index))) }), _jsx(Typography, { variant: "body1", sx: { fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 500, color: '#0b1b3a' }, children: "These partnerships enable us to exchange best practices, develop innovative projects, and create opportunities for cross-cultural learning and collaboration." })] }) })] }), _jsxs(Box, { sx: {
                            background: 'linear-gradient(135deg, #002395 0%, rgba(0, 35, 149, 0.8) 50%, rgba(0, 35, 149, 0.6) 100%)',
                            borderRadius: '20px',
                            p: { xs: 4, md: 6 },
                            mb: 4,
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                background: 'linear-gradient(90deg, #002395 0%, #ED2939 100%)',
                            },
                        }, children: [_jsx(Box, { component: "img", src: getImagePath("/photos/584326681_1157904053184266_2071216266526493174_n.jpg"), alt: "European Partnership", sx: {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    opacity: 0.15,
                                    filter: 'blur(2px) brightness(0.7)',
                                    zIndex: 0,
                                } }), _jsxs(Container, { children: [_jsxs(Grid, { container: true, spacing: 4, sx: { position: 'relative', zIndex: 2 }, children: [_jsxs(Grid, { size: { xs: 12, md: 7 }, children: [_jsx(Chip, { icon: _jsx(HandshakeIcon, {}), label: "Become a Strategic Partner", sx: {
                                                            mb: 3,
                                                            fontWeight: 700,
                                                            fontSize: '0.95rem',
                                                            py: 2,
                                                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                                            backdropFilter: 'blur(10px)',
                                                            color: 'white',
                                                            border: '1px solid rgba(255, 255, 255, 0.3)',
                                                        } }), _jsx(Typography, { variant: "h3", gutterBottom: true, sx: { fontWeight: 800, mb: 2, color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }, children: "Ready to Partner With Us?" }), _jsx(Typography, { variant: "body1", paragraph: true, sx: { mb: 4, maxWidth: '600px', fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.8, textShadow: '0 1px 4px rgba(0,0,0,0.3)' }, children: "Join our network of partners and collaborate on innovative projects that create real impact across Europe. Together, we can achieve more." }), _jsxs(Box, { sx: { mb: 4 }, children: [_jsx(Typography, { variant: "h6", sx: { mb: 3, fontWeight: 700, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }, children: "Partner Journey" }), _jsx(Grid, { container: true, spacing: 2, children: [
                                                                    {
                                                                        step: '1',
                                                                        title: 'Inquiry',
                                                                        icon: _jsx(EmailIcon, {}),
                                                                        photo: getImagePath('/photos/583741041_1157902773184394_5619801435922057517_n.jpg'),
                                                                        description: 'Contact us about partnership',
                                                                    },
                                                                    {
                                                                        step: '2',
                                                                        title: 'Strategy',
                                                                        icon: _jsx(SettingsIcon, {}),
                                                                        photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                                                                        description: 'Develop project roadmap',
                                                                    },
                                                                    {
                                                                        step: '3',
                                                                        title: 'Impact',
                                                                        icon: _jsx(RocketLaunchIcon, {}),
                                                                        photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                                                                        description: 'Create meaningful change',
                                                                    },
                                                                ].map((step, idx) => (_jsx(Grid, { size: { xs: 12, sm: 4 }, children: _jsxs(Card, { sx: {
                                                                            position: 'relative',
                                                                            height: 200,
                                                                            borderRadius: 3,
                                                                            overflow: 'hidden',
                                                                            border: '2px solid rgba(255, 255, 255, 0.3)',
                                                                            transition: 'all 0.4s ease',
                                                                            '&:hover': {
                                                                                transform: 'translateY(-6px)',
                                                                                boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
                                                                                borderColor: 'rgba(255, 255, 255, 0.6)',
                                                                                '& .step-photo': {
                                                                                    transform: 'scale(1.1)',
                                                                                },
                                                                            },
                                                                        }, children: [_jsx(Box, { className: "step-photo", component: "img", src: step.photo, alt: step.title, sx: {
                                                                                    position: 'absolute',
                                                                                    top: 0,
                                                                                    left: 0,
                                                                                    width: '100%',
                                                                                    height: '100%',
                                                                                    objectFit: 'cover',
                                                                                    filter: 'brightness(0.5) blur(2px) saturate(1.1)',
                                                                                    transition: 'transform 0.4s ease',
                                                                                    zIndex: 0,
                                                                                } }), _jsx(Box, { sx: {
                                                                                    position: 'absolute',
                                                                                    top: 0,
                                                                                    left: 0,
                                                                                    right: 0,
                                                                                    bottom: 0,
                                                                                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.7) 0%, rgba(0, 35, 149, 0.5) 100%)',
                                                                                    zIndex: 1,
                                                                                } }), _jsxs(CardContent, { sx: {
                                                                                    position: 'relative',
                                                                                    zIndex: 2,
                                                                                    height: '100%',
                                                                                    display: 'flex',
                                                                                    flexDirection: 'column',
                                                                                    alignItems: 'center',
                                                                                    justifyContent: 'center',
                                                                                    textAlign: 'center',
                                                                                }, children: [_jsx(Box, { sx: {
                                                                                            width: 56,
                                                                                            height: 56,
                                                                                            borderRadius: '50%',
                                                                                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                                                                            backdropFilter: 'blur(10px)',
                                                                                            display: 'flex',
                                                                                            alignItems: 'center',
                                                                                            justifyContent: 'center',
                                                                                            color: 'white',
                                                                                            mb: 2,
                                                                                            border: '2px solid rgba(255, 255, 255, 0.3)',
                                                                                        }, children: step.icon }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 700, color: 'white', mb: 0.5, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }, children: step.title }), _jsx(Typography, { variant: "caption", sx: { color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }, children: step.description })] })] }) }, idx))) })] }), _jsxs(Card, { sx: {
                                                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                                            backdropFilter: 'blur(20px)',
                                                            borderRadius: 4,
                                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                                            p: 4,
                                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                                                        }, children: [_jsx(Typography, { variant: "h5", sx: { mb: 3, fontWeight: 700, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }, children: "Submit Your Partnership Proposal" }), _jsx("form", { onSubmit: handleFormSubmit, children: _jsxs(Stack, { spacing: 3, children: [_jsx(TextField, { required: true, fullWidth: true, label: "Your Name", name: "name", value: formData.name, onChange: handleFormChange, variant: "outlined", sx: {
                                                                                '& .MuiOutlinedInput-root': {
                                                                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                                                    '& fieldset': {
                                                                                        borderColor: 'rgba(255, 255, 255, 0.5)',
                                                                                    },
                                                                                    '&:hover fieldset': {
                                                                                        borderColor: 'rgba(255, 255, 255, 0.8)',
                                                                                    },
                                                                                    '&.Mui-focused fieldset': {
                                                                                        borderColor: 'white',
                                                                                    },
                                                                                },
                                                                                '& .MuiInputLabel-root': {
                                                                                    color: 'rgba(0, 0, 0, 0.7)',
                                                                                },
                                                                            } }), _jsx(TextField, { required: true, fullWidth: true, label: "Organization", name: "organization", value: formData.organization, onChange: handleFormChange, variant: "outlined", sx: {
                                                                                '& .MuiOutlinedInput-root': {
                                                                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                                                    '& fieldset': {
                                                                                        borderColor: 'rgba(255, 255, 255, 0.5)',
                                                                                    },
                                                                                    '&:hover fieldset': {
                                                                                        borderColor: 'rgba(255, 255, 255, 0.8)',
                                                                                    },
                                                                                    '&.Mui-focused fieldset': {
                                                                                        borderColor: 'white',
                                                                                    },
                                                                                },
                                                                                '& .MuiInputLabel-root': {
                                                                                    color: 'rgba(0, 0, 0, 0.7)',
                                                                                },
                                                                            } }), _jsx(TextField, { required: true, fullWidth: true, type: "email", label: "Email Address", name: "email", value: formData.email, onChange: handleFormChange, variant: "outlined", sx: {
                                                                                '& .MuiOutlinedInput-root': {
                                                                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                                                    '& fieldset': {
                                                                                        borderColor: 'rgba(255, 255, 255, 0.5)',
                                                                                    },
                                                                                    '&:hover fieldset': {
                                                                                        borderColor: 'rgba(255, 255, 255, 0.8)',
                                                                                    },
                                                                                    '&.Mui-focused fieldset': {
                                                                                        borderColor: 'white',
                                                                                    },
                                                                                },
                                                                                '& .MuiInputLabel-root': {
                                                                                    color: 'rgba(0, 0, 0, 0.7)',
                                                                                },
                                                                            } }), _jsx(TextField, { required: true, fullWidth: true, multiline: true, rows: 4, label: "Partnership Proposal", name: "message", value: formData.message, onChange: handleFormChange, variant: "outlined", sx: {
                                                                                '& .MuiOutlinedInput-root': {
                                                                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                                                    '& fieldset': {
                                                                                        borderColor: 'rgba(255, 255, 255, 0.5)',
                                                                                    },
                                                                                    '&:hover fieldset': {
                                                                                        borderColor: 'rgba(255, 255, 255, 0.8)',
                                                                                    },
                                                                                    '&.Mui-focused fieldset': {
                                                                                        borderColor: 'white',
                                                                                    },
                                                                                },
                                                                                '& .MuiInputLabel-root': {
                                                                                    color: 'rgba(0, 0, 0, 0.7)',
                                                                                },
                                                                            } }), _jsx(Button, { type: "submit", variant: "contained", size: "large", fullWidth: true, endIcon: _jsx(ArrowForwardIcon, {}), sx: {
                                                                                backgroundColor: '#ED2939',
                                                                                color: 'white',
                                                                                py: 2,
                                                                                fontSize: '1.1rem',
                                                                                fontWeight: 700,
                                                                                borderRadius: '25px',
                                                                                boxShadow: '0 4px 20px rgba(237, 41, 57, 0.4)',
                                                                                transition: 'all 0.3s ease',
                                                                                animation: 'pulse 2s infinite',
                                                                                '@keyframes pulse': {
                                                                                    '0%, 100%': {
                                                                                        boxShadow: '0 4px 20px rgba(237, 41, 57, 0.4)',
                                                                                    },
                                                                                    '50%': {
                                                                                        boxShadow: '0 6px 30px rgba(237, 41, 57, 0.6)',
                                                                                    },
                                                                                },
                                                                                '&:hover': {
                                                                                    backgroundColor: '#c91f2f',
                                                                                    transform: 'translateY(-3px)',
                                                                                    boxShadow: '0 8px 32px rgba(237, 41, 57, 0.6)',
                                                                                    animation: 'none',
                                                                                    '& .MuiButton-endIcon': {
                                                                                        transform: 'translateX(6px)',
                                                                                    },
                                                                                },
                                                                                '& .MuiButton-endIcon': {
                                                                                    transition: 'transform 0.3s ease',
                                                                                },
                                                                            }, children: "Submit Proposal" })] }) })] })] }), _jsxs(Grid, { size: { xs: 12, md: 5 }, children: [_jsx(Typography, { variant: "h6", sx: { mb: 3, fontWeight: 700, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }, children: "Partnership Benefits" }), _jsx(Stack, { spacing: 3, children: [
                                                            {
                                                                title: 'Networking',
                                                                photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                                                                description: 'Access to European network',
                                                                icon: _jsx(GroupsIcon, {}),
                                                            },
                                                            {
                                                                title: 'Visibility',
                                                                photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                                                                description: 'Brand recognition at forums',
                                                                icon: _jsx(VisibilityIcon, {}),
                                                            },
                                                            {
                                                                title: 'Innovation',
                                                                photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                                                                description: 'Cutting-edge media workshops',
                                                                icon: _jsx(LightbulbIcon, {}),
                                                            },
                                                        ].map((benefit, idx) => (_jsxs(Card, { sx: {
                                                                position: 'relative',
                                                                height: 200,
                                                                borderRadius: 3,
                                                                overflow: 'hidden',
                                                                border: '2px solid rgba(255, 255, 255, 0.3)',
                                                                transition: 'all 0.4s ease',
                                                                '&:hover': {
                                                                    transform: 'translateX(8px)',
                                                                    boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
                                                                    borderColor: 'rgba(255, 255, 255, 0.6)',
                                                                    '& .benefit-photo': {
                                                                        transform: 'scale(1.1)',
                                                                    },
                                                                },
                                                            }, children: [_jsx(Box, { className: "benefit-photo", component: "img", src: benefit.photo, alt: benefit.title, sx: {
                                                                        position: 'absolute',
                                                                        top: 0,
                                                                        left: 0,
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        objectFit: 'cover',
                                                                        filter: 'brightness(0.5) blur(2px) saturate(1.1)',
                                                                        transition: 'transform 0.4s ease',
                                                                        zIndex: 0,
                                                                    } }), _jsx(Box, { sx: {
                                                                        position: 'absolute',
                                                                        top: 0,
                                                                        left: 0,
                                                                        right: 0,
                                                                        bottom: 0,
                                                                        background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.8) 0%, rgba(0, 35, 149, 0.6) 100%)',
                                                                        zIndex: 1,
                                                                    } }), _jsxs(CardContent, { sx: {
                                                                        position: 'relative',
                                                                        zIndex: 2,
                                                                        height: '100%',
                                                                        display: 'flex',
                                                                        flexDirection: 'column',
                                                                        justifyContent: 'center',
                                                                        alignItems: 'center',
                                                                        textAlign: 'center',
                                                                    }, children: [_jsx(Box, { sx: {
                                                                                color: 'white',
                                                                                mb: 1.5,
                                                                                fontSize: 40,
                                                                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                                                                            }, children: benefit.icon }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 800, color: 'white', mb: 1, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }, children: benefit.title }), _jsx(Typography, { variant: "body2", sx: { color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }, children: benefit.description })] })] }, idx))) })] })] }), _jsxs(Box, { sx: { mt: 6 }, children: [_jsx(Typography, { variant: "h6", sx: { mb: 3, textAlign: 'center', fontWeight: 700, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }, children: "Trusted by Hundreds" }), _jsx(Box, { sx: {
                                                    display: 'flex',
                                                    gap: 4,
                                                    overflow: 'hidden',
                                                    position: 'relative',
                                                    '&::before, &::after': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        top: 0,
                                                        bottom: 0,
                                                        width: 100,
                                                        zIndex: 2,
                                                        pointerEvents: 'none',
                                                    },
                                                    '&::before': {
                                                        left: 0,
                                                        background: 'linear-gradient(90deg, rgba(0, 35, 149, 1) 0%, transparent 100%)',
                                                    },
                                                    '&::after': {
                                                        right: 0,
                                                        background: 'linear-gradient(90deg, transparent 0%, rgba(0, 35, 149, 1) 100%)',
                                                    },
                                                }, children: _jsx(Box, { sx: {
                                                        display: 'flex',
                                                        gap: 4,
                                                        animation: 'marquee 30s linear infinite',
                                                        '@keyframes marquee': {
                                                            '0%': { transform: 'translateX(0)' },
                                                            '100%': { transform: 'translateX(-50%)' },
                                                        },
                                                    }, children: [
                                                        { name: 'Erasmus+', logo: '🇪🇺' },
                                                        { name: 'Université Côte d\'Azur', logo: '🎓' },
                                                        { name: 'Le 109', logo: '🏛️' },
                                                        { name: 'Youth4Media', logo: '🌍' },
                                                        { name: 'European Commission', logo: '⭐' },
                                                        { name: 'Nice City', logo: '🏖️' },
                                                        { name: 'HUBLOT Theater', logo: '🎭' },
                                                        { name: 'Médiathèque', logo: '📚' },
                                                    ]
                                                        .concat([
                                                        { name: 'Erasmus+', logo: '🇪🇺' },
                                                        { name: 'Université Côte d\'Azur', logo: '🎓' },
                                                        { name: 'Le 109', logo: '🏛️' },
                                                        { name: 'Youth4Media', logo: '🌍' },
                                                        { name: 'European Commission', logo: '⭐' },
                                                        { name: 'Nice City', logo: '🏖️' },
                                                        { name: 'HUBLOT Theater', logo: '🎭' },
                                                        { name: 'Médiathèque', logo: '📚' },
                                                    ])
                                                        .map((partner, idx) => (_jsxs(Box, { sx: {
                                                            minWidth: 120,
                                                            height: 80,
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            p: 2,
                                                            borderRadius: 2,
                                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                            backdropFilter: 'blur(10px)',
                                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                                            opacity: 0.7,
                                                            transition: 'opacity 0.3s ease',
                                                            '&:hover': {
                                                                opacity: 1,
                                                            },
                                                        }, children: [_jsx(Typography, { sx: { fontSize: 32, mb: 0.5 }, children: partner.logo }), _jsx(Typography, { variant: "caption", sx: { textAlign: 'center', fontWeight: 600, color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }, children: partner.name })] }, idx))) }) })] })] })] }), _jsx(Container, { sx: { py: 8 }, children: _jsxs(Box, { sx: { mb: 6 }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', mb: 4, gap: 2 }, children: [_jsx(Box, { sx: {
                                                width: 56,
                                                height: 56,
                                                borderRadius: '12px',
                                                backgroundColor: 'rgba(0, 35, 149, 0.1)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#002395',
                                            }, children: _jsx(PublicIcon, { sx: { fontSize: 32 } }) }), _jsxs(Box, { children: [_jsx(Typography, { variant: "h3", sx: { fontWeight: 800, color: '#0b1b3a' }, children: "International Networks" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Strategic Partner on a European level" })] })] }), _jsxs(Grid, { container: true, spacing: 4, children: [_jsx(Grid, { size: { xs: 12, md: 5 }, children: _jsxs(Card, { sx: {
                                                    height: '100%',
                                                    p: 4,
                                                    borderRadius: 3,
                                                    border: '2px solid',
                                                    borderColor: '#002395',
                                                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
                                                }, children: [_jsx(Typography, { variant: "h6", sx: { mb: 3, fontWeight: 700, color: '#0b1b3a' }, children: "Active members since 2012" }), _jsx(Typography, { variant: "body1", paragraph: true, sx: { mb: 3, lineHeight: 1.8, color: '#0b1b3a' }, children: "MITRA FRANCE is an active member of several European networks, enabling us to collaborate on international projects and share best practices across borders." }), _jsxs(Box, { sx: {
                                                            position: 'relative',
                                                            height: 300,
                                                            borderRadius: 3,
                                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.05) 100%)',
                                                            border: '2px dashed rgba(0, 35, 149, 0.3)',
                                                            overflow: 'hidden',
                                                            mb: 3,
                                                        }, children: [_jsxs(Box, { component: "svg", viewBox: "0 0 400 300", sx: {
                                                                    position: 'absolute',
                                                                    top: 0,
                                                                    left: 0,
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    opacity: 0.2,
                                                                }, children: [_jsx("path", { d: "M 50 150 L 80 120 L 120 100 L 180 90 L 250 100 L 320 120 L 350 140 L 340 180 L 300 200 L 250 210 L 200 200 L 150 190 L 100 180 L 60 170 Z", fill: "none", stroke: "#002395", strokeWidth: "2" }), _jsx("circle", { cx: "200", cy: "170", r: "8", fill: "#ED2939" }), _jsx("text", { x: "200", y: "160", fontSize: "12", fill: "#ED2939", fontWeight: "700", textAnchor: "middle", children: "Nice" })] }), [
                                                                { name: 'ALDA', x: 80, y: 100, logo: '🌍' },
                                                                { name: 'Youth4Media', x: 320, y: 100, logo: '📱' },
                                                                { name: 'Anna Lindh', x: 100, y: 220, logo: '🤝' },
                                                                { name: 'Erasmus+', x: 300, y: 220, logo: '⭐' },
                                                                { name: 'EU Network', x: 200, y: 50, logo: '🇪🇺' },
                                                            ].map((network, idx) => (_jsxs(Box, { sx: {
                                                                    position: 'absolute',
                                                                    left: `${network.x}px`,
                                                                    top: `${network.y}px`,
                                                                    transform: 'translate(-50%, -50%)',
                                                                    zIndex: 2,
                                                                }, children: [_jsx(Box, { component: "svg", viewBox: "0 0 400 300", sx: {
                                                                            position: 'absolute',
                                                                            top: '50%',
                                                                            left: '50%',
                                                                            transform: 'translate(-50%, -50%)',
                                                                            width: '100%',
                                                                            height: '100%',
                                                                            zIndex: 0,
                                                                            pointerEvents: 'none',
                                                                        }, children: _jsx("line", { x1: "200", y1: "170", x2: network.x, y2: network.y, stroke: "#002395", strokeWidth: "1.5", strokeDasharray: "4 4", opacity: "0.4" }) }), _jsx(Tooltip, { title: network.name, arrow: true, children: _jsx(Box, { sx: {
                                                                                width: 56,
                                                                                height: 56,
                                                                                borderRadius: '50%',
                                                                                backgroundColor: 'white',
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                justifyContent: 'center',
                                                                                fontSize: 28,
                                                                                boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                                                                                border: '2px solid #002395',
                                                                                transition: 'all 0.3s ease',
                                                                                '&:hover': {
                                                                                    transform: 'scale(1.2)',
                                                                                    boxShadow: '0 6px 20px rgba(0, 35, 149, 0.5)',
                                                                                },
                                                                            }, children: network.logo }) })] }, idx)))] }), _jsxs(Box, { sx: { mt: 4 }, children: [_jsx(Typography, { variant: "h6", sx: { mb: 2, fontWeight: 700, color: '#0b1b3a' }, children: "Network Membership" }), _jsxs(Stack, { spacing: 2, children: [_jsxs(Box, { sx: {
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            gap: 2,
                                                                            p: 2,
                                                                            borderRadius: 2,
                                                                            backgroundColor: 'rgba(237, 41, 57, 0.05)',
                                                                            border: '2px solid rgba(237, 41, 57, 0.2)',
                                                                        }, children: [_jsx(Box, { sx: {
                                                                                    width: 48,
                                                                                    height: 48,
                                                                                    borderRadius: '50%',
                                                                                    backgroundColor: '#ED2939',
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    justifyContent: 'center',
                                                                                    color: 'white',
                                                                                }, children: _jsx(WorkspacePremiumIcon, {}) }), _jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle1", sx: { fontWeight: 700, color: '#0b1b3a' }, children: "Full Member" }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "Active participation in network activities" })] })] }), _jsxs(Box, { sx: {
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            gap: 2,
                                                                            p: 2,
                                                                            borderRadius: 2,
                                                                            backgroundColor: 'rgba(237, 41, 57, 0.05)',
                                                                            border: '2px solid rgba(237, 41, 57, 0.2)',
                                                                        }, children: [_jsx(Box, { sx: {
                                                                                    width: 48,
                                                                                    height: 48,
                                                                                    borderRadius: '50%',
                                                                                    backgroundColor: '#ED2939',
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    justifyContent: 'center',
                                                                                    color: 'white',
                                                                                }, children: _jsx(HandshakeIcon, {}) }), _jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle1", sx: { fontWeight: 700, color: '#0b1b3a' }, children: "Strategic Partner" }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "Key collaborator in European initiatives" })] })] })] })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 7 }, children: _jsx(Grid, { container: true, spacing: 3, children: [
                                                    {
                                                        name: 'ALDA',
                                                        fullName: 'Association of Local Democracy Agencies',
                                                        photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                                                        logo: '🌍',
                                                        role: 'Full Member since 2012',
                                                        description: 'Promoting local democracy and citizen participation across Europe',
                                                    },
                                                    {
                                                        name: 'Youth4Media',
                                                        fullName: 'Youth4Media Network',
                                                        photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                                                        logo: '📱',
                                                        role: 'Strategic Partner',
                                                        description: 'Media literacy and youth empowerment initiatives',
                                                    },
                                                    {
                                                        name: 'Anna Lindh',
                                                        fullName: 'Anna Lindh Foundation',
                                                        photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                                                        logo: '🤝',
                                                        role: 'Full Member',
                                                        description: 'Intercultural dialogue and Mediterranean cooperation',
                                                    },
                                                    {
                                                        name: 'Erasmus+',
                                                        fullName: 'Erasmus+ Network',
                                                        photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                                                        logo: '⭐',
                                                        role: 'Active Partner',
                                                        description: 'European education and training programs',
                                                    },
                                                    {
                                                        name: 'EU Network',
                                                        fullName: 'European Union Networks',
                                                        photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'),
                                                        logo: '🇪🇺',
                                                        role: 'Strategic Partner',
                                                        description: 'Cross-border collaboration and policy development',
                                                    },
                                                ].map((network, idx) => (_jsx(Grid, { size: { xs: 12, sm: 6 }, children: _jsxs(Card, { sx: {
                                                            position: 'relative',
                                                            height: 320,
                                                            borderRadius: '16px',
                                                            overflow: 'hidden',
                                                            border: '2px solid',
                                                            borderColor: 'divider',
                                                            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                                                            transition: 'all 0.4s ease',
                                                            cursor: 'pointer',
                                                            '&:hover': {
                                                                transform: 'translateY(-8px)',
                                                                boxShadow: '0 12px 32px rgba(0, 35, 149, 0.3)',
                                                                borderColor: '#002395',
                                                                '& .network-photo': {
                                                                    transform: 'scale(1.1)',
                                                                },
                                                                '& .network-overlay': {
                                                                    backgroundColor: 'rgba(0, 35, 149, 0.85)',
                                                                },
                                                                '& .network-description': {
                                                                    opacity: 1,
                                                                    transform: 'translateY(0)',
                                                                },
                                                            },
                                                        }, children: [_jsxs(Box, { sx: {
                                                                    position: 'relative',
                                                                    height: '60%',
                                                                    overflow: 'hidden',
                                                                }, children: [_jsx(Box, { className: "network-photo", component: "img", src: network.photo, alt: network.name, sx: {
                                                                            width: '100%',
                                                                            height: '100%',
                                                                            objectFit: 'cover',
                                                                            filter: 'brightness(0.9) saturate(1.1)',
                                                                            transition: 'transform 0.4s ease',
                                                                        } }), _jsx(Box, { className: "network-overlay", sx: {
                                                                            position: 'absolute',
                                                                            top: 0,
                                                                            left: 0,
                                                                            right: 0,
                                                                            bottom: 0,
                                                                            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 35, 149, 0.3) 100%)',
                                                                            transition: 'background-color 0.4s ease',
                                                                        } }), _jsx(Box, { sx: {
                                                                            position: 'absolute',
                                                                            top: 12,
                                                                            right: 12,
                                                                            width: 48,
                                                                            height: 48,
                                                                            borderRadius: '50%',
                                                                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center',
                                                                            fontSize: 24,
                                                                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                                                                        }, children: network.logo })] }), _jsxs(CardContent, { sx: {
                                                                    height: '40%',
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    justifyContent: 'center',
                                                                    backgroundColor: 'white',
                                                                    p: 2.5,
                                                                }, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 700, color: '#0b1b3a', mb: 0.5 }, children: network.name }), _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { mb: 1.5, fontWeight: 600 }, children: network.fullName }), _jsx(Chip, { label: network.role, size: "small", sx: {
                                                                            backgroundColor: 'rgba(0, 35, 149, 0.1)',
                                                                            color: '#002395',
                                                                            fontWeight: 600,
                                                                            fontSize: '0.7rem',
                                                                        } }), _jsx(Typography, { className: "network-description", variant: "caption", sx: {
                                                                            mt: 1.5,
                                                                            color: 'white',
                                                                            opacity: 0,
                                                                            transform: 'translateY(10px)',
                                                                            transition: 'all 0.4s ease',
                                                                            lineHeight: 1.5,
                                                                        }, children: network.description })] })] }) }, idx))) }) })] }), _jsxs(Box, { sx: { mt: 6 }, children: [_jsx(Typography, { variant: "h6", sx: { mb: 3, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }, children: "Network Projects & Certifications" }), _jsx(Box, { sx: {
                                                display: 'flex',
                                                gap: 2,
                                                overflowX: 'auto',
                                                pb: 2,
                                                '&::-webkit-scrollbar': {
                                                    height: 6,
                                                },
                                                '&::-webkit-scrollbar-track': {
                                                    backgroundColor: 'rgba(0,0,0,0.05)',
                                                    borderRadius: 3,
                                                },
                                                '&::-webkit-scrollbar-thumb': {
                                                    backgroundColor: 'rgba(0, 35, 149, 0.3)',
                                                    borderRadius: 3,
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(0, 35, 149, 0.5)',
                                                    },
                                                },
                                            }, children: [
                                                { photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'), title: 'Erasmus+ Certificate' },
                                                { photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'), title: 'ALDA Conference' },
                                                { photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'), title: 'Youth4Media Publication' },
                                                { photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'), title: 'Anna Lindh Award' },
                                                { photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'), title: 'EU Project Certificate' },
                                                { photo: getImagePath('/photos/583489432_1157911303183541_1292926580526900497_n.jpg'), title: 'Network Partnership' },
                                                { photo: getImagePath('/photos/583741041_1157902773184394_5619801435922057517_n.jpg'), title: 'International Collaboration' },
                                            ].map((project, idx) => (_jsxs(Card, { sx: {
                                                    minWidth: 200,
                                                    height: 150,
                                                    borderRadius: 2,
                                                    overflow: 'hidden',
                                                    position: 'relative',
                                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        transform: 'translateY(-4px)',
                                                        boxShadow: '0 8px 24px rgba(0, 35, 149, 0.3)',
                                                        '& .project-photo': {
                                                            transform: 'scale(1.1)',
                                                        },
                                                    },
                                                }, children: [_jsx(Box, { className: "project-photo", component: "img", src: project.photo, alt: project.title, sx: {
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            filter: 'brightness(0.85) saturate(1.1)',
                                                            transition: 'transform 0.3s ease',
                                                        } }), _jsx(Box, { sx: {
                                                            position: 'absolute',
                                                            bottom: 0,
                                                            left: 0,
                                                            right: 0,
                                                            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 35, 149, 0.9) 100%)',
                                                            p: 1.5,
                                                        }, children: _jsx(Typography, { variant: "caption", sx: { color: 'white', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.5)' }, children: project.title }) })] }, idx))) })] })] }) })] })] }));
}
