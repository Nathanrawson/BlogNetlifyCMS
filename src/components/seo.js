/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, keywords, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = "Space Investor Bloq";

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={"Space Investor"}
      titleTemplate={"Space Investor Bloq"}
      meta={[
        {
          name: `description`,
          content: "A Bloq for people interested in the future of Space",
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: "A Bloq for people interested in the future of Space",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "Nathan Rawson"
        },
        {
          name: `twitter:title`,
          content: "Nathan Rawson",
        },
        {
          name: `twitter:description`,
          content: "Nathan Rawson Twitter",
        },
      ]
        .concat(
          keywords.length > 0
            ? {
              name: `keywords`,
              content: 'Space, Investing, Innovation, Bloq',
            }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
