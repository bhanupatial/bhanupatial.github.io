import * as React from "react"
import ContentPage from "./content"
import SEO from "../components/seo"

const IndexPage = () => {
  return <ContentPage />
}

export default IndexPage

export const Head = () => (
  <SEO 
    title="Bhanu Patial - Lead AI Architect"
    description="I turn generic AI into telecom BSS experts using domain-enriched architecture | 18+ years | Lead AI Architect @ Amdocs"
  />
)

