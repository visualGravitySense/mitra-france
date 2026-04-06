import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import SitemarkIcon from './SitemarkIcon';
function Copyright() {
    return (_jsxs(Typography, { variant: "body2", sx: { color: 'text.secondary', mt: 1 }, children: ['Copyright © ', _jsx(Link, { color: "text.secondary", href: "https://mui.com/", children: "Sitemark" }), "\u00A0", new Date().getFullYear()] }));
}
export default function Footer() {
    return (_jsxs(React.Fragment, { children: [_jsx(Divider, {}), _jsxs(Container, { sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 4, sm: 8 },
                    py: { xs: 8, sm: 10 },
                    textAlign: { sm: 'center', md: 'left' },
                }, children: [_jsxs(Box, { sx: {
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            width: '100%',
                            justifyContent: 'space-between',
                        }, children: [_jsx(Box, { sx: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 4,
                                    minWidth: { xs: '100%', sm: '60%' },
                                }, children: _jsxs(Box, { sx: { width: { xs: '100%', sm: '60%' } }, children: [_jsx(SitemarkIcon, {}), _jsx(Typography, { variant: "body2", gutterBottom: true, sx: { fontWeight: 600, mt: 2 }, children: "Join the newsletter" }), _jsx(Typography, { variant: "body2", sx: { color: 'text.secondary', mb: 2 }, children: "Subscribe for weekly updates. No spams ever!" }), _jsx(InputLabel, { htmlFor: "email-newsletter", children: "Email" }), _jsxs(Stack, { direction: "row", spacing: 1, useFlexGap: true, children: [_jsx(TextField, { id: "email-newsletter", hiddenLabel: true, size: "small", variant: "outlined", fullWidth: true, "aria-label": "Enter your email address", placeholder: "Your email address", slotProps: {
                                                        htmlInput: {
                                                            autoComplete: 'off',
                                                            'aria-label': 'Enter your email address',
                                                        },
                                                    }, sx: { width: '250px' } }), _jsx(Button, { variant: "contained", color: "primary", size: "small", sx: { flexShrink: 0 }, children: "Subscribe" })] })] }) }), _jsxs(Box, { sx: {
                                    display: { xs: 'none', sm: 'flex' },
                                    flexDirection: 'column',
                                    gap: 1,
                                }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 'medium' }, children: "Product" }), _jsx(Link, { color: "text.secondary", variant: "body2", href: "#", children: "Features" }), _jsx(Link, { color: "text.secondary", variant: "body2", href: "#", children: "Testimonials" }), _jsx(Link, { color: "text.secondary", variant: "body2", href: "#", children: "Highlights" }), _jsx(Link, { color: "text.secondary", variant: "body2", href: "#", children: "Pricing" }), _jsx(Link, { color: "text.secondary", variant: "body2", href: "#", children: "FAQs" })] }), _jsxs(Box, { sx: {
                                    display: { xs: 'none', sm: 'flex' },
                                    flexDirection: 'column',
                                    gap: 1,
                                }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 'medium' }, children: "Company" }), _jsx(Link, { color: "text.secondary", variant: "body2", href: "#", children: "About us" }), _jsx(Link, { color: "text.secondary", variant: "body2", href: "#", children: "Careers" }), _jsx(Link, { color: "text.secondary", variant: "body2", href: "#", children: "Press" })] }), _jsxs(Box, { sx: {
                                    display: { xs: 'none', sm: 'flex' },
                                    flexDirection: 'column',
                                    gap: 1,
                                }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 'medium' }, children: "Legal" }), _jsx(Link, { color: "text.secondary", variant: "body2", href: "#", children: "Terms" }), _jsx(Link, { color: "text.secondary", variant: "body2", href: "#", children: "Privacy" }), _jsx(Link, { color: "text.secondary", variant: "body2", href: "#", children: "Contact" })] })] }), _jsxs(Box, { sx: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            pt: { xs: 4, sm: 8 },
                            width: '100%',
                            borderTop: '1px solid',
                            borderColor: 'divider',
                        }, children: [_jsxs("div", { children: [_jsx(Link, { color: "text.secondary", variant: "body2", href: "#", children: "Privacy Policy" }), _jsx(Typography, { sx: { display: 'inline', mx: 0.5, opacity: 0.5 }, children: "\u00A0\u2022\u00A0" }), _jsx(Link, { color: "text.secondary", variant: "body2", href: "#", children: "Terms of Service" }), _jsx(Copyright, {})] }), _jsxs(Stack, { direction: "row", spacing: 1, useFlexGap: true, sx: { justifyContent: 'left', color: 'text.secondary' }, children: [_jsx(IconButton, { color: "inherit", size: "small", href: "https://github.com/mui", "aria-label": "GitHub", sx: { alignSelf: 'center' }, children: _jsx(GitHubIcon, {}) }), _jsx(IconButton, { color: "inherit", size: "small", href: "https://x.com/MaterialUI", "aria-label": "X", sx: { alignSelf: 'center' }, children: _jsx(TwitterIcon, {}) }), _jsx(IconButton, { color: "inherit", size: "small", href: "https://www.linkedin.com/company/mui/", "aria-label": "LinkedIn", sx: { alignSelf: 'center' }, children: _jsx(LinkedInIcon, {}) })] })] })] })] }));
}
