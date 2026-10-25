import { extendTheme } from '@chakra-ui/react';

// Paper and signature-ink palette: documents are what Documated automates.
const colors = {
  ink: {
    900: '#161A2B',
    700: '#3A4058',
    500: '#646B85',
    300: '#A3A9BE',
  },
  paper: '#FFFFFF',
  sheet: '#F2F4F8',
  rule: '#DCE0EA',
  signature: {
    50: '#EEF1FF',
    100: '#DCE2FE',
    500: '#2B44D9',
    600: '#2236B8',
    700: '#1B2B93',
  },
  highlight: '#FFE873',
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
        outlineColor: 'signature.500',
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
          bg: 'signature.500',
          color: 'white',
          _hover: { bg: 'signature.600' },
          _active: { bg: 'signature.700' },
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
    Input: {
      defaultProps: { focusBorderColor: 'signature.500' },
    },
    Textarea: {
      defaultProps: { focusBorderColor: 'signature.500' },
    },
  },
});
