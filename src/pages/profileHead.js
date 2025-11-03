import * as React from "react"
import { Box, Typography, Button } from "@mui/material";

const ProfileHead = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: { xs: '60px 20px 40px', md: '80px 40px 60px' },
        textAlign: 'center',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '2em', md: '2.5em' },
          fontWeight: 700,
          marginBottom: 2,
        }}
      >
        Bhanu Patial
      </Typography>
      
      <Typography
        sx={{
          fontSize: { xs: '1.1em', md: '1.3em' },
          marginBottom: 3,
          opacity: 0.95,
          maxWidth: '900px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: 1.5,
        }}
      >
        I turn generic AI into telecom BSS experts using domain-enriched architecture | 18+ years | Lead AI Architect @ Amdocs
      </Typography>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
          flexWrap: 'wrap',
          marginTop: 4,
        }}
      >
        <Button
          href="https://linkedin.com/in/bhanupatial"
          target="_blank"
          variant="outlined"
          sx={{
            color: 'white',
            borderColor: 'white',
            borderWidth: 2,
            borderRadius: '30px',
            padding: '12px 30px',
            fontSize: '1.1em',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'white',
              color: '#667eea',
              borderColor: 'white',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          LinkedIn
        </Button>
        <Button
          href="https://bhanupatial.github.io"
          target="_blank"
          variant="outlined"
          sx={{
            color: 'white',
            borderColor: 'white',
            borderWidth: 2,
            borderRadius: '30px',
            padding: '12px 30px',
            fontSize: '1.1em',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'white',
              color: '#667eea',
              borderColor: 'white',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Portfolio
        </Button>
        <Button
          href="mailto:bhanupatial@gmail.com"
          variant="outlined"
          sx={{
            color: 'white',
            borderColor: 'white',
            borderWidth: 2,
            borderRadius: '30px',
            padding: '12px 30px',
            fontSize: '1.1em',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'white',
              color: '#667eea',
              borderColor: 'white',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Email
        </Button>
      </Box>
    </Box>
  );
}

export default ProfileHead
