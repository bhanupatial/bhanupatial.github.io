import * as React from "react"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './src/styles/global.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0ea5e9',
      dark: '#0284c7',
    },
    secondary: {
      main: '#64748b',
    },
    background: {
      default: 'var(--bg-primary)',
      paper: 'var(--bg-card)',
    },
    text: {
      primary: 'var(--text-primary)',
      secondary: 'var(--text-secondary)',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'Segoe UI',
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: { fontWeight: 400 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.6, fontSize: '0.95rem' },
    body2: { lineHeight: 1.6 },
  },
  shape: { borderRadius: 4 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          transition: 'background-color 0.25s ease, color 0.25s ease',
        },
      },
    },
  },
});

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  );
};
