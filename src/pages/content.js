import React from "react";
import { Box, Container } from "@mui/material";
import ProfileHead from "./profileHead"
import About from "./about";
import MainContent from "./main";
import Skills from "./skills";
import CTA from "./cta";
import Footer from "../components/footer";

const ContentPage = () => {
  return (
    <Box 
      sx={{ 
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      <Container maxWidth="lg" sx={{ padding: { xs: 2, md: 3 } }}>
        {/* Header Section */}
        <Box sx={{ marginBottom: 5 }}>
          <ProfileHead />
        </Box>

        {/* About Section */}
        <Box sx={{ marginBottom: 5 }}>
          <About />
        </Box>

        {/* Experience Section */}
        <Box sx={{ marginBottom: 5 }}>
          <MainContent />
        </Box>

        {/* Skills Section */}
        <Box sx={{ marginBottom: 5 }}>
          <Skills />
        </Box>

        {/* CTA Section */}
        <CTA />
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  )
}

export default ContentPage

