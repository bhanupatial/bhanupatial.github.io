import * as React from "react"
import { Grid, Typography, Paper } from '@mui/material';

const Left = () => {
  return (
    <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#f2f2f2', borderRadius: '10px' }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>Skills</Typography>
          <ul>
            <li><Typography variant="body1" style={{ marginBottom: '10px' }}>In-depth knowledge of C, Linux system programming, Java, Spring Boot, Kafka, Cloud, CI/CD, DevOps, and Test Automation.am experienced in C, Linux system programming, Java, Springboot, Kafka, Cloud, CI/CD, DevOps, and Test Automation.</Typography></li>
            <li><Typography variant="body1" style={{ marginBottom: '10px' }}>Experienced as a skilled solution architect with specialized knowledge in Oracle Tuxedo, virtualization, Linux, Oracle database, microservices, and Kubernetes.</Typography></li>
            <li><Typography variant="body1" style={{ marginBottom: '10px' }}>In-depth expertise in data centers, infrastructure components, network components, and the deployment of large-scale applications with robust load management.</Typography></li>
            <li><Typography variant="body1" style={{ marginBottom: '10px' }}>Experienced in telecom billing, rating, and customer service management.</Typography></li>
            <li><Typography variant="body1" style={{ marginBottom: '10px' }}>Self-learning in Golang.</Typography></li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>Education</Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Master of Computer Applications<br />
                -- Visvesvaraya Technological University
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Bachelor of Computer Applications<br />
                -- Himachal Pradesh University
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} >
          <Typography variant="h6" gutterBottom>Achievements And Innovations</Typography>
          <ul>
            <li>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>I orchestrated and directed a cost-saving initiative amounting to several million dollars, culminating in the replacement of the prominent ETL software, SyncSort, with an in-house solution for the Amdocs Billing product.</Typography>
            </li>
            <li>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>As the lead consultant and designer, I was in charge of ensuring that the Amdocs Ensemble modernization from legacy HP-UX to Linux was highly resilient, scalable, and capable of supporting three times the current capacity.</Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Left


