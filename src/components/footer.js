import * as React from "react"
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '30px 20px',
        marginTop: 8,
      }}
    >
      <Typography variant="body1">
        &copy; 2025 Bhanu Patial. All rights reserved.
      </Typography>
      <Box sx={{ marginTop: 1.5 }}>
        <Link 
          href="https://linkedin.com/in/bhanupatial" 
          target="_blank"
          sx={{ 
            color: '#667eea', 
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            }
          }}
        >
          LinkedIn
        </Link>
        {' | '}
        <Link 
          href="https://bhanupatial.github.io" 
          target="_blank"
          sx={{ 
            color: '#667eea', 
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            }
          }}
        >
          Portfolio
        </Link>
        {' | '}
        <Link 
          href="mailto:bhanupatial@gmail.com"
          sx={{ 
            color: '#667eea', 
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            }
          }}
        >
          bhanupatial@gmail.com
        </Link>
      </Box>
    </Box>
  );
}

export default Footer

