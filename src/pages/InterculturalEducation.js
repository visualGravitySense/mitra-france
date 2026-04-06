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
import PsychologyIcon from '@mui/icons-material/Psychology';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import FlagIcon from '@mui/icons-material/Flag';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SchoolIcon from '@mui/icons-material/School';
export default function InterculturalEducation() {
    // State for behavior understanding
    const [emotionalState, setEmotionalState] = useState('curious');
    const [satisfactionMetrics, setSatisfactionMetrics] = useState({
        engagement: 0,
        timeOnPage: 0,
        interactions: 0,
    });
    const [userGoal, setUserGoal] = useState('');
    const [goalProgress, setGoalProgress] = useState(0);
    const [shortcutsUnlocked, setShortcutsUnlocked] = useState(false);
    const [habitTriggers, setHabitTriggers] = useState([
        { id: '1', type: 'visual', enabled: true },
        { id: '2', type: 'time', enabled: false },
        { id: '3', type: 'contextual', enabled: false },
    ]);
    const [socialInfluence, setSocialInfluence] = useState({ peersActive: 1247, topPerformer: 'Maria K.', achievements: 15 });
    const [personalizedContent, setPersonalizedContent] = useState(false);
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
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(237, 41, 57, 0.05) 100%)',
                    pt: { xs: 10, sm: 12, md: 14 },
                    pb: { xs: 6, sm: 8 },
                    mb: 0,
                }, children: _jsx(Container, { children: _jsxs(Box, { sx: { textAlign: 'center', mb: 4 }, children: [_jsx(Chip, { icon: _jsx(SchoolIcon, {}), label: "Intercultural Education", color: "primary", sx: { mb: 2, fontWeight: 600 } }), _jsx(Typography, { variant: "h2", sx: {
                                    mb: 2,
                                    fontWeight: 700,
                                    background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }, children: "Intercultural Education" }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }, children: "Promoting inclusive education, cultural diversity, and social integration across communities." })] }) }) }), _jsx(Box, { sx: {
                    py: { xs: 8, sm: 10 },
                    background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.03) 0%, rgba(237, 41, 57, 0.03) 100%)',
                    position: 'relative',
                    mt: 0,
                }, children: _jsxs(Container, { children: [_jsxs(Box, { sx: { textAlign: 'center', mb: 6 }, children: [_jsx(Chip, { icon: _jsx(PsychologyIcon, {}), label: "Support Conscious Action", color: "primary", sx: { mb: 2, fontWeight: 600 } }), _jsx(Typography, { variant: "h2", sx: { mb: 2, fontWeight: 700 }, children: "We Understand Your Behavior" }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }, children: "We analyze your current behavior patterns to help you make conscious, informed decisions. Our approach is personalized, simple, and backed by behavioral psychology." })] }), _jsxs(Grid, { container: true, spacing: 4, children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
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
                                                        }, children: _jsx(PersonSearchIcon, { sx: { fontSize: 32, color: 'primary.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'primary.main' }, children: "1. Understand Your Behavior" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "We analyze your current habits, pain points, and motivations to design better solutions for you." }), _jsxs(Stack, { spacing: 2, children: [_jsxs(Box, { sx: {
                                                            p: 2,
                                                            borderRadius: 2,
                                                            border: '1px solid',
                                                            borderColor: 'divider',
                                                            backgroundColor: 'rgba(0, 35, 149, 0.02)',
                                                        }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1 }, children: "Your Current Patterns" }), _jsxs(Typography, { variant: "caption", color: "text.secondary", children: ["Interactions: ", satisfactionMetrics.interactions, " | Time: ", Math.floor(satisfactionMetrics.timeOnPage / 60), "m | Engagement: ", satisfactionMetrics.engagement, "%"] })] }), _jsxs(Box, { sx: {
                                                            p: 2,
                                                            borderRadius: 2,
                                                            border: '1px solid',
                                                            borderColor: 'info.main',
                                                            backgroundColor: 'rgba(0, 35, 149, 0.05)',
                                                        }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1, color: 'info.main' }, children: "Identified Patterns" }), _jsxs(Stack, { spacing: 0.5, children: [_jsxs(Typography, { variant: "caption", color: "text.secondary", children: ["\u2022 ", satisfactionMetrics.interactions > 3 ? 'Active explorer' : 'New visitor'] }), _jsxs(Typography, { variant: "caption", color: "text.secondary", children: ["\u2022 ", goalProgress > 50 ? 'Goal-oriented' : 'Exploring options'] }), _jsxs(Typography, { variant: "caption", color: "text.secondary", children: ["\u2022 ", shortcutsUnlocked ? 'Prefers shortcuts' : 'Takes regular path'] })] })] }), _jsx(Button, { variant: "outlined", color: "primary", fullWidth: true, startIcon: _jsx(PersonSearchIcon, {}), onClick: () => {
                                                            showFeedback('We continuously analyze your behavior to improve your experience.', 'info');
                                                            setSatisfactionMetrics((prev) => ({ ...prev, interactions: prev.interactions + 1 }));
                                                        }, children: "Learn More About Your Patterns" })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
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
                                                        }, children: _jsx(FlagIcon, { sx: { fontSize: 32, color: 'success.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'success.main' }, children: "2. Set Clear Goals" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Define specific, measurable, attainable, and relevant goals. Clear goals increase success rates significantly." }), _jsxs(Stack, { spacing: 2, children: [_jsxs(Box, { sx: {
                                                            p: 2,
                                                            borderRadius: 2,
                                                            border: '1px solid',
                                                            borderColor: 'success.main',
                                                            backgroundColor: 'rgba(76, 175, 80, 0.05)',
                                                        }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1, color: 'success.main' }, children: "SMART Goals Framework" }), _jsxs(Stack, { spacing: 0.5, children: [_jsxs(Typography, { variant: "caption", color: "text.secondary", children: [_jsx("strong", { children: "S" }), "pecific: ", userGoal ? `Goal: ${userGoal}` : 'Not set'] }), _jsxs(Typography, { variant: "caption", color: "text.secondary", children: [_jsx("strong", { children: "M" }), "easurable: Progress ", goalProgress, "%"] }), _jsxs(Typography, { variant: "caption", color: "text.secondary", children: [_jsx("strong", { children: "A" }), "ttainable: ", goalProgress > 0 ? 'On track' : 'Ready to start'] }), _jsxs(Typography, { variant: "caption", color: "text.secondary", children: [_jsx("strong", { children: "R" }), "elevant: ", userGoal ? 'Aligned with your needs' : 'Choose your goal'] }), _jsxs(Typography, { variant: "caption", color: "text.secondary", children: [_jsx("strong", { children: "T" }), "ime-bound: ", goalProgress > 0 ? 'In progress' : 'Not started'] })] })] }), _jsxs(Box, { sx: {
                                                            p: 2,
                                                            borderRadius: 2,
                                                            border: '1px solid',
                                                            borderColor: 'divider',
                                                            backgroundColor: 'rgba(0, 0, 0, 0.02)',
                                                        }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1 }, children: "Goal Progress" }), _jsx(LinearProgress, { variant: "determinate", value: goalProgress, sx: {
                                                                    height: 8,
                                                                    borderRadius: 4,
                                                                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                                                                    '& .MuiLinearProgress-bar': {
                                                                        backgroundColor: 'success.main',
                                                                    },
                                                                } }), _jsxs(Typography, { variant: "caption", color: "text.secondary", sx: { mt: 1, display: 'block' }, children: [goalProgress, "% complete"] })] })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
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
                                                        }, children: _jsx(PsychologyIcon, { sx: { fontSize: 32, color: 'info.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'info.main' }, children: "3. Behavioral Psychology" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "We apply proven models like Fogg Behavior Model to understand motivation, ability, and triggers." }), _jsx(Stack, { spacing: 2, children: _jsxs(Box, { sx: {
                                                        p: 2,
                                                        borderRadius: 2,
                                                        border: '1px solid',
                                                        borderColor: 'info.main',
                                                        backgroundColor: 'rgba(0, 35, 149, 0.05)',
                                                    }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1, color: 'info.main' }, children: "Fogg Behavior Model Applied" }), _jsxs(Stack, { spacing: 1, children: [_jsxs(Box, { children: [_jsxs(Typography, { variant: "caption", sx: { fontWeight: 600, display: 'block' }, children: ["Motivation: ", emotionalState === 'committed' ? 'High' : emotionalState === 'interested' ? 'Medium' : 'Building'] }), _jsx(LinearProgress, { variant: "determinate", value: emotionalState === 'committed' ? 90 : emotionalState === 'interested' ? 60 : 30, color: "primary", sx: { height: 4, borderRadius: 2, mt: 0.5 } })] }), _jsxs(Box, { children: [_jsxs(Typography, { variant: "caption", sx: { fontWeight: 600, display: 'block' }, children: ["Ability: ", shortcutsUnlocked ? 'High (shortcuts available)' : 'Medium (standard path)'] }), _jsx(LinearProgress, { variant: "determinate", value: shortcutsUnlocked ? 80 : 50, color: "success", sx: { height: 4, borderRadius: 2, mt: 0.5 } })] }), _jsxs(Box, { children: [_jsxs(Typography, { variant: "caption", sx: { fontWeight: 600, display: 'block' }, children: ["Triggers: ", habitTriggers.filter((t) => t.enabled).length, "/3 active"] }), _jsx(LinearProgress, { variant: "determinate", value: (habitTriggers.filter((t) => t.enabled).length / 3) * 100, color: "warning", sx: { height: 4, borderRadius: 2, mt: 0.5 } })] })] })] }) })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(Card, { sx: {
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
                                                        }, children: _jsx(CheckCircleIcon, { sx: { fontSize: 32, color: 'warning.main' } }) }), _jsx(Typography, { variant: "h5", sx: { fontWeight: 700, color: 'warning.main' }, children: "4. Design for Simplicity" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "We reduce barriers, streamline processes, and minimize cognitive load to make actions easy." }), _jsxs(Stack, { spacing: 2, children: [_jsxs(Box, { sx: {
                                                            p: 2,
                                                            borderRadius: 2,
                                                            border: '1px solid',
                                                            borderColor: 'success.main',
                                                            backgroundColor: 'rgba(76, 175, 80, 0.05)',
                                                        }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1, color: 'success.main' }, children: "Barriers Removed" }), _jsxs(Stack, { spacing: 0.5, children: [_jsx(Typography, { variant: "caption", color: "text.secondary", children: "\u2713 No cost barriers" }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "\u2713 No complexity barriers" }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "\u2713 No commitment barriers" }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "\u2713 No prerequisite barriers" })] })] }), _jsxs(Box, { sx: {
                                                            p: 2,
                                                            borderRadius: 2,
                                                            border: '1px solid',
                                                            borderColor: 'divider',
                                                            backgroundColor: 'rgba(0, 0, 0, 0.02)',
                                                        }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 600, mb: 1 }, children: "Process Simplification" }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "\u2022 Registration: 2 minutes" }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "\u2022 Clear step-by-step guidance" }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "\u2022 Minimal cognitive load" })] })] })] }) })] }), _jsxs(Grid, { container: true, spacing: 4, sx: { mt: 2 }, children: [_jsx(Grid, { size: { xs: 12, md: 4 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            border: '2px solid',
                                            borderColor: 'warning.main',
                                            borderRadius: 3,
                                            background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(CheckCircleIcon, { sx: { fontSize: 32, color: 'warning.main' } }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 700, color: 'warning.main' }, children: "5. Feedback & Reinforcement" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Immediate, clear feedback helps you understand the impact of your actions." }), _jsxs(Box, { sx: {
                                                    p: 2,
                                                    borderRadius: 2,
                                                    border: '1px solid',
                                                    borderColor: 'warning.main',
                                                    backgroundColor: 'rgba(255, 152, 0, 0.05)',
                                                }, children: [_jsx(Typography, { variant: "caption", sx: { fontWeight: 600, display: 'block', mb: 1 }, children: "Recent Feedback" }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: satisfactionMetrics.interactions > 0
                                                            ? `You've completed ${satisfactionMetrics.interactions} interactions. Great progress!`
                                                            : 'Start interacting to receive feedback' })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 4 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            border: '2px solid',
                                            borderColor: 'primary.main',
                                            borderRadius: 3,
                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(GroupsIcon, { sx: { fontSize: 32, color: 'primary.main' } }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 700, color: 'primary.main' }, children: "6. Social Influence" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "See what others are achieving. Social proof motivates action." }), _jsxs(Box, { sx: {
                                                    p: 2,
                                                    borderRadius: 2,
                                                    border: '1px solid',
                                                    borderColor: 'primary.main',
                                                    backgroundColor: 'rgba(0, 35, 149, 0.05)',
                                                }, children: [_jsx(Typography, { variant: "caption", sx: { fontWeight: 600, display: 'block', mb: 1 }, children: "Community Activity" }), _jsx(Typography, { variant: "body1", sx: { fontWeight: 700, color: 'primary.main', mb: 0.5 }, children: socialInfluence.peersActive.toLocaleString() }), _jsx(Typography, { variant: "caption", color: "text.secondary", children: "active members" })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 4 }, children: _jsxs(Card, { sx: {
                                            p: 4,
                                            border: '2px solid',
                                            borderColor: 'info.main',
                                            borderRadius: 3,
                                            background: 'linear-gradient(135deg, rgba(0, 35, 149, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
                                        }, children: [_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 3 }, children: [_jsx(SettingsIcon, { sx: { fontSize: 32, color: 'info.main' } }), _jsx(Typography, { variant: "h6", sx: { fontWeight: 700, color: 'info.main' }, children: "7. Personalize & 8. Iterate" })] }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3, lineHeight: 1.7 }, children: "Your experience is tailored to your preferences. We continuously improve based on your behavior." }), _jsxs(Stack, { spacing: 2, children: [_jsx(Button, { variant: personalizedContent ? 'contained' : 'outlined', color: "info", fullWidth: true, size: "small", startIcon: _jsx(SettingsIcon, {}), onClick: () => {
                                                            setPersonalizedContent(!personalizedContent);
                                                            showFeedback(personalizedContent ? 'Personalization disabled' : 'Personalization enabled! Content tailored to you.', 'info');
                                                        }, children: personalizedContent ? 'Personalized' : 'Enable Personalization' }), _jsx(Button, { variant: "outlined", color: "info", fullWidth: true, size: "small", startIcon: _jsx(AnalyticsIcon, {}), onClick: () => {
                                                            showFeedback('We analyze behavior patterns to continuously improve your experience.', 'info');
                                                        }, children: "View Analytics" })] })] }) })] })] }) }), _jsx(Snackbar, { open: actionFeedback.open, autoHideDuration: 4000, onClose: handleCloseFeedback, anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, children: _jsx(Alert, { onClose: handleCloseFeedback, severity: actionFeedback.type, sx: { width: '100%' }, children: actionFeedback.message }) })] }));
}
