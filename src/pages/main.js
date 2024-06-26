import * as React from "react"
import { Box, Grid, Typography } from '@mui/material';


const MainContent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h6" gutterBottom>Work Experience</Typography>
      <Grid container spacing={1}>
        {/* Amdocs Development Centre INDIA Pvt. Ltd. */}
        <Grid item xs={12}>
          <Typography variant="h6" style={{ fontStyle: 'italic' }}>Lead Software Architect</Typography>
          <Typography variant="h7">Amdocs Development Centre INDIA Pvt. Ltd. (Sep 2022 – present)</Typography>

          <ul>
            <li> <Typography variant="body1" style={{ marginBottom: '10px' }}>Ideated and lead the implementation of CI/CD initiatives that improved the software delivery process and reduced time-to-market.</Typography></li>
            <li> <Typography variant="body1" style={{ marginBottom: '10px' }}>Responsible for managing the technical product roadmap and optimizing the development process.</Typography></li>
            <li> <Typography variant="body1" style={{ marginBottom: '10px' }}>I successfully evaluated the technology of Copilot and OpenAI and demonstrated its practicality for day-to-day developer use. By integrating these tools into our workflow, I was able to significantly improve our coding proficiency, enhance code quality, and achieve considerable cost savings in our development processes.</Typography></li>
            <li> <Typography variant="body1" style={{ marginBottom: '10px' }}>Leading team of Architects and Development Experts and DevOps specialists in matrix manager.</Typography></li>
          </ul>
        </Grid>

        {/* Netcracker Technology Solutions */}
        <Grid item xs={12}>
        <Typography variant="h6" style={{ fontStyle: 'italic' }}>Systems Architect</Typography>
          <Typography variant="h7">Netcracker Technology Solutions (INDIA) Pvt. Ltd. (June 2021 – September 2022)</Typography>
          <ul>
            <li> <Typography variant="body1" style={{ marginBottom: '10px' }}>I was responsible for developing the product roadmap and driving continuous improvements.</Typography></li>
            <li> <Typography variant="body1" style={{ marginBottom: '10px' }}>Led the initiative to modernize our build infrastructure, ensuring seamless product packaging for different platforms within our legacy system. Additionally, provided contrarian perspectives to validate the thoroughness of the team's approach.</Typography></li>
            <li> <Typography variant="body1" style={{ marginBottom: '10px' }}>In my role as the systems architect, I was responsible for designing a cost-effective solution to manage system telemetry and monitoring within a distributed applications environment. Our implementation efficiently gathers and analyzes data from various sources within the distributed applications, ensuring seamless monitoring and control.</Typography></li>
            <li> <Typography variant="body1" style={{ marginBottom: '10px' }}>I successfully led the re-architecture of multiple application security systems, focusing on authentication and authorization, to centrally manage users with Microsoft Active Directory. This initiative greatly enhanced our product's security and streamlined user management processes.</Typography></li>
          </ul>
        </Grid>

        {/* Amdocs Development Centre INDIA Pvt. Ltd. (Earlier) */}
        <Grid item xs={12}>
        <Typography variant="h6" style={{ fontStyle: 'italic' }}>Software Architect</Typography>
          <Typography variant="h7">Amdocs Development Centre INDIA Pvt. Ltd. (Jan 2008 – May 2021)</Typography>
          <ul>
            <li> <Typography variant="body1" style={{ marginBottom: '10px' }}>Successfully laid the groundwork for the seamless migration of the legacy monolith Amdocs Ensemble product to the cloud, showcasing advanced expertise in software and infrastructure domains.</Typography></li>
            <li> <Typography variant="body1" style={{ marginBottom: '10px' }}>I successfully led the ideation, design, and implementation of a major infrastructure transformation, focusing on platform and application portability. In my role as lead consultant and designer, I ensured the highly resilient, scalable transition of Amdocs Ensemble from legacy HP-UX to Linux. This transformation empowered the system to support three times the previous capacity, enhancing its overall resilience and performance.</Typography></li>
            <li> <Typography variant="body1" style={{ marginBottom: '10px' }}>I designed and led the implementation of a multi-million-dollar cost-saving idea for a major US-based client. Through this initiative, I was able to save more than 10 million USD in license costs by creating a product that replaced industry-leading ETL software without impacting system performance.</Typography></li>
            <li> <Typography variant="body1" style={{ marginBottom: '10px' }}>I lead the design and development of a sophisticated binary linkage analyzer to streamline product complexity. This product was meticulously crafted to identify redundant linked subtrees during the build process and propose their elimination, resulting in a leaner and quicker system startup, as well as a reduction in overall ecosystem storage requirements.</Typography></li>
          </ul>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MainContent
