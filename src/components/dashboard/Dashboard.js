import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from './components/AppNavbar';
import Header from './components/Header';
import MainGrid from './components/MainGrid';
import SideMenu from './components/SideMenu';
import AppTheme from '../shared-theme/AppTheme';
import { chartsCustomizations, dataGridCustomizations, datePickersCustomizations, treeViewCustomizations, } from './theme/customizations';
const xThemeComponents = {
    ...chartsCustomizations,
    ...dataGridCustomizations,
    ...datePickersCustomizations,
    ...treeViewCustomizations,
};
export default function Dashboard(props) {
    return (_jsxs(AppTheme, { ...props, themeComponents: xThemeComponents, children: [_jsx(CssBaseline, { enableColorScheme: true }), _jsxs(Box, { sx: { display: 'flex' }, children: [_jsx(SideMenu, {}), _jsx(AppNavbar, {}), _jsx(Box, { component: "main", sx: (theme) => ({
                            flexGrow: 1,
                            backgroundColor: theme.vars
                                ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                                : alpha(theme.palette.background.default, 1),
                            overflow: 'auto',
                        }), children: _jsxs(Stack, { spacing: 2, sx: {
                                alignItems: 'center',
                                mx: 3,
                                pb: 5,
                                mt: { xs: 8, md: 0 },
                            }, children: [_jsx(Header, {}), _jsx(MainGrid, {})] }) })] })] }));
}
