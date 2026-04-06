import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Link as RouterLink } from 'react-router-dom';
import BoltIcon from '@mui/icons-material/Bolt';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SpeedIcon from '@mui/icons-material/Speed';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ComputerIcon from '@mui/icons-material/Computer';
import LanguageIcon from '@mui/icons-material/Language';
import PaletteIcon from '@mui/icons-material/Palette';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import BookIcon from '@mui/icons-material/Book';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SecurityIcon from '@mui/icons-material/Security';
import ShareIcon from '@mui/icons-material/Share';
import CloudIcon from '@mui/icons-material/Cloud';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ArticleIcon from '@mui/icons-material/Article';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ChatIcon from '@mui/icons-material/Chat';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import TranslateIcon from '@mui/icons-material/Translate';
import GroupIcon from '@mui/icons-material/Group';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BrushIcon from '@mui/icons-material/Brush';
import CelebrationIcon from '@mui/icons-material/Celebration';
import MicIcon from '@mui/icons-material/Mic';
import { getImagePath } from '../utils/imagePath';
export default function Courses() {
    const [actionFeedback, setActionFeedback] = useState({
        open: false,
        message: '',
        type: 'success',
    });
    const [satisfactionMetrics, setSatisfactionMetrics] = useState({
        engagement: 0,
        timeOnPage: 0,
        interactions: 0
    });
    const [shortcutsUnlocked, setShortcutsUnlocked] = useState(false);
    const [shortcutsUsed, setShortcutsUsed] = useState(0);
    const [showShortcutsInfo, setShowShortcutsInfo] = useState(false);
    const showFeedback = (message, type = 'success') => {
        setActionFeedback({ open: true, message, type });
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
                }, children: _jsxs(Container, { children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 4 }, children: [_jsx(Chip, { icon: _jsx(EmojiEventsIcon, {}), label: "Lifelong Learning", color: "primary", sx: { mb: 2, fontWeight: 600, fontSize: '0.95rem', py: 2 } }), _jsx(Typography, { variant: "h2", sx: {
                                        mb: 2,
                                        textAlign: 'center',
                                        background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        fontWeight: 700,
                                    }, children: "Catalog of Courses & Trainings" }), _jsx(Typography, { variant: "h5", sx: {
                                        textAlign: 'center',
                                        mb: 3,
                                        color: 'text.secondary',
                                        fontWeight: 400,
                                        maxWidth: '800px',
                                        mx: 'auto',
                                    }, children: "Lifelong Learning - Educational programs for personal and professional development. Start your learning journey today and unlock new opportunities." }), _jsxs(Box, { sx: {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: 2,
                                        flexWrap: 'wrap',
                                        mb: 4,
                                    }, children: [_jsx(Chip, { icon: _jsx(CheckCircleIcon, { sx: { color: 'success.main' } }), label: "100+ Courses Available", sx: {
                                                backgroundColor: 'rgba(76, 175, 80, 0.1)',
                                                color: 'success.main',
                                                fontWeight: 600,
                                            } }), _jsx(Chip, { icon: _jsx(TrendingUpIcon, { sx: { color: 'primary.main' } }), label: "5000+ Students", sx: {
                                                backgroundColor: 'rgba(0, 35, 149, 0.1)',
                                                color: 'primary.main',
                                                fontWeight: 600,
                                            } }), _jsx(Chip, { icon: _jsx(PublicIcon, { sx: { color: 'error.main' } }), label: "Free Access", sx: {
                                                backgroundColor: 'rgba(237, 41, 57, 0.1)',
                                                color: 'error.main',
                                                fontWeight: 600,
                                            } })] })] }), _jsxs(Box, { sx: { mb: 4 }, children: [_jsx(Typography, { variant: "h6", sx: {
                                        textAlign: 'center',
                                        mb: 3,
                                        color: 'text.secondary',
                                        fontWeight: 600,
                                        fontSize: '1.2rem',
                                    }, children: "Choose your learning path:" }), _jsx(Grid, { container: true, spacing: 3, sx: { mb: 3 }, children: [
                                        {
                                            icon: _jsx(SchoolIcon, {}),
                                            label: 'Digital Literacy',
                                            count: '25+ courses',
                                            photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                                            gradient: 'linear-gradient(135deg, rgba(0, 35, 149, 0.7) 0%, rgba(0, 35, 149, 0.5) 100%)',
                                        },
                                        {
                                            icon: _jsx(LanguageIcon, {}),
                                            label: 'Language Learning',
                                            count: '30+ courses',
                                            photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                                            gradient: 'linear-gradient(135deg, rgba(237, 41, 57, 0.7) 0%, rgba(237, 41, 57, 0.5) 100%)',
                                        },
                                        {
                                            icon: _jsx(ComputerIcon, {}),
                                            label: 'Media Literacy',
                                            count: '20+ courses',
                                            photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                                            gradient: 'linear-gradient(135deg, rgba(0, 35, 149, 0.7) 0%, rgba(0, 35, 149, 0.5) 100%)',
                                        },
                                        {
                                            icon: _jsx(PaletteIcon, {}),
                                            label: 'Arts & Culture',
                                            count: '25+ courses',
                                            photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                                            gradient: 'linear-gradient(135deg, rgba(237, 41, 57, 0.7) 0%, rgba(237, 41, 57, 0.5) 100%)',
                                        },
                                    ].map((category) => (_jsx(Grid, { size: { xs: 6, sm: 3 }, children: _jsxs(Card, { sx: {
                                                position: 'relative',
                                                height: 200,
                                                textAlign: 'center',
                                                border: '2px solid',
                                                borderColor: 'divider',
                                                borderRadius: '20px',
                                                overflow: 'hidden',
                                                transition: 'all 0.4s ease',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    transform: 'translateY(-8px)',
                                                    boxShadow: '0 12px 32px rgba(0, 35, 149, 0.3)',
                                                    borderColor: 'primary.main',
                                                    '& .category-photo': {
                                                        transform: 'scale(1.1)',
                                                        filter: 'brightness(1.1)',
                                                    },
                                                    '& .category-count': {
                                                        fontSize: '1.1rem',
                                                        fontWeight: 700,
                                                    },
                                                },
                                            }, children: [_jsx(Box, { className: "category-photo", component: "img", src: category.photo, alt: category.label, sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        filter: 'brightness(0.7) saturate(1.1)',
                                                        transition: 'all 0.4s ease',
                                                        zIndex: 0,
                                                    } }), _jsx(Box, { sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: category.gradient,
                                                        zIndex: 1,
                                                    } }), _jsxs(Box, { sx: {
                                                        position: 'relative',
                                                        zIndex: 2,
                                                        height: '100%',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        p: 2,
                                                    }, children: [_jsx(Box, { sx: { color: 'white', mb: 1.5, fontSize: 40, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }, children: category.icon }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 700, mb: 1, color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }, children: category.label }), _jsx(Typography, { className: "category-count", variant: "body2", sx: {
                                                                color: 'white',
                                                                fontWeight: 600,
                                                                textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                                                                transition: 'all 0.4s ease',
                                                            }, children: category.count })] })] }) }, category.label))) })] }), _jsx(Grid, { container: true, spacing: 3, sx: { mt: 2, mb: 4 }, children: [
                                {
                                    label: 'Active Students',
                                    value: '5000+',
                                    color: '#002395',
                                    avatars: [
                                        getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                                        getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                                        getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                                        getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                                    ],
                                },
                                {
                                    label: 'Available Courses',
                                    value: '100+',
                                    color: '#ED2939',
                                    icon: _jsx(MenuBookIcon, {}),
                                },
                                {
                                    label: 'Success Rate',
                                    value: '98%',
                                    color: '#4CAF50',
                                    icon: _jsx(TrendingUpIcon, {}),
                                },
                                {
                                    label: 'Expert Instructors',
                                    value: '50+',
                                    color: '#002395',
                                    instructorPhoto: getImagePath('/photos/583741041_1157902773184394_5619801435922057517_n.jpg'),
                                },
                            ].map((stat) => (_jsx(Grid, { size: { xs: 6, sm: 3 }, children: _jsxs(Card, { sx: {
                                        textAlign: 'center',
                                        p: 3,
                                        border: '2px solid',
                                        borderColor: `${stat.color}30`,
                                        backgroundColor: `${stat.color}08`,
                                        borderRadius: '20px',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: `0 6px 20px ${stat.color}30`,
                                            borderColor: stat.color,
                                        },
                                    }, children: [stat.avatars ? (_jsx(AvatarGroup, { max: 4, sx: {
                                                justifyContent: 'center',
                                                mb: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 48,
                                                    height: 48,
                                                    border: `2px solid ${stat.color}`,
                                                    boxShadow: `0 2px 8px ${stat.color}30`,
                                                },
                                            }, children: stat.avatars.map((avatar, idx) => (_jsx(Avatar, { src: avatar, alt: `Student ${idx + 1}` }, idx))) })) : stat.instructorPhoto ? (_jsx(Avatar, { src: stat.instructorPhoto, alt: "Expert Instructor", sx: {
                                                width: 64,
                                                height: 64,
                                                mx: 'auto',
                                                mb: 1.5,
                                                border: `3px solid ${stat.color}`,
                                                boxShadow: `0 4px 12px ${stat.color}30`,
                                            } })) : (_jsx(Box, { sx: { color: stat.color, mb: 1.5, fontSize: 48 }, children: stat.icon })), _jsx(Typography, { variant: "h3", sx: { color: stat.color, fontWeight: 800, mb: 0.5 }, children: stat.value }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { fontWeight: 600 }, children: stat.label })] }) }, stat.label))) }), _jsxs(Box, { sx: {
                                position: 'relative',
                                textAlign: 'center',
                                p: 6,
                                borderRadius: '24px',
                                overflow: 'hidden',
                                maxWidth: '900px',
                                mx: 'auto',
                                mt: 2,
                                minHeight: 300,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }, children: [_jsx(Box, { component: "img", src: getImagePath("/photos/583924019_1157903166517688_8756873269993443102_n.jpg"), alt: "Learning Environment", sx: {
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'blur(3px) brightness(0.6) saturate(1.1)',
                                        zIndex: 0,
                                    } }), _jsx(Box, { sx: {
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.4) 0%, rgba(237, 41, 57, 0.4) 100%)',
                                        zIndex: 1,
                                    } }), _jsxs(Box, { sx: { position: 'relative', zIndex: 2 }, children: [_jsx(Typography, { variant: "h4", sx: { mb: 2, fontWeight: 800, color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }, children: "Ready to Start Learning?" }), _jsx(Typography, { variant: "body1", sx: { mb: 4, color: 'rgba(255, 255, 255, 0.95)', textShadow: '0 1px 4px rgba(0,0,0,0.5)', maxWidth: '600px', mx: 'auto' }, children: "Explore our courses below or use smart shortcuts to get instant access. All courses are free and open to everyone." }), _jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 2, sx: { justifyContent: 'center', alignItems: 'center', position: 'relative' }, children: [_jsx(Chip, { label: "New course added today!", sx: {
                                                        position: 'absolute',
                                                        top: { xs: -40, sm: -50 },
                                                        right: { xs: 'auto', sm: 0 },
                                                        backgroundColor: '#4CAF50',
                                                        color: 'white',
                                                        fontWeight: 700,
                                                        fontSize: '0.85rem',
                                                        py: 2,
                                                        px: 2,
                                                        boxShadow: '0 4px 16px rgba(76, 175, 80, 0.5)',
                                                        animation: 'pulse 2s infinite',
                                                        '@keyframes pulse': {
                                                            '0%, 100%': {
                                                                transform: 'scale(1)',
                                                                boxShadow: '0 4px 16px rgba(76, 175, 80, 0.5)',
                                                            },
                                                            '50%': {
                                                                transform: 'scale(1.05)',
                                                                boxShadow: '0 6px 24px rgba(76, 175, 80, 0.7)',
                                                            },
                                                        },
                                                    } }), _jsx(Button, { variant: "contained", size: "large", startIcon: _jsx(BookIcon, {}), endIcon: _jsx(ArrowForwardIcon, {}), onClick: () => {
                                                        const element = document.getElementById('courses-catalog');
                                                        element?.scrollIntoView({ behavior: 'smooth' });
                                                    }, sx: {
                                                        px: 6,
                                                        py: 2,
                                                        fontSize: '1.1rem',
                                                        fontWeight: 800,
                                                        borderRadius: '30px',
                                                        backgroundColor: '#002395',
                                                        color: 'white',
                                                        boxShadow: '0 8px 24px rgba(0, 35, 149, 0.5)',
                                                        transition: 'all 0.4s ease',
                                                        '&:hover': {
                                                            backgroundColor: '#001a7a',
                                                            transform: 'translateY(-4px) scale(1.05)',
                                                            boxShadow: '0 12px 32px rgba(0, 35, 149, 0.7)',
                                                            '& .MuiButton-endIcon': {
                                                                transform: 'translateX(6px)',
                                                            },
                                                        },
                                                        '& .MuiButton-endIcon': {
                                                            transition: 'transform 0.4s ease',
                                                        },
                                                    }, children: "Browse Courses" }), _jsx(Button, { component: RouterLink, to: "/contact", variant: "outlined", size: "large", sx: {
                                                        px: 4,
                                                        py: 2,
                                                        fontSize: '1rem',
                                                        fontWeight: 600,
                                                        borderRadius: '25px',
                                                        borderWidth: 2,
                                                        borderColor: 'white',
                                                        color: 'white',
                                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                        backdropFilter: 'blur(10px)',
                                                        '&:hover': {
                                                            borderWidth: 2,
                                                            borderColor: 'white',
                                                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                                            transform: 'translateY(-2px)',
                                                        },
                                                    }, children: "Get in Touch" })] })] })] }), _jsxs(Box, { sx: { mt: 6, mb: 4 }, children: [_jsx(Typography, { variant: "h6", sx: { mb: 3, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }, children: "Recent Certificates Issued" }), _jsx(Box, { sx: {
                                        display: 'flex',
                                        gap: 3,
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
                                            background: 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, transparent 100%)',
                                        },
                                        '&::after': {
                                            right: 0,
                                            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 1) 100%)',
                                        },
                                    }, children: _jsx(Box, { sx: {
                                            display: 'flex',
                                            gap: 3,
                                            animation: 'marquee 40s linear infinite',
                                            '@keyframes marquee': {
                                                '0%': { transform: 'translateX(0)' },
                                                '100%': { transform: 'translateX(-50%)' },
                                            },
                                        }, children: [
                                            { photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'), title: 'Digital Skills Certificate' },
                                            { photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'), title: 'Erasmus+ Completion' },
                                            { photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'), title: 'Media Literacy Diploma' },
                                            { photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'), title: 'Language Learning Certificate' },
                                            { photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'), title: 'Cultural Exchange Award' },
                                            { photo: getImagePath('/photos/583489432_1157911303183541_1292926580526900497_n.jpg'), title: 'Community Engagement' },
                                        ]
                                            .concat([
                                            { photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'), title: 'Digital Skills Certificate' },
                                            { photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'), title: 'Erasmus+ Completion' },
                                            { photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'), title: 'Media Literacy Diploma' },
                                            { photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'), title: 'Language Learning Certificate' },
                                            { photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'), title: 'Cultural Exchange Award' },
                                            { photo: getImagePath('/photos/583489432_1157911303183541_1292926580526900497_n.jpg'), title: 'Community Engagement' },
                                        ])
                                            .map((cert, idx) => (_jsxs(Card, { sx: {
                                                minWidth: 200,
                                                height: 150,
                                                borderRadius: '16px',
                                                overflow: 'hidden',
                                                position: 'relative',
                                                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                                                border: '2px solid',
                                                borderColor: '#002395',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-4px)',
                                                    boxShadow: '0 8px 24px rgba(0, 35, 149, 0.4)',
                                                },
                                            }, children: [_jsx(Box, { component: "img", src: cert.photo, alt: cert.title, sx: {
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        filter: 'brightness(0.85) saturate(1.1)',
                                                    } }), _jsx(Box, { sx: {
                                                        position: 'absolute',
                                                        bottom: 0,
                                                        left: 0,
                                                        right: 0,
                                                        background: 'linear-gradient(180deg, transparent 0%, rgba(0, 35, 149, 0.95) 100%)',
                                                        p: 1.5,
                                                    }, children: _jsx(Typography, { variant: "caption", sx: { color: 'white', fontWeight: 700, textShadow: '0 1px 2px rgba(0,0,0,0.5)', fontSize: '0.7rem' }, children: cert.title }) }), _jsx(Box, { sx: {
                                                        position: 'absolute',
                                                        top: 8,
                                                        right: 8,
                                                        width: 32,
                                                        height: 32,
                                                        borderRadius: '50%',
                                                        backgroundColor: '#ED2939',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: 18,
                                                        fontWeight: 700,
                                                        color: 'white',
                                                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                                                    }, children: "M" })] }, idx))) }) })] }), _jsxs(Typography, { variant: "caption", sx: {
                                textAlign: 'center',
                                color: 'text.secondary',
                                mt: 3,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 0.5,
                            }, children: [_jsx(CheckCircleIcon, { sx: { fontSize: 16, color: 'success.main' } }), "Free to join \u2022 No registration needed \u2022 Instant access \u2022 Takes 2 minutes"] })] }) }), _jsxs(Container, { children: [_jsxs(Box, { sx: {
                            py: { xs: 8, sm: 10 },
                            background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
                            position: 'relative',
                            overflow: 'hidden',
                            mb: 8,
                        }, children: [_jsxs(Box, { sx: { mb: 6 }, children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 4 }, children: [_jsx(Chip, { icon: _jsx(BoltIcon, {}), label: "Smart Shortcuts", sx: {
                                                    mb: 2,
                                                    fontWeight: 700,
                                                    fontSize: '1rem',
                                                    py: 2,
                                                    px: 1,
                                                    backgroundColor: '#FF9800',
                                                    color: 'white',
                                                    border: '2px solid #FF9800',
                                                    boxShadow: '0 4px 12px rgba(255, 152, 0, 0.3)',
                                                } }), _jsx(Typography, { variant: "h2", sx: { mb: 3, fontWeight: 800, color: '#0b1b3a' }, children: "Looking for a Faster Path?" }), _jsxs(Box, { sx: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: 2,
                                                    mb: 4,
                                                    position: 'relative',
                                                    maxWidth: 600,
                                                    mx: 'auto',
                                                }, children: [_jsxs(Box, { sx: {
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            gap: 1,
                                                        }, children: [_jsx(Box, { sx: {
                                                                    width: 48,
                                                                    height: 48,
                                                                    borderRadius: '50%',
                                                                    backgroundColor: '#002395',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    color: 'white',
                                                                    fontSize: 24,
                                                                    fontWeight: 700,
                                                                    boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                                                                }, children: "\u2713" }), _jsx(Typography, { variant: "caption", sx: { fontWeight: 600, color: '#002395' }, children: "Choice" })] }), _jsx(Box, { sx: {
                                                            flex: 1,
                                                            height: 2,
                                                            background: 'repeating-linear-gradient(90deg, #FF9800 0, #FF9800 8px, transparent 8px, transparent 16px)',
                                                            position: 'relative',
                                                            '&::after': {
                                                                content: '""',
                                                                position: 'absolute',
                                                                top: '50%',
                                                                left: 0,
                                                                right: 0,
                                                                height: 2,
                                                                background: '#FF9800',
                                                                transform: 'translateY(-50%)',
                                                                animation: 'progressLine 2s ease-in-out infinite',
                                                                '@keyframes progressLine': {
                                                                    '0%': { width: '0%' },
                                                                    '100%': { width: '100%' },
                                                                },
                                                            },
                                                        } }), _jsxs(Box, { sx: {
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            gap: 1,
                                                        }, children: [_jsx(Box, { sx: {
                                                                    width: 48,
                                                                    height: 48,
                                                                    borderRadius: '50%',
                                                                    backgroundColor: '#FF9800',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    color: 'white',
                                                                    fontSize: 24,
                                                                    boxShadow: '0 4px 12px rgba(255, 152, 0, 0.3)',
                                                                }, children: "\u26A1" }), _jsx(Typography, { variant: "caption", sx: { fontWeight: 600, color: '#FF9800' }, children: "Shortcuts" })] }), _jsx(Box, { sx: {
                                                            flex: 1,
                                                            height: 2,
                                                            background: 'repeating-linear-gradient(90deg, #FF9800 0, #FF9800 8px, transparent 8px, transparent 16px)',
                                                            position: 'relative',
                                                            '&::after': {
                                                                content: '""',
                                                                position: 'absolute',
                                                                top: '50%',
                                                                left: 0,
                                                                right: 0,
                                                                height: 2,
                                                                background: '#FF9800',
                                                                transform: 'translateY(-50%)',
                                                                animation: 'progressLine 2s ease-in-out infinite 0.5s',
                                                                '@keyframes progressLine': {
                                                                    '0%': { width: '0%' },
                                                                    '100%': { width: '100%' },
                                                                },
                                                            },
                                                        } }), _jsxs(Box, { sx: {
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            gap: 1,
                                                        }, children: [_jsx(Box, { sx: {
                                                                    width: 48,
                                                                    height: 48,
                                                                    borderRadius: '50%',
                                                                    backgroundColor: '#4CAF50',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    color: 'white',
                                                                    fontSize: 24,
                                                                    fontWeight: 700,
                                                                    boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
                                                                }, children: "\u2605" }), _jsx(Typography, { variant: "caption", sx: { fontWeight: 600, color: '#4CAF50' }, children: "Success" })] })] }), _jsxs(Grid, { container: true, spacing: 4, alignItems: "center", sx: { mb: 4 }, children: [_jsx(Grid, { size: { xs: 12, md: 7 }, children: _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { fontSize: '1.1rem', lineHeight: 1.8, color: '#0b1b3a' }, children: "We understand that sometimes you need shortcuts to overcome obstacles. These smart shortcuts are intentionally designed to help you progress when you feel stuck." }) }), _jsx(Grid, { size: { xs: 12, md: 5 }, children: _jsx(Box, { sx: {
                                                                position: 'relative',
                                                                height: 200,
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                            }, children: _jsxs(Box, { component: "svg", viewBox: "0 0 300 200", sx: {
                                                                    width: '100%',
                                                                    height: '100%',
                                                                }, children: [_jsx("path", { d: "M 50 150 L 50 50 L 100 50 L 100 100 L 150 100 L 150 30 L 200 30 L 200 80 L 250 80 L 250 20", fill: "none", stroke: "#FF9800", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M 60 140 Q 100 120, 140 100 T 240 60", fill: "none", stroke: "#FF9800", strokeWidth: "3", strokeDasharray: "5 5", markerEnd: "url(#arrowhead)" }), _jsx("defs", { children: _jsx("marker", { id: "arrowhead", markerWidth: "10", markerHeight: "10", refX: "9", refY: "3", orient: "auto", children: _jsx("polygon", { points: "0 0, 10 3, 0 6", fill: "#FF9800" }) }) }), _jsx("circle", { cx: "250", cy: "20", r: "15", fill: "#4CAF50" }), _jsx("text", { x: "250", y: "26", fontSize: "12", fill: "white", fontWeight: "700", textAnchor: "middle", children: "\u2713" })] }) }) })] })] }), _jsxs(Box, { sx: { mb: 6 }, children: [_jsx(Typography, { variant: "h5", sx: { mb: 3, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }, children: "Choose Your Learning Path" }), _jsx(Grid, { container: true, spacing: 3, children: [
                                                    {
                                                        title: 'Quick Start',
                                                        subtitle: 'For Beginners',
                                                        photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                                                        description: 'Perfect for those just starting their learning journey',
                                                        icon: _jsx(PlayArrowIcon, {}),
                                                    },
                                                    {
                                                        title: 'Career Boost',
                                                        subtitle: 'For Professionals',
                                                        photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                                                        description: 'Advance your skills and accelerate your career',
                                                        icon: _jsx(TrendingUpIcon, {}),
                                                    },
                                                    {
                                                        title: 'Deep Dive',
                                                        subtitle: 'For Advanced',
                                                        photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                                                        description: 'Comprehensive programs for in-depth learning',
                                                        icon: _jsx(SchoolIcon, {}),
                                                    },
                                                ].map((path, idx) => (_jsx(Grid, { size: { xs: 12, sm: 4 }, children: _jsxs(Card, { sx: {
                                                            position: 'relative',
                                                            height: 300,
                                                            borderRadius: '20px',
                                                            overflow: 'hidden',
                                                            border: '2px solid',
                                                            borderColor: 'divider',
                                                            transition: 'all 0.4s ease',
                                                            cursor: 'pointer',
                                                            '&:hover': {
                                                                transform: 'translateY(-8px)',
                                                                boxShadow: '0 12px 32px rgba(0, 35, 149, 0.3)',
                                                                borderColor: '#002395',
                                                                '& .path-photo': {
                                                                    transform: 'scale(1.1)',
                                                                    filter: 'brightness(1.1)',
                                                                },
                                                            },
                                                        }, children: [_jsx(Box, { className: "path-photo", component: "img", src: path.photo, alt: path.title, sx: {
                                                                    position: 'absolute',
                                                                    top: 0,
                                                                    left: 0,
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    objectFit: 'cover',
                                                                    filter: 'brightness(0.7) saturate(1.1)',
                                                                    transition: 'all 0.4s ease',
                                                                    zIndex: 0,
                                                                } }), _jsx(Box, { sx: {
                                                                    position: 'absolute',
                                                                    top: 0,
                                                                    left: 0,
                                                                    right: 0,
                                                                    bottom: 0,
                                                                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.8) 0%, rgba(0, 35, 149, 0.6) 100%)',
                                                                    zIndex: 1,
                                                                } }), _jsxs(Box, { sx: {
                                                                    position: 'relative',
                                                                    zIndex: 2,
                                                                    height: '100%',
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    p: 3,
                                                                    textAlign: 'center',
                                                                }, children: [_jsx(Box, { sx: {
                                                                            color: 'white',
                                                                            mb: 2,
                                                                            fontSize: 48,
                                                                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                                                                        }, children: path.icon }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 800, color: 'white', mb: 1, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }, children: path.title }), _jsx(Chip, { label: path.subtitle, size: "small", sx: {
                                                                            mb: 2,
                                                                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                                                            backdropFilter: 'blur(10px)',
                                                                            color: 'white',
                                                                            fontWeight: 600,
                                                                            border: '1px solid rgba(255, 255, 255, 0.3)',
                                                                        } }), _jsx(Typography, { variant: "body2", sx: { color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }, children: path.description })] })] }) }, idx))) })] })] }), !shortcutsUnlocked ? (_jsxs(Card, { sx: {
                                    p: 6,
                                    textAlign: 'center',
                                    border: '2px dashed',
                                    borderColor: 'divider',
                                    borderRadius: 3,
                                    backgroundColor: 'rgba(0, 0, 0, 0.02)',
                                }, children: [_jsx(LockOpenIcon, { sx: { fontSize: 64, color: 'text.secondary', mb: 2, opacity: 0.5 } }), _jsx(Typography, { variant: "h5", gutterBottom: true, sx: { fontWeight: 600, mb: 2 }, children: "Unlock Smart Shortcuts" }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { mb: 4, maxWidth: '500px', mx: 'auto' }, children: "Shortcuts are available but limited. Unlock them by completing at least one interaction on the page, or use them when you feel stuck." }), _jsx(Button, { variant: "contained", size: "large", startIcon: _jsx(BoltIcon, {}), onClick: () => {
                                            if (satisfactionMetrics.interactions >= 1 || shortcutsUsed === 0) {
                                                setShortcutsUnlocked(true);
                                                showFeedback('Shortcuts unlocked! Use them wisely.', 'success');
                                                setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                                            }
                                            else {
                                                showFeedback('Complete at least one action to unlock shortcuts', 'warning');
                                            }
                                        }, sx: {
                                            px: 6,
                                            py: 2,
                                            fontSize: '1.1rem',
                                            fontWeight: 800,
                                            borderRadius: '30px',
                                            backgroundColor: '#FF9800',
                                            color: 'white',
                                            boxShadow: '0 8px 24px rgba(255, 152, 0, 0.5)',
                                            transition: 'all 0.4s ease',
                                            '&:hover': {
                                                backgroundColor: '#F57C00',
                                                transform: 'translateY(-4px) scale(1.05)',
                                                boxShadow: '0 12px 32px rgba(255, 152, 0, 0.7)',
                                                '& .MuiButton-startIcon': {
                                                    transform: 'rotate(15deg)',
                                                },
                                            },
                                            '& .MuiButton-startIcon': {
                                                transition: 'transform 0.4s ease',
                                            },
                                        }, children: "Explore Shortcuts" })] })) : (_jsx(Grid, { container: true, spacing: 4, children: [
                                    {
                                        title: 'Skip Registration Wait',
                                        description: 'Get instant access without waiting for approval. Perfect when you want to explore immediately.',
                                        icon: _jsx(SpeedIcon, {}),
                                        action: 'Get Instant Access',
                                        path: '/contact',
                                        limitation: 'Available once per user',
                                        color: 'primary',
                                    },
                                    {
                                        title: 'Fast-Track Program Entry',
                                        description: 'Join programs directly without prerequisites. Ideal when you have relevant experience.',
                                        icon: _jsx(BoltIcon, {}),
                                        action: 'Fast-Track Join',
                                        path: '/focus-areas',
                                        limitation: 'Limited to 2 programs',
                                        color: 'success',
                                    },
                                    {
                                        title: 'Priority Event Access',
                                        description: 'Get early access to popular events. Use when events fill up quickly.',
                                        icon: _jsx(StarIcon, {}),
                                        action: 'Request Priority',
                                        path: '/events',
                                        limitation: '3 uses per month',
                                        color: 'warning',
                                    },
                                    {
                                        title: 'Extended Trial Period',
                                        description: 'Get extra time to explore before committing. Helpful when you need more time to decide.',
                                        icon: _jsx(AccessTimeIcon, {}),
                                        action: 'Extend Trial',
                                        path: '/about',
                                        limitation: 'One-time use',
                                        color: 'info',
                                    },
                                ].map((shortcut) => (_jsx(Grid, { size: { xs: 12, sm: 6, md: 3 }, children: _jsxs(Card, { sx: {
                                            p: 3,
                                            height: '100%',
                                            border: '2px solid',
                                            borderColor: `${shortcut.color}.main`,
                                            borderRadius: 3,
                                            background: `linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(255, 255, 255, 1) 100%)`,
                                            position: 'relative',
                                            overflow: 'visible',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: `0 8px 24px ${shortcut.color}30`,
                                            },
                                            '&::before': {
                                                content: '"SHORTCUT"',
                                                position: 'absolute',
                                                top: -12,
                                                right: 16,
                                                px: 1,
                                                py: 0.5,
                                                fontSize: '0.65rem',
                                                fontWeight: 700,
                                                color: `${shortcut.color}.main`,
                                                backgroundColor: 'white',
                                                border: `2px solid ${shortcut.color}`,
                                                borderRadius: 1,
                                                letterSpacing: '0.5px',
                                            },
                                        }, children: [_jsx(Box, { sx: {
                                                    width: 56,
                                                    height: 56,
                                                    borderRadius: 2,
                                                    background: `linear-gradient(135deg, ${shortcut.color === 'primary' ? 'rgba(0, 35, 149, 0.1)' : shortcut.color === 'success' ? 'rgba(76, 175, 80, 0.1)' : shortcut.color === 'warning' ? 'rgba(255, 152, 0, 0.1)' : 'rgba(0, 35, 149, 0.1)'} 0%, ${shortcut.color === 'primary' ? 'rgba(0, 35, 149, 0.2)' : shortcut.color === 'success' ? 'rgba(76, 175, 80, 0.2)' : shortcut.color === 'warning' ? 'rgba(255, 152, 0, 0.2)' : 'rgba(0, 35, 149, 0.2)'} 100%)`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    mb: 2,
                                                    mt: 1,
                                                }, children: _jsx(Box, { sx: { color: `${shortcut.color}.main` }, children: shortcut.icon }) }), _jsx(Typography, { variant: "h6", gutterBottom: true, sx: { fontWeight: 700, mb: 1 }, children: shortcut.title }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2, lineHeight: 1.6, minHeight: '3em' }, children: shortcut.description }), _jsx(Chip, { label: shortcut.limitation, size: "small", sx: {
                                                    mb: 2,
                                                    fontSize: '0.7rem',
                                                    height: 24,
                                                    backgroundColor: `${shortcut.color}15`,
                                                    color: `${shortcut.color}.main`,
                                                    fontWeight: 600,
                                                } }), _jsx(Button, { component: RouterLink, to: shortcut.path, variant: "outlined", color: shortcut.color, fullWidth: true, size: "small", onClick: () => {
                                                    setShortcutsUsed(shortcutsUsed + 1);
                                                    showFeedback(`Using shortcut: ${shortcut.title}. Remember, shortcuts are limited!`, 'info');
                                                    if (shortcutsUsed >= 5) {
                                                        showFeedback('You\'ve used many shortcuts. Consider trying the regular path for a more rewarding experience.', 'warning');
                                                    }
                                                }, sx: {
                                                    fontWeight: 600,
                                                    borderWidth: 2,
                                                }, children: shortcut.action })] }) }, shortcut.title))) })), shortcutsUnlocked && (_jsx(Box, { sx: { mt: 6, textAlign: 'center' }, children: _jsxs(Card, { sx: {
                                        p: 4,
                                        border: '2px solid',
                                        borderColor: 'divider',
                                        borderRadius: 3,
                                        backgroundColor: 'rgba(0, 0, 0, 0.02)',
                                        maxWidth: '800px',
                                        mx: 'auto',
                                    }, children: [_jsx(Typography, { variant: "h6", gutterBottom: true, sx: { fontWeight: 700, mb: 2 }, children: "\u2696\uFE0F Balance is Key" }), _jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { lineHeight: 1.8, mb: 2 }, children: ["Shortcuts used: ", _jsx("strong", { children: shortcutsUsed }), " | Regular interactions: ", _jsx("strong", { children: satisfactionMetrics.interactions })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { lineHeight: 1.8 }, children: "Remember: Shortcuts help you overcome obstacles, but the regular path offers deeper learning and more meaningful connections. Use shortcuts when stuck, but don't miss out on the full experience!" })] }) }))] }), _jsxs(Box, { id: "courses-catalog", sx: { mb: 8, scrollMarginTop: '100px' }, children: [_jsx(Typography, { variant: "h3", sx: { textAlign: 'center', mb: 6, fontWeight: 800, color: '#0b1b3a' }, children: "Available Courses & Training Programs" }), [
                                {
                                    title: 'Digital Literacy',
                                    description: 'Essential digital skills for everyday life. Master the tools and knowledge needed to thrive in the digital age, from basic computer operations to advanced online safety.',
                                    photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                                    curriculum: [
                                        { icon: _jsx(ComputerIcon, {}), label: 'AI Basics' },
                                        { icon: _jsx(SecurityIcon, {}), label: 'Cyber Security' },
                                        { icon: _jsx(ShareIcon, {}), label: 'Social Media Safety' },
                                        { icon: _jsx(CloudIcon, {}), label: 'Cloud Computing' },
                                        { icon: _jsx(SmartphoneIcon, {}), label: 'Mobile Skills' },
                                        { icon: _jsx(DataUsageIcon, {}), label: 'Data Privacy' },
                                    ],
                                    instructor: {
                                        name: 'Karina Tronche',
                                        photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                                        role: 'Lead Instructor',
                                    },
                                    badges: ['Beginner Friendly', 'Certification Included', 'Free Access'],
                                    duration: '8 weeks',
                                    level: 'Beginner',
                                    color: '#002395',
                                    photoPosition: 'left',
                                },
                                {
                                    title: 'Media Literacy',
                                    description: 'Critical thinking and information analysis. Learn to navigate the modern media landscape, identify misinformation, and create meaningful digital content.',
                                    photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                                    curriculum: [
                                        { icon: _jsx(VideoLibraryIcon, {}), label: 'Video Production' },
                                        { icon: _jsx(MicIcon, {}), label: 'Podcast Creation' },
                                        { icon: _jsx(ArticleIcon, {}), label: 'Content Writing' },
                                        { icon: _jsx(PhotoCameraIcon, {}), label: 'Photo Editing' },
                                        { icon: _jsx(AnalyticsIcon, {}), label: 'Media Analysis' },
                                        { icon: _jsx(PublicIcon, {}), label: 'Digital Storytelling' },
                                    ],
                                    instructor: {
                                        name: 'Alex Smulski',
                                        photo: getImagePath('/photos/583741041_1157902773184394_5619801435922057517_n.jpg'),
                                        role: 'Lead Instructor',
                                    },
                                    badges: ['Certification Included', 'Portfolio Building'],
                                    duration: '6 weeks',
                                    level: 'Intermediate',
                                    color: '#ED2939',
                                    photoPosition: 'right',
                                },
                                {
                                    title: 'Language Learning',
                                    description: 'French language courses for integration. Build confidence in speaking, writing, and understanding French through immersive, practical lessons.',
                                    photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                                    curriculum: [
                                        { icon: _jsx(ChatIcon, {}), label: 'Conversation' },
                                        { icon: _jsx(MenuBookIcon, {}), label: 'Grammar' },
                                        { icon: _jsx(RecordVoiceOverIcon, {}), label: 'Pronunciation' },
                                        { icon: _jsx(TranslateIcon, {}), label: 'Translation' },
                                        { icon: _jsx(GroupIcon, {}), label: 'Group Practice' },
                                        { icon: _jsx(EmojiEventsIcon, {}), label: 'Certification Prep' },
                                    ],
                                    instructor: {
                                        name: 'Louise Papadoperakis',
                                        photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'),
                                        role: 'Lead Instructor',
                                    },
                                    badges: ['Beginner Friendly', 'All Levels', 'Free Access'],
                                    duration: '12 weeks',
                                    level: 'All Levels',
                                    color: '#002395',
                                    photoPosition: 'left',
                                },
                                {
                                    title: 'Arts & Culture',
                                    description: 'Creative expression and cultural heritage. Explore the rich cultural landscape of France and Europe through hands-on workshops and cultural exchanges.',
                                    photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'),
                                    curriculum: [
                                        { icon: _jsx(PaletteIcon, {}), label: 'Visual Arts' },
                                        { icon: _jsx(TheaterComedyIcon, {}), label: 'Theater' },
                                        { icon: _jsx(MusicNoteIcon, {}), label: 'Music & Dance' },
                                        { icon: _jsx(AccountBalanceIcon, {}), label: 'Cultural Heritage' },
                                        { icon: _jsx(BrushIcon, {}), label: 'Creative Workshops' },
                                        { icon: _jsx(CelebrationIcon, {}), label: 'Cultural Events' },
                                    ],
                                    instructor: {
                                        name: 'Louise Papadoperakis',
                                        photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'),
                                        role: 'Lead Instructor',
                                    },
                                    badges: ['All Levels', 'Free Access', 'Cultural Immersion'],
                                    duration: '10 weeks',
                                    level: 'All Levels',
                                    color: '#ED2939',
                                    photoPosition: 'right',
                                },
                            ].map((course, idx) => (_jsx(Box, { sx: { mb: 8 }, children: _jsxs(Grid, { container: true, spacing: 4, alignItems: "center", children: [_jsx(Grid, { size: { xs: 12, md: 6 }, order: { xs: 1, md: course.photoPosition === 'left' ? 1 : 2 }, children: _jsxs(Card, { sx: {
                                                    position: 'relative',
                                                    height: { xs: 300, md: 500 },
                                                    borderRadius: '24px',
                                                    overflow: 'hidden',
                                                    border: '2px solid',
                                                    borderColor: 'divider',
                                                    transition: 'all 0.4s ease',
                                                    '&:hover': {
                                                        transform: 'translateY(-4px)',
                                                        boxShadow: `0 12px 32px ${course.color}30`,
                                                        borderColor: course.color,
                                                        '& .course-photo': {
                                                            transform: 'scale(1.05)',
                                                        },
                                                    },
                                                }, children: [_jsx(Box, { className: "course-photo", component: "img", src: course.photo, alt: course.title, sx: {
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            filter: 'brightness(0.85) saturate(1.1)',
                                                            transition: 'all 0.4s ease',
                                                            zIndex: 0,
                                                        } }), _jsx(Box, { sx: {
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            right: 0,
                                                            bottom: 0,
                                                            background: `linear-gradient(135deg, ${course.color}40 0%, ${course.color}20 100%)`,
                                                            zIndex: 1,
                                                        } }), _jsx(Box, { sx: { position: 'absolute', top: 16, left: 16, zIndex: 2, display: 'flex', flexDirection: 'column', gap: 1 }, children: course.badges.map((badge, badgeIdx) => (_jsx(Chip, { label: badge, size: "small", sx: {
                                                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                                backdropFilter: 'blur(10px)',
                                                                color: course.color,
                                                                fontWeight: 700,
                                                                fontSize: '0.75rem',
                                                                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                                                                border: `1px solid ${course.color}30`,
                                                            } }, badgeIdx))) }), _jsxs(Box, { sx: {
                                                            position: 'absolute',
                                                            bottom: 0,
                                                            left: 0,
                                                            right: 0,
                                                            height: 60,
                                                            background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
                                                            zIndex: 2,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            px: 3,
                                                        }, children: [_jsxs(Box, { sx: { flex: 1, mr: 2 }, children: [_jsx(Box, { sx: {
                                                                            height: 4,
                                                                            backgroundColor: 'rgba(255,255,255,0.3)',
                                                                            borderRadius: 2,
                                                                            overflow: 'hidden',
                                                                            position: 'relative',
                                                                            '&::after': {
                                                                                content: '""',
                                                                                position: 'absolute',
                                                                                top: 0,
                                                                                left: 0,
                                                                                width: '65%',
                                                                                height: '100%',
                                                                                background: `linear-gradient(90deg, ${course.color} 0%, ${course.color}80 100%)`,
                                                                                animation: 'progressBar 2s ease-in-out infinite',
                                                                                '@keyframes progressBar': {
                                                                                    '0%, 100%': { width: '60%' },
                                                                                    '50%': { width: '70%' },
                                                                                },
                                                                            },
                                                                        } }), _jsx(Typography, { variant: "caption", sx: { color: 'white', mt: 0.5, fontSize: '0.7rem' }, children: "Course Progress: 65%" })] }), _jsx(PlayArrowIcon, { sx: { color: 'white', fontSize: 32 } })] }), _jsxs(Box, { sx: {
                                                            position: 'absolute',
                                                            bottom: 80,
                                                            right: 16,
                                                            zIndex: 2,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 1.5,
                                                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                                            backdropFilter: 'blur(10px)',
                                                            borderRadius: '20px',
                                                            p: 1.5,
                                                            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                                                            border: `2px solid ${course.color}30`,
                                                        }, children: [_jsx(Avatar, { src: course.instructor.photo, alt: course.instructor.name, sx: {
                                                                    width: 48,
                                                                    height: 48,
                                                                    border: `2px solid ${course.color}`,
                                                                    boxShadow: `0 2px 8px ${course.color}30`,
                                                                } }), _jsxs(Box, { children: [_jsx(Typography, { variant: "caption", sx: { fontWeight: 700, color: course.color, display: 'block' }, children: course.instructor.name }), _jsx(Typography, { variant: "caption", sx: { color: 'text.secondary', fontSize: '0.7rem' }, children: course.instructor.role })] })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, order: { xs: 2, md: course.photoPosition === 'left' ? 2 : 1 }, children: _jsxs(Box, { sx: { pl: { xs: 0, md: course.photoPosition === 'right' ? 0 : 4 }, pr: { xs: 0, md: course.photoPosition === 'left' ? 0 : 4 } }, children: [_jsx(Typography, { variant: "h4", sx: { fontWeight: 800, color: '#0b1b3a', mb: 2 }, children: course.title }), _jsx(Typography, { variant: "body1", sx: { color: '#0b1b3a', mb: 3, lineHeight: 1.8, fontSize: '1.05rem' }, children: course.description }), _jsxs(Box, { sx: { mb: 4 }, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 700, color: '#0b1b3a', mb: 2 }, children: "What's Inside?" }), _jsx(Grid, { container: true, spacing: 2, children: course.curriculum.map((item, itemIdx) => (_jsx(Grid, { size: { xs: 6, sm: 4 }, children: _jsxs(Box, { sx: {
                                                                            display: 'flex',
                                                                            flexDirection: 'column',
                                                                            alignItems: 'center',
                                                                            gap: 1,
                                                                            p: 2,
                                                                            borderRadius: '12px',
                                                                            border: `2px solid ${course.color}20`,
                                                                            backgroundColor: `${course.color}08`,
                                                                            transition: 'all 0.3s ease',
                                                                            '&:hover': {
                                                                                borderColor: course.color,
                                                                                backgroundColor: `${course.color}15`,
                                                                                transform: 'translateY(-2px)',
                                                                            },
                                                                        }, children: [_jsx(Box, { sx: {
                                                                                    color: course.color,
                                                                                    fontSize: 32,
                                                                                    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
                                                                                }, children: item.icon }), _jsx(Typography, { variant: "caption", sx: { fontWeight: 600, color: '#0b1b3a', textAlign: 'center', fontSize: '0.75rem' }, children: item.label })] }) }, itemIdx))) })] }), _jsxs(Stack, { direction: "row", spacing: 2, sx: { mb: 3, flexWrap: 'wrap' }, children: [_jsx(Chip, { label: course.duration, sx: {
                                                                    backgroundColor: `${course.color}15`,
                                                                    color: course.color,
                                                                    fontWeight: 700,
                                                                    border: `1px solid ${course.color}30`,
                                                                } }), _jsx(Chip, { label: course.level, sx: {
                                                                    backgroundColor: `${course.color}15`,
                                                                    color: course.color,
                                                                    fontWeight: 700,
                                                                    border: `1px solid ${course.color}30`,
                                                                } })] }), _jsx(Button, { component: RouterLink, to: "/contact", variant: "contained", size: "large", endIcon: _jsx(ArrowForwardIcon, {}), sx: {
                                                            px: 4,
                                                            py: 1.5,
                                                            fontSize: '1rem',
                                                            fontWeight: 700,
                                                            borderRadius: '25px',
                                                            backgroundColor: course.color,
                                                            color: 'white',
                                                            boxShadow: `0 6px 20px ${course.color}40`,
                                                            transition: 'all 0.4s ease',
                                                            '&:hover': {
                                                                backgroundColor: course.color === '#002395' ? '#001a7a' : '#c91e2f',
                                                                transform: 'translateY(-2px)',
                                                                boxShadow: `0 8px 24px ${course.color}60`,
                                                                '& .MuiButton-endIcon': {
                                                                    transform: 'translateX(4px)',
                                                                },
                                                            },
                                                            '& .MuiButton-endIcon': {
                                                                transition: 'transform 0.4s ease',
                                                            },
                                                        }, children: "Learn More" })] }) })] }) }, course.title)))] })] }), _jsx(Box, { sx: {
                    py: { xs: 8, sm: 12 },
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.03) 0%, rgba(237, 41, 57, 0.03) 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                }, children: _jsxs(Container, { children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 8 }, children: [_jsx(Chip, { label: "Certification & Impact", sx: {
                                        mb: 2,
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        py: 2,
                                        px: 1,
                                        backgroundColor: '#002395',
                                        color: 'white',
                                        border: '2px solid #002395',
                                        boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                                    } }), _jsx(Typography, { variant: "h3", sx: { fontWeight: 800, color: '#0b1b3a', mb: 2 }, children: "Your Certificate, Your Future" }), _jsx(Typography, { variant: "body1", sx: { color: '#0b1b3a', maxWidth: '700px', mx: 'auto', fontSize: '1.1rem', lineHeight: 1.8 }, children: "Earn an official MITRA FRANCE certificate recognized across Europe. Join thousands of graduates who have transformed their careers." })] }), _jsx(Box, { sx: { mb: 10, position: 'relative' }, children: _jsxs(Grid, { container: true, spacing: 4, alignItems: "center", children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Box, { sx: {
                                                position: 'relative',
                                                perspective: '1000px',
                                                '&:hover .certificate-3d': {
                                                    transform: 'rotateY(-5deg) rotateX(5deg)',
                                                },
                                            }, children: _jsxs(Card, { className: "certificate-3d", sx: {
                                                    position: 'relative',
                                                    height: { xs: 300, md: 450 },
                                                    borderRadius: '24px',
                                                    overflow: 'hidden',
                                                    background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
                                                    border: '3px solid #002395',
                                                    boxShadow: '0 20px 60px rgba(0, 35, 149, 0.3)',
                                                    transformStyle: 'preserve-3d',
                                                    transition: 'transform 0.6s ease',
                                                    p: 4,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between',
                                                }, children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 3 }, children: [_jsx(Typography, { variant: "h4", sx: { fontWeight: 900, color: '#002395', mb: 1, fontSize: { xs: '1.5rem', md: '2rem' } }, children: "MITRA FRANCE" }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 700, color: '#ED2939', mb: 2 }, children: "Certificate of Completion" }), _jsx(Box, { sx: { height: 2, background: 'linear-gradient(90deg, #002395 0%, #ED2939 100%)', mb: 2 } })] }), _jsxs(Box, { sx: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', mb: 3 }, children: [_jsx(Typography, { variant: "body1", sx: { mb: 2, color: '#0b1b3a', fontSize: { xs: '0.9rem', md: '1rem' } }, children: "This is to certify that" }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 800, color: '#002395', mb: 3, fontSize: { xs: '1.2rem', md: '1.5rem' } }, children: "[Your Name]" }), _jsx(Typography, { variant: "body2", sx: { color: '#0b1b3a', mb: 2, fontSize: { xs: '0.85rem', md: '0.95rem' } }, children: "has successfully completed the course" }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 700, color: '#ED2939', mb: 3, fontSize: { xs: '1rem', md: '1.2rem' } }, children: "Digital Literacy & Media Education" }), _jsx(Typography, { variant: "body2", sx: { color: '#0b1b3a', fontSize: { xs: '0.8rem', md: '0.9rem' } }, children: "Date: [Completion Date]" })] }), _jsxs(Box, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mt: 2 }, children: [_jsxs(Box, { children: [_jsxs(Box, { sx: { display: 'flex', gap: 2, mb: 2 }, children: [_jsx(Box, { sx: {
                                                                                    width: 60,
                                                                                    height: 60,
                                                                                    borderRadius: '8px',
                                                                                    backgroundColor: '#002395',
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    justifyContent: 'center',
                                                                                    color: 'white',
                                                                                    fontWeight: 700,
                                                                                    fontSize: '1.2rem',
                                                                                }, children: "MF" }), _jsx(Box, { sx: {
                                                                                    width: 60,
                                                                                    height: 60,
                                                                                    borderRadius: '8px',
                                                                                    backgroundColor: '#ED2939',
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    justifyContent: 'center',
                                                                                    color: 'white',
                                                                                    fontWeight: 700,
                                                                                    fontSize: '0.9rem',
                                                                                    textAlign: 'center',
                                                                                }, children: "Erasmus+" })] }), _jsx(Typography, { variant: "caption", sx: { color: '#0b1b3a', fontSize: '0.7rem' }, children: "Official Seal & Signature" })] }), _jsxs(Box, { sx: { textAlign: 'center' }, children: [_jsx(Box, { sx: {
                                                                            width: 80,
                                                                            height: 80,
                                                                            backgroundColor: '#f5f5f5',
                                                                            border: '2px solid #002395',
                                                                            borderRadius: '8px',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center',
                                                                            mb: 1,
                                                                            position: 'relative',
                                                                            '&::before': {
                                                                                content: '""',
                                                                                position: 'absolute',
                                                                                inset: 4,
                                                                                border: '1px solid #002395',
                                                                                borderRadius: '4px',
                                                                            },
                                                                        }, children: _jsx(Box, { sx: {
                                                                                width: '60%',
                                                                                height: '60%',
                                                                                display: 'grid',
                                                                                gridTemplateColumns: 'repeat(4, 1fr)',
                                                                                gap: 0.5,
                                                                            }, children: Array.from({ length: 16 }).map((_, i) => (_jsx(Box, { sx: {
                                                                                    backgroundColor: i % 3 === 0 ? '#002395' : 'transparent',
                                                                                    borderRadius: '1px',
                                                                                } }, i))) }) }), _jsx(Typography, { variant: "caption", sx: { color: '#0b1b3a', fontSize: '0.7rem', fontWeight: 600 }, children: "QR Verification" })] })] })] }) }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Box, { sx: { pl: { xs: 0, md: 4 } }, children: [_jsx(Typography, { variant: "h5", sx: { fontWeight: 800, color: '#0b1b3a', mb: 2 }, children: "Recognized Across Europe" }), _jsx(Typography, { variant: "body1", sx: { color: '#0b1b3a', mb: 3, lineHeight: 1.8 }, children: "Your MITRA FRANCE certificate is a testament to your commitment to learning and professional growth. It's recognized by educational institutions, employers, and organizations across Europe." }), _jsx(Stack, { spacing: 2, children: [
                                                        { icon: _jsx(CheckCircleIcon, {}), text: 'Official MITRA FRANCE seal and signature' },
                                                        { icon: _jsx(CheckCircleIcon, {}), text: 'Erasmus+ partnership recognition' },
                                                        { icon: _jsx(CheckCircleIcon, {}), text: 'QR code for instant verification' },
                                                        { icon: _jsx(CheckCircleIcon, {}), text: 'Digital and printable formats' },
                                                    ].map((item, idx) => (_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2 }, children: [_jsx(Box, { sx: { color: '#002395', fontSize: 24 }, children: item.icon }), _jsx(Typography, { variant: "body1", sx: { color: '#0b1b3a' }, children: item.text })] }, idx))) })] }) })] }) }), _jsxs(Box, { sx: { mb: 10 }, children: [_jsx(Typography, { variant: "h5", sx: { fontWeight: 800, color: '#0b1b3a', mb: 4, textAlign: 'center' }, children: "Success Stories in Action" }), _jsx(Grid, { container: true, spacing: 3, children: [
                                        {
                                            photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                                            title: 'Graduate with Certificate',
                                            description: 'Celebrating achievement at our office',
                                        },
                                        {
                                            photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                                            title: 'Workshop Completion',
                                            description: 'Group photo after successful workshop in Nice',
                                        },
                                        {
                                            photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                                            title: 'LinkedIn Success',
                                            description: 'Graduate sharing achievement on LinkedIn',
                                        },
                                        {
                                            photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                                            title: 'Career Advancement',
                                            description: 'Using certificate for job applications',
                                        },
                                    ].map((story, idx) => (_jsx(Grid, { size: { xs: 12, sm: 6, md: 3 }, children: _jsxs(Card, { sx: {
                                                position: 'relative',
                                                height: 280,
                                                borderRadius: '20px',
                                                overflow: 'hidden',
                                                border: '2px solid',
                                                borderColor: 'divider',
                                                transition: 'all 0.4s ease',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    transform: 'translateY(-8px)',
                                                    boxShadow: '0 12px 32px rgba(0, 35, 149, 0.3)',
                                                    borderColor: '#002395',
                                                    '& .story-photo': {
                                                        transform: 'scale(1.1)',
                                                    },
                                                },
                                            }, children: [_jsx(Box, { className: "story-photo", component: "img", src: story.photo, alt: story.title, sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        filter: 'brightness(0.85) saturate(1.1)',
                                                        transition: 'all 0.4s ease',
                                                        zIndex: 0,
                                                    } }), _jsx(Box, { sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: 'linear-gradient(180deg, transparent 0%, rgba(0, 35, 149, 0.9) 100%)',
                                                        zIndex: 1,
                                                    } }), _jsxs(Box, { sx: {
                                                        position: 'absolute',
                                                        bottom: 0,
                                                        left: 0,
                                                        right: 0,
                                                        p: 2.5,
                                                        zIndex: 2,
                                                    }, children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 800, color: 'white', mb: 0.5, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }, children: story.title }), _jsx(Typography, { variant: "caption", sx: { color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }, children: story.description })] })] }) }, idx))) })] }), _jsxs(Box, { sx: { mb: 10 }, children: [_jsx(Typography, { variant: "h5", sx: { fontWeight: 800, color: '#0b1b3a', mb: 4, textAlign: 'center' }, children: "Where Your Certificate Makes a Difference" }), _jsx(Grid, { container: true, spacing: 4, children: [
                                        {
                                            title: 'CV Boost',
                                            description: 'Stand out from other candidates with a recognized European certificate',
                                            icon: _jsx(StarIcon, {}),
                                            photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                                            color: '#FF9800',
                                        },
                                        {
                                            title: 'International Recognition',
                                            description: 'Valued by employers and institutions across 15+ European countries',
                                            icon: _jsx(PublicIcon, {}),
                                            photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                                            color: '#002395',
                                        },
                                        {
                                            title: 'Career Growth',
                                            description: 'Open doors to new opportunities and professional advancement',
                                            icon: _jsx(TrendingUpIcon, {}),
                                            photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                                            color: '#ED2939',
                                        },
                                    ].map((benefit, idx) => (_jsx(Grid, { size: { xs: 12, md: 4 }, children: _jsxs(Card, { sx: {
                                                position: 'relative',
                                                height: 350,
                                                borderRadius: '24px',
                                                overflow: 'hidden',
                                                border: '2px solid',
                                                borderColor: 'divider',
                                                transition: 'all 0.4s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-8px)',
                                                    boxShadow: `0 12px 32px ${benefit.color}30`,
                                                    borderColor: benefit.color,
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
                                                        filter: 'brightness(0.6) saturate(1.1)',
                                                        transition: 'all 0.4s ease',
                                                        zIndex: 0,
                                                    } }), _jsx(Box, { sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: `linear-gradient(135deg, ${benefit.color}80 0%, ${benefit.color}60 100%)`,
                                                        zIndex: 1,
                                                    } }), _jsxs(Box, { sx: {
                                                        position: 'relative',
                                                        zIndex: 2,
                                                        height: '100%',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        p: 4,
                                                        textAlign: 'center',
                                                    }, children: [_jsx(Box, { sx: {
                                                                width: 80,
                                                                height: 80,
                                                                borderRadius: '50%',
                                                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                mb: 3,
                                                                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                                                                color: benefit.color,
                                                                fontSize: 40,
                                                            }, children: benefit.icon }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 800, color: 'white', mb: 2, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }, children: benefit.title }), _jsx(Typography, { variant: "body1", sx: { color: 'rgba(255, 255, 255, 0.95)', textShadow: '0 1px 4px rgba(0,0,0,0.5)', lineHeight: 1.6 }, children: benefit.description })] })] }) }, idx))) })] }), _jsxs(Box, { sx: {
                                position: 'relative',
                                borderRadius: '32px',
                                overflow: 'hidden',
                                minHeight: 400,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                p: 6,
                            }, children: [_jsx(Box, { component: "img", src: getImagePath("/photos/583924019_1157903166517688_8756873269993443102_n.jpg"), alt: "Students Learning", sx: {
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'blur(2px) brightness(0.5)',
                                        zIndex: 0,
                                    } }), _jsx(Box, { sx: {
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.8) 0%, rgba(237, 41, 57, 0.8) 100%)',
                                        zIndex: 1,
                                    } }), _jsxs(Box, { sx: { position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }, children: [_jsx(Typography, { variant: "h3", sx: { fontWeight: 900, color: 'white', mb: 2, textShadow: '0 2px 12px rgba(0,0,0,0.5)' }, children: "Start Your Journey Today" }), _jsx(Typography, { variant: "h6", sx: { color: 'rgba(255, 255, 255, 0.95)', mb: 4, textShadow: '0 1px 6px rgba(0,0,0,0.5)' }, children: "Join thousands of students transforming their careers with MITRA FRANCE" }), _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 4 }, children: [_jsx(AvatarGroup, { max: 5, sx: {
                                                        '& .MuiAvatar-root': {
                                                            width: 40,
                                                            height: 40,
                                                            border: '2px solid white',
                                                            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                                                        },
                                                    }, children: [
                                                        '/photos/583924019_1157903166517688_8756873269993443102_n.jpg',
                                                        '/photos/584326681_1157904053184266_2071216266526493174_n.jpg',
                                                        '/photos/583943471_1157911509850187_2575083228465038744_n.jpg',
                                                        '/photos/572851437_1143811217926883_7725194936764095335_n.jpg',
                                                        '/photos/571419367_1143811194593552_6930038688628840775_n.jpg',
                                                    ].map((photo, idx) => (_jsx(Avatar, { src: photo, alt: `Student ${idx + 1}` }, idx))) }), _jsxs(Typography, { variant: "body2", sx: { color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }, children: ["Joined by ", _jsx("strong", { children: "500+" }), " students this month"] })] }), _jsx(Button, { component: RouterLink, to: "/contact", variant: "contained", size: "large", endIcon: _jsx(ArrowForwardIcon, {}), sx: {
                                                px: 6,
                                                py: 2.5,
                                                fontSize: '1.2rem',
                                                fontWeight: 800,
                                                borderRadius: '30px',
                                                backgroundColor: 'white',
                                                color: '#002395',
                                                boxShadow: '0 8px 32px rgba(255, 255, 255, 0.4)',
                                                transition: 'all 0.4s ease',
                                                '&:hover': {
                                                    backgroundColor: '#f5f5f5',
                                                    transform: 'translateY(-4px) scale(1.05)',
                                                    boxShadow: '0 12px 40px rgba(255, 255, 255, 0.6)',
                                                    '& .MuiButton-endIcon': {
                                                        transform: 'translateX(6px)',
                                                    },
                                                },
                                                '& .MuiButton-endIcon': {
                                                    transition: 'transform 0.4s ease',
                                                },
                                            }, children: "Enroll Now" })] })] })] }) }), _jsx(Snackbar, { open: actionFeedback.open, autoHideDuration: 4000, onClose: () => setActionFeedback({ ...actionFeedback, open: false }), anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, children: _jsx(Alert, { onClose: () => setActionFeedback({ ...actionFeedback, open: false }), severity: actionFeedback.type, sx: { width: '100%' }, children: actionFeedback.message }) })] }));
}
