import React from "react";
import { Grid, Box } from "@mui/material";
import ProfileHead from "./profileHead"
import ContactInfo from "./contact"
import Left from "./left";
import MainContent from "./main";

const ContentPage = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* First Row */}
      <Grid container spacing={1} sx={{ flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'stretch' }} >
        <Grid item xs={12} sm={8}>
          <Box sx={{ p: 1, height: '100%', width: '100%' }}><ProfileHead /></Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ p: 1, height: '100%', width: '100%' }}><ContactInfo /></Box>
        </Grid>
      </Grid>
      {/* Second Row */}
      <Grid container spacing={1} sx={{ flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'stretch' }}>
        <Grid item xs={12} sm={4} sx={{ height: '100%', width: '100%' }}>
          <Box sx={{ p: 1, height: '100%' }}><Left /></Box>
        </Grid>
        <Grid item xs={12} sm={8} sx={{ height: '100%', width: '100%' }}>
          <Box sx={{ p: 1, height: '100%'}}><MainContent /></Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ContentPage

