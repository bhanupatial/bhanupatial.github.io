import React from "react"
import { Box, Typography } from "@mui/material"

const sectionHeaderSx = {
  fontSize: '1.1rem',
  fontWeight: 700,
  color: '#4a6cf7',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  pb: 1,
  mb: 2.5,
  borderBottom: '2px solid #4a6cf7',
}

const detailKeys = [
  "initiatives",
  "buildSystem",
  "security",
  "achievements",
  "deliverables",
  "focus",
]

const JobEntry = ({ job }) => {
  return (
    <Box sx={{ mb: 3.5 }}>
      {/* Job Title & Company */}
      <Typography sx={{
        fontWeight: 700,
        fontSize: '1rem',
        color: '#1e293b',
        lineHeight: 1.3,
      }}>
        {job.title}, {job.company}
      </Typography>

      {/* Duration */}
      <Typography sx={{
        fontSize: '0.82rem',
        color: '#4a6cf7',
        fontWeight: 500,
        mb: 1,
      }}>
        {job.duration}
      </Typography>

      {/* Description */}
      {job.description && (
        <Typography sx={{
          fontSize: '0.85rem',
          color: '#475569',
          lineHeight: 1.65,
          mb: 1,
        }}>
          {job.description}
        </Typography>
      )}

      {/* Detail bullet points */}
      {detailKeys.map(key => {
        if (!job[key]?.length) return null
        return (
          <Box key={key} component="ul" sx={{ pl: 2.5, m: 0, mb: 0.5 }}>
            {job[key].map((item, i) => (
              <Box component="li" key={i} sx={{
                fontSize: '0.84rem',
                color: '#475569',
                lineHeight: 1.6,
                mb: 0.3,
                '&::marker': { color: '#4a6cf7' },
              }}>
                {item}
              </Box>
            ))}
          </Box>
        )
      })}

      {/* Impact note */}
      {job.impactNote && (
        <Typography sx={{
          fontSize: '0.84rem',
          color: '#475569',
          fontStyle: 'italic',
          mt: 0.5,
        }}>
          <Box component="span" sx={{ fontWeight: 700, color: '#1e293b' }}>Impact: </Box>
          {job.impactNote}
        </Typography>
      )}

      {/* Technologies */}
      {job.technologies?.length > 0 && (
        <Typography sx={{ fontSize: '0.82rem', color: '#64748b', mt: 0.5 }}>
          <Box component="span" sx={{ fontWeight: 600, color: '#475569' }}>Technologies: </Box>
          {job.technologies.join(' · ')}
        </Typography>
      )}
    </Box>
  )
}

const MainContent = ({ experience }) => {
  if (!experience?.length) return null
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" sx={sectionHeaderSx}>
        Work Experience
      </Typography>

      {experience.map((job, index) => (
        <JobEntry key={index} job={job} />
      ))}
    </Box>
  )
}

export default MainContent
