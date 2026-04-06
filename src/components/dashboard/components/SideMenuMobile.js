import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import MenuButton from './MenuButton';
import MenuContent from './MenuContent';
import CardAlert from './CardAlert';
export default function SideMenuMobile({ open, toggleDrawer }) {
    return (_jsx(Drawer, { anchor: "right", open: open, onClose: toggleDrawer(false), sx: {
            zIndex: (theme) => theme.zIndex.drawer + 1,
            [`& .${drawerClasses.paper}`]: {
                backgroundImage: 'none',
                backgroundColor: 'background.paper',
            },
        }, children: _jsxs(Stack, { sx: {
                maxWidth: '70dvw',
                height: '100%',
            }, children: [_jsxs(Stack, { direction: "row", sx: { p: 2, pb: 0, gap: 1 }, children: [_jsxs(Stack, { direction: "row", sx: { gap: 1, alignItems: 'center', flexGrow: 1, p: 1 }, children: [_jsx(Avatar, { sizes: "small", alt: "Riley Carter", src: "/static/images/avatar/7.jpg", sx: { width: 24, height: 24 } }), _jsx(Typography, { component: "p", variant: "h6", children: "Riley Carter" })] }), _jsx(MenuButton, { showBadge: true, children: _jsx(NotificationsRoundedIcon, {}) })] }), _jsx(Divider, {}), _jsxs(Stack, { sx: { flexGrow: 1 }, children: [_jsx(MenuContent, {}), _jsx(Divider, {})] }), _jsx(CardAlert, {}), _jsx(Stack, { sx: { p: 2 }, children: _jsx(Button, { variant: "outlined", fullWidth: true, startIcon: _jsx(LogoutRoundedIcon, {}), children: "Logout" }) })] }) }));
}
