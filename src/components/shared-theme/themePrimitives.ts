import { createTheme, alpha, PaletteMode, Shadows } from '@mui/material/styles';

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    highlighted: true;
  }
}
declare module '@mui/material/styles' {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface PaletteColor extends ColorRange {}

  interface Palette {
    baseShadow: string;
  }
}

const defaultTheme = createTheme();

const customShadows: Shadows = [...defaultTheme.shadows];

// MITRA FRANCE Brand Colors - French Blue #002395
export const brand = {
  50: '#e6edf9',
  100: '#b3c5ee',
  200: '#809de3',
  300: '#4d75d8',
  400: '#1a4dcd',
  500: '#002395', // Primary French Blue
  600: '#001a70',
  700: '#00134d',
  800: '#000c2a',
  900: '#000507',
};

// MITRA FRANCE Brand Colors - Neutral Grays
export const gray = {
  50: '#f8f9fa', // Light Gray - Page Background
  100: '#e9ecef', // Border Gray
  200: '#dee2e6',
  300: '#ced4da',
  400: '#adb5bd',
  500: '#6c757d', // Gray - Secondary Text
  600: '#495057',
  700: '#343a40',
  800: '#2c3e50', // Text Dark
  900: '#212529',
};

export const green = {
  50: 'hsl(120, 80%, 98%)',
  100: 'hsl(120, 75%, 94%)',
  200: 'hsl(120, 75%, 87%)',
  300: 'hsl(120, 61%, 77%)',
  400: 'hsl(120, 44%, 53%)',
  500: 'hsl(120, 59%, 30%)',
  600: 'hsl(120, 70%, 25%)',
  700: 'hsl(120, 75%, 16%)',
  800: 'hsl(120, 84%, 10%)',
  900: 'hsl(120, 87%, 6%)',
};

export const orange = {
  50: 'hsl(45, 100%, 97%)',
  100: 'hsl(45, 92%, 90%)',
  200: 'hsl(45, 94%, 80%)',
  300: 'hsl(45, 90%, 65%)',
  400: 'hsl(45, 90%, 40%)',
  500: 'hsl(45, 90%, 35%)',
  600: 'hsl(45, 91%, 25%)',
  700: 'hsl(45, 94%, 20%)',
  800: 'hsl(45, 95%, 16%)',
  900: 'hsl(45, 93%, 12%)',
};

// MITRA FRANCE Brand Colors - French Red #ED2939
export const red = {
  50: '#fce8ea',
  100: '#f6b5bc',
  200: '#f0828e',
  300: '#ea4f60',
  400: '#ed2939', // Primary French Red - Accent & CTA
  500: '#c91f2f', // Dark Red - Active States
  600: '#a51a26',
  700: '#81141d',
  800: '#5d0f14',
  900: '#39090b',
};

export const getDesignTokens = (mode: PaletteMode) => {
  customShadows[1] =
    mode === 'dark'
      ? 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px'
      : 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px';

  return {
    palette: {
      mode,
      primary: {
        light: '#0038d6', // Light Blue for hover states
        main: '#002395', // French Blue - Primary Brand
        dark: '#001a70',
        contrastText: '#ffffff',
        ...(mode === 'dark' && {
          contrastText: '#ffffff',
          light: '#0038d6',
          main: '#002395',
          dark: '#00134d',
        }),
      },
      info: {
        light: brand[100],
        main: brand[300],
        dark: brand[600],
        contrastText: gray[50],
        ...(mode === 'dark' && {
          contrastText: brand[300],
          light: brand[500],
          main: brand[700],
          dark: brand[900],
        }),
      },
      warning: {
        light: orange[300],
        main: orange[400],
        dark: orange[800],
        ...(mode === 'dark' && {
          light: orange[400],
          main: orange[500],
          dark: orange[700],
        }),
      },
      error: {
        light: '#ff4757',
        main: '#ED2939', // French Red - Secondary/Accent
        dark: '#c91f2f', // Dark Red - Active States
        ...(mode === 'dark' && {
          light: '#ff4757',
          main: '#ED2939',
          dark: '#c91f2f',
        }),
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800],
        ...(mode === 'dark' && {
          light: green[400],
          main: green[500],
          dark: green[700],
        }),
      },
      grey: {
        ...gray,
      },
      divider: mode === 'dark' ? alpha(gray[700], 0.6) : alpha(gray[300], 0.4),
      background: {
        default: '#f8f9fa', // Light Gray - Page Background
        paper: '#ffffff', // Pure White - Cards
        ...(mode === 'dark' && { default: gray[900], paper: '#1a1a1a' }),
      },
      text: {
        primary: '#2c3e50', // Text Dark
        secondary: '#6c757d', // Gray - Secondary Text
        warning: orange[400],
        ...(mode === 'dark' && { primary: '#ffffff', secondary: gray[400] }),
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: `${alpha(gray[200], 0.3)}`,
        ...(mode === 'dark' && {
          hover: alpha(gray[600], 0.2),
          selected: alpha(gray[600], 0.3),
        }),
      },
    },
    typography: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      h1: {
        fontSize: defaultTheme.typography.pxToRem(48), // 3em / 48px
        fontWeight: 700, // Bold
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
        color: '#002395', // French Blue
      },
      h2: {
        fontSize: defaultTheme.typography.pxToRem(35), // 2.2em / 35px
        fontWeight: 600, // Semibold
        lineHeight: 1.2,
        color: '#002395', // French Blue
      },
      h3: {
        fontSize: defaultTheme.typography.pxToRem(26), // 1.6em / 26px
        fontWeight: 600, // Semibold
        lineHeight: 1.5,
        color: '#002395', // French Blue
      },
      h4: {
        fontSize: defaultTheme.typography.pxToRem(24),
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h5: {
        fontSize: defaultTheme.typography.pxToRem(20),
        fontWeight: 600,
      },
      h6: {
        fontSize: defaultTheme.typography.pxToRem(18),
        fontWeight: 600,
      },
      subtitle1: {
        fontSize: defaultTheme.typography.pxToRem(18), // 1.1em
        lineHeight: 1.8,
      },
      subtitle2: {
        fontSize: defaultTheme.typography.pxToRem(14), // 0.85em
        fontWeight: 500,
      },
      body1: {
        fontSize: defaultTheme.typography.pxToRem(18), // 1.1em / 18px - Main content
        lineHeight: 1.8,
        color: '#2c3e50', // Text Dark
      },
      body2: {
        fontSize: defaultTheme.typography.pxToRem(14), // 0.85em / 14px
        fontWeight: 400,
        lineHeight: 1.6,
        color: '#6c757d', // Gray - Secondary Text
      },
      caption: {
        fontSize: defaultTheme.typography.pxToRem(12),
        fontWeight: 400,
      },
    },
    shape: {
      borderRadius: 12, // Brand system uses 8-12px rounded corners
    },
    shadows: customShadows,
  };
};

export const colorSchemes = {
  light: {
    palette: {
      primary: {
        light: '#0038d6', // Light Blue for hover
        main: '#002395', // French Blue - Primary Brand
        dark: '#001a70',
        contrastText: '#ffffff',
      },
      info: {
        light: brand[100],
        main: brand[300],
        dark: brand[600],
        contrastText: gray[50],
      },
      warning: {
        light: orange[300],
        main: orange[400],
        dark: orange[800],
      },
      error: {
        light: '#ff4757',
        main: '#ED2939', // French Red - Secondary/Accent
        dark: '#c91f2f', // Dark Red - Active States
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800],
      },
      grey: {
        ...gray,
      },
      divider: alpha(gray[300], 0.4),
      background: {
        default: '#f8f9fa', // Light Gray - Page Background
        paper: '#ffffff', // Pure White - Cards
      },
      text: {
        primary: '#2c3e50', // Text Dark
        secondary: '#6c757d', // Gray - Secondary Text
        warning: orange[400],
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: `${alpha(gray[200], 0.3)}`,
      },
      baseShadow:
        'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
    },
  },
  dark: {
    palette: {
      primary: {
        contrastText: brand[50],
        light: brand[300],
        main: brand[400],
        dark: brand[700],
      },
      info: {
        contrastText: brand[300],
        light: brand[500],
        main: brand[700],
        dark: brand[900],
      },
      warning: {
        light: orange[400],
        main: orange[500],
        dark: orange[700],
      },
      error: {
        light: red[400],
        main: red[500],
        dark: red[700],
      },
      success: {
        light: green[400],
        main: green[500],
        dark: green[700],
      },
      grey: {
        ...gray,
      },
      divider: alpha(gray[700], 0.6),
      background: {
        default: gray[900],
        paper: 'hsl(220, 30%, 7%)',
      },
      text: {
        primary: 'hsl(0, 0%, 100%)',
        secondary: gray[400],
      },
      action: {
        hover: alpha(gray[600], 0.2),
        selected: alpha(gray[600], 0.3),
      },
      baseShadow:
        'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px',
    },
  },
};

export const typography = {
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  h1: {
    fontSize: defaultTheme.typography.pxToRem(48), // 3em / 48px
    fontWeight: 700, // Bold
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontSize: defaultTheme.typography.pxToRem(35), // 2.2em / 35px
    fontWeight: 600, // Semibold
    lineHeight: 1.2,
  },
  h3: {
    fontSize: defaultTheme.typography.pxToRem(26), // 1.6em / 26px
    fontWeight: 600, // Semibold
    lineHeight: 1.5,
  },
  h4: {
    fontSize: defaultTheme.typography.pxToRem(24),
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h5: {
    fontSize: defaultTheme.typography.pxToRem(20),
    fontWeight: 600,
  },
  h6: {
    fontSize: defaultTheme.typography.pxToRem(18),
    fontWeight: 600,
  },
  subtitle1: {
    fontSize: defaultTheme.typography.pxToRem(18), // 1.1em
    lineHeight: 1.8,
  },
  subtitle2: {
    fontSize: defaultTheme.typography.pxToRem(14), // 0.85em
    fontWeight: 500,
  },
  body1: {
    fontSize: defaultTheme.typography.pxToRem(18), // 1.1em / 18px
    lineHeight: 1.8,
  },
  body2: {
    fontSize: defaultTheme.typography.pxToRem(14), // 0.85em / 14px
    fontWeight: 400,
    lineHeight: 1.6,
  },
  caption: {
    fontSize: defaultTheme.typography.pxToRem(12),
    fontWeight: 400,
  },
};

export const shape = {
  borderRadius: 12, // Brand system uses 8-12px rounded corners
};

// @ts-ignore
const defaultShadows: Shadows = [
  'none',
  'var(--template-palette-baseShadow)',
  ...defaultTheme.shadows.slice(2),
];
export const shadows = defaultShadows;
