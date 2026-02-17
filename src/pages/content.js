import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Typography } from "@mui/material"
import profilePhoto from "../images/bhanupatial.jpeg"

/* ─── Color Constants ─── */
const TEAL = "#1a8aaa"
const TEAL_DARK = "#0d6e84"
const SIDEBAR_BG_TOP = "#dce6ec"
const SIDEBAR_BG_BOTTOM = "#b8ced8"
const TEXT_DARK = "#333333"
const TEXT_BODY = "#444444"

/* ─── Sidebar Section Header ─── */
const SidebarSectionHeader = ({ children }) => (
  <Typography
    sx={{
      fontSize: "0.95rem",
      fontWeight: 700,
      color: TEAL,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      mb: 1.5,
      pb: 0.8,
      borderBottom: `2px solid ${TEAL}`,
    }}
  >
    {children}
  </Typography>
)

/* ─── Main Section Header ─── */
const MainSectionHeader = ({ children }) => (
  <Typography
    sx={{
      fontSize: "1.1rem",
      fontWeight: 700,
      color: TEAL,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      mb: 2,
      pb: 0.8,
      borderBottom: `2px solid ${TEAL}`,
    }}
  >
    {children}
  </Typography>
)

/* ─── Contact Box ─── */
const ContactBox = ({ links }) => {
  if (!links?.length) return null

  const phoneLink = links.find((l) => l.href?.startsWith("tel:"))
  const emailLink = links.find((l) => l.href?.startsWith("mailto:"))

  const phoneDisplay = phoneLink
    ? phoneLink.href.replace("tel:", "").replace(/\+(\d{2})(\d{3})(\d{3})(\d{4})/, "+$1-$2-$3-$4")
    : null
  const emailDisplay = emailLink
    ? emailLink.href.replace("mailto:", "")
    : null

  return (
    <Box
      sx={{
        border: `2px solid ${TEAL}`,
        borderRadius: 1,
        p: 1.5,
        minWidth: 200,
      }}
    >
      <Typography
        sx={{
          fontSize: "0.7rem",
          fontWeight: 700,
          color: TEAL,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          mb: 1,
          textAlign: "right",
        }}
      >
        Contact
      </Typography>
      {phoneDisplay && (
        <Box sx={{ mb: 0.5 }}>
          <Typography
            sx={{
              fontSize: "0.72rem",
              fontWeight: 600,
              color: TEAL,
              textAlign: "right",
            }}
          >
            PHONE:
          </Typography>
          <Typography
            component="a"
            href={phoneLink.href}
            sx={{
              fontSize: "0.78rem",
              color: TEXT_DARK,
              textAlign: "right",
              display: "block",
              textDecoration: "none",
            }}
          >
            {phoneDisplay}
          </Typography>
        </Box>
      )}
      {emailDisplay && (
        <Box>
          <Typography
            sx={{
              fontSize: "0.72rem",
              fontWeight: 600,
              color: TEAL,
              textAlign: "right",
            }}
          >
            EMAIL:
          </Typography>
          <Typography
            component="a"
            href={emailLink.href}
            sx={{
              fontSize: "0.78rem",
              color: TEAL,
              textAlign: "right",
              display: "block",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {emailDisplay}
          </Typography>
        </Box>
      )}
    </Box>
  )
}

/* ─── Profile Section (Sidebar) ─── */
const ProfileSection = ({ tagline, aboutHtml }) => {
  if (!tagline && !aboutHtml) return null
  return (
    <Box sx={{ mb: 3 }}>
      <SidebarSectionHeader>Profile</SidebarSectionHeader>
      {aboutHtml && (
        <Typography
          component="div"
          sx={{
            fontSize: "0.82rem",
            color: TEXT_BODY,
            lineHeight: 1.65,
            textAlign: "justify",
            "& p": { m: 0 },
          }}
          dangerouslySetInnerHTML={{ __html: aboutHtml }}
        />
      )}
    </Box>
  )
}

/* ─── Education Section (Sidebar) ─── */
const EducationSection = ({ education }) => {
  if (!education?.length) return null
  return (
    <Box sx={{ mb: 3 }}>
      <SidebarSectionHeader>Education</SidebarSectionHeader>
      {education.map((edu, i) => (
        <Box key={i} sx={{ mb: 1.5 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "0.82rem",
                color: TEXT_DARK,
                lineHeight: 1.3,
                flex: 1,
              }}
            >
              {edu.degree}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.78rem",
                color: TEXT_BODY,
                fontWeight: 500,
                whiteSpace: "nowrap",
                ml: 1,
              }}
            >
              {edu.years}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "0.78rem",
              color: TEAL,
              fontWeight: 600,
              lineHeight: 1.4,
            }}
          >
            {edu.institution}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

/* ─── Achievements Section (Sidebar) ─── */
const AchievementsSection = ({ impact }) => {
  if (!impact?.length) return null
  return (
    <Box sx={{ mb: 3 }}>
      <SidebarSectionHeader>Achievements and Innovation</SidebarSectionHeader>
      {impact.map((item, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mb: 1.5,
            gap: 1,
          }}
        >
          <Typography
            sx={{
              color: TEAL,
              fontSize: "0.7rem",
              lineHeight: 1.8,
              flexShrink: 0,
            }}
          >
            &#9658;
          </Typography>
          <Typography
            sx={{
              fontSize: "0.78rem",
              color: TEXT_BODY,
              lineHeight: 1.6,
              textAlign: "justify",
            }}
          >
            {item}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

/* ─── Skills Section (Main) ─── */
const SkillsSection = ({ skills, expertise }) => {
  // Use expertise for paragraph-style display (matching the resume image)
  // and skills for detailed tag-style listing
  const hasExpertise = expertise?.length > 0
  const hasSkills = skills?.length > 0

  if (!hasExpertise && !hasSkills) return null

  return (
    <Box sx={{ mb: 3.5 }}>
      <MainSectionHeader>Skills</MainSectionHeader>

      {/* Expertise as paragraph-style entries */}
      {hasExpertise &&
        expertise.map((item, i) => (
          <Box key={`exp-${i}`} sx={{ mb: 1.5 }}>
            <Typography
              component="span"
              sx={{ fontSize: "0.88rem", fontWeight: 700, color: TEXT_DARK }}
            >
              {item.title}:
            </Typography>{" "}
            <Typography
              component="span"
              sx={{ fontSize: "0.85rem", color: TEXT_BODY, lineHeight: 1.65 }}
            >
              {item.content}
            </Typography>
          </Box>
        ))}

      {/* Skills as grouped listings */}
      {hasSkills &&
        skills.map((category, i) => (
          <Box key={`skill-${i}`} sx={{ mb: 1.5 }}>
            <Typography
              component="span"
              sx={{ fontSize: "0.88rem", fontWeight: 700, color: TEXT_DARK }}
            >
              {category.title}:
            </Typography>{" "}
            <Typography
              component="span"
              sx={{ fontSize: "0.85rem", color: TEXT_BODY, lineHeight: 1.65 }}
            >
              {(category.items || []).join(", ")}
            </Typography>
          </Box>
        ))}
    </Box>
  )
}

/* ─── Work Experience Section (Main) ─── */
const detailKeys = [
  "initiatives",
  "buildSystem",
  "security",
  "achievements",
  "deliverables",
  "focus",
]

const ExperienceSection = ({ experience }) => {
  if (!experience?.length) return null
  return (
    <Box sx={{ mb: 3 }}>
      <MainSectionHeader>Work Experience</MainSectionHeader>
      {experience.map((job, i) => (
        <Box key={i} sx={{ mb: 3 }}>
          {/* Company and Duration */}
          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              flexWrap: "wrap",
              gap: 0.8,
              mb: 0.3,
            }}
          >
            <Typography
              sx={{ fontWeight: 700, fontSize: "0.9rem", color: TEXT_DARK }}
            >
              {job.company}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.8rem",
                color: TEXT_BODY,
                fontStyle: "italic",
              }}
            >
              ({job.duration})
            </Typography>
          </Box>

          {/* Title */}
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "0.88rem",
              color: TEAL_DARK,
              mb: 0.5,
            }}
          >
            {job.title}
          </Typography>

          {/* Description */}
          {job.description && (
            <Typography
              sx={{
                fontSize: "0.83rem",
                color: TEXT_BODY,
                lineHeight: 1.65,
                mb: 0.8,
              }}
            >
              {job.description}
            </Typography>
          )}

          {/* Detail bullet points from all possible keys */}
          {detailKeys.map((key) => {
            if (!job[key]?.length) return null
            return (
              <Box key={key} component="ul" sx={{ pl: 3, m: 0, mb: 0.5 }}>
                {job[key].map((item, j) => (
                  <Box
                    component="li"
                    key={j}
                    sx={{
                      fontSize: "0.83rem",
                      color: TEXT_BODY,
                      lineHeight: 1.6,
                      mb: 0.4,
                      listStyleType: '"\\25CB  "',
                      pl: 0.5,
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Box>
            )
          })}

          {/* Impact note */}
          {job.impactNote && (
            <Typography
              sx={{
                fontSize: "0.83rem",
                color: TEXT_BODY,
                fontStyle: "italic",
                mt: 0.5,
              }}
            >
              <Box
                component="span"
                sx={{ fontWeight: 700, color: TEXT_DARK }}
              >
                Impact:{" "}
              </Box>
              {job.impactNote}
            </Typography>
          )}

          {/* Technologies */}
          {job.technologies?.length > 0 && (
            <Typography sx={{ fontSize: "0.82rem", color: "#64748b", mt: 0.5 }}>
              <Box
                component="span"
                sx={{ fontWeight: 600, color: TEXT_BODY }}
              >
                Technologies:{" "}
              </Box>
              {job.technologies.join(" · ")}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  )
}

/* ─── Main Page ─── */
const ContentPage = () => {
  const data = useStaticQuery(graphql`
    query ProfileContent {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "profile" } } }
        limit: 1
      ) {
        nodes {
          html
          frontmatter {
            name
            role
            tagline
            metrics {
              value
              label
            }
            links {
              label
              href
            }
            education {
              degree
              institution
              years
            }
            about {
              highlights {
                title
                content
                items {
                  label
                  text
                }
              }
              expertise {
                title
                content
              }
              impact
            }
            experience {
              title
              company
              duration
              description
              initiatives
              buildSystem
              security
              achievements
              impactNote
              deliverables
              focus
              technologies
            }
            skills {
              title
              items
            }
            cta {
              title
              items
              buttons {
                label
                href
              }
              closing
            }
            footer {
              copyright
              links {
                label
                href
              }
            }
          }
        }
      }
    }
  `)

  const node = data?.allMarkdownRemark?.nodes?.[0]
  const fm = node?.frontmatter || {}
  const aboutHtml = node?.html || null

  return (
    <Box
      sx={{
        backgroundColor: "#e8e8e8",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        py: { xs: 0, md: 2 },
      }}
    >
      {/* Resume Container */}
      <Box
        sx={{
          maxWidth: 1050,
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          minHeight: { md: "auto" },
          boxShadow: { md: "0 0 30px rgba(0,0,0,0.1)" },
        }}
      >
        {/* ─── Left Sidebar ─── */}
        <Box
          sx={{
            width: { xs: "100%", md: "35%" },
            flexShrink: 0,
            background: `linear-gradient(180deg, ${SIDEBAR_BG_TOP} 0%, ${SIDEBAR_BG_BOTTOM} 100%)`,
            p: { xs: 3, md: 3 },
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Photo */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 3,
              mt: 1,
            }}
          >
            <Box
              component="img"
              src={profilePhoto}
              alt={fm.name || "Profile Photo"}
              sx={{
                width: 150,
                height: 150,
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid rgba(255,255,255,0.7)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              }}
            />
          </Box>

          {/* Profile Section */}
          <ProfileSection tagline={fm.tagline} aboutHtml={aboutHtml} />

          {/* Education Section */}
          <EducationSection education={fm.education} />

          {/* Achievements Section */}
          <AchievementsSection impact={fm.about?.impact} />
        </Box>

        {/* ─── Right Main Content ─── */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* ─── Name Header ─── */}
          <Box
            sx={{
              p: { xs: 3, md: 4 },
              pb: { xs: 2, md: 3 },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {/* Name & Role */}
            <Box sx={{ flex: 1, minWidth: 250 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2rem", md: "2.6rem" },
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: TEAL,
                  mb: 0.5,
                  fontFamily:
                    "'Georgia', 'Times New Roman', 'Palatino Linotype', serif",
                }}
              >
                {fm.name || ""}
              </Typography>
              {fm.role && (
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", md: "1.15rem" },
                    fontWeight: 400,
                    color: "#666",
                    mt: 0.5,
                  }}
                >
                  {fm.role}
                </Typography>
              )}
            </Box>

            {/* Contact Box */}
            <ContactBox links={fm.links} />
          </Box>

          {/* ─── Content Area ─── */}
          <Box
            sx={{
              px: { xs: 3, md: 4 },
              pb: { xs: 3, md: 4 },
              flex: 1,
            }}
          >
            {/* Skills */}
            <SkillsSection
              skills={fm.skills}
              expertise={fm.about?.expertise}
            />

            {/* Work Experience */}
            <ExperienceSection experience={fm.experience} />

            {/* CTA Section */}
            {fm.cta && (
              <Box sx={{ mb: 3 }}>
                <MainSectionHeader>
                  {fm.cta.title || "Let's Connect"}
                </MainSectionHeader>
                {fm.cta.items?.length > 0 && (
                  <Box component="ul" sx={{ pl: 3, m: 0, mb: 1.5 }}>
                    {fm.cta.items.map((item, i) => (
                      <Box
                        component="li"
                        key={i}
                        sx={{
                          fontSize: "0.83rem",
                          color: TEXT_BODY,
                          lineHeight: 1.6,
                          mb: 0.3,
                          listStyleType: '"\\25CB  "',
                          pl: 0.5,
                        }}
                      >
                        {item}
                      </Box>
                    ))}
                  </Box>
                )}
                {fm.cta.closing && (
                  <Typography
                    sx={{
                      fontSize: "0.83rem",
                      color: "#64748b",
                      fontStyle: "italic",
                    }}
                  >
                    {fm.cta.closing}
                  </Typography>
                )}
              </Box>
            )}
          </Box>

          {/* Footer */}
          {fm.footer?.copyright && (
            <Box
              sx={{
                py: 1.5,
                px: 4,
                textAlign: "center",
                borderTop: "1px solid #e2e8f0",
                backgroundColor: "#fafafa",
              }}
            >
              <Typography sx={{ color: "#94a3b8", fontSize: "0.75rem" }}>
                {fm.footer.copyright}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default ContentPage
