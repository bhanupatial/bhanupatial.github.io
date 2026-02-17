import React from "react"
import { Box, Typography } from "@mui/material"

const sectionHeaderSx = {
  fontSize: '1.1rem',
  fontWeight: 700,
  color: '#4a6cf7',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  pb: 1,
  mb: 2,
  borderBottom: '2px solid #4a6cf7',
}

const About = ({ about, aboutHtml }) => {
  if (!aboutHtml && !about) return null
  return (
    <Box sx={{ mb: 4 }}>
      {/* Section Header */}
      <Typography variant="h5" sx={sectionHeaderSx}>
        Professional Summary
      </Typography>

      {/* Summary text from markdown body */}
      {aboutHtml && (
        <Typography
          component="div"
          sx={{
            fontSize: '0.88rem',
            lineHeight: 1.7,
            color: '#475569',
            '& p': { m: 0 },
          }}
          dangerouslySetInnerHTML={{ __html: aboutHtml }}
        />
      )}

      {/* Key Achievements */}
      {about?.impact?.length > 0 && (
        <Box sx={{ mt: 2.5 }}>
          <Typography sx={{
            fontSize: '0.88rem',
            fontWeight: 700,
            color: '#1e293b',
            mb: 1,
          }}>
            Key Achievements
          </Typography>
          <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
            {about.impact.map((item, i) => (
              <Box component="li" key={i} sx={{
                fontSize: '0.85rem',
                color: '#475569',
                lineHeight: 1.6,
                mb: 0.5,
                '&::marker': { color: '#4a6cf7' },
              }}>
                {item}
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default About
