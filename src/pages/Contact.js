import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RadioIcon from '@mui/icons-material/Radio';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { getImagePath } from '../utils/imagePath';
const MAPS_QUERY = 'https://www.google.com/maps/search/?api=1&query=Nice+France';
const MAP_EMBED_SRC = 'https://maps.google.com/maps?q=Nice+France&t=&z=13&ie=UTF8&iwloc=&output=embed';
const socialLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com', icon: _jsx(InstagramIcon, { sx: { fontSize: 20 } }) },
    { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: _jsx(LinkedInIcon, { sx: { fontSize: 20 } }) },
    { label: 'Facebook', href: 'https://www.facebook.com', icon: _jsx(FacebookIcon, { sx: { fontSize: 20 } }) },
    { label: 'YouTube', href: 'https://www.youtube.com', icon: _jsx(YouTubeIcon, { sx: { fontSize: 20 } }) },
    {
        label: 'el-radio.fr',
        href: 'https://el-radio.fr',
        icon: _jsx(RadioIcon, { sx: { fontSize: 20 } }),
    },
];
function ContactRow({ icon, title, children, }) {
    return (_jsxs(Stack, { direction: "row", spacing: 2, alignItems: "flex-start", sx: { py: 1.25 }, children: [_jsx(Box, { sx: { color: 'text.secondary', pt: 0.25, display: 'flex' }, children: icon }), _jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle2", color: "text.secondary", sx: { fontWeight: 600, mb: 0.25 }, children: title }), _jsx(Box, { sx: { color: 'text.primary' }, children: children })] })] }));
}
export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [snack, setSnack] = useState({ open: false, message: '' });
    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSnack({ open: true, message: 'Thank you! We will get back to you as soon as we can.' });
        setFormData({ name: '', email: '', message: '' });
    };
    return (_jsxs(Box, { children: [_jsx(Box, { sx: {
                    pt: { xs: 10, md: 12 },
                    pb: { xs: 4, md: 5 },
                    borderBottom: 1,
                    borderColor: 'divider',
                    background: 'linear-gradient(180deg, rgba(0, 35, 149, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
                }, children: _jsx(Container, { children: _jsxs(Grid, { container: true, spacing: 4, alignItems: "center", children: [_jsxs(Grid, { size: { xs: 12, md: 6 }, children: [_jsx(Typography, { variant: "overline", sx: { letterSpacing: 1.2, color: 'primary.main', fontWeight: 700 }, children: "MITRA France" }), _jsx(Typography, { variant: "h2", sx: { fontWeight: 700, mb: 2, color: '#0b1b3a' }, children: "Contact us" }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { maxWidth: 480, lineHeight: 1.7 }, children: "One short message is enough. Tell us what you need \u2014 we will reply by email." })] }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(Box, { sx: {
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: '0 8px 32px rgba(0, 35, 149, 0.12)',
                                        height: { xs: 260, sm: 320 },
                                    }, children: _jsx(Box, { component: "img", src: getImagePath('/illustrations/mitra-image-5.png'), alt: "MITRA France team", sx: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' } }) }) })] }) }) }), _jsx(Container, { sx: { py: { xs: 4, md: 6 } }, children: _jsxs(Grid, { container: true, spacing: { xs: 4, md: 6 }, children: [_jsxs(Grid, { size: { xs: 12, md: 7 }, children: [_jsx(Typography, { variant: "h5", sx: { fontWeight: 700, mb: 1, color: '#0b1b3a' }, children: "Send a message" }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 3 }, children: "Required fields are marked. We read every message." }), _jsx(Box, { component: "form", onSubmit: handleSubmit, sx: {
                                        maxWidth: 560,
                                        p: { xs: 0, sm: 3 },
                                        borderRadius: 2,
                                        border: { xs: 'none', sm: '1px solid' },
                                        borderColor: 'divider',
                                    }, children: _jsxs(Stack, { spacing: 2.5, children: [_jsx(TextField, { required: true, fullWidth: true, label: "Your name", name: "name", value: formData.name, onChange: handleChange }), _jsx(TextField, { required: true, fullWidth: true, type: "email", label: "Email", name: "email", value: formData.email, onChange: handleChange }), _jsx(TextField, { required: true, fullWidth: true, multiline: true, minRows: 5, label: "Message", name: "message", value: formData.message, onChange: handleChange }), _jsx(Button, { type: "submit", variant: "contained", size: "large", sx: { alignSelf: 'flex-start', px: 4 }, children: "Send" })] }) })] }), _jsxs(Grid, { size: { xs: 12, md: 5 }, children: [_jsx(Typography, { variant: "h5", sx: { fontWeight: 700, mb: 2, color: '#0b1b3a' }, children: "Reach us" }), _jsxs(Stack, { divider: _jsx(Divider, { flexItem: true }), sx: { mb: 2 }, children: [_jsx(ContactRow, { icon: _jsx(LocationOnIcon, {}), title: "Address", children: _jsxs(Stack, { direction: "row", spacing: 2, alignItems: "flex-start", children: [_jsx(Box, { component: "img", src: getImagePath('/photos/583741041_1157902773184394_5619801435922057517_n.jpg'), alt: "", sx: {
                                                            width: 88,
                                                            height: 66,
                                                            objectFit: 'cover',
                                                            borderRadius: 1,
                                                            flexShrink: 0,
                                                            display: { xs: 'none', sm: 'block' },
                                                        } }), _jsxs(Box, { children: [_jsx(Typography, { variant: "body2", children: "Nice, France" }), _jsxs(Link, { href: MAPS_QUERY, target: "_blank", rel: "noopener noreferrer", variant: "body2", sx: { mt: 0.5, display: 'inline-flex', alignItems: 'center', gap: 0.5 }, children: ["Open in Google Maps", _jsx(OpenInNewIcon, { sx: { fontSize: 16 } })] })] })] }) }), _jsx(ContactRow, { icon: _jsx(PhoneIcon, {}), title: "Phone", children: _jsx(Link, { href: "tel:+33641092395", variant: "body2", children: "+33 6 41 09 23 95" }) }), _jsx(ContactRow, { icon: _jsx(EmailIcon, {}), title: "Email", children: _jsx(Link, { href: "mailto:mitra.france@gmail.com", variant: "body2", children: "mitra.france@gmail.com" }) })] }), _jsx(Typography, { variant: "subtitle2", color: "text.secondary", sx: { fontWeight: 600, mb: 1 }, children: "Social" }), _jsx(Stack, { spacing: 0.5, sx: { mb: 3 }, children: socialLinks.map((item) => (_jsxs(Link, { href: item.href, target: "_blank", rel: "noopener noreferrer", underline: "hover", sx: {
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            py: 0.75,
                                            color: 'text.primary',
                                        }, children: [item.icon, item.label, _jsx(OpenInNewIcon, { sx: { fontSize: 14, color: 'text.secondary', ml: 0.25 } })] }, item.label))) }), _jsxs(Typography, { variant: "body2", color: "text.secondary", component: "div", children: [_jsx("strong", { children: "PIC:" }), " 921950857", _jsx("br", {}), _jsx("strong", { children: "OID:" }), " E10155908"] })] })] }) }), _jsx(Box, { sx: { bgcolor: 'grey.50', py: { xs: 3, md: 4 }, borderTop: 1, borderColor: 'divider' }, children: _jsxs(Container, { children: [_jsx(Typography, { variant: "subtitle1", sx: { fontWeight: 700, mb: 2, color: '#0b1b3a' }, children: "Where we are" }), _jsx(Box, { sx: {
                                borderRadius: 2,
                                overflow: 'hidden',
                                border: '1px solid',
                                borderColor: 'divider',
                                height: { xs: 280, md: 360 },
                                bgcolor: 'background.paper',
                            }, children: _jsx(Box, { component: "iframe", title: "Map \u2014 Nice, France", src: MAP_EMBED_SRC, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", sx: {
                                    border: 0,
                                    width: '100%',
                                    height: '100%',
                                    display: 'block',
                                } }) }), _jsxs(Typography, { variant: "caption", color: "text.secondary", sx: { display: 'block', mt: 1.5 }, children: ["Map data \u00A9 Google.", ' ', _jsx(Link, { href: MAPS_QUERY, target: "_blank", rel: "noopener noreferrer", children: "View larger map" })] })] }) }), _jsx(Snackbar, { open: snack.open, autoHideDuration: 5000, onClose: () => setSnack((s) => ({ ...s, open: false })), anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, children: _jsx(Alert, { severity: "success", onClose: () => setSnack((s) => ({ ...s, open: false })), variant: "filled", children: snack.message }) })] }));
}
