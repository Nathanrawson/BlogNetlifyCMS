import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Become a Space Investor"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="https://res.cloudinary.com/dng8alzfo/image/upload/v1614440411/spaceinvestor/bill-jelen-woWf_VJ7dNs-unsplash.jpg" alt="Gatsby Scene" />
        <h1>
          Hey{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my new Space Investor bloq</p>
        <p>
          To view all my content follow the Link below
        </p>
        <p>
          Hope you enjoy the read!
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
