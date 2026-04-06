import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import ChartUserByCountry from './ChartUserByCountry';
import CustomizedTreeView from './CustomizedTreeView';
import CustomizedDataGrid from './CustomizedDataGrid';
import HighlightedCard from './HighlightedCard';
import PageViewsBarChart from './PageViewsBarChart';
import SessionsChart from './SessionsChart';
import StatCard from './StatCard';
const data = [
    {
        title: 'Users',
        value: '14k',
        interval: 'Last 30 days',
        trend: 'up',
        data: [
            200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
            360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
        ],
    },
    {
        title: 'Conversions',
        value: '325',
        interval: 'Last 30 days',
        trend: 'down',
        data: [
            1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820,
            780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
        ],
    },
    {
        title: 'Event count',
        value: '200k',
        interval: 'Last 30 days',
        trend: 'neutral',
        data: [
            500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
            520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
        ],
    },
];
export default function MainGrid() {
    return (_jsxs(Box, { sx: { width: '100%', maxWidth: { sm: '100%', md: '1700px' } }, children: [_jsx(Typography, { component: "h2", variant: "h6", sx: { mb: 2 }, children: "Overview" }), _jsxs(Grid, { container: true, spacing: 2, columns: 12, sx: { mb: (theme) => theme.spacing(2) }, children: [data.map((card, index) => (_jsx(Grid, { size: { xs: 12, sm: 6, lg: 3 }, children: _jsx(StatCard, { ...card }) }, index))), _jsx(Grid, { size: { xs: 12, sm: 6, lg: 3 }, children: _jsx(HighlightedCard, {}) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(SessionsChart, {}) }), _jsx(Grid, { size: { xs: 12, md: 6 }, children: _jsx(PageViewsBarChart, {}) })] }), _jsx(Typography, { component: "h2", variant: "h6", sx: { mb: 2 }, children: "Details" }), _jsxs(Grid, { container: true, spacing: 2, columns: 12, children: [_jsx(Grid, { size: { xs: 12, lg: 9 }, children: _jsx(CustomizedDataGrid, {}) }), _jsx(Grid, { size: { xs: 12, lg: 3 }, children: _jsxs(Stack, { gap: 2, direction: { xs: 'column', sm: 'row', lg: 'column' }, children: [_jsx(CustomizedTreeView, {}), _jsx(ChartUserByCountry, {})] }) })] }), _jsx(Copyright, { sx: { my: 4 } })] }));
}
