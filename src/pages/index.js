import * as React from "react"
import ContentPage from "./content"
import SEO from "../components/seo"

const IndexPage = () => {
  return <ContentPage />
}

export default IndexPage

export const Head = () => (
  <SEO 
    title="Bhanu Patial - Lead Software Architect"
    description="Lead Software Architect with 18+ years building mission-critical telecom billing systems at scale | Deep expertise in platform modernization and AI-augmented engineering"
  />
)
