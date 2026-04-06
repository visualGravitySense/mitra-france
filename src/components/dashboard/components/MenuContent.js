import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
const mainListItems = [
    { text: 'Home', icon: _jsx(HomeRoundedIcon, {}) },
    { text: 'Analytics', icon: _jsx(AnalyticsRoundedIcon, {}) },
    { text: 'Clients', icon: _jsx(PeopleRoundedIcon, {}) },
    { text: 'Tasks', icon: _jsx(AssignmentRoundedIcon, {}) },
];
const secondaryListItems = [
    { text: 'Settings', icon: _jsx(SettingsRoundedIcon, {}) },
    { text: 'About', icon: _jsx(InfoRoundedIcon, {}) },
    { text: 'Feedback', icon: _jsx(HelpRoundedIcon, {}) },
];
export default function MenuContent() {
    return (_jsxs(Stack, { sx: { flexGrow: 1, p: 1, justifyContent: 'space-between' }, children: [_jsx(List, { dense: true, children: mainListItems.map((item, index) => (_jsx(ListItem, { disablePadding: true, sx: { display: 'block' }, children: _jsxs(ListItemButton, { selected: index === 0, children: [_jsx(ListItemIcon, { children: item.icon }), _jsx(ListItemText, { primary: item.text })] }) }, index))) }), _jsx(List, { dense: true, children: secondaryListItems.map((item, index) => (_jsx(ListItem, { disablePadding: true, sx: { display: 'block' }, children: _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: item.icon }), _jsx(ListItemText, { primary: item.text })] }) }, index))) })] }));
}
