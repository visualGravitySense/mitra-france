import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SelectContent from './SelectContent';
import MenuContent from './MenuContent';
import CardAlert from './CardAlert';
import OptionsMenu from './OptionsMenu';
const drawerWidth = 240;
const Drawer = styled(MuiDrawer)({
    width: drawerWidth,
    flexShrink: 0,
    boxSizing: 'border-box',
    mt: 10,
    [`& .${drawerClasses.paper}`]: {
        width: drawerWidth,
        boxSizing: 'border-box',
    },
});
export default function SideMenu() {
    return (_jsxs(Drawer, { variant: "permanent", sx: {
            display: { xs: 'none', md: 'block' },
            [`& .${drawerClasses.paper}`]: {
                backgroundColor: 'background.paper',
            },
        }, children: [_jsx(Box, { sx: {
                    display: 'flex',
                    mt: 'calc(var(--template-frame-height, 0px) + 4px)',
                    p: 1.5,
                }, children: _jsx(SelectContent, {}) }), _jsx(Divider, {}), _jsxs(Box, { sx: {
                    overflow: 'auto',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }, children: [_jsx(MenuContent, {}), _jsx(CardAlert, {})] }), _jsxs(Stack, { direction: "row", sx: {
                    p: 2,
                    gap: 1,
                    alignItems: 'center',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }, children: [_jsx(Avatar, { sizes: "small", alt: "Riley Carter", src: "/static/images/avatar/7.jpg", sx: { width: 36, height: 36 } }), _jsxs(Box, { sx: { mr: 'auto' }, children: [_jsx(Typography, { variant: "body2", sx: { fontWeight: 500, lineHeight: '16px' }, children: "Riley Carter" }), _jsx(Typography, { variant: "caption", sx: { color: 'text.secondary' }, children: "riley@email.com" })] }), _jsx(OptionsMenu, {})] })] }));
}
