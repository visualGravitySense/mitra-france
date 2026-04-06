import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
export default function CardAlert() {
    return (_jsx(Card, { variant: "outlined", sx: { m: 1.5, flexShrink: 0 }, children: _jsxs(CardContent, { children: [_jsx(AutoAwesomeRoundedIcon, { fontSize: "small" }), _jsx(Typography, { gutterBottom: true, sx: { fontWeight: 600 }, children: "Plan about to expire" }), _jsx(Typography, { variant: "body2", sx: { mb: 2, color: 'text.secondary' }, children: "Enjoy 10% off when renewing your plan today." }), _jsx(Button, { variant: "contained", size: "small", fullWidth: true, children: "Get the discount" })] }) }));
}
