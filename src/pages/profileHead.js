import React from "react"
import { Box, Typography, Grid } from "@mui/material"
import profilePhoto from "../images/bhanupatial.jpeg"

const ProfileHead = ({ name, role, tagline }) => {
  if (!name) return null
  return (
    <Box
      sx={{
        background: '#2d3748',
        color: 'white',
        py: { xs: 4, md: 5 },
        px: { xs: 3, md: 6 },
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
        <Grid container spacing={4} alignItems="center">
          {/* Photo */}
          <Grid item xs={12} sm="auto">
            <Box
              component="img"
              src={profilePhoto}
              alt={name}
              sx={{
                width: { xs: 120, md: 150 },
                height: { xs: 120, md: 150 },
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid rgba(255,255,255,0.2)',
                display: 'block',
                mx: { xs: 'auto', sm: 0 },
              }}
            />
          </Grid>

          {/* Name & Info */}
          <Grid item xs={12} sm>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', md: '2.8rem' },
                fontWeight: 700,
                lineHeight: 1.1,
                mb: 0.5,
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              {name}
            </Typography>
            {role && (
              <Typography
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.8)',
                  mb: 1.5,
                  textAlign: { xs: 'center', sm: 'left' },
                }}
              >
                {role}
              </Typography>
            )}
            {tagline && (
              <Typography
                sx={{
                  fontSize: { xs: '0.88rem', md: '0.95rem' },
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.65,
                  maxWidth: 600,
                  textAlign: { xs: 'center', sm: 'left' },
                }}
              >
                {tagline}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default ProfileHead
