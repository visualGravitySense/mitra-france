import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
const products = [
    {
        name: 'Professional plan',
        desc: 'Monthly subscription',
        price: '$15.00',
    },
    {
        name: 'Dedicated support',
        desc: 'Included in the Professional plan',
        price: 'Free',
    },
    {
        name: 'Hardware',
        desc: 'Devices needed for development',
        price: '$69.99',
    },
    {
        name: 'Landing page template',
        desc: 'License',
        price: '$49.99',
    },
];
export default function Info({ totalPrice }) {
    return (_jsxs(React.Fragment, { children: [_jsx(Typography, { variant: "subtitle2", sx: { color: 'text.secondary' }, children: "Total" }), _jsx(Typography, { variant: "h4", gutterBottom: true, children: totalPrice }), _jsx(List, { disablePadding: true, children: products.map((product) => (_jsxs(ListItem, { sx: { py: 1, px: 0 }, children: [_jsx(ListItemText, { sx: { mr: 2 }, primary: product.name, secondary: product.desc }), _jsx(Typography, { variant: "body1", sx: { fontWeight: 'medium' }, children: product.price })] }, product.name))) })] }));
}
