import * as React from "react"
import { Box, Typography, Button, Container } from "@mui/material"
import { Link } from "gatsby"
import SEO from "../components/seo"

const NotFoundPage = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: '6em',
            fontWeight: 700,
            color: '#667eea',
            marginBottom: 2,
          }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          sx={{
            marginBottom: 3,
            color: '#333',
          }}
        >
          Page Not Found
        </Typography>
        <Typography
          sx={{
            marginBottom: 4,
            color: '#666',
            maxWidth: '500px',
          }}
        >
          Sorry, the page you're looking for doesn't exist or has been moved.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '12px 40px',
            borderRadius: '30px',
            fontSize: '1.1em',
            fontWeight: 600,
            '&:hover': {
              background: 'linear-gradient(135deg, #5568d3 0%, #653a8b 100%)',
            },
          }}
        >
          Go Home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFoundPage

export const Head = () => (
  <SEO title="404: Not Found" description="Page not found" />
)

