import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import visuallyHidden from '@mui/utils/visuallyHidden';
import { styled } from '@mui/material/styles';
const StyledBox = styled('div')(({ theme }) => ({
    alignSelf: 'center',
    width: '100%',
    height: 400,
    marginTop: theme.spacing(8),
    borderRadius: (theme.vars || theme).shape.borderRadius,
    outline: '6px solid',
    outlineColor: 'hsla(220, 25%, 80%, 0.2)',
    border: '1px solid',
    borderColor: (theme.vars || theme).palette.grey[200],
    boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
    backgroundImage: `url(${import.meta.env.VITE_TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/screenshots/material-ui/getting-started/templates/dashboard.jpg)`,
    backgroundSize: 'cover',
    [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(10),
        height: 700,
    },
    ...theme.applyStyles('dark', {
        boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
        backgroundImage: `url(${import.meta.env.VITE_TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg)`,
        outlineColor: 'hsla(220, 20%, 42%, 0.1)',
        borderColor: (theme.vars || theme).palette.grey[700],
    }),
}));
export default function Hero() {
    return (_jsx(Box, { id: "hero", sx: (theme) => ({
            width: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
            ...theme.applyStyles('dark', {
                backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
            }),
        }), children: _jsxs(Container, { sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: { xs: 14, sm: 20 },
                pb: { xs: 8, sm: 12 },
            }, children: [_jsxs(Stack, { spacing: 2, useFlexGap: true, sx: { alignItems: 'center', width: { xs: '100%', sm: '70%' } }, children: [_jsxs(Typography, { variant: "h1", sx: {
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                alignItems: 'center',
                                fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                            }, children: ["Our\u00A0latest\u00A0", _jsx(Typography, { component: "span", variant: "h1", sx: (theme) => ({
                                        fontSize: 'inherit',
                                        color: 'primary.main',
                                        ...theme.applyStyles('dark', {
                                            color: 'primary.light',
                                        }),
                                    }), children: "products" })] }), _jsx(Typography, { sx: {
                                textAlign: 'center',
                                color: 'text.secondary',
                                width: { sm: '100%', md: '80%' },
                            }, children: "Explore our cutting-edge dashboard, delivering high-quality solutions tailored to your needs. Elevate your experience with top-tier features and services." }), _jsxs(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 1, useFlexGap: true, sx: { pt: 2, width: { xs: '100%', sm: '350px' } }, children: [_jsx(InputLabel, { htmlFor: "email-hero", sx: visuallyHidden, children: "Email" }), _jsx(TextField, { id: "email-hero", hiddenLabel: true, size: "small", variant: "outlined", "aria-label": "Enter your email address", placeholder: "Your email address", fullWidth: true, slotProps: {
                                        htmlInput: {
                                            autoComplete: 'off',
                                            'aria-label': 'Enter your email address',
                                        },
                                    } }), _jsx(Button, { variant: "contained", color: "primary", size: "small", sx: { minWidth: 'fit-content' }, children: "Start now" })] }), _jsxs(Typography, { variant: "caption", color: "text.secondary", sx: { textAlign: 'center' }, children: ["By clicking \"Start now\" you agree to our\u00A0", _jsx(Link, { href: "#", color: "primary", children: "Terms & Conditions" }), "."] })] }), _jsx(StyledBox, { id: "image" })] }) }));
}
