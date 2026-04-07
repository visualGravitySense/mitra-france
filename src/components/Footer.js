import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { useTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RadioIcon from '@mui/icons-material/Radio';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link as RouterLink } from 'react-router-dom';
import { getImagePath } from '../utils/imagePath';
import { getMitraLogoSrc, mitraLogoThemeFilter } from '../utils/mitraLogo';
function Copyright() {
    return (_jsxs(Typography, { variant: "body2", sx: { color: 'text.secondary', mt: 1 }, children: ['Copyright © ', _jsx(Link, { component: RouterLink, to: "/", color: "text.secondary", children: "MITRA FRANCE" }), ' ', new Date().getFullYear()] }));
}
export default function Footer() {
    const theme = useTheme();
    const logoSrc = getMitraLogoSrc();
    return (_jsx(Box, { component: "footer", sx: {
            position: 'relative',
            overflow: 'hidden',
            pt: { xs: 8, sm: 10 },
            pb: { xs: 5, sm: 6 },
            background: 'radial-gradient(circle at 15% 20%, rgba(0, 35, 149, 0.06) 0%, transparent 55%), radial-gradient(circle at 85% 20%, rgba(237, 41, 57, 0.05) 0%, transparent 55%), linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250, 248, 255, 0.95) 100%)',
            borderTop: '1px solid',
            borderColor: 'divider',
            '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${getImagePath('/photos/571419367_1143811194593552_6930038688628840775_n.jpg')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.06,
                filter: 'saturate(1.05) brightness(1.1)',
                pointerEvents: 'none',
            },
        }, children: _jsxs(Container, { sx: {
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 4, sm: 7 },
                textAlign: { xs: 'left', md: 'left' },
            }, children: [_jsxs(Grid, { container: true, spacing: { xs: 4, sm: 3, md: 4 }, sx: { width: '100%' }, children: [_jsx(Grid, { size: { xs: 12, md: 5, lg: 5 }, children: _jsxs(Box, { sx: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2.5,
                                    height: '100%',
                                    pr: { md: 1 },
                                }, children: [_jsxs(Box, { sx: { width: '100%', maxWidth: '100%' }, children: [_jsx(Box, { component: "img", src: logoSrc, alt: "MITRA FRANCE", sx: {
                                                    display: 'block',
                                                    height: { xs: 28, sm: 34 },
                                                    width: 'auto',
                                                    maxWidth: { xs: 'min(300px, 100%)', sm: 320 },
                                                    mb: 1.5,
                                                    objectFit: 'contain',
                                                    objectPosition: 'left center',
                                                    ...mitraLogoThemeFilter(theme),
                                                } }), _jsx(Typography, { variant: "body1", sx: { color: 'text.primary', mb: 1.5, fontWeight: 600, lineHeight: 1.7 }, children: "Empowering Communities Through Education, Media & Culture" }), _jsx(Typography, { variant: "body2", sx: { color: 'text.secondary', lineHeight: 1.8 }, children: "Real people. Real projects. Real impact \u2014 across France and Europe." })] }), _jsxs(Stack, { direction: "row", spacing: 1, useFlexGap: true, sx: { flexWrap: 'wrap' }, children: [_jsx(Chip, { size: "small", icon: _jsx(LocationOnIcon, {}), label: "Nice, France", sx: {
                                                    fontWeight: 700,
                                                    borderRadius: 999,
                                                    backgroundColor: 'rgba(0, 35, 149, 0.06)',
                                                    color: 'primary.main',
                                                    '& .MuiChip-icon': { color: 'primary.main' },
                                                } }), _jsx(Chip, { size: "small", label: "Erasmus+ projects", sx: {
                                                    fontWeight: 700,
                                                    borderRadius: 999,
                                                    backgroundColor: 'rgba(237, 41, 57, 0.06)',
                                                    color: 'error.main',
                                                } }), _jsx(Chip, { size: "small", label: "Community-led", sx: {
                                                    fontWeight: 700,
                                                    borderRadius: 999,
                                                    backgroundColor: 'rgba(46, 125, 50, 0.06)',
                                                    color: 'success.main',
                                                } })] }), _jsxs(Box, { sx: {
                                            p: 2,
                                            borderRadius: 3,
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                            backdropFilter: 'blur(10px)',
                                            maxWidth: '100%',
                                        }, children: [_jsx(Typography, { variant: "caption", sx: { fontWeight: 700, color: 'text.secondary', display: 'block', mb: 1 }, children: "People & moments from our community" }), _jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, useFlexGap: true, sx: { flexWrap: 'wrap' }, children: [_jsxs(AvatarGroup, { max: 6, sx: {
                                                            '& .MuiAvatar-root': {
                                                                border: '3px solid white',
                                                                boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
                                                            },
                                                        }, children: [_jsx(Avatar, { src: getImagePath("/photos/571419367_1143811194593552_6930038688628840775_n.jpg"), alt: "Community" }), _jsx(Avatar, { src: getImagePath("/photos/572890197_1142845724690099_2859850866106109617_n.jpg"), alt: "Workshop" }), _jsx(Avatar, { src: getImagePath("/photos/583924019_1157903166517688_8756873269993443102_n.jpg"), alt: "Event" }), _jsx(Avatar, { src: getImagePath("/photos/584326681_1157904053184266_2071216266526493174_n.jpg"), alt: "Project" })] }), _jsx(Typography, { variant: "body2", sx: { color: 'text.secondary', lineHeight: 1.6 }, children: "Join events, workshops, and exchange programs \u2014 and meet people like you." })] })] })] }) }), _jsx(Grid, { size: { xs: 12, sm: 7, md: 7, lg: 7 }, sx: { display: { xs: 'none', sm: 'block' } }, children: _jsx(Grid, { container: true, spacing: 2, columns: 12, children: [
                                    {
                                        title: 'Pages',
                                        links: [
                                            { to: '/about', label: 'About Us' },
                                            { to: '/focus-areas', label: 'Focus Areas' },
                                            { to: '/intercultural-education', label: 'Intercultural Education' },
                                            { to: '/programs-workshops', label: 'Programs & workshops' },
                                            { to: '/projects', label: 'Projects & Experience' },
                                        ],
                                    },
                                    {
                                        title: 'Resources',
                                        links: [
                                            { to: '/partners', label: 'Partners' },
                                            { to: '/events', label: 'Events' },
                                            { to: '/gallery', label: 'Gallery' },
                                            { to: '/contact', label: 'Contact' },
                                        ],
                                    },
                                    {
                                        title: 'Contact',
                                        links: [
                                            { href: 'mailto:mitra.france@gmail.com', label: 'Email' },
                                            { href: 'tel:+33641092395', label: 'Phone' },
                                        ],
                                        extra: (_jsx(Typography, { variant: "body2", color: "text.secondary", sx: { wordBreak: 'break-word' }, children: "Nice, France" })),
                                    },
                                ].map((col) => (_jsx(Grid, { size: { xs: 12, sm: 4, md: 4 }, children: _jsxs(Box, { sx: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 1,
                                            minWidth: 0,
                                        }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 800, mb: 0.5 }, children: col.title }), col.links.map((l) => 'to' in l ? (_jsx(Link, { component: RouterLink, to: l.to, color: "text.secondary", variant: "body2", sx: {
                                                    textDecoration: 'none',
                                                    width: 'fit-content',
                                                    maxWidth: '100%',
                                                    transition: 'all 0.25s ease',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                        transform: 'translateX(2px)',
                                                    },
                                                }, children: l.label }, l.label)) : (_jsx(Link, { href: l.href, color: "text.secondary", variant: "body2", sx: {
                                                    textDecoration: 'none',
                                                    width: 'fit-content',
                                                    maxWidth: '100%',
                                                    transition: 'all 0.25s ease',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                        transform: 'translateX(2px)',
                                                    },
                                                }, children: l.label }, l.label))), col.extra ?? null] }) }, col.title))) }) })] }), _jsxs(Box, { sx: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        pt: { xs: 4, sm: 6 },
                        width: '100%',
                        borderTop: '1px solid',
                        borderColor: 'divider',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'center', sm: 'flex-start' },
                        gap: 2,
                    }, children: [_jsx("div", { children: _jsx(Copyright, {}) }), _jsx(Stack, { direction: "row", spacing: 1, useFlexGap: true, sx: { justifyContent: 'center', color: 'text.secondary' }, children: [
                                { href: 'https://www.facebook.com', label: 'Facebook', icon: _jsx(FacebookIcon, {}) },
                                { href: 'https://www.youtube.com', label: 'YouTube', icon: _jsx(YouTubeIcon, {}) },
                                { href: 'https://el-radio.fr', label: 'Web Radio', icon: _jsx(RadioIcon, {}) },
                            ].map((s) => (_jsx(IconButton, { color: "inherit", size: "small", href: s.href, target: "_blank", rel: "noopener noreferrer", "aria-label": s.label, sx: {
                                    alignSelf: 'center',
                                    transition: 'all 0.25s ease',
                                    '&:hover': {
                                        color: 'primary.main',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 8px 18px rgba(0, 35, 149, 0.18)',
                                        backgroundColor: 'rgba(0, 35, 149, 0.06)',
                                    },
                                }, children: s.icon }, s.label))) })] })] }) }));
}
