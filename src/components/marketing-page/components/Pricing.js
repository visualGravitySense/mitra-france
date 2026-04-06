import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
const tiers = [
    {
        title: 'Free',
        price: '0',
        description: [
            '10 users included',
            '2 GB of storage',
            'Help center access',
            'Email support',
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
        buttonColor: 'primary',
    },
    {
        title: 'Professional',
        subheader: 'Recommended',
        price: '15',
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
            'Dedicated team',
            'Best deals',
        ],
        buttonText: 'Start now',
        buttonVariant: 'contained',
        buttonColor: 'secondary',
    },
    {
        title: 'Enterprise',
        price: '30',
        description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
        buttonColor: 'primary',
    },
];
export default function Pricing() {
    return (_jsxs(Container, { id: "pricing", sx: {
            pt: { xs: 4, sm: 12 },
            pb: { xs: 8, sm: 16 },
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 3, sm: 6 },
        }, children: [_jsxs(Box, { sx: {
                    width: { sm: '100%', md: '60%' },
                    textAlign: { sm: 'left', md: 'center' },
                }, children: [_jsx(Typography, { component: "h2", variant: "h4", gutterBottom: true, sx: { color: 'text.primary' }, children: "Pricing" }), _jsxs(Typography, { variant: "body1", sx: { color: 'text.secondary' }, children: ["Quickly build an effective pricing table for your potential customers with this layout. ", _jsx("br", {}), "It's built with default Material UI components with little customization."] })] }), _jsx(Grid, { container: true, spacing: 3, sx: { alignItems: 'center', justifyContent: 'center', width: '100%' }, children: tiers.map((tier) => (_jsx(Grid, { size: { xs: 12, sm: tier.title === 'Enterprise' ? 12 : 6, md: 4 }, children: _jsxs(Card, { sx: [
                            {
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 4,
                            },
                            tier.title === 'Professional' &&
                                ((theme) => ({
                                    border: 'none',
                                    background: 'radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))',
                                    boxShadow: `0 8px 12px hsla(220, 20%, 42%, 0.2)`,
                                    ...theme.applyStyles('dark', {
                                        background: 'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
                                        boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
                                    }),
                                })),
                        ], children: [_jsxs(CardContent, { children: [_jsxs(Box, { sx: [
                                            {
                                                mb: 1,
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                gap: 2,
                                            },
                                            tier.title === 'Professional'
                                                ? { color: 'grey.100' }
                                                : { color: '' },
                                        ], children: [_jsx(Typography, { component: "h3", variant: "h6", children: tier.title }), tier.title === 'Professional' && (_jsx(Chip, { icon: _jsx(AutoAwesomeIcon, {}), label: tier.subheader }))] }), _jsxs(Box, { sx: [
                                            {
                                                display: 'flex',
                                                alignItems: 'baseline',
                                            },
                                            tier.title === 'Professional'
                                                ? { color: 'grey.50' }
                                                : { color: null },
                                        ], children: [_jsxs(Typography, { component: "h3", variant: "h2", children: ["$", tier.price] }), _jsx(Typography, { component: "h3", variant: "h6", children: "\u00A0 per month" })] }), _jsx(Divider, { sx: { my: 2, opacity: 0.8, borderColor: 'divider' } }), tier.description.map((line) => (_jsxs(Box, { sx: { py: 1, display: 'flex', gap: 1.5, alignItems: 'center' }, children: [_jsx(CheckCircleRoundedIcon, { sx: [
                                                    {
                                                        width: 20,
                                                    },
                                                    tier.title === 'Professional'
                                                        ? { color: 'primary.light' }
                                                        : { color: 'primary.main' },
                                                ] }), _jsx(Typography, { variant: "subtitle2", component: 'span', sx: [
                                                    tier.title === 'Professional'
                                                        ? { color: 'grey.50' }
                                                        : { color: null },
                                                ], children: line })] }, line)))] }), _jsx(CardActions, { children: _jsx(Button, { fullWidth: true, variant: tier.buttonVariant, color: tier.buttonColor, children: tier.buttonText }) })] }) }, tier.title))) })] }));
}
