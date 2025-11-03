import * as React from "react"
import { Box, Typography, Grid, Paper } from "@mui/material";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & GenAI",
      skills: [
        "AI Ecosystem Architecture",
        "Domain-Enriched AI",
        "Agentic AI",
        "Model Context Protocol",
        "GenAI Strategy",
        "Prompt Engineering",
        "RAG Architecture",
        "Vector Databases",
        "LangChain",
        "OpenAI API"
      ]
    },
    {
      title: "Telecom BSS Domain",
      skills: [
        "Telecom BSS Modernization",
        "Billing Systems",
        "Revenue Management",
        "Order Management Systems",
        "Customer 360",
        "CRM Integration",
        "Rating and Charging",
        "Convergent Billing",
        "Mediation Systems"
      ]
    },
    {
      title: "Architecture & Cloud",
      skills: [
        "Enterprise Architecture",
        "Cloud-Native Architecture",
        "Software Architecture",
        "Microservices Architecture",
        "Event-Driven Architecture",
        "Distributed Systems",
        "API Design",
        "RESTful Services",
        "Message Queue Architecture"
      ]
    },
    {
      title: "Technologies & Platforms",
      skills: [
        "Kubernetes",
        "Docker",
        "Kafka",
        "Couchbase",
        "Redis",
        "Oracle Tuxedo",
        "Amdocs Ensemble",
        "PostgreSQL",
        "AWS",
        "Cloud Migration"
      ]
    },
    {
      title: "DevOps & Languages",
      skills: [
        "CI/CD Pipelines",
        "DevOps",
        "GitLab CI/CD",
        "Jenkins",
        "Infrastructure as Code",
        "Java",
        "Golang",
        "C",
        "Python"
      ]
    },
    {
      title: "Leadership & Strategy",
      skills: [
        "Digital Transformation",
        "Cost Optimization",
        "Technical Leadership",
        "Agile Architecture"
      ]
    }
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        padding: { xs: '30px 20px', md: '50px 40px' },
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      }}
      id="skills"
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: '2.2em',
          marginBottom: 3,
          color: '#667eea',
          borderBottom: '3px solid #667eea',
          paddingBottom: 2,
        }}
      >
        Technical Skills
      </Typography>

      {skillCategories.map((category, index) => (
        <Box key={index} sx={{ marginBottom: 5 }}>
          <Typography
            variant="h5"
            sx={{
              marginTop: 4,
              marginBottom: 3,
              fontWeight: 600,
            }}
          >
            {category.title}
          </Typography>
          <Grid container spacing={2}>
            {category.skills.map((skill, skillIndex) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={skillIndex}>
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                    padding: '15px 20px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    fontWeight: 600,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 5px 15px rgba(102, 126, 234, 0.3)',
                    },
                  }}
                >
                  {skill}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Paper>
  );
}

export default Skills

