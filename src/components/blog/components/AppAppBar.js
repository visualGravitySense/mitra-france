import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
import Sitemark from './SitemarkIcon';
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: (theme.vars || theme).palette.divider,
    backgroundColor: theme.vars
        ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
        : alpha(theme.palette.background.default, 0.4),
    boxShadow: (theme.vars || theme).shadows[1],
    padding: '8px 12px',
}));
export default function AppAppBar() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    return (_jsx(AppBar, { position: "fixed", enableColorOnDark: true, sx: {
            boxShadow: 0,
            bgcolor: 'transparent',
            backgroundImage: 'none',
            mt: 'calc(var(--template-frame-height, 0px) + 28px)',
        }, children: _jsx(Container, { maxWidth: "lg", children: _jsxs(StyledToolbar, { variant: "dense", disableGutters: true, children: [_jsxs(Box, { sx: { flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }, children: [_jsx(Sitemark, {}), _jsxs(Box, { sx: { display: { xs: 'none', md: 'flex' } }, children: [_jsx(Button, { variant: "text", color: "info", size: "small", children: "Features" }), _jsx(Button, { variant: "text", color: "info", size: "small", children: "Testimonials" }), _jsx(Button, { variant: "text", color: "info", size: "small", children: "Highlights" }), _jsx(Button, { variant: "text", color: "info", size: "small", children: "Pricing" }), _jsx(Button, { variant: "text", color: "info", size: "small", sx: { minWidth: 0 }, children: "FAQ" }), _jsx(Button, { variant: "text", color: "info", size: "small", sx: { minWidth: 0 }, children: "Blog" })] })] }), _jsxs(Box, { sx: {
                            display: { xs: 'none', md: 'flex' },
                            gap: 1,
                            alignItems: 'center',
                        }, children: [_jsx(Button, { color: "primary", variant: "text", size: "small", children: "Sign in" }), _jsx(Button, { color: "primary", variant: "contained", size: "small", children: "Sign up" }), _jsx(ColorModeIconDropdown, {})] }), _jsxs(Box, { sx: { display: { xs: 'flex', md: 'none' }, gap: 1 }, children: [_jsx(ColorModeIconDropdown, { size: "medium" }), _jsx(IconButton, { "aria-label": "Menu button", onClick: toggleDrawer(true), children: _jsx(MenuIcon, {}) }), _jsx(Drawer, { anchor: "top", open: open, onClose: toggleDrawer(false), PaperProps: {
                                    sx: {
                                        top: 'var(--template-frame-height, 0px)',
                                    },
                                }, children: _jsxs(Box, { sx: { p: 2, backgroundColor: 'background.default' }, children: [_jsx(Box, { sx: {
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                            }, children: _jsx(IconButton, { onClick: toggleDrawer(false), children: _jsx(CloseRoundedIcon, {}) }) }), _jsx(MenuItem, { children: "Features" }), _jsx(MenuItem, { children: "Testimonials" }), _jsx(MenuItem, { children: "Highlights" }), _jsx(MenuItem, { children: "Pricing" }), _jsx(MenuItem, { children: "FAQ" }), _jsx(MenuItem, { children: "Blog" }), _jsx(Divider, { sx: { my: 3 } }), _jsx(MenuItem, { children: _jsx(Button, { color: "primary", variant: "contained", fullWidth: true, children: "Sign up" }) }), _jsx(MenuItem, { children: _jsx(Button, { color: "primary", variant: "outlined", fullWidth: true, children: "Sign in" }) })] }) })] })] }) }) }));
}
