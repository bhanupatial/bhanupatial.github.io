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

const CTA = ({ cta }) => {
  if (!cta) return null
  const { title, items, closing } = cta
  return (
    <Box>
      <Typography variant="h5" sx={sectionHeaderSx}>
        {title || "Let's Connect"}
      </Typography>

      {items?.length > 0 && (
        <Box component="ul" sx={{ pl: 2.5, m: 0, mb: 2 }}>
          {items.map((item, i) => (
            <Box component="li" key={i} sx={{
              fontSize: '0.85rem',
              color: '#475569',
              lineHeight: 1.6,
              mb: 0.3,
              '&::marker': { color: '#4a6cf7' },
            }}>
              {item}
            </Box>
          ))}
        </Box>
      )}

      {closing && (
        <Typography sx={{
          fontSize: '0.84rem',
          color: '#64748b',
          fontStyle: 'italic',
        }}>
          {closing}
        </Typography>
      )}
    </Box>
  )
}

export default CTA
