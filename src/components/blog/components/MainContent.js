import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
const cardData = [
    {
        img: 'https://picsum.photos/800/450?random=1',
        tag: 'Engineering',
        title: 'Revolutionizing software development with cutting-edge tools',
        description: 'Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
        authors: [
            { name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
            { name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
        ],
    },
    {
        img: 'https://picsum.photos/800/450?random=2',
        tag: 'Product',
        title: 'Innovative product features that drive success',
        description: 'Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.',
        authors: [{ name: 'Erica Johns', avatar: '/static/images/avatar/6.jpg' }],
    },
    {
        img: 'https://picsum.photos/800/450?random=3',
        tag: 'Design',
        title: 'Designing for the future: trends and insights',
        description: 'Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.',
        authors: [{ name: 'Kate Morrison', avatar: '/static/images/avatar/7.jpg' }],
    },
    {
        img: 'https://picsum.photos/800/450?random=4',
        tag: 'Company',
        title: "Our company's journey: milestones and achievements",
        description: "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.",
        authors: [{ name: 'Cindy Baker', avatar: '/static/images/avatar/3.jpg' }],
    },
    {
        img: 'https://picsum.photos/800/450?random=45',
        tag: 'Engineering',
        title: 'Pioneering sustainable engineering solutions',
        description: "Learn about our commitment to sustainability and the innovative engineering solutions we're implementing to create a greener future. Discover the impact of our eco-friendly initiatives.",
        authors: [
            { name: 'Agnes Walker', avatar: '/static/images/avatar/4.jpg' },
            { name: 'Trevor Henderson', avatar: '/static/images/avatar/5.jpg' },
        ],
    },
    {
        img: 'https://picsum.photos/800/450?random=6',
        tag: 'Product',
        title: 'Maximizing efficiency with our latest product updates',
        description: 'Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.',
        authors: [{ name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' }],
    },
];
const SyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    backgroundColor: (theme.vars || theme).palette.background.paper,
    '&:hover': {
        backgroundColor: 'transparent',
        cursor: 'pointer',
    },
    '&:focus-visible': {
        outline: '3px solid',
        outlineColor: 'hsla(210, 98%, 48%, 0.5)',
        outlineOffset: '2px',
    },
}));
const SyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    '&:last-child': {
        paddingBottom: 16,
    },
});
const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});
function Author({ authors }) {
    return (_jsxs(Box, { sx: {
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px',
        }, children: [_jsxs(Box, { sx: { display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }, children: [_jsx(AvatarGroup, { max: 3, children: authors.map((author, index) => (_jsx(Avatar, { alt: author.name, src: author.avatar, sx: { width: 24, height: 24 } }, index))) }), _jsx(Typography, { variant: "caption", children: authors.map((author) => author.name).join(', ') })] }), _jsx(Typography, { variant: "caption", children: "July 14, 2021" })] }));
}
export function Search() {
    return (_jsx(FormControl, { sx: { width: { xs: '100%', md: '25ch' } }, variant: "outlined", children: _jsx(OutlinedInput, { size: "small", id: "search", placeholder: "Search\u2026", sx: { flexGrow: 1 }, startAdornment: _jsx(InputAdornment, { position: "start", sx: { color: 'text.primary' }, children: _jsx(SearchRoundedIcon, { fontSize: "small" }) }), inputProps: {
                'aria-label': 'search',
            } }) }));
}
export default function MainContent() {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);
    const handleFocus = (index) => {
        setFocusedCardIndex(index);
    };
    const handleBlur = () => {
        setFocusedCardIndex(null);
    };
    const handleClick = () => {
        console.info('You clicked the filter chip.');
    };
    return (_jsxs(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 4 }, children: [_jsxs("div", { children: [_jsx(Typography, { variant: "h1", gutterBottom: true, children: "Blog" }), _jsx(Typography, { children: "Stay in the loop with the latest about our products" })] }), _jsxs(Box, { sx: {
                    display: { xs: 'flex', sm: 'none' },
                    flexDirection: 'row',
                    gap: 1,
                    width: { xs: '100%', md: 'fit-content' },
                    overflow: 'auto',
                }, children: [_jsx(Search, {}), _jsx(IconButton, { size: "small", "aria-label": "RSS feed", children: _jsx(RssFeedRoundedIcon, {}) })] }), _jsxs(Box, { sx: {
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: { xs: 'start', md: 'center' },
                    gap: 4,
                    overflow: 'auto',
                }, children: [_jsxs(Box, { sx: {
                            display: 'inline-flex',
                            flexDirection: 'row',
                            gap: 3,
                            overflow: 'auto',
                        }, children: [_jsx(Chip, { onClick: handleClick, size: "medium", label: "All categories" }), _jsx(Chip, { onClick: handleClick, size: "medium", label: "Company", sx: {
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                } }), _jsx(Chip, { onClick: handleClick, size: "medium", label: "Product", sx: {
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                } }), _jsx(Chip, { onClick: handleClick, size: "medium", label: "Design", sx: {
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                } }), _jsx(Chip, { onClick: handleClick, size: "medium", label: "Engineering", sx: {
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                } })] }), _jsxs(Box, { sx: {
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'row',
                            gap: 1,
                            width: { xs: '100%', md: 'fit-content' },
                            overflow: 'auto',
                        }, children: [_jsx(Search, {}), _jsx(IconButton, { size: "small", "aria-label": "RSS feed", children: _jsx(RssFeedRoundedIcon, {}) })] })] }), _jsxs(Grid, { container: true, spacing: 2, columns: 12, children: [_jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(SyledCard, { variant: "outlined", onFocus: () => handleFocus(0), onBlur: handleBlur, tabIndex: 0, className: focusedCardIndex === 0 ? 'Mui-focused' : '', children: [_jsx(CardMedia, { component: "img", alt: "green iguana", image: cardData[0].img, sx: {
                                        aspectRatio: '16 / 9',
                                        borderBottom: '1px solid',
                                        borderColor: 'divider',
                                    } }), _jsxs(SyledCardContent, { children: [_jsx(Typography, { gutterBottom: true, variant: "caption", component: "div", children: cardData[0].tag }), _jsx(Typography, { gutterBottom: true, variant: "h6", component: "div", children: cardData[0].title }), _jsx(StyledTypography, { variant: "body2", color: "text.secondary", gutterBottom: true, children: cardData[0].description })] }), _jsx(Author, { authors: cardData[0].authors })] }) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsxs(SyledCard, { variant: "outlined", onFocus: () => handleFocus(1), onBlur: handleBlur, tabIndex: 0, className: focusedCardIndex === 1 ? 'Mui-focused' : '', children: [_jsx(CardMedia, { component: "img", alt: "green iguana", image: cardData[1].img, "aspect-ratio": "16 / 9", sx: {
                                        borderBottom: '1px solid',
                                        borderColor: 'divider',
                                    } }), _jsxs(SyledCardContent, { children: [_jsx(Typography, { gutterBottom: true, variant: "caption", component: "div", children: cardData[1].tag }), _jsx(Typography, { gutterBottom: true, variant: "h6", component: "div", children: cardData[1].title }), _jsx(StyledTypography, { variant: "body2", color: "text.secondary", gutterBottom: true, children: cardData[1].description })] }), _jsx(Author, { authors: cardData[1].authors })] }) }), _jsx(Grid, { size: { xs: 12, md: 4 }, children: _jsxs(SyledCard, { variant: "outlined", onFocus: () => handleFocus(2), onBlur: handleBlur, tabIndex: 0, className: focusedCardIndex === 2 ? 'Mui-focused' : '', sx: { height: '100%' }, children: [_jsx(CardMedia, { component: "img", alt: "green iguana", image: cardData[2].img, sx: {
                                        height: { sm: 'auto', md: '50%' },
                                        aspectRatio: { sm: '16 / 9', md: '' },
                                    } }), _jsxs(SyledCardContent, { children: [_jsx(Typography, { gutterBottom: true, variant: "caption", component: "div", children: cardData[2].tag }), _jsx(Typography, { gutterBottom: true, variant: "h6", component: "div", children: cardData[2].title }), _jsx(StyledTypography, { variant: "body2", color: "text.secondary", gutterBottom: true, children: cardData[2].description })] }), _jsx(Author, { authors: cardData[2].authors })] }) }), _jsx(Grid, { size: { xs: 12, md: 4 }, children: _jsxs(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }, children: [_jsxs(SyledCard, { variant: "outlined", onFocus: () => handleFocus(3), onBlur: handleBlur, tabIndex: 0, className: focusedCardIndex === 3 ? 'Mui-focused' : '', sx: { height: '100%' }, children: [_jsx(SyledCardContent, { sx: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                                height: '100%',
                                            }, children: _jsxs("div", { children: [_jsx(Typography, { gutterBottom: true, variant: "caption", component: "div", children: cardData[3].tag }), _jsx(Typography, { gutterBottom: true, variant: "h6", component: "div", children: cardData[3].title }), _jsx(StyledTypography, { variant: "body2", color: "text.secondary", gutterBottom: true, children: cardData[3].description })] }) }), _jsx(Author, { authors: cardData[3].authors })] }), _jsxs(SyledCard, { variant: "outlined", onFocus: () => handleFocus(4), onBlur: handleBlur, tabIndex: 0, className: focusedCardIndex === 4 ? 'Mui-focused' : '', sx: { height: '100%' }, children: [_jsx(SyledCardContent, { sx: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                                height: '100%',
                                            }, children: _jsxs("div", { children: [_jsx(Typography, { gutterBottom: true, variant: "caption", component: "div", children: cardData[4].tag }), _jsx(Typography, { gutterBottom: true, variant: "h6", component: "div", children: cardData[4].title }), _jsx(StyledTypography, { variant: "body2", color: "text.secondary", gutterBottom: true, children: cardData[4].description })] }) }), _jsx(Author, { authors: cardData[4].authors })] })] }) }), _jsx(Grid, { size: { xs: 12, md: 4 }, children: _jsxs(SyledCard, { variant: "outlined", onFocus: () => handleFocus(5), onBlur: handleBlur, tabIndex: 0, className: focusedCardIndex === 5 ? 'Mui-focused' : '', sx: { height: '100%' }, children: [_jsx(CardMedia, { component: "img", alt: "green iguana", image: cardData[5].img, sx: {
                                        height: { sm: 'auto', md: '50%' },
                                        aspectRatio: { sm: '16 / 9', md: '' },
                                    } }), _jsxs(SyledCardContent, { children: [_jsx(Typography, { gutterBottom: true, variant: "caption", component: "div", children: cardData[5].tag }), _jsx(Typography, { gutterBottom: true, variant: "h6", component: "div", children: cardData[5].title }), _jsx(StyledTypography, { variant: "body2", color: "text.secondary", gutterBottom: true, children: cardData[5].description })] }), _jsx(Author, { authors: cardData[5].authors })] }) })] })] }));
}
