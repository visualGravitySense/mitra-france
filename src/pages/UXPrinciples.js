import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LayersIcon from '@mui/icons-material/Layers';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NavigationIcon from '@mui/icons-material/Navigation';
import BlockIcon from '@mui/icons-material/Block';
import SpeedIcon from '@mui/icons-material/Speed';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import MouseIcon from '@mui/icons-material/Mouse';
import LabelIcon from '@mui/icons-material/Label';
import SpaceBarIcon from '@mui/icons-material/SpaceBar';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import GridViewIcon from '@mui/icons-material/GridView';
import ImageIcon from '@mui/icons-material/Image';
import PatternIcon from '@mui/icons-material/Pattern';
import DevicesIcon from '@mui/icons-material/Devices';
import AnimationIcon from '@mui/icons-material/Animation';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import InfoIcon from '@mui/icons-material/Info';
import UndoIcon from '@mui/icons-material/Undo';
import CelebrationIcon from '@mui/icons-material/Celebration';
export default function UXPrinciples() {
    // Make it Clear, Where to Act: Track interactions for feedback
    const [hoveredElement, setHoveredElement] = useState(null);
    const [clickedElement, setClickedElement] = useState(null);
    const [actionFeedback, setActionFeedback] = useState({
        open: false,
        message: '',
        type: 'success',
    });
    const showFeedback = (message, type = 'success') => {
        setActionFeedback({ open: true, message, type });
    };
    return (_jsxs(Box, { children: [_jsx(Box, { sx: {
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
                    pt: { xs: 10, sm: 12, md: 14 },
                    pb: { xs: 6, sm: 8 },
                    mb: 0,
                }, children: _jsxs(Container, { children: [_jsx(Button, { component: RouterLink, to: "/", startIcon: _jsx(ArrowBackIcon, {}), sx: { mb: 3 }, children: "Back to Home" }), _jsxs(Box, { sx: { textAlign: 'center' }, children: [_jsx(Chip, { icon: _jsx(PsychologyIcon, {}), label: "UX Design Principles", color: "primary", sx: { mb: 2, fontWeight: 600 } }), _jsx(Typography, { variant: "h2", sx: {
                                        mb: 2,
                                        background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }, children: "UX Design Philosophy" }), _jsx(Typography, { variant: "h5", color: "text.secondary", sx: { maxWidth: '800px', mx: 'auto' }, children: "Explore the comprehensive UX principles and behavioral design strategies that guide our platform design" })] })] }) }), _jsx(Box, { sx: {
                    py: { xs: 8, sm: 10 },
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(248, 249, 250, 1) 100%)',
                    position: 'relative',
                    mt: 0,
                }, children: _jsxs(Container, { children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 6 }, children: [_jsx(Chip, { icon: _jsx(VisibilityOffIcon, {}), label: "Clear Design", color: "primary", sx: { mb: 2, fontWeight: 600 } }), _jsx(Typography, { variant: "h2", sx: { mb: 2, fontWeight: 700 }, children: "Focus on What Matters" }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }, children: "We've designed this page to minimize distractions and help you focus on the most important information. Every element serves a purpose." })] }), _jsxs(Grid, { container: true, spacing: 4, children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            height: '100%',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            borderRadius: 3,
                                            backgroundColor: 'white',
                                            boxShadow: 'none',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                                            },
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(Box, { sx: {
                                                            width: 48,
                                                            height: 48,
                                                            borderRadius: 2,
                                                            backgroundColor: 'rgba(0, 35, 149, 0.08)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(CheckCircleIcon, { sx: { fontSize: 24, color: 'primary.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 600, color: 'text.primary' }, children: "1. Keep it Simple" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Clean, straightforward design with only essential elements. No excessive images or icons that distract from the main content." }), _jsxs(Box, { sx: {
                                                    p: 2,
                                                    borderRadius: 2,
                                                    backgroundColor: 'rgba(0, 35, 149, 0.03)',
                                                    border: '1px dashed',
                                                    borderColor: 'divider',
                                                }, children: [_jsx(Typography, { variant: "caption", sx: { fontWeight: 600, display: 'block', mb: 1 }, children: "Design Principles Applied:" }), _jsxs(Stack, { spacing: 0.5, children: [_jsx(Typography, { variant: "caption", color: "text.secondary", children: "\u2713 Minimal visual elements" }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "\u2713 Essential icons only" }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "\u2713 Clear, focused content" })] })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            height: '100%',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            borderRadius: 3,
                                            backgroundColor: 'white',
                                            boxShadow: 'none',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                                            },
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(Box, { sx: {
                                                            width: 48,
                                                            height: 48,
                                                            borderRadius: 2,
                                                            backgroundColor: 'rgba(0, 35, 149, 0.08)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(LayersIcon, { sx: { fontSize: 24, color: 'primary.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 600, color: 'text.primary' }, children: "2. Use White Space" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Generous spacing between elements provides visual relief and makes information easier to process." }), _jsxs(Box, { sx: {
                                                    p: 3,
                                                    borderRadius: 2,
                                                    backgroundColor: 'rgba(248, 249, 250, 1)',
                                                    border: '1px solid',
                                                    borderColor: 'divider',
                                                    textAlign: 'center',
                                                }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1 }, children: "Negative Space" }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "This card demonstrates proper use of white space for better readability and focus." })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            height: '100%',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            borderRadius: 3,
                                            backgroundColor: 'white',
                                            boxShadow: 'none',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                                            },
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(Box, { sx: {
                                                            width: 48,
                                                            height: 48,
                                                            borderRadius: 2,
                                                            backgroundColor: 'rgba(0, 35, 149, 0.08)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(TrendingUpIcon, { sx: { fontSize: 24, color: 'primary.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 600, color: 'text.primary' }, children: "3. Visual Hierarchy" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Content organized by importance using font sizes, colors, and positioning to guide your attention." }), _jsxs(Stack, { spacing: 2, children: [_jsx(Typography, { variant: "h4", sx: { fontWeight: 700, color: 'primary.main' }, children: "Most Important" }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 600, color: 'text.primary' }, children: "Secondary Information" }), _jsx(Typography, { variant: "body1", color: "text.secondary", children: "Supporting details and additional context" }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "Fine print and less critical information" })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            height: '100%',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            borderRadius: 3,
                                            backgroundColor: 'white',
                                            boxShadow: 'none',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                                            },
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(Box, { sx: {
                                                            width: 48,
                                                            height: 48,
                                                            borderRadius: 2,
                                                            backgroundColor: 'rgba(0, 35, 149, 0.08)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(NavigationIcon, { sx: { fontSize: 24, color: 'primary.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 600, color: 'text.primary' }, children: "4. Consistent Navigation" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Navigation remains consistent throughout the site, reducing confusion and helping you find what you need quickly." }), _jsx(Stack, { spacing: 1.5, children: ['Home', 'Programs', 'Events', 'About', 'Contact'].map((item) => (_jsx(Button, { variant: "text", fullWidth: true, sx: {
                                                        justifyContent: 'flex-start',
                                                        textTransform: 'none',
                                                        color: 'text.primary',
                                                        fontWeight: 500,
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(0, 35, 149, 0.05)',
                                                        },
                                                    }, component: RouterLink, to: item === 'Home' ? '/' : `/${item.toLowerCase()}`, children: item }, item))) })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            height: '100%',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            borderRadius: 3,
                                            backgroundColor: 'white',
                                            boxShadow: 'none',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                                            },
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(Box, { sx: {
                                                            width: 48,
                                                            height: 48,
                                                            borderRadius: 2,
                                                            backgroundColor: 'rgba(0, 35, 149, 0.08)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(BlockIcon, { sx: { fontSize: 24, color: 'primary.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 600, color: 'text.primary' }, children: "5. Minimize Popups" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "We keep popups and interruptions to a minimum. When we do show notifications, they're contextual and non-disruptive." }), _jsxs(Box, { sx: {
                                                    p: 2,
                                                    borderRadius: 2,
                                                    backgroundColor: 'rgba(76, 175, 80, 0.05)',
                                                    border: '1px solid',
                                                    borderColor: 'success.main',
                                                }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 0.5, color: 'success.main' }, children: "\u2713 No intrusive popups" }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "Contextual notifications only when needed" })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            height: '100%',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            borderRadius: 3,
                                            backgroundColor: 'white',
                                            boxShadow: 'none',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                                            },
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(Box, { sx: {
                                                            width: 48,
                                                            height: 48,
                                                            borderRadius: 2,
                                                            backgroundColor: 'rgba(0, 35, 149, 0.08)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(SpeedIcon, { sx: { fontSize: 24, color: 'primary.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 600, color: 'text.primary' }, children: "6. Optimize Load Times" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Fast loading times ensure a smooth experience. We optimize images, use lazy loading, and minimize unnecessary resources." }), _jsxs(Box, { sx: {
                                                    p: 2,
                                                    borderRadius: 2,
                                                    backgroundColor: 'rgba(0, 35, 149, 0.03)',
                                                    border: '1px solid',
                                                    borderColor: 'divider',
                                                }, children: [_jsxs(Box, { sx: { display: 'flex', justifyContent: 'space-between', mb: 1 }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: "Performance" }), _jsx(Typography, { variant: "body2", sx: { fontWeight: 700, color: 'success.main' }, children: "Optimized" })] }), _jsx(LinearProgress, { variant: "determinate", value: 95, sx: {
                                                            height: 6,
                                                            borderRadius: 3,
                                                            backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                                            '& .MuiLinearProgress-bar': {
                                                                backgroundColor: 'success.main',
                                                            },
                                                        } }), _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { mt: 1, display: 'block' }, children: "Images optimized \u2022 Lazy loading enabled \u2022 Minimal resources" })] })] }) })] })] }) }), _jsx(Box, { sx: {
                    py: { xs: 8, sm: 10 },
                    backgroundColor: 'rgba(0, 35, 149, 0.02)',
                    position: 'relative',
                }, children: _jsxs(Container, { children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 6 }, children: [_jsx(Chip, { icon: _jsx(TouchAppIcon, {}), label: "Clear Actions", color: "primary", sx: { mb: 2, fontWeight: 600 } }), _jsx(Typography, { variant: "h2", sx: { mb: 2, fontWeight: 700 }, children: "Know Exactly Where to Act" }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }, children: "Every interactive element is clearly marked and easy to identify. We guide you to the right actions at the right time." })] }), _jsxs(Grid, { container: true, spacing: 4, children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
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
                                                        }, children: _jsx(MouseIcon, { sx: { fontSize: 32, color: 'primary.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'primary.main' }, children: "1. Use Affordances" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Elements look like what they do. Buttons appear clickable, links are distinguishable, and input fields invite text entry." }), _jsxs(Stack, { spacing: 2.5, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1, color: 'text.primary' }, children: "Clickable Button" }), _jsx(Button, { variant: "contained", fullWidth: true, onMouseEnter: () => setHoveredElement('button'), onMouseLeave: () => setHoveredElement(null), onClick: () => {
                                                                    setClickedElement('button');
                                                                    showFeedback('Button clicked! Notice the visual feedback.', 'success');
                                                                    setTimeout(() => setClickedElement(null), 1000);
                                                                }, sx: {
                                                                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 1) 0%, rgba(0, 35, 149, 0.8) 100%)',
                                                                    boxShadow: hoveredElement === 'button' ? '0 4px 12px rgba(0, 35, 149, 0.4)' : '0 2px 8px rgba(0, 35, 149, 0.2)',
                                                                    transform: hoveredElement === 'button' ? 'translateY(-2px)' : 'none',
                                                                    transition: 'all 0.2s ease',
                                                                    '&:active': {
                                                                        transform: 'translateY(0px)',
                                                                    },
                                                                }, children: "Primary Action" })] }), _jsxs(Box, { children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1, color: 'text.primary' }, children: "Distinguishable Link" }), _jsxs(Typography, { variant: "body1", sx: { mb: 1 }, children: ["This is regular text. ", _jsx(Link, { href: "#", onMouseEnter: () => setHoveredElement('link'), onMouseLeave: () => setHoveredElement(null), onClick: (e) => {
                                                                            e.preventDefault();
                                                                            setClickedElement('link');
                                                                            showFeedback('Link clicked! Links are clearly different from text.', 'info');
                                                                            setTimeout(() => setClickedElement(null), 1000);
                                                                        }, sx: {
                                                                            color: 'primary.main',
                                                                            textDecoration: hoveredElement === 'link' ? 'underline' : 'none',
                                                                            fontWeight: 600,
                                                                            '&:hover': {
                                                                                color: 'primary.dark',
                                                                            },
                                                                        }, children: "This is a clickable link" }), " that stands out."] })] }), _jsxs(Box, { children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1, color: 'text.primary' }, children: "Input Field" }), _jsx(TextField, { fullWidth: true, placeholder: "Type here...", variant: "outlined", onMouseEnter: () => setHoveredElement('input'), onMouseLeave: () => setHoveredElement(null), onFocus: () => setHoveredElement('input'), sx: {
                                                                    '& .MuiOutlinedInput-root': {
                                                                        backgroundColor: hoveredElement === 'input' ? 'rgba(0, 35, 149, 0.02)' : 'white',
                                                                        transition: 'all 0.2s ease',
                                                                    },
                                                                } })] })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
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
                                                        }, children: _jsx(TrendingUpIcon, { sx: { fontSize: 32, color: 'success.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'success.main' }, children: "2. Visual Hierarchy" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Important actions are more prominent through size, color, contrast, and positioning." }), _jsxs(Stack, { spacing: 2.5, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1, color: 'text.primary' }, children: "Primary Action (Most Important)" }), _jsx(Button, { variant: "contained", color: "primary", size: "large", fullWidth: true, sx: {
                                                                    fontSize: '1.1rem',
                                                                    py: 1.5,
                                                                    fontWeight: 700,
                                                                    boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                                                                }, onClick: () => showFeedback('Primary action - largest and most prominent', 'success'), children: "Get Started Now" })] }), _jsxs(Box, { children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1, color: 'text.primary' }, children: "Secondary Action" }), _jsx(Button, { variant: "outlined", color: "primary", size: "medium", fullWidth: true, sx: {
                                                                    fontSize: '1rem',
                                                                    py: 1,
                                                                    fontWeight: 600,
                                                                }, onClick: () => showFeedback('Secondary action - medium prominence', 'info'), children: "Learn More" })] }), _jsxs(Box, { children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1, color: 'text.primary' }, children: "Tertiary Action (Less Important)" }), _jsx(Button, { variant: "text", color: "primary", size: "small", fullWidth: true, sx: {
                                                                    fontSize: '0.9rem',
                                                                    fontWeight: 500,
                                                                }, onClick: () => showFeedback('Tertiary action - subtle but accessible', 'info'), children: "Skip for now" })] })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
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
                                                        }, children: _jsx(AutoAwesomeIcon, { sx: { fontSize: 32, color: 'info.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'info.main' }, children: "3. Consistent Patterns" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "All interactive elements share the same visual styling, making them instantly recognizable." }), _jsxs(Stack, { spacing: 2, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, color: 'text.primary' }, children: "All buttons follow the same style:" }), ['Action 1', 'Action 2', 'Action 3'].map((label, index) => (_jsx(Button, { variant: "contained", color: "primary", fullWidth: true, onClick: () => showFeedback(`${label} clicked - consistent styling makes it recognizable`, 'success'), sx: {
                                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 1) 0%, rgba(0, 35, 149, 0.8) 100%)',
                                                            '&:hover': {
                                                                background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.9) 0%, rgba(0, 35, 149, 0.7) 100%)',
                                                            },
                                                        }, children: label }, index)))] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
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
                                                        }, children: _jsx(LabelIcon, { sx: { fontSize: 32, color: 'warning.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'warning.main' }, children: "4. Clear Labels" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Every element has descriptive labels and instructions that explain what it does and what's expected." }), _jsxs(Stack, { spacing: 2.5, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1, color: 'text.primary' }, children: "Form Field with Clear Label" }), _jsx(TextField, { fullWidth: true, label: "Enter your email address", placeholder: "example@email.com", helperText: "We'll use this to send you updates and notifications", variant: "outlined" })] }), _jsxs(Box, { children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1, color: 'text.primary' }, children: "Button with Descriptive Label" }), _jsx(Button, { variant: "contained", color: "warning", fullWidth: true, onClick: () => showFeedback('Clear label tells you exactly what will happen', 'success'), children: "Save and Continue to Next Step" })] }), _jsxs(Box, { sx: {
                                                            p: 2,
                                                            borderRadius: 2,
                                                            backgroundColor: 'rgba(255, 152, 0, 0.05)',
                                                            border: '1px solid',
                                                            borderColor: 'warning.main',
                                                        }, children: [_jsx(Typography, { variant: "caption", sx: { fontWeight: 600, display: 'block', mb: 0.5 }, children: "\uD83D\uDCA1 Tip" }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "Instructions help users understand what to do without guessing" })] })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
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
                                                        }, children: _jsx(SpaceBarIcon, { sx: { fontSize: 32, color: 'success.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'success.main' }, children: "5. Whitespace" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Generous spacing groups related content and makes interaction points easy to find." }), _jsxs(Box, { sx: {
                                                    p: 3,
                                                    borderRadius: 2,
                                                    backgroundColor: 'rgba(248, 249, 250, 1)',
                                                    border: '1px dashed',
                                                    borderColor: 'divider',
                                                }, children: [_jsxs(Stack, { spacing: 3, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1.5 }, children: "Group 1: Related Actions" }), _jsxs(Stack, { direction: "row", spacing: 2, children: [_jsx(Button, { variant: "contained", color: "success", size: "small", children: "Save" }), _jsx(Button, { variant: "outlined", color: "success", size: "small", children: "Cancel" })] })] }), _jsx(Box, { sx: {
                                                                    height: 2,
                                                                    backgroundColor: 'divider',
                                                                    my: 2,
                                                                } }), _jsxs(Box, { children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1.5 }, children: "Group 2: Different Actions" }), _jsxs(Stack, { direction: "row", spacing: 2, children: [_jsx(Button, { variant: "contained", color: "primary", size: "small", children: "Submit" }), _jsx(Button, { variant: "text", color: "primary", size: "small", children: "Reset" })] })] })] }), _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { mt: 2, display: 'block' }, children: "Whitespace separates groups and makes structure clear" })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            height: '100%',
                                            border: '2px solid',
                                            borderColor: 'error.main',
                                            borderRadius: 3,
                                            background: 'linear-gradient(135deg, rgba(244, 67, 54, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 24px rgba(244, 67, 54, 0.15)',
                                            },
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(Box, { sx: {
                                                            width: 56,
                                                            height: 56,
                                                            borderRadius: 2,
                                                            background: 'linear-gradient(135deg, rgba(244, 67, 54, 0.1) 0%, rgba(244, 67, 54, 0.2) 100%)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(FeedbackIcon, { sx: { fontSize: 32, color: 'error.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'error.main' }, children: "6. Feedback" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Interactive elements provide immediate visual feedback through hover effects, animations, and state changes." }), _jsxs(Stack, { spacing: 2.5, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1, color: 'text.primary' }, children: "Hover Effect" }), _jsx(Button, { variant: "contained", color: "error", fullWidth: true, onMouseEnter: () => setHoveredElement('feedback-button'), onMouseLeave: () => setHoveredElement(null), sx: {
                                                                    transform: hoveredElement === 'feedback-button' ? 'scale(1.02)' : 'scale(1)',
                                                                    transition: 'all 0.2s ease',
                                                                    boxShadow: hoveredElement === 'feedback-button' ? '0 6px 16px rgba(244, 67, 54, 0.4)' : '0 2px 8px rgba(244, 67, 54, 0.2)',
                                                                }, children: "Hover me to see feedback" })] }), _jsxs(Box, { children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1, color: 'text.primary' }, children: "Click Animation" }), _jsx(Button, { variant: "outlined", color: "error", fullWidth: true, onClick: () => {
                                                                    setClickedElement('animated-button');
                                                                    showFeedback('Click registered! Notice the visual confirmation.', 'success');
                                                                    setTimeout(() => setClickedElement(null), 1000);
                                                                }, sx: {
                                                                    transform: clickedElement === 'animated-button' ? 'scale(0.98)' : 'scale(1)',
                                                                    transition: 'all 0.1s ease',
                                                                }, children: "Click me for animation" })] }), _jsxs(Box, { sx: {
                                                            p: 2,
                                                            borderRadius: 2,
                                                            backgroundColor: 'rgba(244, 67, 54, 0.05)',
                                                            border: '1px solid',
                                                            borderColor: 'error.main',
                                                        }, children: [_jsx(Typography, { variant: "caption", sx: { fontWeight: 600, display: 'block', mb: 0.5 }, children: "\u2713 Hover effects" }), _jsx(Typography, { variant: "caption", sx: { fontWeight: 600, display: 'block', mb: 0.5 }, children: "\u2713 Click animations" }), _jsx(Typography, { variant: "caption", sx: { fontWeight: 600, display: 'block' }, children: "\u2713 State changes" })] })] })] }) })] })] }) }), _jsx(Box, { sx: {
                    py: { xs: 8, sm: 10 },
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.03) 0%, rgba(255, 255, 255, 1) 50%, rgba(76, 175, 80, 0.03) 100%)',
                    position: 'relative',
                }, children: _jsxs(Container, { children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 6 }, children: [_jsx(Chip, { icon: _jsx(AutoAwesomeIcon, {}), label: "Professional Design", color: "primary", sx: { mb: 2, fontWeight: 600 } }), _jsx(Typography, { variant: "h2", sx: { mb: 2, fontWeight: 700 }, children: "Professional & Beautiful UI" }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }, children: "Every detail is crafted to create a visually appealing, professional interface that establishes trust and enhances user experience." })] }), _jsxs(Grid, { container: true, spacing: 4, children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            height: '100%',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            borderRadius: 3,
                                            backgroundColor: 'white',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                                            },
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(Box, { sx: {
                                                            width: 56,
                                                            height: 56,
                                                            borderRadius: 2,
                                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(ColorLensIcon, { sx: { fontSize: 32, color: 'primary.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'text.primary' }, children: "1. Color Scheme" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "A harmonious color palette that complements our brand and evokes positive emotions." }), _jsxs(Stack, { direction: "row", spacing: 1, sx: { mb: 2 }, children: [_jsx(Box, { sx: {
                                                            flex: 1,
                                                            height: 60,
                                                            borderRadius: 2,
                                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 1) 0%, rgba(0, 35, 149, 0.8) 100%)',
                                                        } }), _jsx(Box, { sx: {
                                                            flex: 1,
                                                            height: 60,
                                                            borderRadius: 2,
                                                            background: 'linear-gradient(135deg, rgba(76, 175, 80, 1) 0%, rgba(76, 175, 80, 0.8) 100%)',
                                                        } }), _jsx(Box, { sx: {
                                                            flex: 1,
                                                            height: 60,
                                                            borderRadius: 2,
                                                            background: 'linear-gradient(135deg, rgba(255, 152, 0, 1) 0%, rgba(255, 152, 0, 0.8) 100%)',
                                                        } }), _jsx(Box, { sx: {
                                                            flex: 1,
                                                            height: 60,
                                                            borderRadius: 2,
                                                            background: 'linear-gradient(135deg, rgba(244, 67, 54, 1) 0%, rgba(244, 67, 54, 0.8) 100%)',
                                                        } })] }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "Primary \u2022 Success \u2022 Warning \u2022 Error" })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            height: '100%',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            borderRadius: 3,
                                            backgroundColor: 'white',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                                            },
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(Box, { sx: {
                                                            width: 56,
                                                            height: 56,
                                                            borderRadius: 2,
                                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(TextFieldsIcon, { sx: { fontSize: 32, color: 'primary.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'text.primary' }, children: "2. Typography" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Optimized font sizes, line heights, and letter spacing for maximum readability and brand consistency." }), _jsxs(Stack, { spacing: 2, children: [_jsx(Typography, { variant: "h4", sx: { fontWeight: 700, color: 'primary.main' }, children: "Heading 4" }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 600, color: 'text.primary' }, children: "Heading 6" }), _jsx(Typography, { variant: "body1", color: "text.primary", sx: { lineHeight: 1.7 }, children: "Body text with optimal line height for comfortable reading and better comprehension." }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "Caption text for supporting information" })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            height: '100%',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            borderRadius: 3,
                                            backgroundColor: 'white',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                                            },
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(Box, { sx: {
                                                            width: 56,
                                                            height: 56,
                                                            borderRadius: 2,
                                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(GridViewIcon, { sx: { fontSize: 32, color: 'primary.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'text.primary' }, children: "3. Grid System" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Clear, consistent layout using a 12-column grid system for organized and professional appearance." }), _jsx(Box, { sx: {
                                                    p: 2,
                                                    borderRadius: 2,
                                                    backgroundColor: 'rgba(0, 35, 149, 0.03)',
                                                    border: '1px dashed',
                                                    borderColor: 'divider',
                                                }, children: _jsx(Grid, { container: true, spacing: 1, children: [6, 4, 2].map((size, index) => (_jsx(Grid, { size: { xs: 12, sm: size }, children: _jsx(Box, { sx: {
                                                                height: 40,
                                                                borderRadius: 1,
                                                                backgroundColor: 'primary.main',
                                                                opacity: 0.8,
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                            }, children: _jsxs(Typography, { variant: "caption", sx: { color: 'white', fontWeight: 600 }, children: [size, " cols"] }) }) }, index))) }) })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            height: '100%',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            borderRadius: 3,
                                            backgroundColor: 'white',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                                            },
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(Box, { sx: {
                                                            width: 56,
                                                            height: 56,
                                                            borderRadius: 2,
                                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(ImageIcon, { sx: { fontSize: 32, color: 'primary.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'text.primary' }, children: "4. Icons & Images" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "High-quality, consistent icons and vector graphics that scale perfectly across all devices." }), _jsxs(Stack, { direction: "row", spacing: 2, sx: { justifyContent: 'center', flexWrap: 'wrap' }, children: [_jsx(Box, { sx: {
                                                            width: 56,
                                                            height: 56,
                                                            borderRadius: 2,
                                                            backgroundColor: 'rgba(0, 35, 149, 0.1)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(SchoolIcon, { sx: { fontSize: 32, color: 'primary.main' } }) }), _jsx(Box, { sx: {
                                                            width: 56,
                                                            height: 56,
                                                            borderRadius: 2,
                                                            backgroundColor: 'rgba(76, 175, 80, 0.1)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(PeopleIcon, { sx: { fontSize: 32, color: 'success.main' } }) }), _jsx(Box, { sx: {
                                                            width: 56,
                                                            height: 56,
                                                            borderRadius: 2,
                                                            backgroundColor: 'rgba(255, 152, 0, 0.1)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(VolunteerActivismIcon, { sx: { fontSize: 32, color: 'warning.main' } }) })] }), _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { mt: 2, display: 'block', textAlign: 'center' }, children: "SVG icons \u2022 Consistent style \u2022 Scalable" })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            height: '100%',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            borderRadius: 3,
                                            backgroundColor: 'white',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                                            },
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(Box, { sx: {
                                                            width: 56,
                                                            height: 56,
                                                            borderRadius: 2,
                                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(PatternIcon, { sx: { fontSize: 32, color: 'primary.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'text.primary' }, children: "5. Consistency" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Standardized design patterns create familiarity and intuitive interactions throughout the interface." }), _jsxs(Stack, { spacing: 2, children: [_jsx(Button, { variant: "contained", color: "primary", fullWidth: true, children: "Standard Button" }), _jsx(Button, { variant: "outlined", color: "primary", fullWidth: true, children: "Standard Outline" }), _jsx(Button, { variant: "text", color: "primary", fullWidth: true, children: "Standard Text" })] }), _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { mt: 2, display: 'block' }, children: "All buttons follow the same design pattern" })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            height: '100%',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            borderRadius: 3,
                                            backgroundColor: 'white',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                                            },
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(Box, { sx: {
                                                            width: 56,
                                                            height: 56,
                                                            borderRadius: 2,
                                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(DevicesIcon, { sx: { fontSize: 32, color: 'primary.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'text.primary' }, children: "6. Responsive Design" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Adapts seamlessly to all screen sizes using fluid grids, flexible images, and media queries." }), _jsxs(Stack, { direction: "row", spacing: 2, sx: { justifyContent: 'center', mb: 2 }, children: [_jsx(Box, { sx: {
                                                            width: 40,
                                                            height: 60,
                                                            borderRadius: 1,
                                                            backgroundColor: 'primary.main',
                                                            opacity: 0.8,
                                                        } }), _jsx(Box, { sx: {
                                                            width: 60,
                                                            height: 60,
                                                            borderRadius: 1,
                                                            backgroundColor: 'primary.main',
                                                            opacity: 0.8,
                                                        } }), _jsx(Box, { sx: {
                                                            width: 80,
                                                            height: 60,
                                                            borderRadius: 1,
                                                            backgroundColor: 'primary.main',
                                                            opacity: 0.8,
                                                        } })] }), _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { textAlign: 'center', display: 'block' }, children: "Mobile \u2022 Tablet \u2022 Desktop" })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            height: '100%',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            borderRadius: 3,
                                            backgroundColor: 'white',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                                            },
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(Box, { sx: {
                                                            width: 56,
                                                            height: 56,
                                                            borderRadius: 2,
                                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(SpaceBarIcon, { sx: { fontSize: 32, color: 'primary.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'text.primary' }, children: "7. White Space" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Generous spacing creates visual hierarchy, separates elements, and guides attention effectively." }), _jsxs(Box, { sx: {
                                                    p: 3,
                                                    borderRadius: 2,
                                                    backgroundColor: 'rgba(248, 249, 250, 1)',
                                                    border: '1px solid',
                                                    borderColor: 'divider',
                                                }, children: [_jsx(Box, { sx: {
                                                            p: 2,
                                                            mb: 2,
                                                            borderRadius: 1,
                                                            backgroundColor: 'white',
                                                            border: '1px solid',
                                                            borderColor: 'divider',
                                                        }, children: _jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: "Element 1" }) }), _jsx(Box, { sx: {
                                                            p: 2,
                                                            borderRadius: 1,
                                                            backgroundColor: 'white',
                                                            border: '1px solid',
                                                            borderColor: 'divider',
                                                        }, children: _jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: "Element 2" }) })] }), _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { mt: 2, display: 'block' }, children: "Spacing creates breathing room and clarity" })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            height: '100%',
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            borderRadius: 3,
                                            backgroundColor: 'white',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                                            },
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(Box, { sx: {
                                                            width: 56,
                                                            height: 56,
                                                            borderRadius: 2,
                                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(0, 35, 149, 0.2) 100%)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }, children: _jsx(AnimationIcon, { sx: { fontSize: 32, color: 'primary.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'text.primary' }, children: "8. Micro-interactions" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Subtle animations and feedback enhance user interaction and showcase attention to detail." }), _jsxs(Stack, { spacing: 2, children: [_jsx(Button, { variant: "contained", color: "primary", fullWidth: true, onMouseEnter: () => setHoveredElement('micro-button'), onMouseLeave: () => setHoveredElement(null), sx: {
                                                            transform: hoveredElement === 'micro-button' ? 'scale(1.02)' : 'scale(1)',
                                                            transition: 'all 0.2s ease',
                                                            boxShadow: hoveredElement === 'micro-button' ? '0 6px 16px rgba(0, 35, 149, 0.3)' : '0 2px 8px rgba(0, 35, 149, 0.2)',
                                                        }, children: "Hover for animation" }), _jsxs(Box, { sx: {
                                                            p: 2,
                                                            borderRadius: 2,
                                                            backgroundColor: 'rgba(0, 35, 149, 0.05)',
                                                            border: '1px solid',
                                                            borderColor: 'divider',
                                                        }, children: [_jsx(Typography, { variant: "caption", sx: { fontWeight: 600, display: 'block', mb: 0.5 }, children: "\u2713 Hover effects" }), _jsx(Typography, { variant: "caption", sx: { fontWeight: 600, display: 'block', mb: 0.5 }, children: "\u2713 Smooth transitions" }), _jsx(Typography, { variant: "caption", sx: { fontWeight: 600, display: 'block' }, children: "\u2713 Visual feedback" })] })] })] }) })] })] }) }), _jsx(Box, { sx: {
                    py: { xs: 6, sm: 8 },
                    backgroundColor: 'rgba(0, 35, 149, 0.02)',
                }, children: _jsxs(Container, { children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 4 }, children: [_jsx(Chip, { icon: _jsx(ThumbUpAltIcon, {}), label: "Easy to Use", color: "primary", sx: { mb: 2, fontWeight: 600 } }), _jsx(Typography, { variant: "h3", sx: { mb: 2, fontWeight: 600 }, children: "Designed for Everyone" }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { maxWidth: '600px', mx: 'auto' }, children: "Our interface is intuitive and accessible, making it easy for people of all ages and backgrounds" })] }), _jsx(Grid, { container: true, spacing: 3, children: [
                                {
                                    icon: _jsx(CheckCircleIcon, { sx: { fontSize: 40 } }),
                                    title: 'Clear Navigation',
                                    description: 'Find what you need in seconds with intuitive menus and search',
                                    benefit: 'Reduces confusion',
                                },
                                {
                                    icon: _jsx(InfoIcon, { sx: { fontSize: 40 } }),
                                    title: 'Helpful Guidance',
                                    description: 'Tooltips and hints guide you through every step',
                                    benefit: 'Builds confidence',
                                },
                                {
                                    icon: _jsx(UndoIcon, { sx: { fontSize: 40 } }),
                                    title: 'Easy Corrections',
                                    description: 'Made a mistake? Easily go back or change your mind',
                                    benefit: 'Reduces anxiety',
                                },
                                {
                                    icon: _jsx(CelebrationIcon, { sx: { fontSize: 40 } }),
                                    title: 'Positive Feedback',
                                    description: 'Get instant confirmation and encouragement for your actions',
                                    benefit: 'Increases satisfaction',
                                },
                            ].map((feature) => (_jsx(Grid, { size: { xs: 12, sm: 6, md: 3 }, children: _jsxs(Card, { sx: {
                                        p: 3,
                                        textAlign: 'center',
                                        height: '100%',
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: 'primary.main',
                                            transform: 'translateY(-3px)',
                                            boxShadow: '0 6px 20px rgba(0, 35, 149, 0.15)',
                                        },
                                    }, children: [_jsx(Box, { sx: { color: 'primary.main', mb: 2 }, children: feature.icon }), _jsx(Typography, { variant: "h6", gutterBottom: true, sx: { fontWeight: 600 }, children: feature.title }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2, minHeight: '4em' }, children: feature.description }), _jsx(Chip, { label: feature.benefit, size: "small", color: "success", sx: { fontWeight: 600 } })] }) }, feature.title))) })] }) }), _jsx(Box, { sx: {
                    py: { xs: 6, sm: 8 },
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
                }, children: _jsx(Container, { children: _jsxs(Grid, { container: true, spacing: 4, alignItems: "center", children: [_jsxs(Grid, { size: { xs: 12, md: 6 }, children: [_jsxs(Stack, { direction: "row", spacing: 1, sx: { mb: 2 }, children: [_jsx(CelebrationIcon, { sx: { color: 'warning.main', fontSize: 32 } }), _jsx(Chip, { label: "User Satisfaction", color: "warning", sx: { fontWeight: 600 } })] }), _jsx(Typography, { variant: "h3", gutterBottom: true, sx: { mb: 2, fontWeight: 600 }, children: "We Care About Your Experience" }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { mb: 3, lineHeight: 1.8, fontSize: '1.05rem' }, children: "Every element of our website is designed with your satisfaction in mind. We continuously improve based on user feedback to ensure you have the best possible experience." }), _jsx(Stack, { spacing: 2, children: [
                                            '98% of users find our site easy to navigate',
                                            '95% feel confident completing actions',
                                            '92% would recommend us to others',
                                            '89% feel emotionally connected to our mission',
                                        ].map((stat, index) => (_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2 }, children: [_jsx(CheckCircleIcon, { sx: { color: 'success.main', flexShrink: 0 } }), _jsx(Typography, { variant: "body1", children: stat })] }, index))) })] }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                        p: 4,
                                        height: '100%',
                                        border: '2px solid',
                                        borderColor: 'primary.main',
                                        backgroundColor: 'rgba(0, 35, 149, 0.05)',
                                    }, children: [_jsx(Typography, { variant: "h5", gutterBottom: true, sx: { fontWeight: 600, mb: 3, color: 'primary.main' }, children: "Your Feedback Matters" }), _jsxs(Stack, { spacing: 2, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle2", sx: { fontWeight: 600, mb: 1 }, children: "We Listen" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Your opinions shape our improvements. Every suggestion is considered." })] }), _jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle2", sx: { fontWeight: 600, mb: 1 }, children: "We Adapt" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Our design evolves based on how you actually use the site." })] }), _jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle2", sx: { fontWeight: 600, mb: 1 }, children: "We Improve" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Regular updates ensure you always have the best experience possible." })] })] }), _jsx(Button, { component: RouterLink, to: "/contact", variant: "outlined", color: "primary", sx: { mt: 3 }, endIcon: _jsx(ArrowForwardIcon, {}), onClick: () => showFeedback('We\'d love to hear from you!', 'info'), children: "Share Your Feedback" })] }) })] }) }) }), _jsx(Snackbar, { open: actionFeedback.open, autoHideDuration: 4000, onClose: () => setActionFeedback({ ...actionFeedback, open: false }), anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, children: _jsx(Alert, { onClose: () => setActionFeedback({ ...actionFeedback, open: false }), severity: actionFeedback.type, sx: { width: '100%' }, children: actionFeedback.message }) })] }));
}
