import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import ForgotPassword from './components/ForgotPassword';
import AppTheme from '../shared-theme/AppTheme';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './components/CustomIcons';
const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow: 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));
const SignInContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));
export default function SignIn(props) {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = (event) => {
        if (emailError || passwordError) {
            event.preventDefault();
            return;
        }
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    const validateInputs = () => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        let isValid = true;
        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        }
        else {
            setEmailError(false);
            setEmailErrorMessage('');
        }
        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        }
        else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }
        return isValid;
    };
    return (_jsxs(AppTheme, { ...props, children: [_jsx(CssBaseline, { enableColorScheme: true }), _jsxs(SignInContainer, { direction: "column", justifyContent: "space-between", children: [_jsx(ColorModeSelect, { sx: { position: 'fixed', top: '1rem', right: '1rem' } }), _jsxs(Card, { variant: "outlined", children: [_jsx(SitemarkIcon, {}), _jsx(Typography, { component: "h1", variant: "h4", sx: { width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }, children: "Sign in" }), _jsxs(Box, { component: "form", onSubmit: handleSubmit, noValidate: true, sx: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%',
                                    gap: 2,
                                }, children: [_jsxs(FormControl, { children: [_jsx(FormLabel, { htmlFor: "email", children: "Email" }), _jsx(TextField, { error: emailError, helperText: emailErrorMessage, id: "email", type: "email", name: "email", placeholder: "your@email.com", autoComplete: "email", autoFocus: true, required: true, fullWidth: true, variant: "outlined", color: emailError ? 'error' : 'primary' })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { htmlFor: "password", children: "Password" }), _jsx(TextField, { error: passwordError, helperText: passwordErrorMessage, name: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022", type: "password", id: "password", autoComplete: "current-password", autoFocus: true, required: true, fullWidth: true, variant: "outlined", color: passwordError ? 'error' : 'primary' })] }), _jsx(FormControlLabel, { control: _jsx(Checkbox, { value: "remember", color: "primary" }), label: "Remember me" }), _jsx(ForgotPassword, { open: open, handleClose: handleClose }), _jsx(Button, { type: "submit", fullWidth: true, variant: "contained", onClick: validateInputs, children: "Sign in" }), _jsx(Link, { component: "button", type: "button", onClick: handleClickOpen, variant: "body2", sx: { alignSelf: 'center' }, children: "Forgot your password?" })] }), _jsx(Divider, { children: "or" }), _jsxs(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 2 }, children: [_jsx(Button, { fullWidth: true, variant: "outlined", onClick: () => alert('Sign in with Google'), startIcon: _jsx(GoogleIcon, {}), children: "Sign in with Google" }), _jsx(Button, { fullWidth: true, variant: "outlined", onClick: () => alert('Sign in with Facebook'), startIcon: _jsx(FacebookIcon, {}), children: "Sign in with Facebook" }), _jsxs(Typography, { sx: { textAlign: 'center' }, children: ["Don't have an account?", ' ', _jsx(Link, { href: "/material-ui/getting-started/templates/sign-in/", variant: "body2", sx: { alignSelf: 'center' }, children: "Sign up" })] })] })] })] })] }));
}
