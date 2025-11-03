import * as React from "react"
import { Box, Typography, Button } from "@mui/material";

const CTA = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center',
        padding: { xs: '40px 20px', md: '60px 40px' },
        borderRadius: '12px',
        marginTop: 5,
        marginBottom: 5,
      }}
      id="contact"
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: '2.2em',
          marginBottom: 2,
          color: 'white',
        }}
      >
        Open to Conversations About
      </Typography>
      
      <Box sx={{ maxWidth: '800px', margin: '0 auto', marginBottom: 5 }}>
        <Box component="ul" sx={{ listStyle: 'none', padding: 0, fontSize: '1.1em', marginBottom: 5 }}>
          {[
            'AI transformation strategies for telecom/enterprise platforms',
            'Strategic architecture roles (VP Engineering, Chief Architect, Technical Fellow)',
            'Advisory and consulting engagements in domain-enriched AI'
          ].map((item, index) => (
            <Box
              component="li"
              key={index}
              sx={{
                padding: '10px 0',
                '&:before': {
                  content: '"• "',
                  marginRight: 1,
                },
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2.5,
          flexWrap: 'wrap',
        }}
      >
        <Button
          href="https://linkedin.com/in/bhanupatial"
          target="_blank"
          sx={{
            padding: '15px 40px',
            backgroundColor: 'white',
            color: '#667eea',
            borderRadius: '30px',
            fontWeight: 700,
            fontSize: '1em',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            '&:hover': {
              backgroundColor: 'white',
              transform: 'translateY(-3px)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
            },
            transition: 'all 0.3s',
          }}
        >
          Connect on LinkedIn
        </Button>
        <Button
          href="mailto:bhanupatial@gmail.com"
          sx={{
            padding: '15px 40px',
            backgroundColor: 'white',
            color: '#667eea',
            borderRadius: '30px',
            fontWeight: 700,
            fontSize: '1em',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            '&:hover': {
              backgroundColor: 'white',
              transform: 'translateY(-3px)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
            },
            transition: 'all 0.3s',
          }}
        >
          Send Email
        </Button>
        <Button
          href="https://bhanupatial.github.io"
          target="_blank"
          sx={{
            padding: '15px 40px',
            backgroundColor: 'white',
            color: '#667eea',
            borderRadius: '30px',
            fontWeight: 700,
            fontSize: '1em',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            '&:hover': {
              backgroundColor: 'white',
              transform: 'translateY(-3px)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
            },
            transition: 'all 0.3s',
          }}
        >
          View Portfolio
        </Button>
      </Box>
      
      <Typography sx={{ marginTop: 5, fontSize: '1.1em' }}>
        💬 DM me "AI STRATEGY" or connect to explore how domain expertise transforms AI effectiveness.
      </Typography>
    </Box>
  );
}

export default CTA

