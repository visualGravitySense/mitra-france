import { jsx as _jsx } from "react/jsx-runtime";
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
export default function Search() {
    return (_jsx(FormControl, { sx: { width: { xs: '100%', md: '25ch' } }, variant: "outlined", children: _jsx(OutlinedInput, { size: "small", id: "search", placeholder: "Search\u2026", sx: { flexGrow: 1 }, startAdornment: _jsx(InputAdornment, { position: "start", sx: { color: 'text.primary' }, children: _jsx(SearchRoundedIcon, { fontSize: "small" }) }), inputProps: {
                'aria-label': 'search',
            } }) }));
}
