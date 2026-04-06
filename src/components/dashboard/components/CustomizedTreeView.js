import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import clsx from 'clsx';
import { animated, useSpring } from '@react-spring/web';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { unstable_useTreeItem2 as useTreeItem2, } from '@mui/x-tree-view/useTreeItem2';
import { TreeItem2Content, TreeItem2IconContainer, TreeItem2Label, TreeItem2Root, } from '@mui/x-tree-view/TreeItem2';
import { TreeItem2Icon } from '@mui/x-tree-view/TreeItem2Icon';
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider';
import { useTheme } from '@mui/material/styles';
const ITEMS = [
    {
        id: '1',
        label: 'Website',
        children: [
            { id: '1.1', label: 'Home', color: 'green' },
            { id: '1.2', label: 'Pricing', color: 'green' },
            { id: '1.3', label: 'About us', color: 'green' },
            {
                id: '1.4',
                label: 'Blog',
                children: [
                    { id: '1.1.1', label: 'Announcements', color: 'blue' },
                    { id: '1.1.2', label: 'April lookahead', color: 'blue' },
                    { id: '1.1.3', label: "What's new", color: 'blue' },
                    { id: '1.1.4', label: 'Meet the team', color: 'blue' },
                ],
            },
        ],
    },
    {
        id: '2',
        label: 'Store',
        children: [
            { id: '2.1', label: 'All products', color: 'green' },
            {
                id: '2.2',
                label: 'Categories',
                children: [
                    { id: '2.2.1', label: 'Gadgets', color: 'blue' },
                    { id: '2.2.2', label: 'Phones', color: 'blue' },
                    { id: '2.2.3', label: 'Wearables', color: 'blue' },
                ],
            },
            { id: '2.3', label: 'Bestsellers', color: 'green' },
            { id: '2.4', label: 'Sales', color: 'green' },
        ],
    },
    { id: '4', label: 'Contact', color: 'blue' },
    { id: '5', label: 'Help', color: 'blue' },
];
function DotIcon({ color }) {
    return (_jsx(Box, { sx: { marginRight: 1, display: 'flex', alignItems: 'center' }, children: _jsx("svg", { width: 6, height: 6, children: _jsx("circle", { cx: 3, cy: 3, r: 3, fill: color }) }) }));
}
const AnimatedCollapse = animated(Collapse);
function TransitionComponent(props) {
    const style = useSpring({
        to: {
            opacity: props.in ? 1 : 0,
            transform: `translate3d(0,${props.in ? 0 : 20}px,0)`,
        },
    });
    return _jsx(AnimatedCollapse, { style: style, ...props });
}
function CustomLabel({ color, expandable, children, ...other }) {
    const theme = useTheme();
    const colors = {
        blue: (theme.vars || theme).palette.primary.main,
        green: (theme.vars || theme).palette.success.main,
    };
    const iconColor = color ? colors[color] : null;
    return (_jsxs(TreeItem2Label, { ...other, sx: { display: 'flex', alignItems: 'center' }, children: [iconColor && _jsx(DotIcon, { color: iconColor }), _jsx(Typography, { className: "labelText", variant: "body2", sx: { color: 'text.primary' }, children: children })] }));
}
const CustomTreeItem = React.forwardRef(function CustomTreeItem(props, ref) {
    const { id, itemId, label, disabled, children, ...other } = props;
    const { getRootProps, getContentProps, getIconContainerProps, getLabelProps, getGroupTransitionProps, status, publicAPI, } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });
    const item = publicAPI.getItem(itemId);
    const color = item?.color;
    return (_jsx(TreeItem2Provider, { itemId: itemId, children: _jsxs(TreeItem2Root, { ...getRootProps(other), children: [_jsxs(TreeItem2Content, { ...getContentProps({
                        className: clsx('content', {
                            expanded: status.expanded,
                            selected: status.selected,
                            focused: status.focused,
                            disabled: status.disabled,
                        }),
                    }), children: [status.expandable && (_jsx(TreeItem2IconContainer, { ...getIconContainerProps(), children: _jsx(TreeItem2Icon, { status: status }) })), _jsx(CustomLabel, { ...getLabelProps({ color }) })] }), children && (_jsx(TransitionComponent, { ...getGroupTransitionProps({ className: 'groupTransition' }) }))] }) }));
});
export default function CustomizedTreeView() {
    return (_jsx(Card, { variant: "outlined", sx: { display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }, children: _jsxs(CardContent, { children: [_jsx(Typography, { component: "h2", variant: "subtitle2", children: "Product tree" }), _jsx(RichTreeView, { items: ITEMS, "aria-label": "pages", multiSelect: true, defaultExpandedItems: ['1', '1.1'], defaultSelectedItems: ['1.1', '1.1.1'], sx: {
                        m: '0 -8px',
                        pb: '8px',
                        height: 'fit-content',
                        flexGrow: 1,
                        overflowY: 'auto',
                    }, slots: { item: CustomTreeItem } })] }) }));
}
