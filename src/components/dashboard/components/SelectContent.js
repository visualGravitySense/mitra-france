import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import MuiAvatar from '@mui/material/Avatar';
import MuiListItemAvatar from '@mui/material/ListItemAvatar';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListSubheader from '@mui/material/ListSubheader';
import Select, { selectClasses } from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
const Avatar = styled(MuiAvatar)(({ theme }) => ({
    width: 28,
    height: 28,
    backgroundColor: (theme.vars || theme).palette.background.paper,
    color: (theme.vars || theme).palette.text.secondary,
    border: `1px solid ${(theme.vars || theme).palette.divider}`,
}));
const ListItemAvatar = styled(MuiListItemAvatar)({
    minWidth: 0,
    marginRight: 12,
});
export default function SelectContent() {
    const [company, setCompany] = React.useState('');
    const handleChange = (event) => {
        setCompany(event.target.value);
    };
    return (_jsxs(Select, { labelId: "company-select", id: "company-simple-select", value: company, onChange: handleChange, displayEmpty: true, inputProps: { 'aria-label': 'Select company' }, fullWidth: true, sx: {
            maxHeight: 56,
            width: 215,
            '&.MuiList-root': {
                p: '8px',
            },
            [`& .${selectClasses.select}`]: {
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
                pl: 1,
            },
        }, children: [_jsx(ListSubheader, { sx: { pt: 0 }, children: "Production" }), _jsxs(MenuItem, { value: "", children: [_jsx(ListItemAvatar, { children: _jsx(Avatar, { alt: "Sitemark web", children: _jsx(DevicesRoundedIcon, { sx: { fontSize: '1rem' } }) }) }), _jsx(ListItemText, { primary: "Sitemark-web", secondary: "Web app" })] }), _jsxs(MenuItem, { value: 10, children: [_jsx(ListItemAvatar, { children: _jsx(Avatar, { alt: "Sitemark App", children: _jsx(SmartphoneRoundedIcon, { sx: { fontSize: '1rem' } }) }) }), _jsx(ListItemText, { primary: "Sitemark-app", secondary: "Mobile application" })] }), _jsxs(MenuItem, { value: 20, children: [_jsx(ListItemAvatar, { children: _jsx(Avatar, { alt: "Sitemark Store", children: _jsx(DevicesRoundedIcon, { sx: { fontSize: '1rem' } }) }) }), _jsx(ListItemText, { primary: "Sitemark-Store", secondary: "Web app" })] }), _jsx(ListSubheader, { children: "Development" }), _jsxs(MenuItem, { value: 30, children: [_jsx(ListItemAvatar, { children: _jsx(Avatar, { alt: "Sitemark Store", children: _jsx(ConstructionRoundedIcon, { sx: { fontSize: '1rem' } }) }) }), _jsx(ListItemText, { primary: "Sitemark-Admin", secondary: "Web app" })] }), _jsx(Divider, { sx: { mx: -1 } }), _jsxs(MenuItem, { value: 40, children: [_jsx(ListItemIcon, { children: _jsx(AddRoundedIcon, {}) }), _jsx(ListItemText, { primary: "Add product", secondary: "Web app" })] })] }));
}
