import { jsx as _jsx } from "react/jsx-runtime";
import Badge, { badgeClasses } from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
export default function MenuButton({ showBadge = false, ...props }) {
    return (_jsx(Badge, { color: "error", variant: "dot", invisible: !showBadge, sx: { [`& .${badgeClasses.badge}`]: { right: 2, top: 2 } }, children: _jsx(IconButton, { size: "small", ...props }) }));
}
