import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { inputsCustomizations } from './customizations/inputs.tsx';
import { dataDisplayCustomizations } from './customizations/dataDisplay.tsx';
import { feedbackCustomizations } from './customizations/feedback.tsx';
import { navigationCustomizations } from './customizations/navigation.tsx';
import { surfacesCustomizations } from './customizations/surfaces.ts';
import { colorSchemes, typography, shadows, shape } from './themePrimitives.ts';
export default function AppTheme(props) {
    const { children, disableCustomTheme, themeComponents } = props;
    const theme = React.useMemo(() => {
        return disableCustomTheme
            ? {}
            : createTheme({
                // For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
                cssVariables: {
                    colorSchemeSelector: 'data-mui-color-scheme',
                    cssVarPrefix: 'template',
                },
                colorSchemes, // Recently added in v6 for building light & dark mode app, see https://mui.com/material-ui/customization/palette/#color-schemes
                typography,
                shadows,
                shape,
                components: {
                    ...inputsCustomizations,
                    ...dataDisplayCustomizations,
                    ...feedbackCustomizations,
                    ...navigationCustomizations,
                    ...surfacesCustomizations,
                    ...themeComponents,
                },
            });
    }, [disableCustomTheme, themeComponents]);
    if (disableCustomTheme) {
        return _jsx(React.Fragment, { children: children });
    }
    return (_jsx(ThemeProvider, { theme: theme, disableTransitionOnChange: true, children: children }));
}
