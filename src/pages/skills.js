import React from "react"
import { Box, Typography } from "@mui/material"

const sidebarHeaderSx = {
  fontSize: '0.92rem',
  fontWeight: 700,
  color: '#4a6cf7',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  pb: 1,
  mb: 2,
  borderBottom: '2px solid #4a6cf7',
}

const Skills = ({ skills }) => {
  if (!skills?.length) return null
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" sx={sidebarHeaderSx}>
        Technical Skills
      </Typography>

      {skills.map((category, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography sx={{
            fontWeight: 700,
            fontSize: '0.84rem',
            color: '#1e293b',
            mb: 0.5,
          }}>
            {category.title}
          </Typography>
          <Typography sx={{
            fontSize: '0.8rem',
            color: '#475569',
            lineHeight: 1.65,
          }}>
            {(category.items || []).join(' · ')}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

export default Skills
