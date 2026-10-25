import { extendTheme } from '@chakra-ui/react';

// Black ink and highlighter on paper: documents are what Documated automates.
const colors = {
  ink: {
    900: '#121212',
    700: '#3D3D3A',
    500: '#6B6B66',
    300: '#A8A8A2',
  },
  paper: '#FFFFFF',
  sheet: '#F3F3F1',
  rule: '#E2E2DD',
  highlight: '#FFE45C',
  ok: '#16875A',
};

export const theme = extendTheme({
  colors,
  fonts: {
    heading: "'Schibsted Grotesk Variable', system-ui, sans-serif",
    body: "'Schibsted Grotesk Variable', system-ui, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, monospace",
  },
  // Type scale on a 1.25 ratio from a 17px body.
  fontSizes: {
    sm: '0.875rem',
    md: '1.0625rem',
    lg: '1.25rem',
    xl: '1.5625rem',
    '2xl': '1.953rem',
    '3xl': '2.441rem',
    '4xl': '3.052rem',
    '5xl': '3.815rem',
  },
  radii: {
    control: '8px',
    panel: '14px',
  },
  styles: {
    global: {
      'html, body': {
        bg: 'paper',
        color: 'ink.900',
        fontSize: 'md',
        lineHeight: 1.6,
        WebkitFontSmoothing: 'antialiased',
      },
      '::selection': { bg: 'highlight', color: 'ink.900' },
      ':focus-visible': {
        outline: '2px solid',
        outlineColor: 'ink.900',
        outlineOffset: '3px',
      },
      '@media (prefers-reduced-motion: reduce)': {
        '*, *::before, *::after': {
          animationDuration: '0.01ms !important',
          transitionDuration: '0.01ms !important',
        },
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'ink.900',
        fontWeight: 650,
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        textWrap: 'balance',
      },
    },
    Button: {
      baseStyle: {
        borderRadius: 'control',
        fontWeight: 600,
        _focusVisible: { boxShadow: 'none' },
      },
      sizes: {
        md: { h: '44px', px: 5, fontSize: 'md' },
        lg: { h: '52px', px: 6, fontSize: 'md' },
      },
      variants: {
        primary: {
          bg: 'ink.900',
          color: 'white',
          _hover: { bg: '#2E2E2C' },
          _active: { bg: 'black' },
        },
        highlight: {
          bg: 'highlight',
          color: 'ink.900',
          _hover: { bg: '#F5D833' },
        },
        secondary: {
          bg: 'paper',
          color: 'ink.900',
          border: '1px solid',
          borderColor: 'rule',
          _hover: { borderColor: 'ink.300' },
        },
      },
      defaultProps: { variant: 'primary', size: 'md' },
    },
    Radio: {
      baseStyle: {
        control: {
          bg: 'paper',
          borderColor: 'ink.300',
          _checked: {
            bg: 'ink.900',
            borderColor: 'ink.900',
            _hover: { bg: 'ink.900', borderColor: 'ink.900' },
          },
        },
      },
    },
    Input: {
      defaultProps: { focusBorderColor: 'ink.900' },
    },
    Textarea: {
      defaultProps: { focusBorderColor: 'ink.900' },
    },
  },
});
