import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Info from './Info';
export default function InfoMobile({ totalPrice }) {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const DrawerList = (_jsxs(Box, { sx: { width: 'auto', px: 3, pb: 3, pt: 8 }, role: "presentation", children: [_jsx(IconButton, { onClick: toggleDrawer(false), sx: { position: 'absolute', right: 8, top: 8 }, children: _jsx(CloseIcon, {}) }), _jsx(Info, { totalPrice: totalPrice })] }));
    return (_jsxs("div", { children: [_jsx(Button, { variant: "text", endIcon: _jsx(ExpandMoreRoundedIcon, {}), onClick: toggleDrawer(true), children: "View details" }), _jsx(Drawer, { open: open, anchor: "top", onClose: toggleDrawer(false), PaperProps: {
                    sx: {
                        top: 'var(--template-frame-height, 0px)',
                        backgroundImage: 'none',
                        backgroundColor: 'background.paper',
                    },
                }, children: DrawerList })] }));
}
