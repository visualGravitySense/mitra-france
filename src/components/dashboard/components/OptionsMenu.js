import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider, { dividerClasses } from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import { paperClasses } from '@mui/material/Paper';
import { listClasses } from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon, { listItemIconClasses } from '@mui/material/ListItemIcon';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import MenuButton from './MenuButton';
const MenuItem = styled(MuiMenuItem)({
    margin: '2px 0',
});
export default function OptionsMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (_jsxs(React.Fragment, { children: [_jsx(MenuButton, { "aria-label": "Open menu", onClick: handleClick, sx: { borderColor: 'transparent' }, children: _jsx(MoreVertRoundedIcon, {}) }), _jsxs(Menu, { anchorEl: anchorEl, id: "menu", open: open, onClose: handleClose, onClick: handleClose, transformOrigin: { horizontal: 'right', vertical: 'top' }, anchorOrigin: { horizontal: 'right', vertical: 'bottom' }, sx: {
                    [`& .${listClasses.root}`]: {
                        padding: '4px',
                    },
                    [`& .${paperClasses.root}`]: {
                        padding: 0,
                    },
                    [`& .${dividerClasses.root}`]: {
                        margin: '4px -4px',
                    },
                }, children: [_jsx(MenuItem, { onClick: handleClose, children: "Profile" }), _jsx(MenuItem, { onClick: handleClose, children: "My account" }), _jsx(Divider, {}), _jsx(MenuItem, { onClick: handleClose, children: "Add another account" }), _jsx(MenuItem, { onClick: handleClose, children: "Settings" }), _jsx(Divider, {}), _jsxs(MenuItem, { onClick: handleClose, sx: {
                            [`& .${listItemIconClasses.root}`]: {
                                ml: 'auto',
                                minWidth: 0,
                            },
                        }, children: [_jsx(ListItemText, { children: "Logout" }), _jsx(ListItemIcon, { children: _jsx(LogoutRoundedIcon, { fontSize: "small" }) })] })] })] }));
}
