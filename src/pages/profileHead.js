import * as React from "react"
import { Paper, Typography, Grid, Box, Avatar } from "@mui/material";
import profilePicture from '../images/bhanupatial.jpeg';

// Component

const ProfileHead = () => {


  const ProfileSummary = {
    name: "Bhanu Pratap Singh Patial",
    role: "Lead Software Architect",
    summary: "I am a highly innovative and results-driven Software Architect with over 17 years of experience. I have expertise in leading complex projects, driving technical innovation, and delivering high-value solutions. My skills include optimizing performance, spearheading CI/CD initiatives, and integrating cutting-edge technologies. I am recognized for delivering multi-million-dollar savings through strategic system redesigns and fostering a culture of technical excellence.",
  }

  return (
    <Paper elevation={3} sx={{ width: '100%', height: '100%', backgroundColor: '#ccd7db', borderRadius: '10px' }}>
      <Box sx={{ flexGrow: 1 }} style={{ width: '100%', height: '100%' }}>
        <Grid container spacing={1} sx={{ flexDirection: { xs: 'column', sm: 'row' } }} >
          <Grid item xs={2} sm={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Avatar alt="Profile Picture" src={profilePicture}
              sx={{ width: 110, height: 110, border: '4px solid #fff' }} />
          </Grid>
          <Grid item xs={10} sm={10}>
            <Typography variant="h5" component="div">{ProfileSummary.name}</Typography>
            <Typography variant="subtitle1" component="div">{ProfileSummary.role}</Typography>
            <br />
            <Typography variant="body1" component="div" style={{ textIndent: '2em' }}>{ProfileSummary.summary}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );

}




export default ProfileHead
