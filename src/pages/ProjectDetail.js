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
import LinearProgress from '@mui/material/LinearProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Link as RouterLink } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FlagIcon from '@mui/icons-material/Flag';
import BarChartIcon from '@mui/icons-material/BarChart';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
export default function ProjectDetail() {
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
    const [userCommitments, setUserCommitments] = useState([]);
    const [remindersEnabled, setRemindersEnabled] = useState(false);
    const showFeedback = (message, type = 'success') => {
        setActionFeedback({ open: true, message, type });
    };
    return (_jsxs(Box, { children: [_jsx(Box, { sx: {
                    py: { xs: 8, sm: 10 },
                    backgroundColor: 'rgba(0, 35, 149, 0.03)',
                    position: 'relative',
                }, children: _jsxs(Container, { children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 6 }, children: [_jsx(Chip, { icon: _jsx(AssignmentIcon, {}), label: "Behavior Change Strategies", color: "primary", sx: { mb: 2, fontWeight: 600 } }), _jsx(Typography, { variant: "h2", sx: { mb: 2, fontWeight: 700 }, children: "Make Lasting Changes" }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }, children: "We provide proven strategies to help you adopt new behaviors and achieve your goals. Start your journey today." })] }), _jsxs(Grid, { container: true, spacing: 4, children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
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
                                                        }, children: _jsx(FlagIcon, { sx: { fontSize: 32, color: 'primary.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'primary.main' }, children: "Set Your Goals" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Define clear, achievable goals to guide your journey. Research shows that setting specific goals increases success rates by 42%." }), _jsxs(Stack, { spacing: 2, children: [[
                                                        { id: '1', goal: 'Join a program this month', progress: 0, target: 1 },
                                                        { id: '2', goal: 'Attend 3 events', progress: 0, target: 3 },
                                                        { id: '3', goal: 'Complete a course', progress: 0, target: 1 },
                                                    ].map((goalItem) => (_jsxs(Box, { sx: {
                                                            p: 2,
                                                            borderRadius: 2,
                                                            border: '1px solid',
                                                            borderColor: 'divider',
                                                            backgroundColor: 'rgba(0, 35, 149, 0.02)',
                                                        }, children: [_jsxs(Box, { sx: { display: 'flex', justifyContent: 'space-between', mb: 1 }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: goalItem.goal }), _jsx(Chip, { label: `${goalItem.progress}/${goalItem.target}`, size: "small", color: "primary", sx: { fontWeight: 700 } })] }), _jsx(LinearProgress, { variant: "determinate", value: (goalItem.progress / goalItem.target) * 100, sx: {
                                                                    height: 6,
                                                                    borderRadius: 3,
                                                                    backgroundColor: 'rgba(0, 35, 149, 0.1)',
                                                                } })] }, goalItem.id))), _jsx(Button, { variant: "outlined", color: "primary", fullWidth: true, startIcon: _jsx(FlagIcon, {}), onClick: () => {
                                                            showFeedback('Goal setting feature coming soon!', 'info');
                                                            setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                                                        }, sx: { mt: 2 }, children: "Set New Goal" })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
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
                                                        }, children: _jsx(BarChartIcon, { sx: { fontSize: 32, color: 'info.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'info.main' }, children: "Track Your Progress" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Monitor your journey with visual progress indicators. Seeing your progress motivates continued action." }), _jsxs(Stack, { spacing: 3, children: [_jsxs(Box, { children: [_jsxs(Box, { sx: { display: 'flex', justifyContent: 'space-between', mb: 1 }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: "Overall Engagement" }), _jsxs(Typography, { variant: "body2", sx: { fontWeight: 700, color: 'primary.main' }, children: [satisfactionMetrics.interactions, "%"] })] }), _jsx(LinearProgress, { variant: "determinate", value: Math.min(satisfactionMetrics.interactions * 10, 100), sx: {
                                                                    height: 10,
                                                                    borderRadius: 5,
                                                                    backgroundColor: 'rgba(0, 35, 149, 0.1)',
                                                                    '& .MuiLinearProgress-bar': {
                                                                        background: 'linear-gradient(90deg, #002395 0%, #ED2939 100%)',
                                                                    },
                                                                } })] }), _jsx(Grid, { container: true, spacing: 2, children: [
                                                            { label: 'Programs Joined', value: 0, total: 5, color: 'primary' },
                                                            { label: 'Events Attended', value: 0, total: 10, color: 'success' },
                                                            { label: 'Skills Learned', value: 0, total: 8, color: 'warning' },
                                                        ].map((stat) => (_jsx(Grid, { size: { xs: 12 }, children: _jsxs(Box, { sx: {
                                                                    p: 2,
                                                                    borderRadius: 2,
                                                                    border: '1px solid',
                                                                    borderColor: 'divider',
                                                                    backgroundColor: 'rgba(0, 35, 149, 0.02)',
                                                                }, children: [_jsxs(Box, { sx: { display: 'flex', justifyContent: 'space-between', mb: 1 }, children: [_jsx(Typography, { variant: "caption", sx: { fontWeight: 600 }, children: stat.label }), _jsxs(Typography, { variant: "caption", sx: { fontWeight: 700, color: `${stat.color}.main` }, children: [stat.value, "/", stat.total] })] }), _jsx(LinearProgress, { variant: "determinate", value: (stat.value / stat.total) * 100, color: stat.color, sx: { height: 6, borderRadius: 3 } })] }) }, stat.label))) })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
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
                                                        }, children: _jsx(HandshakeIcon, { sx: { fontSize: 32, color: 'success.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'success.main' }, children: "Make a Commitment" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Public commitments increase accountability and success rates. Share your commitment to stay motivated." }), _jsxs(Stack, { spacing: 2, children: [userCommitments.length === 0 ? (_jsx(Box, { sx: {
                                                            p: 3,
                                                            borderRadius: 2,
                                                            border: '2px dashed',
                                                            borderColor: 'divider',
                                                            textAlign: 'center',
                                                        }, children: _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: "No commitments yet. Make your first commitment to get started!" }) })) : (userCommitments.map((commitment, index) => (_jsx(Box, { sx: {
                                                            p: 2,
                                                            borderRadius: 2,
                                                            border: '1px solid',
                                                            borderColor: 'success.main',
                                                            backgroundColor: 'rgba(76, 175, 80, 0.05)',
                                                        }, children: _jsx(Typography, { variant: "body2", sx: { fontWeight: 600 }, children: commitment }) }, index)))), _jsx(Button, { variant: "contained", color: "success", fullWidth: true, startIcon: _jsx(HandshakeIcon, {}), onClick: () => {
                                                            const newCommitment = 'I commit to joining a program this month';
                                                            setUserCommitments([...userCommitments, newCommitment]);
                                                            showFeedback('Commitment saved! You can do this!', 'success');
                                                            setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                                                        }, sx: { mt: 2 }, children: "Make a Commitment" })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
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
                                                        }, children: _jsx(EmojiEventsIcon, { sx: { fontSize: 32, color: 'warning.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'warning.main' }, children: "Earn Rewards" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Celebrate your achievements with badges and rewards. Rewards reinforce positive behaviors and motivate continued progress." }), _jsx(Grid, { container: true, spacing: 2, children: [
                                                    { name: 'First Steps', icon: _jsx(FlagIcon, {}), earned: false, description: 'Complete registration' },
                                                    { name: 'Active Member', icon: _jsx(PeopleIcon, {}), earned: false, description: 'Join your first event' },
                                                    { name: 'Learner', icon: _jsx(SchoolIcon, {}), earned: false, description: 'Complete a course' },
                                                    { name: 'Community Hero', icon: _jsx(VolunteerActivismIcon, {}), earned: false, description: 'Volunteer 10 hours' },
                                                ].map((badge) => (_jsx(Grid, { size: { xs: 6 }, children: _jsxs(Box, { sx: {
                                                            p: 2,
                                                            borderRadius: 2,
                                                            border: '2px solid',
                                                            borderColor: badge.earned ? 'warning.main' : 'divider',
                                                            backgroundColor: badge.earned ? 'rgba(255, 152, 0, 0.1)' : 'rgba(0, 0, 0, 0.02)',
                                                            textAlign: 'center',
                                                            opacity: badge.earned ? 1 : 0.6,
                                                        }, children: [_jsx(Box, { sx: { color: badge.earned ? 'warning.main' : 'text.secondary', mb: 1 }, children: badge.icon }), _jsx(Typography, { variant: "caption", sx: { fontWeight: 600, display: 'block' }, children: badge.name }), _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { fontSize: '0.7rem' }, children: badge.description })] }) }, badge.name))) }), _jsx(Button, { variant: "outlined", color: "warning", fullWidth: true, startIcon: _jsx(EmojiEventsIcon, {}), onClick: () => {
                                                    showFeedback('Keep progressing to unlock rewards!', 'info');
                                                }, sx: { mt: 3 }, children: "View All Rewards" })] }) })] }), _jsxs(Grid, { container: true, spacing: 4, sx: { mt: 2 }, children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            border: '2px solid',
                                            borderColor: 'info.main',
                                            borderRadius: 3,
                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(NotificationsIcon, { sx: { fontSize: 32, color: 'info.main' } }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'info.main' }, children: "Set Reminders" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Get timely reminders to help you stay on track. Regular prompts increase behavior adherence by 65%." }), _jsx(Button, { variant: remindersEnabled ? 'contained' : 'outlined', color: "info", fullWidth: true, startIcon: _jsx(NotificationsIcon, {}), onClick: () => {
                                                    setRemindersEnabled(!remindersEnabled);
                                                    showFeedback(remindersEnabled ? 'Reminders disabled' : "Reminders enabled! We'll help you stay on track.", remindersEnabled ? 'info' : 'success');
                                                }, children: remindersEnabled ? 'Reminders Enabled' : 'Enable Reminders' })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            border: '2px solid',
                                            borderColor: 'primary.main',
                                            borderRadius: 3,
                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(GroupAddIcon, { sx: { fontSize: 32, color: 'primary.main' } }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'primary.main' }, children: "Social Support" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Connect with others on similar journeys. Social support increases success rates and makes the journey more enjoyable." }), _jsx(Button, { variant: "contained", color: "primary", fullWidth: true, startIcon: _jsx(GroupAddIcon, {}), component: RouterLink, to: "/contact", onClick: () => showFeedback('Connecting you with the community...', 'info'), children: "Join Support Group" })] }) })] })] }) }), _jsx(Snackbar, { open: actionFeedback.open, autoHideDuration: 4000, onClose: () => setActionFeedback({ ...actionFeedback, open: false }), anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, children: _jsx(Alert, { onClose: () => setActionFeedback({ ...actionFeedback, open: false }), severity: actionFeedback.type, sx: { width: '100%' }, children: actionFeedback.message }) })] }));
}
