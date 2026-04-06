import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import RuleIcon from '@mui/icons-material/Rule';
import RefreshIcon from '@mui/icons-material/Refresh';
import PaletteIcon from '@mui/icons-material/Palette';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SchoolIcon from '@mui/icons-material/School';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleIcon from '@mui/icons-material/People';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
export default function MediaArtsEducation() {
    // State for persona selection
    const [selectedPersona, setSelectedPersona] = useState('senior');
    // State for metrics
    const [satisfactionMetrics, setSatisfactionMetrics] = useState({
        engagement: 0,
        timeOnPage: 0,
        interactions: 0,
    });
    const [userCommitments, setUserCommitments] = useState([]);
    const [behaviorGoals, setBehaviorGoals] = useState([]);
    const [actionFeedback, setActionFeedback] = useState({
        open: false,
        message: '',
        type: 'success',
    });
    const showFeedback = (message, type = 'success') => {
        setActionFeedback({ open: true, message, type });
    };
    const handleCloseFeedback = () => {
        setActionFeedback({ ...actionFeedback, open: false });
    };
    return (_jsxs(Box, { children: [_jsx(Box, { sx: {
                    background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.05) 0%, rgba(0, 35, 149, 0.05) 100%)',
                    pt: { xs: 10, sm: 12, md: 14 },
                    pb: { xs: 6, sm: 8 },
                    mb: 0,
                }, children: _jsx(Container, { children: _jsxs(Box, { sx: { textAlign: 'center', mb: 4 }, children: [_jsx(Chip, { icon: _jsx(PaletteIcon, {}), label: "Media & Arts Education", color: "error", sx: { mb: 2, fontWeight: 600 } }), _jsx(Typography, { variant: "h2", sx: {
                                    mb: 2,
                                    fontWeight: 700,
                                    background: 'linear-gradient(135deg, #ED2939 0%, #002395 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }, children: "Media & Arts Education" }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { maxWidth: '700px', mx: 'auto', fontSize: '1.1rem', mb: 4 }, children: "Fostering media literacy, arts education, and creative technologies for personal and professional development." }), _jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 2, justifyContent: "center", sx: { mb: 4 }, children: [_jsx(Button, { component: Link, to: "/courses", variant: "contained", size: "large", startIcon: _jsx(SchoolIcon, {}), endIcon: _jsx(ArrowForwardIcon, {}), onClick: () => {
                                            setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                                        }, sx: {
                                            px: 4,
                                            py: 1.5,
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            background: 'linear-gradient(135deg, #ED2939 0%, #002395 100%)',
                                            '&:hover': {
                                                background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 8px 16px rgba(0, 35, 149, 0.3)',
                                            },
                                            transition: 'all 0.3s ease',
                                            textDecoration: 'none',
                                        }, children: "Start Learning Now" }), _jsx(Button, { component: Link, to: "/programs-workshops", variant: "outlined", size: "large", startIcon: _jsx(PlayArrowIcon, {}), onClick: () => {
                                            setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                                        }, sx: {
                                            px: 4,
                                            py: 1.5,
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            borderWidth: 2,
                                            '&:hover': {
                                                borderWidth: 2,
                                                transform: 'translateY(-2px)',
                                            },
                                            transition: 'all 0.3s ease',
                                            textDecoration: 'none',
                                        }, children: "Explore Programs" })] }), _jsxs(Box, { sx: { display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap', mt: 4 }, children: [_jsxs(Box, { sx: { textAlign: 'center' }, children: [_jsx(Typography, { variant: "h4", sx: { fontWeight: 700, color: 'primary.main', mb: 0.5 }, children: "1,200+" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Active Learners" })] }), _jsxs(Box, { sx: { textAlign: 'center' }, children: [_jsx(Typography, { variant: "h4", sx: { fontWeight: 700, color: 'success.main', mb: 0.5 }, children: "95%" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Satisfaction Rate" })] }), _jsxs(Box, { sx: { textAlign: 'center' }, children: [_jsx(Typography, { variant: "h4", sx: { fontWeight: 700, color: 'warning.main', mb: 0.5 }, children: "Free" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "All Programs" })] })] })] }) }) }), _jsx(Box, { sx: {
                    py: { xs: 6, sm: 8 },
                    background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.03) 0%, rgba(0, 35, 149, 0.03) 100%)',
                    mt: 0,
                }, children: _jsxs(Container, { children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 6 }, children: [_jsx(Typography, { variant: "h3", sx: { mb: 2, fontWeight: 700 }, children: "Why Choose Our Programs?" }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }, children: "Discover the immediate benefits and long-term value of joining our Media & Arts Education community." })] }), _jsx(Grid, { container: true, spacing: 4, children: [
                                {
                                    icon: _jsx(TrendingUpIcon, {}),
                                    title: 'Career Advancement',
                                    description: 'Build skills that employers value. 78% of our graduates report career improvements within 6 months.',
                                    color: 'primary',
                                },
                                {
                                    icon: _jsx(PeopleIcon, {}),
                                    title: 'Community Connection',
                                    description: 'Join a supportive network of learners, creators, and professionals who share your passion.',
                                    color: 'success',
                                },
                                {
                                    icon: _jsx(AccessTimeIcon, {}),
                                    title: 'Flexible Learning',
                                    description: 'Learn at your own pace, on your schedule. No deadlines, no pressure - just progress.',
                                    color: 'info',
                                },
                                {
                                    icon: _jsx(StarIcon, {}),
                                    title: 'Expert Guidance',
                                    description: 'Learn from industry professionals and experienced educators who are passionate about your success.',
                                    color: 'warning',
                                },
                            ].map((benefit, index) => (_jsx(Grid, { size: { xs: 12, sm: 6, md: 3 }, children: _jsxs(Card, { sx: {
                                        p: 3,
                                        height: '100%',
                                        textAlign: 'center',
                                        border: '2px solid',
                                        borderColor: `${benefit.color}.main`,
                                        borderRadius: 3,
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 100%)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: `0 12px 24px rgba(0, 0, 0, 0.15)`,
                                        },
                                    }, children: [_jsx(Box, { sx: {
                                                width: 64,
                                                height: 64,
                                                borderRadius: 2,
                                                background: `linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mx: 'auto',
                                                mb: 2,
                                            }, children: _jsx(Box, { sx: { color: `${benefit.color}.main`, fontSize: 32 }, children: benefit.icon }) }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 700, mb: 1.5 }, children: benefit.title }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { lineHeight: 1.7 }, children: benefit.description })] }) }, index))) }), _jsx(Box, { sx: { textAlign: 'center', mt: 6 }, children: _jsx(Button, { component: Link, to: "/courses", variant: "contained", size: "large", startIcon: _jsx(CheckCircleIcon, {}), endIcon: _jsx(ArrowForwardIcon, {}), onClick: () => {
                                    setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                                }, sx: {
                                    px: 6,
                                    py: 2,
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    background: 'linear-gradient(135deg, #ED2939 0%, #002395 100%)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                                        transform: 'translateY(-3px)',
                                        boxShadow: '0 12px 24px rgba(0, 35, 149, 0.4)',
                                    },
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none',
                                }, children: "Get Started Today - It's Free!" }) })] }) }), _jsx(Box, { sx: {
                    py: { xs: 6, sm: 8 },
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
                }, children: _jsxs(Container, { children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 6 }, children: [_jsx(Typography, { variant: "h3", sx: { mb: 2, fontWeight: 700 }, children: "Get Started in 3 Simple Steps" }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }, children: "We've made it incredibly easy to begin your learning journey. No complicated forms, no long wait times." })] }), _jsx(Grid, { container: true, spacing: 4, sx: { mb: 6 }, children: [
                                {
                                    step: '1',
                                    title: 'Choose Your Program',
                                    description: 'Browse our programs and pick one that matches your interests. Takes less than 2 minutes.',
                                    icon: _jsx(SchoolIcon, {}),
                                    color: 'primary',
                                },
                                {
                                    step: '2',
                                    title: 'Quick Registration',
                                    description: 'Simple sign-up process. Just your name and email - that\'s it! No credit card required.',
                                    icon: _jsx(CheckCircleIcon, {}),
                                    color: 'success',
                                },
                                {
                                    step: '3',
                                    title: 'Start Learning',
                                    description: 'Access your program immediately. Learn at your own pace, whenever you want.',
                                    icon: _jsx(PlayArrowIcon, {}),
                                    color: 'info',
                                },
                            ].map((item, index) => (_jsx(Grid, { size: { xs: 12, md: 4 }, children: _jsxs(Card, { sx: {
                                        p: 4,
                                        height: '100%',
                                        textAlign: 'center',
                                        border: '2px solid',
                                        borderColor: `${item.color}.main`,
                                        borderRadius: 3,
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 100%)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: `0 12px 24px rgba(0, 0, 0, 0.15)`,
                                        },
                                    }, children: [_jsx(Box, { sx: {
                                                width: 56,
                                                height: 56,
                                                borderRadius: '50%',
                                                background: `linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mx: 'auto',
                                                mb: 2,
                                                fontSize: 24,
                                                fontWeight: 700,
                                                color: `${item.color}.main`,
                                            }, children: item.step }), _jsx(Box, { sx: {
                                                width: 48,
                                                height: 48,
                                                borderRadius: 2,
                                                background: `linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mx: 'auto',
                                                mb: 2,
                                            }, children: _jsx(Box, { sx: { color: `${item.color}.main`, fontSize: 28 }, children: item.icon }) }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 700, mb: 1.5 }, children: item.title }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { lineHeight: 1.7 }, children: item.description })] }) }, index))) }), _jsx(Box, { sx: { textAlign: 'center' }, children: _jsx(Button, { component: Link, to: "/programs-workshops", variant: "contained", size: "large", startIcon: _jsx(ArrowForwardIcon, {}), onClick: () => {
                                    setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                                }, sx: {
                                    px: 6,
                                    py: 2,
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    background: 'linear-gradient(135deg, #ED2939 0%, #002395 100%)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                                        transform: 'translateY(-3px)',
                                        boxShadow: '0 12px 24px rgba(0, 35, 149, 0.4)',
                                    },
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none',
                                }, children: "Browse All Programs" }) })] }) }), _jsx(Box, { sx: {
                    py: { xs: 8, sm: 10 },
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.03) 0%, rgba(237, 41, 57, 0.03) 100%)',
                    position: 'relative',
                }, children: _jsxs(Container, { children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 6 }, children: [_jsx(Chip, { icon: _jsx(LightbulbIcon, {}), label: "Conceptual Design", color: "primary", sx: { mb: 2, fontWeight: 600 } }), _jsx(Typography, { variant: "h2", sx: { mb: 2, fontWeight: 700 }, children: "Our Design Vision" }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }, children: "Every element of our platform is built on a solid conceptual foundation. We've defined the problem, understood our users, and created a coherent vision that guides every design decision." })] }), _jsxs(Grid, { container: true, spacing: 4, children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            height: '100%',
                                            border: '2px solid',
                                            borderColor: 'primary.main',
                                            borderRadius: 3,
                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                                            },
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(Box, { sx: {
                                                            width: 56,
                                                            height: 56,
                                                            borderRadius: 2,
                                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(LightbulbIcon, { sx: { fontSize: 32, color: 'primary.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'primary.main' }, children: "1. Problem Definition" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "We identified the core challenges facing our communities and designed solutions to address them." }), _jsxs(Stack, { spacing: 2, children: [_jsxs(Box, { sx: {
                                                            p: 2.5,
                                                            borderRadius: 2,
                                                            border: '1px solid',
                                                            borderColor: 'error.main',
                                                            backgroundColor: 'rgba(237, 41, 57, 0.05)',
                                                        }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 700, mb: 1, color: 'error.main' }, children: "The Challenge" }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { lineHeight: 1.7 }, children: "Many people in our communities face barriers to education, digital literacy, and social integration. They need accessible, free resources to grow and connect." })] }), _jsxs(Box, { sx: {
                                                            p: 2.5,
                                                            borderRadius: 2,
                                                            border: '1px solid',
                                                            borderColor: 'success.main',
                                                            backgroundColor: 'rgba(76, 175, 80, 0.05)',
                                                        }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 700, mb: 1, color: 'success.main' }, children: "Our Solution" }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { lineHeight: 1.7 }, children: "A comprehensive platform offering free education, digital skills training, cultural activities, and community support - all designed to break down barriers and create opportunities." })] }), _jsxs(Box, { sx: {
                                                            p: 2.5,
                                                            borderRadius: 2,
                                                            border: '1px solid',
                                                            borderColor: 'primary.main',
                                                            backgroundColor: 'rgba(0, 35, 149, 0.05)',
                                                        }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 700, mb: 1, color: 'primary.main' }, children: "Design Goal" }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { lineHeight: 1.7 }, children: "Create an intuitive, accessible, and engaging experience that makes it easy for anyone to find and access the resources they need." })] })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            height: '100%',
                                            border: '2px solid',
                                            borderColor: 'success.main',
                                            borderRadius: 3,
                                            background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 24px rgba(76, 175, 80, 0.15)',
                                            },
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(Box, { sx: {
                                                            width: 56,
                                                            height: 56,
                                                            borderRadius: 2,
                                                            background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.2) 100%)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(PersonPinIcon, { sx: { fontSize: 32, color: 'success.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'success.main' }, children: "2. User Personas & Scenarios" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "We've developed detailed personas representing our target users and scenarios showing how they interact with our platform." }), _jsxs(Tabs, { value: selectedPersona, onChange: (_, value) => value && setSelectedPersona(value), sx: { mb: 3 }, children: [_jsx(Tab, { label: "Senior", value: "senior" }), _jsx(Tab, { label: "Youth", value: "youth" }), _jsx(Tab, { label: "Migrant", value: "migrant" })] }), _jsxs(Box, { sx: { minHeight: '200px' }, children: [selectedPersona === 'senior' && (_jsxs(Box, { children: [_jsx(Typography, { variant: "h6", gutterBottom: true, sx: { fontWeight: 700 }, children: "Marie, 68, Retired Teacher" }), _jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2, lineHeight: 1.7 }, children: [_jsx("strong", { children: "Goal:" }), " Learn digital skills to stay connected with family"] }), _jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2, lineHeight: 1.7 }, children: [_jsx("strong", { children: "Scenario:" }), " Marie visits our site, finds the Digital Literacy program, registers in 2 minutes, and starts learning at her own pace."] }), _jsxs(Stack, { direction: "row", spacing: 1, sx: { mb: 2, flexWrap: 'wrap', gap: 1 }, children: [_jsx(Chip, { label: "Digital Literacy Program", color: "primary", size: "small" }), _jsx(Chip, { label: "Self-Paced Learning", color: "info", size: "small" })] }), _jsx(Button, { component: Link, to: "/courses", variant: "outlined", size: "small", startIcon: _jsx(SchoolIcon, {}), onClick: () => {
                                                                    setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                                                                }, sx: { mt: 1, textDecoration: 'none' }, children: "View Program" })] })), selectedPersona === 'youth' && (_jsxs(Box, { children: [_jsx(Typography, { variant: "h6", gutterBottom: true, sx: { fontWeight: 700 }, children: "Ahmed, 22, University Student" }), _jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2, lineHeight: 1.7 }, children: [_jsx("strong", { children: "Goal:" }), " Build skills and network for career development"] }), _jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2, lineHeight: 1.7 }, children: [_jsx("strong", { children: "Scenario:" }), " Ahmed explores our programs, joins a Media & Arts workshop, connects with peers, and gains valuable experience for his portfolio."] }), _jsxs(Stack, { direction: "row", spacing: 1, sx: { mb: 2, flexWrap: 'wrap', gap: 1 }, children: [_jsx(Chip, { label: "Media & Arts", color: "primary", size: "small" }), _jsx(Chip, { label: "Networking", color: "success", size: "small" })] }), _jsx(Button, { component: Link, to: "/programs-workshops", variant: "outlined", size: "small", startIcon: _jsx(PeopleIcon, {}), onClick: () => {
                                                                    setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                                                                }, sx: { mt: 1, textDecoration: 'none' }, children: "Join Workshop" })] })), selectedPersona === 'migrant' && (_jsxs(Box, { children: [_jsx(Typography, { variant: "h6", gutterBottom: true, sx: { fontWeight: 700 }, children: "Sofia, 35, New to France" }), _jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2, lineHeight: 1.7 }, children: [_jsx("strong", { children: "Goal:" }), " Integrate into French society and learn the language"] }), _jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2, lineHeight: 1.7 }, children: [_jsx("strong", { children: "Scenario:" }), " Sofia discovers our Intercultural Education programs, attends cultural events, practices French, and builds a supportive community."] }), _jsxs(Stack, { direction: "row", spacing: 1, sx: { mb: 2, flexWrap: 'wrap', gap: 1 }, children: [_jsx(Chip, { label: "Intercultural Education", color: "primary", size: "small" }), _jsx(Chip, { label: "Language Support", color: "warning", size: "small" })] }), _jsx(Button, { component: Link, to: "/intercultural-education", variant: "outlined", size: "small", startIcon: _jsx(SchoolIcon, {}), onClick: () => {
                                                                    setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                                                                }, sx: { mt: 1, textDecoration: 'none' }, children: "Explore Programs" })] }))] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            height: '100%',
                                            border: '2px solid',
                                            borderColor: 'info.main',
                                            borderRadius: 3,
                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 24px rgba(0, 35, 149, 0.15)',
                                            },
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(Box, { sx: {
                                                            width: 56,
                                                            height: 56,
                                                            borderRadius: 2,
                                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(ArchitectureIcon, { sx: { fontSize: 32, color: 'info.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'info.main' }, children: "3. Information Architecture" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Our content is organized in a clear, logical structure that makes navigation intuitive." }), _jsx(Stack, { spacing: 2, children: [
                                                    { level: 'Home', items: ['Overview', 'Quick Actions', 'Focus Areas'] },
                                                    { level: 'Programs', items: ['Education', 'Digital Skills', 'Arts & Media'] },
                                                    { level: 'Community', items: ['Events', 'Volunteering', 'Partners'] },
                                                    { level: 'Support', items: ['Contact', 'Resources', 'FAQ'] },
                                                ].map((section) => (_jsxs(Box, { sx: {
                                                        p: 2,
                                                        borderRadius: 2,
                                                        border: '1px solid',
                                                        borderColor: 'info.main',
                                                        backgroundColor: 'rgba(0, 35, 149, 0.05)',
                                                    }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 700, mb: 1, color: 'info.main' }, children: section.level }), _jsx(Stack, { direction: "row", spacing: 1, flexWrap: "wrap", children: section.items.map((item) => (_jsx(Chip, { label: item, size: "small", sx: { fontSize: '0.7rem' } }, item))) })] }, section.level))) })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            height: '100%',
                                            border: '2px solid',
                                            borderColor: 'warning.main',
                                            borderRadius: 3,
                                            background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 24px rgba(255, 152, 0, 0.15)',
                                            },
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(Box, { sx: {
                                                            width: 56,
                                                            height: 56,
                                                            borderRadius: 2,
                                                            background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.2) 100%)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(RuleIcon, { sx: { fontSize: 32, color: 'warning.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'warning.main' }, children: "4. Design Principles" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "High-level principles that guide every design decision and ensure consistency." }), _jsx(Stack, { spacing: 2, children: [
                                                    { principle: 'Accessibility First', description: 'Design for everyone, regardless of ability or background', benefit: 'Everyone can participate' },
                                                    { principle: 'Simplicity', description: 'Reduce complexity, remove barriers, make it easy', benefit: 'No learning curve' },
                                                    { principle: 'Transparency', description: 'Clear information, honest communication, no hidden costs', benefit: '100% free, always' },
                                                    { principle: 'Community Focus', description: 'People-first approach, build connections, foster belonging', benefit: 'Join 1,200+ members' },
                                                    { principle: 'Continuous Improvement', description: 'Iterate based on feedback, evolve with user needs', benefit: 'Your voice matters' },
                                                ].map((item) => (_jsxs(Box, { sx: {
                                                        p: 2.5,
                                                        borderRadius: 2,
                                                        border: '2px solid',
                                                        borderColor: 'warning.main',
                                                        backgroundColor: 'rgba(255, 152, 0, 0.05)',
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(255, 152, 0, 0.1)',
                                                            transform: 'translateX(4px)',
                                                        },
                                                    }, children: [_jsxs(Box, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 700, color: 'warning.main' }, children: item.principle }), _jsx(Chip, { label: item.benefit, size: "small", color: "warning", variant: "outlined", sx: { fontSize: '0.65rem', height: 20 } })] }), _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { display: 'block', lineHeight: 1.6 }, children: item.description })] }, item.principle))) })] }) })] }), _jsx(Box, { sx: { mt: 6 }, children: _jsxs(Card, { sx: {
                                    p: 4,
                                    border: '2px solid',
                                    borderColor: 'info.main',
                                    borderRadius: 3,
                                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                                }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(RefreshIcon, { sx: { fontSize: 32, color: 'info.main' } }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'info.main' }, children: "5. Continuous Iteration" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 4, lineHeight: 1.7 }, children: "We continuously refine our design based on user feedback, testing, and stakeholder input. Our iterative approach ensures the platform evolves to meet changing needs." }), _jsxs(Grid, { container: true, spacing: 3, children: [_jsx(Grid, { size: { xs: 12, md: 4 }, children: _jsxs(Box, { sx: {
                                                        p: 3,
                                                        borderRadius: 2,
                                                        border: '1px solid',
                                                        borderColor: 'info.main',
                                                        backgroundColor: 'rgba(0, 35, 149, 0.05)',
                                                        textAlign: 'center',
                                                    }, children: [_jsx(Typography, { variant: "h4", sx: { fontWeight: 700, color: 'info.main', mb: 1 }, children: satisfactionMetrics.interactions }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "User Interactions Tracked" })] }) }), _jsx(Grid, { size: { xs: 12, md: 4 }, children: _jsxs(Box, { sx: {
                                                        p: 3,
                                                        borderRadius: 2,
                                                        border: '1px solid',
                                                        borderColor: 'success.main',
                                                        backgroundColor: 'rgba(76, 175, 80, 0.05)',
                                                        textAlign: 'center',
                                                    }, children: [_jsx(Typography, { variant: "h4", sx: { fontWeight: 700, color: 'success.main', mb: 1 }, children: userCommitments.length + behaviorGoals.length }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Goals & Commitments" })] }) }), _jsx(Grid, { size: { xs: 12, md: 4 }, children: _jsxs(Box, { sx: {
                                                        p: 3,
                                                        borderRadius: 2,
                                                        border: '1px solid',
                                                        borderColor: 'warning.main',
                                                        backgroundColor: 'rgba(255, 152, 0, 0.05)',
                                                        textAlign: 'center',
                                                    }, children: [_jsx(Typography, { variant: "h4", sx: { fontWeight: 700, color: 'warning.main', mb: 1 }, children: "Ongoing" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Design Improvements" })] }) })] }), _jsx(Box, { sx: { mt: 4 }, children: _jsxs(Card, { sx: {
                                                p: 4,
                                                background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.05) 0%, rgba(0, 35, 149, 0.05) 100%)',
                                                borderRadius: 3,
                                                border: '1px solid',
                                                borderColor: 'divider',
                                            }, children: [_jsx(Typography, { variant: "h5", sx: {
                                                        mb: 2,
                                                        fontWeight: 700,
                                                        color: 'error.main',
                                                        textAlign: 'center',
                                                    }, children: "Ready to get involved?" }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: {
                                                        mb: 4,
                                                        textAlign: 'center',
                                                        maxWidth: '600px',
                                                        mx: 'auto',
                                                    }, children: "Explore our programs, join events, or contact us to learn more about this focus area." }), _jsxs(Grid, { container: true, spacing: 2, children: [_jsx(Grid, { size: { xs: 12, sm: 6 }, children: _jsx(Button, { component: Link, to: "/media-arts-education", variant: "contained", color: "error", fullWidth: true, endIcon: _jsx(ArrowForwardIcon, {}), onClick: () => {
                                                                    setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                                                                }, sx: {
                                                                    px: 4,
                                                                    py: 1.5,
                                                                    fontSize: '1rem',
                                                                    fontWeight: 600,
                                                                    textDecoration: 'none',
                                                                    background: 'linear-gradient(135deg, #ED2939 0%, #C21807 100%)',
                                                                    '&:hover': {
                                                                        background: 'linear-gradient(135deg, #C21807 0%, #ED2939 100%)',
                                                                        transform: 'translateY(-2px)',
                                                                        boxShadow: '0 8px 16px rgba(237, 41, 57, 0.3)',
                                                                    },
                                                                    transition: 'all 0.3s ease',
                                                                }, children: "View Projects" }) }), _jsx(Grid, { size: { xs: 12, sm: 6 }, children: _jsx(Button, { component: Link, to: "/events", variant: "outlined", color: "error", fullWidth: true, onClick: () => {
                                                                    setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                                                                }, sx: {
                                                                    px: 4,
                                                                    py: 1.5,
                                                                    fontSize: '1rem',
                                                                    fontWeight: 600,
                                                                    textDecoration: 'none',
                                                                    borderWidth: 2,
                                                                    borderColor: 'error.main',
                                                                    color: 'error.main',
                                                                    '&:hover': {
                                                                        borderWidth: 2,
                                                                        borderColor: 'error.dark',
                                                                        backgroundColor: 'rgba(237, 41, 57, 0.05)',
                                                                        transform: 'translateY(-2px)',
                                                                    },
                                                                    transition: 'all 0.3s ease',
                                                                }, children: "Join Events" }) })] })] }) })] }) })] }) }), _jsx(Snackbar, { open: actionFeedback.open, autoHideDuration: 4000, onClose: handleCloseFeedback, anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, children: _jsx(Alert, { onClose: handleCloseFeedback, severity: actionFeedback.type, sx: { width: '100%' }, children: actionFeedback.message }) })] }));
}
