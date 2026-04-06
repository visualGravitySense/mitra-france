import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
function ButtonField(props) {
    const { setOpen, label, id, disabled, InputProps: { ref } = {}, inputProps: { 'aria-label': ariaLabel } = {}, } = props;
    return (_jsx(Button, { variant: "outlined", id: id, disabled: disabled, ref: ref, "aria-label": ariaLabel, size: "small", onClick: () => setOpen?.((prev) => !prev), startIcon: _jsx(CalendarTodayRoundedIcon, { fontSize: "small" }), sx: { minWidth: 'fit-content' }, children: label ? `${label}` : 'Pick a date' }));
}
export default function CustomDatePicker() {
    const [value, setValue] = React.useState(dayjs('2023-04-17'));
    const [open, setOpen] = React.useState(false);
    return (_jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: _jsx(DatePicker, { value: value, label: value == null ? null : value.format('MMM DD, YYYY'), onChange: (newValue) => setValue(newValue), slots: { field: ButtonField }, slotProps: {
                field: { setOpen },
                nextIconButton: { size: 'small' },
                previousIconButton: { size: 'small' },
            }, open: open, onClose: () => setOpen(false), onOpen: () => setOpen(true), views: ['day', 'month', 'year'] }) }));
}
