import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, title, image, article }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            keywords
            image
            twitterUsername
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const metaImage = image || site.siteMetadata.image
  const siteUrl = site.siteMetadata.siteUrl

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title || defaultTitle}
      titleTemplate={title ? `%s | ${defaultTitle}` : defaultTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords,
        },
        {
          property: `og:title`,
          content: title || defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: article ? `article` : `website`,
        },
        {
          property: `og:url`,
          content: siteUrl,
        },
        {
          property: `og:image`,
          content: `${siteUrl}${metaImage}`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.twitterUsername || ``,
        },
        {
          name: `twitter:title`,
          content: title || defaultTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: `${siteUrl}${metaImage}`,
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          name: `robots`,
          content: `index, follow`,
        },
        {
          name: `googlebot`,
          content: `index, follow`,
        },
      ]}
    >
      <link rel="canonical" href={siteUrl} />
      
      {/* Structured Data for Person/Professional */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Bhanu Patial",
          "jobTitle": "Lead AI Architect",
          "worksFor": {
            "@type": "Organization",
            "name": "Amdocs"
          },
          "url": siteUrl,
          "sameAs": [
            "https://linkedin.com/in/bhanupatial",
            "https://github.com/bhanupatial"
          ],
          "description": metaDescription,
          "knowsAbout": [
            "AI Architecture",
            "Domain-Enriched AI",
            "Telecom BSS",
            "Agentic AI",
            "Model Context Protocol",
            "Software Architecture",
            "Kubernetes",
            "Kafka"
          ]
        })}
      </script>
    </Helmet>
  )
}

export default SEO

