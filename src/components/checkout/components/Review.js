import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
    { name: 'Card type:', detail: 'Visa' },
    { name: 'Card holder:', detail: 'Mr. John Smith' },
    { name: 'Card number:', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date:', detail: '04/2024' },
];
export default function Review() {
    return (_jsxs(Stack, { spacing: 2, children: [_jsxs(List, { disablePadding: true, children: [_jsxs(ListItem, { sx: { py: 1, px: 0 }, children: [_jsx(ListItemText, { primary: "Products", secondary: "4 selected" }), _jsx(Typography, { variant: "body2", children: "$134.98" })] }), _jsxs(ListItem, { sx: { py: 1, px: 0 }, children: [_jsx(ListItemText, { primary: "Shipping", secondary: "Plus taxes" }), _jsx(Typography, { variant: "body2", children: "$9.99" })] }), _jsxs(ListItem, { sx: { py: 1, px: 0 }, children: [_jsx(ListItemText, { primary: "Total" }), _jsx(Typography, { variant: "subtitle1", sx: { fontWeight: 700 }, children: "$144.97" })] })] }), _jsx(Divider, {}), _jsxs(Stack, { direction: "column", divider: _jsx(Divider, { flexItem: true }), spacing: 2, sx: { my: 2 }, children: [_jsxs("div", { children: [_jsx(Typography, { variant: "subtitle2", gutterBottom: true, children: "Shipment details" }), _jsx(Typography, { gutterBottom: true, children: "John Smith" }), _jsx(Typography, { gutterBottom: true, sx: { color: 'text.secondary' }, children: addresses.join(', ') })] }), _jsxs("div", { children: [_jsx(Typography, { variant: "subtitle2", gutterBottom: true, children: "Payment details" }), _jsx(Grid, { container: true, children: payments.map((payment) => (_jsx(React.Fragment, { children: _jsxs(Stack, { direction: "row", spacing: 1, useFlexGap: true, sx: { width: '100%', mb: 1 }, children: [_jsx(Typography, { variant: "body1", sx: { color: 'text.secondary' }, children: payment.name }), _jsx(Typography, { variant: "body2", children: payment.detail })] }) }, payment.name))) })] })] })] }));
}
