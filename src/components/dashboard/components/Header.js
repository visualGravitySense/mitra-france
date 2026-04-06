import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import CustomDatePicker from './CustomDatePicker';
import NavbarBreadcrumbs from './NavbarBreadcrumbs';
import MenuButton from './MenuButton';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
import Search from './Search';
export default function Header() {
    return (_jsxs(Stack, { direction: "row", sx: {
            display: { xs: 'none', md: 'flex' },
            width: '100%',
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            maxWidth: { sm: '100%', md: '1700px' },
            pt: 1.5,
        }, spacing: 2, children: [_jsx(NavbarBreadcrumbs, {}), _jsxs(Stack, { direction: "row", sx: { gap: 1 }, children: [_jsx(Search, {}), _jsx(CustomDatePicker, {}), _jsx(MenuButton, { showBadge: true, "aria-label": "Open notifications", children: _jsx(NotificationsRoundedIcon, {}) }), _jsx(ColorModeIconDropdown, {})] })] }));
}
