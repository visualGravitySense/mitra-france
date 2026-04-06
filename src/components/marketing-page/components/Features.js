import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
const items = [
    {
        icon: _jsx(ViewQuiltRoundedIcon, {}),
        title: 'Dashboard',
        description: 'This item could provide a snapshot of the most important metrics or data points related to the product.',
        imageLight: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/dash-light.png")`,
        imageDark: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/dash-dark.png")`,
    },
    {
        icon: _jsx(EdgesensorHighRoundedIcon, {}),
        title: 'Mobile integration',
        description: 'This item could provide information about the mobile app version of the product.',
        imageLight: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/mobile-light.png")`,
        imageDark: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/mobile-dark.png")`,
    },
    {
        icon: _jsx(DevicesRoundedIcon, {}),
        title: 'Available on all platforms',
        description: 'This item could let users know the product is available on all platforms, such as web, mobile, and desktop.',
        imageLight: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/devices-light.png")`,
        imageDark: `url("${import.meta.env.VITE_TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/images/templates/templates-images/devices-dark.png")`,
    },
];
const Chip = styled(MuiChip)(({ theme }) => ({
    variants: [
        {
            props: ({ selected }) => selected,
            style: {
                background: 'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
                color: 'hsl(0, 0%, 100%)',
                borderColor: (theme.vars || theme).palette.primary.light,
                '& .MuiChip-label': {
                    color: 'hsl(0, 0%, 100%)',
                },
                ...theme.applyStyles('dark', {
                    borderColor: (theme.vars || theme).palette.primary.dark,
                }),
            },
        },
    ],
}));
export function MobileLayout({ selectedItemIndex, handleItemClick, selectedFeature, }) {
    if (!items[selectedItemIndex]) {
        return null;
    }
    return (_jsxs(Box, { sx: {
            display: { xs: 'flex', sm: 'none' },
            flexDirection: 'column',
            gap: 2,
        }, children: [_jsx(Box, { sx: { display: 'flex', gap: 2, overflow: 'auto' }, children: items.map(({ title }, index) => (_jsx(Chip, { size: "medium", label: title, onClick: () => handleItemClick(index), selected: selectedItemIndex === index }, index))) }), _jsxs(Card, { variant: "outlined", children: [_jsx(Box, { sx: (theme) => ({
                            mb: 2,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minHeight: 280,
                            backgroundImage: 'var(--items-imageLight)',
                            ...theme.applyStyles('dark', {
                                backgroundImage: 'var(--items-imageDark)',
                            }),
                        }), style: items[selectedItemIndex]
                            ? {
                                '--items-imageLight': items[selectedItemIndex].imageLight,
                                '--items-imageDark': items[selectedItemIndex].imageDark,
                            }
                            : {} }), _jsxs(Box, { sx: { px: 2, pb: 2 }, children: [_jsx(Typography, { gutterBottom: true, sx: { color: 'text.primary', fontWeight: 'medium' }, children: selectedFeature.title }), _jsx(Typography, { variant: "body2", sx: { color: 'text.secondary', mb: 1.5 }, children: selectedFeature.description })] })] })] }));
}
export default function Features() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const handleItemClick = (index) => {
        setSelectedItemIndex(index);
    };
    const selectedFeature = items[selectedItemIndex];
    return (_jsxs(Container, { id: "features", sx: { py: { xs: 8, sm: 16 } }, children: [_jsxs(Box, { sx: { width: { sm: '100%', md: '60%' } }, children: [_jsx(Typography, { component: "h2", variant: "h4", gutterBottom: true, sx: { color: 'text.primary' }, children: "Product features" }), _jsx(Typography, { variant: "body1", sx: { color: 'text.secondary', mb: { xs: 2, sm: 4 } }, children: "Provide a brief overview of the key features of the product. For example, you could list the number of features, their types or benefits, and add-ons." })] }), _jsxs(Box, { sx: {
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row-reverse' },
                    gap: 2,
                }, children: [_jsxs("div", { children: [_jsx(Box, { sx: {
                                    display: { xs: 'none', sm: 'flex' },
                                    flexDirection: 'column',
                                    gap: 2,
                                    height: '100%',
                                }, children: items.map(({ icon, title, description }, index) => (_jsx(Box, { component: Button, onClick: () => handleItemClick(index), sx: [
                                        (theme) => ({
                                            p: 2,
                                            height: '100%',
                                            width: '100%',
                                            '&:hover': {
                                                backgroundColor: (theme.vars || theme).palette.action.hover,
                                            },
                                        }),
                                        selectedItemIndex === index && {
                                            backgroundColor: 'action.selected',
                                        },
                                    ], children: _jsxs(Box, { sx: [
                                            {
                                                width: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'left',
                                                gap: 1,
                                                textAlign: 'left',
                                                textTransform: 'none',
                                                color: 'text.secondary',
                                            },
                                            selectedItemIndex === index && {
                                                color: 'text.primary',
                                            },
                                        ], children: [icon, _jsx(Typography, { variant: "h6", children: title }), _jsx(Typography, { variant: "body2", children: description })] }) }, index))) }), _jsx(MobileLayout, { selectedItemIndex: selectedItemIndex, handleItemClick: handleItemClick, selectedFeature: selectedFeature })] }), _jsx(Box, { sx: {
                            display: { xs: 'none', sm: 'flex' },
                            width: { xs: '100%', md: '70%' },
                            height: 'var(--items-image-height)',
                        }, children: _jsx(Card, { variant: "outlined", sx: {
                                height: '100%',
                                width: '100%',
                                display: { xs: 'none', sm: 'flex' },
                                pointerEvents: 'none',
                            }, children: _jsx(Box, { sx: (theme) => ({
                                    m: 'auto',
                                    width: 420,
                                    height: 500,
                                    backgroundSize: 'contain',
                                    backgroundImage: 'var(--items-imageLight)',
                                    ...theme.applyStyles('dark', {
                                        backgroundImage: 'var(--items-imageDark)',
                                    }),
                                }), style: items[selectedItemIndex]
                                    ? {
                                        '--items-imageLight': items[selectedItemIndex].imageLight,
                                        '--items-imageDark': items[selectedItemIndex].imageDark,
                                    }
                                    : {} }) }) })] })] }));
}
