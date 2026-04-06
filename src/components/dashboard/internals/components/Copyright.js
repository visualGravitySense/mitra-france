import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
export default function Copyright(props) {
    return (_jsxs(Typography, { variant: "body2", align: "center", ...props, sx: [
            {
                color: 'text.secondary',
            },
            ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ], children: ['Copyright © ', _jsx(Link, { color: "inherit", href: "https://mui.com/", children: "Sitemark" }), ' ', new Date().getFullYear(), '.'] }));
}
