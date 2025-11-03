import * as React from "react"
import { Box, Typography, Chip, Paper } from '@mui/material';

const MainContent = () => {
  const jobs = [
    {
      title: "Lead Software Architect",
      company: "Amdocs",
      duration: "Nov 2022 - Present · 3 yrs",
      description: "Leading AI transformation strategy for 500+ engineering unit building next-generation telecom BSS platforms. Architecting domain-enriched AI ecosystem that solves the core challenge: generic AI tools lack specialized domain knowledge.",
      initiatives: [
        "Built intelligent orchestration layer using Agentic AI, Model Context Protocol (MCP), and persistent memory to inject telecom BSS patterns into developer workflows",
        "Evaluated 4+ AI coding assistants (Cursor, GitHub Copilot, Windsurf, Junie) over 2 years to understand gaps in specialized domains",
        "Architected knowledge injection system enriching AI prompts with: Amdocs best practices, billing workflows, order orchestration patterns, revenue management logic, architectural guardrails",
        "Created reusable AI tooling frameworks enabling any generic AI tool to become domain-expert for telecom digital transformation",
      ],
      impact: [
        "Positioned to accelerate developer productivity 3-5x through context-aware AI assistance",
        "Reducing onboarding time for new engineers by providing instant access to 18+ years of accumulated BSS domain knowledge",
        "Establishing AI governance frameworks ensuring enterprise-grade code quality and architectural consistency",
      ],
      technologies: ["Agentic AI", "Model Context Protocol", "RAG Architecture", "Vector Databases", "Kubernetes", "Kafka"],
    },
    {
      title: "System Architect",
      company: "Netcracker Technology",
      duration: "Jun 2021 - Nov 2022 · 1 yr 6 mos",
      description: "Led strategic technical evaluations and security architecture initiatives for leading BSS solutions serving global telecom operators.",
      buildSystem: [
        "Evaluated Bazel build system as replacement for legacy make-based build infrastructure for enterprise BSS platform",
        "Conducted comprehensive analysis of build performance, dependency management, and scalability across large-scale codebase",
        "Assessed migration path, tooling compatibility, and developer workflow impact for production environments",
      ],
      security: [
        "Identified and analyzed security vulnerabilities across BSS solution components",
        "Designed and executed POCs for security remediation with enhanced authentication architecture",
        "Proposed tight authentication frameworks addressing enterprise security requirements and compliance standards",
      ],
      technologies: [],
    },
    {
      title: "Software Architect",
      company: "Amdocs",
      duration: "Jan 2019 - May 2021 · 2 yrs 5 mos",
      description: "Led platform transformation of mission-critical Amdocs Billing infrastructure from HP-ia64 to x86_64 for a major Tier 1 US telecom operator—a multi-million-dollar modernization powering millions of subscribers and billions in annual revenue.",
      achievements: [
        "Created foundational architecture for large-scale platform portability spanning multiple Amdocs Billing products across 5 product lines",
        "Led architectural decisions ensuring consistency and reusability; influenced product evolution using deep billing domain expertise",
        "Designed zero-downtime migration approach maintaining 99.99% availability for production systems",
        "Researched, evaluated, and prototyped new methodologies and technologies for distributed billing systems",
        "Provided technical expertise on performance, scalability, reliability, and maintainability",
        "Shaped best practice guidelines and production-ready solutions adopted across engineering organization",
      ],
      impactNote: "Multi-million cost reduction (eliminated HP-ia64 licensing), accelerated delivery cycles, opened path to cloud migration (AWS/Azure)",
      technologies: [],
    },
    {
      title: "Software Engineering Specialist",
      company: "Amdocs",
      duration: "Oct 2013 - Dec 2018 · 5 yrs 3 mos",
      description: "Senior technical contributor for Amdocs Billing platform, driving performance optimization and system scalability initiatives that delivered measurable business impact.",
      deliverables: [
        "Architected ETL replacement solution reducing data processing costs by millions annually",
        "Achieved 3x capacity increase for Amdocs Ensemble platform through systematic performance engineering",
        "Led technical integration initiatives across 4 product teams, establishing interface design standards",
        "Delivered 32% defect reduction in single Program Increment through shift-left testing strategies",
      ],
      focus: [
        "Core technologies: Oracle Tuxedo, C, Java, enterprise integration patterns",
        "Specialized in high-throughput transaction processing, real-time billing engines, database optimization",
        "Served as technical authority for critical production issues affecting tier-1 telecom operators",
      ],
      technologies: [],
    },
    {
      title: "Senior Subject Matter Expert",
      company: "Amdocs",
      duration: "Jan 2008 - Sep 2013 · 5 yrs 9 mos",
      description: "Subject matter expert for Amdocs Billing core engine, responsible for critical components powering real-time rating, charging, and billing operations for major telecom operators.",
      achievements: [
        "Mastered Oracle Tuxedo architecture and C-based transaction processing frameworks",
        "Designed and implemented high-performance billing algorithms processing millions of CDRs daily",
        "Provided technical expertise for production escalations requiring deep system knowledge",
        "Built foundation expertise in telecom BSS domain that became cornerstone of future architectural decisions",
      ],
      technologies: [],
    },
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
      id="experience"
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
        Work Experience
      </Typography>

      {jobs.map((job, index) => (
        <Box
          key={index}
          sx={{
            marginBottom: 6,
            paddingBottom: 4,
            borderBottom: index !== jobs.length - 1 ? '1px solid #eee' : 'none',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 2,
              flexWrap: 'wrap',
              gap: 1,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '1.6em',
                  color: '#333',
                  fontWeight: 700,
                }}
              >
                {job.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.2em',
                  color: '#667eea',
                  fontWeight: 600,
                }}
              >
                {job.company}
              </Typography>
            </Box>
            <Typography sx={{ color: '#666', fontStyle: 'italic' }}>
              {job.duration}
            </Typography>
          </Box>

          <Typography sx={{ marginBottom: 2, fontWeight: 500 }}>
            {job.description}
          </Typography>

          {job.initiatives && (
            <>
              <Typography variant="h6" sx={{ fontSize: '1.1em', color: '#666', marginBottom: 1, marginTop: 2, fontWeight: 600 }}>
                Key Initiatives:
              </Typography>
              <Box component="ul" sx={{ marginTop: 2, paddingLeft: 2.5 }}>
                {job.initiatives.map((item, i) => (
                  <Box component="li" key={i} sx={{ marginBottom: 1.5, lineHeight: 1.7 }}>
                    <Typography>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </>
          )}

          {job.impact && (
            <>
              <Typography variant="h6" sx={{ fontSize: '1.1em', color: '#666', marginBottom: 1, marginTop: 2, fontWeight: 600 }}>
                Business Impact:
              </Typography>
              <Box component="ul" sx={{ marginTop: 2, paddingLeft: 2.5 }}>
                {job.impact.map((item, i) => (
                  <Box component="li" key={i} sx={{ marginBottom: 1.5, lineHeight: 1.7 }}>
                    <Typography>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </>
          )}

          {job.buildSystem && (
            <>
              <Typography variant="h6" sx={{ fontSize: '1.1em', color: '#666', marginBottom: 1, marginTop: 2, fontWeight: 600 }}>
                Build System Modernization:
              </Typography>
              <Box component="ul" sx={{ marginTop: 2, paddingLeft: 2.5 }}>
                {job.buildSystem.map((item, i) => (
                  <Box component="li" key={i} sx={{ marginBottom: 1.5, lineHeight: 1.7 }}>
                    <Typography>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </>
          )}

          {job.security && (
            <>
              <Typography variant="h6" sx={{ fontSize: '1.1em', color: '#666', marginBottom: 1, marginTop: 2, fontWeight: 600 }}>
                Security Architecture:
              </Typography>
              <Box component="ul" sx={{ marginTop: 2, paddingLeft: 2.5 }}>
                {job.security.map((item, i) => (
                  <Box component="li" key={i} sx={{ marginBottom: 1.5, lineHeight: 1.7 }}>
                    <Typography>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </>
          )}

          {job.achievements && !job.impactNote && (
            <>
              <Box component="ul" sx={{ marginTop: 2, paddingLeft: 2.5 }}>
                {job.achievements.map((item, i) => (
                  <Box component="li" key={i} sx={{ marginBottom: 1.5, lineHeight: 1.7 }}>
                    <Typography>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </>
          )}

          {job.deliverables && (
            <>
              <Typography variant="h6" sx={{ fontSize: '1.1em', color: '#666', marginBottom: 1, marginTop: 2, fontWeight: 600 }}>
                Key Deliverables:
              </Typography>
              <Box component="ul" sx={{ marginTop: 2, paddingLeft: 2.5 }}>
                {job.deliverables.map((item, i) => (
                  <Box component="li" key={i} sx={{ marginBottom: 1.5, lineHeight: 1.7 }}>
                    <Typography>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </>
          )}

          {job.focus && (
            <>
              <Typography variant="h6" sx={{ fontSize: '1.1em', color: '#666', marginBottom: 1, marginTop: 2, fontWeight: 600 }}>
                Technical Focus:
              </Typography>
              <Box component="ul" sx={{ marginTop: 2, paddingLeft: 2.5 }}>
                {job.focus.map((item, i) => (
                  <Box component="li" key={i} sx={{ marginBottom: 1.5, lineHeight: 1.7 }}>
                    <Typography>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </>
          )}

          {job.impactNote && (
            <Typography sx={{ marginTop: 2, fontWeight: 500 }}>
              <strong>Impact:</strong> {job.impactNote}
            </Typography>
          )}

          {job.technologies && job.technologies.length > 0 && (
            <Box sx={{ marginTop: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {job.technologies.map((tech, i) => (
                <Chip
                  key={i}
                  label={tech}
                  sx={{
                    backgroundColor: '#667eea',
                    color: 'white',
                    fontSize: '0.9em',
                    fontWeight: 500,
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Paper>
  );
}

export default MainContent
