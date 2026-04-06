import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled, alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ColorModeIconDropdown from './shared-theme/ColorModeIconDropdown.tsx';
import { getImagePath } from '../utils/imagePath';
const StyledToolbar = styled(Toolbar)(({ theme }) => {
    const themeWithVars = theme;
    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
        borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
        backdropFilter: 'blur(24px)',
        border: '1px solid',
        borderColor: (themeWithVars.vars || theme).palette.divider,
        backgroundColor: themeWithVars.vars
            ? `rgba(${themeWithVars.vars.palette.background.defaultChannel} / 0.4)`
            : alpha(theme.palette.background.default, 0.4),
        boxShadow: (themeWithVars.vars || theme).shadows[1],
        padding: '8px 12px',
    };
});
const StyledButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: 500,
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
    },
}));
const DropdownButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: 500,
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
    },
}));
const StyledMenu = styled(Menu)(({ theme }) => {
    const themeWithVars = theme;
    return {
        '& .MuiPaper-root': {
            borderRadius: theme.shape.borderRadius * 2,
            marginTop: theme.spacing(1),
            minWidth: 200,
            boxShadow: theme.shadows[8],
            border: '1px solid',
            borderColor: (themeWithVars.vars || theme).palette.divider,
            backdropFilter: 'blur(24px)',
            backgroundColor: themeWithVars.vars
                ? `rgba(${themeWithVars.vars.palette.background.paperChannel} / 0.95)`
                : alpha(theme.palette.background.paper, 0.95),
        },
        '& .MuiMenuItem-root': {
            padding: theme.spacing(1, 2),
            borderRadius: theme.shape.borderRadius,
            margin: theme.spacing(0.5, 1),
            '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.08),
            },
            '&.Mui-selected': {
                backgroundColor: alpha(theme.palette.primary.main, 0.12),
                '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.16),
                },
            },
        },
    };
});
export default function Navigation() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [anchorEls, setAnchorEls] = React.useState({});
    const location = useLocation();
    // Select logo based on theme mode
    // Dark mode uses light logo (light logo on dark background)
    // Light mode uses dark logo (dark logo on light background)
    const logoPath = theme.palette.mode === 'dark'
        ? getImagePath('/mit-fr-light-1.svg')
        : getImagePath('/mit-fr-dark-1.svg');
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const handleMenuOpen = (groupLabel) => (event) => {
        setAnchorEls((prev) => ({ ...prev, [groupLabel]: event.currentTarget }));
    };
    const handleMenuClose = (groupLabel) => () => {
        setAnchorEls((prev) => ({ ...prev, [groupLabel]: null }));
    };
    const navGroups = [
        {
            label: 'About Us',
            items: [
                { label: 'About Us', path: '/about' },
                { label: 'Team', path: '/team' },
                { label: 'Partners', path: '/partners' },
            ],
        },
        {
            label: 'Education',
            items: [
                { label: 'Focus Areas', path: '/focus-areas' },
                { label: 'Courses', path: '/courses' },
                { label: 'Programs & Workshops', path: '/programs-workshops' },
            ],
        },
        {
            label: 'Activities',
            items: [
                { label: 'Projects', path: '/projects' },
                { label: 'Events', path: '/events' },
                { label: 'Gallery', path: '/gallery' },
            ],
        },
        {
            label: 'Contact',
            path: '/contact',
        },
    ];
    const allNavItems = [
        { label: 'Home', path: '/' },
        ...navGroups.flatMap((group) => (group.items || [{ label: group.label, path: group.path }])),
    ];
    const isActiveGroup = (group) => {
        if (group.path) {
            return location.pathname === group.path;
        }
        return group.items?.some((item) => location.pathname === item.path) || false;
    };
    return (_jsx(AppBar, { position: "fixed", enableColorOnDark: true, sx: {
            boxShadow: 0,
            bgcolor: 'transparent',
            backgroundImage: 'none',
            mt: 'calc(var(--template-frame-height, 0px) + 28px)',
        }, children: _jsx(Container, { maxWidth: "lg", children: _jsxs(StyledToolbar, { variant: "dense", disableGutters: true, children: [_jsxs(Box, { sx: { flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }, children: [_jsx(Link, { to: "/", style: { textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }, children: _jsx(Box, { component: "img", src: logoPath, alt: "MITRA FRANCE", sx: {
                                        height: { xs: 18, md: 23 },
                                        width: 'auto',
                                        mr: 3,
                                        transition: 'opacity 0.3s ease',
                                        '&:hover': {
                                            opacity: 0.8,
                                        },
                                    } }) }), _jsx(Box, { sx: { display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }, children: navGroups.map((group) => {
                                    if (group.items) {
                                        const open = Boolean(anchorEls[group.label]);
                                        const isActive = isActiveGroup(group);
                                        return (_jsxs(React.Fragment, { children: [_jsx(DropdownButton, { onClick: handleMenuOpen(group.label), variant: isActive ? 'outlined' : 'text', color: "info", size: "small", endIcon: _jsx(ExpandMoreIcon, { sx: { fontSize: 18, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' } }), sx: {
                                                        ...(isActive && {
                                                            borderColor: 'primary.main',
                                                            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.08),
                                                        }),
                                                    }, children: group.label }), _jsx(StyledMenu, { anchorEl: anchorEls[group.label], open: open, onClose: handleMenuClose(group.label), anchorOrigin: {
                                                        vertical: 'bottom',
                                                        horizontal: 'left',
                                                    }, transformOrigin: {
                                                        vertical: 'top',
                                                        horizontal: 'left',
                                                    }, children: group.items.map((item) => (_jsx(MenuItem, { component: Link, to: item.path, onClick: handleMenuClose(group.label), selected: location.pathname === item.path, children: item.label }, item.path))) })] }, group.label));
                                    }
                                    else {
                                        const isActive = location.pathname === group.path;
                                        return (_jsx(StyledButton, { component: Link, to: group.path, variant: isActive ? 'outlined' : 'text', color: "info", size: "small", sx: {
                                                ...(isActive && {
                                                    borderColor: 'primary.main',
                                                    backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.08),
                                                }),
                                            }, children: group.label }, group.label));
                                    }
                                }) })] }), _jsx(Box, { sx: {
                            display: { xs: 'none', md: 'flex' },
                            gap: 1,
                            alignItems: 'center',
                        }, children: _jsx(ColorModeIconDropdown, {}) }), _jsxs(Box, { sx: { display: { xs: 'flex', md: 'none' }, gap: 1 }, children: [_jsx(ColorModeIconDropdown, { size: "medium" }), _jsx(IconButton, { "aria-label": "Menu button", onClick: toggleDrawer(true), children: _jsx(MenuIcon, {}) }), _jsx(Drawer, { anchor: "top", open: open, onClose: toggleDrawer(false), PaperProps: {
                                    sx: {
                                        top: 'var(--template-frame-height, 0px)',
                                    },
                                }, children: _jsxs(Box, { sx: { p: 2, backgroundColor: 'background.default' }, children: [_jsxs(Box, { sx: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                mb: 2,
                                            }, children: [_jsx(Box, { component: "img", src: getImagePath("/mitra-fr-logo-menu-1.svg"), alt: "MITRA FRANCE", sx: {
                                                        height: 18,
                                                        width: 'auto',
                                                    } }), _jsx(IconButton, { onClick: toggleDrawer(false), children: _jsx(CloseRoundedIcon, {}) })] }), allNavItems.map((item) => (_jsx(MenuItem, { component: Link, to: item.path, onClick: toggleDrawer(false), selected: location.pathname === item.path, sx: {
                                                borderRadius: 1,
                                                mb: 0.5,
                                                '&.Mui-selected': {
                                                    backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.12),
                                                },
                                            }, children: item.label }, item.path)))] }) })] })] }) }) }));
}
