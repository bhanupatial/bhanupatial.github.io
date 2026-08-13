import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Typography, Tooltip, IconButton } from "@mui/material"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import FileDownloadIcon from "@mui/icons-material/FileDownload"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import profilePhoto from "../images/bhanupatial.jpeg"

/* ─── Nav sections ─── */
const NAV_LINKS = [
  { label: "About",      id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills",     id: "skills" },
  { label: "Education",  id: "education" },
]

/* ─── Per-category chip palette ─── */
const CHIP_COLORS = [
  { bg: "var(--chip-1-bg)", border: "var(--chip-1-border)", text: "var(--chip-1-text)" },
  { bg: "var(--chip-2-bg)", border: "var(--chip-2-border)", text: "var(--chip-2-text)" },
  { bg: "var(--chip-3-bg)", border: "var(--chip-3-border)", text: "var(--chip-3-text)" },
  { bg: "var(--chip-4-bg)", border: "var(--chip-4-border)", text: "var(--chip-4-text)" },
  { bg: "var(--chip-5-bg)", border: "var(--chip-5-border)", text: "var(--chip-5-text)" },
]

/* ─── keys that hold bullet arrays in an experience entry ─── */
const DETAIL_KEYS = ["initiatives", "buildSystem", "security", "achievements", "deliverables", "focus"]
/* ─── Reusable: Section heading with accent underbar ─── */
const SectionHeader = ({ children }) => (
  <Box sx={{ mb: 5 }}>
    <Typography
      component="h2"
      sx={{
        fontSize: { xs: "1.5rem", md: "1.875rem" },
        fontWeight: 800,
        color: "var(--text-primary)",
        letterSpacing: "-0.03em",
        lineHeight: 1.2,
        position: "relative",
        display: "inline-block",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -8,
          left: 0,
          width: 44,
          height: 4,
          borderRadius: 2,
          bgcolor: "var(--accent)",
        },
      }}
    >
      {children}
    </Typography>
  </Box>
)

/* ─── Reusable: Overline label ─── */
const Overline = ({ children }) => (
  <Typography
    sx={{
      fontSize: "0.75rem",
      fontWeight: 700,
      color: "var(--accent)",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      mb: 1.5,
    }}
  >
    {children}
  </Typography>
)

/* ─── Reusable: Card wrapper ─── */
const Card = ({ children, sx = {} }) => (
  <Box
    className="print-card"
    sx={{
      bgcolor: "var(--bg-card)",
      border: "1px solid var(--border)",
      borderRadius: 2.5,
      p: { xs: 2.5, md: 3 },
      boxShadow: "var(--shadow-sm)",
      transition: "box-shadow 0.2s, border-color 0.2s",
      "&:hover": { boxShadow: "var(--shadow-md)", borderColor: "var(--accent-border)" },
      ...sx,
    }}
  >
    {children}
  </Box>
)

/* ─────────────────────────────────────────────────
   STICKY NAVIGATION
───────────────────────────────────────────────── */
const StickyNav = ({ name, isDark, onToggle }) => {
  const [scrolled, setScrolled]       = useState(false)
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [active, setActive]           = useState("")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      for (const { id } of [...NAV_LINKS].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 80) { setActive(id); return }
      }
      setActive("")
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const navTextColor = (id) => {
    const isActive = active === id
    return scrolled
      ? isActive ? "var(--accent)" : "var(--text-secondary)"
      : isActive ? "#38bdf8"       : "rgba(255,255,255,0.80)"
  }

  return (
    <>
      <Box
        component="nav"
        className="no-print"
        sx={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: 64,
          display: "flex",
          alignItems: "center",
          px: { xs: 2, sm: 3, md: 5 },
          gap: 2,
          backgroundColor: scrolled ? "var(--bg-nav)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          transition: "background-color 0.3s, border-color 0.3s",
        }}
      >
        {/* Brand initials */}
        <Typography
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          sx={{
            fontSize: "1.0625rem",
            fontWeight: 800,
            color: scrolled ? "var(--accent)" : "#ffffff",
            letterSpacing: "0.02em",
            cursor: "pointer",
            mr: "auto",
            userSelect: "none",
            transition: "color 0.3s",
          }}
        >
          {(name || "").split(" ").map(w => w[0]).join("").slice(0, 2)}
        </Typography>

        {/* Desktop links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.25 }}>
          {NAV_LINKS.map(({ label, id }) => (
            <Box
              key={id}
              component="button"
              onClick={() => scrollTo(id)}
              sx={{
                px: 1.75, py: 0.625,
                fontSize: "0.875rem",
                fontWeight: active === id ? 600 : 400,
                color: navTextColor(id),
                background: "none",
                border: "none",
                borderRadius: 1.5,
                cursor: "pointer",
                transition: "color 0.2s",
                "&:hover": { color: scrolled ? "var(--accent)" : "#ffffff" },
              }}
            >
              {label}
            </Box>
          ))}
        </Box>

        {/* Actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Tooltip title={isDark ? "Light mode" : "Dark mode"}>
            <IconButton
              onClick={onToggle}
              size="small"
              aria-label="Toggle dark mode"
              sx={{
                color: scrolled ? "var(--text-secondary)" : "rgba(255,255,255,0.80)",
                "&:hover": { color: "var(--accent)", bgcolor: "var(--accent-muted)" },
              }}
            >
              {isDark
                ? <LightModeIcon sx={{ fontSize: 19 }} />
                : <DarkModeIcon  sx={{ fontSize: 19 }} />}
            </IconButton>
          </Tooltip>

          <Box
            component="button"
            onClick={() => window.print()}
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              alignItems: "center",
              gap: 0.75,
              px: 2, py: 0.75,
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "var(--accent)",
              bgcolor: "var(--accent-muted)",
              border: "1px solid var(--accent-border)",
              borderRadius: 2,
              cursor: "pointer",
              transition: "all 0.2s",
              "&:hover": { bgcolor: "var(--accent)", color: "#fff", borderColor: "var(--accent)" },
            }}
          >
            <FileDownloadIcon sx={{ fontSize: "0.9375rem" }} />
            Resume
          </Box>

          <IconButton
            onClick={() => setMobileOpen(v => !v)}
            size="small"
            aria-label="Open menu"
            sx={{
              display: { xs: "flex", md: "none" },
              color: scrolled ? "var(--text-secondary)" : "rgba(255,255,255,0.90)",
            }}
          >
            {mobileOpen
              ? <CloseIcon  sx={{ fontSize: 20 }} />
              : <MenuIcon   sx={{ fontSize: 20 }} />}
          </IconButton>
        </Box>
      </Box>

      {/* Mobile drawer */}
      {mobileOpen && (
        <Box
          className="no-print"
          sx={{
            position: "fixed",
            top: 64, left: 0, right: 0,
            zIndex: 99,
            bgcolor: "var(--bg-card)",
            borderBottom: "1px solid var(--border)",
            boxShadow: "var(--shadow-lg)",
            px: 3, py: 2,
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            gap: 0.5,
          }}
        >
          {NAV_LINKS.map(({ label, id }) => (
            <Box
              key={id}
              component="button"
              onClick={() => scrollTo(id)}
              sx={{
                display: "block",
                textAlign: "left",
                px: 1, py: 1.25,
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: "var(--text-primary)",
                background: "none",
                border: "none",
                borderBottom: "1px solid var(--border)",
                cursor: "pointer",
                "&:hover": { color: "var(--accent)" },
              }}
            >
              {label}
            </Box>
          ))}
          <Box
            component="button"
            onClick={() => { window.print(); setMobileOpen(false) }}
            sx={{
              mt: 1.5, py: 1.25,
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--accent)",
              bgcolor: "var(--accent-muted)",
              border: "1px solid var(--accent-border)",
              borderRadius: 2,
              cursor: "pointer",
            }}
          >
            Download Resume PDF
          </Box>
        </Box>
      )}
    </>
  )
}

/* ─────────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────────── */
const HeroSection = ({ fm }) => {
  const linkedIn = fm.links?.find(l => l.label === "LinkedIn")
  const email    = fm.links?.find(l => l.href?.startsWith("mailto:"))

  return (
    <Box
      id="hero"
      sx={{
        minHeight: { xs: "100svh", md: "100vh" },
        background: "var(--bg-hero)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        pt: "64px",
        pb: { xs: 8, md: 10 },
        px: { xs: 3, sm: 4, md: 8 },
        position: "relative",
        overflow: "hidden",
        /* decorative glow circles */
        "&::before": {
          content: '""',
          position: "absolute",
          top: "15%", right: "-8%",
          width: { xs: 260, md: 500 },
          height: { xs: 260, md: 500 },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14,165,233,0.13) 0%, transparent 70%)",
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "8%", left: "2%",
          width: { xs: 180, md: 320 },
          height: { xs: 180, md: 320 },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: { xs: "flex-start", lg: "center" },
          gap: { xs: 6, lg: 10 },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Left: photo + identity + social ── */}
        <Box sx={{ flex: 1 }}>
          {/* Avatar */}
          <Box
            sx={{
              width: { xs: 140, md: 180, lg: 200 },
              height: { xs: 140, md: 180, lg: 200 },
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid rgba(56,189,248,0.50)",
              boxShadow: "0 0 0 9px rgba(56,189,248,0.10), 0 12px 40px rgba(0,0,0,0.45)",
              mb: 3.5,
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src={profilePhoto}
              alt={fm.name || "Profile photo"}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>

          {/* Name */}
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2.625rem", sm: "3.5rem", md: "4.25rem" },
              fontWeight: 800,
              lineHeight: 1.0,
              color: "#ffffff",
              letterSpacing: "-0.04em",
              mb: 1.25,
            }}
          >
            {fm.name || ""}
          </Typography>

          {/* Role */}
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.1875rem" },
              fontWeight: 400,
              color: "rgba(255,255,255,0.65)",
              mb: 2.5,
              letterSpacing: "0.01em",
            }}
          >
            {fm.role || ""}
          </Typography>

          {/* Tagline */}
          <Typography
            sx={{
              fontSize: { xs: "0.875rem", md: "0.9375rem" },
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.8,
              maxWidth: 560,
              mb: 4,
            }}
          >
            {fm.tagline || ""}
          </Typography>

          {/* Social links */}
          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
            {linkedIn && (
              <Box
                component="a"
                href={linkedIn.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2.5, py: 1,
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#38bdf8",
                  bgcolor: "rgba(56,189,248,0.10)",
                  border: "1px solid rgba(56,189,248,0.35)",
                  borderRadius: 2,
                  textDecoration: "none",
                  transition: "all 0.2s",
                  "&:hover": { bgcolor: "#0ea5e9", color: "#fff", borderColor: "#0ea5e9" },
                }}
              >
                <LinkedInIcon sx={{ fontSize: "1.0625rem" }} />
                LinkedIn
              </Box>
            )}
            {email && (
              <Box
                component="a"
                href={email.href}
                aria-label="Send email"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2.5, py: 1,
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.70)",
                  bgcolor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 2,
                  textDecoration: "none",
                  transition: "all 0.2s",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.12)", color: "#ffffff" },
                }}
              >
                <EmailIcon sx={{ fontSize: "1.0625rem" }} />
                Email
              </Box>
            )}
          </Box>
        </Box>

        {/* ── Right: metrics grid ── */}
        {fm.metrics?.length > 0 && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1.5,
              flexShrink: 0,
              width: { xs: "100%", sm: 320, lg: 340 },
            }}
          >
            {fm.metrics.map(({ value, label }, i) => (
              <Box
                key={i}
                sx={{
                  bgcolor: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 2.5,
                  p: { xs: 2.5, md: 3 },
                  textAlign: "center",
                  transition: "border-color 0.2s",
                  "&:hover": { borderColor: "rgba(56,189,248,0.35)" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.875rem", md: "2.375rem" },
                    fontWeight: 800,
                    color: "#38bdf8",
                    lineHeight: 1,
                    mb: 0.75,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {value}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.6875rem",
                    color: "rgba(255,255,255,0.50)",
                    textTransform: "uppercase",
                    letterSpacing: "0.09em",
                    fontWeight: 500,
                    lineHeight: 1.35,
                  }}
                >
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  )
}

/* ─────────────────────────────────────────────────
   ABOUT SECTION
───────────────────────────────────────────────── */
const AboutSection = ({ tagline, about }) => {
  const highlights = about?.highlights || []
  const expertise  = about?.expertise  || []
  const impact     = about?.impact     || []

  // Only the first prose highlight ("My Unfair Advantage") — item-card grids are cut
  const proseHighlight = highlights.find(h => h.content)

  if (!tagline && !proseHighlight && !expertise.length) return null

  return (
    <Box component="section" id="about" sx={{ pt: 10, pb: 6 }}>
      <SectionHeader>About</SectionHeader>

      {/* Tagline pull-quote */}
      {tagline && (
        <Box
          sx={{
            borderLeft: "4px solid var(--accent)",
            pl: 3, py: 0.5,
            mb: 5,
            bgcolor: "var(--accent-muted)",
            borderRadius: "0 12px 12px 0",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.0625rem", md: "1.1875rem" },
              fontStyle: "italic",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
            }}
          >
            {tagline}
          </Typography>
        </Box>
      )}

      {/* Single prose section */}
      {proseHighlight && (
        <Box sx={{ mb: 6 }}>
          <Overline>{proseHighlight.title}</Overline>
          <Typography sx={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.85 }}>
            {proseHighlight.content}
          </Typography>
        </Box>
      )}

      {/* Two-column: Domain Expertise left, Key Achievements right */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: { xs: 5, lg: 7 },
        }}
      >
        {expertise.length > 0 && (
          <Box>
            <Overline>Domain Expertise</Overline>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              {expertise.map((item, i) => (
                <Box key={i} sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                  <Box
                    sx={{
                      mt: "7px", flexShrink: 0,
                      width: 5, height: 5,
                      borderRadius: "50%",
                      bgcolor: "var(--accent)",
                      opacity: 0.8,
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)", mb: 0.3 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.7 }}
                    >
                      {item.content}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {impact.length > 0 && (
          <Box>
            <Overline>Key Achievements</Overline>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {impact.map((item, i) => (
                <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1.75 }}>
                  <Box
                    sx={{
                      mt: "9px", flexShrink: 0,
                      width: 6, height: 6,
                      borderRadius: "50%",
                      bgcolor: "var(--accent)",
                    }}
                  />
                  <Typography sx={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}

/* ─────────────────────────────────────────────────
   EXPERIENCE SECTION  (vertical timeline)
───────────────────────────────────────────────── */
const ExperienceSection = ({ experience }) => {
  if (!experience?.length) return null

  return (
    <Box component="section" id="experience" sx={{ pt: 10, pb: 6 }}>
      <SectionHeader>Experience</SectionHeader>

      <Box sx={{ position: "relative" }}>
        {/* Vertical rail — desktop only */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            left: 16,
            top: 10, bottom: 10,
            width: 2,
            bgcolor: "var(--border)",
            borderRadius: 1,
          }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {experience.map((job, i) => (
            <Box
              key={i}
              sx={{ display: "flex", alignItems: "flex-start", gap: { xs: 0, md: 4 } }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexShrink: 0,
                  width: 34, height: 34,
                  borderRadius: "50%",
                  bgcolor: "var(--bg-primary)",
                  border: "2px solid var(--accent)",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 1,
                  zIndex: 1,
                }}
              >
                <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "var(--accent)" }} />
              </Box>

              {/* Card */}
              <Card sx={{ flex: 1 }}>
                {/* Header */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 1,
                    mb: 1.25,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "1.1875rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        lineHeight: 1.3,
                      }}
                    >
                      {job.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "var(--accent)",
                        mt: 0.25,
                        textTransform: "capitalize",
                      }}
                    >
                      {job.company}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      px: 1.5, py: 0.375,
                      bgcolor: "var(--accent-muted)",
                      border: "1px solid var(--accent-border)",
                      borderRadius: 10,
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: "var(--accent)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {job.duration}
                  </Box>
                </Box>

                {/* Description */}
                {job.description && (
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.75,
                      mb: 1.5,
                    }}
                  >
                    {job.description}
                  </Typography>
                )}

                {/* Bullet arrays */}
                {DETAIL_KEYS.map(key => {
                  if (!job[key]?.length) return null
                  return (
                    <Box key={key} component="ul" sx={{ pl: 0, m: 0, mb: 1, listStyle: "none" }}>
                      {job[key].map((item, j) => (
                        <Box
                          key={j}
                          component="li"
                          sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 0.875 }}
                        >
                          <Box
                            sx={{
                              mt: "8px",
                              flexShrink: 0,
                              width: 5, height: 5,
                              borderRadius: "50%",
                              bgcolor: "var(--accent)",
                            }}
                          />
                          <Typography
                            sx={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7 }}
                          >
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )
                })}

                {/* Technology tags */}
                {job.technologies?.length > 0 && (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: 1.5 }}>
                    {job.technologies.map((tech, j) => (
                      <Box
                        key={j}
                        sx={{
                          px: 1.25, py: 0.25,
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          color: "var(--text-muted)",
                          bgcolor: "var(--bg-primary)",
                          border: "1px solid var(--border)",
                          borderRadius: 1,
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                )}
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

/* ─────────────────────────────────────────────────
   SKILLS SECTION  (categorized pill chips)
───────────────────────────────────────────────── */
const SkillsSection = ({ skills }) => {
  if (!skills?.length) return null

  return (
    <Box component="section" id="skills" sx={{ pt: 10, pb: 6 }}>
      <SectionHeader>Skills</SectionHeader>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {skills.map((category, i) => {
          const c = CHIP_COLORS[i % CHIP_COLORS.length]
          return (
            <Box key={i}>
              <Typography
                sx={{
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  mb: 1.75,
                }}
              >
                {category.title}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {(category.items || []).map((skill, j) => (
                  <Box
                    key={j}
                    sx={{
                      px: 1.625, py: 0.5,
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                      color: c.text,
                      bgcolor: c.bg,
                      border: `1px solid ${c.border}`,
                      borderRadius: 1.5,
                      transition: "all 0.15s",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: `0 4px 12px ${c.border}`,
                      },
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

/* ─────────────────────────────────────────────────
   EDUCATION SECTION
───────────────────────────────────────────────── */
const EducationSection = ({ education }) => {
  if (!education?.length) return null

  return (
    <Box component="section" id="education" sx={{ pt: 10, pb: 10 }}>
      <SectionHeader>Education</SectionHeader>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 2.5,
        }}
      >
        {education.map((edu, i) => (
          <Card key={i}>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "0.09em",
                mb: 1,
              }}
            >
              {edu.years}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                lineHeight: 1.35,
                mb: 0.5,
              }}
            >
              {edu.degree}
            </Typography>
            <Typography sx={{ fontSize: "1rem", color: "var(--text-secondary)" }}>
              {edu.institution}
            </Typography>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

/* ─────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────── */
const FooterSection = ({ fm }) => {
  const linkedIn = fm.links?.find(l => l.label === "LinkedIn")
  const email    = fm.links?.find(l => l.href?.startsWith("mailto:"))
  const year     = new Date().getFullYear()

  return (
    <Box
      component="footer"
      className="no-print"
      sx={{
        borderTop: "1px solid var(--border)",
        bgcolor: "var(--bg-card)",
        py: 4,
        px: { xs: 3, md: 6 },
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Typography sx={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
        {fm.footer?.copyright || `© ${year} ${fm.name || ""}. All rights reserved.`}
      </Typography>
      <Box sx={{ display: "flex", gap: 1.75 }}>
        {linkedIn && (
          <Box
            component="a"
            href={linkedIn.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            sx={{
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              transition: "color 0.2s",
              "&:hover": { color: "var(--accent)" },
            }}
          >
            <LinkedInIcon sx={{ fontSize: "1.25rem" }} />
          </Box>
        )}
        {email && (
          <Box
            component="a"
            href={email.href}
            aria-label="Email"
            sx={{
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              transition: "color 0.2s",
              "&:hover": { color: "var(--accent)" },
            }}
          >
            <EmailIcon sx={{ fontSize: "1.25rem" }} />
          </Box>
        )}
      </Box>
    </Box>
  )
}

/* ─────────────────────────────────────────────────
   ROOT PAGE COMPONENT
───────────────────────────────────────────────── */
const ContentPage = () => {
  const [isDark, setIsDark] = useState(false)

  /* Initialise from localStorage / OS preference — browser-only */
  useEffect(() => {
    const saved       = localStorage.getItem("portfolio-theme")
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false
    const dark        = saved ? saved === "dark" : prefersDark
    setIsDark(dark)
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light")
  }, [])

  const toggleDark = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light")
    localStorage.setItem("portfolio-theme", next ? "dark" : "light")
  }

  const data = useStaticQuery(graphql`
    query ProfileContent {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "profile" } } }
        limit: 1
      ) {
        nodes {
          frontmatter {
            name
            role
            tagline
            metrics { value label }
            links   { label href }
            education { degree institution years }
            about {
              highlights { title content items { label text } }
              expertise  { title content }
              impact
            }
            experience {
              title company duration description
              initiatives buildSystem security
              achievements deliverables focus
              impactNote technologies
            }
            skills { title items }
            footer { copyright }
          }
        }
      }
    }
  `)

  const fm = data?.allMarkdownRemark?.nodes?.[0]?.frontmatter || {}

  return (
    <Box sx={{ bgcolor: "var(--bg-primary)", minHeight: "100vh" }}>
      <StickyNav name={fm.name} isDark={isDark} onToggle={toggleDark} />
      <HeroSection fm={fm} />
      <Box sx={{ maxWidth: 1100, mx: "auto", px: { xs: 2.5, sm: 4, md: 6 } }}>
        <AboutSection      tagline={fm.tagline}       about={fm.about}         />
        <ExperienceSection experience={fm.experience}                           />
        <SkillsSection     skills={fm.skills}                                   />
        <EducationSection  education={fm.education}                             />
      </Box>
      <FooterSection fm={fm} />
    </Box>
  )
}

export default ContentPage
