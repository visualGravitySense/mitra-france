import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Rating from '@mui/material/Rating';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RadioIcon from '@mui/icons-material/Radio';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import PaletteIcon from '@mui/icons-material/Palette';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PublicIcon from '@mui/icons-material/Public';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import HandshakeIcon from '@mui/icons-material/Handshake';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import InputAdornment from '@mui/material/InputAdornment';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import TramIcon from '@mui/icons-material/Tram';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import { getImagePath } from '../utils/imagePath';
export default function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    // Tell User & Ask User: Track user feedback and interactions
    const [userRating, setUserRating] = useState(null);
    const [userFeedback, setUserFeedback] = useState('');
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
    const [liveActivity, setLiveActivity] = useState({ count: 1247, recent: 3 });
    const [satisfactionMetrics, setSatisfactionMetrics] = useState({
        engagement: 0,
        timeOnPage: 0,
        interactions: 0,
    });
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
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, this would send the form data to a backend
        console.log('Form submitted:', formData);
        showFeedback('Thank you for your message! We will get back to you soon.', 'success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
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
                }, children: _jsxs(Container, { children: [_jsxs(Grid, { container: true, spacing: 4, alignItems: "center", children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Stack, { spacing: 3, sx: { alignItems: { xs: 'center', md: 'flex-start' } }, children: [_jsxs(Box, { sx: { width: '100%' }, children: [_jsx(Chip, { icon: _jsx(ContactMailIcon, {}), label: "Get in Touch", color: "primary", sx: { mb: 2, fontWeight: 600, fontSize: '0.95rem', py: 2 } }), _jsx(Typography, { variant: "h2", sx: {
                                                            mb: 2,
                                                            textAlign: { xs: 'center', md: 'left' },
                                                            background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                                                            backgroundClip: 'text',
                                                            WebkitBackgroundClip: 'text',
                                                            WebkitTextFillColor: 'transparent',
                                                            fontWeight: 700,
                                                            position: 'relative',
                                                            '&::after': {
                                                                content: '""',
                                                                position: 'absolute',
                                                                bottom: -8,
                                                                left: { xs: '50%', md: 0 },
                                                                transform: { xs: 'translateX(-50%)', md: 'none' },
                                                                width: '80px',
                                                                height: '3px',
                                                                background: '#ED2939',
                                                                borderRadius: '2px',
                                                            },
                                                        }, children: "Contact Us" }), _jsx(Box, { sx: { mb: 3, textAlign: { xs: 'center', md: 'left' } }, children: _jsxs(Stack, { direction: "row", spacing: 1, sx: { mb: 1, justifyContent: { xs: 'center', md: 'flex-start' }, flexWrap: 'wrap' }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, color: 'text.secondary', mr: 1 }, children: "Our team can support you in 5+ languages:" }), _jsxs(Stack, { direction: "row", spacing: 0.5, sx: { alignItems: 'center' }, children: [_jsx(Chip, { label: "\uD83C\uDDEB\uD83C\uDDF7", size: "small", sx: { fontSize: '1.2rem', height: 28 } }), _jsx(Chip, { label: "\uD83C\uDDEC\uD83C\uDDE7", size: "small", sx: { fontSize: '1.2rem', height: 28 } }), _jsx(Chip, { label: "\uD83C\uDDFA\uD83C\uDDE6", size: "small", sx: { fontSize: '1.2rem', height: 28 } }), _jsx(Chip, { label: "\uD83C\uDDEA\uD83C\uDDF8", size: "small", sx: { fontSize: '1.2rem', height: 28 } }), _jsx(Chip, { label: "\uD83C\uDDE9\uD83C\uDDEA", size: "small", sx: { fontSize: '1.2rem', height: 28 } })] })] }) }), _jsx(Typography, { variant: "h5", sx: {
                                                            textAlign: { xs: 'center', md: 'left' },
                                                            mb: 3,
                                                            color: 'text.secondary',
                                                            fontWeight: 400,
                                                        }, children: "Get in touch with us - we'd love to hear from you. Whether you have questions, want to collaborate, or just want to say hello, we're here to help." }), _jsxs(Box, { sx: {
                                                            display: 'flex',
                                                            justifyContent: { xs: 'center', md: 'flex-start' },
                                                            alignItems: 'center',
                                                            gap: 2,
                                                            flexWrap: 'wrap',
                                                            mb: 3,
                                                        }, children: [_jsx(Chip, { icon: _jsx(CheckCircleIcon, { sx: { color: 'success.main' } }), label: "Quick Response", sx: {
                                                                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                                                                    color: 'success.main',
                                                                    fontWeight: 600,
                                                                } }), _jsx(Chip, { icon: _jsx(AccessTimeIcon, { sx: { color: 'primary.main' } }), label: "24h Response Time", sx: {
                                                                    backgroundColor: 'rgba(0, 35, 149, 0.1)',
                                                                    color: 'primary.main',
                                                                    fontWeight: 600,
                                                                } }), _jsx(Chip, { icon: _jsx(PublicIcon, { sx: { color: 'error.main' } }), label: "Multiple Ways to Reach", sx: {
                                                                    backgroundColor: 'rgba(237, 41, 57, 0.1)',
                                                                    color: 'error.main',
                                                                    fontWeight: 600,
                                                                } })] })] }), _jsxs(Box, { sx: {
                                                    textAlign: { xs: 'center', md: 'left' },
                                                    p: 3,
                                                    borderRadius: 3,
                                                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.1) 0%, rgba(237, 41, 57, 0.1) 100%)',
                                                    border: '2px solid',
                                                    borderColor: 'primary.main',
                                                    width: '100%',
                                                }, children: [_jsx(Typography, { variant: "h6", sx: { mb: 1, fontWeight: 700, color: 'primary.main' }, children: "Ready to Connect?" }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "Fill out the form below, send us an email, or give us a call. We're here to help and answer any questions you may have." }), _jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 2, sx: { justifyContent: { xs: 'center', md: 'flex-start' } }, children: [_jsx(Button, { variant: "contained", color: "primary", size: "medium", startIcon: _jsx(ContactMailIcon, {}), onClick: () => {
                                                                    const formElement = document.getElementById('contact-form');
                                                                    formElement?.scrollIntoView({ behavior: 'smooth' });
                                                                }, sx: {
                                                                    px: 3,
                                                                    py: 1.5,
                                                                    fontWeight: 600,
                                                                    borderRadius: '25px',
                                                                    boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                                                                    transition: 'all 0.3s ease',
                                                                    '&:hover': {
                                                                        transform: 'translateY(-2px)',
                                                                        boxShadow: '0 6px 16px rgba(0, 35, 149, 0.4)',
                                                                    },
                                                                }, children: "Fill Out Form" }), _jsx(Button, { component: "a", href: "mailto:mitra.france@gmail.com", variant: "outlined", color: "primary", size: "medium", startIcon: _jsx(EmailIcon, {}), sx: {
                                                                    px: 3,
                                                                    py: 1.5,
                                                                    fontWeight: 600,
                                                                    borderRadius: '25px',
                                                                    borderWidth: 2,
                                                                    transition: 'all 0.3s ease',
                                                                    '&:hover': {
                                                                        borderWidth: 2,
                                                                        transform: 'translateY(-2px)',
                                                                    },
                                                                }, children: "Send Email" })] })] }), _jsxs(Typography, { variant: "caption", sx: {
                                                    textAlign: { xs: 'center', md: 'left' },
                                                    color: 'text.secondary',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: { xs: 'center', md: 'flex-start' },
                                                    gap: 0.5,
                                                }, children: [_jsx(CheckCircleIcon, { sx: { fontSize: 16, color: 'success.main' } }), "Easy to contact \u2022 Quick response \u2022 Multiple ways to reach us"] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Box, { sx: {
                                            position: 'relative',
                                            width: '100%',
                                            height: { xs: '400px', md: '600px' },
                                            borderRadius: 4,
                                            overflow: 'hidden',
                                            boxShadow: '0 8px 32px rgba(0, 35, 149, 0.15)',
                                        }, children: [_jsx(Box, { component: "img", src: getImagePath("/illustrations/mitra-image-5.png"), alt: "MITRA FRANCE Team", sx: {
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    objectPosition: 'center',
                                                    display: 'block',
                                                    filter: 'brightness(0.85) saturate(1.1)',
                                                } }), _jsx(Box, { sx: {
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 30%, rgba(255, 255, 255, 0.3) 60%, transparent 100%)',
                                                    zIndex: 1,
                                                    pointerEvents: 'none',
                                                } }), _jsx(Box, { sx: {
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
                                                    zIndex: 0,
                                                    pointerEvents: 'none',
                                                } })] }) })] }), _jsx(Grid, { container: true, spacing: 3, sx: { mt: 4, mb: 4 }, children: [
                                { icon: _jsx(EmailIcon, {}), label: 'Email Responses', value: '24h', color: 'primary.main' },
                                { icon: _jsx(PhoneIcon, {}), label: 'Phone Support', value: 'Available', color: 'error.main' },
                                { icon: _jsx(LocationOnIcon, {}), label: 'Location', value: 'Nice, France', color: 'success.main' },
                                { icon: _jsx(EmojiEventsIcon, {}), label: 'Satisfaction Rate', value: '98%', color: 'info.main' },
                            ].map((stat) => (_jsx(Grid, { size: { xs: 6, sm: 3 }, children: _jsxs(Card, { sx: {
                                        textAlign: 'center',
                                        p: 3,
                                        border: '2px solid',
                                        borderColor: `${stat.color}30`,
                                        backgroundColor: `${stat.color}08`,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: `0 6px 20px ${stat.color}30`,
                                            borderColor: stat.color,
                                        },
                                    }, children: [_jsx(Box, { sx: { color: stat.color, mb: 1.5 }, children: stat.icon }), _jsx(Typography, { variant: "h6", sx: { color: stat.color, fontWeight: 700, mb: 0.5 }, children: stat.value }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { fontWeight: 500 }, children: stat.label })] }) }, stat.label))) })] }) }), _jsxs(Container, { children: [_jsxs(Grid, { container: true, spacing: 4, id: "contact-form", sx: { scrollMarginTop: '100px' }, children: [_jsx(Grid, { size: { xs: 12, md: 8 }, children: _jsxs(Card, { sx: {
                                        position: 'relative',
                                        borderLeft: '4px solid',
                                        borderLeftColor: '#002395',
                                        transition: 'transform 0.3s ease',
                                        overflow: 'hidden',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 25px rgba(0, 35, 149, 0.15)',
                                        },
                                    }, children: [_jsx(Box, { component: "img", src: getImagePath("/photos/584326681_1157904053184266_2071216266526493174_n.jpg"), alt: "MITRA FRANCE Office", sx: {
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                opacity: 0.15,
                                                filter: 'blur(3px) brightness(0.9)',
                                                zIndex: 0,
                                            } }), _jsx(Box, { sx: {
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.98) 100%)',
                                                zIndex: 1,
                                            } }), _jsxs(CardContent, { sx: { p: 4, position: 'relative', zIndex: 2 }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', mb: 3, gap: 2 }, children: [_jsx(Box, { sx: {
                                                                width: 56,
                                                                height: 56,
                                                                borderRadius: '12px',
                                                                backgroundColor: 'rgba(0, 35, 149, 0.1)',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                color: 'primary.main',
                                                            }, children: _jsx(ContactMailIcon, { sx: { fontSize: 32 } }) }), _jsxs(Box, { children: [_jsx(Typography, { variant: "h4", sx: { fontWeight: 600 }, children: "Send us a Message" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Fill out the form below and we'll get back to you as soon as possible" })] })] }), _jsx("form", { onSubmit: handleSubmit, children: _jsxs(Stack, { spacing: 3, children: [_jsx(TextField, { required: true, fullWidth: true, label: "Your Name", name: "name", value: formData.name, onChange: handleChange, variant: "outlined", InputProps: {
                                                                    startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(PersonIcon, { sx: { color: 'text.secondary' } }) })),
                                                                }, sx: {
                                                                    '& .MuiOutlinedInput-root': {
                                                                        paddingLeft: '14px',
                                                                        '& fieldset': {
                                                                            borderWidth: 2,
                                                                        },
                                                                    },
                                                                    '& .MuiInputBase-input': {
                                                                        padding: '16px 14px',
                                                                    },
                                                                } }), _jsx(TextField, { required: true, fullWidth: true, type: "email", label: "Email Address", name: "email", value: formData.email, onChange: handleChange, variant: "outlined", InputProps: {
                                                                    startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(EmailIcon, { sx: { color: 'text.secondary' } }) })),
                                                                }, sx: {
                                                                    '& .MuiOutlinedInput-root': {
                                                                        paddingLeft: '14px',
                                                                        '& fieldset': {
                                                                            borderWidth: 2,
                                                                        },
                                                                    },
                                                                    '& .MuiInputBase-input': {
                                                                        padding: '16px 14px',
                                                                    },
                                                                } }), _jsx(TextField, { required: true, fullWidth: true, label: "Subject", name: "subject", value: formData.subject, onChange: handleChange, variant: "outlined", InputProps: {
                                                                    startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(EditIcon, { sx: { color: 'text.secondary' } }) })),
                                                                }, sx: {
                                                                    '& .MuiOutlinedInput-root': {
                                                                        paddingLeft: '14px',
                                                                        '& fieldset': {
                                                                            borderWidth: 2,
                                                                        },
                                                                    },
                                                                    '& .MuiInputBase-input': {
                                                                        padding: '16px 14px',
                                                                    },
                                                                } }), _jsx(TextField, { required: true, fullWidth: true, multiline: true, rows: 6, label: "Message", name: "message", value: formData.message, onChange: handleChange, variant: "outlined", InputProps: {
                                                                    startAdornment: (_jsx(InputAdornment, { position: "start", sx: { alignSelf: 'flex-start', mt: 1.5 }, children: _jsx(EditIcon, { sx: { color: 'text.secondary' } }) })),
                                                                }, sx: {
                                                                    '& .MuiOutlinedInput-root': {
                                                                        paddingLeft: '14px',
                                                                        '& fieldset': {
                                                                            borderWidth: 2,
                                                                        },
                                                                    },
                                                                    '& .MuiInputBase-input': {
                                                                        padding: '16px 14px',
                                                                    },
                                                                } }), _jsx(Button, { type: "submit", variant: "contained", size: "large", endIcon: _jsx(ArrowForwardIcon, {}), sx: {
                                                                    backgroundColor: '#002395',
                                                                    color: 'white',
                                                                    px: 4,
                                                                    py: 2,
                                                                    fontWeight: 700,
                                                                    borderRadius: '25px',
                                                                    boxShadow: '0 4px 12px rgba(0, 35, 149, 0.3)',
                                                                    fontSize: '1rem',
                                                                    transition: 'all 0.3s ease',
                                                                    '&:hover': {
                                                                        backgroundColor: '#ED2939',
                                                                        transform: 'translateY(-2px)',
                                                                        boxShadow: '0 6px 16px rgba(237, 41, 57, 0.4)',
                                                                        '& .MuiButton-endIcon': {
                                                                            transform: 'translateX(4px)',
                                                                        },
                                                                    },
                                                                    '& .MuiButton-endIcon': {
                                                                        transition: 'transform 0.3s ease',
                                                                    },
                                                                }, children: "Send Message" })] }) })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 4 }, children: _jsxs(Stack, { spacing: 3, children: [_jsxs(Card, { sx: {
                                                position: 'relative',
                                                height: 200,
                                                overflow: 'hidden',
                                                borderRadius: 3,
                                                cursor: 'pointer',
                                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                '&:hover': {
                                                    transform: 'translateY(-6px)',
                                                    boxShadow: '0 12px 32px rgba(0, 35, 149, 0.25)',
                                                    '& .office-bg': {
                                                        transform: 'scale(1.1)',
                                                        filter: 'brightness(0.6) blur(0px)',
                                                    },
                                                },
                                            }, onClick: () => window.open('https://www.google.com/maps/search/?api=1&query=Nice+France', '_blank'), children: [_jsx(Box, { className: "office-bg", component: "img", src: getImagePath("/photos/583741041_1157902773184394_5619801435922057517_n.jpg"), alt: "Nice, France", sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        filter: 'brightness(0.5) blur(2px) saturate(1.1)',
                                                        transition: 'all 0.4s ease',
                                                    } }), _jsx(Box, { sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.8) 0%, rgba(0, 35, 149, 0.6) 100%)',
                                                    } }), _jsxs(Box, { sx: {
                                                        position: 'relative',
                                                        height: '100%',
                                                        p: 3,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'space-between',
                                                        zIndex: 2,
                                                    }, children: [_jsx(Box, { sx: { color: 'white', mb: 2, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }, children: _jsx(LocationOnIcon, { sx: { fontSize: 32 } }) }), _jsxs(Box, { children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 700, mb: 1, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }, children: "Visit Our Office" }), _jsx(Typography, { variant: "body2", sx: { color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.5)', mb: 1 }, children: "Nice, France" }), _jsx(Typography, { variant: "caption", sx: { color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.5)', fontStyle: 'italic' }, children: "Click to open in Google Maps" })] })] })] }), _jsxs(Card, { sx: {
                                                position: 'relative',
                                                height: 200,
                                                overflow: 'hidden',
                                                borderRadius: 3,
                                                cursor: 'pointer',
                                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                '&:hover': {
                                                    transform: 'translateY(-6px)',
                                                    boxShadow: '0 12px 32px rgba(237, 41, 57, 0.25)',
                                                    '& .social-bg': {
                                                        transform: 'scale(1.1)',
                                                        filter: 'brightness(0.6) blur(0px)',
                                                    },
                                                },
                                            }, children: [_jsx(Box, { className: "social-bg", component: "img", src: getImagePath("/photos/583943471_1157911509850187_2575083228465038744_n.jpg"), alt: "Community", sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        filter: 'brightness(0.5) blur(2px) saturate(1.1)',
                                                        transition: 'all 0.4s ease',
                                                    } }), _jsx(Box, { sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.8) 0%, rgba(237, 41, 57, 0.6) 100%)',
                                                    } }), _jsxs(Box, { sx: {
                                                        position: 'relative',
                                                        height: '100%',
                                                        p: 3,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'space-between',
                                                        zIndex: 2,
                                                    }, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 700, mb: 2, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }, children: "Social Media Connect" }), _jsxs(AvatarGroup, { max: 4, sx: { mb: 2 }, children: [_jsx(Avatar, { src: getImagePath("/photos/583924019_1157903166517688_8756873269993443102_n.jpg") }), _jsx(Avatar, { src: getImagePath("/photos/571419367_1143811194593552_6930038688628840775_n.jpg") }), _jsx(Avatar, { src: getImagePath("/photos/572851437_1143811217926883_7725194936764095335_n.jpg") }), _jsx(Avatar, { src: getImagePath("/photos/583489432_1157911303183541_1292926580526900497_n.jpg") })] })] }), _jsxs(Stack, { direction: "row", spacing: 1.5, children: [_jsx(Button, { component: "a", href: "https://www.instagram.com", target: "_blank", rel: "noopener noreferrer", size: "small", sx: {
                                                                        backgroundColor: '#E4405F',
                                                                        color: 'white',
                                                                        minWidth: 40,
                                                                        '&:hover': { backgroundColor: '#C13584' },
                                                                    }, children: _jsx(InstagramIcon, {}) }), _jsx(Button, { component: "a", href: "https://www.linkedin.com", target: "_blank", rel: "noopener noreferrer", size: "small", sx: {
                                                                        backgroundColor: '#0077B5',
                                                                        color: 'white',
                                                                        minWidth: 40,
                                                                        '&:hover': { backgroundColor: '#005885' },
                                                                    }, children: _jsx(LinkedInIcon, {}) }), _jsx(Button, { component: "a", href: "https://www.facebook.com", target: "_blank", rel: "noopener noreferrer", size: "small", sx: {
                                                                        backgroundColor: '#1877F2',
                                                                        color: 'white',
                                                                        minWidth: 40,
                                                                        '&:hover': { backgroundColor: '#1565C0' },
                                                                    }, children: _jsx(FacebookIcon, {}) })] })] })] }), _jsxs(Card, { sx: {
                                                position: 'relative',
                                                height: 200,
                                                overflow: 'hidden',
                                                borderRadius: 3,
                                                cursor: 'pointer',
                                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                '&:hover': {
                                                    transform: 'translateY(-6px)',
                                                    boxShadow: '0 12px 32px rgba(0, 35, 149, 0.25)',
                                                    '& .partnership-bg': {
                                                        transform: 'scale(1.1)',
                                                        filter: 'brightness(0.6) blur(0px)',
                                                    },
                                                },
                                            }, onClick: () => {
                                                const formElement = document.getElementById('contact-form');
                                                if (formElement) {
                                                    formElement.scrollIntoView({ behavior: 'smooth' });
                                                    setFormData((prev) => ({ ...prev, subject: 'Partnership Inquiry' }));
                                                }
                                            }, children: [_jsx(Box, { className: "partnership-bg", component: "img", src: getImagePath("/photos/572851437_1143811217926883_7725194936764095335_n.jpg"), alt: "Partnership", sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        filter: 'brightness(0.5) blur(2px) saturate(1.1)',
                                                        transition: 'all 0.4s ease',
                                                    } }), _jsx(Box, { sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.8) 0%, rgba(0, 35, 149, 0.6) 100%)',
                                                    } }), _jsxs(Box, { sx: {
                                                        position: 'relative',
                                                        height: '100%',
                                                        p: 3,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'space-between',
                                                        zIndex: 2,
                                                    }, children: [_jsx(Box, { sx: { color: 'white', mb: 2, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }, children: _jsx(HandshakeIcon, { sx: { fontSize: 32 } }) }), _jsxs(Box, { children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 700, mb: 1, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }, children: "Partnership Inquiry" }), _jsx(Typography, { variant: "body2", sx: { color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.5)', mb: 1 }, children: "Interested in collaborating?" }), _jsx(Typography, { variant: "caption", sx: { color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.5)', fontStyle: 'italic' }, children: "Click to fill partnership form" })] })] })] }), _jsx(Divider, {}), _jsxs(Card, { sx: {
                                                position: 'relative',
                                                overflow: 'hidden',
                                                borderTop: '4px solid',
                                                borderTopColor: '#002395',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-4px)',
                                                    boxShadow: '0 6px 20px rgba(0, 35, 149, 0.15)',
                                                    '& .email-bg': {
                                                        transform: 'scale(1.1)',
                                                        filter: 'brightness(0.4) blur(0px)',
                                                    },
                                                },
                                            }, children: [_jsx(Box, { className: "email-bg", component: "img", src: getImagePath("/photos/583924019_1157903166517688_8756873269993443102_n.jpg"), alt: "Team working", sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        filter: 'brightness(0.5) blur(4px) saturate(1.1)',
                                                        transition: 'all 0.4s ease',
                                                        zIndex: 0,
                                                    } }), _jsx(Box, { sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.7) 0%, rgba(0, 35, 149, 0.5) 100%)',
                                                        zIndex: 1,
                                                    } }), _jsx(CardContent, { sx: { p: 3, position: 'relative', zIndex: 2 }, children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'flex-start', mb: 2 }, children: [_jsx(Box, { sx: {
                                                                    width: 48,
                                                                    height: 48,
                                                                    borderRadius: '12px',
                                                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                                                    backdropFilter: 'blur(10px)',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    color: 'white',
                                                                    mr: 2,
                                                                }, children: _jsx(EmailIcon, {}) }), _jsxs(Box, { children: [_jsx(Typography, { variant: "h6", gutterBottom: true, sx: { fontWeight: 700, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }, children: "Email" }), _jsx(Typography, { variant: "body2", sx: { color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }, children: _jsx("a", { href: "mailto:mitra.france@gmail.com", style: { color: 'white', textDecoration: 'none', fontWeight: 600 }, children: "mitra.france@gmail.com" }) })] })] }) })] }), _jsxs(Card, { sx: {
                                                position: 'relative',
                                                overflow: 'hidden',
                                                borderTop: '4px solid',
                                                borderTopColor: '#ED2939',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-4px)',
                                                    boxShadow: '0 6px 20px rgba(237, 41, 57, 0.15)',
                                                    '& .phone-bg': {
                                                        transform: 'scale(1.1)',
                                                        filter: 'brightness(0.4) blur(0px)',
                                                    },
                                                },
                                            }, children: [_jsx(Box, { className: "phone-bg", component: "img", src: getImagePath("/photos/583741041_1157902773184394_5619801435922057517_n.jpg"), alt: "Office interior", sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        filter: 'brightness(0.5) blur(4px) saturate(1.1)',
                                                        transition: 'all 0.4s ease',
                                                        zIndex: 0,
                                                    } }), _jsx(Box, { sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        background: 'linear-gradient(135deg, rgba(237, 41, 57, 0.7) 0%, rgba(237, 41, 57, 0.5) 100%)',
                                                        zIndex: 1,
                                                    } }), _jsx(CardContent, { sx: { p: 3, position: 'relative', zIndex: 2 }, children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'flex-start', mb: 2 }, children: [_jsx(Box, { sx: {
                                                                    width: 48,
                                                                    height: 48,
                                                                    borderRadius: '12px',
                                                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                                                    backdropFilter: 'blur(10px)',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    color: 'white',
                                                                    mr: 2,
                                                                }, children: _jsx(PhoneIcon, {}) }), _jsxs(Box, { children: [_jsx(Typography, { variant: "h6", gutterBottom: true, sx: { fontWeight: 700, color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }, children: "Phone" }), _jsx(Typography, { variant: "body2", sx: { color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }, children: _jsx("a", { href: "tel:+33641092395", style: { color: 'white', textDecoration: 'none', fontWeight: 600 }, children: "+33 6 41 09 23 95" }) })] })] }) })] }), _jsxs(Card, { sx: {
                                                position: 'relative',
                                                overflow: 'hidden',
                                                borderTop: '4px solid',
                                                borderTopColor: '#4CAF50',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-4px)',
                                                    boxShadow: '0 6px 20px rgba(76, 175, 80, 0.15)',
                                                    '& .location-map': {
                                                        opacity: 1,
                                                    },
                                                },
                                            }, onClick: () => window.open('https://www.google.com/maps/search/?api=1&query=Nice+France', '_blank'), children: [_jsx(Box, { className: "location-map", sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)',
                                                        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(76, 175, 80, 0.2) 2px, transparent 2px)',
                                                        backgroundSize: '40px 40px',
                                                        opacity: 0.5,
                                                        transition: 'opacity 0.3s ease',
                                                        zIndex: 0,
                                                    } }), _jsx(Box, { sx: {
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundImage: 'url(https://maps.googleapis.com/maps/api/staticmap?center=Nice,France&zoom=13&size=400x200&key=YOUR_API_KEY)',
                                                        opacity: 0,
                                                        transition: 'opacity 0.3s ease',
                                                        zIndex: 1,
                                                        '&:hover': {
                                                            opacity: 0.3,
                                                        },
                                                    } }), _jsx(CardContent, { sx: { p: 3, position: 'relative', zIndex: 2 }, children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'flex-start', mb: 2 }, children: [_jsx(Box, { sx: {
                                                                    width: 48,
                                                                    height: 48,
                                                                    borderRadius: '12px',
                                                                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    color: 'success.main',
                                                                    mr: 2,
                                                                }, children: _jsx(LocationOnIcon, {}) }), _jsxs(Box, { children: [_jsx(Typography, { variant: "h6", gutterBottom: true, sx: { fontWeight: 700, color: '#0b1b3a' }, children: "Location" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Nice, France" }), _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { fontStyle: 'italic', display: 'block', mt: 0.5 }, children: "Click to open in Google Maps" })] })] }) })] }), _jsx(Divider, {}), _jsx(Card, { children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h6", gutterBottom: true, children: "Organization Details" }), _jsxs(Typography, { variant: "body2", color: "text.secondary", paragraph: true, children: [_jsx("strong", { children: "PIC:" }), " 921950857"] }), _jsxs(Typography, { variant: "body2", color: "text.secondary", children: [_jsx("strong", { children: "OID:" }), " E10155908"] })] }) }), _jsx(Card, { children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h6", gutterBottom: true, sx: { fontWeight: 700 }, children: "Follow Us" }), _jsxs(Stack, { direction: "row", spacing: 2, sx: { mt: 2, mb: 3 }, children: [_jsx(Button, { variant: "contained", startIcon: _jsx(FacebookIcon, {}), href: "https://www.facebook.com", target: "_blank", rel: "noopener noreferrer", size: "medium", sx: {
                                                                    backgroundColor: '#1877F2',
                                                                    color: 'white',
                                                                    fontWeight: 600,
                                                                    '&:hover': {
                                                                        backgroundColor: '#1565C0',
                                                                        transform: 'translateY(-2px)',
                                                                        boxShadow: '0 4px 12px rgba(24, 119, 242, 0.4)',
                                                                    },
                                                                    transition: 'all 0.3s ease',
                                                                }, children: "Facebook" }), _jsx(Button, { variant: "contained", startIcon: _jsx(YouTubeIcon, {}), href: "https://www.youtube.com", target: "_blank", rel: "noopener noreferrer", size: "medium", sx: {
                                                                    backgroundColor: '#FF0000',
                                                                    color: 'white',
                                                                    fontWeight: 600,
                                                                    '&:hover': {
                                                                        backgroundColor: '#CC0000',
                                                                        transform: 'translateY(-2px)',
                                                                        boxShadow: '0 4px 12px rgba(255, 0, 0, 0.4)',
                                                                    },
                                                                    transition: 'all 0.3s ease',
                                                                }, children: "YouTube" })] }), _jsx(Box, { sx: { mb: 3 }, children: _jsx(Button, { variant: "outlined", startIcon: _jsx(RadioIcon, {}), href: "https://el-radio.fr", target: "_blank", rel: "noopener noreferrer", size: "medium", fullWidth: true, sx: {
                                                                borderColor: '#666',
                                                                color: '#666',
                                                                fontWeight: 600,
                                                                '&:hover': {
                                                                    borderColor: '#333',
                                                                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                                                    transform: 'translateY(-2px)',
                                                                },
                                                                transition: 'all 0.3s ease',
                                                            }, children: "el-radio.fr webradio" }) }), _jsxs(Box, { children: [_jsx(Typography, { variant: "caption", color: "text.secondary", sx: { mb: 1.5, display: 'block', fontWeight: 600 }, children: "Latest from our community" }), _jsx(Box, { sx: {
                                                                    display: 'flex',
                                                                    gap: 1.5,
                                                                    overflowX: 'auto',
                                                                    pb: 1,
                                                                    '&::-webkit-scrollbar': {
                                                                        height: 4,
                                                                    },
                                                                    '&::-webkit-scrollbar-track': {
                                                                        backgroundColor: 'rgba(0,0,0,0.05)',
                                                                        borderRadius: 2,
                                                                    },
                                                                    '&::-webkit-scrollbar-thumb': {
                                                                        backgroundColor: 'rgba(0, 35, 149, 0.3)',
                                                                        borderRadius: 2,
                                                                    },
                                                                }, children: [
                                                                    getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                                                                    getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'),
                                                                    getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                                                                    getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                                                                ].map((photo, idx) => (_jsx(Box, { component: "a", href: "/gallery", sx: {
                                                                        minWidth: 80,
                                                                        height: 80,
                                                                        borderRadius: 2,
                                                                        overflow: 'hidden',
                                                                        cursor: 'pointer',
                                                                        transition: 'all 0.3s ease',
                                                                        '&:hover': {
                                                                            transform: 'scale(1.1)',
                                                                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                                                                        },
                                                                    }, children: _jsx(Box, { component: "img", src: photo, alt: `Community photo ${idx + 1}`, sx: {
                                                                            width: '100%',
                                                                            height: '100%',
                                                                            objectFit: 'cover',
                                                                            filter: 'brightness(0.95) saturate(1.1)',
                                                                        } }) }, idx))) })] })] }) })] }) })] }), _jsx(Divider, { sx: { my: 8 } }), _jsx(Box, { sx: { mb: 8 }, children: _jsxs(Container, { children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 6 }, children: [_jsx(Chip, { icon: _jsx(LocationOnIcon, {}), label: "Global Presence", color: "primary", sx: { mb: 2, fontWeight: 600 } }), _jsx(Typography, { variant: "h2", sx: {
                                                mb: 2,
                                                fontWeight: 800,
                                                color: '#0b1b3a',
                                                position: 'relative',
                                                '&::after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    bottom: -8,
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    width: '80px',
                                                    height: '3px',
                                                    background: '#ED2939',
                                                    borderRadius: '2px',
                                                },
                                            }, children: "Our Presence & Locations" }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }, children: "Discover our headquarters in Nice and our partner network across Europe" })] }), _jsx(Box, { sx: { mb: 8 }, children: _jsxs(Card, { sx: {
                                            p: { xs: 3, md: 5 },
                                            borderRadius: 4,
                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                                            border: '2px solid',
                                            borderColor: 'primary.main',
                                            position: 'relative',
                                            overflow: 'hidden',
                                        }, children: [_jsx(Typography, { variant: "h4", sx: { mb: 4, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }, children: "Interactive Map of Our Presence" }), _jsxs(Box, { sx: {
                                                    position: 'relative',
                                                    width: '100%',
                                                    height: { xs: 400, sm: 500, md: 600 },
                                                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.08) 0%, rgba(0, 35, 149, 0.03) 100%)',
                                                    borderRadius: 3,
                                                    overflow: 'hidden',
                                                    border: '2px solid',
                                                    borderColor: '#002395',
                                                    boxShadow: 'inset 0 2px 8px rgba(0, 35, 149, 0.1)',
                                                }, children: [_jsx(Box, { sx: {
                                                            position: 'absolute',
                                                            inset: 0,
                                                            backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(0, 35, 149, 0.15) 2px, transparent 2px)',
                                                            backgroundSize: '60px 60px',
                                                            opacity: 0.4,
                                                        } }), _jsx(Box, { sx: {
                                                            position: 'absolute',
                                                            inset: 0,
                                                            backgroundImage: `
                      linear-gradient(rgba(0, 35, 149, 0.03) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 35, 149, 0.03) 1px, transparent 1px)
                    `,
                                                            backgroundSize: '40px 40px',
                                                            opacity: 0.5,
                                                        } }), [
                                                        {
                                                            city: 'Nice',
                                                            country: 'France',
                                                            x: 45,
                                                            y: 60,
                                                            isHeadquarters: true,
                                                            photo: getImagePath('/photos/583741041_1157902773184394_5619801435922057517_n.jpg'),
                                                            description: 'Our headquarters in the heart of the French Riviera',
                                                        },
                                                        {
                                                            city: 'Berlin',
                                                            country: 'Germany',
                                                            x: 55,
                                                            y: 35,
                                                            isHeadquarters: false,
                                                            photo: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                                                            description: 'Erasmus+ project collaboration',
                                                        },
                                                        {
                                                            city: 'Kyiv',
                                                            country: 'Ukraine',
                                                            x: 65,
                                                            y: 30,
                                                            isHeadquarters: false,
                                                            photo: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                                                            description: 'Digital literacy programs',
                                                        },
                                                        {
                                                            city: 'Madrid',
                                                            country: 'Spain',
                                                            x: 25,
                                                            y: 55,
                                                            isHeadquarters: false,
                                                            photo: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                                                            description: 'Cultural exchange initiatives',
                                                        },
                                                    ].map((location, idx) => (_jsx(Tooltip, { title: _jsxs(Box, { sx: { p: 1 }, children: [_jsxs(Typography, { variant: "subtitle2", sx: { fontWeight: 700, mb: 1, color: 'white' }, children: [location.city, ", ", location.country] }), _jsx(Box, { component: "img", src: location.photo, alt: location.city, sx: {
                                                                        width: 150,
                                                                        height: 100,
                                                                        objectFit: 'cover',
                                                                        borderRadius: 2,
                                                                        mb: 1,
                                                                        border: '2px solid white',
                                                                    } }), _jsx(Typography, { variant: "caption", sx: { color: 'white', display: 'block' }, children: location.description })] }), arrow: true, placement: "top", children: _jsxs(Box, { sx: {
                                                                position: 'absolute',
                                                                left: `${location.x}%`,
                                                                top: `${location.y}%`,
                                                                transform: 'translate(-50%, -50%)',
                                                                zIndex: 2,
                                                            }, children: [_jsx(Box, { sx: {
                                                                        position: 'absolute',
                                                                        left: '50%',
                                                                        top: '50%',
                                                                        transform: 'translate(-50%, -50%)',
                                                                        width: location.isHeadquarters ? 40 : 32,
                                                                        height: location.isHeadquarters ? 40 : 32,
                                                                        borderRadius: '50%',
                                                                        backgroundColor: location.isHeadquarters ? 'rgba(237, 41, 57, 0.2)' : 'rgba(0, 35, 149, 0.2)',
                                                                        animation: 'pulse 2s infinite',
                                                                        '@keyframes pulse': {
                                                                            '0%': {
                                                                                transform: 'translate(-50%, -50%) scale(1)',
                                                                                opacity: 1,
                                                                            },
                                                                            '100%': {
                                                                                transform: 'translate(-50%, -50%) scale(2)',
                                                                                opacity: 0,
                                                                            },
                                                                        },
                                                                    } }), _jsx(Box, { sx: {
                                                                        position: 'relative',
                                                                        width: location.isHeadquarters ? 24 : 18,
                                                                        height: location.isHeadquarters ? 24 : 18,
                                                                        borderRadius: '50%',
                                                                        backgroundColor: location.isHeadquarters ? '#ED2939' : '#002395',
                                                                        border: '3px solid white',
                                                                        boxShadow: `0 4px 12px ${location.isHeadquarters ? 'rgba(237, 41, 57, 0.4)' : 'rgba(0, 35, 149, 0.4)'}`,
                                                                        cursor: 'pointer',
                                                                        transition: 'all 0.3s ease',
                                                                        '&:hover': {
                                                                            transform: 'scale(1.4)',
                                                                            boxShadow: `0 6px 20px ${location.isHeadquarters ? 'rgba(237, 41, 57, 0.6)' : 'rgba(0, 35, 149, 0.6)'}`,
                                                                        },
                                                                    }, children: _jsx(Box, { sx: {
                                                                            position: 'absolute',
                                                                            inset: 2,
                                                                            borderRadius: '50%',
                                                                            background: `radial-gradient(circle, ${location.isHeadquarters ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)'} 0%, transparent 70%)`,
                                                                        } }) }), location.isHeadquarters && (_jsx(Box, { sx: {
                                                                        position: 'absolute',
                                                                        top: '100%',
                                                                        left: '50%',
                                                                        transform: 'translateX(-50%)',
                                                                        mt: 1,
                                                                        whiteSpace: 'nowrap',
                                                                        fontSize: '0.75rem',
                                                                        fontWeight: 700,
                                                                        color: '#002395',
                                                                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                                        px: 1,
                                                                        py: 0.5,
                                                                        borderRadius: 1,
                                                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                                                        textShadow: 'none',
                                                                    }, children: "HQ" }))] }) }, idx)))] })] }) }), _jsxs(Box, { sx: { mb: 8 }, children: [_jsx(Typography, { variant: "h4", sx: { mb: 4, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }, children: "Inside Our Hub" }), _jsx(ImageList, { variant: "quilted", cols: 4, rowHeight: 200, gap: 16, sx: { mb: 4 }, children: [
                                                {
                                                    img: getImagePath('/photos/583741041_1157902773184394_5619801435922057517_n.jpg'),
                                                    title: 'Where the magic happens',
                                                    rows: 2,
                                                    cols: 2,
                                                },
                                                {
                                                    img: getImagePath('/photos/584326681_1157904053184266_2071216266526493174_n.jpg'),
                                                    title: 'Team collaboration space',
                                                    rows: 1,
                                                    cols: 1,
                                                },
                                                {
                                                    img: getImagePath('/photos/583943471_1157911509850187_2575083228465038744_n.jpg'),
                                                    title: 'Digital literacy workshops',
                                                    rows: 1,
                                                    cols: 1,
                                                },
                                                {
                                                    img: getImagePath('/photos/572851437_1143811217926883_7725194936764095335_n.jpg'),
                                                    title: 'Creative workspace',
                                                    rows: 1,
                                                    cols: 2,
                                                },
                                            ].map((item, idx) => (_jsxs(ImageListItem, { cols: item.cols || 1, rows: item.rows || 1, sx: {
                                                    borderRadius: 3,
                                                    overflow: 'hidden',
                                                    position: 'relative',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.4s ease',
                                                    '&:hover': {
                                                        transform: 'scale(1.02)',
                                                        boxShadow: '0 8px 24px rgba(0, 35, 149, 0.3)',
                                                        '& .photo-overlay': {
                                                            opacity: 1,
                                                        },
                                                    },
                                                }, children: [_jsx(Box, { component: "img", src: item.img, alt: item.title, sx: {
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            filter: 'brightness(0.9) saturate(1.05)',
                                                        } }), _jsx(Box, { className: "photo-overlay", sx: {
                                                            position: 'absolute',
                                                            bottom: 0,
                                                            left: 0,
                                                            right: 0,
                                                            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%)',
                                                            p: 2,
                                                            opacity: 0.8,
                                                            transition: 'opacity 0.3s ease',
                                                        }, children: _jsx(Typography, { variant: "body2", sx: {
                                                                color: 'white',
                                                                fontWeight: 600,
                                                                fontStyle: 'italic',
                                                                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                                                            }, children: item.title }) })] }, idx))) })] }), _jsxs(Box, { sx: { mb: 8 }, children: [_jsx(Typography, { variant: "h4", sx: { mb: 4, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }, children: "Key Contacts" }), _jsx(Grid, { container: true, spacing: 3, children: [
                                                {
                                                    name: 'Anna',
                                                    role: 'Project Coordinator',
                                                    email: 'anna@mitra-france.org',
                                                    photo: getImagePath('/photos/583924019_1157903166517688_8756873269993443102_n.jpg'),
                                                    color: '#002395',
                                                },
                                                {
                                                    name: 'Marie',
                                                    role: 'Digital Literacy Lead',
                                                    email: 'marie@mitra-france.org',
                                                    photo: getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg'),
                                                    color: '#ED2939',
                                                },
                                                {
                                                    name: 'Sophie',
                                                    role: 'Partnership Manager',
                                                    email: 'sophie@mitra-france.org',
                                                    photo: getImagePath('/photos/583489432_1157911303183541_1292926580526900497_n.jpg'),
                                                    color: '#002395',
                                                },
                                            ].map((contact, idx) => (_jsx(Grid, { size: { xs: 12, sm: 6, md: 4 }, children: _jsxs(Card, { sx: {
                                                        p: 3,
                                                        borderRadius: 3,
                                                        textAlign: 'center',
                                                        border: '2px solid',
                                                        borderColor: `${contact.color}30`,
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            transform: 'translateY(-6px)',
                                                            boxShadow: `0 12px 32px ${contact.color}30`,
                                                            borderColor: contact.color,
                                                        },
                                                    }, children: [_jsx(Avatar, { src: contact.photo, alt: contact.name, sx: {
                                                                width: 120,
                                                                height: 120,
                                                                mx: 'auto',
                                                                mb: 2,
                                                                border: `4px solid ${contact.color}`,
                                                                boxShadow: `0 4px 12px ${contact.color}30`,
                                                            } }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 700, mb: 0.5, color: '#0b1b3a' }, children: contact.name }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: contact.role }), _jsxs(Button, { component: "a", href: `mailto:${contact.email}?subject=Contact from MITRA FRANCE website`, variant: "outlined", size: "small", sx: {
                                                                borderColor: contact.color,
                                                                color: contact.color,
                                                                fontWeight: 600,
                                                                '&:hover': {
                                                                    borderColor: contact.color,
                                                                    backgroundColor: `${contact.color}10`,
                                                                },
                                                            }, children: ["Write to ", contact.name] })] }) }, idx))) })] }), _jsxs(Box, { children: [_jsx(Typography, { variant: "h4", sx: { mb: 4, fontWeight: 700, color: '#0b1b3a', textAlign: 'center' }, children: "How to Reach Us" }), _jsxs(Grid, { container: true, spacing: 4, children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                                            p: 3,
                                                            borderRadius: 3,
                                                            border: '2px solid',
                                                            borderColor: '#ED293930',
                                                            height: '100%',
                                                            display: 'flex',
                                                            gap: 3,
                                                            transition: 'all 0.3s ease',
                                                            '&:hover': {
                                                                transform: 'translateY(-4px)',
                                                                boxShadow: '0 8px 24px rgba(237, 41, 57, 0.2)',
                                                            },
                                                        }, children: [_jsx(Box, { sx: {
                                                                    minWidth: 120,
                                                                    height: 120,
                                                                    borderRadius: 2,
                                                                    overflow: 'hidden',
                                                                    flexShrink: 0,
                                                                }, children: _jsx(Box, { component: "img", src: getImagePath("/photos/583741041_1157902773184394_5619801435922057517_n.jpg"), alt: "Tram stop", sx: {
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        objectFit: 'cover',
                                                                        filter: 'brightness(0.9) saturate(1.1)',
                                                                    } }) }), _jsxs(Box, { sx: { flexGrow: 1 }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1, mb: 1 }, children: [_jsx(TramIcon, { sx: { color: '#ED2939', fontSize: 28 } }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 700, color: '#0b1b3a' }, children: "By Tram" })] }), _jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 1 }, children: ["Take tram line 1 to ", _jsx("strong", { children: "Garibaldi" }), " station"] }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "Walk 5 minutes from the station" })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                                            p: 3,
                                                            borderRadius: 3,
                                                            border: '2px solid',
                                                            borderColor: '#ED293930',
                                                            height: '100%',
                                                            display: 'flex',
                                                            gap: 3,
                                                            transition: 'all 0.3s ease',
                                                            '&:hover': {
                                                                transform: 'translateY(-4px)',
                                                                boxShadow: '0 8px 24px rgba(237, 41, 57, 0.2)',
                                                            },
                                                        }, children: [_jsx(Box, { sx: {
                                                                    minWidth: 120,
                                                                    height: 120,
                                                                    borderRadius: 2,
                                                                    overflow: 'hidden',
                                                                    flexShrink: 0,
                                                                }, children: _jsx(Box, { component: "img", src: getImagePath("/photos/584326681_1157904053184266_2071216266526493174_n.jpg"), alt: "Bus stop", sx: {
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        objectFit: 'cover',
                                                                        filter: 'brightness(0.9) saturate(1.1)',
                                                                    } }) }), _jsxs(Box, { sx: { flexGrow: 1 }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1, mb: 1 }, children: [_jsx(DirectionsBusIcon, { sx: { color: '#ED2939', fontSize: 28 } }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 700, color: '#0b1b3a' }, children: "By Bus" })] }), _jsxs(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 1 }, children: ["Bus lines ", _jsx("strong", { children: "12, 23, 38" }), " stop nearby"] }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "Check schedules at nice.fr" })] })] }) })] })] })] }) }), _jsx(Divider, { sx: { my: 8 } }), _jsx(Box, { sx: {
                            py: { xs: 8, sm: 10 },
                            backgroundColor: 'rgba(0, 35, 149, 0.02)',
                            position: 'relative',
                        }, children: _jsxs(Container, { children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 6 }, children: [_jsx(Chip, { icon: _jsx(QuestionAnswerIcon, {}), label: "Tell User & Ask User", color: "primary", sx: { mb: 2, fontWeight: 600 } }), _jsx(Typography, { variant: "h2", sx: { mb: 2, fontWeight: 700 }, children: "Clear Communication, Active Engagement" }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }, children: "We tell you what actions are available and ask for your input to create a personalized, engaging experience." })] }), _jsxs(Grid, { container: true, spacing: 4, children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
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
                                                                }, children: _jsx(AnnouncementIcon, { sx: { fontSize: 32, color: 'primary.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'primary.main' }, children: "Tell User" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "We provide clear, concise information through visual cues, helpful microcopy, and timely notifications." }), _jsxs(Stack, { spacing: 3, children: [_jsxs(Box, { sx: {
                                                                    p: 2.5,
                                                                    borderRadius: 2,
                                                                    border: '1px solid',
                                                                    borderColor: 'primary.main',
                                                                    backgroundColor: 'rgba(0, 35, 149, 0.05)',
                                                                }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }, children: [_jsx(PaletteIcon, { sx: { fontSize: 20, color: 'primary.main' } }), _jsx(Typography, { variant: "body2", sx: { fontWeight: 700, color: 'primary.main' }, children: "Visual Cues" })] }), _jsxs(Stack, { direction: "row", spacing: 2, flexWrap: "wrap", sx: { mb: 1 }, children: [_jsx(Chip, { icon: _jsx(CheckCircleIcon, {}), label: "Success", color: "success", size: "small" }), _jsx(Chip, { icon: _jsx(InfoIcon, {}), label: "Info", color: "info", size: "small" }), _jsx(Chip, { icon: _jsx(WarningIcon, {}), label: "Warning", color: "warning", size: "small" }), _jsx(Chip, { icon: _jsx(ErrorOutlineIcon, {}), label: "Error", color: "error", size: "small" })] }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "Colors, icons, and typography signal important elements and guide your attention" })] }), _jsxs(Box, { sx: {
                                                                    p: 2.5,
                                                                    borderRadius: 2,
                                                                    border: '1px solid',
                                                                    borderColor: 'info.main',
                                                                    backgroundColor: 'rgba(0, 35, 149, 0.05)',
                                                                }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }, children: [_jsx(TextFieldsIcon, { sx: { fontSize: 20, color: 'info.main' } }), _jsx(Typography, { variant: "body2", sx: { fontWeight: 700, color: 'info.main' }, children: "Microcopy" })] }), _jsxs(Stack, { spacing: 1, children: [_jsx(Tooltip, { title: "This button will take you to the registration form", children: _jsx(Button, { variant: "outlined", size: "small", fullWidth: true, children: "Register Now" }) }), _jsx(Tooltip, { title: "Learn more about our programs and services", children: _jsx(Button, { variant: "outlined", size: "small", fullWidth: true, children: "Learn More" }) })] }), _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { mt: 1, display: 'block' }, children: "Short, helpful text guides you to take appropriate actions" })] }), _jsxs(Box, { sx: {
                                                                    p: 2.5,
                                                                    borderRadius: 2,
                                                                    border: '1px solid',
                                                                    borderColor: 'success.main',
                                                                    backgroundColor: 'rgba(76, 175, 80, 0.05)',
                                                                }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }, children: [_jsx(NotificationsIcon, { sx: { fontSize: 20, color: 'success.main' } }), _jsx(Typography, { variant: "body2", sx: { fontWeight: 700, color: 'success.main' }, children: "Notifications" })] }), _jsxs(Box, { sx: {
                                                                            p: 2,
                                                                            borderRadius: 1,
                                                                            backgroundColor: 'rgba(76, 175, 80, 0.1)',
                                                                            border: '1px solid',
                                                                            borderColor: 'success.main',
                                                                        }, children: [_jsx(Typography, { variant: "caption", sx: { fontWeight: 600, display: 'block', mb: 0.5 }, children: "Live Update" }), _jsxs(Typography, { variant: "caption", color: "text.secondary", children: [liveActivity.recent, " people joined in the last hour"] })] }), _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { mt: 1, display: 'block' }, children: "Real-time updates keep you informed about system status" })] })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
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
                                                                }, children: _jsx(QuestionAnswerIcon, { sx: { fontSize: 32, color: 'success.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'success.main' }, children: "Ask User" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "We ask for your input to create a personalized experience and gather valuable feedback." }), _jsxs(Stack, { spacing: 3, children: [_jsxs(Box, { sx: {
                                                                    p: 2.5,
                                                                    borderRadius: 2,
                                                                    border: '1px solid',
                                                                    borderColor: 'success.main',
                                                                    backgroundColor: 'rgba(76, 175, 80, 0.05)',
                                                                }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }, children: [_jsx(TouchAppIcon, { sx: { fontSize: 20, color: 'success.main' } }), _jsx(Typography, { variant: "body2", sx: { fontWeight: 700, color: 'success.main' }, children: "Interactive Elements" })] }), _jsxs(Stack, { spacing: 1.5, children: [_jsx(Button, { variant: "outlined", color: "success", fullWidth: true, onClick: () => {
                                                                                    setShowFeedbackForm(!showFeedbackForm);
                                                                                    showFeedback('Interactive elements engage you with the interface', 'info');
                                                                                }, children: showFeedbackForm ? 'Hide Form' : 'Show Feedback Form' }), _jsxs(Accordion, { expanded: showFeedbackForm, onChange: () => setShowFeedbackForm(!showFeedbackForm), children: [_jsx(AccordionSummary, { expandIcon: _jsx(ExpandMoreIcon, {}), children: _jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: "Progressive Disclosure" }) }), _jsx(AccordionDetails, { children: _jsx(Typography, { variant: "caption", color: "text.secondary", children: "Click to reveal more information. This technique reduces cognitive load." }) })] })] })] }), _jsxs(Box, { sx: {
                                                                    p: 2.5,
                                                                    borderRadius: 2,
                                                                    border: '1px solid',
                                                                    borderColor: 'warning.main',
                                                                    backgroundColor: 'rgba(255, 152, 0, 0.05)',
                                                                }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }, children: [_jsx(RateReviewIcon, { sx: { fontSize: 20, color: 'warning.main' } }), _jsx(Typography, { variant: "body2", sx: { fontWeight: 700, color: 'warning.main' }, children: "Feedback Mechanisms" })] }), _jsxs(Stack, { spacing: 2, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1 }, children: "Rate Your Experience" }), _jsx(Rating, { value: userRating, onChange: (_, newValue) => {
                                                                                            setUserRating(newValue);
                                                                                            showFeedback(newValue ? `Thank you for your ${newValue}-star rating!` : 'Rating removed', 'success');
                                                                                            setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                                                                                        }, size: "large" })] }), showFeedbackForm && (_jsxs(Box, { children: [_jsx(TextField, { fullWidth: true, multiline: true, rows: 3, placeholder: "Share your thoughts, suggestions, or report issues...", value: userFeedback, onChange: (e) => setUserFeedback(e.target.value), sx: { mb: 1 } }), _jsx(Button, { variant: "contained", color: "warning", fullWidth: true, onClick: () => {
                                                                                            if (userFeedback.trim()) {
                                                                                                showFeedback('Thank you for your feedback! We value your input.', 'success');
                                                                                                setUserFeedback('');
                                                                                                setShowFeedbackForm(false);
                                                                                                setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                                                                                            }
                                                                                            else {
                                                                                                showFeedback('Please enter your feedback', 'warning');
                                                                                            }
                                                                                        }, children: "Submit Feedback" })] }))] })] }), _jsxs(Box, { sx: {
                                                                    p: 2.5,
                                                                    borderRadius: 2,
                                                                    border: '1px solid',
                                                                    borderColor: 'info.main',
                                                                    backgroundColor: 'rgba(0, 35, 149, 0.05)',
                                                                }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }, children: [_jsx(AssignmentIcon, { sx: { fontSize: 20, color: 'info.main' } }), _jsx(Typography, { variant: "body2", sx: { fontWeight: 700, color: 'info.main' }, children: "Quick Survey" })] }), _jsx(Typography, { variant: "body2", sx: { mb: 2, fontWeight: 600 }, children: "What brings you here today?" }), _jsx(Stack, { spacing: 1, children: ['Learn new skills', 'Connect with community', 'Find volunteer opportunities', 'Explore programs'].map((option) => (_jsx(Button, { variant: "outlined", size: "small", fullWidth: true, onClick: () => {
                                                                                showFeedback(`You selected: ${option}. We'll personalize your experience!`, 'info');
                                                                                setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                                                                            }, sx: { justifyContent: 'flex-start', textTransform: 'none' }, children: option }, option))) })] })] })] }) })] })] }) }), _jsx(Snackbar, { open: actionFeedback.open, autoHideDuration: 4000, onClose: handleCloseFeedback, anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, children: _jsx(Alert, { onClose: handleCloseFeedback, severity: actionFeedback.type, sx: { width: '100%' }, children: actionFeedback.message }) })] })] }));
}
