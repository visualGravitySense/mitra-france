import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AddressForm from './components/AddressForm';
import Info from './components/Info';
import InfoMobile from './components/InfoMobile';
import PaymentForm from './components/PaymentForm';
import Review from './components/Review';
import SitemarkIcon from './components/SitemarkIcon';
import AppTheme from '../shared-theme/AppTheme';
import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropdown';
const steps = ['Shipping address', 'Payment details', 'Review your order'];
function getStepContent(step) {
    switch (step) {
        case 0:
            return _jsx(AddressForm, {});
        case 1:
            return _jsx(PaymentForm, {});
        case 2:
            return _jsx(Review, {});
        default:
            throw new Error('Unknown step');
    }
}
export default function Checkout(props) {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    return (_jsxs(AppTheme, { ...props, children: [_jsx(CssBaseline, { enableColorScheme: true }), _jsx(Box, { sx: { position: 'fixed', top: '1rem', right: '1rem' }, children: _jsx(ColorModeIconDropdown, {}) }), _jsxs(Grid, { container: true, sx: {
                    height: {
                        xs: '100%',
                        sm: 'calc(100dvh - var(--template-frame-height, 0px))',
                    },
                    mt: {
                        xs: 4,
                        sm: 0,
                    },
                }, children: [_jsxs(Grid, { size: { xs: 12, sm: 5, lg: 4 }, sx: {
                            display: { xs: 'none', md: 'flex' },
                            flexDirection: 'column',
                            backgroundColor: 'background.paper',
                            borderRight: { sm: 'none', md: '1px solid' },
                            borderColor: { sm: 'none', md: 'divider' },
                            alignItems: 'start',
                            pt: 16,
                            px: 10,
                            gap: 4,
                        }, children: [_jsx(SitemarkIcon, {}), _jsx(Box, { sx: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flexGrow: 1,
                                    width: '100%',
                                    maxWidth: 500,
                                }, children: _jsx(Info, { totalPrice: activeStep >= 2 ? '$144.97' : '$134.98' }) })] }), _jsxs(Grid, { size: { sm: 12, md: 7, lg: 8 }, sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: '100%',
                            width: '100%',
                            backgroundColor: { xs: 'transparent', sm: 'background.default' },
                            alignItems: 'start',
                            pt: { xs: 0, sm: 16 },
                            px: { xs: 2, sm: 10 },
                            gap: { xs: 4, md: 8 },
                        }, children: [_jsx(Box, { sx: {
                                    display: 'flex',
                                    justifyContent: { sm: 'space-between', md: 'flex-end' },
                                    alignItems: 'center',
                                    width: '100%',
                                    maxWidth: { sm: '100%', md: 600 },
                                }, children: _jsx(Box, { sx: {
                                        display: { xs: 'none', md: 'flex' },
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-end',
                                        flexGrow: 1,
                                    }, children: _jsx(Stepper, { id: "desktop-stepper", activeStep: activeStep, sx: { width: '100%', height: 40 }, children: steps.map((label) => (_jsx(Step, { sx: { ':first-child': { pl: 0 }, ':last-child': { pr: 0 } }, children: _jsx(StepLabel, { children: label }) }, label))) }) }) }), _jsx(Card, { sx: { display: { xs: 'flex', md: 'none' }, width: '100%' }, children: _jsxs(CardContent, { sx: {
                                        display: 'flex',
                                        width: '100%',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }, children: [_jsxs("div", { children: [_jsx(Typography, { variant: "subtitle2", gutterBottom: true, children: "Selected products" }), _jsx(Typography, { variant: "body1", children: activeStep >= 2 ? '$144.97' : '$134.98' })] }), _jsx(InfoMobile, { totalPrice: activeStep >= 2 ? '$144.97' : '$134.98' })] }) }), _jsxs(Box, { sx: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flexGrow: 1,
                                    width: '100%',
                                    maxWidth: { sm: '100%', md: 600 },
                                    maxHeight: '720px',
                                    gap: { xs: 5, md: 'none' },
                                }, children: [_jsx(Stepper, { id: "mobile-stepper", activeStep: activeStep, alternativeLabel: true, sx: { display: { sm: 'flex', md: 'none' } }, children: steps.map((label) => (_jsx(Step, { sx: {
                                                ':first-child': { pl: 0 },
                                                ':last-child': { pr: 0 },
                                                '& .MuiStepConnector-root': { top: { xs: 6, sm: 12 } },
                                            }, children: _jsx(StepLabel, { sx: { '.MuiStepLabel-labelContainer': { maxWidth: '70px' } }, children: label }) }, label))) }), activeStep === steps.length ? (_jsxs(Stack, { spacing: 2, useFlexGap: true, children: [_jsx(Typography, { variant: "h1", children: "\uD83D\uDCE6" }), _jsx(Typography, { variant: "h5", children: "Thank you for your order!" }), _jsxs(Typography, { variant: "body1", sx: { color: 'text.secondary' }, children: ["Your order number is", _jsx("strong", { children: "\u00A0#140396" }), ". We have emailed your order confirmation and will update you once its shipped."] }), _jsx(Button, { variant: "contained", sx: { alignSelf: 'start', width: { xs: '100%', sm: 'auto' } }, children: "Go to my orders" })] })) : (_jsxs(React.Fragment, { children: [getStepContent(activeStep), _jsxs(Box, { sx: [
                                                    {
                                                        display: 'flex',
                                                        flexDirection: { xs: 'column-reverse', sm: 'row' },
                                                        alignItems: 'end',
                                                        flexGrow: 1,
                                                        gap: 1,
                                                        pb: { xs: 12, sm: 0 },
                                                        mt: { xs: 2, sm: 0 },
                                                        mb: '60px',
                                                    },
                                                    activeStep !== 0
                                                        ? { justifyContent: 'space-between' }
                                                        : { justifyContent: 'flex-end' },
                                                ], children: [activeStep !== 0 && (_jsx(Button, { startIcon: _jsx(ChevronLeftRoundedIcon, {}), onClick: handleBack, variant: "text", sx: { display: { xs: 'none', sm: 'flex' } }, children: "Previous" })), activeStep !== 0 && (_jsx(Button, { startIcon: _jsx(ChevronLeftRoundedIcon, {}), onClick: handleBack, variant: "outlined", fullWidth: true, sx: { display: { xs: 'flex', sm: 'none' } }, children: "Previous" })), _jsx(Button, { variant: "contained", endIcon: _jsx(ChevronRightRoundedIcon, {}), onClick: handleNext, sx: { width: { xs: '100%', sm: 'fit-content' } }, children: activeStep === steps.length - 1 ? 'Place order' : 'Next' })] })] }))] })] })] })] }));
}
