import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useColorScheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
export default function ColorModeSelect(props) {
    const { mode, setMode } = useColorScheme();
    if (!mode) {
        return null;
    }
    return (_jsxs(Select, { value: mode, onChange: (event) => setMode(event.target.value), SelectDisplayProps: {
            // @ts-ignore
            'data-screenshot': 'toggle-mode',
        }, ...props, children: [_jsx(MenuItem, { value: "system", children: "System" }), _jsx(MenuItem, { value: "light", children: "Light" }), _jsx(MenuItem, { value: "dark", children: "Dark" })] }));
}
