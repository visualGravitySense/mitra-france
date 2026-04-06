import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
    margin: theme.spacing(1, 0),
    [`& .${breadcrumbsClasses.separator}`]: {
        color: (theme.vars || theme).palette.action.disabled,
        margin: 1,
    },
    [`& .${breadcrumbsClasses.ol}`]: {
        alignItems: 'center',
    },
}));
export default function NavbarBreadcrumbs() {
    return (_jsxs(StyledBreadcrumbs, { "aria-label": "breadcrumb", separator: _jsx(NavigateNextRoundedIcon, { fontSize: "small" }), children: [_jsx(Typography, { variant: "body1", children: "Dashboard" }), _jsx(Typography, { variant: "body1", sx: { color: 'text.primary', fontWeight: 600 }, children: "Home" })] }));
}
