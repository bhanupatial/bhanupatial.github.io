import React from "react"
import { Box, Typography } from "@mui/material"

const Footer = ({ copyright }) => {
  if (!copyright) return null
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: 'center',
        borderTop: '1px solid #e2e8f0',
        backgroundColor: '#f8fafc',
      }}
    >
      <Typography sx={{ color: '#94a3b8', fontSize: '0.78rem' }}>
        {copyright}
      </Typography>
    </Box>
  )
}

export default Footer
