import * as React from "react"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
      light: '#8b9fff',
      dark: '#4c63d2',
    },
    secondary: {
      main: '#764ba2',
      light: '#a071c9',
      dark: '#5a3a7d',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

// Global CSS
import './src/styles/global.css';

// Wraps every page in a theme provider
export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  );
};

