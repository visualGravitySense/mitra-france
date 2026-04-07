import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Typography, Stack } from '@mui/material';
import ParticleCTAButton from './ParticleCTAButton';
import { useNavigate } from 'react-router-dom';
const CTASection = () => {
    const navigate = useNavigate();
    return (_jsx(Box, { sx: {
            py: { xs: 8, md: 12 },
            background: (theme) => theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
                : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            position: 'relative',
            overflow: 'hidden',
        }, children: _jsx(Container, { maxWidth: "lg", children: _jsxs(Stack, { spacing: 4, alignItems: "center", textAlign: "center", children: [_jsx(Typography, { variant: "h2", component: "h2", sx: {
                            fontWeight: 800,
                            background: 'linear-gradient(135deg, #002395 0%, #ED2939 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            mb: 2,
                        }, children: "Join Our Mission" }), _jsx(Typography, { variant: "h5", color: "text.secondary", sx: { maxWidth: '600px', mb: 4 }, children: "Empowering communities through education, culture, and digital inclusion" }), _jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 3, sx: { flexWrap: 'wrap', justifyContent: 'center' }, children: [_jsx(ParticleCTAButton, { variant: "contained", color: "primary", size: "large", onClick: () => navigate('/programs-workshops'), sx: {
                                    background: 'linear-gradient(135deg, #002395 0%, #6B8DE3 100%)',
                                    color: 'white',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #001a7a 0%, #5a7dd8 100%)',
                                    },
                                }, children: "Programs & workshops" }), _jsx(ParticleCTAButton, { variant: "outlined", color: "primary", size: "large", onClick: () => navigate('/contact'), sx: {
                                    borderWidth: 2,
                                    borderColor: 'primary.main',
                                    color: 'primary.main',
                                    '&:hover': {
                                        borderWidth: 2,
                                        backgroundColor: 'primary.main',
                                        color: 'white',
                                    },
                                }, children: "Get in Touch" }), _jsx(ParticleCTAButton, { variant: "contained", color: "secondary", size: "large", onClick: () => navigate('/programs-workshops'), sx: {
                                    background: 'linear-gradient(135deg, #ED2939 0%, #FF6B7A 100%)',
                                    color: 'white',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #d41e2e 0%, #ff5a6a 100%)',
                                    },
                                }, colors: ['#ED2939', '#FF6B7A', '#FFB3BA', '#FFFFFF'], children: "Programs & workshops" })] })] }) }) }));
};
export default CTASection;
