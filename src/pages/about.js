import * as React from "react"
import { Box, Typography, Grid, Paper } from "@mui/material";

const About = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        padding: { xs: '30px 20px', md: '50px 40px' },
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      }}
      id="about"
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
        About
      </Typography>

      <Typography
        sx={{
          fontSize: '1.2em',
          lineHeight: 1.8,
          marginBottom: 5,
          color: '#444',
        }}
      >
        I architect AI ecosystems that inject telecom BSS domain expertise into every developer interaction. Leading AI strategy for a major engineering unit, I'm building domain-enriched AI using agentic orchestration, Model Context Protocol (MCP), and persistent memory—transforming generic AI suggestions into accurate, context-aware, enterprise-grade solutions.
      </Typography>

      <Box
        sx={{
          background: '#f8f9ff',
          padding: 4,
          borderRadius: '8px',
          marginBottom: 4,
          borderLeft: '4px solid #667eea',
        }}
      >
        <Typography variant="h5" sx={{ marginTop: 0, color: '#667eea', marginBottom: 2 }}>
          My Unfair Advantage
        </Typography>
        <Typography>
          My 18-year journey from hands-on developer → Senior SME → Software Architect → AI Strategist means I understand what developers truly need at every career stage because I've lived every phase. The best AI architects for SDLC are those who've written production code, debugged legacy systems, scaled platforms, and made architectural decisions.
        </Typography>
      </Box>

      <Box
        sx={{
          background: '#f8f9ff',
          padding: 4,
          borderRadius: '8px',
          marginBottom: 4,
          borderLeft: '4px solid #667eea',
        }}
      >
        <Typography variant="h5" sx={{ marginTop: 0, color: '#667eea', marginBottom: 2 }}>
          Domain-Enriched AI Approach
        </Typography>
        <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
          {[
            { label: '2+ years', text: 'systematically evaluating: Junie, GitHub Copilot, Windsurf, Cursor' },
            { label: 'Key Insight:', text: 'Generic AI fails in specialized domains like telecom BSS' },
            { label: 'My Solution:', text: 'Intelligence layer enriching prompts with telecom BSS patterns, Amdocs best practices, billing workflows, architectural guardrails' },
            { label: 'Result:', text: 'Any AI tool becomes exponentially more valuable for telecom digital transformation' }
          ].map((item, index) => (
            <Box
              component="li"
              key={index}
              sx={{
                padding: '8px 0',
                position: 'relative',
                paddingLeft: '25px',
                '&:before': {
                  content: '"▪"',
                  position: 'absolute',
                  left: 0,
                  color: '#667eea',
                  fontWeight: 'bold',
                  fontSize: '1.5em',
                },
              }}
            >
              <strong>{item.label}</strong> {item.text}
            </Box>
          ))}
        </Box>
      </Box>

      <Typography variant="h5" sx={{ marginTop: 4, marginBottom: 3 }}>
        Technical Expertise
      </Typography>
      <Grid container spacing={2} sx={{ marginBottom: 4 }}>
        {[
          { title: 'BSS Platforms', content: 'Oracle Tuxedo, Amdocs Ensemble' },
          { title: 'Cloud-Native', content: 'Kubernetes, Kafka, Couchbase, Microservices' },
          { title: 'Languages', content: 'C, Java, Golang, Python' },
          { title: 'DevOps', content: 'CI/CD, Container Orchestration' },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.13) 0%, rgba(118, 75, 162, 0.13) 100%)',
                padding: 2.5,
                borderRadius: '8px',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontWeight: 'bold', fontSize: '1.8em', color: '#667eea', marginBottom: 1 }}>
                {item.title}
              </Typography>
              <Typography>{item.content}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" sx={{ marginTop: 4, marginBottom: 2 }}>
        Proven Business Impact
      </Typography>
      <Box
        sx={{
          background: '#f8f9ff',
          padding: 4,
          borderRadius: '8px',
          borderLeft: '4px solid #667eea',
        }}
      >
        <Box component="ul" sx={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
          {[
            'Multi-million-dollar cost reduction - ETL replacement for Amdocs Billing',
            '3x capacity increase - Transformed Amdocs Ensemble platform scalability',
            '32% defect reduction - Shift-left strategies in single PI',
            'Platform modernization - HP-ia64 to x86_64 migration',
            'Infrastructure expertise - Datacenter design, cloud migration (AWS)',
          ].map((item, index) => (
            <Box
              component="li"
              key={index}
              sx={{
                padding: '8px 0',
                position: 'relative',
                paddingLeft: '25px',
                '&:before': {
                  content: '"✓"',
                  position: 'absolute',
                  left: 0,
                  color: '#667eea',
                  fontWeight: 'bold',
                  fontSize: '1.2em',
                },
              }}
            >
              <strong>{item.split(' - ')[0]}</strong> - {item.split(' - ')[1]}
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
}

export default About

